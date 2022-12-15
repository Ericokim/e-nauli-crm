import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { useExportData } from "react-table-plugins";
import Papa from "papaparse";
import XLSX from "xlsx";
import JsPDF from "jspdf";
import "jspdf-autotable";
import { Dropdown, DropdownItem } from "../Dropdown";
import { TablesIcon } from "../../icons";
import { Button, Toggle } from "../Button";


const getExportFileBlob = ({ columns, data, fileType, fileName }) => {
  if (fileType === "csv") {
    // CSV example
    const headerNames = columns.map((col) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  } else if (fileType === "xlsx") {
    // XLSX example
    const header = columns.map((c) => c.exportValue);
    const compatibleData = data.map((row) => {
      const obj = {};
      header.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj;
    });

    let wb = XLSX.utils.book_new();
    let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
      header,
    });
    XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
    XLSX.writeFile(wb, `${fileName}.xlsx`);

    // Returning false as downloading of file is already taken care of
    return false;
  }
  //PDF example
  if (fileType === "pdf") {
    const headerNames = columns.map((column) => column.exportValue);
    const doc = new JsPDF();
    doc.autoTable({
      head: [headerNames],
      body: data,
      margin: { top: 20 },
      styles: {
        minCellHeight: 9,
        halign: "left",
        valign: "center",
        fontSize: 11,
      },
    });
    doc.save(`${fileName}.pdf`);

    return false;
  }
  // Other formats goes here
  return false;
};

const Pagination = ({ children, className, ...rest }) => {
  return (
    <div
      className={`themeSideBackground themeText border-color border-t bg-gray-50 px-4 py-2  ${className}`}
    >
      {children}
    </div>
  );
};

const Tabletop = ({
  children,
  className,
  tableTopSelect,
  ColumnVisibility,
  tableFilter,
  ...rest
}) => {
  return (
    <div className="relative flex flex-row justify-between gap-2">
      <div className="item-start flex flex-row flex-wrap gap-2 gap-x-2 text-sm">
        {tableTopSelect}
        {ColumnVisibility}
      </div>
      <div className="item-center flex flex-row flex-wrap gap-2 gap-x-2">
        {tableFilter}
      </div>
    </div>
  );
};

const Table = ({
  columns,
  data,
  tableTopSelect,
  ColumnVisible,
  tableFilter,
  Paging,
  loading,
  updateMyData,
  skipPageReset,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    allColumns,
    setHiddenColumns,
    exportData,
    state,
  } = useTable(
    {
      columns,
      data,
      updateMyData,
      autoResetPage: !skipPageReset,
      getExportFileBlob,
      getExportFileName: ({ all }) => {
        return `${
          all ? "Revenue Collection Platform" : "Revenue Collection Platform"
        }`;
      },
    },
    useSortBy,
    useExportData
  );

  useEffect(() => {
    setHiddenColumns(
      allColumns
        .filter((column) => !column.isVisible === column.show)
        .map((column) => column.id)
    );
  }, [setHiddenColumns, allColumns]);

  return (
    <section className="z-10 mx-auto max-w-full">
      <Tabletop
        tableTopSelect={tableTopSelect}
        tableFilter={tableFilter}
        ColumnVisibility={
          <>
            {ColumnVisible && (
              <>
                <Dropdown
                  color="gray"
                  title="Column visibility"
                  placement="bottom-start"
                  buttonText={"Columns"}
                  buttonType="outline"
                  size="regular"
                  rounded={false}
                  block={false}
                  hover={true}
                  icon={false}
                  ripple="dark"
                  className="w-sm h-10 font-semibold"
                >
                  {allColumns.map((column) => (
                    <div key={column.id} className="text-sm">
                      <label
                        htmlFor={column.id}
                        className="themetext flex cursor-pointer select-none items-center space-y-2 px-2 py-1 capitalize transition-all duration-300 hover:scale-105 "
                      >
                        <input
                          id={column.id}
                          type="checkbox"
                          className="relative mr-2 inline-block h-5 w-5 rounded border border-gray-500 transition-all duration-300 hover:scale-105"
                          {...column.getToggleHiddenProps()}
                        />
                        {column.Header}
                      </label>
                    </div>
                  ))}
                </Dropdown>

                <Button
                  type="button"
                  title="Export Current Data"
                  color="green"
                  buttonType="outline"
                  size="regular"
                  ripple="light"
                  className="h-10 w-8 font-semibold"
                  rounded={false}
                  block={false}
                  hover={true}
                  iconOnly={false}
                  onClick={() => exportData("csv", false)}
                >
                  {/* <i className="bx bx-export text-xl" /> */}
                  CSV
                </Button>

                {/* <Dropdown
              color="gray"
              placement="bottom-start"
              buttonText={"Export"}
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              icon={false}
              ripple="light"
            >
              {ExportType.map((type, index) => (
                <DropdownItem ripple="light" key={index}>
                  <div
                    className="flex items-center"
                    onClick={() =>
                      type.All === "Export CSV" ? exportData("csv", true) : null
                    }
                  >
                    <TablesIcon className="mr-3 h-4 w-4" aria-hidden="true" />
                    {type.All}
                  </div>
                </DropdownItem>
              ))}
            </Dropdown> */}
              </>
            )}
          </>
        }
      />

      <div className="mt-2 w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="h-full w-full overflow-x-auto overflow-y-auto">
          <span className="pointer-events-auto inset-0 z-10 overflow-y-auto overflow-x-hidden opacity-100 outline-none backdrop-filter transition-all duration-500 focus:outline-none">
            {loading}
          </span>

          <table
            {...getTableProps()}
            className="z-10  h-full w-full table-auto  whitespace-nowrap text-sm"
          >
            <thead className="themeSideBackground themeText border-color border-b bg-gray-50 text-left font-bold uppercase tracking-wide text-gray-500 opacity-80 ">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      scope="col"
                      className="px-3 py-2"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex items-center justify-between">
                        {column.render("Header")}

                        <span className="pl-3">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className="bx bx-sort-down text-xl" />
                            ) : (
                              <i className="bx bx-sort-up text-xl" />
                            )
                          ) : (
                            <i className="bx bx-sort-alt-2 text-2xl text-gray-400 opacity-0 group-hover:opacity-100" />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody
              {...getTableBodyProps()}
              className="themeText themeSideBackground  bg-white "
            >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    className="border-color border-b hover:bg-gray-100 hover:text-gray-800  dark:hover:bg-gray-200 "
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-3 py-2"
                          role="cell"
                        >
                          {cell.column.Cell.name === "defaultRenderer" ? (
                            <span className="text-sm normal-case">
                              {cell.render("Cell")}
                            </span>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination>{Paging}</Pagination>
      </div>
    </section>
  );
};
export default Table;

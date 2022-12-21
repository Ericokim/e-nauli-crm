import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Toggle } from "../../components/Button";
import { Notification, Alert, Message } from "../../components/Alert";
import Moment from "react-moment";
import moment from "moment";
import DataTable from "../../components/Table/DataTable";
import Pagination from "../../components/Table/Pagination";
import SectionTitle from "../../components/Typography/SectionTitle";
import { useStateContext } from "../../context/ContextProvider";
import comma from "../../components/commaSeparator";
import { CSelect, SInput } from "../../components/Input/cInput";
import { FilterIcon, SearchIcon } from "../../icons";
import {
  PopoverItem,
  PopoverHeader,
  PopoverBody,
} from "../../components/Popover/Popover";
import Loader from "../../components/Loader";
import Add from "./Add";
import Update from "./Update";

const Blacklisted = ({ value }) => {
  return (
    <span
      className={`${value ? "status status-success" : "status status-danger"}`}
    >
      {value ? "True" : "False"}
    </span>
  );
};

const Options = [
  {
    value: true,
    label: "Active",
  },
  {
    value: false,
    label: "InActive",
  },
];

const Fleet = () => {
  const dispatch = useDispatch();
  const { currentColor, colorGradient } = useStateContext();

  const [searchTerm, setsearchTerm] = useState("");
  const [saccoId, setsaccoId] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const pageSizes = [10, 25, 50, 100];

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const getVehicles = useSelector((state) => state.getVehicles);
  const { loading, error, vehicles, totalCount } = getVehicles;

  const getSaccos = useSelector((state) => state.getSaccos);
  const { saccos } = getSaccos;

  const tableData = () => {
    const params = {
      page: page,
      pageSize: pageSize,
      isActive: status,
      saccoId: saccoId ? saccoId : "",
    };

    dispatch.getVehicles.Vehicle(params);
    dispatch.getSaccos.Saccos(params);
  };
  useEffect(tableData, [dispatch, page, pageSize, saccoId, status]);

  const onSearch = () => {
    const params = {
      page: page - 1,
      pageSize: pageSize,
    };

    dispatch.getVehicles.Vehicle(params);
  };

  // sacco Options
  let saccoOptions =
    saccos &&
    saccos.map((item) => {
      return { value: item.saccoId, label: item.name };
    });

  const OnRefresh = () => {
    tableData();
    setsearchTerm("");
    setStatus("");
    setsaccoId("");
  };

  const handleShow = (currentTableData) => {
    setShowEditModal(true);
    setCurrentData(currentTableData);
  };

  function handlePageSizeChange(e) {
    setPage(page);
    setPageSize(e.target.value);
  }

  const Columns = useMemo(
    () => [
      {
        Header: "plateNumber",
        accessor: "plateNumber",
      },

      {
        Header: "seatingCapacity",
        accessor: "seatingCapacity",
      },

      {
        Header: "saccoName",
        accessor: "saccoName",
      },

      {
        Header: "Status",
        accessor: "isActive",
        Cell: Blacklisted,
      },
      {
        Header: "primaryTerminus",
        accessor: "primaryTerminus",
        show: true,
      },
      {
        Header: "secondaryTerminus",
        accessor: "secondaryTerminus",
        show: true,
      },

      {
        Header: "createdAt",
        accessor: "modifiedAt",
        Cell: ({ value }) => {
          return <Moment format="DD-MMM-YYYY">{moment.utc(value)}</Moment>;
        },
      },

      {
        Header: "Action",
        accessor: "action",
        Cell: ({ value, column, row }) => {
          const item = row.original;
          return (
            <div className="flex items-center space-x-4">
              <Button
                color="cyan"
                buttonType="fill"
                size="sm"
                rounded={false}
                block={false}
                iconOnly={true}
                ripple="light"
                title="Edit Station"
                onClick={() => handleShow(item)}
              >
                <i className="bx bxs-edit text-xl"></i>
              </Button>

              {/* <Button
                color="red"
                buttonType="fill"
                size="sm"
                rounded={false}
                block={false}
                iconOnly={true}
                ripple="light"
                title="Remove Station"
                // onClick={() => alert(row.original[0])}
              >
                <i className="bx bx-trash text-xl"></i>
              </Button> */}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <main className="mt-4">
      <SectionTitle>Vehicles</SectionTitle>

      <DataTable
        loading={loading ? <Loader /> : <Message>{error}</Message>}
        columns={Columns}
        data={vehicles}
        ColumnVisible={true}
        tableTopSelect={
          <select
            className="w-15 h-10 max-w-sm cursor-pointer rounded-lg px-1 py-1 text-sm leading-3 text-gray-800 shadow-md  focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
            onChange={(e) => handlePageSizeChange(e)}
            value={pageSize}
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        }
        tableFilter={
          <>
            <Button
              color="blueGray"
              buttonType="link"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={true}
              ripple="dark"
              title="Refresh Table"
              onClick={OnRefresh}
            >
              <i className="bx bx-refresh text-2xl" />
            </Button>

            <Button
              type="button"
              color="green"
              size="regular"
              ripple="light"
              buttonType="outline"
              className="w-fit h-10 font-semibold"
              rounded={false}
              block={false}
              hover={true}
              iconOnly={true}
              title="Add Vehicle"
              onClick={() => setShowModal(true)}
            >
              <i className="bx bx-plus text-xl font-bold" />
            </Button>

            <PopoverItem
              align="end"
              // positions={["top", "right", "left", "bottom"]}
              position={["bottom"]}
              className="w-100px"
              Button={
                <Button
                  color="blueGray"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  hover={true}
                  ripple="light"
                  title="Date Filter"
                  className="h-10"
                >
                  <FilterIcon className="mr-1 h-4 w-4 text-white" />
                  Filter By:
                </Button>
              }
            >
              <PopoverBody className={`w-96 px-2 `}>
                <CSelect
                  type="text"
                  label="Status"
                  id="status"
                  name="status"
                  className={"w-100px"}
                  options={Options}
                  value={Options.find((obj) => obj.value === status)}
                  onChange={(e) => setStatus(e.value)}
                  isClearable
                  isSearchable
                />

                <CSelect
                  type="text"
                  id="saccoId"
                  label="Sacco"
                  name="saccoId"
                  className={"w-100px"}
                  options={saccoOptions}
                  value={saccoOptions.find((obj) => obj.value === saccoId)}
                  onChange={(e) => setsaccoId(e ? e.value : null)}
                  isClearable
                  isSearchable
                />
              </PopoverBody>
            </PopoverItem>

            <SInput
              id="SearchUser"
              type="search"
              name="search"
              placeholder="Search..."
              // value={searchTerm}
              // onChange={(e) => setsearchTerm(e.target.value)}
              // onClick={onSearch}
            />
          </>
        }
        Paging={
          <div className="themeText flex flex-col justify-between text-xs sm:flex-row ">
            <span className="flex items-center font-semibold uppercase tracking-wide">
              Showing {comma(page)} - {pageSize} of {comma(totalCount)}
            </span>
            <div className="mt-2 flex sm:mt-auto sm:justify-end">
              <Pagination
                className="text-2xl"
                currentPage={page}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={(e) => setPage(e)}
              />
            </div>
          </div>
        }
      />

      <Add
        tableData={tableData}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Update
        tableData={tableData}
        currentData={currentData}
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
    </main>
  );
};
export default Fleet;

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Toggle } from "../../components/Button";
import { Notification, Alert, Message } from "../../components/Alert";
import { StatsCardC } from "../../components/Cards/StatsCard";
import Moment from "react-moment";
import moment from "moment";
import DataTable from "../../components/Table/DataTable";
import Pagination from "../../components/Table/Pagination";
import SectionTitle from "../../components/Typography/SectionTitle";
import { useStateContext } from "../../context/ContextProvider";
import comma from "../../components/commaSeparator";
import { CSelect, SInput } from "../../components/Input/cInput";
import Loader from "../../components/Loader";
import Add from "./Add";
import Update from "./Update";

const StatusPill = ({ value }) => {
  const [toggle, setToggle] = useState(value);

  const handleClick = () => {
    setToggle(!toggle);
    if (toggle) {
      Alert("error", "Status InActive");
    } else {
      Alert("success", "Status Active");
    }
    console.log(!toggle);
  };

  return (
    <div className="flex items-center py-1">
      <Toggle
        name="status"
        id="status"
        checked={toggle}
        onChange={handleClick}
        text={["Active", "InActive"]}
      />
    </div>
  );
};

const Customers = () => {
  const dispatch = useDispatch();
  const { currentColor, colorGradient } = useStateContext();

  const [searchTerm, setsearchTerm] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const pageSizes = [10, 25, 50, 100];

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const AuthLogin = useSelector((state) => state.AuthLogin);
  const { userInfo } = AuthLogin;

  const getCustomers = useSelector((state) => state.getCustomers);
  const { loading, error, customers, totalCount } = getCustomers;

  const tableData = () => {
    const params = {
      page: page,
      pageSize: pageSize,
    };

    dispatch.getCustomers.Customers(params);
  };
  useEffect(tableData, [dispatch, page, pageSize]);

  const OnRefresh = () => {
    tableData();
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
        Header: "name",
        accessor: "name",
      },
      {
        Header: "phone",
        accessor: "phone",
      },
      {
        Header: "email",
        accessor: "email",
      },
      {
        Header: "address",
        accessor: "address",
      },

      {
        Header: "created At",
        accessor: "createdAt",
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
    <main className="mt-16">
      <SectionTitle>Customers</SectionTitle>

      <DataTable
        loading={loading ? <Loader /> : <Message>{error}</Message>}
        columns={Columns}
        data={customers}
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
              size="sm"
              ripple="light"
              buttonType="outline"
              className="w-fit h-10 font-semibold"
              rounded={false}
              block={false}
              hover={true}
              iconOnly={false}
              title="Add Customer"
              onClick={() => setShowModal(true)}
            >
              <i className="bx bx-plus text-xl font-bold" />
              Add Customer
            </Button>

            <SInput
              id="SearchUser"
              type="search"
              name="search"
              placeholder="Search by id Number"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
              //onClick={onSearch}
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

export default Customers;

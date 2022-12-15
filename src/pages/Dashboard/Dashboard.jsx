import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatsCardC } from "../../components/Cards/StatsCard";
import Fleet from "./Fleet";
import { useStateContext } from "../../context/ContextProvider";
import ReactLoading from "react-loading";

const Loading = () => (
  <div className="fixed z-50">
    <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentColor } = useStateContext();

  return (
    <div className="flex flex-col">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <StatsCardC
            title="Number of fleets"
            stat={1000}
            // statText={"KSH"}
            className={" border-red-500"}
            iconColorClass={"text-red-300"}
            icon={"fas fa-truck"}
            footerColorClass={"text-grey-500"}
            iconFooter="bx bx-time-five"
            // statFooter={"0"}
            textFooter={"Updated 1 minute ago"}
          />

          <StatsCardC
            title="Number of Saccos"
            stat={100}
            // statText={"KSH"}
            className={"border-green-500"}
            iconColorClass={"text-green-300"}
            icon={"fas fa-users"}
            footerColorClass={"text-grey-500"}
            iconFooter="bx bx-time-five"
            // statFooter={"12%"}
            textFooter={"Updated 1 minute ago"}
          />

          <StatsCardC
            title="REVENUE THIS MONTH"
            stat={10000}
            statText={"KSH"}
            className={"border-yellow-500"}
            iconColorClass={"text-yellow-300"}
            icon={"fas fa-chart-bar"}
            footerColorClass={"text-grey-500"}
            iconFooter="bx bx-time-five"
            // statFooter={"12%"}
            textFooter={"Updated 1 minute ago"}
          />

          <StatsCardC
            title="REVENUE THIS YEAR"
            stat={100000}
            statText={"KSH"}
            className={"border-blue-500"}
            iconColorClass={"text-blue-300"}
            icon={"fas fa-money-bill-wave"}
            footerColorClass={"text-grey-500"}
            iconFooter="bx bx-time-five"
            // statFooter={"12%"}
            textFooter={"Updated 1 minute ago"}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <Fleet />
      </div>
    </div>
  );
};

export default Dashboard;

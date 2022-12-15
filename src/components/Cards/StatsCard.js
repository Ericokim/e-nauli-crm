import React from "react";
import comma from "../commaSeparator";

export const StatsCard = ({
  className = "",
  iconColorClass = "",
  footerColorClass = "",
  title = "",
  stat = "",
  icon = null,
  iconFooter = null,
  textFooter = "",
  statFooter = "",
  statSize = "text-6xl",
}) => {
  return (
    <div className="themeSideBackground themeText mb-6 flex w-full min-w-0 flex-col break-words rounded-xl bg-white p-4 shadow-lg  xl:mb-0">
      <div className="flex flex-wrap ">
        <div
          className={`${iconColorClass} -mt-10 mb-0 grid h-20 w-24 items-center justify-center rounded-xl py-4 px-4`}
        >
          <span className="flex items-center justify-center leading-none text-white">
            <i className={`${icon} text-5xl`} />
          </span>
        </div>
        <div className="mb-2 w-full max-w-full flex-1 flex-grow pl-4 text-right">
          {/* <h5 className="mb-1 text-base font-light tracking-wide text-gray-500">
            {title}
          </h5> */}
          <h4 className="text-sm font-semibold uppercase tracking-tight text-gray-500 dark:text-gray-400">
            {title}
          </h4>
          <span className="text-blueGray-700 text-xl font-normal tabular-nums tracking-tight">
            {stat}
          </span>
          {/* <span className="text-3xl text-gray-900">{stat}</span> */}
        </div>
      </div>
      <div className="flex items-center pt-1 text-xs text-gray-400">
        <span className={`${footerColorClass}  text-base leading-none`}>
          <i className={`${iconFooter}`} />
        </span>
        <span className={`${footerColorClass}  ml-1 mr-2`}>{statFooter}</span>
        <span className="whitespace-nowrap font-light">{textFooter}</span>
      </div>
    </div>
  );
};

export const StatsCardB = ({
  className = "",
  classNameb = "",
  iconColorClass = "",
  footerColorClass = "",
  title = "",
  stat = "",
  statText = "",
  icon = null,
  iconFooter = null,
  textFooter = "",
  statFooter = "",
  statSize = "text-6xl",
}) => {
  return (
    // w-full lg:w-6/12 xl:w-3/12 px-3
    <div className="">
      <div
        className={`${className}  border-b-1 mb-6 flex w-full min-w-0 flex-col overflow-hidden break-words rounded-xl border-r-4 bg-white p-4 shadow-lg xl:mb-0 `}
      >
        <div className="flex items-center">
          <span className={`rounded-xl  p-4 ${classNameb}`}>
            <span
              className={`${iconColorClass} flex items-center justify-center text-2xl`}
            >
              <i className={`${icon}`} />
            </span>
          </span>
          <p className="text-md ml-2 text-black">{title}</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className=" my-4  text-left text-4xl font-bold  text-gray-700 dark:text-gray-100">
            {stat}
            <span className="text-sm">{statText}</span>
          </p>

          <div className={`${footerColorClass} flex items-center  text-sm`}>
            <i className={`${iconFooter}`} />

            <span>{statFooter}</span>
            <span className="ml-2 text-gray-400">{textFooter}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StatsCardC = ({
  className,
  classNameb,
  iconColorClass,
  footerColorClass,
  title,
  stat,
  statText,
  statB,
  statTextB,
  icon,
  iconFooter,
  textFooter,
  statFooter,
  statSize = "text-6xl",
}) => {
  return (
    <div
      className={`${className} themeSideBackground themeText hover:shadow-color mb-1 flex min-w-0 cursor-pointer flex-col break-words rounded-xl bg-white shadow-sm  transition duration-200 ease-in hover:scale-105 hover:shadow-md xl:mb-0 `}
    >
      <div className="flex-auto px-4 py-2">
        <div className="flex max-w-4xl flex-wrap ">
          <div className="w-auto max-w-full flex-1 flex-grow pr-4 ">
            <h4 className="text-sm font-semibold uppercase tracking-tight text-gray-500 opacity-80 dark:text-gray-400">
              {title}
            </h4>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tabular-nums tracking-tight opacity-80">
                {statText ? statText : null} {comma(stat)}
              </span>
              <span className="text-lg font-semibold tabular-nums tracking-tight opacity-80">
                {statTextB ? statTextB : null} {statB ? comma(statB) : null}
              </span>
            </div>
          </div>
          <div className="w-auto flex-initial pl-4 ">
            <div className={`${iconColorClass}  text-6xl `}>
              <i className={`${icon}`} />
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-400 ">
          <span className={`${footerColorClass}`}>
            <i className={`${iconFooter}`} /> {statFooter}
          </span>
          <span className="whitespace-nowrap">{textFooter}</span>
        </div>
      </div>
    </div>
  );
};

export const StatsCardD = ({
  className = "",
  classNameb = "",
  iconColorClass = "",
  footerColorClass = "",
  title = "",
  stat = "",
  statText = "",
  icon = null,
  iconFooter = null,
  textFooter = "",
  statFooter = "",
  statSize = "text-6xl",
}) => {
  return (
    <div
      className={`${className}  mb-6 flex min-w-0 flex-col break-words rounded-md shadow-lg xl:mb-0`}
    >
      <div className="flex-auto p-4">
        <div className="flex flex-col items-center p-6">
          <div className="mb-4 text-6xl text-white">
            <i className={`${icon}`} />
          </div>
          <div className="mb-4">
            <h1 className="text-md text-2xl font-semibold text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "../Button";

const csvData = {
  machines: [
    {
      serialNumber: "",
      model: "",
      status: "",
    },
  ],
};

export const ExportCSV = ({ text = "Export to CSV", color, size }) => {
  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToCsv = (e) => {
    e.preventDefault();

    // Headers for each column
    let headers = ["serialNumber,model,status"];

    // Convert data to a csv
    let dataCsv = csvData.machines.reduce((acc, item) => {
      const { serialNumber, model, status } = item;
      acc.push([serialNumber, model, status].join(","));
      return acc;
    }, []);

    downloadFile({
      data: [...headers, ...dataCsv].join("\n"),
      fileName: "machine.csv",
      fileType: "text/csv",
    });
  };

  return (
    <div>
      {/* <button type="button" onClick={exportToCsv} className="btn btn-success">
        <i className="fa-duotone fa-file-csv text-2xl" /> {text}
      </button> */}
      <Button
        type="button"
        color={color}
        size={size}
        ripple="light"
        buttonType="filled"
        className="w-fit mb-2 h-10 font-semibold"
        rounded={false}
        block={false}
        hover={true}
        iconOnly={false}
        title={`${text} file`}
        onClick={exportToCsv}
      >
        <i className="fa-duotone fa-file-csv text-xl font-bold" />
        {text}
      </Button>
    </div>
  );
};

export const ExportJson = ({ text = "Export to JSON" }) => {
  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToJson = (e) => {
    e.preventDefault();
    downloadFile({
      data: JSON.stringify(csvData.machines),
      fileName: "machine.json",
      fileType: "text/json",
    });
  };

  return (
    <div>
      <button type="button" onClick={exportToJson} className="btn btn-primary">
        {text}
      </button>
    </div>
  );
};

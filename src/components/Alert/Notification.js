import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from "../Button/Button";

const MySwal = withReactContent(Swal);

export const Success = ({
  title,
  type,
  message,
  html,
  confirm,
  dismiss,
  callBack,
}) => {
  MySwal.fire({
    title: title,
    text: message,
    html: html,
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: confirm,
    cancelButtonText: dismiss,
    customClass: {
      confirmButton: "btn btn-success bg-green-500",
      cancelButton: "btn btn-danger bg-red-500",
    },
    confirmButtonClass: "btn btn-success bg-green-500",
    cancelButtonClass: "btn btn-danger bg-red-500",
  }).then(({ value, dismiss }) => {
    callBack({ value, dismiss });
  });
};

export const Confirm = ({ title, type, message, html, confirm, dismiss }) => {
  MySwal.fire({
    title: title,
    text: message,
    html: html,
    // type: type,
    buttonsStyling: false,
    showCancelButton: false,
    confirmButtonText: confirm,
    cancelButtonText: dismiss,
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    // confirmButtonClass: "btn btn-success",
    // cancelButtonClass: "btn btn-danger",
  });
};

export const Error = (message) => {
  MySwal.fire({
    text: message,
    buttonsStyling: false,
    type: "error",
    customClass: {
      confirmButton: "btn btn-success",
    },
    // confirmButtonClass: "btn btn-success",
  });
};

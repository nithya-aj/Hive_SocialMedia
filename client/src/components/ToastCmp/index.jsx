import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ToastCmp = ({ err, type }) => {
  const mode = useSelector((state) => state.theme.mode);
  switch (type) {
    case "error":
      toast.error(`${err}`, {
        toastId: "errorToast",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
      break;
    case "warn":
      toast.warn(`${err}`, {
        toastId: "warntoast",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
      break;
    case "success":
      toast.success(`${err}`, {
        toastId: "succestoast",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
      break;
    case "info":
      toast.info(`${err}`, {
        toastId: "infotoast",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
      break;
    default:
      break;
  }
  return null;
};

export default ToastCmp;

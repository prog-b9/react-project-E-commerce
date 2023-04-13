import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const UseNotification = (msg, type) => {
  // mag => message for notifications
  // type => (warn , errror , )
  if (type === "warn")
    toast.warn(msg, {
      className: "style-use-notification",
      
    });
  else if (type === "success")
    toast.success(msg, {
      className: "style-use-notification",
    });
  else if (type === "error")
    toast.error(msg, {
      className: "style-use-notification",
    });
};

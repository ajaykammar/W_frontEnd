// src/components/ToastNotifications/toastService.js
import { toast } from "react-toastify";
const position = {
  autoClose: 2000,
  position: "bottom-right",
  hideProgressBar: true,
};
const toastService = {
  success: (message) => toast.success(message, position),
  error: (message) => toast.error(message, position),
  info: (message) => toast.info(message, position),
  warn: (message) => toast.warn(message, position),
  custom: (content) => toast(content, position), // For custom JSX content
};

export default toastService;

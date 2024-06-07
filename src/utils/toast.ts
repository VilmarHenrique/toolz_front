import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

type ToastProps = {
  type: any;
  message: string;
};
export const ToasAlert = ({ type, message }: ToastProps) =>
  Toast.fire({
    icon: type,
    title: message,
  });

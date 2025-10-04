import {type Id, toast} from "react-toastify";
import * as React from "react";

const MAX_TOASTS = 2;
const activeToasts: Id[] = [];

export function createToast(message: React.ReactNode): Id {
  while (activeToasts.length >= MAX_TOASTS) {
    const oldest = activeToasts.shift();
    if (oldest) toast.dismiss(oldest);
  }

  const id = toast.loading(message);
  activeToasts.push(id);
  return id;
}

export function removeToast(id: Id) {
  const index = activeToasts.indexOf(id);
  if (index > -1) activeToasts.splice(index, 1);
  toast.dismiss(id);
}
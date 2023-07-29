import { store } from "../../app/store";
import { setAppointment } from "./appoSlice";

export const modifyAppointment = (appointment) => {
    store.dispatch(setAppointment(appointment));
 };
import { store } from "../../app/store";
import { setDoctor } from "./doctorSlice";

export const modifyAppointment = (doctor) => {
    store.dispatch(setAppointment(doctor));
 };
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointment: {},
};

export const appoSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
   
  },
});

export const { setAppointment } = appoSlice.actions;
export default appoSlice.reducer;

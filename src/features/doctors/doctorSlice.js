import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: {},
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setdoctor: (state, action) => {
      state.appointment = action.payload;
    },
    setDocInfo: (state, action) => {
        state.DocInfo = { ...state.docInfo, ...action.payload };
      },
   
  },
});

export const { setDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;

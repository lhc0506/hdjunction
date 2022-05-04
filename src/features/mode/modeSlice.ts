import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ModeState {
  status: "Box" | "Circle";
}

const initialState: ModeState = {
  status: "Box",
}

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeToBox: (state) => {
      state.status = "Box";
    },
    changeToCircle: (state) => {
      state.status = "Circle";
    },
  },
});

export const { changeToBox, changeToCircle } = modeSlice.actions;
export default modeSlice.reducer;
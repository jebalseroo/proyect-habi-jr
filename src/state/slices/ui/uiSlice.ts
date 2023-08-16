import { createAsyncThunk, createSlice, Reducer } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UIState } from "./interfaces";

export const initialState: UIState = {
  showNotification: "",
  cantidad: 0,
  Articulo: "",
  Valor: 0
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNotificationAction: (state, action: PayloadAction<string>) => {
      state.showNotification = action.payload;
    },
    saveLocationData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { showNotificationAction , saveLocationData } = uiSlice.actions;

export default uiSlice.reducer as Reducer<typeof initialState>;

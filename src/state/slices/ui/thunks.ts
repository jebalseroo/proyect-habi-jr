import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveLocationData } from "./uiSlice";
import { postInventarios, postVentas } from "@/hooks/useApiServices";

export const postInventario = createAsyncThunk(
  "actionExecuted/getInventario",
  async ({}, { dispatch }) => {
    try {
      const inventario = await postInventarios();
      dispatch(saveLocationData(inventario));
    } catch (error) {
      console.error(error);
    }
  }
);

export const postVenta = createAsyncThunk(
  "actionExecuted/postVentas",
  async ({ data }:any, { dispatch }) => {
    try {
      console.log(data);
      
      const venta = await postVentas(data);
      dispatch(saveLocationData({venta: venta}));
    } catch (error) {
      console.error(error);
    }
  }
);

import axios from "axios";

export const getAllVentas = async () => {
  const { data } = await axios.get("http://localhost:8000/Ventas");
  return { Ventas: data };
};

export const getAllInventario = async () => {
  const { data } = await axios.get("http://localhost:8000/inventario");
  return { Inventario: data };
};

export const postInventarios = async (props) => {
  const { data } = await axios.post("http://localhost:8000/inventario", {
    ...props
  });
  return { Inventario: data };
};

export const postVentas = async (props) => {
  console.log(props);
  const { data } = await axios.post("http://localhost:8000/Ventas", {
    ...props
  });
  return { Ventas: data };
};

export const genericRequestService = async ({
  params,
  body,
  config = {},
  controller = undefined,
} = {}) => {
  const { url, method } = config;

  try {
    const { data } = await axios({
      signal: controller ? controller.signal : undefined,
      url,
      method,
      params: {
        ...(params && {
          ...params,
        }),
      },
      data: {
        ...(body && {
          ...body,
        }),
      },
    });

    return data;
  } catch (error) {
    if (error.message === "canceled") {
      return { error: "request was aborted" };
    }
    console.trace(error.message);
    throw new Error("Error genericRequestService");
  }
};


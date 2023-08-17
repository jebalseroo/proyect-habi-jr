import { getAllVentas, postVentas , getAllInventario} from "./useApiServices";
const useServices = () => {
  const servicesToExecute: Record<string, any> = {
    GET_ALL_VENTAS: async () => {
      const allVentas = await getAllVentas();
      return allVentas;
    },
    GET_ALL_INVENTARIO: async () => {
      const allInventario = await getAllInventario();
      return allInventario;
    },
    POST_VENTAS: async (payload: any) => {
      const allVentas = await postVentas(payload);
      return allVentas;
    },
  };
  const callServices = async ({ services = [] }: any) => {
    let payload = {};
    if (!services.length) return null;
    // eslint-disable-next-line no-restricted-syntax

    for (const service of services) {
      const { name, data } = service;

      const paramsToService = data || {};

      // eslint-disable-next-line no-await-in-loop
      const result = await servicesToExecute[name](paramsToService);

      payload = { ...payload, ...result };
    }

    return { ...payload };
  };
  return { ...servicesToExecute, callServices };
};

export default useServices;

import { useEffect } from "react";
import { postInventario, postVenta } from "@/state/slices/ui/thunks";
import { useDispatch } from "react-redux";

const useActions = ({ actionsOnMount = [] } = {}) => {
  const dispatch = useDispatch();
  const actionsToExecutes = {
    POST_INVENTARIO: (data) => {
      dispatch(postInventario(...data));
    },
    POST_VENTAS: async (data) => {
      console.log(...data);
      await dispatch(postVenta(...data));
    },
  };

  const callActions = async ( actions = []) => {
    if (!actions.length) return null;

    let someError = false;

    for (const action of actions) {
      const { name, data, async } = action;
      if (!actionsToExecutes?.[name]) return null;

      if (async) {
        actionsToExecutes[name]({ ...data, name });
      } else {
        // eslint-disable-next-line no-await-in-loop
        const hasError = await actionsToExecutes[name]({ ...data, name });
        if (hasError) {
          const { payload } = hasError;
          someError = payload;
        }
      }
    }

    return someError;
  };

  useEffect(() => {
    if (!actionsOnMount.length) return;

    callActions(actionsOnMount);
  }, []);

  return { ...actionsToExecutes, callActions };
};

export default useActions;

import {
  saveLocationData,
} from "../../state/slices/ui/uiSlice";
import { useAppDispatch} from "../useReduxHooks";

export const useLocationFacades = () => {
  const dispatch = useAppDispatch();
  const doSaveData = (payload) => {
    dispatch(saveLocationData(payload));
  };
  return { doSaveData};
};

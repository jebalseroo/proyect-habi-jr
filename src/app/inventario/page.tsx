"use client";
import Inputs from "@/componets/generic/inputs";
import Buttons from "@/componets/generic/button/button";
import Menu from "@/componets/menu/menu";
import Tables from "@/componets/generic/tables/tables";
import InventarioStyles from "./inventario.styles";
import { useEffect } from "react";
import { useLocationFacades } from "@/hooks/ui/useUiFacades";
import useServices from "@/hooks/useServices";
import { useAppSelector } from "@/hooks/useReduxHooks";
import useActions from "@/hooks/useAction";

export default function Inevantario() {
  const { callServices } = useServices();
  const { POST_INVENTARIO, POST_VENTAS } = useActions();
  const { cantidad, Articulo, Valor_compra, Inventario } = useAppSelector(
    (state: any) => state.ui
  );

  const { doSaveData } = useLocationFacades();
  const services_on_build = [
    {
      data: {},
      name: "GET_ALL_INVENTARIO",
    },
  ];
  const getInventario = () => {
    (async () => {
      const data = await callServices({ services: services_on_build });
      doSaveData(data);
    })();
  };
  const onclick = () => {
    (async () => {
        POST_INVENTARIO(newInventario);
        getInventario();
    })();
  };
  useEffect(() => {
    getInventario();
  }, []);
  const fecha = new Date();
  const now = fecha.toLocaleDateString("en-US");
  const newInventario = [
    {
      data: {
        Cantidad: 0,
        Descripccion: Articulo || "",
        Valor_Compra: Valor_compra || 0,
        Fecha: now,
        Total_Vendidos: 0,
        Existencias: 0,
      },
      name: "POST_VENTAS",
    },
  ];
  const heders = ["Fecha", "Cantidad", "Descripccion", "Valor_Compra", "Existencias"];

  return (
    <div>
      <Menu />
      <InventarioStyles>
        <div className='inputs-ventas'>
          <Inputs
            name='Articulo'
            placeholder='Articulo'
            label='Articulo'
            required={false}
            type='input'
          />
          <Inputs
            name='Valor_compra'
            placeholder='Valor Compra'
            label='Valor Compra'
            required={false}
            type='number'
          />
          <Buttons label='+' actionOnClick={onclick} />
        </div>
        <div>
          <Tables content={Inventario} heders={heders}></Tables>
        </div>
      </InventarioStyles>
    </div>
  );
}

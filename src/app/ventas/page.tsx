"use client";
import Inputs from "@/componets/generic/inputs";
import Buttons from "@/componets/generic/button/button";
import Menu from "@/componets/menu/menu";
import Tables from "@/componets/generic/tables/tables";
import VentasStyles from "./ventas.styles";
import { useEffect } from "react";
import { useLocationFacades } from "@/hooks/ui/useUiFacades";
import useServices from "@/hooks/useServices";
import { useAppSelector } from "@/hooks/useReduxHooks";
import useActions from "@/hooks/useAction";

export default function Ventas() {
  const { callServices } = useServices();
  const { POST_INVENTARIO, POST_VENTAS } = useActions();
  const { cantidad, Articulo, Valor, Ventas } = useAppSelector((state: any) => state.ui);

  const { doSaveData } = useLocationFacades();
  const services_on_build = [
    {
      data: {},
      name: "GET_ALL_VENTAS",
    },
  ];
  const getVentas = () => {
    (async () => {
      const data = await callServices({ services: services_on_build });
      doSaveData(data);
    })();
  };
  const getInventario = () => {
    POST_INVENTARIO();
  };
  const onclick = () => {
    (async () => {
      // const data = await callServices({ services: newVenta });
      POST_VENTAS(newVenta);
      getVentas()
    })();
  };
  useEffect(() => {
    getVentas();
  }, []);
  const fecha = new Date();
  const now = fecha.toLocaleDateString("en-US");
  const newVenta = [
    {
      data: {
        Cantidad: cantidad || 0,
        Descripccion: Articulo || "",
        Valor_Venta: Valor || 0,
        Valor_Compra: 3000, //funcion que traiga el valor del articulo
        Ganacia: 7000, //funcion que calcule la ganacia
        Fecha: now,
      },
      name: "POST_VENTAS",
    },
  ];
  const heders = [
    "Fecha",
    "Cantidad",
    "Descripccion",
    "Valor_Venta",
    "Valor_Compra",
    "Ganacia",
  ];

  return (
    <div>
      <Menu />
      <VentasStyles>
        <div className='inputs-ventas'>
          <Inputs
            name='cantidad'
            placeholder='00'
            label='Cantidad'
            required={false}
            type='number'
          />
          <Inputs
            name='Articulo'
            placeholder='Articulo'
            label='Articulo'
            required={false}
            type='input'
          />
          <Inputs
            name='Valor'
            placeholder='Valor'
            label='Valor'
            required={false}
            type='number'
          />
          <Buttons label='+' actionOnClick={onclick} />
        </div>
        <div>
          <Tables content={Ventas} heders={heders}></Tables>
        </div>
      </VentasStyles>
    </div>
  );
}

"use client";

import React, { PropsWithChildren } from "react";
import CalculadoraProvider from "./Calculadora/CalculadoraContext";

const Providers: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <CalculadoraProvider>{children}</CalculadoraProvider>;
};

export default Providers;

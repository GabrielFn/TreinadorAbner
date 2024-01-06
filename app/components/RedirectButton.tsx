"use client";

import { PropsWithChildren } from "react";

const RedirectButton: React.FunctionComponent<PropsWithChildren<{className: string; link: string}>> = ({className, link, children}) => {
  return (
    <button className={className} onClick={() => window.open(link, '_blank')}>{children}</button>
  );
};

export default RedirectButton;

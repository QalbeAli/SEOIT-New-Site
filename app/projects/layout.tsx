import React, { ReactNode } from "react";
import Wrapper from "./Wrapper";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Wrapper>{children}</Wrapper>;
};

export default layout;

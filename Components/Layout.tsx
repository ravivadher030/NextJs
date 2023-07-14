import { type } from "os";
import React, { ReactNode } from "react";
import Navbar from "./Navigation/Navbar";

type props = {
  children?: ReactNode;
};
export default function Layout({ children }: props): React.ReactElement {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

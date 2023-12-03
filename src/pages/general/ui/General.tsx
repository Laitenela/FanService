import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header";

export const General = () => {

  return (
    <>
      <Header />
      <Outlet />
      <footer></footer>
    </>
  );
};

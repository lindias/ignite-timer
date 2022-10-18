import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="max-w-6xl h-[calc(100vh_-_10rem)] bg-gray-800 p-10 my-20 mx-auto flex flex-col rounded-lg">
      <Header />
      <Outlet />
    </div>
  );
}

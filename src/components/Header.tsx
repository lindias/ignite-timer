import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={igniteLogo} alt="" />
      <nav className="flex gap-2">
        <NavLink
          to="/"
          title="Timer"
          className="w-12 h-12 flex items-center justify-center text-gray-100 border-y-4 border-y-transparent hover:border-b-4 hover:border-b-green-500 [&.active]:text-green-500"
          end
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="Histórico"
          className="w-12 h-12 flex items-center justify-center text-gray-100 border-y-4 border-y-transparent hover:border-b-4 hover:border-b-green-500 [&.active]:text-green-500"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  );
}

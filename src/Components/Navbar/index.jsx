import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  //Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  //Cuenta
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // tiene una cuenta
  const noAccountLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountLocalStorage || !noAccountLocalState;

  const handleSignOut = () => {
    const stringfieldSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringfieldSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black/60">{parsedAccount?.email}</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mis Ordenes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mi Cuenta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClickCapture={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
          <li className="flex items-center">
            <ShoppingCart />
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="text-lg font-semibold">
          <NavLink to={`${isUserSignOut ? "/sign-in" : "/"}`}>
            Nombre de tienda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/miscellaneous"
            onClick={() => context.setSearchByCategory("miscellaneous")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            onClick={() => context.setSearchByCategory("shoes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Zapatos
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">{renderView()}</ul>
    </nav>
  );
};

export default Navbar;

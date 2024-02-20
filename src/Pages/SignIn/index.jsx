import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Home/Layout";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");

  //Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountLocalStorage || !noAccountLocalState;

  const renderLogIn = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="text-sm font-light">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="text-sm font-light">Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            disabled={!hasUserAnAccount}
            className="w-full py-3 mt-4 mb-2 text-white bg-black rounded-lg disabled:bg-black/40"
          >
            Login
          </button>
        </Link>
        <div className="text-center">
          <a
            className="text-xs font-light underline underline-offset-4"
            href="/"
          >
            Forgot my password
          </a>
        </div>
        <button
          disabled={hasUserAnAccount}
          className="mt-6 border border-black rounded-lg disabled:text-black/40 disabled:border-black/40 py3"
          onClick={() => setView("create-user-info")}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUsuarioInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-light">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="John"
            className="px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none"
          />
        </div>
      </form>
    );
  };

  const renderView = () =>
    view === "create-user-info" ? renderCreateUsuarioInfo() : renderLogIn();

  return (
    <Layout>
      <h1 className="mb-6 text-xl font-medium text-center w-80">Bienvenido</h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;

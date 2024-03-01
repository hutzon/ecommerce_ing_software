import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../Home/Layout";
import MyCarousel from "../../Components/MyCarousel";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Update account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="text-sm font-light">Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className="text-sm font-light">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className="py-3 mt-6 border border-black rounded-lg"
          onClick={() => setView("edit-user-info")}
        >
          Edit
        </button>
      </div>
    );
  };

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-light">
            Tu nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Peter"
            className="px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-light">
            Tu email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="hi@helloworld.com"
            className="px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-light">
            Tu password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className="px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none"
          />
        </div>
        <button
          className="w-full py-3 text-white bg-black rounded-lg"
          onClick={() => {
            setView("user-info"), editAccount();
          }}
        >
          Editar
        </button>
      </form>
    );
  };

  const renderView = () =>
    view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
      <h1 className="mb-6 text-xl font-medium text-center w-80">My account</h1>
      {renderView()}
    </Layout>
  );
}

export default MyAccount;

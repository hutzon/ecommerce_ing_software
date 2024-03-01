import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ShoppingCart() {
  const context = useContext(ShoppingCartContext);

  const openCheckoutSideMenu = () => {
    context.openCheckout();
    context.closeProductDetail();
  };

  return (
    <div
      className="relative flex gap-0.5 items-center"
      onClick={() => openCheckoutSideMenu()}
    >
      <ShoppingCartIcon className="w-6 h-6 fill-none stroke-black cursor-ponter" />
      <div className="absolute botton-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white">
        {context.cartProducts.length}
      </div>
    </div>
  );
}

export default ShoppingCart;

import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } fixed right-1  flex-col bg-white border border-black rounded-lg product-detail`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="mb-2 text-2xl font-medium">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span>{context.productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;

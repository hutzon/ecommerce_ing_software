import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className="w-6 h-6 text-black cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    );
  }
  return (
    <div className="flex items-center justify-between gap-1 mb-3">
      <div className="flex items-center gap-1">
        <figure className="w-20 h-20">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
      </div>
      <p className="text-sm font-light">{title}</p>
      {renderXMarkIcon}
      <div className="flex items-center gap-1">
        <p className="text-lg font-medium">{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
}

export default OrderCard;

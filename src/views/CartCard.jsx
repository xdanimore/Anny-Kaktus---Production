import { CloseOutlined } from "@ant-design/icons";
import { formatPrice } from "../functions/formatPrice";

const CartCard = (props) => {
  return (
    <div className="border-2 max-w-[270px] md:max-w-xl md:bg-neutral-100 md:w-[576px] rounded-lg border-neutral-200 px-6 py-4 h-full md:flex md:justify-between md:items-center lg:items-center lg:h-full">
      <img
        className="w-52 rounded-lg lg:w-32 lg:h-[128px] object-cover"
        src={props.url}
        alt={props.alt}
      />
      <div className="md:flex md:flex-col md:w-56 lg:justify-around lg:w-72">
        <p className="text-lg font-medium my-2 lg:font-bold lg:my-1">
          {props.title}
        </p>

        <div className="flex justify-between">
          <p className="text-md font-medium my-2">
            {formatPrice(props.price)}
          </p>
          <button
            onClick={props.removeFromCart}
            className="lg:px-2 px-3 text-md lg:text-lg flex items-center text-white font-medium bg-flora-second rounded-md transition-all duration-300 hover:bg-flora-secondhover"
          >
            <CloseOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

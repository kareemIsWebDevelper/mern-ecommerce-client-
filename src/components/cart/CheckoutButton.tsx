import {CheckoutButtonProps} from "../../lib/types";

export const CheckoutButton =
    ({ toggleCheckoutList, setToggleCheckoutList }: CheckoutButtonProps) => {
    return (
      <div className="gridCenter">
        <strong className="teal bold header">
            Your Cart Items
        </strong>
        <button
            onClick={() => { setToggleCheckoutList(!toggleCheckoutList) }}
            className={checkout}>
            Checkout
        </button>
      </div>
    )
}

const checkout =
    "bg-white border shadow-xl p-3 my-4 rounded-3xl bold text-xl";
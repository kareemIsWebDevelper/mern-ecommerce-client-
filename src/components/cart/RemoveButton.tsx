import { useContext } from 'react';
import { CartContext } from '../../CartProvider';
import { deleteCartItem } from '../../lib/api/cart';

interface removeButtonProps {
  productId: string;
  setCartItemProducts: any;
  cartItemProducts: any;
}

const RemoveButton = ({ productId, setCartItemProducts, cartItemProducts }: removeButtonProps) => {
  const { cartLength, updateCartLength } = useContext(CartContext);

   const handleRemoveFromCart = async () => {
        await deleteCartItem(productId);

        const remainingProducts = cartItemProducts.filter((item) => item._id !== productId);
        setCartItemProducts(remainingProducts);

        const minCount = cartLength === 0 ? 0 : cartLength - 1;
        updateCartLength(minCount);
  };

  return (
    <button 
      onClick={handleRemoveFromCart}
      className="bg-red-500 p-2 text-white font-bold my-2"
    >
      Remove From Cart
    </button>
  );
};

export default RemoveButton;
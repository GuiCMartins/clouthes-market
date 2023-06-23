import { useContext } from 'react';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icon.styles.js';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext);

  const toogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

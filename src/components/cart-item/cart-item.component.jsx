import { CartItemConatiner, ItemDetail } from './cart-item.styles.js';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemConatiner>
      <img src={imageUrl} alt={name} />
      <ItemDetail>
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </ItemDetail>
    </CartItemConatiner>
  );
};

export default CartItem;

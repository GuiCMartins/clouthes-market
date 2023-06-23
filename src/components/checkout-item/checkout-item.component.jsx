import { useContext } from 'react';
import {
  Arrow,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Quantity,
  RemoveButton,
  Text,
  Value,
} from './checkout-item.styles.js';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemhandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemhandler = () => {
    removeItemToCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <Arrow onClick={removeItemhandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <Text>{`$${price}`}</Text>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

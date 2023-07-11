import { useDispatch, useSelector } from 'react-redux';
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
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const addItemhandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const removeItemhandler = () => {
    dispatch(removeItemToCart(cartItems, cartItem));
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

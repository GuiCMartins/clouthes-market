import { useContext } from 'react';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  Footer,
  Name,
  Price,
  ProductCardButton,
  ProductCardContainer,
} from './product-card.styles.js';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img className="img" src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

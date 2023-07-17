import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles.js';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.components';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;

import React from "react";
import { useSelector } from "react-redux";
import ProdutosItem from "./ProdutosItem";

const filterColors = (colors) => (product) => {
  return !colors.length || colors.includes(product.color);
};

const filterProducts = ({ products }) => {
  const { data, filters } = products;

  const newArray = data
    .filter(filterColors(filters.colors))
    .filter(
      (product) =>
        (!filters.prices.min && !filters.prices.max) ||
        (product.price >= filters.prices.min &&
          product.price <= filters.prices.max) ||
        (filters.prices.min &&
          !filters.prices.max &&
          filters.prices.min <= product.price)
    );

  return newArray;
};

const Products = () => {
  const data = useSelector(filterProducts);

  return (
    <div className="produtos-area">
      {data.length ? (
        data.map((product) => <ProdutosItem product={product} />)
      ) : (
        <h1>
          Não há produtos encontrados de acordo com o filtro de pesquisas!
        </h1>
      )}
    </div>
  );
};

export default Products;

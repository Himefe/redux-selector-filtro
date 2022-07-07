import React from "react";

const ProdutosItem = ({ product }) => {
  const { id, name, color, price } = product;

  const colorOBJ = {
    azul: "blue",
    preta: "#000",
    rosa: "pink",
  };

  return (
    <div className="produto-item_container">
      <div className="photo_titulo">
        <h5>{name}</h5>
      </div>
      <div className="details">
        <p className="cor">
          Cor: <span style={{ background: colorOBJ[color] }}></span>
        </p>
        <p className="price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};

export default ProdutosItem;

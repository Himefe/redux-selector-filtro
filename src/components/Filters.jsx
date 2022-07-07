import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../redux/slices/products";

const selectUniqueColros = ({ products }) =>
  Array.from(new Set(products.data.map(({ color }) => color)));

const Filters = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectUniqueColros);

  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value)
      );
    }
  };

  const handleChecked = (color) => {
    return selectedColors.includes(color);
  };

  const handleApplyFilter = () => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
    dispatch(
      changeFilters({ name: "prices", value: { min: minPrice, max: maxPrice } })
    );
  };

  return (
    <div className="filtro-area">
      <input
        type="range"
        min={0}
        max={100}
        placeholder="Min"
        style={{ display: "block" }}
        value={minPrice || 0}
        onChange={({ target }) => setMinPrice(Number(target.value))}
      />
      Min:{" "}
      {Number(minPrice).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
      <input
        min={0}
        max={100}
        step={1}
        type="range"
        placeholder="Max"
        style={{ display: "block" }}
        value={maxPrice || 0}
        onChange={({ target }) => setMaxPrice(Number(target.value))}
      />
      Max:{" "}
      {Number(maxPrice).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
      <h5>Cores</h5>
      {colors.map((color) => (
        <div className="cores">
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              onChange={handleChange}
              checked={handleChecked(color)}
            />

            {color}
          </label>
        </div>
      ))}
      <div className="button-area">
        <button onClick={handleApplyFilter}>Aplicar Filtro</button>
      </div>
    </div>
  );
};

export default Filters;

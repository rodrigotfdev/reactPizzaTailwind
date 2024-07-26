import React from 'react';


interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}


interface MenuItemProps {
  pizza: Pizza;
}


const formatCurrency = (amount: number): string => {

  return `$${amount.toFixed(2)}`;
};

const MenuItem: React.FC<MenuItemProps> = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

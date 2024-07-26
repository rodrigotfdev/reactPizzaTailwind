import React from 'react';
import { formatCurrency } from "../../utils/helpers";

// Interface para um item do pedido
interface OrderItemProps {
  item: {
    quantity: number;
    name: string;
    totalPrice: number;
  };
  isLoadingIngredients: boolean;
  ingredients: string[];
}

const OrderItem: React.FC<OrderItemProps> = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;

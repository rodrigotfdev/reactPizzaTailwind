import React, { useState, ChangeEvent } from "react";

const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const CreateOrder: React.FC = () => {
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = fakeCart;

  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWithPriority(e.target.checked);
  };

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <form>
        <div>
          <label htmlFor="customer">First Name</label>
          <input type="text" id="customer" name="customer" required />
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <div>
            <input type="tel" id="phone" name="phone" required />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input type="text" id="address" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            id="priority"
            name="priority"
            checked={withPriority}
            onChange={handlePriorityChange}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <button type="submit">Order now</button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';


interface MenuItem {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  imageUrl: string;
  soldOut: boolean;
}


interface MenuResponse {
  data: MenuItem[];
}


interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status?: string;
}


interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}


interface OrderResponse {
  data: Order;
}


interface NewOrder {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
}


interface UpdateOrder {
  priority?: boolean;
  estimatedDelivery?: string;
  cart?: CartItem[];
  position?: string;
}

export async function getMenu(): Promise<MenuItem[]> {
  const res = await fetch(`${API_URL}/menu`);
  
  if (!res.ok) throw new Error('Failed getting menu');

  const { data }: MenuResponse = await res.json();
  return data;
}

export async function getOrder(id: string): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);
  
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data }: OrderResponse = await res.json();
  return data;
}

export async function createOrder(newOrder: NewOrder): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed creating your order');
    
    const { data }: OrderResponse = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed creating your order');
  }
}

export async function updateOrder(id: string, updateObj: UpdateOrder): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed updating your order');
    // We don't need the data, so we don't return anything
  } catch (error) {
    throw new Error('Failed updating your order');
  }
}

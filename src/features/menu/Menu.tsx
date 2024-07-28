
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";


interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}


type LoaderData = Pizza[];


export default function Menu() {
  const menu = useLoaderData() as LoaderData;



  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Loader function for fetching menu data
export async function Loader(): Promise<LoaderData> {
  const menu = await getMenu();
  return menu;
}

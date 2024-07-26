interface Coordinates {
  latitude: number;
  longitude: number;
}

interface AddressData {
  countryName: string;
  countryCode: string;
  state: string;
  city: string;
  locality: string;
  [key: string]: any;
}

export async function getAddress({
  latitude,
  longitude,
}: Coordinates): Promise<AddressData> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );

  if (!res.ok) {
    throw new Error("Failed getting address");
  }

  const data: AddressData = await res.json();
  return data;
}

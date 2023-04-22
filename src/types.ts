export type CartItemType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type ProductItemType = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export type NotificationType = {
  status: string;
  title: string;
  message: string;
};

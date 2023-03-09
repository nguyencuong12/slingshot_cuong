export interface productOrderInf {
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: number;
  amount: number;
}

export interface facebookRequestOrder {
  userOrder?: string;
  phoneOrder: string;
  addressOrder: string;
  productOrder?: productOrderInf[];
}

export interface facebookResponseOrder {
  user: string;
  phone: string;
  address: string;
  totalPrice: number;
  productOrder: productOrderInf[];
  orderID: string;
}

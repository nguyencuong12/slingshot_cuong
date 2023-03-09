import { productOrderInf } from "@/interfaces/facebook";

export class FacebookOrderRequestClass {
  userOrder: string;
  phoneOrder: string;
  addressOrder: string;
  productOrder: productOrderInf[];
  orderID: string;

  constructor(
    orderID: string,
    user: string,
    phone: string,
    address: string,
    productOrder: productOrderInf[]
  ) {
    this.userOrder = user;
    this.phoneOrder = phone;
    this.addressOrder = address;
    this.productOrder = productOrder;
    this.orderID = orderID;
  }
}

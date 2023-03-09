import { MainAxios } from "@/axios/mainAxios";
import { facebookRequestOrder } from "@/interfaces/facebook";

let url = "/facebooks";
export const FacebookAPI = {
  facebookOrderRequest: (orderInfo: facebookRequestOrder) => {
    return MainAxios({
      method: "post",
      url: url + "/orders",
      data: orderInfo,
    });
  },
};

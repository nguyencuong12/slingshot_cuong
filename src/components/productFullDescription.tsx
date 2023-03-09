import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Grid, Title, Flex, Button, Modal, Image } from "@mantine/core";
import TextComponent from "./text";
import { ShoppingBag } from "react-feather";
import { FacebookAPI } from "@/api/facebook";
import { FacebookOrderRequestClass } from "@/classes/facebook";
import { uuid } from "uuidv4";
import { facebookResponseOrder } from "@/interfaces/facebook";

interface productProps {
  title: string;
  price: number;
  description: string;
}
const ProductFullDescription = ({
  title,
  price,
  description,
}: productProps) => {
  const [opened, setOpened] = useState(false);
  const [amount, setAmount] = useState(1);
  const handleSubtractAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      >
        <div style={{ textAlign: "center" }}>Order Success</div>
      </Modal>
      <Grid gutter={5} mt={20}>
        <Grid.Col lg={4} sm={6} pl={5}>
          <Image
            height={400}
            radius="md"
            src="https://image.winudf.com/v2/image1/Y29tLmNvbWJvYXBwZGVsaXZlcnkuYXBwX3NjcmVlbl8wXzE1OTk5MTgyNDRfMDE5/screen-0.jpg?fakeurl=1&type=.webp"
            alt="Random image"
          />
        </Grid.Col>
        <Grid.Col lg={8} sm={6} pl={10}>
          <Flex direction={"column"} gap={10}>
            <Title order={4}>{title}</Title>
            <Flex>
              <div>Giá :</div>
              <CurrencyFormat
                style={{ color: "red" }}
                displayType="text"
                thousandSeparator={true}
                suffix={"đ"}
                value={price}
              ></CurrencyFormat>
            </Flex>
            <Button.Group>
              <Button
                variant="default"
                size={"xs"}
                onClick={handleSubtractAmount}
              >
                -
              </Button>
              <Button variant="default" size={"xs"}>
                {amount}
              </Button>
              <Button
                variant="default"
                size={"xs"}
                onClick={handleIncreaseAmount}
              >
                +
              </Button>
            </Button.Group>
            <div>View: </div>
            <TextComponent title={description}></TextComponent>
            <Flex gap={10}>
              <Button
                miw={160}
                size={"xs"}
                color={"cyan"}
                leftIcon={<ShoppingBag size={15} />}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                miw={160}
                size={"xs"}
                color={"green"}
                leftIcon={<ShoppingBag size={15} />}
                onClick={async () => {
                  let response = await FacebookAPI.facebookOrderRequest(
                    new FacebookOrderRequestClass(
                      uuid(),
                      "cuong",
                      "0978531164",
                      "73 đường ĐHT 31",
                      [
                        {
                          productName: "PRODUCT NAME",
                          productDescription: "PRODUCT DESCRIPTION",
                          productImage: "PRODUCT IMAGE",
                          productPrice: price,
                          amount: 2,
                        },
                        {
                          productName: "PRODUCT NAME",
                          productDescription: "PRODUCT DESCRIPTION",
                          productImage: "PRODUCT IMAGE",
                          productPrice: price + 200,
                          amount: 3,
                        },
                      ]
                    )
                  );
                  let orderResponse: facebookResponseOrder = response.data;
                  if (orderResponse) {
                    setOpened(!opened);
                  }
                  console.log("ORDER RESPONSE", orderResponse);
                }}
              >
                Mua Ngay
              </Button>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ProductFullDescription;

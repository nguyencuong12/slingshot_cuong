import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Grid, Title, Flex, Button } from "@mantine/core";
import TextComponent from "./text";
import { ShoppingBag } from "react-feather";
interface productProps {
    title: string;
    price: number;
    description: string;
}
const ProductFullDescription = ({ title, price, description }: productProps) => {
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
        <Grid gutter={5}>
            <Grid.Col lg={4} sm={6}>
                12321
            </Grid.Col>
            <Grid.Col lg={8} sm={6}>
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
                        <Button variant="default" size={"xs"} onClick={handleSubtractAmount}>
                            -
                        </Button>
                        <Button variant="default" size={"xs"}>
                            {amount}
                        </Button>
                        <Button variant="default" size={"xs"} onClick={handleIncreaseAmount}>
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
                        >
                            Mua Ngay
                        </Button>
                    </Flex>
                </Flex>
            </Grid.Col>
        </Grid>
    );
};

export default ProductFullDescription;

import ProductFullDescription from "@/components/productFullDescription";
import React, { useState } from "react";
import { Button, Table, Avatar, Checkbox, Flex } from "@mantine/core";
const elements = [
  { position: "Hello", mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
const YourCart = () => {
  const [amount, setAmount] = useState(1);
  const handleSubtractAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
  };
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Flex align={"center"} gap={25}>
          <Checkbox
            onChange={() => {
              console.log("H", element);
            }}
          ></Checkbox>
          <Avatar
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJAYp3xl075YImjrM2JBKqsTvE0UedEd8tA&usqp=CAU"
            }
            radius="xs"
            size="lg"
          />
        </Flex>
      </td>
      <td>
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
      </td>
      <td>{element.mass}</td>
      <td>
        <Button>Xóa</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Số tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <ProductFullDescription
        title="This is test product"
        price={1000000}
        description="This is test description"
      ></ProductFullDescription>
    </div>
  );
};

export default YourCart;

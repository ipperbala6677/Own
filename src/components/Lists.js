import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Table,
  Col,
  CloseButton,
} from "reactstrap";

const Lists = ({ inventoryData, setInventoryData }) => {
  const [quantity, setQuantity] = useState("");
  const [inputText, setInputText] = useState("");
  const handleAdd = () => {
    if (!inputText) {
      alert("Please Enter Item Name");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      name: inputText,
      quantity: quantity,
    };
    const tempInventoryData = [...inventoryData];
    tempInventoryData.push(item);
    setInventoryData(tempInventoryData);
    setInputText("");
    setQuantity("");
  };

  const handleDelete = (id) => {
    const remainingItems = inventoryData.filter((item) => item.id !== id);
    setInventoryData(remainingItems);
  };

  const handleClearAll = () => {
    setInventoryData([]);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <div style={{ display: "flex" }}>
              <span style={{ textAlign: "left", marginRight: "37%" }}>
                {" "}
                <h3 style={{ fontSize: "25px" }}>Item Name *</h3>
              </span>
              <span style={{ textAlign: "right", marginLeft: "33%" }}>
                {" "}
                <h3 style={{ fontSize: "25px" }}>Quantity *</h3>
              </span>
            </div>

            <div style={{ display: "flex" }}>
              <Input
                style={{ marginRight: "2%", backgroundColor: "#f2f2f2" }}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
              <Input
                style={{ width: "100px", backgroundColor: "#f2f2f2" }}
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              ></Input>
              <Button color="primary" onClick={handleAdd}>
                Add
              </Button>
            </div>

            <div
              style={{
                textAlign: "left",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              To get started, add 1 or more items
            </div>

            <h3
              style={{
                textAlign: "left",
                fontSize: "25px",
                padding: "10px",
                backgroundColor: "#f2f2f2",
                width: "100%",
                marginTop: "15px",
              }}
            >
              Inventory List
            </h3>
            <Table className="">
              <tbody>
                {inventoryData.map((item) => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>Quantity: {item.quantity}</td>

                    <td>
                      <div
                        style={{ cursor: "pointer", color: "#d73838" }}
                        onClick={() => handleDelete(item.id)}
                      >
                        <b>X</b>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{ paddingInline: "5% 5%" }}
                outline
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };

import React, { useState } from "react";
import { Card, CardBody, Input, Button, Table } from "reactstrap";
import "./../App.css";

const Lists = ({ inventoryData, setInventoryData }) => {
  const [quantity, setQuantity] = useState("");
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(() => {
    const storedCounter = localStorage.getItem("counter");
    return storedCounter !== null ? parseInt(storedCounter) : 0;
  });

  const handleAdd = () => {
    if (checkValidation()) {
      const item = {
        id: counter + 1,
        name: inputText,
        quantity: quantity,
      };
      const tempInventoryData = [...inventoryData];
      tempInventoryData.push(item);
      setInventoryData(tempInventoryData);
      localStorage.setItem("inventory-data", JSON.stringify(tempInventoryData));
      localStorage.setItem("counter", counter + 1);
      setCounter(counter + 1);
      setInputText("");
      setQuantity("");
    }
  };

  const checkValidation = () => {
    if (!inputText || !quantity) {
      alert("Please enter required fields");
      return false;
    }
    if (quantity <= 0) {
      alert("Quantity should be greater than 0");
      setQuantity("");
      return false;
    }
    return true;
  };

  const handleDelete = (id) => {
    const remainingItems = inventoryData.filter((item) => item.id !== id);
    setInventoryData(remainingItems);
  };

  const handleClearAll = () => {
    setInventoryData([]);
    localStorage.removeItem("inventory-data");
    localStorage.removeItem("counter");
    setCounter(0);
  };

  const handleIncrementQuantity = (id) => {
    const index = inventoryData.findIndex((item) => item.id === id);
    if (index !== -1) {
      const tempInventoryData = [...inventoryData];
      tempInventoryData[index].quantity =
        parseInt(tempInventoryData[index].quantity) + 1;
      setInventoryData(tempInventoryData);
    }
  };

  const handleDecrementQuantity = (id) => {
    const index = inventoryData.findIndex((item) => item.id === id);
    if (index !== -1 && inventoryData[index].quantity !== 1) {
      const tempInventoryData = [...inventoryData];
      tempInventoryData[index].quantity =
        parseInt(tempInventoryData[index].quantity) - 1;
      setInventoryData(tempInventoryData);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <div
              className="flex-container"
              style={{
                width: "93%",
              }}
            >
              <h5>Item Name *</h5>
              <h5>Quantity *</h5>
            </div>
            <div
              className="flex-container"
              style={{
                width: "100%",
              }}
            >
              <Input
                style={{ marginRight: "2%", backgroundColor: "#f2f2f2" }}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
              <Input
                style={{ width: "100px", backgroundColor: "#f2f2f2" }}
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                type={"number"}
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

            <h3 className="title">Inventory List</h3>
            <Table>
              <tbody>
                {inventoryData.map((item) => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ width: "20%" }}>
                          Quantity: {item.quantity}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: "12px",
                          }}
                        >
                          <div
                            className="transform"
                            onClick={() => handleIncrementQuantity(item.id)}
                          >
                            V
                          </div>
                          <div
                            style={{ cursor: "pointer", marginTop: "-8px" }}
                            onClick={() => handleDecrementQuantity(item.id)}
                          >
                            V
                          </div>
                        </div>
                      </div>
                    </td>

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

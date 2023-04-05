import React, { useState } from "react";
import { Card, CardBody, CardHeader, Input, Button, Table } from "reactstrap";

const Lists = ({ inventoryData, setInventoryData }) => {
  const [inputText, setInputText] = useState("");
  const handleAdd = () => {
    if (!inputText) {
      alert("Please Enter Item Name");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      name: inputText,
      quantity: 0,
    };
    const tempInventoryData = [...inventoryData];
    tempInventoryData.push(item);
    setInventoryData(tempInventoryData);
    setInputText("");
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
            <div style={{ textAlign: "left", marginBottom: "8px" }}>
              {" "}
              Item Name *
            </div>
            <div style={{ display: "flex" }}>
              <Input
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
              <Button color="primary" onClick={handleAdd}>
                Add
              </Button>
            </div>
            <div style={{ textAlign: "left", marginTop: "8px" }}>
              To get started, add 1 or more items
            </div>
            <Table striped className="">
              <thead>
                <tr>
                  <th>Inventory List</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>
                      <div
                        style={{ cursor: "pointer", color: "#d73838" }}
                        onClick={() => handleDelete(item.id)}
                      >
                        X
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button outline onClick={handleClearAll}>
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

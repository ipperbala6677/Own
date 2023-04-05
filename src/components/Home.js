import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = ({ inventoryData }) => {
  const navigate = useNavigate();

  const handleEditList = () => {
    navigate("/lists");
  };
  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <button className="btn btn-primary" onClick={handleEditList}>
              Edit List
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };

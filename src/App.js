import "./App.css";
import { useState } from "react";
import { Lists, MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [inventoryData, setInventoryData] = useState([
    // { id: 1, name: "Item 1", quantity: 4 },
    // { id: 2, name: "Item 2", quantity: 3 },
    // { id: 3, name: "Item 3", quantity: 2 },
  ]);

  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home inventoryData={inventoryData} />} />
          <Route
            path="/lists"
            element={
              <Lists
                inventoryData={inventoryData}
                setInventoryData={setInventoryData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

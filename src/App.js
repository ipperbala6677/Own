import "./App.css";
import { useState } from "react";
import { Lists, MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [inventoryData, setInventoryData] = useState(() => {
    const dataFromStorage = localStorage.getItem("inventory-data");
    return dataFromStorage !== null ? JSON.parse(dataFromStorage) : [];
  });

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

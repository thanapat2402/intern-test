import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Routes, Route } from "react-router-dom";
import { FormProps } from "./interfaces/FormProps";
import { MyForm } from "./components/Form";
import { Report } from "./components/Report";

function App() {
  const [formValues, setFormValues] = useState<FormProps>();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MyForm formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route path="/info" element={<Report formValues={formValues} />} />
      </Routes>
    </div>
  );
}

export default App;

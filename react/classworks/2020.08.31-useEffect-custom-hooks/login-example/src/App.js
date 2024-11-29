import React from "react";
import "./styles.css";
import { Form } from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

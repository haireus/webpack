import { ClickCounter } from "./ClickCounter";
import { Button } from "antd";
import React from "react";
import IMAGE1 from "./assets/images/phone.webp";
import "./styles.scss";

export const App = () => {
  return (
    <div>
      <img src={IMAGE1} alt="" />
      <h1>Haireus test react refresh webpack</h1>
      <ClickCounter />

      {/* <Input /> */}

      <Button type="primary">Haireus</Button>
    </div>
  );
};

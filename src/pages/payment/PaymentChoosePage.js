import React from "react";
import { ChoosePayMethod } from "../../components/payment/ChoosePayMethod";

export const PaymentChoosePage = () => {
  return (
    <div className="bg-light" style={{minHeight:"80vh"}}>
      <div className="container">
        <ChoosePayMethod />
      </div>
    </div>
  );
};

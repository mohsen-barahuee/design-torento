import React from "react";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import PriceCards from "../../modules/price-cards/PriceCards";

export default function Pricing() {
  return (
    <div>
      <PriceCards />
      <ClientMessages />
    </div>
  );
}

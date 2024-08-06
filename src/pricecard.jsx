// src/components/PriceCard.js
import React from 'react';
import './pricecard.css';

const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h2>{plan.name}</h2>
      <h3>{plan.price}</h3>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.enabled ? 'enabled' : 'disabled'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PriceCard;

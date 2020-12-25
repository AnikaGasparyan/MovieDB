import React from "react";
import "./carousel.component.css";
import { Card } from "../cards/CardComponent";

export const Carousel = ({ items = [] }) => {
  const width = "150px";
  

  return (
    <div className="carousel">
      {items.map(item => {
        return <Card item={item} key={item.id} width={width} />;
      })}
    </div>
  );
};

import React from "react";
import "./carousel.component.css";
import { Card } from "../cards/card.component";

export const Carousel = ({ items = [] }) => {
  const width = "150px";
  

  return (
    <div className="carousel">
      {items.map(item => {
        console.log(item)
        return <Card item={item} key={item.id} width={width} />;
      })}
    </div>
  );
};

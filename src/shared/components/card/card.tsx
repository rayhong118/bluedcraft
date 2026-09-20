import type React from "react";
import "./card.scss";

interface CardProps {
  fluid?: boolean;
  children?: React.ReactNode;
  title?: string;
}

function CardComponent({ title, fluid, children }: CardProps) {
  return (
    <div className={fluid ? "card-fluid" : "card"}>
      {title && <h2 className="cardTitle">{title}</h2>}
      {children}
    </div>
  );
}

export default CardComponent;

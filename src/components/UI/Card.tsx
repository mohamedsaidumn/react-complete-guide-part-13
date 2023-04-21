import classes from "./Card.module.css";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: String;
}

const Card = (props: CardProps) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;

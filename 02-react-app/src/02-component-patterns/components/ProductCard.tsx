import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

import { LazyExoticComponent } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: ShoppingPage,
    name: "Shopping",
  },
];

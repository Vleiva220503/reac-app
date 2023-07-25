import { lazy,LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { NoLazy } from "../pages/NoLazy";
//import {LazyLayout} from "../layout/LazyLayout";

type JSXComponent = () => JSX.Element;

interface Route {
  top: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent ;
  name: string;
}

//const LazyLayout = lazy (() => import(/*LazyLayout*/'../layout/LazyLayout'));
//const lazy2 = lazy (() => import(/**/'../pages/LazyPage2'));
//const lazy3 = lazy (() => import(/**/'../pages/LazyPage3'));

export const routes: Route[] = [
  {
    top: "LazyPage1",
    path: "lazyload/",
    Component: LazyPage1,
    name: "LazyPage1",
  },
  {
    top: "/lazy2",
    path: "lazy2",
    Component: NoLazy,
    name: "No Lazy",
  },
  {
    top: "/lazy3",
    path: "lazy3",
    Component: NoLazy,
    name: "No lazy",
  },
];


import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";
// import { LazyPages, LazyPages2, LazyPages3 } from "../lazyload/pages";


type JSXComponent  =() => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component:LazyExoticComponent< JSXComponent>| JSXComponent,
    name: string
}


const lazyload = lazy(()=> import (/* webpackChunkName: "LazyLayout" */'../lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(()=> import (/* webpackChunkName: "LazyPage2" */'../lazyload/pages/LazyPages2'));
// const Lazy3 = lazy(()=> import (/* webpackChunkName: "LazyPage3" */'../lazyload/pages/LazyPages3'));



export const routes:Route[] = [
    {
      
        to:'/lazyload/',  //ruta principal 
        path:'/lazyload/*', // rutas hijas /*
        Component: lazyload,
        name:'lazy-layout - Dash'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'no-lazt'
    },
   
];
import { PATH } from "../const/path";
import Admin from "../pages/index";
import Product from "../pages/product";
import Category from "../pages/category";

const routes = [
  { path: PATH.ADMIN, element: <Admin /> },
  { path: PATH.PRODUCT, element: <Product /> },
  { path: PATH.CATEGORY, element: <Category /> },
];

export default routes;

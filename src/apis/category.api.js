import { DOMAIN, SCHEME } from "../const/api";
import callApi from "../utils/apiCaller";

const headers = {
  //prettier-ignore
  "Content-Type": "application/json",
};

export const getCategories = (params) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "get",
    url: `${SCHEME}://${DOMAIN}/product-category/`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    params,
  };
  return callApi(config);
};

export const getCategoryDetail = (id, params) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "get",
    url: `${SCHEME}://${DOMAIN}/product-category/${id}`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    params,
  };
  return callApi(config);
};

export const createCategory = (data) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "post",
    url: `${SCHEME}://${DOMAIN}/product-category/`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    data,
  };
  return callApi(config);
};

export const deleteCategory = (id) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "delete",
    url: `${SCHEME}://${DOMAIN}/product-category/${id}/`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
  };
  return callApi(config);
};

export const updateCategory = (id, data) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "put",
    url: `${SCHEME}://${DOMAIN}/product-category/${id}/`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    data,
  };
  return callApi(config);
};

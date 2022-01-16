/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getCategories } from "../apis/category.api";
import { createProduct } from "../apis/product.api";
import toast from "react-hot-toast";

export default function FormCreateProduct() {
  const [categories, setCategories] = useState([]);
  const sizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"];

  const getData = async () => {
    try {
      let res = await getCategories({});
      if (res.status === 200) {
        let data = res?.data?.data?.data;

        let categories = data?.map((i) => {
          let id = i?._id;
          let name = i?.category;
          return { id, name };
        });

        setCategories(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (data) => {
    let size = sizes
      .map((size) => {
        if (data[`size-${size}`]?.checked) {
          return size;
        }
        return null;
      })
      ?.filter((size) => size);

    let formData = new FormData();
    Object.keys(data?.productImages?.files)?.forEach((e) => {
      formData.append("productImages", data?.productImages?.files[e]);
    });
    formData.append("productName", data?.productName?.value);
    formData.append("categoryId", data?.categoryId?.value);
    formData.append("size", size);
    formData.append("origin", data?.origin?.value);
    formData.append("brand", data?.brand?.value);
    formData.append("price", data?.price?.value);
    formData.append("description", data?.description?.value);

    // let dataReq = {
    //   productName: data?.productName?.value,
    //   categoryId: data?.categoryId?.value,
    //   productImages: [],
    //   size: size,
    //   origin: data?.origin?.value,
    //   brand: data?.brand?.value,
    //   price: data?.price?.value,
    //   description: data?.description?.value,
    // };

    try {
      const res = await createProduct(formData);
      const finish = async () => {
        res;
      };
      toast.promise(finish(), {
        loading: "Process...",
        success: (e) => {
          return "Create success";
        },
        error: (e) => {
          return e?.response?.data?.message || "Create failed";
        },
      });
    } catch (err) {
      let data = err?.response?.data;
      if (data) {
        toast.error(data.message);
      } else {
        toast.error("Create failed");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form
        role="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target);
        }}
      >
        <div className="form-group">
          <label>Name *</label>
          <input className="form-control" name="productName" required />
        </div>
        <div className="form-group">
          <label>Category *</label>
          <select className="form-control" required name="categoryId">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Product images</label>
          <input type="file" multiple name="productImages" />
        </div>
        <div className="form-group">
          <label style={{ marginRight: 10 }}>Size</label>
          {sizes.map((size, index) => (
            <label key={index} className="checkbox-inline">
              <input type="checkbox" name={`size-${size}`} />
              {size}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label>Origin *</label>
          <input className="form-control" required name="origin" />
        </div>
        <div className="form-group">
          <label>Brand *</label>
          <input className="form-control" required name="brand" />
        </div>
        <div className="form-group">
          <label>Price (VND) *</label>
          <input className="form-control" type="number" required name="price" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue={""}
            name="description"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ float: "right" }}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-default"
          style={{ float: "right", margin: "0px 5px" }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

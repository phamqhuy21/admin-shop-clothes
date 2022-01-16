/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getCategories, updateCategory } from "../apis/category.api";
import toast from "react-hot-toast";

export default function FormUpdateCategory({ data }) {
  const handleSubmit = async (data) => {
    let dataReq = {
      category: data?.category?.value,
      description: data?.description?.value,
    };

    try {
      const res = await updateCategory(data?._id, dataReq);
      const finish = async () => {
        res;
      };
      toast.promise(finish(), {
        loading: "Process...",
        success: (e) => {
          return "Update success";
        },
        error: (e) => {
          return e?.response?.data?.message || "Update failed";
        },
      });
    } catch (err) {
      let data = err?.response?.data;
      if (data) {
        toast.error(data.message);
      } else {
        toast.error("Update failed");
      }
    }
  };

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
          <input
            className="form-control"
            name="category"
            required
            defaultValue={data?.category}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue={data?.description}
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

/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import toast from "react-hot-toast";
import { createCategory } from "../apis/category.api";

export default function FormCreateCategory() {
  const handleSubmit = async (data) => {
    let dataReq = {
      category: data?.category?.value,
      description: data?.description?.value,
    };

    try {
      const res = await createCategory(data?._id, dataReq);
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
          <input className="form-control" name="category" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" rows={3} name="description" />
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

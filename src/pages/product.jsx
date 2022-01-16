/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from "moment";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteProduct, getProducts } from "../apis/product.api";
import FormCreateProduct from "../components/FormCreateProduct";
import FormUpdateProduct from "../components/FormUpdateProduct";
import Table from "../components/Table";

export default function product() {
  const [currentTab, setCurrentTab] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
    total: 0,
  });
  const [dataTable, setDataTable] = useState([]);
  const [productSelected, setProductSelected] = useState();

  const columns = [
    "ID",
    "Name",
    "Category id",
    "Brand",
    "Origin",
    "Size",
    "Price",
    "Date",
    "Description",
    "Action",
  ];

  const handleDelete = async (id) => {
    try {
      let res = await deleteProduct(id);
      const finish = async () => {
        res;
      };
      toast.promise(finish(), {
        loading: "Process...",
        success: (e) => {
          getData();
          return "Delete success";
        },
        error: (e) => {
          return e?.response?.data?.message || "Delete failed";
        },
      });
    } catch (err) {
      let data = err?.response?.data;
      if (data) {
        toast.error(data.message);
      } else {
        toast.error("Delete failed");
      }
    }
  };

  const getData = async () => {
    try {
      let res = await getProducts({
        page: pagination.page,
        limit: pagination.limit,
      });
      if (res.status === 200) {
        let data = res?.data?.data?.data;
        setPagination({
          page: res?.data?.data?.page,
          limit: res?.data?.data?.limit,
          total: res?.data?.data?.total,
        });
        let dataTable = data?.map((i) => {
          let id = i?._id;
          let name = i?.productName;
          let categoryId = i?.categoryId;
          let brand = i?.brand;
          let origin = i?.origin;
          let size = i?.size?.toString();
          let price = i?.price;
          let date = moment(i?.createdAt).format("DD/MM/YYYY HH:mm");
          let description = i?.description;
          let action = (
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                type="button"
                className="btn btn-default"
                style={{ marginRight: 5 }}
                data-toggle="modal"
                data-target="#edit"
                onClick={() => {
                  setProductSelected(i);
                }}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#delete"
                onClick={() => {
                  setProductSelected(i);
                }}
              >
                Delete
              </button>
            </div>
          );
          return [
            id,
            name,
            categoryId,
            brand,
            origin,
            size,
            price,
            date,
            description,
            action,
          ];
        });

        setDataTable(dataTable);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  useEffect(() => {
    if (currentTab === 1) {
      getData();
    }
  }, [pagination.page, currentTab]);

  const tabs = [
    {
      key: 1,
      title: "Table",
      component: (
        <Table
          columns={columns}
          dataTable={dataTable}
          page={pagination.page}
          limit={pagination.limit}
          total={pagination.total}
          handleChangePage={handleChangePage}
        />
      ),
    },
    { key: 2, title: "Create new product", component: <FormCreateProduct /> },
  ];

  return (
    <>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Product</h1>
        </div>
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <ul className="nav nav-tabs">
                    {tabs.map((tab) => (
                      <li
                        className={tab.key === currentTab ? "active" : ""}
                        style={{ cursor: "pointer" }}
                        key={tab.key}
                        onClick={() => {
                          setCurrentTab(tab.key);
                        }}
                      >
                        <a data-toggle="tab">{tab.title}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content" style={{ paddingTop: 20 }}>
                    {tabs.filter((tab) => tab.key === currentTab)[0]?.component}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="edit"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Update product
              </h4>
            </div>
            <div className="modal-body">
              <FormUpdateProduct data={productSelected} />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="delete"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Delete product
              </h4>
            </div>
            <div className="modal-body">
              Do you want to delete <b>{productSelected?.productName}</b> ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  handleDelete(productSelected?._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

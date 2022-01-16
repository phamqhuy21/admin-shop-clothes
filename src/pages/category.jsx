/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getCategories } from "../apis/category.api";
import FormCreateCategory from "../components/FormCreateCategory";
import FormUpdateCategory from "../components/FormUpdateCategory";
import Table from "../components/Table";

export default function category() {
  const [currentTab, setCurrentTab] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
  });
  const [dataTable, setDataTable] = useState([]);
  const [categorySelected, setCategorySelected] = useState();

  const columns = ["ID", "Name", "Date", "Description", "Action"];

  const getData = async () => {
    try {
      let res = await getCategories({
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
          let name = i?.category;
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
                  setCategorySelected(i);
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
                  setCategorySelected(i);
                }}
              >
                Delete
              </button>
            </div>
          );
          return [id, name, date, description, action];
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
    getData();
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
    { key: 2, title: "Create new category", component: <FormCreateCategory /> },
  ];

  return (
    <>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Category</h1>
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
                Update category
              </h4>
            </div>
            <div className="modal-body">
              <FormUpdateCategory data={categorySelected} />
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
              Do you want to delete <b>{categorySelected?.category}</b> ?
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
                  // handleDelete(productSelected?._id);
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

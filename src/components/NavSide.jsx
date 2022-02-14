/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../const/path";

export default function NavSide() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <>
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <a
                href={PATH.PRODUCT}
                className={
                  location?.pathname === PATH.PRODUCT ? "active-menu" : ""
                }
              >
                <i className="fa fa-table" /> Product
              </a>
            </li>
            <li>
              <a
                href={PATH.CATEGORY}
                className={
                  location?.pathname === PATH.CATEGORY ? "active-menu" : ""
                }
              >
                <i className="fa fa-qrcode" /> Category
              </a>
            </li>
            <li>
              <a
                href={PATH.WAREHOUSE}
                className={
                  location?.pathname === PATH.WAREHOUSE ? "active-menu" : ""
                }
              >
                <i className="fa fa-sitemap" /> Warehouse
              </a>
            </li>
            <li>
              <a
                className={
                  location?.pathname === PATH.ADMIN ? "active-menu" : ""
                }
                href={PATH.ADMIN}
              >
                <i className="glyphicon glyphicon-user" /> Account
              </a>
            </li>
            {/* <li>
              <a href="tab-panel.html">
                <i className="fa fa-qrcode" /> Tabs &amp; Panels
              </a>
            </li>
            <li>
              <a href="table.html">
                <i className="fa fa-table" /> Responsive Tables
              </a>
            </li>
            <li>
              <a href="form.html">
                <i className="fa fa-edit" /> Forms{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-sitemap" /> Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="#">Second Level Link</a>
                </li>
                <li>
                  <a href="#">Second Level Link</a>
                </li>
                <li>
                  <a href="#">
                    Second Level Link
                    <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-third-level">
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="empty.html">
                <i className="fa fa-fw fa-file" /> Empty Page
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function NavTop() {
  return (
    <>
      <nav className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">
            <strong>Marvel</strong>
          </a>
          <div id="sideNav" href>
            <i className="fa fa-caret-right" />
          </div>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fa fa-envelope fa-fw" />{" "}
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-messages">
              <li>
                <a href="#">
                  <div>
                    <strong>John Doe</strong>
                    <span className="pull-right text-muted">
                      <em>Today</em>
                    </span>
                  </div>
                  <div>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s...
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since an kwilnw...
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the...
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>Read All Messages</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
            {/* /.dropdown-messages */}
          </li>
          {/* /.dropdown */}
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fa fa-tasks fa-fw" />{" "}
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-tasks">
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 1</strong>
                      <span className="pull-right text-muted">
                        60% Complete
                      </span>
                    </p>
                    <div className="progress progress-striped active">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete (success)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 2</strong>
                      <span className="pull-right text-muted">
                        28% Complete
                      </span>
                    </p>
                    <div className="progress progress-striped active">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow={28}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "28%" }}
                      >
                        <span className="sr-only">28% Complete</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 3</strong>
                      <span className="pull-right text-muted">
                        60% Complete
                      </span>
                    </p>
                    <div className="progress progress-striped active">
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 4</strong>
                      <span className="pull-right text-muted">
                        85% Complete
                      </span>
                    </p>
                    <div className="progress progress-striped active">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      >
                        <span className="sr-only">85% Complete (danger)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>See All Tasks</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
            {/* /.dropdown-tasks */}
          </li>
          {/* /.dropdown */}
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fa fa-bell fa-fw" />{" "}
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-alerts">
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-comment fa-fw" /> New Comment
                    <span className="pull-right text-muted small">4 min</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-twitter fa-fw" /> 3 New Followers
                    <span className="pull-right text-muted small">12 min</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-envelope fa-fw" /> Message Sent
                    <span className="pull-right text-muted small">4 min</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-tasks fa-fw" /> New Task
                    <span className="pull-right text-muted small">4 min</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-upload fa-fw" /> Server Rebooted
                    <span className="pull-right text-muted small">4 min</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>See All Alerts</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
            {/* /.dropdown-alerts */}
          </li>
          {/* /.dropdown */}
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fa fa-user fa-fw" />{" "}
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#">
                  <i className="fa fa-user fa-fw" /> User Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-gear fa-fw" /> Settings
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <i className="fa fa-sign-out fa-fw" /> Logout
                </a>
              </li>
            </ul>
            {/* /.dropdown-user */}
          </li>
          {/* /.dropdown */}
        </ul>
      </nav>
    </>
  );
}

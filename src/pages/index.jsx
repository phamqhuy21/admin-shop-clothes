/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function index() {
  return (
    <div>
      <div id="wrapper">
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
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s...
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
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since an kwilnw...
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
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the...
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
                          <span className="sr-only">
                            60% Complete (success)
                          </span>
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
                          <span className="sr-only">
                            60% Complete (warning)
                          </span>
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
                      <span className="pull-right text-muted small">
                        12 min
                      </span>
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
        {/*/. NAV TOP  */}
        <nav className="navbar-default navbar-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav" id="main-menu">
              <li>
                <a className="active-menu" href="index.html">
                  <i className="fa fa-dashboard" /> Dashboard
                </a>
              </li>
              <li>
                <a href="ui-elements.html">
                  <i className="fa fa-desktop" /> UI Elements
                </a>
              </li>
              <li>
                <a href="chart.html">
                  <i className="fa fa-bar-chart-o" /> Charts
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </nav>
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div className="header">
            <h1 className="page-header">
              Dashboard <small>Welcome John Doe</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li className="active">Data</li>
            </ol>
          </div>
          <div id="page-inner">
            {/* /. ROW  */}
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-body easypiechart-panel">
                    <h4>Profit</h4>
                    <div
                      className="easypiechart"
                      id="easypiechart-blue"
                      data-percent={82}
                    >
                      <span className="percent">82%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-body easypiechart-panel">
                    <h4>Sales</h4>
                    <div
                      className="easypiechart"
                      id="easypiechart-orange"
                      data-percent={55}
                    >
                      <span className="percent">55%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-body easypiechart-panel">
                    <h4>Customers</h4>
                    <div
                      className="easypiechart"
                      id="easypiechart-teal"
                      data-percent={84}
                    >
                      <span className="percent">84%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-body easypiechart-panel">
                    <h4>No. of Visits</h4>
                    <div
                      className="easypiechart"
                      id="easypiechart-red"
                      data-percent={46}
                    >
                      <span className="percent">46%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="panel panel-primary text-center no-boder blue">
                  <div className="panel-left pull-left blue">
                    <i className="fa fa-eye fa-5x" />
                  </div>
                  <div className="panel-right">
                    <h3>16,150</h3>
                    <strong> Daily Visits</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="panel panel-primary text-center no-boder blue">
                  <div className="panel-left pull-left blue">
                    <i className="fa fa-shopping-cart fa-5x" />
                  </div>
                  <div className="panel-right">
                    <h3>25,550 </h3>
                    <strong> Sales</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="panel panel-primary text-center no-boder blue">
                  <div className="panel-left pull-left blue">
                    <i className="fa fa fa-comments fa-5x" />
                  </div>
                  <div className="panel-right">
                    <h3>11,225 </h3>
                    <strong> Comments </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="panel panel-primary text-center no-boder blue">
                  <div className="panel-left pull-left blue">
                    <i className="fa fa-users fa-5x" />
                  </div>
                  <div className="panel-right">
                    <h3>72,525 </h3>
                    <strong>No. of Visits</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="panel panel-default">
                  <div className="panel-heading">Line Chart</div>
                  <div className="panel-body">
                    <div id="morris-line-chart" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="panel panel-default">
                  <div className="panel-heading">Bar Chart Example</div>
                  <div className="panel-body">
                    <div id="morris-bar-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading">Area Chart</div>
                  <div className="panel-body">
                    <div id="morris-area-chart" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading">Donut Chart Example</div>
                  <div className="panel-body">
                    <div id="morris-donut-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12"></div>
            </div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading">Tasks Panel</div>
                  <div className="panel-body">
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <span className="badge">7 minutes ago</span>
                        <i className="fa fa-fw fa-comment" /> Commented on a
                        post
                      </a>
                      <a href="#" className="list-group-item">
                        <span className="badge">16 minutes ago</span>
                        <i className="fa fa-fw fa-truck" /> Order 392 shipped
                      </a>
                      <a href="#" className="list-group-item">
                        <span className="badge">36 minutes ago</span>
                        <i className="fa fa-fw fa-globe" /> Invoice 653 has paid
                      </a>
                      <a href="#" className="list-group-item">
                        <span className="badge">1 hour ago</span>
                        <i className="fa fa-fw fa-user" /> A new user has been
                        added
                      </a>
                      <a href="#" className="list-group-item">
                        <span className="badge">1.23 hour ago</span>
                        <i className="fa fa-fw fa-user" /> A new user has added
                      </a>
                      <a href="#" className="list-group-item">
                        <span className="badge">yesterday</span>
                        <i className="fa fa-fw fa-globe" /> Saved the world
                      </a>
                    </div>
                    <div className="text-right">
                      <a href="#">
                        More Tasks <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading">Responsive Table Example</div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>S No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email ID.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>John15482</td>
                            <td>name@site.com</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Kimsila</td>
                            <td>Marriye</td>
                            <td>Kim1425</td>
                            <td>name@site.com</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Rossye</td>
                            <td>Nermal</td>
                            <td>Rossy1245</td>
                            <td>name@site.com</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Richard</td>
                            <td>Orieal</td>
                            <td>Rich5685</td>
                            <td>name@site.com</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Jacob</td>
                            <td>Hielsar</td>
                            <td>Jac4587</td>
                            <td>name@site.com</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Wrapel</td>
                            <td>Dere</td>
                            <td>Wrap4585</td>
                            <td>name@site.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /. ROW  */}
            <footer>
              <p>
                All right reserved. Template by:{" "}
                <a href="http://webthemez.com">WebThemez.com</a>
              </p>
            </footer>
          </div>
          {/* /. PAGE INNER  */}
        </div>
        {/* /. PAGE WRAPPER  */}
      </div>
      ;
    </div>
  );
}

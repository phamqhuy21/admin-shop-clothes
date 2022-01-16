/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function index() {
  return (
    <>
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
                      <i className="fa fa-fw fa-comment" /> Commented on a post
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
    </>
  );
}

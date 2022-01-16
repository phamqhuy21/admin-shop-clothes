/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Table({
  columns,
  dataTable,
  page,
  limit,
  total,
  handleChangePage,
}) {
  return (
    <div className="panel-body">
      <div className="table-responsive">
        <table
          className="table table-striped table-bordered table-hover"
          id="dataTables-example"
        >
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable.map((data, index) => (
              <tr className="odd gradeX">
                {data?.map((i, idx) => (
                  <td key={idx}>{i}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li style={{ cursor: "pointer" }}>
                <span
                  aria-hidden="true"
                  onClick={() => {
                    if (page > 1) handleChangePage(page - 1);
                  }}
                >
                  «
                </span>
              </li>
              {Array.from(Array(Math.ceil(total / limit)).keys()).map((i) => (
                <li key={i} style={{ cursor: "pointer" }}>
                  <span
                    onClick={() => {
                      handleChangePage(i + 1);
                    }}
                    style={{ backgroundColor: i + 1 === page ? "#ffcdd2" : "" }}
                  >
                    {i + 1}
                  </span>
                </li>
              ))}
              <li style={{ cursor: "pointer" }}>
                <span
                  aria-hidden="true"
                  onClick={() => {
                    if (page < Math.ceil(total / limit))
                      handleChangePage(page + 1);
                  }}
                >
                  »
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

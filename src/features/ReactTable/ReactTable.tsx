import React, { useMemo } from "react";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";
import styled from "styled-components";

// type Person = {
//   address: { city: string; telephone: string };
//   email: string;
//   first_name: string;
//   gender: string;
//   id: number;
//   ip_address: string;
//   last_name: string;
// };

type Props = {
  data: any[];
};

const Styles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  console.log(`🚀 ~ file: ReactTable.tsx ~ line 52 ~ GlobalFilter ~ preGlobalFilteredRows`, preGlobalFilteredRows);
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

export const ReactTable: React.FC<Props> = ({ data }) => {
  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Имя",
        accessor: "first_name",
      },
      {
        Header: "Фамилия",
        accessor: "last_name",
      },
      {
        Header: "Почта",
        accessor: "email",
      },
      {
        Header: "Пол",
        accessor: "gender",
      },
      {
        Header: "IP адрес",
        accessor: "ip_address",
      },
      {
        Header: "Домашний адрес",
        accessor: "address.city",
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    // @ts-ignore
    preGlobalFilteredRows,
    // @ts-ignore
    setGlobalFilter,
  } = useTable({ columns, data: tableData }, useFilters, useGlobalFilter, useSortBy);

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  // @ts-ignore
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {/* @ts-ignore */}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                  </th>
                );
              })}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                // @ts-ignore
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Styles>
  );
};

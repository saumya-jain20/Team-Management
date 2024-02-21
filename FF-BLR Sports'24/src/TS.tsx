import { useMemo, useState, useEffect } from "react";
import {
  type MRT_TableOptions,
  type MRT_ColumnDef,
  type MRT_Row,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Typography } from "@mui/material";
import { type Person } from "./makeData";
import "./styles.css";

const Example = () => {
  const [message, setMessage] = useState("");
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleSaveData = () => {
    const saveData = [
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
    ];
    fetch("http://localhost:8000/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ data: saveData }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log("Data saved successfully!");
        } else {
          console.error("Failed to save data:", result.error);
        }
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  useEffect(() => {
    const fetchData1 = () => {
      fetch("http://localhost:8000/data0.json")
        .then((res) => res.json())
        .then((fetchedData1) => {
          setData1(fetchedData1);
        })
        .catch((error) => {
          console.error("Error fetching data0.json:", error);
        });
    };

    const fetchData2 = () => {
      fetch("http://localhost:8000/data1.json")
        .then((res) => res.json())
        .then((fetchedData2) => {
          setData2(fetchedData2);
        })
        .catch((error) => {
          console.error("Error fetching data1.json:", error);
        });
    };
    const fetchData3 = () => {
      fetch("http://localhost:8000/data2.json")
        .then((res) => res.json())
        .then((fetchedData3) => {
          setData3(fetchedData3);
        })
        .catch((error) => {
          console.error("Error fetching data2.json:", error);
        });
    };
    const fetchData4 = () => {
      fetch("http://localhost:8000/data3.json")
        .then((res) => res.json())
        .then((fetchedData4) => {
          setData4(fetchedData4);
        })
        .catch((error) => {
          console.error("Error fetching data3.json:", error);
        });
    };
    const fetchData5 = () => {
      fetch("http://localhost:8000/data4.json")
        .then((res) => res.json())
        .then((fetchedData5) => {
          setData5(fetchedData5);
        })
        .catch((error) => {
          console.error("Error fetching data4.json:", error);
        });
    };
    const fetchData6 = () => {
      fetch("http://localhost:8000/data5.json")
        .then((res) => res.json())
        .then((fetchedData6) => {
          setData6(fetchedData6);
        })
        .catch((error) => {
          console.error("Error fetching data5.json:", error);
        });
    };
    const fetchData7 = () => {
      fetch("http://localhost:8000/data6.json")
        .then((res) => res.json())
        .then((fetchedData7) => {
          setData7(fetchedData7);
        })
        .catch((error) => {
          console.error("Error fetching data6.json:", error);
        });
    };
    const fetchData8 = () => {
      fetch("http://localhost:8000/data7.json")
        .then((res) => res.json())
        .then((fetchedData8) => {
          setData8(fetchedData8);
        })
        .catch((error) => {
          console.error("Error fetching data7.json:", error);
        });
    };
    const fetchData9 = () => {
      fetch("http://localhost:8000/data8.json")
        .then((res) => res.json())
        .then((fetchedData9) => {
          setData9(fetchedData9);
        })
        .catch((error) => {
          console.error("Error fetching data8.json:", error);
        });
    };

    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
    fetchData6();
    fetchData7();
    fetchData8();
    fetchData9();
  }, []);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "playerName",
        header: "Player Name",
      },
      {
        accessorKey: "preference",
        header: "Preference Sport",
      },
    ],
    []
  );

  const houseColumns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      ...columns,
      {
        accessorKey: "gamesPlayed",
        header: "Games Played",
        renderCell: ({ value }) => (
          <Typography variant="body2">{value}</Typography>
        ),
      },
    ],
    [columns]
  );

  const [data2, setData2] = useState<Person[]>(() => []);
  const [data3, setData3] = useState<Person[]>(() => []);
  const [data4, setData4] = useState<Person[]>(() => []);
  const [data5, setData5] = useState<Person[]>(() => []);
  const [data6, setData6] = useState<Person[]>(() => []);
  const [data7, setData7] = useState<Person[]>(() => []);
  const [data8, setData8] = useState<Person[]>(() => []);
  const [data9, setData9] = useState<Person[]>(() => []);

  const [draggingRow, setDraggingRow] = useState<MRT_Row<Person> | null>(null);
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);

  const commonTableProps: Partial<MRT_TableOptions<Person>> & {
    columns: MRT_ColumnDef<Person>[];
  } = {
    columns,
    enableRowDragging: true,
    enableFullScreenToggle: false,
    muiTableContainerProps: {
      sx: {
        minHeight: "320px",
      },
    },
    onDraggingRowChange: setDraggingRow,
    state: { draggingRow },
  };

  const houseTableProps = {
    ...commonTableProps,
    columns: houseColumns,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (
          hoveredTable === "table-2" &&
          !data2.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData2((data2) => [...data2, draggingRow!.original]);

          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-3" &&
          !data3.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData3((data3) => [...data3, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-4" &&
          !data4.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData4((data4) => [...data4, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-5" &&
          !data5.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData5((data5) => [...data5, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-6" &&
          !data6.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData6((data6) => [...data6, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-7" &&
          !data7.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData7((data7) => [...data7, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-8" &&
          !data8.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData8((data8) => [...data8, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        } else if (
          hoveredTable === "table-9" &&
          !data9.find((d) => d.playerName === draggingRow!.original.playerName)
        ) {
          setData9((data9) => [...data9, draggingRow!.original]);
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, 1)
            )
          );
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-1"),
      sx: {
        outline: hoveredTable === "table-1" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="success.main" component="span" variant="h4">
        House A
      </Typography>
    ),
  };

  const table1 = useMaterialReactTable({
    ...houseTableProps,
    data: data1,
    getRowId: (originalRow) => `table-1-${originalRow.playerName}`,
  });

  const table2 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data2,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-2-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );
          setData2((data2) => data2.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-2"),
      sx: {
        outline: hoveredTable === "table-2" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Cricket
      </Typography>
    ),
  });

  const table3 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data3,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-3-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData3((data3) => data3.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-3"),
      sx: {
        outline: hoveredTable === "table-3" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Football
      </Typography>
    ),
  });

  const table4 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data4,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-4-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData4((data4) => data4.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-4"),
      sx: {
        outline: hoveredTable === "table-4" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Basketball
      </Typography>
    ),
  });

  const table5 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data5,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-5-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData5((data5) => data5.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-5"),
      sx: {
        outline: hoveredTable === "table-5" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Badminton
      </Typography>
    ),
  });

  const table6 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data6,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-6-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData6((data6) => data6.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-6"),
      sx: {
        outline: hoveredTable === "table-6" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Table Tennis
      </Typography>
    ),
  });

  const table7 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data7,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-7-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData7((data7) => data7.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-7"),
      sx: {
        outline: hoveredTable === "table-7" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Chess
      </Typography>
    ),
  });

  const table8 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data8,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-8-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData8((data8) => data8.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-8"),
      sx: {
        outline: hoveredTable === "table-8" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Carrom
      </Typography>
    ),
  });

  const table9 = useMaterialReactTable({
    ...commonTableProps,
    columns,
    data: data9,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-9-${originalRow.playerName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === "table-1") {
          setData1((data1) =>
            data1.map((person) =>
              updateGamesPlayed(person, draggingRow!.original, -1)
            )
          );

          setData9((data9) => data9.filter((d) => d !== draggingRow!.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable("table-9"),
      sx: {
        outline: hoveredTable === "table-9" ? "2px dashed pink" : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Volleyball
      </Typography>
    ),
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        overflow: "auto",
        p: "4px",
      }}
    >
      <Box className="full-width-table-container">
        <MaterialReactTable table={table1} />
        <button onClick={handleSaveData} className="save-button">
          Save
        </button>
      </Box>
      <Box className="right-half-page">
        <MaterialReactTable table={table2} />
        <MaterialReactTable table={table3} />
        <MaterialReactTable table={table4} />
        <MaterialReactTable table={table5} />
        <MaterialReactTable table={table6} />
        <MaterialReactTable table={table7} />
        <MaterialReactTable table={table8} />
        <MaterialReactTable table={table9} />
      </Box>
    </Box>
  );
};

const updateGamesPlayed = (
  person: Person,
  draggedPerson: Person,
  adjustment: number
): Person => {
  if (person.playerName === draggedPerson.playerName) {
    return { ...person, gamesPlayed: person.gamesPlayed + adjustment };
  }
  return person;
};

export default Example;

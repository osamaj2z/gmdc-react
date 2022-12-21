// IMPORTS

import * as React from "react";
import {
  ActionIcon,
  HoverCard,
  LoadingOverlay,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { IconX } from "@tabler/icons";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useMediaQuery } from "@mantine/hooks";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Paper from "@mui/material/Paper";

import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  Check,
  ChevronDown,
  CircleOff,
  Download,
  EditOff,
  Eye,
  Filter,
  Id,
  Search,
  TrashX,
  UserSearch,
} from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";
import { Plus } from "tabler-icons-react";

import { visuallyHidden } from "@mui/utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mantine/core";

import { useState } from "react";
import { Modal, Button, Title, Grid } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { TrashOff } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";

// import "./CustomerTable.css";
import axios from "axios";
// import { Check } from "@material-ui/icons";
// import DownloadAsCSV from "../csvDATA/DownloadAsCSV";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import PDFTable from "../Download_PDF_Table/PDFTable";

import { createStyles } from "@mantine/core";
import { useEffect } from "react";
import ViewVehicleModal from "./ViewVehicleModal";
import {
  allowForLoop,
  getHeader,
  getSellerHeader,
} from "../apiCallHelpers/headers";
import { backendURL } from "../apiCallHelpers/backendURL";
import { userURL } from "../apiCallHelpers/urlToGoToHelper";
import { axiosDelete } from "../apiCallHelpers/axiosCall";
const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

// function createData(
//   _id,
//   img,
//   role,
//   name,
//   date,
//   email,
//   CNIC,
//   phone,
//   status,
//   key,
//   createdAt
// ) {
//   console.log(
//     "hi",
//     _id,
//     img,
//     role,
//     name,
//     date,
//     email,
//     CNIC,
//     phone,
//     status,
//     createdAt
//   );
//   return {
//     key: key++,
//     _id,
//     img,
//     role,
//     name,
//     date,
//     email,
//     phone,
//     CNIC,
//     status,
//     createdAt,
//   };
// }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype?.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

const headCells = [
  {
    id: "SR",
    numeric: true,
    disablePadding: true,
    label: "ID",
    sort: true,
  },

  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    sort: true,
  },
  {
    id: "vin",
    numeric: false,
    disablePadding: false,
    label: "VIN",
    sort: true,
  },

  {
    id: "manufacturer",
    numeric: false,
    disablePadding: false,
    label: "Manufacturer",
    sort: true,
  },

  {
    id: "make",
    numeric: false,
    disablePadding: false,
    label: "Make/Model",
    sort: true,
  },

  // {
  //   id: "model",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Model",
  //   sort: true,
  // },

  // {
  //   id: "Color",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Color",
  //   sort: true,
  // },

  {
    id: "year",
    numeric: false,
    disablePadding: false,
    label: "Year",
    sort: false,
  },
  {
    id: "vehicleType",
    numeric: false,
    disablePadding: false,
    label: "Type/Trim",
    sort: false,
  },

  // {
  //   id: "trim",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Trim",
  //   sort: true,
  // },
  {
    id: "condition",
    numeric: false,
    disablePadding: false,
    label: "Condition",
    sort: false,
  },
  {
    id: "transmission",
    numeric: false,
    disablePadding: false,
    label: "Transmission",
    sort: false,
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    sort: false,
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
    sort: false,
  },
];
//
const pdfHeadCells = [
  {
    id: "SR",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },

  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },

  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },

  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },

  {
    id: "STATUS",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },

  {
    id: "CNIC",
    numeric: false,
    disablePadding: false,
    label: "CNIC",
  },
  {
    id: "CREATED_AT_DATE",
    numeric: false,
    disablePadding: false,
    label: "Created At",
  },
];

//
function EnhancedTableHead(props) {
  const {
    order,
    orderBy,

    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells?.map((headCell) => (
          <TableCell
            style={{ fontWeight: "bold" }}
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell?.sort === true ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const ViewVehicles = ({ setCurrentLocation }) => {
  const [vehicleDetails, setVehicleDetails] = useState({});
  const matches1200 = useMediaQuery("(min-width: 1200px)");
  const matches800 = useMediaQuery("(min-width: 800px)");
  setCurrentLocation("View All Vehicals");
  let navigate = useNavigate();

  const [opened, setOpened] = useState(false);
  const [viewVehiclesModal, setViewVehiclesModal] = useState(false);
  const [visible, setVisible] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [allVehicles, setVehicles] = useState([]);
  const [condition, setCondition] = useState("all");
  const [transmissionType, setTransmissionType] = useState("all");
  const [search, setSearch] = useState("");
  const [soldStatus, setSoldStatus] = useState("all");
  const [disabled, setDisabled] = useState(true);
  console.log("Vehicals::::::: ", allVehicles);

  const getAllVehiclesFunction = async () => {
    try {
      const apiResponse = await axios({
        headers: getHeader(),
        method: "GET",
        url: `${backendURL}api/v1/vehicle/all`,
      });

      console.log("API RESPONSE: ", apiResponse);
      if (apiResponse.data.success === true) {
        console.log("WE ARE IN IF BLOCK");

        let data = apiResponse.data.data.vehicles.map((vehicle, index) => {
          return {
            ...vehicle,
            SR: index + 1,
          };
        });

        setFilterString(allowForLoop(data));
        setVisible(false);
        return data;
      } else {
        console.log("API CALL FAILED");
        setVisible(false);
      }
    } catch (e) {
      console.log("ERROR", e);
      setVisible(false);
      showNotification({
        message: "Something went wrong",
        title: "Error",
        color: "red",
      });
    }
  };
  useEffect(() => {
    getAllVehiclesFunction().then(setVehicles);
  }, []);

  useEffect(() => {
    filtering();
  }, [condition, transmissionType, search, soldStatus]);

  console.log("VEHCILES_DATA: ", allVehicles);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const { classes } = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - allVehicles?.length) : 0;

  const [id, setId] = useState("");
  const deleteVehicle = (id) => {
    setOpened(true);
    setId(id);
  };
  const confirmDelete = () => {
    setOpened(false);
    setVisible(true);
    axiosDelete(`api/v1/vehicle/${id}`).then((res) => {
      if (res.data.success) {
        // console.log(res.data);
        setRefresh(true);

        setVisible(false);

        showNotification({
          autoClose: 5000,
          style: { size: "small" },

          title: "Success",
          message: `Vehicle Has Been Deleted From The System! 🤥`,
          styles: (theme) => ({
            root: {
              backgroundColor: theme.colors.red[6],
              borderColor: theme.colors.red[6],

              "&::before": { backgroundColor: theme.white },
            },

            title: { color: theme.white },
            description: { color: theme.white },
            closeButton: {
              color: theme.white,
              "&:hover": { backgroundColor: theme.colors.red[7] },
            },
          }),
        });
      } else {
        setVisible(false);
        console.log("hello error", res.data);
        showNotification({
          title: `Error`,
          color: "red",

          icon: <IconX size={18} />,
          message: `${res.data.data}`,
        });
      }
    });
  };

  const [filterString, setFilterString] = useState([]);
  console.log(condition);
  console.log(transmissionType);
  console.log(filterString);

  const filtering = () => {
    console.log("hi there");
    if (
      condition === "all" &&
      transmissionType === "all" &&
      search === "" &&
      soldStatus === "all"
    ) {
      setDisabled(true);
      return setFilterString(allVehicles);
    } else if (
      condition === "all" &&
      transmissionType === "all" &&
      soldStatus === "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x.title?.toLowerCase().includes(search.toLowerCase()) ||
            x.vin?.toLowerCase().includes(search.toLowerCase()) ||
            x.color?.toString().toLowerCase().includes(search.toLowerCase()) ||
            x.make?.toLowerCase().includes(search.toLowerCase()) ||
            x.year?.toLowerCase().includes(search.toLowerCase()) ||
            x?.type?.toLowerCase().includes(search.toLowerCase()) ||
            x?.trim?.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (
      condition === "all" &&
      transmissionType !== "all" &&
      soldStatus === "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x.transmission === transmissionType &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition !== "all" &&
      transmissionType === "all" &&
      soldStatus === "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x?.condition === condition &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color
                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition !== "all" &&
      transmissionType !== "all" &&
      soldStatus === "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x?.condition === condition &&
            x?.transmission === transmissionType &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition !== "all" &&
      transmissionType !== "all" &&
      soldStatus !== "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x?.condition === condition &&
            x.transmission === transmissionType &&
            x.status === soldStatus &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition === "all" &&
      transmissionType !== "all" &&
      soldStatus !== "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x.transmission === transmissionType &&
            x.status === soldStatus &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition !== "all" &&
      transmissionType === "all" &&
      soldStatus !== "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x?.condition === condition &&
            x.status === soldStatus &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (
      condition === "all" &&
      transmissionType === "all" &&
      soldStatus !== "all"
    ) {
      setDisabled(false);
      return setFilterString(
        allVehicles.filter(
          (x) =>
            x.status === soldStatus &&
            (x.title?.toLowerCase().includes(search.toLowerCase()) ||
              x.vin?.toLowerCase().includes(search.toLowerCase()) ||
              x.color

                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              x.make?.toLowerCase().includes(search.toLowerCase()) ||
              x.year?.toLowerCase().includes(search.toLowerCase()) ||
              x?.type?.toLowerCase().includes(search.toLowerCase()) ||
              x?.trim?.toLowerCase().includes(search.toLowerCase()))
        )
      );
    }
  };

  return (
    // <ThemeProvider theme={darkTheme}>
    <>
      <Paper style={{ position: "relative" }}>
        <LoadingOverlay
          visible={visible}
          loaderProps={{ size: "xl", color: "pink", variant: "bars" }}
          overlayOpacity={0.5}
          overlayColor="#c5c5c5"
        />

        <Paper shadow="xl" style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              component={Link}
              to={`/${userURL()}/addvehicle`}
              rightIcon={<Plus />}
              variant="filled"
              color="dark"
              radius="lg"
              p="s"
              m="md"
            >
              ADD Vehicle
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              {matches1200 ? (
                <>
                  <Select
                    p="s"
                    m="md"
                    label="Filter By Condition"
                    value={condition}
                    data={[
                      { value: "all", label: "All" },
                      { value: "new", label: "New" },
                      { value: "used", label: "Used" },
                    ]}
                    placeholder="All Conditions"
                    onChange={setCondition}
                  />
                  <Select
                    p="s"
                    m="md"
                    label="Filter By Transmission"
                    value={transmissionType}
                    data={[
                      { value: "all", label: "All" },
                      { value: "manual", label: "Manual" },
                      { value: "automatic", label: "Automatic" },
                    ]}
                    placeholder="All Status"
                    onChange={setTransmissionType}
                  />
                  <Select
                    p="s"
                    m="md"
                    label="Filter By Status"
                    value={soldStatus}
                    data={[
                      { value: "all", label: "All" },
                      { value: "sold", label: "Sold" },
                      { value: "available", label: "Available" },
                    ]}
                    placeholder="All Status"
                    onChange={setSoldStatus}
                  />
                  <TextInput
                    label="Search"
                    placeholder="Search..."
                    p="s"
                    m="md"
                    icon={<UserSearch size={14} />}
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                  />
                  <Button
                    rightIcon={<Filter />}
                    variant="filled"
                    color="blue"
                    // radius="lg"
                    p="s"
                    mt="xl"
                    mr="md"
                    disabled={disabled}
                    onClick={() => {
                      setTransmissionType("all");
                      setSoldStatus("all");

                      setCondition("all");
                      setSearch("");
                    }}
                  >
                    Clear
                  </Button>
                </>
              ) : (
                <>
                  <TextInput
                    placeholder="Search..."
                    p="s"
                    m="md"
                    icon={<UserSearch size={14} />}
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                  />

                  <Menu
                    shadow="md"
                    width={200}
                    p="s"
                    mt={matches1200 && "xl"}
                    mr="md"
                    // closeOnClickOutside={false}
                    closeOnItemClick={false}
                  >
                    <Menu.Target>
                      <ActionIcon variant="filled" color="yellow">
                        <Filter />
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item>
                        <Select
                          label="Filter By Condition"
                          value={condition}
                          data={[
                            { value: "all", label: "All" },
                            { value: "new", label: "New" },
                            { value: "used", label: "Used" },
                          ]}
                          placeholder="All Conditions"
                          onChange={setCondition}
                        />
                      </Menu.Item>
                      <Menu.Item>
                        <Select
                          label="Filter By Transmission"
                          value={transmissionType}
                          data={[
                            { value: "all", label: "All" },
                            { value: "manual", label: "Manual" },
                            { value: "automatic", label: "Automatic" },
                          ]}
                          placeholder="All Status"
                          onChange={setTransmissionType}
                        />
                      </Menu.Item>
                      <Menu.Item>
                        <Select
                          label="Filter By Status"
                          value={soldStatus}
                          data={[
                            { value: "all", label: "All" },
                            { value: "sold", label: "Sold" },
                            { value: "available", label: "Available" },
                          ]}
                          placeholder="All Status"
                          onChange={setSoldStatus}
                        />
                      </Menu.Item>
                      <Menu.Item>
                        <Button
                          rightIcon={<Filter />}
                          variant="filled"
                          color="blue"
                          fullWidth
                          // radius="lg"

                          disabled={disabled}
                          onClick={() => {
                            setTransmissionType("all");
                            setSoldStatus("all");
                            setCondition("all");
                            setSearch("");
                          }}
                        >
                          Clear
                        </Button>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </>
              )}
            </div>
          </div>
        </Paper>

        <Modal
          styles={{
            title: {
              width: "100%",
              textAlign: "center",
            },
            close: {
              color: "black",
              backgroundColor: "#EAEAEA",
              borderRadius: "50%",
              "&:hover": {
                transition: "50ms",
                color: "white",
                backgroundColor: "red",
              },
            },
          }}
          title={<Title>Vehicle Details</Title>}
          opened={viewVehiclesModal}
          onClose={() => setViewVehiclesModal(false)}
          // variant="transparent"
          size={"90%"}
          radius="md"
          centered
          shadow={0}
          padding="xl"
        >
          <ViewVehicleModal vehicleDetails={vehicleDetails} />
        </Modal>

        <Modal
          styles={{
            close: {
              color: "black",
              backgroundColor: "#EAEAEA",
              borderRadius: "50%",
              "&:hover": {
                transition: "50ms",
                color: "white",
                backgroundColor: "red",
              },
            },
          }}
          opened={opened}
          transition="rotate-left"
          transitionDuration={600}
          size={600}
          transitionTimingFunction="ease"
          onClose={() => setOpened(false)}
        >
          <Title align="center" order={3}>
            Are you Sure You Want to Delete This Vehicle?
          </Title>
          <Grid align="center" justify="space-around" p="md">
            <Grid.Col align="center" xs={3} sm={3} md={4} lg={4}>
              <Button
                align="center"
                color="light"
                leftIcon={<TrashOff size={14} />}
                onClick={() => setOpened(false)}
              >
                No, Don't Delete
              </Button>
            </Grid.Col>
            <Grid.Col align="center" xs={5} sm={4} md={4} lg={4}>
              <Button
                align="center"
                color="red"
                leftIcon={<Trash size={14} />}
                onClick={() => confirmDelete()}
              >
                Yes, Delete
              </Button>
            </Grid.Col>
          </Grid>
        </Modal>
        {filterString?.length !== 0 ? (
          <Paper sx={{ width: "100%", mb: 2 }}>
            <>
              <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={allVehicles?.length}
                  />
                  <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 customer?.slice()?.sort(getComparator(order, orderBy)) */}
                    {stableSort(filterString, getComparator(order, orderBy))
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map((row, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {row?.SR}
                            </TableCell>
                            <TableCell align="left">
                              <Text>
                                {row?.title.length > 20
                                  ? row?.title?.slice(0, 20) + "..."
                                  : row?.title}
                              </Text>
                            </TableCell>

                            <TableCell align="left">{row?.vin}</TableCell>
                            <TableCell align="left">
                              {row?.manufacturer.length > 20
                                ? row?.manufacturer?.slice(0, 20) + "..."
                                : row?.manufacturer}
                            </TableCell>
                            <TableCell align="left">
                              {row?.make} - {row?.model}
                            </TableCell>
                            <TableCell align="left">{row?.year}</TableCell>
                            <TableCell align="left">
                              {row?.vehicleType
                                ? row?.vehicleType?.toUpperCase()
                                : "N/A"}{" "}
                              - {row?.trim}
                            </TableCell>
                            <TableCell align="left">
                              {row?.condition
                                ? row?.condition?.toUpperCase()
                                : "N/A"}
                            </TableCell>
                            <TableCell align="left">
                              {row?.transmission
                                ? row?.transmission?.toUpperCase()
                                : "N/A"}
                            </TableCell>
                            <TableCell align="left">
                              {" "}
                              <Button
                                size="xs"
                                compact
                                fullWidth
                                color={row?.status === "sold" ? "green" : "red"}
                              >
                                {row?.status === "sold" ? "Sold" : "Available"}
                                {/* <ChevronDown size={14} /> */}
                              </Button>
                            </TableCell>

                            <TableCell>
                              <SimpleGrid
                                cols={3}
                                spacing="xl"
                                // breakpoints={[
                                //   { maxWidth: "xl", cols: 1 },
                                //   { maxWidth: "lg", cols: 1 },
                                //   { maxWidth: "md", cols: 1 },
                                // ]}
                              >
                                <ActionIcon
                                  color="dark"
                                  variant="transparent"
                                  onClick={() => {
                                    console.log("View vehical");
                                    setVehicleDetails(row);
                                    setViewVehiclesModal(true);
                                  }}
                                >
                                  <Eye color="#a905b6" />
                                </ActionIcon>
                                <ActionIcon
                                  disabled={
                                    row?.status === "sold" ? true : false
                                  }
                                  color="dark"
                                  variant="transparent"
                                  onClick={() => {
                                    console.log("Clicked on edit button");
                                    let currentUser = JSON.parse(
                                      localStorage.getItem("user")
                                    );
                                    if (currentUser?.role === "admin") {
                                      navigate(
                                        `/admin/updateVehicle/${row._id}`
                                      );
                                    } else {
                                      navigate(
                                        `/seller/updateVehicle/${row._id}`
                                      );
                                    }
                                  }}
                                >
                                  {row?.status === "sold" ? (
                                    <EditOff />
                                  ) : (
                                    <Edit />
                                  )}
                                </ActionIcon>

                                <ActionIcon
                                  disabled={
                                    row?.status === "sold" ? true : false
                                  }
                                  color="red"
                                  variant="transparent"
                                  onClick={() => deleteVehicle(row?._id)}
                                >
                                  {row?.status === "sold" ? (
                                    <TrashOff />
                                  ) : (
                                    <Trash />
                                  )}
                                </ActionIcon>
                              </SimpleGrid>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={allVehicles?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </>
          </Paper>
        ) : (
          <Text weight="bold" align="center">
            No Data Found
          </Text>
        )}
      </Paper>
    </>
  );
};

export default ViewVehicles;

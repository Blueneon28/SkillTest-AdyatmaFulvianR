import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostSlice } from "../redux/slice/post";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { ModeEdit, Delete } from "@mui/icons-material";
import { DELETE_POST_BY_ID, GET_POSTS } from "../redux/types";

export default function TableComponent({ show }) {
  const rows = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_POSTS });
  }, []);
  const visible = false;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
              }}
              align="left"
            >
              Title
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
              }}
              align="left"
            >
              Body
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
              }}
              align="left"
            >
              Actions
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
              <TableCell align="left">
                <IconButton>
                  <ModeEdit
                    color="warning"
                    fontSize="large"
                    onClick={() => show(visible, dispatch(setPostSlice(row)))}
                  />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                <IconButton>
                  <Delete
                    color="error"
                    fontSize="large"
                    onClick={() =>
                      dispatch({ type: DELETE_POST_BY_ID, id: row.id })
                    }
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  borderRadius: "12px",
  backgroundColor: theme.palette.common.black,
  transition: theme.transitions.create("width"),
  padding: theme.spacing(2, 1),
  "&:hover": {
    width: "200px",
    justifyContent: "flex-start",
  },
  [theme.breakpoints.up("sm")]: {
    width: "200px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  width: "100%",
}));

const ExpandableSearch = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Search
      sx={{
        width: expanded ? "200px" : "30px",
      }}
      onClick={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <SearchIcon />
      <StyledInputBase autoFocus placeholder="Search…" />
    </Search>
  );
};

export default ExpandableSearch;

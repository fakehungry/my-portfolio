import { Box, TextField } from "@mui/material";
import React from "react";
import Comment from "./Comment";

type Props = {};

const Comments = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "24px" }}>
      <TextField placeholder="Share your thought" />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Box>
  );
};

export default Comments;

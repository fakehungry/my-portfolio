import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const Comment = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "12px" }}>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
          H
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "8px",
              padding: "6px",
            }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              Hean
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              veritatis autem ipsam itaque officia vel ea cupiditate velit eius
              ad!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ padding: "0" }}>
              <FavoriteIcon sx={{ fontSize: "16px" }} />
            </IconButton>
            <IconButton sx={{ padding: "0" }}>
              <EditIcon sx={{ fontSize: "16px" }} />
            </IconButton>
            <Typography fontSize={14} variant="subtitle2" component="span">
              xxx min ago
            </Typography>
            <Typography fontSize={14} variant="subtitle2" component="span">
              Edited
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "./Comments";

type Props = {};

const Post = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "felx-start",
        padding: "24px",
        maxWidth: 1000,
      }}
    >
      <Box sx={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
          H
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle2">Hean</Typography>
          <Typography variant="subtitle2">xxx min to read</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ marginBottom: "12px" }} variant="h4">
          Title
        </Typography>
        <Typography sx={{ marginBottom: "6px" }} variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          excepturi laudantium quam beatae dolore! Repudiandae asperiores culpa
          sint rerum veniam maiores sit quos deserunt reiciendis excepturi dicta
          atque explicabo, nemo tenetur nisi adipisci in quod? Neque illum
          officia, quam id ex aperiam eligendi cupiditate ipsam nisi accusamus,
          iusto amet esse.
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </Box>
      <Divider flexItem />
      <Comments />
    </Box>
  );
};

export default Post;

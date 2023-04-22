import { Box, Pagination, styled } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";

type Props = {};

const PostCardsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "24px",
  flexWrap: "wrap",
  gap: "12px",
  justifyContent: "center",
}));

const BlogPosts = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1000,
      }}
    >
      <PostCardsWrapper>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardsWrapper>
      <Pagination count={10} />
    </Box>
  );
};

export default BlogPosts;

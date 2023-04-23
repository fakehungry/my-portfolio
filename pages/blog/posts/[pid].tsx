import React from "react";
import { useRouter } from "next/router";
import Post from "../../../components/Post";
import { Box, Divider, styled } from "@mui/material";
import NavBar from "../../../components/NavBar";
import RightSideBar from "../../../components/RightSideBar";

type Props = {};

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1336,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const Posts = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Post />
        <Divider orientation="vertical" flexItem />
        <RightSideBar />
      </ContentWrapper>
    </>
  );
};

export default Posts;

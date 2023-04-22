import type { GetStaticProps, NextPage } from "next";
import { groq } from "next-sanity";
import React, { useState } from "react";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";
import NavBar from "../../components/NavBar";
import { Box, Divider, styled } from "@mui/material";
import BlogPosts from "../../components/BlogPosts";
import RightSideBar from "../../components/RightSideBar";

type Props = { pageInfo: PageInfo };

const queryPageInfo = groq`
    *[_type == "pageInfo"][0] {
      ...,
      "resumeUrl": resume.asset->url
    }
`;

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1336,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const Blog: NextPage<Props> = ({ pageInfo }) => {
  const [darkToggle, setDark] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <BlogPosts />
        <Divider orientation="vertical" flexItem />
        <RightSideBar />
      </ContentWrapper>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resPageInfo = await sanityClient.fetch(queryPageInfo);
  const pageInfo: PageInfo = resPageInfo;

  return {
    props: {
      pageInfo,
    },
    revalidate: 60 * 60,
  };
};

import type { GetStaticProps, NextPage } from "next";
import { groq } from "next-sanity";
import React, { useState } from "react";
import Header from "../../components/Header";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";
import ExpandableSearchInput from "../../components/ExpandableSearch";
import NavBar from "../../components/NavBar";

type Props = { pageInfo: PageInfo };

const queryPageInfo = groq`
    *[_type == "pageInfo"][0] {
      ...,
      "resumeUrl": resume.asset->url
    }
`;

const Blog: NextPage<Props> = ({ pageInfo }) => {
  const [darkToggle, setDark] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return <NavBar />;
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

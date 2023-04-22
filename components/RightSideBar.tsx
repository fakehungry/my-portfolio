import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import PopularPostCard from "./PopularPostCard";

type Props = {};

const RightSideBarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minWidth: 300,
  padding: "24px",
  [theme.breakpoints.up("md")]: {
    width: 300,
    padding: "24px 12px",
    alignItems: "flex-start",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const RightSideBar = (props: Props) => {
  return (
    <>
      <RightSideBarWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <StyledTypography>Popular Posts</StyledTypography>
          <PopularPostCard />
          <PopularPostCard />
          <PopularPostCard />
        </Box>
        <Divider />
        <StyledTypography>Feeds from daily.dev</StyledTypography>
      </RightSideBarWrapper>
    </>
  );
};

export default RightSideBar;

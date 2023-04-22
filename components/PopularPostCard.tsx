import { Avatar, Card, CardHeader } from "@mui/material";
import React from "react";

type Props = {};

const PopularPostCard = (props: Props) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="Read in 5 minutes"
      />
    </Card>
  );
};

export default PopularPostCard;

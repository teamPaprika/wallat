import React from "react";

import { Box, List, ListItem, ListItemText } from "@mui/material";

const FEED_LIST = [
  {
    id: 1,
    title: "설문 1. 가나다라마바사",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 1,
    title: "설문 1. 가나다라마바사",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 1,
    title: "설문 1. 가나다라마바사",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 1,
    title: "설문 1. 가나다라마바사",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
];
const Feed = () => {
  const a = 1;
  return (
    <Box sx={{ padding: "100px" }}>
      <Box component="p" sx={{ fontSize: "24px" }}>
        Feed
      </Box>
      <List sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {FEED_LIST.map((item) => (
          <ListItem
            sx={{
              width: "70vw",
              border: "1px solid black",
              backgroundColor: "#E6E6E6",
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Feed;

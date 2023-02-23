import React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { getBrighterHexColor } from "../../utils/color";

const FEED_LIST = [
  {
    id: 1,
    title: "Health Care",
    publisher: "Monecto",
    backgroundColor: "#1E3264",
    emblems: ["👩", "🌴", "🍱"],
  },
  {
    id: 2,
    title: "Car Sharing",
    publisher: "Tada",
    backgroundColor: "#E13300",
    emblems: ["👩", "🌴", "🇰🇷"],
  },
  {
    id: 3,
    title: "Laundry Type",
    publisher: "Laundry Go",
    backgroundColor: "#477D95",
    emblems: ["✨", "🐶"],
  },
  {
    id: 4,
    title: "Happiness",
    publisher: "Olie Kang",
    backgroundColor: "#E8125C",
    emblems: ["⛹️", "💡"],
  },
  {
    id: 5,
    title: "Music Taste",
    description: "Young Kim",
    backgroundColor: "#8C67AC",
    emblems: ["🌈"],
  },
  {
    id: 6,
    title: "Burger Brand",
    description: "No Brand Burger",
    backgroundColor: "#8B1932",
    emblems: ["🎬"],
  },
];
const Feed = () => {
  const a = 1;
  return (
    <Box sx={{ padding: "40px 100px" }}>
      <Box component="p" sx={{ fontSize: "24px" }}>
        Feed
      </Box>
      <List sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {FEED_LIST.map((item) => (
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "100px",
              px: "30px",
              borderRadius: "20px",
              backgroundColor: item.backgroundColor,
            }}
          >
            <Box>
              <ListItemText primary={item.title} sx={{ color: "#FFFFFF" }} />
              <ListItemText
                primary={item.publisher}
                sx={{ color: "#FFFFFF" }}
              />
            </Box>
            <Box>
              <AvatarGroup>
                {item.emblems.map((emblem) => (
                  <Avatar
                    sx={{
                      backgroundColor: getBrighterHexColor(
                        item.backgroundColor
                      ),
                    }}
                  >
                    {emblem}
                  </Avatar>
                ))}
              </AvatarGroup>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Feed;

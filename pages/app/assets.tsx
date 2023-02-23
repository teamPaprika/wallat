import React from "react";
import { Box, Typography } from "@mui/material";

const EMBLUM_LISTS = [
  {
    id: 1,
    label: "female",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "👩",
  },
  {
    id: 2,
    label: "20's",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🌴",
  },
  {
    id: 3,
    label: "Korea",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🇰🇷",
  },
  {
    id: 4,
    label: "Food Lover",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🍱",
  },
  {
    id: 5,
    label: "Driver License",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🚗",
  },
  {
    id: 6,
    label: "Exerciser",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "⛹️",
  },
  {
    id: 7,
    label: "Movie Lover",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🎬",
  },
  {
    id: 8,
    label: "Dog Person",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🐶",
  },
  {
    id: 9,
    label: "Student",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
    image: "🎒",
  },
];
const Assets = () => {
  const a = 1;
  return (
    <Box sx={{ padding: "100px" }}>
      <Box component="p" sx={{ fontSize: "40px", fontWeight: 700 }}>
        My Emblem
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {EMBLUM_LISTS.map((item, index) => (
          <Box key={item.id}>
            <Box
              sx={{
                width: "25vw",
                height: "25vw",
                border: "1px solid black",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1A1B20",
              }}
            >
              <Typography sx={{ fontSize: "calc(25vw*0.4)" }}>
                {item.image}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                pt: "15px",
                fontSize: "calc(25vw*0.1)",
              }}
            >
              {item.label}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Assets;

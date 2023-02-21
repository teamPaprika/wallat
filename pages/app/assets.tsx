import React from "react";

import { Box } from "@mui/material";

const EMBLUM_LISTS = [
  {
    id: 1,
    label: "EMBLUM",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 2,
    label: "EMBLUM",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 3,
    label: "EMBLUM",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 4,
    label: "EMBLUM",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
  {
    id: 5,
    label: "EMBLUM",
    description:
      "EMBLUM is a decentralized protocol for the creation and management of digital assets.",
  },
];
const Assets = () => {
  const a = 1;
  return (
    <Box sx={{ padding: "100px" }}>
      <Box component="p" sx={{ fontSize: "24px" }}>
        My Emblem
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {EMBLUM_LISTS.map((item, index) => (
          <Box
            sx={{
              width: "25vw",
              height: "300px",
              border: "1px solid black",
              borderRadius: "12px",
            }}
            key={index}
          >
            {item.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Assets;

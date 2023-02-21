import React, { useState } from "react";

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Deploy = ({
  tags = [
    { tag: "Male", address: "0x01" },
    { tag: "Female", address: "0x02" },
    { tag: "18-24", address: "0x03" },
    { tag: "25-34", address: "0x04" },
    { tag: "35-44", address: "0x05" },
    { tag: "45-54", address: "0x06" },
    { tag: "55-64", address: "0x07" },
    { tag: "65+", address: "0x08" },
    { tag: "Asian", address: "0x09" },
    { tag: "Black", address: "0x0A" },
    { tag: "Hispanic", address: "0x0B" },
    { tag: "Native American", address: "0x0C" },
    { tag: "Pacific Islander", address: "0x0D" },
    { tag: "White", address: "0x0E" },
    { tag: "Other", address: "0x0F" },
    { tag: "high school", address: "0x10" },
    { tag: "some college", address: "0x11" },
    { tag: "bachelor's degree", address: "0x12" },
    { tag: "master's degree", address: "0x13" },
    { tag: "doctoral degree", address: "0x14" },
    { tag: "less than $25,000", address: "0x15" },
    { tag: "$25,000 - $49,999", address: "0x16" },
    { tag: "$50,000 - $74,999", address: "0x17" },
    { tag: "$75,000 - $99,999", address: "0x18" },
    { tag: "$100,000 - $149,999", address: "0x19" },
  ],
}) => {
  const a = 1;
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagList, setTagList] = useState(
    tags.map((tag) => ({
      label: tag.tag,
      value: tag.address,
    }))
  );

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant="h4" fontWeight="bold">
        Deploy
      </Typography>

      <Grid2
        container
        component="form"
        sx={{ display: "flex" }}
        rowGap={2}
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Grid2 xs={12} sx={{ display: "flex" }}>
          <TextField variant="standard" placeholder="URL" fullWidth />
          <Button variant="contained">Submit</Button>
        </Grid2>
        <Grid2 xs={12}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={tagList}
            getOptionLabel={(option) => option.label}
            defaultValue={[tagList[13]]}
            value={tagList.filter((tag) => selectedTags.includes(tag.value))}
            onChange={(event, newValue) => {
              console.log(newValue);
              setSelectedTags(newValue.map((tag) => tag.value));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Multiple values"
                placeholder="Favorites"
              />
            )}
          />
        </Grid2>
      </Grid2>
      <Grid2 container columnSpacing={1}>
        {tagList.map((tag, index) => (
          <Grid2 xs={4}>
            <Card
              variant="outlined"
              sx={{ p: 2, mb: 2, borderRadius: 2 }}
              key={tag.value}
            >
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedTags([...selectedTags, tag.value]);
                  } else {
                    setSelectedTags(
                      selectedTags.filter((t) => t !== tag.value)
                    );
                  }
                }}
                inputProps={{ "aria-label": "controlled" }}
                checked={selectedTags.includes(tag.value)}
              />
              <Typography variant="h6" fontWeight="bold">
                {tag.label}
              </Typography>
              <Typography variant="body1">{tag.value}</Typography>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Deploy;

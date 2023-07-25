import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div>
        <div>
          <Container sx={{ mt: 5 }}>
            <Typography
              variant="h1"
              fontSize={40}
              align="center"
              fontWeight={400}
              gutterBottom
            >
              Home
            </Typography>
          </Container>
        </div>
      </div>
    </>
  );
}

import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import "./MainPage.scss";

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
            <div className="adverts">
              <div className="advertOne">
                <Typography className="color">
                  40% Discount this Summer! Have a smile brighter than the sun!
                </Typography>
              </div>
              <div className="advertTwo">
                <Typography className="color">
                  In Philip Theodore Sherman Dentist we take care of your smile!
                </Typography>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

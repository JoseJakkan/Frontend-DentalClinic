import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./MainPage.scss";

export default function HomePage() {
  return (
    <>
      <div className="background">
        <div className="shade">
          <Container className="maxSize" sx={{ mt: 5 }}>
            <Typography
              variant="h1"
              fontSize={40}
              align="center"
              fontWeight={400}
              gutterBottom
            >
              Home
            </Typography>
            <box className="adverts">
              <Typography className="advert">
                In Phipil Theodore Sherman Dentist we take care of your smile
              </Typography>
              <Typography className="advert">
                40% Discount Summer! Come to have a brigther smile than the sun!
              </Typography>
            </box>
          </Container>
        </div>
      </div>
    </>
  );
}

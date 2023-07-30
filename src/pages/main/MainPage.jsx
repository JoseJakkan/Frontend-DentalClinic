import React from "react";
import "./MainPage.scss";
import Card from "@mui/material/Card";
import "./MainPage.scss";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  return (
    <div className="center">
      <h1 className="titles">Philip Theodore Sherman Dentist</h1>

      <Grid className="center" container spacing={24}>
        <Grid item md={3}>
          <Card className="border" sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/sumer.jpg"
              title="summer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Summer Discount
              </Typography>
              <Typography variant="body2" color="text.secondary">
                40% discount in all our services this summer. You can have a
                smile brighter than the sun!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/discount.jpg"
              title="discount"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                10% discount
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you are a loyal customer, we grant you a 10% discount. We
                take care of your smile.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

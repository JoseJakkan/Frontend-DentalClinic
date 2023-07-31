import React from "react";
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

export default function Services() {
  return (
    <div>
      
      <div className="center">
        <h1 className="titles">About Us</h1>
        <h2 className="titles">Services</h2>
        <Grid container spacing={24}>
          <Grid item md={3}>
            <Card className="border" sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image="../iamges/services1.jfif"
                title="Dental Cleaning"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dental Cleaning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The cleaning of theet and geniva is the basis of a good dental
                  health. In PTSD the Dental Clening is done by the best doctors
                  with the best technology
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image="../iamges/services2.jpg"
                title="Child Care"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Child Care
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The child care is important fot PTSD. Our expert Dr. Robert
                  Smith take care of the cure of the child and the child health.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image="../iamges/services3.jpg"
                title="Cavities"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cavities Cure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Cavities is one of the most common dental issues. Our
                  experts make the perfect of the cavities cure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image="../iamges/services4.jpg"
                title="Thoot Removal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thoot Removal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  When is necessary to remove the thoot? Our experts make the
                  best effort to remove the thoot when is necessary, and
                  substitute with a protesian thoot.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

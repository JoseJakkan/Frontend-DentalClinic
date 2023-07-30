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

export default function About() {
  return (
    <div className="center">
      <h1 className="titles">About Us</h1>
      <h2 className="titles">The Doctors</h2>
      <Grid container spacing={24}>
        <Grid item md={3}>
          <Card className="border" sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/portrait2.jpg"
              title="Philip Sherman"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Philip Sherman
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dr.Philip Sherman is the founder of PTSD and the author of
                multiple books and studies. Is one of the best dentist in the
                world and still working today for his dedication to the people.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/portrait3.jpg"
              title="Laura Palmer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Laura Palmer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Laura Palmer love the misteries of the dental medicine. She
                stills learning from his everyday work and full dedication to
                the people.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/portrait4.jpg"
              title="Stephen Strange"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Stephen Strange
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The doctor strange know that the dental medicine needs one thing
                about anything: Time. Is metodic with the dental medicine and
                this make him one of the best dentist in the world.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../iamges/portrait5.jpg"
              title="Robert Smith"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Robert Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The doctor Robert Smith has only one thing in mind_ The Cure of
                his patients. He has a particular and succeful style.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

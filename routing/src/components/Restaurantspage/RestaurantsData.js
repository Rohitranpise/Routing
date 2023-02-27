import React from "react";
import Data from "../../Data/Data.js";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
} from "@mui/material";
import Footer from "../Footer/Footer.js";

function RestaurantsData() {
  const navigate = useNavigate();
  return Data.map((items) => {
    return (
      <>
        <span>
          <Box className="Box-style" key={items.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194px"
                image={items.url}
                alt="Paella dish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
              </CardContent>
              <Rating
                name="read-only"
                value={items.ratings}
                readOnly
                className="ratings"
              />
              <CardActions>
                <Button size="small" onClick={() => navigate("/food")}>
                  details
                </Button>
                <Button size="small" onClick={() => navigate("/food")}>
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Box>
        </span>
      </>
    );
    <span>
      <Footer />
    </span>;
  });
}

export default RestaurantsData;

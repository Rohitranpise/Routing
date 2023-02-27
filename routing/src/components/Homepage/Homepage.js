import React, { useContext, useState } from "react";
import FoodItems from "../FoodItems/FoodItems";
import RestaurantsData from "../Restaurantspage/RestaurantsData";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Box } from "@mui/system";
import Menu from "../../Data/Food";
import { useNavigate } from "react-router-dom";
import inputContext from "../../context/inputContext";
import Footer from "../Footer/Footer";

function Homepage() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { item, setItem } = useContext(inputContext);
  const [first, setfirst] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <RestaurantsData />
      <Typography
        gutterBottom
        variant="h6"
        sx={{ ml: 10, borderTop: 3, borderColor: "#e69900" }}
      >
        Explore more...
      </Typography>
      <span
        className="Items-container"
        style={{
          display: "inline-block",
          marginRight: 50,
          // border: "1px solid red",
          height: "800px",
          width: "1500px",
        }}
      >
        {Menu.map((products) => {
          return (
            <>
              <Box className="Hotels-Menu" key={products.id} sx={{ ml: 10 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="120px"
                    image={products.url}
                    alt="Paella dish"
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {products.name}
                    </Typography>
                    <Typography>$ {products.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        navigate("/food");
                      }}
                    >
                      add
                    </Button>
                    <Button size="medium" onClick={() => handleOpen()}>
                      more info
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </>
          );
        })}
        <Footer />
      </span>
    </>
  );
}

export default Homepage;

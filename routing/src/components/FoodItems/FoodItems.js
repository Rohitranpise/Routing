import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import Menu from "../../Data/Food";
import { useNavigate } from "react-router-dom";
import inputContext from "../../context/inputContext";
import Sample from "./Sample";
import Modal from "@mui/material/Modal";
import Footer from "../Footer/Footer";

function FoodItems(e) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    console.log(e.target.value);
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ mt: 2 }}>aksdjfkasd</Typography>
        </Box>
      </Modal>
    );
  };
  const handleClose = () => setOpen(false);
  const { item, setItem } = useContext(inputContext);
  const [first, setfirst] = useState([]);

  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <span
        className="Items-container"
        style={{
          display: "inline-block",
          marginRight: 50,
          height: "800px",
          width: "950px",
        }}
      >
        {Menu.map((products) => {
          return (
            <>
              <Box className="Hotels-Menu" key={products.id}>
                <Card sx={{ maxWidth: 350 }}>
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
                        setItem(products);
                        first.push(products);
                      }}
                    >
                      add
                    </Button>
                    <Button
                      size="medium"
                      onClick={(e) => handleOpen(e)}
                      value={products.description}
                      // description={products.name}
                    >
                      more info
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </>
          );
        })}
      </span>
      <span>
        <Footer />
        <Sample first={first} />
      </span>
    </>
  );
}

export default FoodItems;

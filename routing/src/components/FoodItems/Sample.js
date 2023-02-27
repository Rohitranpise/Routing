import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "../../Data/Food";
import Modal from "@mui/material/Modal";
import {
  Button,
  ButtonGroup,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";

function Sample({ first }) {
  console.log(first);
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let initialPrice = 0;
  let initialCount = 0;
  const [price, setPrice] = useState(initialPrice);
  console.log("price", price);
  const [count, setCount] = useState(initialCount);
  // console.log(first);

  const deleteOne = (e, item) => {
    let removedItem = first.find({ id: item.id });
    console.log(removedItem);
  };

  const addOneToCart = (e) => {
    console.log("addevent", e.target.value);
    setCount((prevCount) => prevCount + 1);
    setPrice(price + Number(e.target.value));
  };

  const removeOneFromCart = (event) => {
    console.log("event", event.target.value);
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1);
      setPrice(price - Number(event.target.value));
    } else {
      alert(`please select proper number of items`);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Your Order Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Total items:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Total amount:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Your name:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Your contact:
          </Typography>
          <Button sx={{ marginTop: 10 }} onClick={() => handleClose()}>
            Done
          </Button>
        </Box>
      </Modal>
      <div
        style={{
          marginLeft: 1050,
          marginTop: -780,
          marginRight: 30,
          border: 2,
        }}
      >
        <h2> My orders</h2>
        {first.map((item) => {
          return (
            <>
              <Box sx={{ marginTop: 2 }} key={item.id}>
                <Card sx={{ width: 400, display: "inline-flex" }}>
                  <img
                    src={item.url}
                    component="img"
                    height="120"
                    width="100"
                    alt="green iguana"
                  ></img>
                  <span style={{ marginLeft: 250, marginTop: 8 }}>
                    <DeleteIcon
                      sx={{
                        color: blue[600],
                        fontSize: 30,
                        cursor: "pointer",
                      }}
                      onClick={(e) => deleteOne(e, item)}
                    ></DeleteIcon>
                  </span>
                  <span style={{ marginLeft: -250 }}>
                    <ButtonGroup
                      arient="outlined"
                      area-label="outlined button group"
                      sx={{ height: 40, marginTop: 8 }}
                    >
                      <Button
                        onClick={(e) => removeOneFromCart(e)}
                        value={item.price}
                      >
                        -1
                      </Button>
                      <Button>{item.quantity}</Button>
                      <Button
                        onClick={(e) => addOneToCart(e)}
                        value={item.price}
                      >
                        +1
                      </Button>
                    </ButtonGroup>
                  </span>
                  <span style={{ marginTop: 70, marginLeft: 70 }}>
                    <h5>$ {item.price}</h5>
                  </span>
                  <span style={{ marginTop: 10, marginLeft: -250 }}>
                    <h5>{item.name}</h5>
                  </span>
                </Card>
              </Box>
            </>
          );
        })}
        <h4 style={{ marginTop: 20, height: 10 }}>Total: ${price}</h4>
        <Button
          sx={{ marginLeft: 38, marginTop: -6 }}
          onClick={() => handleOpen()}
        >
          checkOut
        </Button>
      </div>
    </>
  );
}

export default Sample;

import React from "react";
import { Modal, Backdrop, Fade, Button } from "@mui/material";
const Order = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          marginLeft: "28%",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            marginRight: "4px",
            width: "320px",
            height: "350px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              border: "2px solid #54b548",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "10px" }}>Продукт 1</h3>
              <p style={{ marginBottom: "20px" }}>Описание продукта 1.</p>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#54b548",
                color: "white",
                height: "45px",
                borderRadius: "5px",
              }}
              onClick={() => console.log("Продукт 1 заказан")}
            >
              Заказать
            </Button>
          </div>
        </div>
        <div
          style={{
            marginRight: "4px",
            width: "320px",
            height: "350px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              border: "2px solid #54b548",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "10px" }}>Продукт 1</h3>
              <p style={{ marginBottom: "20px" }}>Описание продукта 1.</p>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#54b548",
                color: "white",
                height: "45px",
                borderRadius: "5px",
              }}
              onClick={() => console.log("Продукт 1 заказан")}
            >
              Заказать
            </Button>
          </div>
        </div>{" "}
        <div
          style={{
            marginRight: "4px",
            width: "320px",
            height: "350px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              border: "2px solid #54b548",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "10px" }}>Продукт 1</h3>
              <p style={{ marginBottom: "20px" }}>Описание продукта 1.</p>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#54b548",
                color: "white",
                height: "45px",
                borderRadius: "5px",
              }}
              onClick={() => console.log("Продукт 1 заказан")}
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

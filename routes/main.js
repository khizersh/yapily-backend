const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/getInstitutions", async (req, res) => {
  try {
    const resp = await axios.get("https://api.yapily.com/institutions", {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            "e97a450b-047c-421c-940f-bad178948d52:5fVHuRzKAWgIp2cuRU2zkJpQBB3ARpXn"
          ).toString("base64"),
      },
    });

    const data = resp.data;
    res.send({ status: "0000", message: "success", data: data }).status(200);
  } catch (error) {
    console.log("error : ", error);
    res.send({ status: 9999, message: "Something went wrong!" }).status(200);
  }
});

router.post("/payment-auth-request", async (req, res) => {
  try {
    const body = req.body;
    console.log("body :: ", body);
    const response = await axios.post(
      `https://api.yapily.com/payment-auth-requests?raw=false`,
      body,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "psu-id": "string",
          "psu-corporate-id": "string",
          "psu-ip-address": "string",
          Authorization:
            "Basic " +
            Buffer.from(
              "e97a450b-047c-421c-940f-bad178948d52:5fVHuRzKAWgIp2cuRU2zkJpQBB3ARpXn"
            ).toString("base64"),
        },
      }
    );

    const data = response.data;
    res.send({ status: "0000", message: "success", data: data }).status(200);
  } catch (error) {
    console.log("error : ", error);
    res.send({ status: 9999, message: "Something went wrong!" }).status(200);
  }
});

router.post("/make-payment", async (req, res) => {
  try {
    const { consent, request } = req.body;
    const response = await axios.post(
      `https://api.yapily.com/payments?raw=false`,
      request,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          consent: consent,
          "psu-id": "string",
          "psu-corporate-id": "string",
          "psu-ip-address": "string",
          Authorization:
            "Basic " +
            Buffer.from(
              "e97a450b-047c-421c-940f-bad178948d52:5fVHuRzKAWgIp2cuRU2zkJpQBB3ARpXn"
            ).toString("base64"),
        },
      }
    );

    const data = response.data;
    res.send({ status: "0000", message: "success", data: data }).status(200);
  } catch (error) {
    console.log("error : ", error);
    res.send({ status: 9999, message: "Something went wrong!" }).status(200);
  }
});

router.post("/get-payment-detail", async (req, res) => {
  try {
    const { paymentId, consent } = req.body;
    const response = await axios.get(
      `https://api.yapily.com/payments/${paymentId}/details`,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          consent: consent,
          "psu-id": "string",
          "psu-corporate-id": "string",
          "psu-ip-address": "string",
          Authorization:
            "Basic " +
            Buffer.from(
              "e97a450b-047c-421c-940f-bad178948d52:5fVHuRzKAWgIp2cuRU2zkJpQBB3ARpXn"
            ).toString("base64"),
        },
      }
    );

    const data = response.data;
    res
      .send({ status: "0000", message: "success", data: data })
      .status(200);
  } catch (error) {
    console.log("error : ", error);
    res.send({ status: 9999, message: "Something went wrong!" }).status(200);
  }
});

module.exports = router;

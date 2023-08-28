// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

module.exports = (app) => {

  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: [FRONTEND_URL]
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

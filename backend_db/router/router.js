"use strict";

import express from "express";
import {
  createDon,
  getCats,
  getClans,
  getGebiete,
  createClan,
} from "../controller/controller.js";

export const router = new express.Router();

router.get("/cat", (req, res) => getCats(req, res));
router.post("/cat", createDon);
router.get("/clan", (req, res) => getClans(req, res));
router.post("/clan/new", createClan);
router.get("/gebiete", (req, res) => getGebiete(req, res));

"use strict";

import express from "express";
import { getCats, getClans, getGebiete } from "../controller/controller.js";

export const router = new express.Router();

router.get("/cat", (req, res) => getCats(req, res));
router.get("/clan", (req, res) => getClans(req, res));
router.get("/gebiete", (req, res) => getGebiete(req, res));

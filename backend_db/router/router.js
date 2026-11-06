"use strict";

import express from "express";
import {
  createDon,
  getCats,
  getClans,
  getGebiete,
  createClan,
  getClanById,
  setGebietCookie,
  setClanCookie,
  setGebiet,
  getRankById,
  setClanForCat,
} from "../controller/controller.js";

export const router = new express.Router();

router.get("/cat", (req, res) => getCats(req, res));
router.post("/cat", createDon);
router.put("/cat/:id", (req, res) => setClanForCat(req, res));
router.get("/rank/:id", getRankById);
router.get("/clan", (req, res) => getClans(req, res));
router.get("/clan/set/:id", setClanCookie);
router.get("/clan/:id", (req, res) => getClanById(req, res));
router.post("/clan/new", createClan);
router.get("/gebiete", (req, res) => getGebiete(req, res));
router.put("/gebiete/:id", (req, res) => setGebiet(req, res));
router.get("/gebiete/set/:id", setGebietCookie);

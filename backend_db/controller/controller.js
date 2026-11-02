"use strict";

import {
  allCats,
  allClans,
  allGebiete,
  createNewDon,
  createNewClan,
} from "../service/service.js";

export async function getCats(req, res) {
  const cats = await allCats();
  res.status(200).json(cats);
}

export async function getClans(req, res) {
  const clans = await allClans();
  res.status(200).json(clans);
}

export async function getGebiete(req, res) {
  const gebiete = await allGebiete();
  res.status(200).json(gebiete);
}

// POST

export async function createDon(req, res) {
  const result = await createNewDon(req.body);
  res.status(201).json(result);
}

export async function createClan(req, res) {
  const result = await createNewClan(req.body);
  res.status(201).json(result);
}

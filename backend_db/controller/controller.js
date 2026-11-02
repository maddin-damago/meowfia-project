"use strict";

import { allCats, allClans, allGebiete } from "../service/service.js";

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

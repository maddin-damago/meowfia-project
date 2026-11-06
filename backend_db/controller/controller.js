"use strict";

import {
  allCats,
  allClans,
  allGebiete,
  createNewDon,
  createNewClan,
  clanById,
  setGebietsClan,
  rankById,
  setClan,
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

// Get By Id

export async function getClanById(req, res) {
  const id = req.params.id;
  const clan = await clanById(id);
  res.status(200).json(clan);
}

export async function getRankById(req, res) {
  const id = req.params.id;
  const rank = await rankById(id);
  res.status(200).json(rank);
}

// COOKIES NOM NOM

export function setGebietCookie(req, res) {
  const id = req.params.id;
  res.cookie("gebiet", id, {
    partitioned: true,
    secure: true,
  });
  res.sendStatus(200);
}

export function setClanCookie(req, res) {
  const id = req.params.id;
  res.cookie("clan", id, {
    partitioned: true,
    secure: true,
  });
  res.sendStatus(200);
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

// SET

export async function setGebiet(req, res) {
  const id = req.params.id;
  const result = await setGebietsClan(id, req.body.value);
  res.status(201).json(result);
}

export async function setClanForCat(req, res) {
  const id = req.params.id;
  const result = await setClan(id, req.body.value);
  res.status(201).json(result);
}

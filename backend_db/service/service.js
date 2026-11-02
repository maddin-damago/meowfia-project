"use strict";

import {
  getAllCats,
  getAllClans,
  getAllGebiete,
  createNewCat,
} from "../repo/repo.js";

export async function allCats() {
  const cats = await getAllCats();
  return cats;
}

export async function allClans() {
  const clans = await getAllClans();
  return clans;
}

export async function allGebiete() {
  const gebiete = await getAllGebiete();
  return gebiete;
}

// POST

export async function createNewDon(cat) {
  const newCat = {};

  cat.cat_rank_id = 1;
  return await createNewCat(cat);
}

export async function createNewClan(data) {}

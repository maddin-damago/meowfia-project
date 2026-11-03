"use strict";

import {
  getAllCats,
  getAllClans,
  getAllGebiete,
  createNewCat,
  getClanById,
  createNewClanR,
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

// Get By Id

export async function clanById(id) {
  const clan = await getClanById(id);
  return clan;
}

// POST

export async function createNewDon(cat) {
  const newCat = {};

  cat.cat_rank_id = 1;
  return await createNewCat(cat);
}

export async function createNewClan(data) {
  const cat = {
    cat_name: data[0].cat_name,
    cat_rank_id: 1,
    avatar: "https://mafiacats.onrender.com/cats/4",
  };

  const clan = {
    clan_name: data[1].clan_name,
    fische: 100,
  };

  return await createNewClanR(clan, cat);
}

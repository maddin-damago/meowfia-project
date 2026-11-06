"use strict";

import {
  getAllCats,
  getAllClans,
  getAllGebiete,
  createNewCat,
  getClanById,
  createNewClanR,
  setGebietsClanR,
  getRankByIdR,
  getCatByIdR,
  setClanForCatR,
  updateClanFischeR,
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

export async function rankById(id) {
  const rank = await getRankByIdR(id);
  return rank;
}

export async function catById(id) {
  const cat = await getCatByIdR(id);
  return cat;
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

// SET

export async function setGebietsClan(gebietsId, clanId) {
  await setGebietsClanR(gebietsId, clanId);
}

export async function setClan(catId, clanId) {
  const cat = await getCatByIdR(catId);
  const clan = await getClanById(clanId);
  if (clan[0].fische - cat[0].gehalt >= 0) {
    setClanForCatR(catId, clanId);
    updateClanFischeR(clan[0].fische - cat[0].gehalt, clanId);
  } else {
    console.log("Nicht genug Fische im Clan");
  }
}

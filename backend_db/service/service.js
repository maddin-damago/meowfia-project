"use strict";

import { getAllCats, getAllClans, getAllGebiete } from "../repo/repo.js";

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

"use strict";

const membersListEl = document.getElementById("members");
const mitgliederHeadline = document.getElementById("mitglieder");

document.addEventListener("DOMContentLoaded", async () => {
  const cats = await getMeowfiaMembers();
  mitgliederHeadline.textContent = "Mitglieder (" + cats.length + ")";
  for (let i = 0; i < cats.length; i++) {
    const { catName, catRank, catSpecialty, catStatus, catAvatar } = cats[i];
    const memberCardEl = document.createElement("div");
    memberCardEl.classList.add("member-card");

    const catAvatarContainer = document.createElement("div");
    const catAvatarEl = document.createElement("img");
    catAvatarEl.src = catAvatar;
    catAvatarContainer.append(catAvatarEl);

    const catDataContainer = document.createElement("div");
    const catNameEl = document.createElement("h3");
    catNameEl.textContent = catName;
    const catRankEl = document.createElement("div");
    catRankEl.textContent = catRank;
    const catSpecialtyEl = document.createElement("div");
    catSpecialtyEl.textContent = catSpecialty;
    const catStatusEl = document.createElement("div");
    catStatusEl.textContent = catStatus;
    catDataContainer.append(catNameEl);
    catDataContainer.append(catRankEl);
    catDataContainer.append(catSpecialtyEl);
    catDataContainer.append(catStatusEl);

    memberCardEl.append(catAvatarContainer);
    memberCardEl.append(catDataContainer);

    membersListEl.append(memberCardEl);
  }
});

async function getMeowfiaMembers() {
  const response = await fetch("http://localhost:1234/api/members");
  return response.json();
}

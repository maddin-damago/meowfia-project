"use strict";

const membersListEl = document.getElementById("members");
const mitgliederHeadline = document.getElementById("mitglieder");

document.addEventListener("DOMContentLoaded", async () => {
  const allClans = await getMeowfiaClans();

  mitgliederHeadline.textContent = "Clans (" + allClans.length + ")";
  for (let i = 0; i < allClans.length; i++) {
    const clanDataContainer = document.createElement("div");
    clanDataContainer.classList.add("gebiet-card");
    const clanNameEl = document.createElement("h3");
    clanNameEl.textContent = allClans[i].clan_name;

    const clanDon = document.createElement("span");
    clanDon.textContent = "Don: " + allClans[i].don;

    const clanFischration = document.createElement("span");
    clanFischration.textContent = "Fische: " + allClans[i].fische;

    const gebieteClan = document.createElement("div");
    gebieteClan.textContent = "Gebiete: " + allClans[0].gebiete;
    const membersClan = document.createElement("div");
    membersClan.textContent = "Members: " + allClans[0].members;

    clanDataContainer.append(clanNameEl);
    clanDataContainer.append(clanDon);
    clanDataContainer.append(clanFischration);
    clanDataContainer.append(gebieteClan);
    clanDataContainer.append(membersClan);

    membersListEl.append(clanDataContainer);

    clanDataContainer.addEventListener("click", async () => {
      const response = await fetch(
        `http://127.0.0.1:1234/api/v1/clan/set/${allClans[i].id}`,
        {
          credentials: "include",
        },
      );
    });
  }
});

async function getMeowfiaClans() {
  const response = await fetch("http://127.0.0.1:1234/api/v1/clan");
  return response.json();
}

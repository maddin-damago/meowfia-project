"use strict";

const membersListEl = document.getElementById("members");
const mitgliederHeadline = document.getElementById("mitglieder");

document.addEventListener("DOMContentLoaded", async () => {
  const gebiete = await getMeowfiaRegions();
  gebiete.sort((a, b) => (a.fischration > b.fischration ? -1 : 1));
  mitgliederHeadline.textContent = "Gebiete (" + gebiete.length + ")";
  for (let i = 0; i < gebiete.length; i++) {
    const clan = await getMeowfiaClanById(gebiete[i].clan_id);

    const gebietDataContainer = document.createElement("div");
    gebietDataContainer.classList.add("gebiet-card");
    const gebietNameEl = document.createElement("h3");
    gebietNameEl.textContent = gebiete[i].gebiet_name;

    const gebietFischration = document.createElement("span");
    gebietFischration.textContent = "Fische: " + gebiete[i].fischration;

    const gebietClan = document.createElement("div");
    gebietClan.classList.add("clan-badge");
    gebietClan.textContent = clan ? clan[0].clan_name : "unbesetzt";

    gebietDataContainer.append(gebietNameEl);
    gebietDataContainer.append(gebietFischration);
    gebietDataContainer.append(gebietClan);

    membersListEl.append(gebietDataContainer);
  }
});

async function getMeowfiaRegions() {
  const response = await fetch("http://localhost:1234/api/v1/gebiete");
  return response.json();
}

async function getMeowfiaClanById(id) {
  if (id) {
    const response = await fetch(`http://localhost:1234/api/v1/clan/${id}`);
    return response.json();
  }

  return;
}

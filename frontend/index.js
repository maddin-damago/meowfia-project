"use strict";

const membersListEl = document.getElementById("members");
const mitgliederHeadline = document.getElementById("mitglieder");

document.addEventListener("DOMContentLoaded", async () => {
  const cats = await getMeowfiaMembers();
  const clanlessCats = cats.filter(
    (c) => c.clan_id === null && c.cat_status === 1,
  );

  mitgliederHeadline.textContent =
    "Clanless Cats (" + clanlessCats.length + ")";
  for (let i = 0; i < clanlessCats.length; i++) {
    const rank = await getMeowfiaRankById(clanlessCats[i]["cat_rank_id"]);
    console.log(clanlessCats[i]);
    const memberCardEl = document.createElement("div");
    memberCardEl.classList.add("member-card");

    const catAvatarContainer = document.createElement("div");
    const catAvatarEl = document.createElement("img");
    catAvatarEl.src = clanlessCats[i]["cat_avatar_url"];
    catAvatarContainer.append(catAvatarEl);

    const catDataContainer = document.createElement("div");
    const catNameEl = document.createElement("h3");
    catNameEl.textContent = clanlessCats[i]["cat_name"];
    const catRankEl = document.createElement("div");
    catRankEl.textContent = rank[0].rank_name;
    catRankEl.style.fontStyle = "italic";
    catRankEl.style.fontSize = "14px";
    const catSpecialtyEl = document.createElement("div");
    catSpecialtyEl.style.margin = "3px 0";
    catSpecialtyEl.textContent = clanlessCats[i]["cat_skill"];
    const catStatusEl = document.createElement("div");
    catStatusEl.textContent =
      clanlessCats[i]["cat_status"] == 1 ? "Active" : "Dead";
    catStatusEl.style.fontWeight = "bold";
    catStatusEl.style.color =
      clanlessCats[i]["cat_status"] == 1 ? "Green" : "Red";

    const hireButton = document.createElement("button");
    hireButton.textContent = "Hire Me";
    hireButton.style.margin = "3px 0";
    hireButton.style.padding = "3px 10px";
    hireButton.style.cursor = "pointer";

    catDataContainer.append(catNameEl);
    catDataContainer.append(catRankEl);
    catDataContainer.append(catSpecialtyEl);
    catDataContainer.append(catStatusEl);

    catDataContainer.append(hireButton);

    memberCardEl.append(catAvatarContainer);
    memberCardEl.append(catDataContainer);

    membersListEl.append(memberCardEl);

    const cookie = await cookieStore.get("clan");

    hireButton.addEventListener("click", async () => {
      await fetch(`http://127.0.0.1:1234/api/v1/cat/${clanlessCats[i].id}`, {
        method: "PUT",
        body: JSON.stringify(cookie),
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  }
});

async function getMeowfiaMembers() {
  const response = await fetch("http://localhost:1234/api/v1/cat");
  return response.json();
}

async function getMeowfiaRankById(id) {
  if (id) {
    const response = await fetch(`http://127.0.0.1:1234/api/v1/rank/${id}`);
    return response.json();
  }

  return;
}

"use strict";

const catNameInput = document.getElementById("cat-name");
const clanNameInput = document.getElementById("clan-name");
const addMemberBtn = document.getElementById("add-member-button");
const formWarning = document.getElementById("form-warning");

document.addEventListener("DOMContentLoaded", () => {
  addMemberBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const catName = catNameInput.value;
    const clanName = clanNameInput.value;

    if (!catName || !clanName) {
      formWarning.textContent = "Bitte Namen ausfüllen";
    } else {
      const newClan = [
        {
          cat_name: catName,
        },
        {
          clan_name: clanName,
        },
      ];

      await saveNewClan(newClan);
    }
  });
});

async function saveNewClan(clan) {
  try {
    await fetch("http://localhost:1234/api/v1/clan/new", {
      method: "POST",
      body: JSON.stringify(clan),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

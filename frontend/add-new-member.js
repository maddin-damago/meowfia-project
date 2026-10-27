"use strict";

const catNameInput = document.getElementById("cat-name");
const catRankInput = document.getElementById("cat-rank");
const catSpecialtyInput = document.getElementById("cat-specialty");
const addMemberBtn = document.getElementById("add-member-button");
const formWarning = document.getElementById("form-warning");

document.addEventListener("DOMContentLoaded", () => {
  addMemberBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const catName = catNameInput.value;
    const catRank = catRankInput.value;
    const catSpecialty = catSpecialtyInput.value;

    if (!catName || !catRank) {
      formWarning.textContent = "Bitte Name und Rank ausfüllen";
    } else {
      const newCat = {
        catName,
        catRank,
        catSpecialty,
      };

      await saveNewCat(newCat);
    }
  });
});

async function saveNewCat(cat) {
  try {
    await fetch("http://localhost:1234/api/members", {
      method: "POST",
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

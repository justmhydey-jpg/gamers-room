
/* =================================
   GAMERS ROOM — App JavaScript
   Version 1.0
================================= */

"use strict";

// Update the footer year automatically.
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smoothly navigate to sections on this page.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Gaming community cards are currently previews.
document.querySelectorAll(".game-card").forEach((card) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", 
    `${card.querySelector("h3")?.textContent || "Gaming"} community preview`
  );
});

// Log that the app foundation has loaded.
console.info("GAMERS ROOM is ready.");

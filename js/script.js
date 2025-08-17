(function() {
  "use strict";

  const selected = PHOTOS.filter(photo => isWithin60Days(photo.date));
  
  const randomIndex = Math.floor(Math.random() * selected.length);
  const selectedPhoto = selected[randomIndex];

  const headerFigure = document.querySelector("figure.header-img");
  const imgElement = headerFigure.querySelector("img");
  const figcaptionElement = headerFigure.querySelector("figcaption");

  imgElement.addEventListener("load", () => {
    imgElement.style.opacity = 1;
  });

  imgElement.src = `assets/${selectedPhoto.filename}`;

  if (selectedPhoto.date) {
    const date = new Date(selectedPhoto.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    figcaptionElement.textContent = formattedDate;
  }

  
  function isWithin60Days(dateStr) {
    const now = new Date();
    const [year, month, day] = dateStr.split("-").map(Number);
  
    // Convert input and today to MM-DD format in a leap-year-safe dummy year
    const thisYear = 2000; // Leap year for Feb 29 safety
    const inputDate = new Date(thisYear, month - 1, day);
    const currentDate = new Date(thisYear, now.getMonth(), now.getDate());
  
    const msDiff = Math.abs(inputDate - currentDate);
    const daysDiff = msDiff / (1000 * 60 * 60 * 24);
  
    return daysDiff <= 60;
  };
})()
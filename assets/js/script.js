const latestButton = document.getElementById("latest-btn");
const sportsButton = document.getElementById("sports-btn");
const covidButton = document.getElementById("covid-cases-btn");
const pageContent = document.getElementById("page-content");
const sportsSection = document.getElementById("sports-section");
const latestSection = document.getElementById("latest-section");
const covidSection = document.getElementById("covid-section");

latestButton.addEventListener("click", openLatestPage);

function openLatestPage() {
  console.log("Latest Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  sportsSection.remove();
  covidSection.remove();
}

sportsButton.addEventListener("click", openSportPage);

function openSportPage() {
  console.log("Sport Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  latestSection.remove();
  covidSection.remove();
}

covidButton.addEventListener("click", openCovidPage);

function openCovidPage() {
  console.log("Covid Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  latestSection.remove();
  sportsSection.remove();
}

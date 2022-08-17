const latestButton = document.getElementById("latest-btn");
const sportsButton = document.getElementById("sports-btn");
const covidButton = document.getElementById("covid-cases-btn");
const pageContent = document.getElementById("page-content");
const sportsSection = document.getElementById("sports-section");
const latestSection = document.getElementById("latest-section");
const covidSection = document.getElementById("covid-section");
const latestHeadlines = document.getElementById("latestHeadlines");
const latestLinks = document.getElementById("links");
const headlineList = document.getElementById("headlineList");
const sportsHeadlines = document.getElementById("sportsHeadlines");
const sportsLinks = document.getElementById("sportsLinks");
const SportsHeadlineList = document.getElementById("sportsHeadlineList");

latestButton.addEventListener("click", openLatestPage);

function openLatestPage() {
  console.log("Latest Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  sportsSection.remove();
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

// fetchButton.addEventListener("click", getApi);
function handleNewsApi() {
  let firstApiUrl =
    "http://api.mediastack.com/v1/news?access_key=28c721d782d6d69f95ee0cc65221b176&date=2022-08-08&countries=gb";

  fetch(firstApiUrl)
    .then((response) => response.json())
    .then((firstApiData) => handleNewsApiData(firstApiData));

  function handleNewsApiData(firstApiData) {
    //console.log(firstApiData.data);
    // headlineList = document.createElement("ul");
    for (var i = 0; i < 25; i++) {
      //create a html tag
      //append text content
      console.log(firstApiData.title);

      if (firstApiData.data[i].category === "sports") {
        handleSportsData(firstApiData.data[i]);
      } else {
        handleNewsData(firstApiData.data[i]);
      }
    }
  }
}

function handleNewsData(newsData) {
  //function for latest
  console.log(newsData);
  // h2ForLatest = document.createElement("h2");
  // latestHeadlines.classList.add("is-four-fifths");
  // h2ForLatest.textContent = newsData.title;
  // latestHeadlines.appendChild(h2ForLatest);
  listHead = document.createElement("li");
  linkForLatest = document.createElement("a");
  linkForLatest.setAttribute("id", "latestid");
  linkForLatest.classList.add("link-button");
  // linkForLatest = document.createElement("");
  linkForLatest.setAttribute("href", newsData.url);
  console.log(newsData);
  linkForLatest.textContent = newsData.title;
  //latestHeadlines.appendChild(linkForLatest);
  listHead.appendChild(linkForLatest);
  headlineList.appendChild(listHead);
}

function handleSportsData(sportsData) {
  // function for sports
  console.log(sportsData);
  // h2ForLatest = document.createElement("h2");
  // latestHeadlines.classList.add("is-four-fifths");
  // h2ForLatest.textContent = sportsData.title;
  // latestHeadlines.appendChild(h2ForLatest);
  sportsListHead = document.createElement("li");
  linkForSport = document.createElement("a");
  linkForSport.classList.add("link-button");
  // linkForLatest = document.createElement("");
  linkForSport.setAttribute("href", sportsData.url);
  console.log(sportsData);
  linkForSport.textContent = sportsData.title;
  //latestHeadlines.appendChild(linkForLatest);
  sportsListHead.appendChild(linkForSport);
  SportsHeadlineList.appendChild(sportsListHead);
}

var Anchors = document.getElementById("latestid");

for (var i = 0; i < Anchors.length; i++) {
  Anchors[i].addEventListener("click", function (event) {
    localStorage.setItem("Anchors", event.target.value);

    console.log("Test");
  });
}
//console.log(data[i].description);

secondApiUrl =
  "https://api.covid19api.com/total/country/united-kingdom/status/confirmed?from=2022-03-01T00:00:00Z&to=2022-08-01T00:00:00Z";
fetch(secondApiUrl)
  .then((response) => response.json())
  .then((secondApiData) => console.log(secondApiData));

handleNewsApi();

var url = location.href;
localStorage.setItem("url", url);
function loadOldUrl() {
  location.href = localStorage.getItem("url");
}

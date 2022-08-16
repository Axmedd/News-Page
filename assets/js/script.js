const latestButton = document.getElementById("latest-btn");
const sportsButton = document.getElementById("sports-btn");
const covidButton = document.getElementById("covid-cases-btn");
const localStorageButton = document.getElementById("localStorage-btn");
const pageContent = document.getElementById("page-content");
const sportsSection = document.getElementById("sports-section");
const latestSection = document.getElementById("latest-section");
const covidSection = document.getElementById("covid-section");
const ukCases = $("#uk-cases");

latestButton.addEventListener("click", handleNewsData);

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
  console.log(newsData);
  // h2ForLatest = document.createElement("h2");
  // latestHeadlines.classList.add("is-four-fifths");
  // h2ForLatest.textContent = newsData.title;
  // latestHeadlines.appendChild(h2ForLatest);
  listHead = document.createElement("li");
  linkForLatest = document.createElement("a");
  linkForLatest.classList.add("link-button");
  // linkForLatest = document.createElement("");
  linkForLatest.setAttribute("href", newsData.url);
  console.log(newsData);
  linkForLatest.textContent = newsData.title;
  //latestHeadlines.appendChild(linkForLatest);
  listHead.appendChild(linkForLatest);
  headlineList.appendChild(listHead);
}


firstApiUrl =
  "http://api.mediastack.com/v1/news?access_key=774d6825387c91706870d36a208f2f53&date=2022-08-08&countries=gb";

secondApiUrl =
  "https://api.covid19api.com/total/country/united-kingdom/status/confirmed?from=2022-03-01T00:00:00Z&to=2022-08-01T00:00:00Z";

fetch(firstApiUrl)
  .then((response) => response.json())
  .then((firstApiData) => console.log(firstApiData));

console.log(data[i].description);

fetch(secondApiUrl)
  .then((response) => response.json())
  .then((secondApiData) => console.log(secondApiData));

//iterate array data.length
//data[i].author
=======
function handleSportsData(sportsData) {
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

//console.log(data[i].description);

secondApiUrl = "https://api.covid19api.com/summary";

fetch(secondApiUrl)
  .then((response) => response.json())
  .then((secondApiData) => handleCovidCases(secondApiData));

function printApi(apiData) {
  console.log(apiData);
}
function handleCovidCases(secondApiData) {
  console.log(secondApiData);
  console.log(secondApiData.Countries);
  let countries = secondApiData.Countries;
  for (let i of countries) {
    console.log(i.Country);
    if (i.Country === "United Kingdom") {
      console.log(i);
    }
  }
  //create a html tag
  //append text content
  console.log(secondApiData.data[i].cases);
}
function printApi(apiData) {
  console.log(apiData);
}
function handleCovidCases(secondApiData) {
  console.log(secondApiData);
  console.log(secondApiData.Countries);
  let countries = secondApiData.Countries;
  for (let i of countries) {
    console.log(i.Country);
    if (i.Country === "United Kingdom") {
      console.log(i);
    }
  }

  //create a html tag
  //append text content
  console.log(secondApiData.data[i].cases);
}

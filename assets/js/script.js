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

// const localStorageURL = document.getElementById("recently-viewed");

// // var url=location.href;
// // localStorage.setItem("url",url);
// // function loadOldUrl(){
// // location.href=localStorage.getItem("url");
// // }
// // //when button clicked
// // document.querySelector("recently-viewed").addEventListener("click",loadUrl);

// latestButton.addEventListener("click", openLatestPage);

// function openLatestPage() {
//   console.log("Latest Page Opened");
//   latestButton.classList.add.hidden;
//   pageContent.classList.remove("hide");
//   latestButton.remove();
//   sportsButton.remove();
//   covidButton.remove();
//   sportsSection.remove();
// }

// sportsButton.addEventListener("click", openSportPage);

// function openSportPage() {
//   console.log("Sport Page Opened");
//   latestButton.classList.add.hidden;
//   pageContent.classList.remove("hide");
//   latestButton.remove();
//   sportsButton.remove();
//   covidButton.remove();
//   latestSection.remove();
// }

// covidButton.addEventListener("click", openCovidPage);

// function openCovidPage() {
//   console.log("Covid Page Opened");
//   latestButton.classList.add.hidden;
//   pageContent.classList.remove("hide");
//   latestButton.remove();
//   sportsButton.remove();
//   covidButton.remove();
//   latestSection.remove();
//   sportsSection.remove();
// }

// fetchButton.addEventListener("click", getApi);
function handleNewsApi() {
  let firstApiUrl =
    "http://api.mediastack.com/v1/news?access_key=96ae6e755874d6ceea975eadd2ec1d12&date=2022-08-08&countries=gb";

  fetch(firstApiUrl)
    .then((response) => response.json())
    .then((firstApiData) => handleNewsApiData(firstApiData));

  function handleNewsApiData(firstApiData) {
    //console.log(firstApiData.data);
    // headlineList = document.createElement("ul");
    for (var i = 0; i < 25; i++) {
      //create a html tag
      //append text content
      // if (!firstApiData){
      // alert("no results available");
      // return;
      //}
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

//console.log(data[i].description);

handleNewsApi();

secondApiUrl = "https://api.covid19api.com/summary";

fetch(secondApiUrl)
  .then((response) => response.json())
  .then((secondApiData) => handleCovidCases(secondApiData));
function printApi(apiData) {
  console.log(apiData);
}
var ukCases = $("#uk-cases");
function handleCovidCases(secondApiData) {
  console.log(secondApiData);
  console.log(secondApiData.Countries);
  let countries = secondApiData.Countries;
  for (let i of countries) {
    console.log(i.Country);
    if (i.Country === "United Kingdom") {
      console.log(i);

      let divCovid = $("<td>");
      divCovid.text(i.NewDeaths);
      ukCases.append(divCovid);

      let divTotalConfirm = $("<td>");
      divTotalConfirm.text(i.TotalConfirmed);
      ukCases.append(divTotalConfirm);

      let divDate = $("<td>");
      divDate.text(i.Date);
      console.log(i.Date);
      var date = moment(i.Date, "YYYY-MM-DDTHH:mm:ssZ").format("DD-MM-YYYY");
      ukCases.append(date);
    }
  }
}
//console.log(secondApiData.data[i].cases);
function printApi(apiData) {
  console.log(apiData);
}

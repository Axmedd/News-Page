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

function getApi() {
  var requestUrl =
    "http://api.mediastack.com/v1/news?access_key=774d6825387c91706870d36a208f2f53&date=2022-08-08&countries=gb";

  function handleData(res) {
    return res.json();
  }

  function printData(data) {
    console.log(data);

    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i].owner.avatar_url);

    // }
  }

  let data = fetch(requestUrl, { method: "GET" })
    .then((res) => handleData(res))
    .then((data) => printData(data));
  console.log(data);
}

fetchButton.addEventListener("click", getApi);

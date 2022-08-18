const pageContent = document.getElementById("page-content");

const handleCovidApi = () => {
  secondApiUrl =
    "https://api.covid19api.com/live/country/united-kingdom/status/confirmed/date/2022-08-17T00:00:00";

  fetch(secondApiUrl)
    .then((response) => response.json())
    .then((secondApiData) => handleCovidCases(secondApiData));

  function handleCovidApiData(secondApiData) {
    for (var i = 0; i > 0; i++) {
      if (secondApiData.data[i].country == "United Kingdom") {
        handleCovidApiData(secondApiData.data[i]);
      }
    }
  }
};

var ukCases = $("#uk-cases");
function handleCovidCases(secondApiData) {
  let covidTitle = `<h1 class="title covid-title">Covid-19 Cases in the UK Provinces</h1><br><br>`;
  let covidCases = "<div>";
  secondApiData.forEach((data) => {
    console.log(data);

    covidcases = `
      <div class="tile is-parent">
          <!-- All the tiles/Content of page is in this Div -->
          <div class="content-section"></div>
            <!-- This is a Bulma preset CSS Class -->
            <section id="covid-section" >
            <h2 class="title province ">${data.Province}</h2>
              <div class="container my-5">
               <div class= "container" style="margin-top: 10px">
                  <table class="table" width="100%">
                    <thead>
                      <tr>
                        <td>Confirmed Deaths: </td>
                        <td>Total Confirmed cases:</td>
                        <td>Confirmed cases as of date:</td>
                      </tr>
                      <tr>
                      <td>${data.Deaths} </td>
                      <td>${data.Confirmed}</td>
                      <td>${data.Date}</td>
                    </tr>
                    </thead>
                     <tr id= "uk-cases"></tr>
                  </table>
                  <div class= "card-body"></div>
                  <h4 class="text-center mb-5"></h4>
               </div>
              </div>
            </div>
      `;
    console.log(covidCases);
    covidCases += covidcases;
  });
  covidCases += "</div>";
  pageContent.innerHTML = covidTitle + covidCases;
}

window.addEventListener("load", handleCovidApi());

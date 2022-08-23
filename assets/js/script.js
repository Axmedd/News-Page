const latestSection = document.getElementById("latest-section");
// fetchButton.addEventListener("click", getApi);
function handleNewsApi() {
  let firstApiUrl =
    "http://api.mediastack.com/v1/news?access_key=bf0120fe9baf8401ce09a741c430a9fd&languages=en&countries=gb";
  fetch(firstApiUrl)
    .then((response) => response.json())
    .then((firstApiData) => handleNewsApiData(firstApiData));
  function handleNewsApiData(firstApiData) {
    //console.log(firstApiData);
    for (var i = 0; i < 25; i++) {
      if (firstApiData.data[i].country == "gb") {
        //handleNewsData(firstApiData.data[i]);
        let newslist = "";
        const keys = Object.keys(firstApiData.data[i]);
        console.log(keys);
        //for(let)
        const newsHeader = `<h1 class="title latest">Latest News in United Kingdom</h1></br></br>`;
        let newsList = "<div>";
        firstApiData.data.forEach((news) => {
          //const news = newsData;
          newslist = `
        <div class="box">
            <article class="media">
              <div class="media-left">
                <img
                  class="image is-150x115"
                  src="${news.image}"
                  alt="${news.title}"
                  width="250px"
                  height="250px"
                />
                <br />
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>${news.title}</strong>
                    <br /><br />
                    <strong>Description:</strong> ${news.description}
                    <br />
                    <strong>Source:</strong> ${news.source}
                  </p>
                </div>
                <a href="${news.url}"<button class="button is-link">Click Here</button></a>
                <button class="button is-danger" onclick="saveNews('${news.title}')">
                Save for Later</button>
              </div>
            </article>
            </div>
            </br>
        `;
          //console.log(newslist);
          newsList += newslist;
        });
        newsList += "</div>";
        latestSection.innerHTML = newsHeader + newsList;
      }
    }
  }
}
function handleNewsData(newsData) {
  //console.log(newsData);
  // console.log(newsData);
  // listHead = document.createElement("li");
  // linkForLatest = document.createElement("a");
  // linkForLatest.classList.add("link-button");
  // linkForLatest.setAttribute("href", newsData.url);
  // console.log(newsData);
  // linkForLatest.textContent = newsData.title;
  // listHead.appendChild(linkForLatest);
  // headlineList.appendChild(listHead);
  let newslist = "";
  const keys = Object.keys(newsData);
  console.log(keys);
  //for(let)
  const newsHeader = `<h1 class="title latest">Latest News in United Kingdom</h1></br></br>`;
  let newsList = "<div>";
  newsData.forEach((news) => {
    //const news = newsData;
    newslist = `
  <div class="box">
      <article class="media">
        <div class="media-left">
          <img
            class="image is-150x115"
            src="${news.image}"
            alt="${news.title}"
          />
          <br />
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${news.title}</strong>
              <br /><br />
              <strong>Description:</strong> ${news.description}
              <br />
              <strong>Source:</strong> ${news.source}
            </p>
          </div>
          <a href="${news.url}"<button class="button is-link">Click Here</button></a>
          <button class="button is-danger" onclick="saveNews('${news.title}')">
          Save for Later</button>
        </div>
      </article>
      </div>
      </br>
  `;
    //console.log(newslist);
    newsList += newslist;
  });
  newsList += "</div>";
  latestSection.innerHTML = newsHeader + newsList;
}
const saveNews = (title) => {
  const newsObject = newsList.find((news) => news.title === title);
  const stringified = JSON.stringify(newsObject);
  localStorage.setItem(title, stringified);
};
window.addEventListener("load", handleNewsApi());
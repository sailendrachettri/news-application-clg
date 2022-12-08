let xhr;
let apiKey = "3104946bd90a4c738d1a1e4d7dc35012";
let newsCountry1 = "us";
let newsCountry2 = "in";


// fetching data for carousel carousel - currently desable because of navigation problem - will work on future
/*
// ________________________CAROUSEL NEWS BOYD STARTED________________________
// we are fetching and setting data for carousel
let newsCarousel = document.getElementById('newsCarousel');
xhr = new XMLHttpRequest(); 
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${newsCountry1}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";

        for (let i = 1; i <= 3 ; i++) {
            console.log(i);
            // if description is not present or too short
            if (articles[i]["description"] == null || articles[i]["description"].length < 10) {
                articles[i]["description"] = "Description is not avaliable for this news. Go to the main source by clicking below button.";
            }

            // custom date formation
            let date = articles[i]["publishedAt"].slice(0, 10).split("-");
            date = date.reverse().join(".");

            // incase of missing image for news
            if(articles[i]["urlToImage"] == null)
            {
                articles[i]["urlToImage"] = "/img/newsImage.jpg";
            }

            let newsCarousel = ` <div class="carousel-item active">
                                    <img src="${articles[i]["urlToImage"]}" class="d-block w-100" width="640px" height="360px" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>${articles[i]['title']}</h5>
                                        <p>${articles[i]["description"]}</p>
                                    </div>
                                </div>`;

            newsHtml += newsCarousel;
        };
        newsCarousel.innerHTML = newsHtml;

        console.log(articles[0]["urlToImage"]);
        console.log(articles[0]);

    } else {
        console.log("Error occured while fetching news");
    }
}
xhr.send();
// ________________________CAROUSEL NEWS BOYD ENDED________________________

*/


// ________________________NEWS BOYD STARTED________________________


let newsCards = document.getElementById('newsCards');
xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${newsCountry2}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";

        articles.forEach(function (news) {
            //if description is not present or too short
            if (news["description"] == null || news["description"].length < 10) {
                news["description"] = "Description is not avaliable for this news. Go to the main source by clicking below button.";
            }

            // custom date formation
            let date = news["publishedAt"].slice(0, 10).split("-");
            date = date.reverse().join(".");

            // incase of missing image for news
            if (news["urlToImage"] == null) {
                news["urlToImage"] = "/img/newsImage.jpg";
            }

            let newsCards = ` <div class="col">
                                <div class="card">
                                    <img src="${news['urlToImage']}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${news["title"]}</h5>
                                        <p class="card-text">${news["description"]}</p>
                                        <div class="d-flex justify-content-between">
                                            <a href="${news["url"]}" target="_blank" class="btn btn-outline-dark" id="newsButton">Readmore</a>
                                            <p id="newsDate">${date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            `;

            newsHtml += newsCards;
        });
        newsCards.innerHTML = newsHtml;

        // console.log(articles);

    } else {
        console.log("Error occured while fetching news");
    }
}
xhr.send();
// ________________________NEWS BOYD ENDED________________________

console.log("End of the home js page");
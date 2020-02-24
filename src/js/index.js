import '../scss/vendor/reset.scss';
import '../scss/main/main.scss';

function requestNews(api,callback){
    let request = new XMLHttpRequest();
    request.open('GET',api,true)
    request.onload = function(){
        callback(JSON.parse(this.response))
    }
    request.send();
}

function getTimeString(time){
    let date, month;
    switch(time.split('-')[1]){
        case '01': month="Jan";break;
        case '02': month="Feb";break;
        case '03': month="Mar";break;
        case '04': month="Apr";break;
        case '05': month="May";break;
        case '06': month="Jun";break;
        case '07': month="Jul";break;
        case '08': month="Aug";break;
        case '09': month="Sep";break;
        case '10': month="Oct";break;
        case '11': month="Nov";break;
        case '12': month="Dec";break;
    }
    date = time.split('T').shift().split('-')[2];
    return (`${date} ${month}`)
}

function showNews(response){
    let { articles } = response;
    let template = '';
    articles.forEach(article => {
        template += 
        `<article class="feed">
            <figure class="feed-image">
                <img src="${article.urlToImage}" />
            </figure>
            <div class="feed-description">
                <h2>${article.title}</h2>
                <span>- ${getTimeString(article.publishedAt)}</span>
                <a href="${article.url}"></a>
            </div>
        </article>`
        console.log(article)
    });
    let container = document.getElementById('news-feeds');
    container.innerHTML = template;
}

function getNews(){
    requestNews('http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=2527c54354ef44e7ac83fe1058801572', showNews)
}

window.addEventListener('load',(event)=>{
    getNews();
})
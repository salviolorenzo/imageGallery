// let userSearch = prompt('What would you  like to see? ');
let userSearch = 'cars';
fetch(`https://api.unsplash.com/search/photos?page=1&query=${userSearch}&client_id=${USKey}`)
.then(r => r.json())
.then(getUrls)
.then(drawImages);

const body = document.querySelector('body');
const urls = [];
// extract urls from each result
function getUrls(obj){
    for (item of obj.results){
        urls.push(item.urls.raw);
    }
    return urls;
}

function drawImages(){
    for(imageSrc of urls){
        let img = document.createElement('img');
        img.setAttribute('src', imageSrc);
        body.appendChild(img);
    }
}
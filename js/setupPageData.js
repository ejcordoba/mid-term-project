const beerId = localStorage.getItem('id');
const getBeerDetail = async () => {
    const getBeerDetailFetchResponse = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
    const beerData = await getBeerDetailFetchResponse.json()
    return beerData
}
const setupPage = async() => {
    const beerData = await getBeerDetail()
    console.log(beerData);
    updateBeerData(beerData);
}
function updateBeerData(beerData) {
    console.log(beerData);
    document.querySelector('.project-page-title').innerHTML = beerData[0].name;
    document.querySelector('.project-page-type').innerHTML = beerData[0].tagline;
    document.querySelector('.project-completed').innerHTML = 'First brewed: ';
    document.querySelector('.project-date').innerHTML = beerData[0].first_brewed;
    document.querySelector('.project-page-image').src = beerData[0].image_url;
    document.querySelector('.project-description').innerHTML = beerData[0].description;
    document.querySelector('.project-brewers-tips').innerHTML = beerData[0].brewers_tips;
    // projectCard.querySelector('.project-description').innerHTML = randomBeer.description;
    // projectCard.querySelector('.project-link').id = randomBeer.id;
   
}
setupPage()
if (localStorage.getItem('id') !== null) {
    const beerId = localStorage.getItem('id');
    const getBeerDetail = async () => {
        const getBeerDetailFetchResponse = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
        const beerData = await getBeerDetailFetchResponse.json()
        return beerData
    }
}
const main = async() => {
    const beerData = await getBeerDetail()
    updateBeerData(beerData);
}
function updateBeerData(beerData) {
    console.log(beerData);
    /* const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(projectCard => {
        const randomBeer = allBeersData[Math.floor(Math.random() * allBeersData.length)];
        projectCard.querySelector('.project-card-image').src = randomBeer.image_url;
        projectCard.querySelector('.project-title').innerHTML = randomBeer.name;
        projectCard.querySelector('.project-description').innerHTML = randomBeer.description;
        projectCard.querySelector('.project-link').id = randomBeer.id;
        projectCard.addEventListener('click', setProjectDetail);
    }) */
}
main()
const cervecicas = async () => {
	const allBeersFetchResponse = await fetch('https://api.punkapi.com/v2/beers')
	const allBeers = await allBeersFetchResponse.json()
	return allBeers
}
const main = async() => {
    const cerves = await cervecicas()
    console.log(cerves);
    updateCards(cerves);
}
function updateCards(cerves) {
    const projectCards = document.querySelectorAll('.project-card');
    console.log(projectCards);
    projectCards.forEach(projectCard => {
        const randomBeer = cerves[Math.floor(Math.random() * cerves.length)];
        projectCard.querySelector('.project-card-image').src = randomBeer.image_url;
        projectCard.querySelector('.project-title').innerHTML = randomBeer.name;
        projectCard.querySelector('.project-description').innerHTML = randomBeer.description;
    })
}
main()
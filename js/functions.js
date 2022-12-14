const getAllBeers = async () => {
	const allBeersFetchResponse = await fetch('https://api.punkapi.com/v2/beers')
	const allBeers = await allBeersFetchResponse.json()
	return allBeers
}
const main = async() => {
    const allBeersData = await getAllBeers()
    updateCards(allBeersData);
}
function updateCards(allBeersData) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(projectCard => {
        const randomBeer = allBeersData[Math.floor(Math.random() * allBeersData.length)];
        projectCard.querySelector('.project-card-image').src = randomBeer.image_url;
        projectCard.querySelector('.project-title').innerHTML = randomBeer.name;
        projectCard.querySelector('.project-description').innerHTML = randomBeer.description;
        projectCard.querySelector('.project-link').id = randomBeer.id;
        projectCard.addEventListener('click', setProjectDetail);
    })
}
function setProjectDetail(event) {
    const target = event.currentTarget;
    localStorage.clear();
    localStorage.setItem('id',target.querySelector('.project-link').id)
}
main()
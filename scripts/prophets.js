const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthInfo = document.createElement('p');
        let portrait = document.createElement('img');

        // Set text content
        fullName.textContent = prophet.name;
        birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        // Build the image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append elements into the card
        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);

        // Append card into the grid container
        cards.appendChild(card);
    });
}

getProphetData();

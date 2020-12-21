const link = 'https://my-json-server.typicode.com/NastiaBondarenko/db';

export const promisedCategory = getContent(`${link}/category`);
export const promisedPizza = getContent(`${link}/pizza`);
export const promisedIngridients = getContent(`${link}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}
const link = 'https://my-json-server.typicode.com/NastiaBondarenko/db';
const link2 = 'https://my-json-server.typicode.com/NastiaBondarenko/db2';

const promisedAction = getContent(`${link2}/action`);
const promisedCategory = getContent(`${link}/category`);
const promisedPizza = getContent(`${link}/pizza`);
const promisedIngridients = getContent(`${link}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}

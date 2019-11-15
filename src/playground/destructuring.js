// const person = {
//     name: 'Folke',
//     age: 36,
//     location: {
//         city: 'Philadelphia',
//         temp: 55
//     }
// };

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     autor: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)


const address = ['1224 Crease Street', 'Philadelphia', 'Pennsylvania', '19125'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Pain de Chocolat', '$1', '$2', '$3'];
const [product, , medium ] = item;

console.log(`A medium ${product} costs ${medium}`); 
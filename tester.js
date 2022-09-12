var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

var [first, second, ...rest] = ["Mercury", ...planets];

console.log(first); //Output: Mercury
console.log(second); //Output: Mercury
console.log(rest); //Output: ["Earth", "Venus", "Mars", "Pluto", "Saturn"]

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];


console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]
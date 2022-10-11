//1620

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const pokemons = input.slice(0, N); //맨앞부터 index N 까지.
const questions = input.slice(N, N + M); //N부터 N+M까지

const pokemonMapStringToNum = new Map(pokemons.map((v, i) => [v, i + 1]));
const pokemonMapNumToString = new Map(pokemons.map((v, i) => [i + 1, v]));

const answerArr = [];

questions.map((v) => {
  if (isNaN(v)) {
    //문자열이라면
    answerArr.push(pokemonMapStringToNum.get(v));
  } else answerArr.push(pokemonMapNumToString.get(+v)); //pokemonMapNumToString map key type check!
});

console.log(answerArr.join("\n"));

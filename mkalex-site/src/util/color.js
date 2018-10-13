export function randomIntergerBetween(min, max){
  return min + Math.round((max-min) * Math.random());
}

export function getRandomDarkColor(){
  return `rgb(${randomIntergerBetween(95,95)},${randomIntergerBetween(120,155)},${randomIntergerBetween(30,180)} )`
}

export function getRandomLightColor(){
  return `rgb(${randomIntergerBetween(150,150)},${randomIntergerBetween(150,225)},${randomIntergerBetween(150,225)} )`
}
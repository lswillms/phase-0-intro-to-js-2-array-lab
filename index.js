const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}

const newCats = [...cats]
const newCats2 = [...cats]
const newCats3 = [...cats]
const newCats4 = [...cats]

function appendCat(name) {
  newCats.push(name)
  return newCats
}

function prependCat(name) {
    newCats2.unshift(name)
    return newCats2
}

function removeLastCat(name) {
    newCats3.pop(name)
    return newCats3
}

function removeFirstCat(name) {
    newCats4.shift(name)
    return newCats4
}



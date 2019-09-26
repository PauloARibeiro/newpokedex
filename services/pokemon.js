const endpoint = 'https://pokeapi.co/api/v2'

// SPECIFIC SEARCH
const getOneByName = async text => {
  return fetch(`${endpoint}/pokemon/${text}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET ALL
const getAll = async (limit = 0) => {
  return fetch(`${endpoint}/pokemon?limit=21&offset=${limit}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET ONE BY ID
const getOneById = async id => {
  return fetch(`${endpoint}/pokemon/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

const getSpecie = async id => {
  return fetch(`${endpoint}/pokemon-species/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

const getEvolutionChain = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

export { getOneByName, getAll, getOneById }

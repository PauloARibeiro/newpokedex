const idConvert = id => {
  if (!id) throw new Error('Id to conver was not provied')

  if (id.toString().length === 1) {
    return `00${id}`
  } else if (id.toString().length === 2) {
    return `0${id}`
  } else {
    return `${id}`
  }
}

export default idConvert

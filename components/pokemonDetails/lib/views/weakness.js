export default weakness => {
  console.log(weakness)
  return `
    <div>
        <div class="pokemon-weakness__card d-flex mb-2">
            <div class="pokemon-weakness__card--block mr-2 Ground d-flex d-align-center p-3 color-white h-bold b-radius" >
                Groud
            </div>
            <div class="pokemon-weakness__card--amount d-flex d-align-center">x2</div>
        </div>
    </div>
    `
}

//1a==========================
const allTvNames = inventory.map((item) => {
    return item.name
})
console.log(allTvNames)


//1b==========================
const soldOutTvs = inventory.filter((item) => {
    return item.sold === item.originalStock
})
console.log(soldOutTvs)


//1c==========================
const ambiLightTvs = inventory.filter((item) => {
    return item.options.ambiLight
})
console.log(ambiLightTvs)


//1d==========================
const priceSort = inventory.sort((a, b) => {
    return a.price - b.price
})
console.log(priceSort)


//2a========================================================================================================
const marketing = document.getElementById('marketing')

function amountOfTvsSold(list) {
    let amount = 0
    list.forEach((item) => {
        amount += item.sold
    })

    return amount
}

console.log(amountOfTvsSold(inventory))


//2b
const html_sold = document.createElement('p')
html_sold.setAttribute('class', 'sold')
html_sold.textContent = amountOfTvsSold(inventory).toString() + " tv's sold"
marketing.appendChild(html_sold)


//2c==========================
function amountOfTvsBought(list) {
    let amount = 0
    for (let item of list) {
        amount += item.originalStock
    }
    return amount
}

console.log(amountOfTvsBought(inventory))


//2d==========================
const html_bought = document.createElement('p')
html_bought.setAttribute('class', 'bought')
html_bought.textContent = amountOfTvsBought(inventory) + " tv's bought"
marketing.appendChild(html_bought)


//2e==========================
const html_inStock = document.createElement('p')
html_inStock.setAttribute('class', 'stock')
html_inStock.textContent = (amountOfTvsBought(inventory) - amountOfTvsSold(inventory)).toString() + " in stock"
marketing.appendChild(html_inStock)


//3a========================================================================================================
const allBrands = document.getElementById('allBrands')

inventory.map((item) => {
    let html_allBrands = document.createElement('p')
    html_allBrands.textContent = item.brand
    allBrands.appendChild(html_allBrands)
})


//3b==========================
function getAllTvBrands(list) {
    return list.map((item) => {
        return item.brand
    })
}

console.log(getAllTvBrands(inventory))


//4a========================================================================================================
function tvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

console.log(tvName(inventory[1]))


//4b==========================
function tvPrice(tv) {
    return "€" + tv.price + ",-"
}

console.log(tvPrice(inventory[1]))


//4c==========================
function tvSizes(tv) {

    let list = []
    for (let i = 0; i < tv.availableSizes.length; i++) {
        list += tv.availableSizes[i] + " inch (" + Math.round(tv.availableSizes[i] * 2.54) + " cm)";

        if (i < tv.availableSizes.length - 1) {
            list +=  | "
        }
    }
    return list.toString()
}

console.log(tvSizes(inventory[1]))


//4d==========================
const testTv = 4

const printTv = document.getElementById('printTv')

const html_TvName = document.createElement('p')
html_TvName.textContent = tvName(inventory[testTv])
printTv.appendChild(html_TvName)

const html_TvPrice = document.createElement('p')
html_TvPrice.textContent = tvPrice(inventory[testTv])
printTv.appendChild(html_TvPrice)

const html_TvSize = document.createElement('p')
html_TvSize.textContent = tvSizes(inventory[testTv])
printTv.appendChild(html_TvSize)


//4e==========================
function addTvsToHtml(list) {

    const printTvs = document.getElementById("printTvs")
    printTvs.innerHTML = "";

    list.map((item) => {

        const html_TvNames = document.createElement('p')
        html_TvNames.textContent = tvName(item)

        const html_TvPrices = document.createElement('p')
        html_TvPrices.textContent = tvPrice(item)

        const html_TvSizes = document.createElement('p')
        html_TvSizes.textContent = tvSizes(item)

        printTvs.appendChild(html_TvNames)
        printTvs.appendChild(html_TvPrices)
        printTvs.appendChild(html_TvSizes)
    })
}

addTvsToHtml(inventory)


//5a========================================================================================================
const priceButton = document.getElementById('price-button')
priceButton.addEventListener('click', () => {
    console.log(priceSort)
    addTvsToHtml(priceSort)
})

const ambiButton = document.getElementById('ambi-button')
ambiButton.addEventListener('click', () => {
    console.log(ambiLightTvs)
    addTvsToHtml(ambiLightTvs)
})

const soldButton = document.getElementById('sold-button')
soldButton.addEventListener('click', () => {
    console.log(soldOutTvs)
    addTvsToHtml(soldOutTvs)
})






















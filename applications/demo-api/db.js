const fs = require("fs")

module.exports = () => {
  const data = {
    categories: JSON.parse(fs.readFileSync("./data/categories.json")),
    products: JSON.parse(fs.readFileSync("./data/products.json")),
    orders: JSON.parse(fs.readFileSync("./data/orders.json"))
  }

  return data
}

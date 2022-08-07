import DB from '../assets/db.json'

export const getAllProducts = () => {
  if (DB.products) {
    return Promise.resolve(DB.products)
  }
  return console.log('error')
}

export const getItemProduct = (id) => DB.products.find((item) => item.id === id)

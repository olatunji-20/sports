import axios from "axios"

export async function getProducts( {commit} ) {
    let url = "http://localhost:5000/sales-product"
    await axios.get(url).then((response) => {
        let result = response.data;
        commit("setProducts", result)
    })
}

export async function getProduct({commit}, id) {
    let url = `http://localhost:5000/sales-product/${id}`
    await axios.get(url).then((response) => {
        let result = response.data
        commit("setProduct", result)
    })
}

export function addToCart({ commit, getters }, payload) {
    // let cart = getters.cart
    // let 
    console.log(payload)
    console.log("quant" + payload.quantity)
    console.log("prod" + payload.product)
}
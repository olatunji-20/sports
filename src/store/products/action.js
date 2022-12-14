import axios from "axios"

export async function getProducts( {commit} ) {
    let url = "https://my-json-server.typicode.com/olatunji-20/lovesports/sales-product"
    // let url = "http://localhost:5000/sales-product"
    await axios.get(url).then((response) => {
        let result = response.data;
        commit("setProducts1", result)
    })
}

export async function getProducts2( {commit} ) {
    let url = "https://my-json-server.typicode.com/olatunji-20/lovesports/latest-products"
    // let url = "http://localhost:5000/latest-products"
    await axios.get(url).then((response) => {
        let result = response.data;
        commit("setProducts2", result)
    })
}

export async function getProduct({commit}, id) {
    let url = `https://my-json-server.typicode.com/olatunji-20/lovesports/sales-product/${id}`
    // let url = `http://localhost:5000/sales-product/${id}`
    await axios.get(url).then((response) => {
        let result = response.data
        commit("setProduct", result)
    })
}

export async function getProduct2({commit}, id) {
    let url = `https://my-json-server.typicode.com/olatunji-20/lovesports/latest-products/${id}`
    // let url = `http://localhost:5000/latest-products/${id}`
    await axios.get(url).then((response) => {
        let result = response.data
        commit("setProduct", result)
    })
}

export function addToCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity

    cart.push(data)
    commit("setCart", cart)
    alert(data.quantity + " " + data.productName + " has been added to your cart")
    console.log(cart)
}

export function removeItem({ commit, getters }, id) {
    console.log("drrr", id)
    
    if(confirm("Do you want to remove this item from your cart?")) {
        let cart = []
        for(let i = 0; i < getters.cart.length; i++) {
            let prod = getters.cart[i]
            try {
                if(prod.id !== id) {
                    cart.push(prod)
                }
            }catch(error) {
                console.log(error)
            }
        }
        commit("setCart", cart)

    }
    return false
}
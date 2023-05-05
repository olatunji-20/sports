import axios from "axios"


export async function getProducts({ commit }) {
    // let url = "http://localhost:5000/all-products"
    // let url = "https://my-json-server.typicode.com/olatunji-20/lovesports/sales-product"
    // let url = "http://localhost:5000/sales-product"

    let url = "https://lovesports-api.onrender.com/all-products"
    await axios.get(url).then((response) => {
        try {
            let result = response.data;
            commit("setProducts1", result)
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    })
}


export async function getProducts2({ commit }) {
    // let url = "http://localhost:5000/all-products"
    // let url = "https://my-json-server.typicode.com/olatunji-20/lovesports/latest-products"
    // let url = "http://localhost:5000/latest-products"
    
    let url = "https://lovesports-api.onrender.com/all-products"
    await axios.get(url).then((response) => {
        let result = response.data;
        commit("setProducts2", result)
    })
}


export async function getProduct({ commit }, id) {
    // let url = `http://localhost:5000/one-product/${id}`
    // let url = `https://my-json-server.typicode.com/olatunji-20/lovesports/sales-product/${id}`
    // let url = `http://localhost:5000/sales-product/${id}`
    
    let url = `https://lovesports-api.onrender.com/one-product/${id}`
    await axios.get(url).then((response) => {
        let result = response.data
        commit("setProduct", result)
    })
    console.log("IDIDIDID" + id)
}


export async function getProduct2({ commit }, id) {
    // let url = `http://localhost:5000/one-product/${id}`
    // let url = `https://my-json-server.typicode.com/olatunji-20/lovesports/latest-products/${id}`
    // let url = `http://localhost:5000/latest-products/${id}`
    
    let url = `https://lovesports-api.onrender.com/one-product/${id}`
    await axios.get(url).then((response) => {
        let result = response.data
        commit("setProduct", result)
    })
}

export async function deleteProduct({}, id){
    console.log("WWW "+ id)
    let url = `https://lovesports-api.onrender.com/one-product/${id}`

    await axios.delete(url).then((response) => {
        console.log(response)
    })
}

export async function uploadProduct({ }, productDetails) {
    console.log(productDetails)

    const formData = new FormData();
    formData.append("productName", productDetails.productName);
    formData.append("maker", productDetails.maker);
    formData.append("productPrice", productDetails.productPrice);
    formData.append("discount", productDetails.discount);
    formData.append("series", productDetails.series);
    formData.append("picture", productDetails.selectedImage, productDetails.selectedImage.name);

    // let url = "http://localhost:5000/"
    let url = "https://lovesports-api.onrender.com/"
    // let url ="https://my-json-server.typicode.com/olatunji-20/lovesports/sales-product"
    try {
        await axios.post(url, formData)
    } catch (error) {
        console.log(error)
    }

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

    if (confirm("Do you want to remove this item from your cart?")) {
        let cart = []
        for (let i = 0; i < getters.cart.length; i++) {
            let prod = getters.cart[i]
            try {
                if (prod.id !== id) {
                    cart.push(prod)
                }
            } catch (error) {
                console.log(error)
            }
        }
        commit("setCart", cart);
    }
    return false
}
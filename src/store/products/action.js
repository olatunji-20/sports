import axios from "axios"

export async function getProducts( {commit} ) {
    let url = "http://localhost:5000/sales-product"
    await axios.get(url).then((response) => {
        let result = response.data;
        commit("setProducts", result)
    })
}
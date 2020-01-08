 import axios from "axios";

 
 export const getProducts = ({ commit }) =>
 {
   axios.get('http://127.0.0.1:4444/getItems')
   .then(response => {
       commit ('SET_PRODUCTS' , response.data);
   })
 }

 
     export const getProduct =({ commit } ,productId ) =>{
         axios.get(`http://127.0.0.1:4444/getItems/${productId}`)
           .then(response => {
               commit('SET_PRODUCT' , response.data);
           }
            )
     }
 


export const addProductToCart =({ commit } , {product , quantity}) =>{
    commit ('ADD_TO_CART' , { product , quantity});

    axios.get('http://127.0.0.1:4444/getItems/3' ,{
        product_id: product.id,
        quantity
    });
}



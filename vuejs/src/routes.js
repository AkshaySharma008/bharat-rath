import Home from "./pages/Home"
import Product from "./pages/Product.vue";
import Checkout from "./components/Checkout.vue";
export default [
{
    path:'/',
    component: Home,
    name:'home'
},{
    path:'/product/:id',
    component:Product,
    name:'product',
    props:true 
},
   {
       path:'/checkout',
       component:Checkout,
       name:'checkout'
   }
]
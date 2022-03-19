const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
            console.log(this.cart)
        },
        removeCart(id){
            this.cart.splice(id, 1);
            console.log(this.cart)
        }
    }
})

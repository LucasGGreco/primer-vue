const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
            search: null,
            resultado: false,
            error: null
        };
    },

    methods: {
        async doSearch() {
            //this.resultado = this.error = null
            try {
                const response = await fetch(API + this.search)
                if (!response.ok) throw new Error("User not found")
                const data = await response.json()
                console.log(data)
                this.resultado = data
                this.error = null
            } catch (error) {
                this.error = error
                this.resultado = null


            }
        }
    }
});
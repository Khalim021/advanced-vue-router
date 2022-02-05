<template>
    <div class="container">
        <h2>Greetings! {{username}}</h2>
        <button class="btn" @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
       return {
           username: window.user
       } 
    },
    methods: {
        logout(){
            window.user = null
            this.$router.push({name:'Home'})
        }
    }
}
</script>

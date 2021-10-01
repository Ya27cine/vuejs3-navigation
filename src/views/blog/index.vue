<template>

    <div class="row" v-if="posts.length">
        <div class="col-md-12 my-4" v-for="post in posts">
            <OnePost  :toggle="toggle" :post="post"/>
        </div>
    </div> 
    <div v-else class="text-center">Loading ...</div>
</template>


<script>

import OnePost from "./OnePost.vue";

export default {
    components: {
        OnePost
    },
    data() {
        return {
            toggle: true,
            posts: []
        }
    },
    mounted() {
        
        fetch("http://localhost:3000/posts").then( r => r.json() )
            .then( data => this.posts = data)
            .catch( err => console.log(err))
    },
    
}
</script>
<style lang="">
    
</style>
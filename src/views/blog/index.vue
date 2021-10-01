<template>

    <div class="row" v-if="posts.length">
        <div class="col-md-12 my-4" v-for="post in posts">
            <OnePost  :toggle="toggle" :post="post"  @delete="deletePost($event)"/>
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
    methods: {
        deletePost(id){
             fetch("http://localhost:3000/posts/"+id,{
                 method: 'DELETE'
             }).then( r =>{
                 this.posts = this.posts.filter(post => post.id !== id)
                 
             })
            .catch( err => console.log(err))
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
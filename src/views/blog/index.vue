<template>
    <div class="container my-3 ">
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge bg-primary rounded-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge bg-primary rounded-pill">1</span>
        </li>
        </ul>
    </div>

    <div class="row">
        <div class="col-md-4" v-for="post in posts">
            <h2>
                <router-link :to="{name: 'post-show', params: {id: post.id, slug: post.slug} }">
                    {{ post.title}}
                </router-link>
                </h2>
            <p class="lead text-start">{{ post.content}}</p>
        </div>
    </div> 
</template>


<script>
export default {

    data() {
        return {
            posts: []
        }
    },
    mounted() {
        fetch("http://localhost:5000/posts").then( r => r.json() )
            .then( data => this.posts = data)
            .catch( err => console.log(err))
    },
    
}
</script>
<style lang="">
    
</style>
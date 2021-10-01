<template>

    <div v-if="post">
        <h1> {{ post.title}}</h1>

        <p class="lead"> {{post.content}}</p>
    </div>
    <div v-else class="text-center">Loading ...</div>
    


</template>
<script>
export default {
    props: ['id', 'slug'],
    data() {
        return {
            post: null
        }
    },
    mounted() {
             fetch("http://localhost:3000/posts/"+this.id).then( r => r.json() )
            .then( data => this.post = data)
            .catch( err => console.log(err))
           
    },    
}
</script>
<style lang="">
    
</style>
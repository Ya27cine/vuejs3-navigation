<template>


    <h1> {{ post.title}}</h1>

    <p class="lead"> {{post.content}}</p>

    <hr>
    <h5> Slug : {{ post.slug }}</h5>



</template>
<script>
export default {
    props: ['id', 'slug'],
    data() {
        return {
            post:[]
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
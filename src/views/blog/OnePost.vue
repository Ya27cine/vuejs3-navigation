<template>
    <h2 @click="toggle = !toggle">
                    {{ post.title}}
                </h2>
            <p class="lead" v-if="toggle">{{ post.content}}</p>

            <div class="my-3">
                <router-link class="btn btn-sm btn-info" :to="{name: 'post-show', params: {id: post.id, slug: post.slug} }">Show</router-link>
                <button class="btn btn-sm btn-warning ms-2">Edit</button>
                <button class="btn btn-sm btn-dark ms-2">Delete</button>
            </div>
</template>
<script>
export default {
    props: {
        post: Object,
        toggle: Boolean
    }
    
}
</script>
<style >
    
</style>
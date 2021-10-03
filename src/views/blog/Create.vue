<template lang="">
    <div class="row my-4">
        <div class="col-md-6 mx-auto">
            <h1 class="my-2">New Post</h1>
            <form @submit.prevent="createPost">
               
                <div class="form-group">
                    <input v-model="title" id="title" type="text" class="form-control" placeholder="Title">
                </div>
            
                <div class="form-group mt-2">
                    <textarea v-model="content" id="content" rows="3" class="form-control" placeholder="Content ..."></textarea>
                </div>
                <button class="form-control btn btn-success mt-3">Add</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        toSlug(title){
            return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        },
        createPost(){
            console.log("create post");

            let post = {
                title:   this.title,
                slug: this.toSlug(this.title),
                content: this.content
            }

            fetch("http://localhost:3000/posts/",{
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json'},
                 body: JSON.stringify(post) 
             }).then( () => console.log('Success'))
               .catch( err => console.log(err))

        }
    },
}
</script>
<style lang="">
    
</style>
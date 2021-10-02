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
        createPost(){
            console.log("create post");
            console.log("---"+this.title+" / "+this.content);

        }
    },
}
</script>
<style lang="">
    
</style>
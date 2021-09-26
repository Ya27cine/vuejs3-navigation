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
            <h2>{{ post.title}}</h2>
            <p class="lead text-start">{{ post.content}}</p>
        </div>
    </div> 
</template>


<script>
export default {

    data() {
        return {
            posts:[
                {
                    id: 1,
                    title: 'Formation Laravel',
                    slug: 'Formation-Laravel',
                    content: "ectetur nobis eos et, dignissimos temporibus aliquam nihil deserunt blanditiis. D"
                },
                {
                    id: 2,
                    title: 'Formation Spring Boot',
                    slug: 'Formation-Spring-Boot',
                    content: "ectetur nobis eos et, dignissimos temporibus aliquam nihil deserunt blanditiis. D"
                },
                {
                    id: 3,
                    title: 'Formation Symfony',
                    slug: 'Formation-Symfony',
                    content: "ectetur nobis eos et, dignissimos temporibus aliquam nihil deserunt blanditiis. D"
                },
                {
                    id: 4,
                    title: 'Formation ReactJs',
                    slug: 'Formation-ReactJs',
                    content: "ectetur nobis eos et, dignissimos temporibus aliquam nihil deserunt blanditiis. D"
                }
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>
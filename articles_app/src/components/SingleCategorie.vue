<template>
    <div>
        <b-container>
            <div>
            <ul class="list-unstyled">
                <b-media>
                <template v-slot:aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                </template>
                <h5 class="mt-0 mb-1">{{message.nom_cat}}</h5>
                <p class="mb-0">
                    {{totalArticle.length}} articles dans cette categorie
                </p>
                
                </b-media>

                
            </ul>

            <b-list-group v-for="(article, index) in totalArticle" :key="index">
                <b-list-group-item >
                    <h5><router-link :to = "{name:'article', params: {article}}">{{article.titre}}</router-link></h5>
                    <span>{{ article.created_at | moment("from") }}</span>
                </b-list-group-item>
             
            </b-list-group>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['message'],
    data(){
        return {
            
            totalArticle : null,
        }
    },

    created() {
         this.countArticle();
    },

    methods:{
        countArticle(){
            axios.get('http://localhost:5001/testarticle-63ee4/us-central1/app/api/categorie_article/'+this.message.id).then(n =>{
                this.totalArticle = n.data;
            }).catch(function(error){
                console.log(error) 
            })
        }
    }
}
</script>
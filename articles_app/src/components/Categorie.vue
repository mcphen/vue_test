<template>
    <div>
        <b-container>
            <div>
            <ul class="list-unstyled">
                <b-media v-for="(message,index) in messages" :key="index" tag="li" class="media_cat" >
                <template v-slot:aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                </template>
                <h5 class="mt-0 mb-1"><router-link :to = "{name:'categorie', params: {message}}">{{message.nom_cat}}</router-link></h5>
                <p class="mb-0">
                    {{findArticle(message.id)}} articles dans cette categorie
                </p>
                </b-media>

                
            </ul>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            messages:['My Very', 'first','message'],
            categories:{},
            count_art : 0,
            total : null,
        }
    },

    async created() {
        await this.all_categories();
    },

    methods: {
        all_categories(){
            let resultat = [];
            axios.get('http://localhost:5001/testarticle-63ee4/us-central1/app/api/read').then(resp =>{
                    //console.log(resp);
                    

                    this.messages = resp.data;
                    //console.log(this.messages);
                    resp.data.forEach(q => {
                        axios.get('http://localhost:5001/testarticle-63ee4/us-central1/app/api/categorie_article/'+q.id).then(n =>{
                            resultat.push({
                                id : q.id,
                                countArt : n.data.length
                            })
                                
                        }).catch(function(error){
                                console.log(error)
                        })
                    });
                    this.total = resultat;
                    console.log(resultat)
                }).catch(function(error){
                    console.log(error)
                })
        },

        findArticle(mavaleur) {
            let res = 0;
            this.total.forEach(c=>{
                if(mavaleur==c.id){
                    res= c.countArt;
                }
            })
            return res; 
            
            
        }
    },
}
</script>

<style >

.media_cat{
    
    padding: 35px;
    border: 1px solid #8c8b8bf2;

}

</style>
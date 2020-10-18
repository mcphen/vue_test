<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-container>
            <h3>{{article.titre}}</h3>
            <p>{{article.description}}</p>
        </b-container>
    </div>
</template>

<script>
export default {
    props:['article'],
    data() {
      return {
        items: [
          {
            text: 'Accueil',
            to: { name: 'root' }
          },
        
          {
            text: 'Category',
            active: true
          }
        ]
      }
    }
}
</script>
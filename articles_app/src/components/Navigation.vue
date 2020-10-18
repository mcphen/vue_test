<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

        

        <b-nav-item-dropdown right split >
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <b-media tag="li" id="media_nav">
                <template v-slot:aside>
                <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                </template>
                <span>Georges OWEN</span>
                <br><span>Media</span>
                
            </b-media>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item href="#">
            <b-icon icon="question-circle-fill" style="margin-left:5px;margin-left:5px;" ></b-icon>
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
        </b-nav-item>
        
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<style >
    .navbar{
        padding: 0 !important;
    }
    #media_nav{
        display:inline-flex !important;
    }
</style>
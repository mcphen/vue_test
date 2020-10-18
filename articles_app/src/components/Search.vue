<template>
    <div id="search_component">
        <b-container>
            <!-- Content here -->
                <b-row>
                    <b-col cols="8"><h3>Comment pouvons nous vous aider ?</h3></b-col>
                    <b-col class="text-right">
                        <b-icon icon="box-arrow-up-right" aria-hidden="true"></b-icon>
                        Aller aux Affixes 2.0
                    </b-col>
                </b-row>
                <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend is-text>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="search" placeholder="Search terms"></b-form-input>
                </b-input-group>
        </b-container>
        
    </div>
</template>


<style>
    #search_component{
        background-color: #3598dc;
        color: white;
    }
</style>
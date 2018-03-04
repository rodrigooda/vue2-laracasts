<template>
<div class="modal is-active">
  <div class="modal-background" @click="close()"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ title }}</p>
      <button class="delete" @click="close()"></button>
    </header>
    <section class="modal-card-body">
      {{ body }}
    </section>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'modal',
    props: ['title', 'body'],    
    methods: {
        close(){
            this.$emit("close")
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .color-red {
    color: red;
  }
  
  .is-loading {
    background: red;
  }
</style>

<template>
  <div class="le17">
  
    <h2>Lession 17</h2>
  
    <div>
  
      <div class="content">
  
        <h2>Tabs Component</h2>
  
        <tabs>
          <tab name="About Us" :selected="true">
             <h1>Here is the contente tab Us</h1>
          </tab>
          <tab name="About Our Culture">
            <h1>Here is the contente tab Us Culture</h1>
          </tab>
          <tab name="About Our Vision">
            <h1>Here is the contente tab Us Vision</h1>
          </tab>
        </tabs>
  
      </div>
  
    </div>
  
  </div>
</template>

<script>
  import Vue from 'vue'
  import Tabs from './Tabs'




  export default {
    name: 'le17',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      showModal() {
        this.visible = true
      },
      closeModal() {
        this.visible = false
      }
    },
    components: {
      Tabs
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

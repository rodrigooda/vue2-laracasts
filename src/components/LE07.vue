<template>
  <div class="le07">
    <h2>Lession 7</h2>
    <div>
      <div class="content">
        <h2>Component</h2>
        <task>Go to the store</task>
        <task>Go to the bank</task>
        <task>Go to work</task>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const task = Vue.component('task', {
    template: '<li><slot></slot></li>'
  })
  
  export default {
    name: 'le07',
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      task
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

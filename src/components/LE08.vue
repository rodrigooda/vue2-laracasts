<template>
  <div class="le08">
    <h2>Lession 8</h2>
    <div>
      <div class="content">
        <h2>Component</h2>
        <task-list></task-list>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const task = Vue.component('task', {
    template: '<li><slot></slot></li>'
  })
 const taskList = Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',
    data() {
      return {
        tasks: [
          { task: 'Go to the store', complete: true },
          { task: 'Go to the email', complete: false },
          { task: 'Go to the farm', complete: true },
          { task: 'Go to work', complete: false }
        ]
      }
    },
    components: {
      task
    }
  })


  export default {
    name: 'le08',
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      taskList
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

<template>
  <div class="le06">
    <h2>Lession 6</h2>
    <div>
      <h1>{{ reverseMessage }}</h1>
      <h2>All Tasks</h2>
      <ul>
        <li class="block" v-for="task in tasks" v-text="task.description"></li>
      </ul>

      <div class="content">
      <h2>Incomplete Tasks</h2>
      <ul>
        <li class="block" v-for="task in incompleteTasks" v-text="task.description"></li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'le06',
    data() {
      return {
        message: 'Hello World',
        tasks: [{
            description: 'Go to the  store',
            completed: true
          },
          {
            description: 'Finish screencast',
            completed: false
          },
          {
            description: 'Make a donation',
            completed: false
          },
          {
            description: 'Clear inbox',
            completed: false
          },
          {
            description: 'Make dinner',
            completed: false
          },
          {
            description: 'Clean room',
            completed: true
          }
        ]
      }
    },
    methods: {
    },
    computed: {
      reverseMessage() {
        return this.message.split('').reverse().join('')
      },
      incompleteTasks() {
        return this.tasks.filter((task) => {
          return !task.completed
        })
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

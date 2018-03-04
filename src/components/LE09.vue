<template>
  <div class="le09">
    <h2>Lession 9</h2>
    <div>
      <div class="content">
        <h2>Component</h2>
        <message title="Hello World" body="Loren ipsun dolar sit amet"></message>

        <message title="Hello Universe" body="Hello all"></message>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Message from './Message'

export default {
    name: 'le09',
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      Message
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

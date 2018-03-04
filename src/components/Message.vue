<template>
<article class="message" v-show="isVisible">
  <div class="message-header">
    <p>{{ title }}</p>
    <button class="delete" @click="hideMessage()">x</button>
  </div>
  <div class="message-body">
    {{ body }}
  </div>
</article>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'message',
    data() {
        return {
            isVisible: true
        }
    },
    props: ['title', 'body'],
    methods: {
        hideMessage () {
            this.isVisible = false
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

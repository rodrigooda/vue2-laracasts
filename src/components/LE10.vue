<template>
  <div class="le10">
    <h2>Lession 10</h2>
    <div>
      <div class="content">
        <h2>Component</h2>
        <modal v-if="visible" @close="closeModal()" title="Hello World" body="Loren ipsun dolar sit amet"></modal>
      <a class="button modal-button" @click="showModal()">show modal</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './Modal'

export default {
    name: 'le10',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      showModal(){
        this.visible = true
      },
      closeModal(){
        this.visible = false
      }
    },
    computed: {},
    components: {
      Modal
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

<template>
  <div class="le14">
    <h2>Lession 14</h2>
    <div>
      <div class="content">
        <h2>Named Slots</h2>
        <modal>
          <template slot="header">
            Title
          </template>
          <div slot="footer">  
            <a class="button is-success">Save changes</a>
            <a class="button">Cancel</a>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  import Tabs from './Tabs'
  
  
  
  const Modal = Vue.component('modal', {
  
    template: `<div class="modal is-active">
  
    <div class="modal-background"></div>
  
    <div class="modal-card">
  
      <header class="modal-card-head">
  
        <p class="modal-card-title">
  
        <slot name="header"></slot>
  
        </p>
  
        <button class="delete"></button>
  
      </header>
  
      <section class="modal-card-body">
  
        <slot></slot>
  
      </section>
  
      <footer class="modal-card-foot">
  
        <slot name="footer">
                    <a class="button is-success">Ok</a>

        </slot>
  
      </footer>
  
    </div>
  
  </div>`
  
  })
  
  
  
  
  
  
  
  export default {
  
    name: 'le14',
  
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

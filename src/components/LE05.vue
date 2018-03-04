<template>
  <div class="le05">
    <h2>Lession 5</h2>
    <div>
      <!-- <button :title='title'>Hover over Me</button> -->
      <h1 :class="className">Hello World</h1>
      <button :class="{'is-loading': isLoading}" @click="toggleClass">Hover over Me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'le05',
  data () {
    return {
      className: 'color-red',
      isLoading: false
    }
  },
  methods: {
    toggleClass(){
      this.isLoading = !this.isLoading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
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

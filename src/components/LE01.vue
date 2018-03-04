<template>
  <div class="hello">
    <h2>Lession 1</h2>
    <div>
      <input type="text" id="input" v-model="message">
      <p>{{ message }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'le01',
  data () {
    return {
      message: 'Hello World'
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
</style>

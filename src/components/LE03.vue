<template>
  <div class="le03">
    <h2>Lession 3</h2>
    <div>
      <ul>
          <li v-for="name in names">{{ name }}</li>
      </ul>
      <input type="text" id="input">
      <button type="button" name="button" id="button">Add Name</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'le03',
  data () {
    return {
      names: ['Joe', 'Mary', 'Jane', 'Jack']
    }
  },
  mounted: function() {
    document.querySelector('#button').addEventListener('click', () => {
      let name = document.querySelector('#input');

      this.names.push(name.value);

      name.value = '';
    });
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

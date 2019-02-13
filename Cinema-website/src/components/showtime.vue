<template>
  <div class="container" style="background: #000">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-3"><img src="@/assets/escape-room.jpg" width="100%" height="auto"></div>
      <div class="col-md-6"><h1>Title</h1></div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

<template>
  <div id="app">
    <div class="header">
      <h2>Dependencies to tree</h2>
    </div>
    <div class="form">
      <div class="form-body">
        <textarea v-model="inputJson" class="form-body_input"></textarea>
      </div>
      <div class="form-submit">
        <button type="button">Draw graph</button>
      </div>
      {{inputJson}}
    </div>
    <div id="graph">
    </div>
  </div>
</template>

<script>
import Sigma from 'sigma';
import ('sigma/build/plugins/sigma.parsers.json.min');
export default {
  name: 'App',
  components: {
    
  },
  data: function() {
    return {
      inputJson: ''
    }
  },
  mounted: function() {
    let s = new sigma({
      graph: {
        nodes: [
          {
            "id": "n0",
            "label": "A node",
            "x": 0,
            "y": 0,
            "size": 3
          },
          {
            "id": "n1",
            "label": "Another node",
            "x": 3,
            "y": 1,
            "size": 2
          },
          {
            "id": "n2",
            "label": "And a last one",
            "x": 1,
            "y": 3,
            "size": 1
          }],
      edges: [
        {
          "id": "e0",
          "source": "n0",
          "target": "n1"
        },
        {
          "id": "e1",
          "source": "n1",
          "target": "n2"
        },
        {
          "id": "e2",
          "source": "n2",
          "target": "n0"
        }]
    }, 
    container: 'graph'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}

.header {
  width: 100%;
  background-color: gray;
  height: 4rem;
  color: #2c3e50;
}

.form-body_input {
  resize: vertical;
  height: 316px;
  min-height: 316px;
  overflow-y: scroll;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
}

* {
    margin:0;
}

#graph {
  width: 50%;
  height: 400px;
  margin: auto;
  background-color:gray;
}

</style>

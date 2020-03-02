<template>
  <div id="app">
    <div class="header">
      <h2>Dependencies to tree</h2>
    </div>
    <div class="form">
      <div class="form-body">
        <textarea v-model="inputJson" class="form-body_input">

        </textarea>
      </div>
      <div class="form-submit">
        <button @click="drawGraph(inputJson)" type="button">Draw graph</button>
      </div>
    </div>
    <div id="graph">
    </div>
  </div>
</template>

<script>
import Sigma from 'sigma';
import ('sigma/build/plugins/sigma.parsers.json.min');
import {mapJsonToNode} from './utils/jobmapper';

export default {
  name: 'App',
  components: {
    
  },
  sigma: null,
  data: function() {
    return {
      inputJson: `{
    "jobs": [
        {
            "jobName": "a"
        },
        {
            "jobName": "b",
            "dependencies": [
                {
                    "jobName": "a"
                }
            ]
        },
        {
            "jobName": "c",
            "dependencies": [
                {
                    "jobName": "b"
                }
            ]
        }
    ]
}`    }
  },
  methods: {
    drawGraph : function(json) {
      if (this.sigma) this.clearGraph()
      this.sigma = new sigma({
      graph: this.applyScale(mapJsonToNode(JSON.parse(json))), 
      container: 'graph'
      })
      this.sigma.refresh()
    },
    clearGraph: function() {
      this.sigma.graph.clear();
      this.sigma.refresh();
      this.sigma.kill();
    },
    applyScale: function(graph) {
      return {
        ...graph,
        nodes: graph.nodes.map(n => ({...n, y: n.y * 4, x: n.x * 10}))
      }
    }
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
  text-align: left;
  padding-top:.75rem;
  padding-bottom: 1rem;
  padding-left: 1rem;

  background-color: #f1f3f4;
  color: #2a7886;
  font-size: 1.25rem;
  font-weight: 200;
}

.form-body_input {
  resize: vertical;
  height: 316px;
  min-height: 316px;
  overflow-y: scroll;
  width: 100%;
    border-radius: 4px;
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #f1f3f4;
}

* {
    margin:0;
}

#graph {
  position: absolute;
  width: 100%;
  padding: 1rem;
  height: 800px;
}

.sigma-scene {
  left: 0;
}

.sigma-labels {
  left: 0;
}

.sigma-mouse {
  left: 0;
}

.form {
  padding: 1.5rem;
  background-color: #2a7886;
}

.form-submit button {
    padding: .425rem .75rem;
    border-radius: 4px;
    box-shadow: none;
    background-color: #79bac1;
    color: #f1f3f4;
    font-weight: 600;
    font-size: 1rem;
    border: 0;
    margin-top: 1rem;
}

</style>

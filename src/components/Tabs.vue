<template>
<div>
<div class="tabs">
  <ul>
    <li v-for="tab in tabs" @click="selectTab(tab)" :class="{'is-active': tab.isActive }"><a :href="tab.href">{{tab.name}}</a></li>
   </ul>
</div>

<div class="tabs-details">
    <slot></slot>
</div>
</div>
</template>

<script>
import Vue from 'vue'

  const Tab = Vue.component('tab', {
    template: '<div v-show="isActive"><slot></slot></div>',
    props: {
      name: {required: true},
      selected: {default: false}
    },
    data(){
        return {
            isActive: false
        }
    },
    mounted(){
        this.isActive = this.selected
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    }
  })

export default {
    name: 'tabs',
    data() {
        return {
            tabs: []
        }
    },
    components: [
        Tab
    ],
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach( tab => {
              tab.isActive = (tab.name === selectedTab.name)
            })
        }
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

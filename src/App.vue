<template>
  <div id="app">
    <header>
      <h1>Vue Chat</h1>
      <h2>Realtime Voice Chat</h2>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import { auth } from './firebase'
console.log(auth)

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>

<template>
    <div id="nav">
        <AppLink class="logo" to="/">Travel App with Vue</AppLink>
        <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >
        {{destination.name}}
      </AppLink>
      <AppLink :to="{name:'protected'}">Dashboard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
  </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
    data() {
      return {
          destinations: sourceData.destinations
      }  
    },
}
</script>
<style lang="css">
/* #nav .active-nav-color-mode {
    color: steelblue;
    border-bottom: 2px solid black;
} */
</style>




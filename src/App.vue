<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component v-bind:is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>


<script>
import TheNavigation from "@/components/TheNavigation.vue"
export default {
    components: {
      TheNavigation
    }
}
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>

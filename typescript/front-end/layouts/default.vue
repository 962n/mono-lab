<template>
  <div class="h-screen">
    <HeaderScreen/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderScreen from "@/components/screen/header/HeaderScreen";

export default {
  name: "default",
  components: {HeaderScreen}
}
</script>

<style scoped>

</style>

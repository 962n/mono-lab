<template>
  <div class="h-screen">
    <HeaderPublicScreen/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderPublicScreen from "@/components/screen/header-public/HeaderPublicScreen";

export default {
  name: "default",
  components: {HeaderPublicScreen}
}
</script>

<style scoped>

</style>

<template>
  <div class="h-screen">
    <header class="flex flex-row justify-between items-center p-4 shadow-md relative">
      <h1 class="text-2xl font-mono">Ankiiiii</h1>
      <nav>
        <ul class="flex flex-row">
          <li class="group-hover:border-blue-600 mx-5 font-bold"><a href="./news.html">Sign in</a></li>
          <li class="mx-5 font-bold"><a href="./menu.html">Sign up</a></li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>

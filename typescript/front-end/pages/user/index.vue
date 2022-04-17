<template>
  <div>
    <p>userList</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="hoge">
      Button
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted} from "@vue/composition-api";

export default defineComponent({
  setup(props, context) {
    console.log("setup")

    onMounted(() => {
      console.log("onMounted")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    return {}
  },
  methods: {
    hoge: function () {
      this.$router.push('/user/10')
    }
  }

})
</script>

<style scoped>

</style>

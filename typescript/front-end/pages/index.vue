<template>
  <div>
    <!--    <Tutorial/>-->
    <p>{{ uiModel.fuga }}</p>
    <p>{{ uiModel.hoge }}</p>
    <p>{{ this.$store.state.counter }}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="presenter.increment()">
      Button
    </button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="hoge">
      Button
    </button>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ref,
  defineComponent,
  onMounted,
  onUnmounted,
} from '@vue/composition-api'
import {IndexPresenterFactory} from "~/core/presentation/pages";


// export default Vue.extend({
//   name: 'IndexPage'
// })

export default defineComponent({
  setup(props, context) {
    const presenter = new IndexPresenterFactory(context.root.$accessor).create()
    const uiModel = presenter.uiModel()
    presenter.event(() => {
      console.log("event fired!!!")
    })
    onMounted(() => {
      console.log("onMounted")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })

    return {
      uiModel,
      presenter
    }
  },
  methods: {
    hoge: function () {
      this.$router.push('/user')
    }
  }

})
</script>

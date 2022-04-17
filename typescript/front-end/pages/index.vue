<template>
  <div>
<!--    <Tutorial/>-->
    <p>{{ uiModel.fuga }}</p>
    <p>{{ uiModel.hoge }}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="presenter.increment()">
      Button
    </button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="presenter.fetchUserList()">
      Button
    </button>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ref,
  defineComponent
} from '@vue/composition-api'
import {NewIndexPresenter} from "~/core/presentation/pages";

// export default Vue.extend({
//   name: 'IndexPage'
// })

export default defineComponent({
  setup(props, context) {
    const presenter = NewIndexPresenter()
    const uiModel = presenter.uiModel()
    presenter.event(() => {
      console.log("event fired!!!")
    })
    return {
      uiModel,
      presenter
    }
  }
})
</script>

<template>
  <div class="flex flex-row h-full w-full fixed pb-20 ">
    <WordListScreen
      class="w-7/12"
      :presenter="wordListPresenter"
    />
    <div class="w-5/12 border-l border-gray-300 p-4 h-full">
      <t-button @click="method.onClick()">button</t-button>
      <transition name="slide-fade">
        <WordEditScreen
          v-if="isShow"
          :presenter="wordEditPresenter"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref,
} from '@vue/composition-api'
import WordListScreen from "~/components/screen/word-list/WordListScreen.vue";
import {WordListPresenterFactory} from "~/core/presentation/screen/word-list/word-list";
import {WordEditPresenterFactory} from "~/core/presentation/screen/word-edit/word-edit";
import WordEditScreen from "~/components/screen/word-edit/WordEditScreen.vue";

export default defineComponent({
  components: {
    WordEditScreen,
    WordListScreen,
  },
  setup(props, context) {
    const isShow = ref(false)
    const wordListPresenter = new WordListPresenterFactory(context).create()
    const wordEditPresenter = new WordEditPresenterFactory(context).create()
    const method = {
      onClick() {
        isShow.value = !isShow.value
      }
    }
    return {
      wordListPresenter,
      wordEditPresenter,
      isShow,
      method,
    }
  },
})
</script>

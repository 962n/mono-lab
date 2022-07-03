<template>
  <div class="flex flex-row h-full">
    <WordListScreen class="w-7/12"
      :presenter="wordListPresenter"
    />
    <div class="w-5/12 border-l border-gray-300">
      <div class="fixed p-4 h-full">
        <p>Sorry...... This screen is under construction.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import WordListScreen from "~/components/screen/word-list/WordListScreen.vue";
import {WordListPresenterFactory} from "~/core/presentation/screen/word-list/word-list";
import NotFoundScreen from "~/components/screen/not-found/NotFoundScreen.vue";

export default defineComponent({
  components: {
    NotFoundScreen,
    WordListScreen,
  },
  setup(props, context) {
    const wordListPresenter = new WordListPresenterFactory(context).create()
    return {
      wordListPresenter,
    }
  },
})
</script>

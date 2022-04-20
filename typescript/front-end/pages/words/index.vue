<template>
  <WordListScreen
    :presenter="wordListPresenter"
  />
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import WordListScreen from "~/components/screen/word-list/WordListScreen.vue";
import {WordListPresenterFactory} from "~/core/presentation/screen/word-list/word-list";

export default defineComponent({
  components: {
    WordListScreen,
  },
  setup(props, context) {
    const wordListPresenter = new WordListPresenterFactory(context).create()
    return {
      wordListPresenter
    }
  },
})
</script>

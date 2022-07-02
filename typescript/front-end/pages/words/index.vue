<template>
  <div>
    <WordListScreen
      v-if="isSignedIn"
      :presenter="wordListPresenter"
    />
    <NotFoundScreen
      v-if="!isSignedIn"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import WordListScreen from "~/components/screen/word-list/WordListScreen.vue";
import {WordListPresenterFactory} from "~/core/presentation/screen/word-list/word-list";
import {domainAuthStore} from "~/store";
import NotFoundScreen from "~/components/screen/not-found/NotFoundScreen.vue";

export default defineComponent({
  components: {
    NotFoundScreen,
    WordListScreen,
  },
  setup(props, context) {
    const isSignedIn = domainAuthStore.isSignedIn
    const wordListPresenter = new WordListPresenterFactory(context).create()
    return {
      wordListPresenter,
      isSignedIn
    }
  },
})
</script>

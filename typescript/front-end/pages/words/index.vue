<template>
  <div>
    <WordListScreen
      v-if="notfound"
      :presenter="wordListPresenter"
    />
    <NotFoundScreen
      v-if="!notfound"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
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
  created() {
    console.log("created")
  },
  setup(props, context) {
    console.log("setup")
    const notfound = ref(false)
    onMounted(() => {
      console.log("onMounted")
      console.log(domainAuthStore)
      notfound.value = domainAuthStore.isSignedIn
    })
    const wordListPresenter = new WordListPresenterFactory(context).create()
    return {
      wordListPresenter,
      notfound
    }
  },
})
</script>

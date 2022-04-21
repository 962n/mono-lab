<template>
  <AnkiSwipeScreen
    :presenter="ankiSwipePresenter"
  />
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {AnkiSwipePresenterFactory} from "~/core/presentation/screen/anki-swipe/anki-swipe";
import AnkiSwipeScreen from "~/components/screen/anki-swipe/AnkiSwipeScreen.vue";

export default defineComponent({
  components: {
    AnkiSwipeScreen,
  },
  setup(props, context) {
    const ankiSwipePresenter = new AnkiSwipePresenterFactory(context).create()
    return {
      ankiSwipePresenter
    }
  },
})
</script>

<template>
  <div>
    <p>AnkiSwipeScreen</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {AnkiSwipePresenter} from "~/core/presentation/screen/anki-swipe/anki-swipe";

export default defineComponent({
  props: {
    presenter: Object as () => AnkiSwipePresenter,
  },
  setup(props, context) {
    const p = props.presenter
    return {
      p
    }
  },
  methods: {}
})
</script>

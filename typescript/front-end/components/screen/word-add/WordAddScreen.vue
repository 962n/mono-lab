<template>
  <div>
    <p>WordAddScreen</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {WordAddPresenter} from "~/core/presentation/screen/word-add/word-add";

export default defineComponent({
  props: {
    presenter: Object as () => WordAddPresenter,
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

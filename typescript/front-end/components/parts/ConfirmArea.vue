<template>
  <div class="p-2">
    <h1 class="font-mono text-center">
      <slot name="title">title</slot>
    </h1>
    <p class="my-4">
      <slot name="content">content</slot>
    </p>
    <div class="my-4 flex flex-row justify-end">
      <t-button class="w-1/4" variant="secondary" v-if="hasNegative">
        <slot name="negative">Cancel</slot>
      </t-button>
      <t-button class="w-1/4 ml-4">
        <slot name="positive">OK</slot>
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onBeforeMount, reactive
} from '@vue/composition-api'
import {TemplateEvent, TemplatePresenter} from "~/core/presentation/screen/template";

export default defineComponent({
  props: {
    hasNegative: {
      type: Boolean,
      default: true,
    }
  },
  components: {},
  created() {
  },
  setup(props, context) {
    const methods = {
      onClickPositive() {
      },
      onClickNegative() {
      },
    }
    return {}
  },
})
</script>

<template>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onBeforeMount, reactive
} from '@vue/composition-api'
import {TemplateEvent, TemplatePresenter} from "~/core/presentation/screen/template";

export default defineComponent({
  props: {
    presenter: {
      type: Object as () => TemplatePresenter,
      required: true
    }
  },
  components: {},
  created() {
  },
  setup(props, context) {
    const p = props.presenter
    p.event((event: TemplateEvent) => {

    })
    const um = reactive(p.uiModel())
    onMounted(() => {
    })
    onBeforeMount(() => {
    })
    return {
      p,
      um
    }
  },
})
</script>

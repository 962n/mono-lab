<template>
  <EditWordArea>
    <template v-slot:title>Register Word</template>
  </EditWordArea>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onBeforeMount, reactive
} from '@vue/composition-api'
import {WordEditEvent, WordEditPresenter} from "~/core/presentation/screen/word-edit/word-edit";
import EditWordArea from "~/components/parts/EditWordArea.vue";

export default defineComponent({
  props: {
    presenter: {
      type: Object as () => WordEditPresenter,
      required: true
    }
  },
  components: {
    EditWordArea
  },
  created() {
  },
  setup(props, context) {
    const p = props.presenter
    p.event((event: WordEditEvent) => {

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

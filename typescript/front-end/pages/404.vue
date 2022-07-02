<template>
  <div>
    <NotFoundScreen/>
  </div>

</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import NotFoundScreen from "~/components/screen/not-found/NotFoundScreen.vue";

export default defineComponent({
  components: {NotFoundScreen},
  layout() {
    return "default-public"
  },
  setup(props, context) {
    return {}
  },
})
</script>

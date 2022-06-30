<template>
  <SingInScreen
    :presenter="singInPresenter"
  />
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {SingInPresenterFactory} from "~/core/presentation/screen/sign-in/sign-in";
import SingInScreen from "~/components/screen/sign-in/SingInScreen.vue";

export default defineComponent({
  components: {
    SingInScreen,
  },
  layout() {
    return "public-default"
  },
  setup(props, context) {
    const singInPresenter = new SingInPresenterFactory(context).create()
    return {
      singInPresenter
    }
  },
})
</script>

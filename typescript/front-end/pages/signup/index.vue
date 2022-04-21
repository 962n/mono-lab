<template>
  <SignUpScreen
    :presenter="singUpPresenter"
  />
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {SingUpPresenterFactory} from "~/core/presentation/screen/sign-up/sign-up";
import SignUpScreen from "~/components/screen/sign-up/SignUpScreen.vue";

export default defineComponent({
  components: {
    SignUpScreen
  },
  setup(props, context) {
    const singUpPresenter = new SingUpPresenterFactory(context).create()
    return {
      singUpPresenter
    }
  },
})
</script>

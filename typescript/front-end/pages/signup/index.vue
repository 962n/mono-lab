<template>
  <div class="h-screen bg-blue-50 flex flex-col justify-center justify-items-center">
    <SignUpScreen
      class="w-6/12 mx-auto"
      :presenter="singUpPresenter"
    />
  </div>
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

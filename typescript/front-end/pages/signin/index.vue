<template>
  <div class="h-screen bg-blue-50">
    <div class="h-5/6 flex flex-col justify-center justify-items-center">
      <AuthScreen
        class="w-6/12 mx-auto"
        :presenter="singInPresenter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {SingInPresenterFactory} from "~/core/presentation/screen/auth/auth";
import AuthScreen from "~/components/screen/auth/AuthScreen.vue";

export default defineComponent({
  components: {
    AuthScreen,
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

<template>
  <div class="h-5/6">
    <WelcomeScreen
      :presenter="welcomePresenter"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import WelcomeScreen from "~/components/screen/welcome/WelcomeScreen.vue";
import {
  WelcomePresenterFactory,
} from "~/core/presentation/screen/welcome/welcome";

export default defineComponent({
  components: {
    WelcomeScreen,
  },
  layout() {
    return "default-public"
  },
  setup(props, context) {
    const welcomePresenter = new WelcomePresenterFactory(context).create()
    return {
      welcomePresenter
    }
  },
})
</script>

<template>
  <div>
    <Welcome
      :presenter="welcomePresenter"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import Welcome from "~/components/screen/welcome/Welcome.vue";
import {
  WelcomePresenterFactory,
} from "~/core/presentation/screen/welcome/welcome";

export default defineComponent({
  components: {
    Welcome,
  },
  setup(props, context) {
    const welcomePresenter = new WelcomePresenterFactory(context).create()
    return {
      welcomePresenter
    }
  },
})
</script>

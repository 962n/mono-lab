<template>
  <div class="h-screen">
    <HeaderPublicScreen :presenter="headerPublicPresenter"/>
    <nuxt/>
  </div>
</template>


<script lang="ts">
import {
  defineComponent
} from '@vue/composition-api'
import HeaderPublicScreen from "~/components/screen/header-public/HeaderPublicScreen.vue";
import {HeaderPublicPresenterFactory} from "~/core/presentation/screen/header-public/header-public";

export default defineComponent({
  props: {},
  components: {HeaderPublicScreen},
  setup(props, context) {
    const headerPublicPresenter = new HeaderPublicPresenterFactory(context).create()
    return {
      headerPublicPresenter,
    }
  },
})
</script>

<template>
  <div class="h-screen">
    <div v-if="isSignedIn">
      <HeaderScreen :presenter="headerPresenter"/>
      <nuxt/>
    </div>
    <div v-if="!isSignedIn">
      <HeaderPublicScreen :presenter="headerPublicPresenter"/>
      <NotFoundScreen/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from '@vue/composition-api'
import {HeaderPresenterFactory} from "~/core/presentation/screen/header/header";
import HeaderPublicScreen from "~/components/screen/header-public/HeaderPublicScreen.vue";
import NotFoundScreen from "~/components/screen/not-found/NotFoundScreen.vue";
import {domainAuthStore} from "~/store";
import HeaderScreen from "~/components/screen/header/HeaderScreen.vue";
import {HeaderPublicPresenterFactory} from "~/core/presentation/screen/header-public/header-public";

export default defineComponent({
  components: {HeaderScreen, NotFoundScreen, HeaderPublicScreen},
  setup(props, context) {
    const headerPresenter = new HeaderPresenterFactory(context).create()
    const headerPublicPresenter = new HeaderPublicPresenterFactory(context).create()
    const isSignedIn = domainAuthStore.isSignedIn
    return {
      headerPresenter,
      headerPublicPresenter,
      isSignedIn
    }
  },
})
</script>


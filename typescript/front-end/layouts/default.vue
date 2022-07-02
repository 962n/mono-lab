<template>
  <div class="h-screen">
    <div v-if="isSignedIn">
      <HeaderScreen :presenter="headerPresenter"/>
      <nuxt/>
    </div>
    <div v-if="!isSignedIn">
      <HeaderPublicScreen/>
      <NotFoundScreen/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onBeforeMount
} from '@vue/composition-api'
import HeaderScreen from "@/components/screen/header/HeaderScreen";
import {HeaderPresenterFactory} from "~/core/presentation/screen/header/header";
import HeaderPublicScreen from "~/components/screen/header-public/HeaderPublicScreen.vue";
import NotFoundScreen from "~/components/screen/not-found/NotFoundScreen.vue";
import {domainAuthStore} from "~/store";

export default defineComponent({
  components: {NotFoundScreen, HeaderPublicScreen, HeaderScreen},
  setup(props, context) {
    const headerPresenter = new HeaderPresenterFactory(context).create()
    const isSignedIn = domainAuthStore.isSignedIn
    return {
      headerPresenter,
      isSignedIn
    }
  },
})
</script>


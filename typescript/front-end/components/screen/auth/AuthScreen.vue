<template>
  <div class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
    <loading :active.sync="um.isLoading" :can-cancel="false" :is-full-page="true"/>

    <p class="my-6 text-3xl font-mono">{{um.title1}}<br/>{{um.title2}}</p>

    <t-input-group class="my-4" label="Enter your email" :variant="um.emailVariant" :feedback="um.emailFeedback">
      <t-input type="email" v-model="um.email" :variant="um.emailVariant" @change="p.validateEmail()"/>
    </t-input-group>

    <t-input-group class="my-4" label="Enter your password" :variant="um.passwordVariant"
                   :feedback="um.passwordFeedback">
      <t-input type="password" v-model="um.password" :variant="um.passwordVariant" @change="p.validatePassword()"/>
    </t-input-group>

    <t-button class="mt-4 ml-auto" :text="um.buttonTitle" @click="p.authenticate()" :disabled="!um.buttonEnabled"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive,} from '@vue/composition-api'
import Loading from 'vue-loading-overlay';
import "vue-loading-overlay/dist/vue-loading.css";
import {AuthEvent, AuthEventType, AuthPresenter} from "~/core/presentation/screen/auth/auth";
import UniversalCookie from 'universal-cookie'
import {CookieSetOptions} from "universal-cookie/cjs/types";


export default defineComponent({
  props: {
    presenter: {
      type: Object as () => AuthPresenter,
      required: true
    }
  },
  components: {
    Loading,
  },
  setup(props, _) {
    const p = props.presenter

    p.event((event: AuthEvent) => {
      switch (event.type) {
        case AuthEventType.AuthComplete:
          p.toNextPageAfterAuth()
          break
        default:
          break
      }
    })

    const um = reactive(p.uiModel())
    return {p, um}
  },
})
</script>

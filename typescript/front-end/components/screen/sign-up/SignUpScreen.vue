<template>
  <div class="h-screen">
    <div>
      <loading :active.sync="uiModel.isLoading" :can-cancel="false" :is-full-page="true"/>
      <p>
        Welcome to Anki!!!!! <br/>Let’s get started.
      </p>
      <t-input-group :variant="uiModel.emailVariant" label="Enter your email" :feedback="uiModel.emailFeedback">
        <t-input type="email" v-model="uiModel.email" :variant="uiModel.emailVariant"
                 @change="p.validateEmail()"/>
      </t-input-group>
      <t-input-group label="Enter your password" :feedback="uiModel.passwordFeedback">
        <t-input :variant="uiModel.passwordVariant" type="password" @change="p.validatePassword()"/>
      </t-input-group>
      <t-button
        @click="p.authenticate()"
        :disabled="!uiModel.buttonEnabled"
        text="Sign up"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive,} from '@vue/composition-api'
import {SignUpEvent, SignUpEventType, SingUpPresenter} from "~/core/presentation/screen/sign-up/sign-up";
import Loading from 'vue-loading-overlay';
import "vue-loading-overlay/dist/vue-loading.css";


export default defineComponent({
  props: {
    presenter: Object as () => SingUpPresenter,
  },
  components: {
    Loading,
  },
  setup(props, context) {
    const p = props.presenter!

    p.event((event: SignUpEvent) => {
      switch (event.type) {
        case SignUpEventType.AuthComplete:
          p.toNextPage()
          break
        default:
          break
      }
    })

    const uiModel = reactive(p.uiModel())
    return {
      p,
      uiModel
    }
  },
})
</script>

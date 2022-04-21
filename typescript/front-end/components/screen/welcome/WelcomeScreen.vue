<template>
  <div class="align-middle max-w-lg flex flex-col space-y-4 justify-center">
    <h1 class="text-center text-5xl font-bold space-y-10">Ankiiiiiiii</h1>
    <p class="text-center space-y-10">
      This service helps you memorize words, phrases in languages <br>
      that you want to learn by using swipe cards. <br>
      So register your account and enjoy improving your vocab!!!
    </p>
    <t-button
      class="max-w-xs max-w-xs font-bold"
      text="Sign up"
      @click="p.toSingUp()"
    />
    <t-button
      class="max-w-xs font-bold"
      text="Sign in"
      @click="p.toSingIn()"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
} from '@vue/composition-api'
import {WelcomePresenter} from "~/core/presentation/screen/welcome/welcome";

export default defineComponent({
  props: {
    presenter: Object as () => WelcomePresenter,
  },
  setup(props, context) {
    const p = props.presenter
    onMounted(() => {
      console.log("onMounted")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    return {
      p
    }
  },
  methods: {}
})
</script>

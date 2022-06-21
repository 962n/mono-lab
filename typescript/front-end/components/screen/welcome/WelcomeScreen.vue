<template>
  <div class="h-screen flex flex-col justify-between">
    <div class="flex flex-col my-auto">
      <h1 class="text-center text-9xl my-2">Ankiiiiiiii</h1>
      <p class="mx-auto max-w-lg text-lg my-2">
        This service helps you memorize words, phrases in languages that you want to learn by using swipe cards. <br/>
        So register your account and enjoy improving your vocab!!!
      </p>
      <t-button
        class="mx-auto font-bold w-64 my-2"
        text="Sign up"
        @click="p.toSingUp()"
      />
      <t-button
        class="mx-auto font-bold w-64 my-2"
        text="Sign in"
        @click="p.toSingIn()"
      />
    </div>
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

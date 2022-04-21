<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="p.toSingIn()">
      SingIn
    </button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="p.toSingUp()">
      SignUp
    </button>
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

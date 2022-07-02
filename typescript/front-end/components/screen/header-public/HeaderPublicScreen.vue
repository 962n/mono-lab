<template>
  <header class="flex flex-row justify-between items-center p-4 shadow-md relative">
    <h1 class="text-2xl font-mono font-bold">Ankiiiii</h1>
    <nav>
      <ul class="flex flex-row">
        <li class="mx-5">
          <button class="font-bold" @click="p.toSignIn()">Sign in</button>
        </li>
        <li class="mx-5">
          <button class="font-bold" @click="p.toSignUp()">Sign up</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onBeforeMount, reactive
} from '@vue/composition-api'
import {HeaderPublicEvent, HeaderPublicPresenter} from "~/core/presentation/screen/header-public/header-public";

export default defineComponent({
  props: {
    presenter: {
      type: Object as () => HeaderPublicPresenter,
      required: true
    }
  },
  components: {},
  created() {
  },
  setup(props, context) {
    const p = props.presenter
    p.event((event: HeaderPublicEvent) => {

    })
    const um = reactive(p.uiModel())
    onMounted(() => {
    })
    onBeforeMount(() => {
    })
    return {
      p,
      um
    }
  },
})
</script>

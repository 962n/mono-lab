<template>
  <div>
    <p>SignInScreen</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {SingInPresenter} from "~/core/presentation/screen/sign-in/sign-in";

export default defineComponent({
  props: {
    presenter: Object as () => SingInPresenter,
  },
  setup(props, context) {
    const p = props.presenter
    return {
      p
    }
  },
  methods: {}
})
</script>

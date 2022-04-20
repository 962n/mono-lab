<template>
  <div>
    <p>SignUpScreen</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {SingUpPresenter} from "~/core/presentation/screen/sign-up/sign-up";

export default defineComponent({
  props: {
    presenter: Object as () => SingUpPresenter,
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

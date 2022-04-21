<template>
  <div>
    <p>SignInScreen</p>
    <t-button>
      hogehoge
    </t-button>
    <t-input value="Hello world" name="input" />

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

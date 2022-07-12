<template>
  <div class="fixed overflow-scroll h-full">
    <h1>こんにちは</h1>
    <h1>ホゲホゲです</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
    <h1>テスト</h1>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import WelcomeScreen from "~/components/screen/welcome/WelcomeScreen.vue";
import {
  WelcomePresenterFactory,
} from "~/core/presentation/screen/welcome/welcome";

export default defineComponent({
  components: {
    WelcomeScreen,
  },
  layout() {
    return "default-public"
  },
  setup(props, context) {
    return {}
  },
})
</script>

<template>
  <div>
    <p>WordListScreen</p>
    <t-button
      class="max-w-xs font-bold"
      text="refresh"
      @click="p.refresh()"
    />

    <div>
      <ul class="p-4">
        <li
          v-for="(item, index) in uiModel.items" :key="index"
          class="rounded-xl group-hover:border-black border"
        >
          <p>{{ item.title }}</p>
          <p>翻訳</p>
          <p>説明</p>
        </li>
      </ul>
    </div>

    <infinite-loading
      :identifier="uiModel.infiniteId"
      @infinite="infiniteHandler">
    </infinite-loading>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
} from '@vue/composition-api'
import {WordListPresenter} from "~/core/presentation/screen/word-list/word-list";
import InfiniteLoading, {StateChanger} from 'vue-infinite-loading';

export default defineComponent({
  props: {
    presenter: Object as () => WordListPresenter,
  },
  components: {
    InfiniteLoading
  },
  setup(props, context) {
    const p: WordListPresenter = props.presenter!
    const uiModel = reactive(p.uiModel())
    const methods = {
      infiniteHandler(state: StateChanger) {
        p.fetch(state)
      }
    }
    return {
      p,
      uiModel,
      ...methods
    }
  },
  methods: {}
})
</script>

<template>
  <div>
    <p>WordListScreen</p>
    <button @click="p.refresh()">
      <RefreshSVG/>
    </button>

    <div>
      <ul class="px-4">
        <li
          v-for="(item, index) in uiModel.items" :key="index"
          class="rounded-xl group-hover:border-black border my-4 p-4 flex flex-row justify-items-end justify-between"
        >
          <div>
            <p class="text-lg font-bold">{{ item.title }}</p>
            <p class="text-sm text-gray-400">description</p>
          </div>
          <button @click="hoge(item,index)" class="">
            <DeleteSVG/>
          </button>
        </li>
      </ul>
    </div>
    <!-- https://crieit.net/posts/Nuxt-document-is-not-defined -->
    <no-ssr>
      <infinite-loading
        :identifier="uiModel.infiniteId"
        @infinite="infiniteHandler">
      </infinite-loading>
    </no-ssr>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
} from '@vue/composition-api'
import {WordListItem, WordListPresenter} from "~/core/presentation/screen/word-list/word-list";
import InfiniteLoading, {StateChanger} from 'vue-infinite-loading';
import DeleteSVG from '~/assets/svg/delete_24.svg';
import RefreshSVG from '~/assets/svg/refresh_24.svg';

export default defineComponent({
  props: {
    presenter: Object as () => WordListPresenter,
  },
  components: {
    InfiniteLoading,
    DeleteSVG,
    RefreshSVG
  },
  setup(props, context) {
    const p: WordListPresenter = props.presenter!
    const uiModel = reactive(p.uiModel())
    const methods = {
      infiniteHandler(state: StateChanger) {
        p.fetch(state)
      },
      hoge(hoge:WordListItem,index: number) {

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

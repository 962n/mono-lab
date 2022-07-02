<template>
  <div>
    <p>WordListScreen</p>
    <p>{{ um.testTitle }}</p>
    <button @click="p.refresh()">
      <RefreshSVG/>
    </button>

    <div>
      <ul class="px-4">
        <li
          v-for="(item, index) in um.items" :key="index"
          class="rounded-xl group-hover:border-black border my-4"
        >
          <button class="w-full flex flex-row items-center justify-between p-4">
            <div>
              <p class="text-lg font-bold text-left">{{ item.title }}</p>
              <p class="text-sm text-gray-400 text-left">description</p>
            </div>
            <button @click="hoge(index,item)" class="">
              <DeleteSVG/>
            </button>
          </button>
        </li>
      </ul>
    </div>
    <!-- https://crieit.net/posts/Nuxt-document-is-not-defined -->
    <client-only>
      <infinite-loading
        :identifier="um.infiniteId"
        @infinite="infiniteHandler">
      </infinite-loading>
    </client-only>
    <div>
      <t-modal v-model="um.showAddWordModal">hello world</t-modal>
    </div>
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
    presenter: {
      type: Object as () => WordListPresenter,
      required: true
    },
  },
  components: {
    InfiniteLoading,
    DeleteSVG,
    RefreshSVG
  },
  setup(props, context) {
    const p: WordListPresenter = props.presenter
    const um = reactive(p.uiModel())
    const methods = {
      infiniteHandler(state: StateChanger) {
        p.fetch(state)
      },
      hoge(index: number,hoge: WordListItem) {
        p.onClickDelete(hoge)
      }
    }
    return {
      p,
      um,
      ...methods,
    }
  },
  methods: {}
})
</script>

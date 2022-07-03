<template>
  <div class="px-4">
    <div class="flex flex-row my-4">
      <button @click="p.onClickAdd()">
        <AddSVG/>
      </button>
      <button @click="p.refresh()">
        <RefreshSVG/>
      </button>
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in um.items" :key="index"
          class="rounded-xl group-hover:border-black border my-4">
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
      <infinite-loading :identifier="um.infiniteId" @infinite="infiniteHandler"></infinite-loading>
    </client-only>
    <t-modal v-model="um.showAddWordModal">
      <EditWord @on-click-save="p.addWord($event)">
        <template v-slot:title>Register Word</template>
      </EditWord>
    </t-modal>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
} from '@vue/composition-api'
import {WordListItem, WordListPresenter} from "~/core/presentation/screen/word-list/word-list";
import {StateChanger} from 'vue-infinite-loading';
import DeleteSVG from '~/assets/svg/ic_delete_black_24.svg';
import RefreshSVG from '~/assets/svg/ic_refresh_black_24.svg';
import AddSVG from '~/assets/svg/ic_add_black_24.svg';
import EditWord from "~/components/parts/EditWordArea.vue";

export default defineComponent({
  props: {
    presenter: {
      type: Object as () => WordListPresenter,
      required: true
    },
  },
  components: {
    EditWord,
    DeleteSVG,
    RefreshSVG,
    AddSVG
  },
  setup(props, context) {
    const p: WordListPresenter = props.presenter
    const um = reactive(p.uiModel())
    const methods = {
      infiniteHandler(state: StateChanger) {
        p.fetch(state)
      },
      hoge(index: number, hoge: WordListItem) {
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

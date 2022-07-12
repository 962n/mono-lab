<template>
  <div>
    <p>Sorry... This screen is under construction.</p>
    <client-only>
      <vue-tinder class="h-80 w-80" key-name="id" :queue.sync="list" :offset-y="10" @submit="onSubmit">
        <template slot-scope="scope">
          <div class="h-80 w-80">
            <h1>HOGEHOGE</h1>
          </div>
        </template>
      </vue-tinder>
    </client-only>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'
import {AnkiSwipePresenter} from "~/core/presentation/screen/anki-swipe/anki-swipe";
import HeaderPublicScreen from "~/components/screen/header-public/HeaderPublicScreen.vue";

export default defineComponent({
  components: {HeaderPublicScreen},
  props: {
    presenter: Object as () => AnkiSwipePresenter,
  },
  setup(props, context) {
    const p = props.presenter
    const list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    return {
      p,
      list
    }
  },
  methods: {
    onSubmit() {

    },
  }
})
</script>

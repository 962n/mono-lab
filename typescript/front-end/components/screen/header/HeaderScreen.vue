<template>
  <div>
    <loading :active.sync="um.isLoading" :can-cancel="false" :is-full-page="true"/>
    <header class="flex flex-row justify-between items-center p-4 shadow-md relative">
      <h1 class="text-2xl font-mono font-bold">Ankiiiii</h1>
      <nav>
        <ul class="flex flex-row items-center">
          <li class="mx-5">
            <button class="font-bold" @click="p.toSwipe()">Swipe</button>
          </li>
          <li class="mx-5">
            <button class="font-bold" @click="p.toWords()">Words</button>
          </li>
          <li class="mx-5">
            <button class="font-bold" @click="p.signOut()">SignOut</button>
          </li>
          <li>
            <!-- https://www.vue-tailwind.com/docs/dropdown -->
            <t-dropdown class="justify-items-end">
              <div
                slot="trigger"
                slot-scope="{mousedownHandler,focusHandler,blurHandler,keydownHandler,isShown}"
              >
                <button
                  id="user-menu"
                  class="p-0 flex items-center text-sm text-gray-700 transition duration-150 ease-in-out bg-gray-300 border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
                  aria-label="User menu"
                  aria-haspopup="true"
                  @mousedown="mousedownHandler"
                  @focus="focusHandler"
                  @blur="blurHandler"
                  @keydown="keydownHandler"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  >
                </button>
              </div>

              <div slot-scope="{ hide, blurHandler }">
                <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  role="menuitem"
                  @blur="blurHandler"
                >
                  Your Profile
                </button>
                <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  role="menuitem"
                  @blur="blurHandler"
                >
                  Settings
                </button>

                <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  @click="hide"
                >
                  Close me
                </button>
              </div>
            </t-dropdown>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onMounted, reactive} from '@vue/composition-api'
import {HeaderEvent, HeaderEventType, HeaderPresenter} from "~/core/presentation/screen/header/header";
import Loading from 'vue-loading-overlay'
import "vue-loading-overlay/dist/vue-loading.css"

export default defineComponent({
  props: {
    presenter: {
      type: Object as () => HeaderPresenter,
      required: true
    }
  },
  components: {
    Loading,
  },
  created() {
  },
  setup(props, context) {
    const p = props.presenter
    p.event((event: HeaderEvent) => {
      switch (event.type) {
        case HeaderEventType.SignOutComplete:
          p.toTop()
          break
      }
    })
    const um = reactive(p.uiModel())
    return {
      p,
      um
    }
  },
})
</script>

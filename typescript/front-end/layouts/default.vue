<template>
  <div class="h-screen">
    <header class="flex flex-row justify-between items-center p-4 shadow-md relative">
      <h1 class="text-2xl font-mono">Ankiiiii</h1>
      <nav>
        <ul class="flex flex-row items-center">
          <li class="mx-5 font-bold"><a href="./news.html">Swipe</a></li>
          <li class="mx-5 font-bold"><a href="./menu.html">Words</a></li>
          <li class="mx-5 font-bold"><a href="./contact.html">Export</a></li>
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
                  :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
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
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>

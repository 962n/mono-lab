<template>
  <div class="p-2">
    <h1 class="font-mono text-center">
      <slot name="title"/>
    </h1>

    <t-input-group class="my-6" label="Word">
      <t-input type="text" v-model="wordData.word" @change="methods.validateWord()"/>
    </t-input-group>

    <t-input-group class="my-4" label="Description">
      <t-textarea v-model="wordData.description" name="my-textarea"/>
    </t-input-group>

    <t-input-group class="my-4" label="Example sentence">
      <t-textarea v-model="wordData.sentence" name="my-textarea"/>
    </t-input-group>

    <t-input-group class="my-4" label="Tag">
      <p>Sorry... Tag is under construction.</p>
    </t-input-group>

    <t-button class="mt-4 ml-auto" @click="methods.onClickButton()" :disabled="buttonDisabled">Save</t-button>

  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, reactive, ref} from '@vue/composition-api'

export type EditWordData = {
  word: string
  description: string
  sentence: string
}

export default defineComponent({
  props: {
    word: {
      type: Object as () => EditWordData,
      required: false
    }
  },
  components: {},
  setup(props, context) {
    const wordData = reactive({word: "", description: "", sentence: "",})
    const buttonDisabled = ref(true)

    const methods = {
      copyIfNeeded(source: EditWordData | null | undefined, dest: EditWordData): void {
        if (!source) {
          return
        }
        dest.word = source.word
        dest.description = source.description
        dest.sentence = source.sentence
      },
      validateWord() {
        buttonDisabled.value = wordData.word == ""
      },
      onClickButton() {
        const result = {
          ...wordData
        }
        context.emit("on-click-save", result)
      }
    }

    onBeforeMount(() => {
      methods.copyIfNeeded(props.word, wordData)
    })

    return {
      wordData,
      buttonDisabled,
      methods
    }
  },
})
</script>

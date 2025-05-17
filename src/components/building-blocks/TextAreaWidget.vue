<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "TextAreaWidget"
})
</script>

<template>
  <div class="w-full max-w-[1000px]">
    <slot name="text-area"></slot>
    <div class="flex justify-between mt-2">
      <slot name="utils-left"></slot>
      <slot name="utils-right"></slot>
    </div>
  </div>
</template>
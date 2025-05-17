<script lang="ts">
import {defineComponent} from 'vue'
import {Card, CardContent, CardFooter} from "@/components/ui/card";

export default defineComponent({
  name: "Message",
  props: {
    text: {
      type: String,
      required: true
    },
    isAi: {
      type: Boolean,
      default: false
    }
  },
  components: {Card, CardContent, CardFooter}
})
</script>

<template>
  <Card
      :class="{ 'self-start bg-muted': isAi, 'self-end bg-primary text-primary-foreground': !isAi }"
      class="w-max max-w-[75%]">
    <CardContent>
      {{text}}
    </CardContent>
    <CardFooter class="flex justify-between">
      <slot></slot>
    </CardFooter>
  </Card>
</template>
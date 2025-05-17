<script lang="ts">
import {defineComponent, ref} from 'vue'
import {SidebarTrigger} from "@/components/ui/sidebar";
import {useChat} from "@/composables/useChat.ts";
import Message from "@/components/building-blocks/Message.vue";
import {Textarea} from "@/components/ui/textarea";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Image, Mic, Send} from "lucide-vue-next";
import {ScrollArea} from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {AI_MODELS} from "@/lib/utils.ts";
import TextAreaWidget from "@/components/building-blocks/TextAreaWidget.vue";

export default defineComponent({
  name: "Conversation",
  components: {
    TextAreaWidget, ScrollArea, Textarea, Message, SidebarTrigger, Button, Separator, Send, Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    Mic,
    Image,
    SelectTrigger,
    SelectValue},
  setup() {
    const chatInput = ref('Why is the sky blue?')
    const messages = ref([{ role: 'agent', content: 'Hello, I am Deepseek. How can I help you?' }]);
    const {loading, output, sendMessage} = useChat()

    const log = () => {
      console.log('clicked')
    }

    return {chatInput, messages, output, sendMessage, loading, log, AI_MODELS}
  }
})
</script>

<template>
  <header class="flex h-16 shrink-0 items-center gap-2 border-b">
    <div class="flex items-center gap-2 px-3">
      <SidebarTrigger />
      <Separator class="mr-2 h-4" orientation="vertical" />
    </div>
  </header>
  <div class="flex flex-1 h-full flex-col items-center gap-4 p-4">
    <div class="h-full max-h-[calc(100vh-16rem)] flex flex-1 flex-col overflow-y-auto gap-4 w-full max-w-[1000px]">
      <Message v-for="message in messages" :key="message.content" :isAi="message.role === 'agent'" :text="message.content">
      </Message>
      <Message v-if="output" :isAi="true" :text="output"/>
    </div>
    <div id="chatBox" class="w-full max-w-[1000px]">
      <div id="inputArea" class="flex flex-row gap-2">
        <TextAreaWidget>
          <template #text-area>
            <Textarea id="chatInput" v-model="chatInput" @keyup.enter="() => sendMessage(chatInput, messages)" />
          </template>
          <template #utils-right>
            <div class="flex gap-2">
              <Button variant="secondary" @click="() => sendMessage(chatInput, messages)"><Image/></Button>
              <Button variant="secondary" @click="() => sendMessage(chatInput, messages)"><Mic/></Button>
              <Button id="submitButton" @click="() => sendMessage(chatInput, messages)"><Send/> Submit</Button>
            </div>
          </template>
          <template #utils-left>
            <div>
              <Select>
                <SelectTrigger class="w-[180px]">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>AI Models</SelectLabel>
                    <SelectItem v-for="model in AI_MODELS" :value="model">
                      {{model}}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </template>
        </TextAreaWidget>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {MessageCircle} from "lucide-vue-next"
import {SidebarInset, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import SidebarWidget from "@/components/building-blocks/SidebarWidget.vue";
import {useConversations} from "@/composables/useConversations.ts";

// Menu items.
const items = [
  {
    title: "What is the weather in Sweden?",
    url: "advanced-view/conversations/1",
    icon: MessageCircle,
  }
];

const {conversations, fetchConversations, updateConversation, createConversation, loading} = useConversations()
</script>

<template>
  <SidebarWidget>
    <SidebarMenuItem v-for="item in items" :key="item.title">
      <SidebarMenuButton asChild>
        <a :href="item.url">
          <component :is="item.icon" />
          <span>{{item.title}}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarWidget>
  <SidebarInset>
    <router-view></router-view>
  </SidebarInset>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";

export default defineComponent({
  name: "SidebarWidget",
  components: {
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarContent,
    Sidebar,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroup,
    SidebarMenuItem
  }
})
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <slot name="content">
          <SidebarGroupLabel>VueBot</SidebarGroupLabel>
        </slot>
        <SidebarGroupContent>
          <SidebarMenu>
            <slot></slot>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
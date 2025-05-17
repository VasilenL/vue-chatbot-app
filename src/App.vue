<script setup lang="ts">
import {SidebarProvider} from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <router-view></router-view>
  </SidebarProvider>
</template>

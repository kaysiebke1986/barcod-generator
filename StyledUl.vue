<script setup lang="js">
import StyledLi from "./StyledLi.vue";

defineProps(["labels", "listStyle"]);
</script>

<template>
  <ul :style="{ 'list-style-type': listStyle }">
    <styled-li v-for="label in labels" :key="label" :labels="label"></styled-li>
    <slot />
  </ul>
</template>

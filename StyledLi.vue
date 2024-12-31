<script setup lang="js">
import StyledUl from "./StyledUl.vue";

defineProps(["labels"]);
</script>

<template>
  <li>
    <span v-if="typeof labels === 'string'">{{ labels }}</span>

    <template v-else-if="Array.isArray(labels)" v-for="label in labels" :key="label">
      <template v-if="Array.isArray(label)">
        <styled-ul :labels="label"></styled-ul>
      </template>

      <template v-else>
        <span v-if="typeof label === 'string'">{{ label }}</span>
        <span v-else :class="[label.class, 'mr-sm']">{{ label.label }}</span>
      </template>
    </template>

    <template v-else-if="typeof labels === 'object'">
      <span :class="[labels.class, 'mr-sm']">{{ labels.label }}</span>
    </template>

    <slot />
  </li>
</template>

<style scoped>
.mr-sm {
  margin-right: 0.3em;
}
</style>

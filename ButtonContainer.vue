<script setup lang="js">
import { translation } from "./modules/translations";
const model = defineModel({ default: {} });
</script>

<template>
  <div class="schalter-container">
    <div class="schalter-wrapper">
      <label>
        {{ translation.autoReset }}
        <input type="checkbox" @change="() => (model.autoReset = !model.autoReset)" />
      </label>
    </div>
    <div class="schalter-wrapper">
      <label>
        {{ translation.faultySwitch }}
        <input type="checkbox" @change="() => (model.toggleFaultLabel = !model.toggleFaultLabel)" />
      </label>
    </div>
    <div class="schalter-wrapper">
      <label>
        {{ translation.autoDisplay }}
        <input type="checkbox" @change="() => (model.toggleAutoDisplay = !model.toggleAutoDisplay)" />
      </label>
    </div>
  </div>
</template>

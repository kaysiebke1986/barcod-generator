<script setup lang="js">
defineProps(["form"]);
</script>

<template>
  <div class="info-box info-box-print" id="infoBox">
    <div class="info-content">
      <span class="sku" style="display: block; font-size: 1.2em; font-weight: bold">{{ form.sku }}</span>
      <svg class="barcode" ref="barcode"></svg>
      <div class="additional-info">
        <span class="size-color">{{ form.color }} / {{ form.size }}</span>
        <div class="description">{{ form.description }}</div>
      </div>
    </div>
  </div>
</template>

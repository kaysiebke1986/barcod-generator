<script setup>
import TooltipContainer from "./components/TooltipContainer.vue";
import PrintContainer from "./components/PrintContainer.vue";
import FormContainer from "./components/FormContainer.vue";
import ButtonContainer from "./components/ButtonContainer.vue";
import { ref } from "vue";

const form = ref({
  sku: "sku",
  description: "description",
  color: "color",
  size: "size",
});

const buttonState = ref({});
</script>

<template>
  <div>===============================================================</div>
  <tooltip-container />
  <div>===============================================================</div>
  <print-container :form="form" />
  <div>===============================================================</div>
  <form-container />
  <div>===============================================================</div>
  <button-container v-model="buttonState" />
  <div>{{ buttonState }}</div>
  <div>===============================================================</div>
</template>

<style>
.text-bold {
  font-weight: bold;
}

.text-italic {
  font-style: italic;
}

.text-before-on::before {
  content: "Ein: ";
}

@media (min-width: 1024px) {
}
</style>

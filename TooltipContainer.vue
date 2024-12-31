<script setup lang="js">
import { ref } from "vue";
import { translation as t } from "./modules/translations";
import StyledUl from "./StyledUl.vue";

const showTooltip = ref(true);
</script>

<template>
  <div class="tooltip-container">
    <button class="tooltip-button" @click="showTooltip = !showTooltip" aria-describedby="tooltip-content">
      {{ showTooltip ? (t.tooltipClose ?? "Schließen") : t.tooltipButton }}
    </button>

    <div class="tooltip-content" v-if="showTooltip" id="tooltip-content" role="tooltip">
      <h2>{{ t.guideTitle }}</h2>
      <p>{{ t.guideIntro }}</p>
      <h3>{{ t.formFieldsTitle }}</h3>
      <p>{{ t.languageSelection }}</p>

      <styled-ul :labels="[t.fieldSkuText, t.fieldDescriptionText, t.fieldColorSizeText]"></styled-ul>

      <h3>{{ t.buttonsShortcutsTitle }}</h3>
      <styled-ul :labels="[t.submitButtonText, t.resetButtonText, t.printButtonText]"></styled-ul>

      <h3>{{ t.additionalFunctionsTitle }}</h3>
      <styled-ul :labels="[t.autoResetTitle]">
        <styled-ul list-style="upper-roman" :labels="[t.autoResetOnText, t.autoResetOffText]"></styled-ul>
      </styled-ul>
      <styled-ul :labels="[t.autoInputTitle]">
        <styled-ul list-style="none" :labels="[t.autoInputOnText, t.autoInputOffText]"></styled-ul>
      </styled-ul>
      <styled-ul :labels="[t.faultyActivateText]"></styled-ul>

      <h3>{{ t.screenModesTitle }}</h3>
      <styled-ul :labels="[t.portraitMode, t.landscapeMode]"></styled-ul>

      <p>{{ t.layoutNote }}</p>
    </div>
  </div>
</template>

import de from "../json/de.json";
import en from "../json/en.json";
import pl from "../json/pl.json";
import { computed, ref } from "vue";

const setLanguage = (language) => {
  localStorage.setItem("language", language);
  language.value = language;
};

const getLanguage = () => {
  return localStorage.getItem("language");
};

const language = ref(getLanguage() || "de");

const translation = computed(() => {
  switch (language.value) {
    case "de":
      return de;
    case "en":
      return en;
    case "pl":
      return pl;
    default:
      return de;
  }
});

export { translation, setLanguage };

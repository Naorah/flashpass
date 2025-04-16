import { derived, writable } from "svelte/store";
import en from "./en";
import es from "./es";
import de from "./de";
import fr from "./fr";

export const locale = writable("en");

function getTranslations(locale) {
  switch (locale) {
    case 'en':
      return en;
    case 'es':
      return es;
    case 'de':
      return de;
    case 'fr':
      return fr;
  }
}

function translate(locale, key, vars) {
  // Return default message if key or locale is missing
  if (!key || !locale) return "No translation found";
  // Grab the translation from the translations object, return default if missing
  let translations = getTranslations(locale);
  // console.log(translations);
  let text = translations[key];
  if (!text) return "No translation found";
  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const _ = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);
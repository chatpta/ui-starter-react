import { selectDisplayLanguage, selectEnglishOrFrench } from "./i18n/i18n";
import headerEn from "./languages/en/header.json";
import headerFr from "./languages/fr/header.json";
import footerEn from "./languages/en/footer.json";
import footerFr from "./languages/fr/footer.json";

export default function useLocale() {
    const languages = {
        en: {
            header: headerEn,
            footer: footerEn
        },
        fr: {
            header: headerFr,
            footer: footerFr
        }
    }

    return {
        t: () => languages[ selectDisplayLanguage( languages ) ],
        selectLanguageLabel: () => selectEnglishOrFrench( languages )
    }
}
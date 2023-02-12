import headerEn from "./languages/en/header.json";
import headerFr from "./languages/fr/header.json";
import { selectDisplayLanguage } from "./i18n/i18n";

export default function t() {
    const languages = {
        en: {
            header: headerEn
        },
        fr: {
            header: headerFr
        }
    }

    return languages[ selectDisplayLanguage( languages ) ];

}
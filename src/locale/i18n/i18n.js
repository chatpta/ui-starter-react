/**
 * Get browser language.
 * @param options
 * @returns {undefined|string[]}
 */
function getBrowserLocale( options = {} ) {
    const defaultOptions = {
        languageCodeOnly: true,
    };
    const opt = {
        ...defaultOptions,
        ...options,
    };
    const browserLocales =
        navigator.languages === undefined
            ? [ navigator.language ]
            : navigator.languages;
    if ( !browserLocales ) {
        return undefined;
    }
    return browserLocales.map( locale => {
        const trimmedLocale = locale.trim();
        return opt.languageCodeOnly
            ? trimmedLocale.split( /[-_]/ )[ 0 ]
            : trimmedLocale;
    } );
}

function getSavedBrowserLanguagePreference() {

    return localStorage.getItem( "language" );

}

function getBrowserLanguage() {

    const savedPreference = getSavedBrowserLanguagePreference();

    if ( savedPreference ) {

        return [ savedPreference, ...getBrowserLocale() ]

    } else {

        return getBrowserLocale();

    }

}

function isArrayWithItems( givenArray ) {

    return !!( Array.isArray( givenArray ) && givenArray.length );

}

function findFirstPreferredLanguageAvailable( availableLangArray = [] ) {

    const browserLangArray = getBrowserLanguage();
    let preferredLang = "en";

    if ( !isArrayWithItems( browserLangArray ) ) {

        return preferredLang;

    } else {

        for ( const lang of browserLangArray ) {

            if ( availableLangArray.includes( lang ) ) {
                return lang;
            }

        }

        return preferredLang;
    }

}

function languagesAvailable( langObj = {} ) {

    let languagesAvailable = [ "en" ];
    let availableLang = Object.getOwnPropertyNames( langObj );

    if ( isArrayWithItems( availableLang ) ) {

        languagesAvailable = availableLang;

    }

    return languagesAvailable;

}

export function selectDisplayLanguage( languageObj = {} ) {

    const availableLangArray = languagesAvailable( languageObj );

    let displayLanguage = "en";

    if ( !isArrayWithItems( availableLangArray ) ) {

        return displayLanguage;

    } else {

        return findFirstPreferredLanguageAvailable( availableLangArray );

    }
}

export function selectEnglishOrFrench( languageObj ) {

    let isFrench = ( selectDisplayLanguage( languageObj ) === "fr" );

    return isFrench ? { name: "English", code: "en" } : { name: "Français", code: "fr" };

}

export function saveBrowserLanguagePreference( language ) {

    if ( language && ( typeof language ) === "string" ) {

        localStorage.setItem( "language", language );

    }
}

export function removeBrowserLanguagePreference() {

    localStorage.removeItem( "language" );

}
/**
 * Get browser language.
 * @param options
 * @returns {undefined|string[]}
 */
export function getBrowserLocale( options = {} ) {
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

export function saveBrowserLanguagePreference( language ) {

    if ( language && ( typeof language ) === "string" ) {

        localStorage.setItem( "language", language );

    }
}

export function removeBrowserLanguagePreference() {

    localStorage.removeItem( "language" );

}

export function getSavedBrowserLanguagePreference() {

    return localStorage.getItem( "language" );

}

export function getBrowserLanguage() {

    const savedPreference = getSavedBrowserLanguagePreference();

    if ( savedPreference ) {

        return [ savedPreference, ...getBrowserLocale() ]

    } else {

        return getBrowserLocale();

    }

}
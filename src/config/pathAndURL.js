module.exports = {
    root: "https://chatpta.ca",
    localRoot: "http://localhost:",
    development: ( process.env.NODE_ENV === 'development' ),
    localPort: {
        auth: 30000,
        profile: 38000,
        orders: 37000,
        catalogue: 34000,
        image: 35000,
        cart: 36000,
    },
    paths: {
        root: "/",
        apiVersion: "/v1",
        users: {
            root: "/auth",
            loginOrRegister: "/login-or-register",
            login: "/login",
            logout: "/logout",
            register: "/register",
            recover: "/recover",
            changePassword: "/change-password",
            emailConfirmed: "/email-confirmed",
            passwordResetConfirmed: "/password-reset-confirmed",
            visitor: "/visitor",
            email_exist: "/exist/email"
        },
        payment: {
            root: "/payment",
            methods: "/methods",
            paymentMethods: "/payment-methods"
        },
        account: {
            root: "/account",
        },
        orders: {
            root: "/orders",
        },
        profile: {
            root: "/profile",
            address: "/address",
        },
        catalogue: {
            root: "/catalogue",
            categories: "/categories",
            search: "/search",
            suggestion: "/suggestion"
        },
        store: {
            search: "/search"
        },
        product: {
            root: "/product"
        },
        image: {
            root: "/image",
            profile: "/profile",
            main: "/main",
            link: "/link",
            static: "/images"
        },
        cart: {
            root: "/cart",
            items: "/items",
            guest: "/guest",
            checkout: "/checkout",
            empty: "/empty",
        },
        legal: {
            root: "/legal",
            termsOfUse: "/terms-of-use",
            privacyPolicy: "/privacy-policy"
        },
        careers: {
            root: "/careers"
        },
    },

    /**********
     * Common *
     *********/
    //:- https://chatpta.ca
    siteUrl: function () {
        return this.root;
    },

    //:- /
    rootPath: function () {
        return this.paths.root;
    },

    //:- /v1
    apiVersionV1: function () {
        return this.paths.apiVersion;
    },

    /*****************
     * auth or users *
     *****************/
    //:- http://localhost: + 30000
    authDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.auth;
    },

    //:- if (development) -> http://localhost: + 30000
    //:- else             -> https://chatpta.ca
    authGetHost: function () {
        return ( this.development ?
            this.authDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1
    //:- else             -> https://chatpta.ca        + /api + /v1
    authGetHostApi: function () {
        return this.authGetHost() + "/api" + this.apiVersionV1();
    },

    //:- /auth
    authPath: function () {
        return this.paths.users.root;
    },

    //:- /auth + /login-or-register
    authUsersLoginOrRegisterPath: function () {
        return this.authPath() + this.paths.users.loginOrRegister;
    },

    //:- /auth + /login
    authUsersLoginPath: function () {
        return this.authPath() + this.paths.users.login;
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /login
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /login
    authUsersLoginURL: function () {
        return this.authGetHostApi() + this.authUsersLoginPath();
    },

    //:- /auth + /logout
    authUsersLogoutPath: function () {
        return this.authPath() + this.paths.users.logout;
    },

    //:- /auth + /register
    authUsersRegisterPath: function () {
        return this.paths.users.root + this.paths.users.register;
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /register
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /register
    authUsersRegisterURL: function () {
        return this.authGetHostApi() + this.authUsersRegisterPath();
    },


    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /visitor
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /visitor
    authVisitorURL: function () {
        return this.authGetHostApi() + this.authPath() + this.paths.users.visitor;
    },

    //:- /auth + /recover
    authUsersPasswordRecoverPath: function () {
        return this.paths.users.root + this.paths.users.recover;
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /recover
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /recover
    authUsersPasswordRecoverURL: function () {
        return this.authGetHostApi() + this.authUsersPasswordRecoverPath();
    },

    //:- /auth + /change-password
    authUsersChangePasswordPath: function () {
        return this.paths.users.root + this.paths.users.changePassword;
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /change-password
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /change-password
    authUsersChangePasswordURL: function () {
        return this.authGetHostApi() + this.authUsersChangePasswordPath();
    },

    //:- /email-confirmed
    authEmailConfirmedPath: function () {
        return this.paths.users.emailConfirmed;
    },

    //:- /password-reset-confirmed
    authPasswordResetConfirmedPath: function () {
        return this.paths.users.passwordResetConfirmed;
    },

    //:- if (development) -> http://localhost: + 30000 + /api + /v1 + /auth + /email/exist
    //:- else             -> https://chatpta.ca        + /api + /v1 + /auth + /email/exist
    isEmailExistURLAuth: function ( email ) {
        return this.authGetHostApi() +
            this.paths.users.root +
            this.paths.users.email_exist +
            "?email=" + email;
    },

    /**********
     * orders *
     **********/
    //:- /orders
    ordersPath: function () {
        return this.paths.orders.root;
    },

    //:- orders
    ordersPathNotAbsolute: function () {
        return this.ordersPath().replace( "/", "" );
    },

    //:- http://localhost: + 37000
    ordersDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.orders;
    },

    //:- if (development) -> http://localhost: + 37000
    //:- else             -> https://chatpta.ca
    ordersGetHost: function () {
        return ( this.development ?
            this.ordersDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- if (development) -> http://localhost:  + 37000 + /api + /v1
    //:- else             -> https://chatpta.ca        + /api + /v1
    ordersGetHostApi: function () {
        return this.ordersGetHost() + "/api" + this.apiVersionV1();
    },

    //:- if (development) -> http://localhost: + 37000 + /api + /v1 + /orders
    //:- else             -> https://chatpta.ca        + /api + /v1 + /orders
    ordersApiURL: function () {
        return this.ordersGetHostApi() + this.ordersPath();
    },

    /***********
     * payment *
     ***********/
    //:- /payment
    paymentPath: function () {
        return this.paths.payment.root;
    },

    //:- payment-methods
    paymentMethodPathNotAbsolute: function () {
        return this.paths.payment.paymentMethods.replace( "/", "" );
    },

    /***********
     * account *
     ***********/
    //:- /account
    accountPath: function () {
        return this.paths.account.root;
    },

    /***********
     * profile *
     ***********/
    //:- http://localhost: + 36000
    profileDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.profile;
    },

    //:- if (development) -> http://localhost: + 38000
    //:- else             -> https://chatpta.ca
    profileGetHost: function () {
        return ( this.development ?
            this.profileDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- if (development) -> http://localhost: + 38000  + /api + /v1
    //:- else             -> https://chatpta.ca        + /api + /v1
    profileGetHostApi: function () {
        return this.profileGetHost() + "/api" + this.apiVersionV1();
    },

    //:- /profile
    profilePath: function () {
        return this.paths.profile.root;
    },

    //:- profile
    profilePathNotAbsolute: function () {
        return this.profilePath().replace( "/", "" );
    },

    //:- /address
    addressPath: function () {
        return this.paths.profile.address;
    },

    //:- address
    addressPathNotAbsolute: function () {
        return this.addressPath().replace( "/", "" );
    },

    //:- if (development) -> http://localhost: + 38000 + /api + /v1 + /profile
    //:- else             -> https://chatpta.ca        + /api + /v1 + /profile
    profileURL: function () {
        return this.profileGetHostApi() + this.profilePath();
    },

    //:- if (development) -> http://localhost: + 38000 + /api + /v1 + /profile + /address
    //:- else             -> https://chatpta.ca        + /api + /v1 + /profile + /address
    profileAddressUrl: function () {
        return this.profileURL() + this.addressPath();
    },

    /*************
     * catalogue *
     *************/
    //:- http://localhost: + 34000
    catalogueDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.catalogue;
    },

    //:- if (development) -> http://localhost: + 34000
    //:- else             -> https://chatpta.ca
    catalogueGetHost: function () {
        return ( this.development ?
            this.catalogueDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1
    //:- else             -> https://chatpta.ca       + /api + /v1
    catalogueGetHostApi: function () {
        return this.catalogueGetHost() + "/api" + this.apiVersionV1();
    },

    //:- /catalogue
    cataloguePath: function () {
        return this.paths.catalogue.root
    },

    //:- /catalogue + /categories
    catalogueCategoriesPath: function () {
        return this.cataloguePath() + this.paths.catalogue.categories;
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /categories
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /categories
    catalogueCategoriesURL: function () {
        return this.catalogueGetHostApi() + this.catalogueCategoriesPath();
    },

    //:- /catalogue + /search
    catalogueSearchPath: function () {
        return this.paths.catalogue.root + this.paths.catalogue.search;
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /search
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /search
    catalogueSearchURL: function () {
        return this.catalogueGetHostApi() + this.catalogueSearchPath();
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /search + ?c=...&cid=...&q=...
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /search + ?c=...&cid=...&q=...
    catalogueSearchQueryStringURL: function ( qsObject ) {
        return this.catalogueSearchURL() + "?c=" + qsObject.get( 'c' ) +
            "&cid=" + qsObject.get( 'cid' ) + "&q=" + qsObject.get( 'q' );
    },

    //:- if (development) -> /catalogue + /suggestion
    //:- else             -> /catalogue + /suggestion
    catalogueSuggestionPath: function () {
        return this.paths.catalogue.root + this.paths.catalogue.suggestion;
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /suggestion
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /suggestion
    catalogueSuggestionUrl: function () {
        return this.catalogueGetHostApi() + this.catalogueSuggestionPath()
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /suggestion + /home?from=...&n=...
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /suggestion + /home?from=...&n=...
    catalogueSuggestionHomeSearchQueryStringURL: function ( qsObject ) {
        return this.catalogueSuggestionUrl() + "/home?from=" + qsObject[ 'from' ] +
            "&n=" + qsObject[ 'n' ];
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /suggestion + /deals?from=...&n=...
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /suggestion + /deals?from=...&n=...
    catalogueDealsSuggestionHomeSearchQueryStringURL: function ( qsObject ) {
        return this.catalogueSuggestionUrl() + "/deals?from=" + qsObject[ 'from' ] +
            "&n=" + qsObject[ 'n' ];
    },

    //:- if (development) -> http://localhost: + 34000 + /api + /v1 + /catalogue + /suggestion + /exciting?from=...&n=...
    //:- else             -> https://chatpta.ca       + /api + /v1 + /catalogue + /suggestion + /exciting?from=...&n=...
    catalogueExcitingSuggestionHomeSearchQueryStringURL: function ( qsObject ) {
        return this.catalogueSuggestionUrl() + "/exciting?from=" + qsObject[ 'from' ] +
            "&n=" + qsObject[ 'n' ];
    },

    // (http://localhost:34000 || https://chatpta.ca) + /api/v1/catalogue/ + id
    catalogueProductIdUrl: function ( id = null ) {
        return ( this.catalogueGetHostApi() + this.cataloguePath() + "/" + id );
    },

    // (http://localhost:34000 || https://chatpta.ca) + /api/v1/catalogue/id-or-slug/ + idOrSlug
    catalogueIdOrSlugUrl: function ( idOrSlug = null ) {
        return ( this.catalogueGetHostApi() + this.cataloguePath() + "/id-or-slug/" + idOrSlug );
    },

    /*********
     * store *
     *********/
    //:- /search
    searchStorePath: function () {
        return this.paths.store.search;
    },

    /***********
     * product *
     ***********/
    //:- /product
    productPath: function ( id ) {

        if ( id ) {
            return this.paths.product.root + "/" + id;
        } else {
            return this.paths.product.root
        }
    },

    /*********
     * image *
     *********/
    //:- http://localhost: + 35000
    imageDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.image;
    },

    //:- if (development) -> http://localhost: + 35000
    //:- else             -> https://chatpta.ca
    imageGetHost: function () {
        return ( this.development ?
            this.imageDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- /image
    imagePath: function () {
        return this.paths.image.static;
    },

    //:- if (development) -> http://localhost: + 35000
    //:- else             -> https://chatpta.ca
    imageUrl: function () {
        return this.imageGetHost() + this.imagePath();
    },

    /********
     * cart *
     ********/
    //:- http://localhost: + 36000
    cartDevelopmentApiUrl: function () {
        return this.localRoot + this.localPort.cart;
    },

    //:- if (development) -> http://localhost: + 36000
    //:- else             -> https://chatpta.ca
    cartGetHost: function () {
        return ( this.development ?
            this.cartDevelopmentApiUrl() :
            this.siteUrl() );
    },

    //:- if (development) -> http://localhost: + 36000 + /api + /v1
    //:- else             -> https://chatpta.ca        + /api + /v1
    cartGetHostApi: function () {
        return this.cartGetHost() + "/api" + this.apiVersionV1();
    },

    //:- /cart
    cartPath: function () {
        return this.paths.cart.root;
    },

    //:- if (development) -> http://localhost: + 36000 + /api + /v1 + /cart
    //:- else             -> https://chatpta.ca        + /api + /v1 + /cart
    cartURL: function () {
        return this.cartGetHostApi() + this.cartPath();
    },

    //:- /cart/guest
    cartGuestPath: function () {
        return this.paths.cart.root + this.paths.cart.guest;
    },

    //:- if (development) -> http://localhost: + 36000 + /api + /v1 + /cart/guest
    //:- else             -> https://chatpta.ca        + /api + /v1 + /cart/guest
    cartGuestURL: function () {
        return this.cartGetHostApi() + this.cartGuestPath();
    },

    //:- /cart/items/guest
    cartItemsGuestPath: function () {
        return this.paths.cart.root + this.paths.cart.items + this.paths.cart.guest;
    },

    //:- if (development) -> http://localhost: + 36000 + /api + /v1 + /cart/items/guest
    //:- else             -> https://chatpta.ca        + /api + /v1 + /cart/items/guest
    cartItemsGuestURL: function () {
        return this.cartGetHostApi() + this.cartItemsGuestPath();
    },

    //:- if (development) -> http://localhost: + 36000 + /api + /v1 + /cart/items/guest + /empty
    //:- else             -> https://chatpta.ca        + /api + /v1 + /cart/items/guest + /empty
    cartItemsEmptyGuestURL: function () {
        return this.cartGetHostApi() + this.cartItemsGuestPath() + this.paths.cart.empty;
    },

    //:- /checkout
    checkoutPath: function () {
        return this.paths.cart.checkout;
    },

    //:- checkout
    checkoutPathNotAbsolute: function () {
        return this.checkoutPath().replace( "/", "" );
    },

    /*********
     * legal *
     *********/
    //:- /legal + /terms-of-use
    legalTermsOfUsePath: function () {
        return this.paths.legal.root + this.paths.legal.termsOfUse;
    },

    //:- /legal + /privacy-policy
    legalPrivacyPolicyPath: function () {
        return this.paths.legal.root + this.paths.legal.privacyPolicy;
    },

    /***********
     * careers *
     ***********/
    //:- /careers
    careersPath: function () {
        return this.paths.careers.root;
    },
}

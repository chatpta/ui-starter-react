module.exports = {
    root: "https://chatpta.ca",
    localRoot: "http://localhost:3001",
    paths: {
        root: "/",
        users: {
            root: "/users",
            login: "/login",
            register: "/register",
            recover: "/recover",
            changePassword: "/change-password"
        }
    },
    getSiteUrl: function () {
        return this.root;
    },
    getRootPath: function () {
        return this.paths.root;
    },
    getHost: function () {
        return ( process?.env?.NODE_ENV === 'development' ? this.localRoot : this.root );
    },
    getHostApi: function () {
        return ( process?.env?.NODE_ENV === 'development' ? this.getHost() : this.getHost() + "/api" );
    },
    usersLoginPath: function () {
        return this.paths.users.root + this.paths.users.login;
    },
    usersLoginURL: function () {
        return this.getHostApi() + this.usersLoginPath();
    },
    usersRegisterPath: function () {
        return this.paths.users.root + this.paths.users.register;
    },
    usersRegisterURL: function () {
        return this.getHostApi() + this.usersRegisterPath();
    },
    usersPasswordRecoverPath: function () {
        return this.paths.users.root + this.paths.users.recover;
    },
    usersPasswordRecoverURL: function () {
        return this.getHostApi() + this.usersPasswordRecoverPath();
    },
    usersChangePasswordPath: function () {
        return this.paths.users.root + this.paths.users.changePassword;
    },
    usersChangePasswordURL: function () {
        return this.getHostApi() + this.usersChangePasswordPath();
    },
}

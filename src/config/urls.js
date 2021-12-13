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
    getRootPath: function () {
        return this.paths.root;
    },
    getHost: function () {
        return ( process?.env?.NODE_ENV === 'development' ? this.localRoot : this.root );
    },
    usersLoginPath: function () {
        return this.paths.users.root + this.paths.users.login;
    },
    usersLoginURL: function () {
        return this.getHost() + this.usersLoginPath();
    },
    usersRegisterPath: function () {
        return this.paths.users.root + this.paths.users.register;
    },
    usersRegisterURL: function () {
        return this.getHost() + this.usersRegisterPath();
    },
    passwordRecoverPath: function () {
        return this.paths.users.root + this.paths.users.recover;
    },
    passwordRecoverURL: function () {
        return this.getHost() + this.passwordRecoverPath();
    },
    changePasswordPath: function () {
        return this.paths.users.root + this.paths.users.changePassword;
    },
    changePasswordURL: function () {
        return this.getHost() + this.changePasswordPath();
    },
}

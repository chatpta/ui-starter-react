module.exports = {
    root: "https://chatpta.ca",
    localRoot: "http://localhost:3001",
    routs: {
        users: { login: "/users/login" }
    },
    loginURl: function () {
        return ( process?.env?.NODE_ENV === 'development' ? this.localRoot : this.root ) + this.routs.users.login;
    }
}

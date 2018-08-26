'use strict'

class LoginController {

    showLogin({ view }) {
        return view.render('login.edge');
    }

    async login({ request, auth, session, response }) {

    }
}

module.exports = LoginController
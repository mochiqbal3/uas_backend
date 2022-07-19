const express = require('express');

const authSrv = require('./services/auth');
const registration = require('./controllers/registration');
const session = require('./controllers/session');

const router = express.Router();

// registration
router.post('/registrations', registration.create);

// session
router.post('/sessions/login', session.login);
router.delete('/sessions/logout', authSrv.authenticateUser, session.logout);
router.get('/sessions/current-user', authSrv.authenticateUser, session.getCurrentUser);

module.exports = router;

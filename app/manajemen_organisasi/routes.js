const express = require('express');

const authSrv = require('./services/auth');
const registration = require('./controllers/registration');
const session = require('./controllers/session');
const crudOrgnization = require('./controllers/crud-sub-organization');
const crudUser = require('./controllers/crud-user');
const crudActivity = require('./controllers/crud-activity');

const router = express.Router();

// registration
router.post('/registrations', registration.create);

// session
router.post('/sessions/login', session.login);
router.delete('/sessions/logout', authSrv.authenticateUser, session.logout);
router.get('/sessions/current-user', authSrv.authenticateUser, session.getCurrentUser);

// crud user
router.get('/user', crudUser.all);
router.post('/user', crudUser.create);
router.get('/user/:id', crudUser.show);
router.put('/user/:id', crudUser.update);
router.delete('/user/:id', crudUser.destroy);

module.exports = router;

const express = require('express');
const router = express.Router();

// Require the controllers
const wh_controller = require('../controllers/webhook.controller');
// const mongo_controller = require('../controllers/mongo.controller');

/* webhook for formsUrls */
// (post) https://api.typeform.com/forms/{form_id}/webhooks/{tag}
router.route('/forms/:formId/webhooks/:tag')
  .post(wh_controller.submitForm)


module.exports = router;

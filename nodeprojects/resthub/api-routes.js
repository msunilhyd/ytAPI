// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Its working',
        message: 'Welcome to RESTHub crafted with Love!'
    });
});

// Export API routes
module.exports = router;
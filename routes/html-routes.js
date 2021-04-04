/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const moment = require("moment");
const { Op } = require("sequelize");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
    
        res.render("home");
      });
    }
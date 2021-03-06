
var exec = require("cordova/exec");

module.exports = {
    name: "GameCenter",
    _loggedin: false,
    auth: function (success, failure) {
        var self = this;
        exec(function (result) {
                self._loggedin = true;
                success(result)
            },
            failure, "GameCenter", "auth", []);
    },
    checkAuth: function(success, failure) {
        exec(success, failure, "GameCenter", "checkAuth", []);
    },
    getUserData: function(success, failure) {
        exec(success, failure, "GameCenter", "getUserData", []);
    },
    isLoggedIn: function () {
        return this._loggedin;
    },
    generateIdentityVerification: function (success, failure) {
        exec(success, failure, "GameCenter", "generateIdentityVerification", []);
    },
    getPlayerImage: function (success, failure) {
        exec(success, failure, "GameCenter", "getPlayerImage", []);
    },
    submitScore: function (success, failure, data) {
        exec(success, failure, "GameCenter", "submitScore", [data]);
    },
    getPlayerScore: function (success, failure) {
        exec(success, failure, "GameCenter", "getPlayerScore", []);
    },
    showLeaderboard: function (success, failure, data) {
        exec(success, failure, "GameCenter", "showLeaderboard", [data]);
    },
    reportAchievement: function (success, failure, data) {
        exec(success, failure, "GameCenter", "reportAchievement", [data]);
    },
    resetAchievements: function (success, failure) {
        exec(success, failure, "GameCenter", "resetAchievements", []);
    },
    getAchievements: function (success, failure) {
        exec(success, failure, "GameCenter", "getAchievements", []);
    },
}

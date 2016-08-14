var Page = require('./page')
var gamepageLocator = require('./game.page.json');

var GamePage = Object.create(Page, {

    isSimilarGameSectionPresent: {
        value: function () {
            return browser.waitForExist(gamepageLocator.similarGamesSection);
        }
    },

    countGamesSimilarSection: {
        value: function () {
            return browser.elements(gamepageLocator.similarGamesAll).value.length;
        }
    },

    getSimilarGame3Name: {
        value: function () {
            return browser.getText(gamepageLocator.similarGame3Name);
        }
    },

    clickSimilarGame3: {
        value: function () {
            Page.click.call(this, gamepageLocator.similarGame3);
        }
    },

    getCurrentGameName: {
        value: function () {
            return browser.getText(gamepageLocator.currentGameName);
        }
    }

});

module.exports = GamePage

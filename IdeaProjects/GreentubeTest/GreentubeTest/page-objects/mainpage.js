var Page = require('./page');
var mainpageLocator = require('./main.page.json');
var $ = require('jquery');


var MainPage = Object.create(Page, {

    open: {
        value: function () {
            Page.open.call(this, mainpageLocator.startUrl);
        }
    },

    inputUsername: {
        value: function (username) {
            Page.input.call(this, mainpageLocator.usernameField, username);
        }
    },

    inputPassword: {
        value: function (password) {
            Page.input.call(this, mainpageLocator.passwordField, password);
        }
    },

    clickLogin: {
        value: function () {
            Page.click.call(this, mainpageLocator.loginButton);
        }
    },

    clickSlotsButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.slotsButton);
        }
    },

    clickBingoButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.bingoButton);
        }
    },

    clickCasinoButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.casinoButton);
        }
    },

    clickPokerButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.pokerButton);
        }
    },

    getTitle: {
        value: function () {
            return Page.getTitle();
        }
    },

    clickUserMenuArrow: {
        value: function () {
            Page.click.call(this, mainpageLocator.userMenuArrow);
        }
    },

    clickLogoutButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.logoutButton);
        }
    },

    inputSearch: {
        value: function (searchString) {
            Page.input.call(this, mainpageLocator.searchField, searchString);
        }
    },

    clickSearchButton: {
        value: function () {
            Page.click.call(this, mainpageLocator.searchButton)
        }
    },

    windowMaximize: {
        value: function () {
            browser.windowHandleMaximize().timeouts('page load', 1000);
        }
    },

    clickLanguageArrow: {
        value: function () {
            Page.click.call(this, mainpageLocator.languageButtonArrow);
        }
    },

    clickLanguageGerman: {
        value: function () {
            Page.click.call(this, mainpageLocator.languageButtonGerman);
        }
    },

    getCurrentLanguage: {
        value: function () {
            return browser.getAttribute(mainpageLocator.languageGet, 'content');

        }
    },

    waitForExist: {
        value: function () {
            return browser.waitForExist(mainpageLocator.popup);
        }
    }/*,

       execute: {
     value: function () {
     browser.execute("$('div#daily-bonus-popup').remove()");
     }
     }*/
});

module.exports = MainPage
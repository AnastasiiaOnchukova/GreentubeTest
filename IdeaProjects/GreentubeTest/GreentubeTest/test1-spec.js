var assert = require("assert");
var mainpage = require("./page-objects/main.page");
var generalpage = require("./page-objects/general.page");
var gamepage = require("./page-objects/game.page");
var username = "50testtest";
var password = "Greentube5";
var expectedSlotTitle = "Slot"
var expectedBingoTitle = "Bingo";
var expectedCasinoTitle = "Casino";
var expectedPokerTitle = "Poker";
var searchString = "Slot";
var expectedElementsNumber = "8";
var expectedLanguage = 'de';
var baseUrl = "https://www.gametwist.com/en/";


describe("Greentube", function () {

    beforeAll(function () {
        browser.url(baseUrl)
            .setValue(generalpage.usernameField, username)
            .click(generalpage.passwordField)
            .setValue(generalpage.passwordField, password)
            .click(generalpage.loginButton)
            .call(done);
        //todo close popups
    });

    it('test navigation', function (done) {
        browser
            .timeouts('page load', 1000000)
            .moveToObject(mainpage.slotsButton)
            .click(mainpage.slotsButton);
        var title = browser.getTitle();
        expect(title).toContain(expectedSlotTitle);

        browser
            .timeouts('page load', 1000000)
            .moveToObject(mainpage.bingoButton)
            .click(mainpage.bingoButton);
        var title = browser.getTitle();
        expect(title).toContain(expectedBingoTitle);

        browser.timeouts('page load', 1000000)
            .click(mainpage.casinoButton);
        var title = browser.getTitle();
        expect(title).toContain(expectedCasinoTitle);

        browser.timeouts('page load', 1000000)
            .click(mainpage.pokerButton)
        var title = browser.getTitle();
        expect(title).toContain(expectedPokerTitle)
            .call(done);
    });

    it('test search', function (done) {
        browser
            .click(generalpage.searchField)
            .setValue(generalpage.searchField, searchString)
            .click(generalpage.searchButton)
            .timeouts('page load', 1000000);
        var element = browser.elements(gamepage.similarGamesAll).length;
        expect(element).toBe(expectedElementsNumber);

        var expectedSimilarGame3Title = browser.getText(gamepage.similarGames3Name);
        browser
            .moveToObject(gamepage.similarGames3)
            .click(gamepage.similarGames3)
            .click(gamepage.similarGame3InfoButton);
        var title = browser.getTitle();
        expect(title).toBe(expectedSimilarGame3Title)
            .call(done);
    });

    it('test language switch', function (done) {
        browser
            .windowHandleMaximize()
            .moveToObject(generalpage.languageButton)
            .click(generalpage.languageButtonArrow)
            .moveToObject(generalpage.languageButtonGerman)
            .click(generalpage.languageButtonGerman)
            .timeouts('page load', 1000000);
        var lang = browser
            .getCssProperty(generalpage.languageGet, 'content');

        expect(lang).toContain(expectedLanguage)
            .call(done);
    });

    afterAll(function (done) {
        browser
            .click(generalpage.logoutButtonArrow)
            .moveToObject(generalpage.logoutButton)
            .click(generalpage.logoutButton)
            .timeouts('page load', 1000000)
            .end(done);
    });


});
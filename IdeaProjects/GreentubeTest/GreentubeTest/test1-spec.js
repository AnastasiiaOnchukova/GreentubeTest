var MainPage = require("./page-objects/mainpage.js");
var GamePage = require("./page-objects/gamepage.js");
var username = "50testtest";
var password = "Greentube5";
var expectedSlotTitle = "Slot"
var expectedBingoTitle = "Bingo";
var expectedCasinoTitle = "Casino";
var expectedPokerTitle = "Poker";
var searchString = "Slot";
var expectedGamesNumber = 8;
var expectedLanguage = 'de';

describe("Greentube", function () {

    beforeAll(function () {
        MainPage.open();
        MainPage.windowMaximize();
        MainPage.inputUsername(username);
        MainPage.inputPassword(password);
        MainPage.clickLogin();
        //var isPopupExists=MainPage.waitForExist();
        //if(isPopupExists){MainPage.execute();}
        });

   it('test navigation', function () {
        MainPage.clickSlotsButton();
        var title = MainPage.getTitle();
        expect(title).toContain(expectedSlotTitle);

        MainPage.clickBingoButton();
        var title = MainPage.getTitle();
        expect(title).toContain(expectedBingoTitle);

        MainPage.clickCasinoButton();
        var title = MainPage.getTitle();
        expect(title).toContain(expectedCasinoTitle);

        MainPage.clickPokerButton();
        var title = MainPage.getTitle();
        expect(title).toContain(expectedPokerTitle);
    });

    it('test search', function () {
        MainPage.inputSearch(searchString);
        MainPage.clickSearchButton();
        var isExist = GamePage.isSimilarGameSectionPresent();
        expect(isExist).toBe(true);

        var count = GamePage.countGamesSimilarSection();
        expect(count).toBe(expectedGamesNumber);

        var expectedSimilarGame3Title = GamePage.getSimilarGame3Name();
        GamePage.clickSimilarGame3();
        var title = GamePage.getCurrentGameName();
        expect(title).toContain(expectedSimilarGame3Title);
    });


    it('test language switch', function () {
        MainPage.clickLanguageArrow();
        MainPage.clickLanguageGerman();
        var lang = MainPage.getCurrentLanguage();
        expect(lang).toContain(expectedLanguage);
    });

    afterAll(function () {
        MainPage.clickUserMenuArrow();
        MainPage.clickLogoutButton().end();
    });

});
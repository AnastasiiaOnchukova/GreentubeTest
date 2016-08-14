function Page() {
};

Page.prototype.open = function (path) {
    browser.url(path)
}

Page.prototype.input = function (locator, inputValue) {
    browser.click(locator)
        .setValue(locator, inputValue)
}

Page.prototype.click = function (locator) {
    browser
        .moveToObject(locator)
        .click(locator)
        .timeouts('page load', 1000000)
}

Page.prototype.getTitle = function () {
    return browser.getTitle()
}

module.exports = new Page()
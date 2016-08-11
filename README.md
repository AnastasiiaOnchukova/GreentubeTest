# GreentubeTest
Technologies used: WebdriverIO, Jasmine, Gulp, Page Object pattern, Javascript

Prerequisities: 
1. Have node.js installed
2. Have JDK installed, added to the clathpath
3. Have Chrome browser installed
4. Have chromedriver downloaded and added to the clathpath

Run test:
1. Open node.js command prompt
1. Go to the directory where project and gulpfile.js in particular is stored
2. Run 'gulp run-test' command

On  error occured screenshots would be stored in "./errorShots" folder.

Theoretical task:

Page Objects usually represent either different pages of the application or can represent parts of one page as well.
To split one page for several page objects we need group page parts somehow, it can be done in a lot of ways, but I would split page to logical parts from visual point, I think this way it would be easier to write tests later.
I would first identify which parts could be common for each page of application (stay during navigation between different pages).
On the main page it would be upper menu (language change, login,logout, twists,current level, etc).
Second page object also present through all pages would be search, tab navigation, skills game part under upper menu. 
Third can be right menu with Players most recent activity parts. 
Forth would be About Game Twist part with apple store and googleplay buttons.
Fifth is footer of page and all the links (Help, About us, Support) can be with payment info and digicert button, because present on all pages.
Sixth is carousel pictures with all the buttons on it.
And seventh could be Top&New section which is similar to Similar games section on particular game page.



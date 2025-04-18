# Freiheit

Git Repo: https://github.com/QuopHi-Geek/Freiheit.git


Task Summary:
* Test was done severally on separate browsers Chrome , Firefox , Webkit and parallel execution
* Test was done on different viewports/screen sizes , mobile , tablet



Some Challenges:
* The UI for the games website is buggy and some elements cannot be automated
* Even with specific and unique selectors, some specific elements cannot be focused and thus causing page glitches /loop during automation


Suggestions:
* Unique locators can be assigned to some common elements for the web page.

* For automation of web and mobile enabled apps test frameworks with page objects references are more efficient and maintainable


Features:
Create end-to-end tests which verify the following conditions on our LOTTO24 games area (https://games.lotto24.de):
* Open the games area on a mobile viewport 
*  Verify that the “ZEAL Instant Games” teaser section is present on the page
* Swipe twice to the right within the “ZEAL Instant Games” teaser section
* Click on the product teaser for the first game in the list
* Verify that the correct game page is opened / loaded
* Verify that the correct help link “Zur [game name] Hilfe” is on the page
* Click on the help link
* Verify that the correct help page is opened
* Verify that the correct game is selected in the combo box on the help page
* Verify that the button on the help page links to the correct game 



Prerequisites:
* Create a local git repository and include your commit history when submitting the case study
* Use Playwright to implement the tests using TypeScript
* Make sure to prefer framework provided APIs and features, unless you have a good reason not to
* Apply common patterns to implement your solution
* Add a `README`-file to your project and include these notes as well as your own
* Please include which browser you have used for development


Task Summary Results:
![Test summary report](images/Test%20Report.png)
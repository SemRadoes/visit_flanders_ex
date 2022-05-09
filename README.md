## English

The goal of this exercise is to only use html/css/js to display the information about the routes in Flanders.
Do not add extra dependencies (do not load Bootstrap, do not load JQuery ...).

Currently one example is hard coded in the HTML.
Instead of a hard coded entry, all the routes fetched from the API should be displayed.

The expectation is that for each route:

- the name of the route is displayed
- the description of the route is displayed
- the location of the route is displayed
- the website of the route is displayed IF known - if not known, both the website and the title `Website` are not displayed
- the email is displayed IF known - if not known, both the email and the title `E-mail` are not displayed
- IF subtype is known, the subtype icon is displayed (see hard coded example):
  - biking.png if sub_type is "CYCLING_LOOP"
  - hiking.png if sub_type is "HIKING_LOOP" or "HIKING_THEMATIC_ROUTE"
  - if any other sub_type is used, no icon is not displayed

Tip: The comments in HTML point towards the property that is used.

### Handy documentation

- HTML Template tag: https://www.w3schools.com/tags/tag_template.asp
- Cloning of a template tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
- CSS Selectors: https://www.w3schools.com/cssref/css_selectors.asp
- Create element: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

## Nederlands

Het doel van deze oefening is om alleen html/css/js te gebruiken om de informatie over de routes in Vlaanderen weer te geven.
Voeg geen extra afhankelijkheden toe (laad Bootstrap niet, laad JQuery niet ...).

Momenteel is één voorbeeld hard coded in de HTML.
In plaats van een hard coded entry, moeten alle routes opgehaald uit de API worden weergegeven.

De verwachting is dat voor elke route:

- de naam van de route wordt weergegeven
- de beschrijving van de route wordt getoond
- de locatie van de route wordt getoond
- de website van de route wordt getoond INDIEN GEKEND - indien niet gekend, wordt zowel de website als de titel `Website` niet getoond
- de email wordt getoond INDIEN GEKEND - indien niet gekend, worden zowel het e-mailadres als de titel `Email` niet getoond
- IF subtype is bekend, het subtype icoon wordt getoond (zie hard coded voorbeeld):
  - biking.png als subtype "CYCLING_LOOP" is
  - hiking.png indien subtype "HIKING_LOOP" of "HIKING_THEMATIC_ROUTE" is
  - indien een ander sub_type wordt gebruikt, wordt geen icoon weergegeven

Tip: Het commentaar in HTML wijst naar de property die wordt gebruikt.

### Handige documentatie

- HTML Template tag: https://www.w3schools.com/tags/tag_template.asp
- Cloning of a template tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
- CSS Selectors: https://www.w3schools.com/cssref/css_selectors.asp
- Create element: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

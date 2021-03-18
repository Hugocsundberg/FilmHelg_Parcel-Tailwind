# FilmHelg
School project together with class "informationsproduktion" (IP). 
Assignment was to create an imaginary event-page for an existing company. (Filmstaden in our case)

The project uses Tailwind for styling and browserify, postCSS and a costum html-minifier for bundling and minification. 
The site is live on netlify: https://filmhelg.netlify.app


### Code review - Daniel Borgström
1. Some not so needed info in the SVG-tags.
2. Would've move the addEventListeners to a seperate file and create a function to call them.
3. Can change "isActive === false" to !isActive
4. Row 185, the triple if-statement can be a one-liner instead.
5. Row 203. Instead of running "updateDayElement()" you can add "()" after the "}" on row 201 for autorun on load.
6. Over all really nice, well structured and clean, code.
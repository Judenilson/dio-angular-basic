# dio-angular-basic
Basic Course of Angular by DIO

- defer
    - <code><script src="" defer></script></code> 
    - This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
    - Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
    - To achieve a similar effect for dynamically inserted scripts use async="false" instead. Scripts with the defer attribute will execute in the order in which they appear in the document.
- all Component created in Shadow DOM has it own indepentdent style, that is, it does not influence the rest of the html.
- to create a custom element, you must enter two hyphenated words.
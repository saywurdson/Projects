/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the text area
 * DONE: TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 */
updateText = () => {
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text; // mirrors the text from the input box into the formatted text box
}

/**
 * Toggle the bold class for the output text
 */
makeBold = (elem) => {
  elem.classList.toggle('active'); // Toggles Bold button on and off
  document.getElementById('text-output').classList.toggle('bold'); // Makes formatted text bold when button is toggled on
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
  elem.classList.toggle('active'); // Toggles Italic button on and off
  document.getElementById('text-output').classList.toggle('italic'); // Makes formatted text italic when button is toggled on
}

/**
 * Toggle the underline class for the output text
 */
makeUnderline = (elem) => {
  elem.classList.toggle('active'); // Toggles Italic button on and off
  document.getElementById('text-output').classList.toggle('underline'); // Makes formatted text underlined when button is toggled on
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
alignText = (elem, alignType) => {
  elem.classList.toggle('active'); // Toggles aling button on and off
  document.getElementById('text-output').style.textAlign = alignType; // Changes the style of the text to the align type
  let buttonsList = document.getElementsByClassName('align');
  for(let button of buttonsList) {button.classList.remove('active');
  }
  elem.classList.add('active'); // Only allows the button that was clicked to be active
}
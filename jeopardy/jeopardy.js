// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
let questionsData = [];
let hiddenQs = {};
let hiddenAs = {};

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {

}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM-QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if curerntly "answer", ignore click
 * */


// First click on question mark function
function firstClick(id) {

  // Reveal question
  $(id).html(hiddenQs[`${id}`]);

  // Set up second event listener
  $(id).on('click', function () {
    secondClick(id);
  });
}

// Second click on box
function secondClick(id) {
  // Reveal Answer
  $(id).html(hiddenAs[`${id}`]);
}

// function handleClick(evt) {
// }

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {

  // Retrieve Categories and select random sample 
  let get = await axios.get('http://jservice.io/api/categories', { params: { 'count': '100' } });
  categories = (_.sampleSize(get.data, 6));

  // Retrieve questions and answers and select random sample
  for (let i = 0; i < 6; i++) {
    let get = await axios.get('http://jservice.io/api/clues', { params: { 'category': `${categories[i].id}` } });
    questionsData.push(_.sampleSize(get.data, 5));
  }

  // Set up category headers
  for (let i = 0; i < 6; i++) {
    $('#jeopardy > thead').append(`<th>${categories[i].title}</th>`);
  }

  // Set up Questions and answers and rest of table 
  for (let i = 0; i < 5; i++) {
    $('#jeopardy > tbody').append(`<tr class="tr${i}"></tr>`);
    for (let j = 0; j < 6; j++) {
      $(`.tr${i}`).append(`<td class="clue" id="${[j]}-${[i]}">?</td>`);

      // Event listener on box
      $(`#${[j]}-${[i]}`).on('click', function () {
        firstClick(`#${[j]}-${[i]}`);
      })

      // Store questions and answers 
      hiddenQs[`#${[j]}-${[i]}`] = questionsData[j][i].question;
      hiddenAs[`#${[j]}-${[i]}`] = questionsData[j][i].answer;
    }
  }

  // Hide spinner, show restart button
  $('#spinner').hide();
  $('#restart').show();
  $('#restart').attr('title', 'Restart game');
}

/** On click of restart button, restart game. */

// TODO

/** On page load, setup and start & add event handler for clicking clues */

// TODO

$(function () {

  // On load, show spinner and load initial table 
  $('#spinner').show();
  setupAndStart();

  // Restart button event listener
  $('#restart').on('click', function (e) {
    e.preventDefault();

    // Clear current table and variables
    $('#jeopardy > thead').html('');
    $('#jeopardy > tbody').html('');
    categories = [];
    questionsData = [];
    hiddenQs = {};
    hiddenAs = {};

    // Show spinner, hide restart button
    $('#restart').hide();
    $('#spinner').show();
 
    // Run board setup
    setupAndStart();
  });
});

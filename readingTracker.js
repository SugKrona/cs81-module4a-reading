// Gustavo Corona
// July 6, 2025

//  (Existing Comment) Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// (Existing Comment) Adds a new reading entry to the log
// * This function adds a new reading entry to the readingLog array *
// * It takes three inputs: day, book, and minutes *
// * It pushes the new entry into the readingLog*
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // * Group day, book, and minutes into an object *
  readingLog.push(newEntry); // * Insert the new entry into the reading log array *
}

// (Existing Comment) Returns total minutes spent reading all week
// * This function returns the total number of minutes read during the week *
// * It takes a log (array of reading entries) as input and sums the minutes from each entry *
// * It returns the total as a number. *
function totalReadingMinutes(log) {
  let total = 0; // * Create a variable to store total time * 
  for (let entry of log) {
    total += entry.minutes; // * Accumulate minutes from each log entry *
  }
  return total; // * Return total reading time *
}

// (Existing Comment) Returns the book read most frequently
// * This function finds and returns the book that was read the most during the week *
// * It counts how many times each book appears, then returns the book with the highest count *
// * It returns the book title as a string *
function mostReadBook(log) {
  const bookCounts = {}; // * Object to map book names to how often they appear *
  for (let entry of log) { // * Tally up book counts by checking if the book is already in bookCounts *
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null; // * Stores the title of the most-read book *
  let maxCount = 0; // * Tracks the highest number of reads for any book *
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book; // * Update most-read book if a higher count is found *
      maxCount = bookCounts[book];
    }
  }
  return maxBook; // * Return the book that was read most *
}

// (Existing Comment) Prints a summary of minutes read per day
// * This function prints a summary of each day's reading *
// * It loops through the log and logs a formatted string for each entry *
// * Output is printed using console.log *
function printDailySummary(log) {
  for (let entry of log) { // * Log each day's reading with the book title and time *
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); // *existing example*
addReadBook("Sunday", "Ender's Game", 35); // ✅ New test case for assignment
printDailySummary(readingLog); // * Output summary of all entries in the log *
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // * Show total time spent reading *
console.log("Most read book:", mostReadBook(readingLog));  // * Show which book had the most entries *

// * Suggestion: Add input validation to functions like addReadBook to prevent empty or invalid data (ex: missing book name or negative minutes) 
// It would be beneficial to ensure there are no missing or errors caused by the missing or invalid data *

import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const asteroids = data.asteroids;
  const asteroidsYears = asteroids.map(asteroid => asteroid.discoveryYear);
  const asteroidsYearsCount = asteroidsYears.reduce((acc, curr) => {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  const asteroidsYearsCountArray = Object.entries(asteroidsYearsCount);
  const asteroidsYearsCountArraySorted = asteroidsYearsCountArray.sort((a, b) => b[1] - a[1]);
  const greatestDiscoveryYear = asteroidsYearsCountArraySorted[0][0];
  return +greatestDiscoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

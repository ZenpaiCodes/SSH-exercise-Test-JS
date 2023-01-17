import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const asteroids = data.asteroids;
  const asteroidsByYear = asteroids.reduce((acc, curr) => {
    const year = curr.discoveryYear;
    if (!acc[year]) {
      acc[year] = 0;
    }
    acc[year]++;
    return acc;
  }, {});
  const greatestDiscoveryYear = Object.keys(asteroidsByYear).reduce((acc, curr) => {
    if (asteroidsByYear[curr] > acc) {
      acc = curr;
    }
    return acc;
  }, 0);
  return greatestDiscoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

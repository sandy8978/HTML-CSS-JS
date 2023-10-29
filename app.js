// Import the Tau Prolog library

const TauProlog= require('tau-prolog');
// Create a Tau Prolog session
const session = new TauProlog();

// Consult the Prolog file
session.consult("diet_recommendation_prolog_file.pl");

// Run a query
const results = session.query("generate_diet_plan(John, 30, Male, 70, 180, sedentary, vegetarian, heart-patient, DietPlan).");

// Print the results
for (const result of results) {
  console.log(result);
}


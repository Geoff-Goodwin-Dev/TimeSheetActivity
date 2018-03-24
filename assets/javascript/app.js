// FIREBASE INITIALIZATION
var config = {
  apiKey: "AIzaSyAcOwuwzHC4iVsF66lnaA3sKMV9QcHyLOQ",
  authDomain: "glg2018-02-gtcbc.firebaseapp.com",
  databaseURL: "https://glg2018-02-gtcbc.firebaseio.com",
  projectId: "glg2018-02-gtcbc",
  storageBucket: "glg2018-02-gtcbc.appspot.com",
  messagingSenderId: "371783620093"
};
firebase.initializeApp(config);

$(document).ready(function() {
  // GLOBAL VARIABLES DECLARATIONS
  let formEmployeeName;
  let formRole;
  let formStartDate;
  let formMonthlyRate;



  let database = firebase.database();

  // FIREBASE RETRIEVING DATA
  database.ref().on("value", function(snapshot) {

    console.log(snapshot);
    // if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // }

// If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


  // CLICK FUNCTION FOR SUBMITTING WEBFORM
  $(document).on("click", ".searchButton", function() {
    formEmployeeName = $("#formEmployeeName").val().trim();
    formRole = $("#formRole").val().trim();
    formStartDate = $("#formStartDate").val().trim();
    formMonthlyRate = $("#formMonthlyRate").val().trim();

    console.log("Name: ", formEmployeeName);
    console.log("Role: ", formRole);
    console.log("Start Date: ", formStartDate);
    console.log("Monthly Rate: ", formMonthlyRate);

    // database.ref().push() {
    //   name: formEmployeeName,
    //   role: formRole,
    // }
  });

});
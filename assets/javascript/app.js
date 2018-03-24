// FIREBASE INITIALIZATION
var config = {
  apiKey: "AIzaSyA9jDoGUYomZskVdtfkAwb3z7lm-LMyTNM",
  authDomain: "timesheetactivity-24b64.firebaseapp.com",
  databaseURL: "https://timesheetactivity-24b64.firebaseio.com",
  projectId: "timesheetactivity-24b64",
  storageBucket: "timesheetactivity-24b64.appspot.com",
  messagingSenderId: "722422801080"
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

    // database.ref().push() {
    //   name: formEmployeeName,
    //   role: formRole,
    // }
  });

});
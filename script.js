function calculateSavings() {
  //1. Retrieve values from HTML For input
  let name = document.getElementById("studentName").value;
  let pocketMoney = Number(document.getElementById("monthlyMoney").value);
  let expenses = Number(document.getElementById("monthlySpent").value);

  // Validation check
  if (!name || isNaN(pocketMoney) || isNaN(expenses)) {
    alert("Please fill in all fields correctly with numbers!");
    return;

  }

  //2. Perform arithmetic calculations using JS variables 
  let monthlySavings = pocketMoney - expenses;
  let yearlySavings = monthlySavings * 12;

  //3. Construct the output message
  let resultHTML = '<b>Results for ${name}:</b><br>' +
    'Monthly Savings: ₹${monthlySavings}<br>' +
    'Estimated Yearly Savings: ₹${yearlySavings}<br>' +
    '<i>Great job managing your pocket money!</i>';

  //4. Display the result dynamicall on the webpage (DOM Manipulation)
  let displayBox = document.getElementById("result-display");
  displayBox.innerHTML = resultHTML;
  displayBox.style.display = "block"; //Make the hidden box visible

  // Log values in the browser developer console
  HTMLFormControlsCollection.log("Student:", name);
  console.log("Monthly Savings:", monthlySaving);
  console.log("Yearly Savings:", yearlySaving);

}

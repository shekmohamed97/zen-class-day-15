document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pinCode = document.getElementById("pincode").value;
  var number = document.getElementById("number").value;
  var gender = document.getElementById("gender").value;
  var foodItems = document.getElementsByName("food");
  var selectedFoods = [];
  for (var i = 0; i < foodItems.length; i++) {
      if (foodItems[i].checked) {
          selectedFoods.push(foodItems[i].value);
      }
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  
  var newRow = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + address + "</td><td>" + pinCode + "</td><td>" + number + "</td><td>" + gender + "</td><td>" + selectedFoods.join(", ") + "</td><td>" + state + "</td><td>" + country + "</td></tr>";
  document.querySelector("#dataTable tbody").innerHTML += newRow;
  
  document.getElementById("myForm").reset();
});
function showSeatSelection(option) {
    var seatSelection = document.getElementById("seatSelection" + option);
    seatSelection.style.display = "block";
}
 
function generatePassengerForms(option) {
    var passengerCount = document.getElementById("passengerCount" + option).value;
    var passengerDetailsDiv = document.getElementById("passengerDetails" + option);
    passengerDetailsDiv.innerHTML = "";
 
    for (var i = 1; i <= passengerCount; i++) {
        var form = document.createElement("form");
        form.innerHTML = `
            <h3>Passenger ${i} Details</h3>
            <label for="name${i}">Name:</label><br>
            <input type="text" id="name${i}" name="name${i}" required><br>
            <label for="email${i}">Email:</label><br>
            <input type="email" id="email${i}" name="email${i}" required><br>
            <label for="phone${i}">Phone:</label><br>
            <input type="tel" id="phone${i}" name="phone${i}" required><br>
            <h4>Seat Selection for Passenger ${i}</h4>
            <label for="seat${i}">Select Seat:</label>
            <input type="text" id="seat${i}" name="seat${i}" placeholder="Enter seat number" required><br>
            <img src="layout.jpg" alt="Bus Layout" width="80%" height="50%";>
        `;
        passengerDetailsDiv.appendChild(form);
    }
 
    var bookNowBtn = document.createElement("button");
    bookNowBtn.textContent = "Book Now";
    bookNowBtn.onclick = function() {
        if (validateForms(option)) {
            alert("Booked successfully!");
       
        } else {
            alert("Please fill out all passenger details correctly.");
        }
    };
    passengerDetailsDiv.appendChild(bookNowBtn);
}
 
function validateForms(option) {
    var forms = document.querySelectorAll("#passengerDetails" + option + " form");
    for (var i = 0; i < forms.length; i++) {
        var inputs = forms[i].querySelectorAll("input");
        var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var phoneRegex = /^\d{10}$/;
 
        var nameInput = forms[i].querySelector("#name" + (i + 1));
        var emailInput = forms[i].querySelector("#email" + (i + 1));
        var phoneInput = forms[i].querySelector("#phone" + (i + 1));
 
     
        if (!nameRegex.test(nameInput.value)) {
            alert("Please enter a FULL NAME for Passenger " + (i + 1) + ".");
            return false;
        }
 
     
        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address for Passenger " + (i + 1) + ".");
            return false;
        }
 
       
        if (!phoneRegex.test(phoneInput.value)) {
            alert("Please enter a valid 10-digit phone number for Passenger " + (i + 1) + ".");
            return false;
        }
 
 
    }
    return true;
}
 
 
 
 
function validateForm() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (from === to) {
        alert("Departure and arrival destinations cannot be the same.");
        return false;
    }
    return true;
}
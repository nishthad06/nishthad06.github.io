<!DOCTYPE html>
<html lang="en">
<head>
    <title>Book Tickets - RapidRoute</title>
    <style>
        body {

font-family: Arial, sans-serif;

  background-color:beige;

margin: 0;

padding: 0;

overflow: scroll;

}
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
        }
        h1 {
            text-align: center;
            color: beige;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        select, input[type="date"] {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
        button {
            background-color: maroon;
            color: #fff;
            border: none;
            padding: 15px 30px;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0a2c4e;
        }
        nav {
            background-color: #666;
            padding: 10px;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        header {
            background-color: maroon;
            padding:10px;
            color: beige;;
            text-align: center;
 
        }
        footer {
            color: #393838;
            text-align: center;
            width:fit-content;
        }
    </style>
    <script>
        function validateForm() {
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;

            if (from === to) {
                alert("Departure and arrival destinations cannot be the same.");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <header>
        <h1>RapidRoute - Coastal Connections</h1>
    </header>
    <form action="/book" method="post" onsubmit="return validateForm()">
    <div id="status-bar">
        <nav>
            <ul>
                <li><a href="rapidroutehome.html">Home</a></li>
                <li><a href="rapidroutebook.html">Book Tickets</a></li>
                <li><a href="rapidrouteabout.html">About Us</a></li>
                <li><a href="rapidroutecontact.html">Contact</a></li>
            </ul>
        </nav>
    </div>
   
    <div class="container">
        <h1>Book Your Tickets</h1>
        <div class="form-group">
            <label for="from">From</label>
            <select id="from" name="from">
                <option value="">Departure Destination</option>
                <option value="panaji">Panaji</option>
                <option value="morjim">Morjim</option>
                <option value="arambol">Arambol</option>
                <option value="agonda">Agonda</option>
                <option value="candolim">Candolim</option>
            </select>
        </div>
        <div class="form-group">
            <label for="to">To</label>
            <select id="to" name="to">
                <option value="">Arrival Destination</option>
                <option value="panaji">Panaji</option>
                <option value="morjim">Morjim</option>
                <option value="arambol">Arambol</option>
                <option value="agonda">Agonda</option>
                <option value="candolim">Candolim</option>
            </select>
        </div>
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" id="date" name="date">
        </div>
        <button onclick="window.location.href='rapidrouteselect.html'">Check Availability</button>

    </div>
    </form>
        <p>&copy; 2024 RapidRoute. All rights reserved.</p>

    </footer>
</body>
</html>
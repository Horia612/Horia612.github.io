<!DOCTYPE html>
<!-- Spataru Horia-Stefan -->
<html lang="en-GB">
<head>
<title>Contact me</title>
<link rel="stylesheet" href="contact.css">
<link rel="icon" type="image/x-icon" href="backrest.ico">
<script src="contact.js" defer></script>
</head>
<body>

    <div class="title">
        <h1 title="La Horica' SRL">BACK & REST</h1>
        <h5>Sit <ins>back</ins> and relax, we will do the <ins>rest</ins>!</h5>
        <button id="back">Back</button>
    </div>

    <div class="formal">
        <form class="form" action="process_form.php" method="post">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Jane"><br>

            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Doe">

            <label for="mail">Email:</label><br>
            <input type="text" id="mail" name="mail" placeholder="jane.doe@aol.com">

            <label for="subject">Subject:</label><br>
            <input type="text" id="subject" name="subject" placeholder="What do you want to talk about?">

            <label for="mess">Message:</label><br>
            <input type="text" id="mess" name="mess" placeholder="Maximum 500 characters.......">

            <label for="work">Are you hiring or looking for work?</label><br>

            <input type="radio" id="hire" name="work" value="hire">
            <label for="hire">Recruiter hiring</label><br>
  
            <input type="radio" id="job" name="work" value="job">
            <label for="job">Looking for job</label>
        
            <input type="checkbox" id="check" name="check" value="check">
            <label for="check">I want to be contacted for eventual offers.</label><br>

            <button type="submit" id="submit">Submit</button>
          </form>
    </div>

    <div class="adress">
        <a href="https://www.linkedin.com/in/horia-stefan-spataru-b337a82b7/">LinkedIn Profile</a>
    
        <address>
            Visit us at:<br>
            Meteor 86, Targu Jiu<br>
            Romania
            </address>
        
            <bdo dir="rtl">This website is still in work :D</bdo>
    </div>

</body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            function ChangeText(){
                document.getElementById("welcome").style.color="red";
                document.getElementById("welcome").style.fontFamily="Times New Roman";
                document.getElementById("welcome").style.fontSize="20";
            }
        </script>
    </head>
    <body>
        <p id="welcome">CodeStop Welcomes You!</p>
        <input type="button" onclick="ChangeText()"
        value="Click me to change text font and color">
    </body>
</html>
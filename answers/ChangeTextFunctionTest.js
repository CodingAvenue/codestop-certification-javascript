<!DOCTYPE html>
<html>
    <head>
    <script type="text/javascript">
        function ChangeText() {
            document.getElementById("welcome").innerHTML="Welcome";
        }
    </script>
    </head>
    <body>
        <p id="welcome">Hello User!</p>
        <input type="button" onclick="ChangeText()" value="Click me to change text">
    </body>
</html>
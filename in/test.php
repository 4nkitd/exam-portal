<script>
var popUpWin = 0;

function popUpWindow(URLStr, left, top, width, height, windowName) {
    left = (screen.width / 2) - width / 2;
    top = (screen.height / 2) - height / 2;
    if (popUpWin) {
        if (!popUpWin.closed)
            popUpWin.close();
    }
    popUpWin = open(URLStr, windowName, 'toolbar=no,location=no,directories=no,status=no,menub ar=no,scrollbar=no,resizable=no,copyhistory=yes,width=' + width + ',height=' + height + ',left=' + left + ', top=' + top + ',screenX=' + left + ',screenY=' + top + '');
    popUpWin.focus();
}
</script>

<div onload="popUpWindow('127.0.0.1', '100%', '100%', '100%', '100%', 'thod')" ></div>
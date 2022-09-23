// function sendSelection() {
//     var ele = document.getElementsByName("fav_artist")

//     ele.forEach(element => {
//         if (element.checked)
//             document.getElementsByName("")
//     });
// }
function goToPage(origin, evnt, givenName) {
    const checkedBtn = document.querySelector('input[type="radio"][name=' + CSS.escape(givenName) + ']:checked');
    if (checkedBtn)
        origin.action = checkedBtn.value;
    else {
        if (givenName === "fav_artist")
            alert("Please select an artist");
        else
            alert("Please select an song");

        evnt.preventDefault();
    }
}
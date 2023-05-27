let chk = document.getElementById('food')
chk.addEventListener('click', function (event) {
    let checkboxes = document.querySelectorAll('input[name="food"]:checked');
    var output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    rel1 = output;
    rel = output.join(" ");
    console.log(rel)
})

function myfun() {
    {
        if (rel1.length > 1) {
            document.getElementById('table').style.display = 'block';

            var table = document.getElementById('table');
            var row = table.insertRow(-1);
            var fname = row.insertCell(0);
            var lname = row.insertCell(1);
            var gender = row.insertCell(2);
            var address = row.insertCell(3);

            var food = row.insertCell(4);
            var pincode = row.insertCell(5);
            var state = row.insertCell(6);
            var country = row.insertCell(7);
            fname.innerHTML = document.getElementById('fname').value;
            lname.innerHTML = document.getElementById('lname').value;
            gender.innerHTML = gend();
            address.innerHTML = document.getElementById('address').value;
            food.innerHTML = rel;

            pincode.innerHTML = document.getElementById('pincode').value;
            state.innerHTML = document.getElementById('state').value;
            country.innerHTML = document.getElementById('country').value;
            return false;

        }
        else
            window.alert("Must select two favorite food")
    }
    function gend() {
        var x = document.getElementById("male");
        var y = document.getElementById("female");
        if (x.checked === true) {
            return "Male";
        } else if (y.checked === true) {
            return "Female";
        } else {
            return "";
        }
    }
}
let clr = document.getElementById('btn')
clr.addEventListener('click', clear)
function clear() {
   
    document.getElementById("form").reset();

}
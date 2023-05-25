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
function radio() {
    val = document.getElementById("female").value;
    console.log(val)

}
function radio1() {
    val = document.getElementById("male").value;
    console.log(val)

}

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
            gender.innerHTML = val;
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
    document.getElementById("myform").reset();
}
// function myfun(){
//     document.getElementById("Form").Reset();
// }

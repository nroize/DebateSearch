url = "https://debate-search.herokuapp.com"

var names;

async function getNameList() {
    return await fetch (`${url}/api/v1/getUserList`).then(function(response) {
        return response.json();
    }).then(function(json) {
        return json["response"]
    })
}

function search() {
    let name = document.getElementById("search").value
    if (names.includes(name)) {
        window.location.replace(`/user.html?name=${name}`)
    } else {
        console.log("BAD")
        document.getElementById("error-msg").style.visibility = "visible";
    }
}

async function enableAutocomplete() {
    names = await getNameList();
    $("#search" ).autocomplete({
      source: names
    });
}
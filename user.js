url = "https://debate-search.herokuapp.com"

var sort = "ascending";

words = {}

var name = "";

async function getUserData() {
    const urlParams = new URLSearchParams(window.location.search);
    name = urlParams.get("name")
    return await fetch (`${url}/api/v1/getUser?name=${encodeURIComponent(name)}`).then(function(response) {
        return response.json();
    })
}

async function sortByCount() {
    if (sort == "ascending") {
        sort = "descending";
        document.getElementById("count").innerHTML = "<b>Count (Ascending)</b>";
        await renderTable();
    } else {
        sort = "ascending";
        document.getElementById("count").innerHTML = "<b>Count (Descending)</b>";
        await renderTable();
    }
}

function sortDictByVal(data) {
    if (sort == "ascending") {
        sortedDict = Object.entries(data).sort((a,b) => b[1]-a[1]);
    } else {
        sortedDict = Object.entries(data).sort((a,b) => a[1]-b[1]);
    }
    returnDict = {};
    for (var i = 0; i < sortedDict.length; i++) {
        returnDict[sortedDict[i][0]] = sortedDict[i][1];
    }
    return returnDict
}


async function renderTable() {
    words = sortDictByVal(words);
    var body = document.getElementById("dispTable");
    var i = 0
    for (word in words) {
        row = body.insertRow(i);
        cell = row.insertCell(0);
        cell.style.maxWidth = "200px";
        cell.innerHTML = word;
        cell = row.insertCell(1);
        cell.style.maxWidth = "200px";
        cell.innerHTML = words[word];
        i++;
    }
}

async function start() {
    words = await getUserData();
    document.getElementById("name").innerHTML = name;
    await renderTable();
}
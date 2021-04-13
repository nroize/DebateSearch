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

function fieri(cust) {
    flavours = [
        "Pro-choice!", 
        "With 100% less Minecraft!", 
        "Is Mayonnaise subjective?", 
        "Join Birding Club!", 
        "What's a Minecraft?", 
        "Are you there Bog? It's me, Alex",
        "🗑️👨‍💻",
        "Anyone remember Edline?",
        "Edsby > Google Classroom",
        "Does anybody read these?",
        "David Tennant <i>might</i> be the best Doctor",
        "Hi, Jaryd!",
        "Unapproved by Edsby!",
        "This idea is made of 100% recycled materials",
        "These took longer to come up with than it took to write the code",
        "Michelle's Rose Garden was better!",
        "Melania's Rose Garden was better!",
        "Yael is right!",
        "Kagal is right!",
        "Stop browsing Debate Club during class!",
        "Hosted on 100% quantum computers!",
        "Don't join the Discord",
        "A web page? What's that, something a duck walks on?",
        "Flavourtext courtesy of Ben Cohen", 
        "Good luck, grads!",
        "Impossible Burgers are actually very possible",
        "Normalize going on Debate Club during class!",
        "These little blurbs actually make the site load slower. You're welcome!",
        "Why? For the glory of Satan, of course!", 
        "Fun fact: I Will Survive by Gloria Gaynor is the only disco song to ever win a Grammy",
        "Sponsored by... nobody!",
        "99% of the time, it works every time!",
        "I wonder what this button does... <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"waves-effect waves-light btn-small\" style=\"-webkit-text-fill-color: white;\">click</a>",
        "There are [undefined] of these flavourtexts. Collect em all!",
        "Plug my <a href=\"https://instagram.com/nroize\" style=\"-webkit-text-fill-color: white;\" class=\"waves-effect waves-light btn-small\">Instagram</a>? I would never!",
        "Sir, this is a Wendy's", 
        "Why are we here... just to Debate?",
        "Nope!",
        "Yep!",
        "These are harder to come up with than it looks",
        "Hosted on <a href=\"https://netlify.com/\">Netlify.</a><br>I don't have to put this here, they're just cool.",
        "DM me suggestions for things!",
        "<a href=\"https://www.youtube.com/watch?v=dvwH8Qij0JY\">Just remember that you're standing on a planet that's evolving<br>And revolving at nine hundred miles an hour</a>",
        "It's bug season. Both outside, and in my code!",
        "Reject Yearbook, evolve to Monthbook!",
        "Double rainbow all the way!",
        "Neither of them were right",
        "Bell poll!",
        "Gottlieb poll!",
        "Nate doesn't post enough in Politics Club",
        "I made this instead of doing homework!",
        "This one never shows up, so if you're reading it... GET OUT OF MY CODE!"
    ]
    if (cust == undefined) {
        var rand = Math.floor(Math.random()*50);
        document.getElementById("flavour").innerHTML = flavours[rand];
    } else {
        document.getElementById("flavour").innerHTML = flavours[cust];
    }
    if (cust == 6 || rand == 6) {
        document.getElementById("flavour").className = "";
    }
}
console.log("I'm the popup script!")

$("#bg").on("click", bluebackground);
$("#shiver").on("click", shivers);
$("#ice").on("click", icicles);
$("#snow").on("click", snowing);


//-5
function bluebackground() {
    if ($("#bg").is(":checked")) {
        var color = $(this).attr("value");

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: color
            });
        });
    }
}

//-10
function shivers() {
    var shake = "shivering";
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            message: shake
        });
    });
}

//-20
function icicles() {
    var ice = "make_ice";
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            message: ice
        });
    });
}

//-40
function snowing() {
    if ($("#snow").is(":checked")) {
        var snow = "start_snowing";
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: snow
            });
        });
    }
}

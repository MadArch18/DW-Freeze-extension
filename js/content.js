console.log("extension is running!")

//$("h3").hover(function () {
//    $(this).css("color", "lightblue");
//
//})


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var color = request.message;
        console.log("user has clicked");
        $("body").css("background", color);
    })

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start_snowing") {
            console.log("it should be snowing");
        }
    })

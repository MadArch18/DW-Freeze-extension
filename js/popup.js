console.log("I'm the popup script!")

//$("#mybutton").on("click", function () {
//    chrome.tabs.query({
//            active: true,
//            currentWindow: true
//        },
//        function (tabs) {
//            chrome.tabs.sendMessage(tabs[0].id, {
//                message: 'hello'
//            });
//        })
//})


$("#button").on("click", freeze);

function freeze() {
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

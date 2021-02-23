console.log("I'm the popup script!")

$("#bg").on("click", bluebackground);
$("#shiver").on("click", animation);
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
    } else {
        $(this).removeAttr();
    }
}

//-10
function animation() {
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



//Checkboxes function sourced from: https://www.coding.academy/blog/how-to-use-jquery-to-select-and-deselect-all-checkboxes

$(function () {
    $("#checkall").click(function () {
        if (this.checked) {
            $(".checkboxes").prop("checked", true);
        } else {
            $(".checkboxes").prop("checked", false);
        }
    })

    $(".checkboxes").click(function () {
        var numberOfCheckboxes = $(".checkboxes").length;
        var numberOfCheckboxesChecked = $(".checkboxes:checked").length;
        if (numberOfCheckboxes == numberOfCheckboxesChecked) {
            $("#checkall").prop("checked", true);
            console.log("everything is checked!");
        } else {
            $("#checkall").prop("checked", false);
        }
    })

})

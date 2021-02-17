console.log("I'm the popup script!")

function snowing() {
    if ($("#snow").is(":checked")) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: "start_snowing"
            });
        });
    }
}

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

$("#bg").on("click", bluebackground);

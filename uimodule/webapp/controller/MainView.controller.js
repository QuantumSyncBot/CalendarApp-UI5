var calendar;
sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.mykingdom.simpleSapUi5CalendarApp.controller.MainView", {
            onInit: function () {
                //alert(this.getView().byId("calFirst").getId());
                calendar = this.getView().byId("calFirst");
                const date = new Date();
                addHolidays(date.getFullYear());
                calendar.attachStartDateChange(null, () => { addHolidays(calendar.getStartDate().getFullYear()); }, null)
            },
        });
    }
);

var loadedYears = [];
function addHolidays(year) {
    if (!loadedYears.includes(year)) {
        loadedYears.push(year);
        fetch("https://feiertage-api.de/api/?jahr=" + year)
            .then(response => response.json())
            .then(data => {
                var bawue = data.BW;
                Object.keys(bawue).forEach(hdayName => {
                    var hdayData = bawue[hdayName];
                    console.log(hdayName + " : " + hdayData.datum);
                    addHolidayFromString(hdayData.datum, hdayName);
                });
            });
    }
}

function addHolidayFromString(date, tt) {
    const [year, month, day] = date.split('-');

    addHoliday(year, month, day, tt);
}

function addHoliday(year, month, day, tt) {
    calendar.addSpecialDate(new sap.ui.unified.DateTypeRange(
        {
            color: "#FF0000",
            startDate: new Date(year, month - 1, day),
            tooltip: tt
        }
    ));
}
// color: "#FF0000",
                    // type: "Holiday",
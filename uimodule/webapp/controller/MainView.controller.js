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
                //addHolidays(2022);
                this.getView()
                .byId("calFirst")
                .addSpecialDate(new sap.ui.unified.DateTypeRange(
                    {
                    color: "#FF0000",
                    startDate: new Date(2022, 5, 1)
                }));
            },
        });
    }
);

function addHolidays(year) {
    this.getView()
        .byId("calFirst")
        .addSpecialDate({
            color: "red",
            type: "Holiday",
            startDate: new Date(2022, 6, 7),
        });
}


// color: "#FF0000",
                    // type: "Holiday",
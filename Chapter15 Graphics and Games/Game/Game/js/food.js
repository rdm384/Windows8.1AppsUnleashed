﻿/// <reference path="//Microsoft.WinJS.2.0.Preview/js/base.js" />
/// <reference path="//Microsoft.WinJS.2.0.Preview/js/ui.js" />

(function () {
    "use strict";

    function Food(tile, x, y) {
        this.tile = tile;
        this.x = x;
        this.y = y;
    }


    WinJS.Namespace.define("Unleashed", {
        Food: Food
    });

})();

﻿/// <reference path="//Microsoft.WinJS.2.0.Preview/js/base.js" />
/// <reference path="//Microsoft.WinJS.2.0.Preview/js/ui.js" />

(function () {
    "use strict";

    function Character(tile, direction, x, y) {
        this.tile = tile;
        this.direction = direction;
        this.x = x;
        this.y = y;
    }


    WinJS.Namespace.define("Unleashed", {
        Character: Character
    });

})();

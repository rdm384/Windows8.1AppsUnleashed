﻿/// <reference path="//Microsoft.WinJS.2.0.Preview/js/base.js" />
/// <reference path="//Microsoft.WinJS.2.0.Preview/js/ui.js" />

(function () {
    "use strict";

    WinJS.Namespace.define("Unleashed", {
        Sounds: {
            yum: new Audio("/sounds/yum.wav"),
            eaten: new Audio("/sounds/eaten.wav"),
            cheer: new Audio("/sounds/cheer.wav")
        }
    });

})();

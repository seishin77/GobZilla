// ==UserScript==
// @name         disable_cloakroom
// @namespace    http://gobland.fr/
// @version      0.1
// @copyright    2020+
// @description  Disable cloakroom checkbox
// @author       Seishin
// @run-at       document-end
// @match        http://games.gobland.fr/depot.php*
// @grant        none
// @downloadURL https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.user.js
// @updateURL   https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.meta.js
// ==/UserScript==

/* global $ */
(function() {
    'use strict';

    $('input[type=checkbox][name=VESTIAIRE]').prop( "checked", false );
})();

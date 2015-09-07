/**
 * CookiePolicy : Plugin to display navbar with cookiePolicy
 * Copyright (C) 2015 SREd Servei de Recursos Educatius <http://www.sre.urv.cat/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
/**
 * @author Daniel Tomé <danieltomefer@gmail.com>
 */
(function ($) {
    $.fn.cookieBar = function (name, message, messageButton, hrefMoreInfo, textMoreInfo, cookieBarStyle) {
        if (!name.trim() || !message.trim() || !messageButton.trim() || !hrefMoreInfo.trim() || !textMoreInfo.trim()) {
            alert('There is an error on defining variables');
        }
        if (cookieBarStyle != 'top' && cookieBarStyle != 'bottom') {
            alert('Cookie bar style is wrong. You must only use (top) or (bottom)');
            cookieBarStyle = 'top';
        }
        var nameEQ = name;
        window.name = name;
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        //There's no cookie with defined name and we show the message
        $('#cookiebar-container-cookie').append('<div id="cookiebar" class="navbar-fixed-' + cookieBarStyle + '">' +
        '<p class="cookiebar-paragraph">' + message + '<a class="cookiebar-more-info" target="_blank" href="' + hrefMoreInfo + '">'
        + textMoreInfo + '</a><a id="cookiebar-button" href="#" role="button" ' +
        'class="btn btn-success">' + messageButton + '</a></p></div>');
    }

    $.fn.createCookie = function (days) {
        var value = true;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(window.name) + "=" + encodeURIComponent(value) + expires + "; path=/";
        $('#cookiebar').fadeOut();
    }
}(jQuery));


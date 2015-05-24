/*
 Licensed under the MIT Open Source License.

 Copyright 2014 Shadwell Da Cunha.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE. 
 */
;(function (slickNavbar, $, undefined) {
    slickNavbar.meta = {
        name: 'Slick Navbar',
        version: '1.0.0.1'
    };
    slickNavbar.config = {
        collapse_value: slick_break_medium,
        toggle_speed: 'fast'
    };
    slickNavbar.events = [{
            type: 'click',
            target: '.collapse',
            handler: function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).parent().children('ul').slideToggle('fast');
                $(this).parent().children('.container').children('ul').slideToggle(slickNavbar.config.toggle_speed);
            }
        },{
            type: 'click',
            target: '.navbar ul li',
            handler: function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).children('ul').fadeToggle(slickNavbar.config.toggle_speed);
            }
        },{
            type: 'resize',
            target: window,
            handler: function (e) {
                if ($(this).width() > slickNavbar.config.collapse_value) {
                    $("html").find('.navbar').each(function () {
                        $(this).find('ul').attr('style', '');
                    });
                }
            }
        }
    ];
}(window.slickNavbar = window.slickNavbar || {}, jQuery));
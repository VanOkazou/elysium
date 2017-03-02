$(function() {
    "use strict";

    // Page FAQ
    var $faqItems = $('#faqs .faq');
    if (window.location.hash != '') {
        var getFaqFilterHash = window.location.hash;
        var hashFaqFilter = getFaqFilterHash.split('#');
        if ($faqItems.hasClass(hashFaqFilter[1])) {
            $('#portfolio-filter li').removeClass('activeFilter');
            $('[data-filter=".' + hashFaqFilter[1] + '"]').parent('li').addClass('activeFilter');
            var hashFaqSelector = '.' + hashFaqFilter[1];
            $faqItems.css('display', 'none');
            if (hashFaqSelector != 'all') {
                $(hashFaqSelector).fadeIn(500);
            } else {
                $faqItems.fadeIn(500);
            }
        }
    }

    $('#portfolio-filter a').click(function() {
        $('#portfolio-filter li').removeClass('activeFilter');
        $(this).parent('li').addClass('activeFilter');
        var faqSelector = $(this).attr('data-filter');
        $faqItems.css('display', 'none');
        if (faqSelector != 'all') {
            $(faqSelector).fadeIn(500);
        } else {
            $faqItems.fadeIn(500);
        }
        return false;
    });



    /*=====================================
    =            INIT FUNCTION            =
    =====================================*/

    $(document).ready(function() {
        // Page contact
        $('#google-map').gMap({
            address: 'Melbourne, Australia',
            maptype: 'ROADMAP',
            zoom: 14,
            markers: [{
                address: "Melbourne, Australia",
                html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Envato</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
                icon: {
                    image: "images/icons/map-icon-red.png",
                    iconsize: [32, 39],
                    iconanchor: [32, 39]
                }
            }],
            doubleclickzoom: false,
            controls: {
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false
            }
        });
    });


    /*=====================================
    =            RESIZE FUNCTION          =
    =====================================*/

    jQuery(window).resize(function() {

    });

    /*=====  End of RESIZE FUNCTION  =====*/


});
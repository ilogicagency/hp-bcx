(function($) {
    $(document).ready(function() {
        window.swipe = new Swipe();
    });
})(jQuery);

(function($) {
    function Swipe() {
        this.event();
    }

    Swipe.prototype = {
        event: function() {
            var scope = this;
            $('html').on('vmousemove', function(e) {
                $('html').css({'cursor':'url(./src/img/hp_projectionmapping_console_button_blue2.png) ' + e.pageY + ' ' + e.pageX + ', auto'});
            });

            $('html').on('vmouseup', function(e) {
                $('#cursor').hide();
                var element = $(e.target).children().children('button');
                console.log(element);
                $(element).trigger('click');
                console.log('x: ' + e.pageX + '; y: ' + e.pageY);
            });
        }
    };

    window.Swipe = Swipe;
})(jQuery);
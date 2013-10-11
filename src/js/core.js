(function($) {
    $(document).ready(function() {
        window.debug = new Debug();
        window.app = new App();
    });
})(jQuery);

(function($, window) {
    function App() {
        if (typeof PBAutoCommands == 'undefined')
            console.log('Unable to find Pandoras Box command: "PBAutoCommands"!');

        this.sections = ['video'];
        this.sectionCurrent = 0;
        this.choices = {
            green1: {seek: '00:00:00:00', delay: 10000},
            green2: {seek: '00:01:00:00', delay: 3000},
            green3: {seek: '00:02:00:00', delay: 3000},
            green4: {seek: '00:03:00:00', delay: 3000},
            turquoise1: {seek: '00:00:10:00', delay: 10000},
            turquoise2: {seek: '00:05:00:00', delay: 3000},
            turquoise3: {seek: '00:06:00:00', delay: 3000},
            turquoise4: {seek: '00:07:00:00', delay: 3000},
            red1: {seek: '00:00:20:00', delay: 10000},
            red2: {seek: '00:09:00:00', delay: 3000},
            red3: {seek: '00:10:00:00', delay: 3000},
            red4: {seek: '00:11:00:00', delay: 3000}
        }
        this.userChoices = [];

        this.queue;
        this.chosen;
        this.timer;

        this.__construct();
    }

    App.prototype = {
        __construct: function() {
            this.timer = new Timer();

            this.events();
            this.reset();
        },
        events: function() {
            var scope = this;

            $('.video').on('click', function(e) {
                e.preventDefault();

                $(this).addClass('active');
                $('.video').not(this).removeClass('active');

                var id = $(this).attr('id');
                var choice = id;

                scope.userChoices.push(choice);

                var delay = scope.choices[choice].delay;

                scope.sectionCurrent++;

                scope.timer.start(delay, scope);

                scope.seek(scope.choices[choice].seek);

                debug.output(' - Chosen: ' + choice);
            });
        },
        seek: function(seek) {
            var hour = seek.substring(0, 2);
            var min = seek.substring(3, 5);
            var sec = seek.substring(6, 8);
            var frame = seek.substring(9, 11);

            if (typeof PBAutoCommands != 'undefined') {
                PBAutoCommands.moveSequenceToTime(false, 1, hour, min, sec, frame);
                PBAutoCommands.setSequenceTransportMode(false, 1, 'Play');
            }
        },
        selection: function(scope) {
            $('#' + scope.userChoices[scope.sectionCurrent - 1]).removeClass('active');

            var playBack = scope.random(scope.choices);

            $('#' + playBack).addClass('active');
            $('.video').not($('#' + playBack)).removeClass('active');

            var delay = scope.choices[playBack].delay;
            scope.timer.start(delay, scope);

            scope.seek(scope.choices[playBack].seek);
        },
        random: function(obj) {
            var random = Math.floor(Math.random() * this.objLength(obj));
            var count = 0;

            for (var prop in obj) {
                if (count == random)
                    return prop;

                count++;
            }
        },
        objLength: function(obj) {
            var count = 0;

            for (var prop in obj) {
                count++;
            }

            return count;
        },
        reset: function() {
            this.sectionCurrent = 0;
            this.userChoices = [];

            $('#sounds').show();

            if (typeof PBAutoCommands != 'undefined') {
                PBAutoCommands.moveSequenceToTime(false, 1, 0, 0, 0, 0);
                PBAutoCommands.setSequenceTransportMode(false, 1, 'Stop');
            }
        }
    };

    window.App = App;
})(jQuery, window);

(function($, window) {
    function Timer() {
        this.timer;
    }

    Timer.prototype = {
        start: function(delay, scope) {
            clearInterval(this.timer);

            this.timer = setTimeout(function() {
                scope.selection(scope);
            }, delay);
        }
    };

    window.Timer = Timer;
})(jQuery, window);

(function($, window) {
    function Debug() {
        $('body').prepend('<div id="debug">');
        $('#debug').css('position', 'absolute').css('top', 0).css('background', '#222').css('color', '#fff');
    }

    Debug.prototype = {
        output: function(text) {
            $('#debug').html($('#debug').html() + '<br/>' + text);
        }
    };

    window.Debug = Debug;
})(jQuery, window);
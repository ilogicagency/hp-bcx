(function($) {
    $(document).ready(function() {
        window.debug = new Debug();
        window.app = new App();
    });
})(jQuery);

(function($) {
    function App() {
        if (typeof PBAutoCommands == 'undefined')
            console.log('Unable to find Pandoras Box command: "PBAutoCommands"!');

        this.sections = ['menu'];
        this.sectionCurrent = 0;
        this.screensaverMode = {
            screensaver: {seek: '00:20:00:00', delay: 10000}
        }
        this.demoMode = {
            demo: {seek: '00:21:10:00', delay: 10000}
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

            $('#screensaver').on('click', function(e) {
                e.preventDefault();

                $(this).addClass('active');
                $('.menu_btn').not(this).removeClass('active');

                var id = $(this).attr('id');
                var choice = id;

                scope.userChoices.push(choice);

                var delay = scope.screensaverMode[choice].delay;

                scope.sectionCurrent++;

                scope.timer.start(delay, scope);

                scope.seek(scope.screensaverMode[choice].seek);

                console.output(' - Chosen: ' + choice);
            });
            
            $('#demo').on('click', function(e) {
                e.preventDefault();

                $(this).addClass('active');
                $('.menu_btn').not(this).removeClass('active');

                var id = $(this).attr('id');
                var choice = id;

                scope.userChoices.push(choice);

                var delay = scope.demoMode[choice].delay;

                scope.sectionCurrent++;

                scope.timer.start(delay, scope);

                scope.seek(scope.demoMode[choice].seek);

                console.output(' - Chosen: ' + choice);
            });
            
            $('#mapping').on('click', function(e) {
                e.preventDefault();
                scope.reset();
                window.top.location = 'mapping.html';
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

            var playBack = scope.random(scope.screensaverMode);

            $('#' + playBack).addClass('active');
            $('.menu_btn').not($('#' + playBack)).removeClass('active');

            var delay = scope.screensaverMode[playBack].delay;
            scope.timer.start(delay, scope);

            scope.seek(scope.screensaverMode[playBack].seek);
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

            if (typeof PBAutoCommands != 'undefined') {
                PBAutoCommands.moveSequenceToTime(false, 1, 0, 0, 0, 0);
                PBAutoCommands.setSequenceTransportMode(false, 1, 'Stop');
            }
        }
    };

    window.App = App;
})(jQuery);


(function($) {
    function Timer() {
    }

    Timer.prototype = {
        start: function(delay, scope) {
            $.doTimeout('timer', delay, function() {
                scope.selection(scope);
            });
        }
    };

    window.Timer = Timer;
})(jQuery);

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
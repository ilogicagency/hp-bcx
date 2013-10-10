(function($) {
    $(document).ready(function() {
        window.app = new App();
    });
})(jQuery);

(function($) {
    function App() {
        if (typeof PBAutoCommands == 'undefined')
            console.log('Unable to find Pandoras Box command: "PBAutoCommands"!');

        this.sections = ['video', 'chaos'];
        this.sectionCurrent = 0;
        this.choices = {
            green1: {seek: '00:00:10:00'},
            green2: {seek: '00:00:20:00'},
            green3: {seek: '00:00:30:00'},
            green4: {seek: '00:00:40:00'},
            green5: {seek: '00:00:50:00'},
            turquoise1: {seek: '00:01:00:00'},
            turquoise2: {seek: '00:01:20:00'},
            turquoise3: {seek: '00:01:30:00'},
            turquoise4: {seek: '00:01:40:00'},
            turquoise5: {seek: '00:01:50:00'},
            red1: {seek: '00:02:10:00'},
            red2: {seek: '00:02:20:00'},
            red3: {seek: '00:02:30:00'},
            red4: {seek: '00:02:40:00'},
            red5: {seek: '00:02:50:00'},
            blue1: {seek: '00:03:10:00'},
            blue2: {seek: '00:03:20:00'},
            blue3: {seek: '00:03:30:00'},
            blue4: {seek: '00:03:40:00'},
            blue5: {seek: '00:03:50:00'}
        }

        this.queue;
        this.chosen;

        this.events();
        this.reset();
    }

    App.prototype = {
        events: function() {
            var scope = this;

            $('.video').on('click', function(e) {
                e.preventDefault();

                $(this).addClass('active');
                $('.video').not(this).removeClass('active');

                var id = $(this).attr('id');
                var choice = id;

                scope.sectionCurrent++;

                var seek = scope.choices[choice].seek;
                var hour = seek.substring(0, 2);
                var min = seek.substring(3, 5);
                var sec = seek.substring(6, 8);
                var frame = seek.substring(9, 11);

                if (typeof PBAutoCommands != 'undefined') {
                    PBAutoCommands.moveSequenceToTime(false, 1, hour, min, sec, frame);
                    PBAutoCommands.setSequenceTransportMode(false, 1, 'Play');
                }

                //$('.container').hide();

                //new Timer(index.delay);

                console.log(' - Chosen: ' + choice);
            });

            /*$('#finished .btn').on('click', function() {
             scope.reset();
             });*/
        },
        selection: function() {
            /*this.queue++;
             
             var selection = this.selections[this.queue].selection;
             var element = $(selection);
             
             if (element.length == 0)
             throw 'Invalid element specified!';
             
             $(this.selections[this.queue].selection).show();
             
             if (typeof PBAutoCommands != 'undefined') {
             PBAutoCommands.setSequenceTransportMode(false, 1, 'Pause');
             }
             
             console.log('Choosing: ' + selection);
             
             if (this.queue != 1) {
             console.log('------------------------');
             console.log('User music: ' + this.chosen.music);
             console.log('------------------------');
             }*/
        },
        reset: function() {
            this.queue = 0;
            this.chosen = {};

            //$('.container').hide();
            $('#sounds').show();

            if (typeof PBAutoCommands != 'undefined') {
                PBAutoCommands.moveSequenceToTime(false, 1, 0, 0, 0, 0);
                PBAutoCommands.setSequenceTransportMode(false, 1, 'Stop');
            }

            //console.log('Choosing: ' + this.selections[this.queue].selection);
        }
    };

    window.App = App;
})(jQuery);

/*
 (function($) {
 function Timer(delay) {
 this.delay = delay;
 
 this.__construct();
 }
 
 Timer.prototype = {
 __construct: function() {
 $.doTimeout(this.delay, function() {
 app.selection();
 });
 }
 };
 
 window.Timer = Timer;
 })(jQuery);*/
(function($) {
	$(document).ready(function() {
		window.app = new App();
	});
})(jQuery);

(function($) {
	function App() {
		if (typeof PBAutoCommands == 'undefined')
			console.log('Unable to find Pandoras Box command: "PBAutoCommands"!');

		this.selections = [
			{selection: '#sounds', seek: {red: '00:00:10:00', blue: '00:00:20:00', green: '00:00:30:00', black: '00:00:40:00', yellow: '00:00:50:00', white: '00:01:00:00'}}
		];
		this.queue;
		this.chosen;

		this.events();
		this.reset();
	}

	App.prototype = {
		events: function() {
			var scope = this;

			$('.sound').on('click', function() {
				var selection = $(this).closest('.container').attr('id');
				var index = scope.selections[scope.queue];
				var seek = index.seek[$(this).attr('id')];
				var hour = seek.substring(0, 2);
				var min = seek.substring(3, 5);
				var sec = seek.substring(6, 8);
				var frame = seek.substring(9, 11);

				if (typeof PBAutoCommands != 'undefined') {
					PBAutoCommands.moveSequenceToTime(false, 1, hour, min, sec, frame);
					PBAutoCommands.setSequenceTransportMode(false, 1, 'Play');
				}

				scope.chosen[selection] = $(this).attr('id');

				//$('.container').hide();

				//new Timer(index.delay);

				console.log(' - Chosen: ' + $(this).attr('id'));
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

			console.log('Choosing: ' + this.selections[this.queue].selection);
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
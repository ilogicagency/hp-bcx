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
			{selection: '#start', delay: 10000, seek: {start: '00:00:00:00'}},
			{selection: '#scenary', delay: 10000, seek: {capeTown: '00:00:20:00', mars: '00:00:40:00'}},
			{selection: '#music', delay: 10000, seek: {classical: '00:01:00:00', rock: '00:01:20:00'}},
			{selection: '#finished', seek: {restart: '00:00:00:00'}}
		];
		this.queue;
		this.chosen;

		this.events();
		this.reset();
	}

	App.prototype = {
		events: function() {
			var scope = this;

			$('.selection').on('click', function() {
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

				scope.chosen[selection] = $(this).text();

				$('.container').hide();

				new Timer(index.delay);

				console.log(' - Chosen: ' + $(this).text());
			});

			$('#finished .btn').on('click', function() {
				scope.reset();
			});
		},
		selection: function() {
			this.queue++;

			var selection = this.selections[this.queue].selection;
			var element = $(selection);

			if (element.length == 0)
				throw 'Invalid element specified!';

			$(this.selections[this.queue].selection).show();

			if (typeof PBAutoCommands != 'undefined') {
				PBAutoCommands.setSequenceTransportMode(false, 1, 'Pause');
			}

			console.log('Choosing: ' + selection);

			if (this.queue == this.selections.length - 1) {
				console.log('------------------------');
				console.log('User scenary: ' + this.chosen.scenary);
				console.log('User music: ' + this.chosen.music);
				console.log('------------------------');
			}
		},
		reset: function() {
			this.queue = 0;
			this.chosen = {};

			$('.container').hide();
			$('#start').show();

			if (typeof PBAutoCommands != 'undefined') {
				PBAutoCommands.moveSequenceToTime(false, 1, 0, 0, 0, 0);
				PBAutoCommands.setSequenceTransportMode(false, 1, 'Stop');
			}

			console.log('Choosing: ' + this.selections[this.queue].selection);
		}
	};

	window.App = App;
})(jQuery);

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
})(jQuery);
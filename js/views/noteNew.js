(function () {
	'use strict';

	APP.NoteNewView = Backbone.View.extend({
		// Events
		// Block the submission of the form, to handle it manually
		events: {
			'click button.save': 'save',
			'keyup input': 'validate',
			'keyup textarea': 'validate'
		},

		template: _.template($('#formTemplate').html()),

		initialize: function (options) {
			this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
		},

		save: function (event) {
			event.stopPropagation();
			event.preventDefault();

			// Update the model with values from the form
			this.model.set({
				title: this.$el.find('input[name=title]').val(),
				author: this.$el.find('input[name=author]').val(),
				description: this.$el.find('textarea[name=description]').val()
			});

			if (this.model.isValid()) {
				// Save the note and add it to the collection
				this.collection.add(this.model);
				this.model.save();
				
				// Return to the index
				Backbone.history.navigate('notes/index', { trigger: true });
			}
		},

		render: function () {
			this.$el.html(
				this.template(this.model.toJSON())
			);
			return this;
		}
	});
}());
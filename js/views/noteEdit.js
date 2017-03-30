(function () {
	'use strict';

	APP.NoteEditView = Backbone.View.extend({
		// Events
		events: {
			'click button.save': 'save'
		},

		// Template for the form
		template: _.template($('#formTemplate').html()),

		initialize: function () {
			this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
			this.model.bind('invalid', this.invalid, this);
		},

		invalid: function () {
			this.$el.find('a.cancel').hide();
		},

		save: function (event) {
			event.stopPropagation();
			event.preventDefault();

			// Update the model with the values from the form
			this.model.set({
				title: this.$el.find('input[name=title]').val(),
				author: this.$el.find('input[name=author]').val(),
				description: this.$el.find('textarea[name=description]').val()
			});

			if (this.model.isValid()) {
				this.model.save();
				
				// Return to the index
				Backbone.history.navigate('notes/index', { trigger: true });
			}
		},

		// Populate the HTML of the note to the DOM
		render: function () {
			this.$el.html(
				this.template(this.model.toJSON())
			);
			return this;
		}
	});
}());
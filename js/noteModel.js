(function () {
	'use strict';

	APP.NoteModel = Backbone.Model.extend({
		// Defaults
		defaults: {
			title: '',
			description: '',
			author: '',
			id: _.random(0, 10000)
		},

		validate: function (attributes) {
			var errors = {};

			if (!attributes.title) {
				errors.title = 'Please give this note a title.';
			}

			if (!attributes.description) {
				errors.description = 'Please give this note a description.';
			}

			if (!attributes.author) {
				errors.author = 'Please give this note an author.';
			}

			if (!_.isEmpty(errors)) {
				return errors;
			}
		}
	});

	APP.NoteCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage('Note Collection'),
		model: APP.NoteModel,
	});
}());
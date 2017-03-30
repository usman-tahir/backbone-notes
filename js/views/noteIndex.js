(function () {
	'use strict';

	APP.NoteIndexView = Backbone.View.extend({
		template: _.template($('#indexTemplate').html()),

		// Populate the HTML of the note to the DOM
		render: function () {
			this.$el.html(
				this.template({ notes: this.collection.toJSON() })
			);
			return this;
		}
	});
}());
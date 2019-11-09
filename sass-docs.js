const sassdoc = require('sassdoc');

sassdoc('./sass', { verbose: true }).then(function () {
	console.log('Your documentation has been generated!');
}, function (err) {
	console.error(err);
});

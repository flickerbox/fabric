const sassdoc = require('sassdoc');

const config = {
	verbose: true,
	dest: './docs',
};

sassdoc('./sass', config).then(function () {
	console.log('Your documentation has been generated!');
}, function (err) {
	console.error(err);
});

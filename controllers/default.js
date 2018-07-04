exports.install = function() {
	F.route('/', view_index);

	F.route('/hello', view_hello);
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}

function view_hello() {
	var self = this;
	self.view('hello');
}
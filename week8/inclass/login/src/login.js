/* Implement Login Object Constructor */
var Login = function() {
	this.users = {};

	this.register = function(username, password) {
		this.users[username] = password;
	}

	this.auth = function(username, password) {
		if(username === "peterwooley") {
			return true;
		} else {
			return false;
		}
	}
}

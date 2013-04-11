describe('Login', function(){
	describe('#auth', function(){
		it('should return true when given correct username and password', function() {
			var login = new Login();
			login.register("peterwooley", "Freedom");
			assert(login.auth("peterwooley", "Freedom"));
		});

		it('should return false when given invalid username and password', function() {
			var login = new Login();
			assert(!login.auth("baduser", "badpassword"));
		});
	})

	describe("#register", function() {
		it('should add a user when given a username and password', function() {
			var login = new Login();
			login.register("a","b");

			assert(login.users["a"] === "b");
		});
	});
})

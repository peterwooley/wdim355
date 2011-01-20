function WebApp(element) {
	var self = this;
	
	this.root = element;
	this.login = new Login(this.root.children('.login'));
	this.dashboard = new Dashboard(this.root.children('.dashboard'));
	
	this.construct = function() {
		this.login.show();
		
		$(this.login).bind('loggedin', this.start);
	}
	
	this.start = function() {
		self.login.hide();
		self.dashboard.show();
	}
	
	this.construct();
}

function Screen(element) {
	var self = this;
	
	this.root = element;
	
	this.hide = function() {
		this.root.hide();
	}
	
	this.show = function() {
		this.root.show();
	}

}

function Login(element) {
	Screen.call(this, element);
	var self = this;
	
	var accounts = new Accounts();

	this.construct = function() {
		this.form = this.root.children('.login_form');
		this.form.submit(this.authenticate);
	}
	
	this.authenticate = function() {
		var username = self.form.children('.login_username').val();
		var password = self.form.children('.login_password').val();
		
		var auth = accounts.authenticate(username, password);
		
		if(auth)
			$(self).trigger('loggedin', [auth]);
		else
			self.error();
		
		return false;
	}
	
	this.error = function() {
		self.form.fadeTo(200, .25).fadeTo(100, 1);
		self.form.children('.login_password').val('').focus();
	}
	
	this.construct();
}
Login.prototype = new Screen;

function Dashboard(element) {
	Screen.call(this, element);
	var self = this;

}
Dashboard.prototype = new Screen;

function Accounts() {
	var users =
		{
			peterwooley: { password:"Freedom", name:"Peter Wooley", admin:true},
			cameronmoll: { password:"aspir3", name:"Cameron Moll", admin:false}
		}
	
	this.authenticate = function(username, password) {
		if(users[username] && users[username].password == password)
			return users[username];
		else
			return false;
	}
}

















function WebApp() {
  var login = new LoginScreen();
  login.show();
}

function LoginScreen() {
  var self = this;
  this.authenticator = new Authenticator();

  this.show = function() {
    this.form = $("<form><input/><input type='password'/><input type='submit'></form>").appendTo('body');
    this.form.submit(this.validate);
  }

  this.validate = function(e) {
    e.preventDefault();
    var username = self.form.find('input:first').val();
    var password = self.form.find('input[type=password]').val();
    var valid = self.authenticator.authenticate(username, password);

    if(valid) {
      self.hide();
      var dashboard = new DashboardScreen();
      dashboard.show();
    }
  }

  this.hide = function() {
    this.form.hide();
  }
}

function DashboardScreen() {
  this.show = function() {
    $("<h1>Dashboard</h1><p>Hey.</p>").appendTo('body');
  }
}

function Authenticator() {
  this.authenticate = function() { return true; }
}











function WebApp() {
    // Generate the Login Screen
    new LoginScreen();
}

function LoginScreen() {
    var self = this;
    // Generate the login form
    this.container = $("<div><h1>Login</h1></div>").appendTo("body");
    this.form = $("<form><input class='username'>" +
        "<input type='password' class='password'>" +
        "<input type='submit'></form>").appendTo(this.container);
    
    this.form.submit(function() {
       var name = $(".username", this.container).val();
       var pass = $(".password", this.container).val();
       
       var auth = new Authenticator();
       
       if(auth.authenticate(name, pass)) {
           alert(self);
           self.container.hide();
           
           new DashboardScreen();
       }

       return false;
    });
    
    // On form submit, authenticate
}

function DashboardScreen() {
    // Generate the Dashboard screen
    $("<div><h1>Dashboard</h1></div>").appendTo("body");
}

function Authenticator() {
    var users = {
        "peter": {password: "Freedom", age: 82},
        "hellokitty": {password: "meow", age: 5}
    };
    
    this.authenticate = function(username, password) {
        if(users[username]) {
            if(users[username].password === password) {
                return true;
            }
        }
        
        return false;
    };
}





















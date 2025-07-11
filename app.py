from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template("home.html")

@app.route('/login')
def login_page():
    return render_template("login.html")

@app.route('/register') 
def register_page():
    return render_template("register.html")

@app.route('/dashboard')
def dashboard_page():
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True, port='3000')
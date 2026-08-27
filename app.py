from flask import Flask, render_template

app = Flask(__name__)


# ==========================================
# LANDING PAGE
# ==========================================

@app.route("/")
def home():
    return render_template("index.html")


# ==========================================
# COURTS / BOOK NOW
# ==========================================

@app.route("/courts")
def courts():
    return render_template("courts.html")


# ==========================================
# RUN APPLICATION
# ==========================================

if __name__ == "__main__":
    app.run(debug=True)
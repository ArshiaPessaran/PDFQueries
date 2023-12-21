from flask import Flask

app = Flask(__name__)


# Members API Route
@app.route("/members")
def members():
    return {"members": ["Ethan Stein", "Member 2", "Member 3", "Member 4", "Member 5"]}


if __name__ == "__main__":
    app.run(debug=True)

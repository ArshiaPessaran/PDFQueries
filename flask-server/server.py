from flask import Flask, request

app = Flask(__name__)


@app.route("/chat/text-input", methods=["POST"])
def text_input():
    data = request.get_json()
    user_input = data["user_input"]

    return {"response": "I read your message: " + user_input}


@app.route("/chat/file-input", methods=["POST"])
def file_input():
    try:
        uploaded_files = request.files.getlist("file")

        file_contents_list = []

        for file in uploaded_files:
            # Read the contents of each file
            file_contents = file.read().decode("utf-8")
            file_contents_list.append(file_contents)

        return {"response": "I've read your files " + str(file_contents_list)}
    except Exception as e:
        return {"response": f"Error reading files: {str(e)}"}


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)   # <-- this line fixes CORS

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # read files
        image = request.files.get("image")
        audio = request.files.get("audio")
        text = request.files.get("text")

        # convert to features (like in your notebook)
        t_feat, i_feat, a_feat = preprocess(image, audio, text)

        with torch.no_grad():
            out = model(t_feat, i_feat, a_feat)
            pred = torch.argmax(out, dim=1).item()

        return jsonify({"prediction": pred})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(port=5000, debug=True)

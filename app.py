import json
import os
from flask import Flask
from flask import request
from flask import render_template
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import SpeechToTextV1


# initialize speech to text service
authenticator = IAMAuthenticator(os.environ['sttkey'])
speech_to_text = SpeechToTextV1(
    authenticator=authenticator
)

app = Flask(__name__)


@app.route("/", methods=['POST', 'GET'])
def index():
    i = 0
    if request.method == "POST":
        f = request.files['audio_data']
        with open(f'audio{i}.webm', 'wb') as audio:
            res = speech_to_text.recognize(audio=f,
                                           content_type="audio/webm; codecs=opus",
                                           model='pt-BR_BroadbandModel',
                                           continuous=True).get_result()
            print(json.dumps(res, indent=2))
            f.save(audio)
            i+=1
            print('file uploaded successfully')
            retorno = res['results'][0]['alternatives'][0]
            print('******************************\n', retorno)
        return json.dumps(retorno)
    else:
        return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)

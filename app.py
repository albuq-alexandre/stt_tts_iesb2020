import json
import os
from flask import Flask
from flask import request
from flask import render_template, send_from_directory
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import SpeechToTextV1, TextToSpeechV1


# initialize speech to text service

authenticator = IAMAuthenticator(os.environ['STTKEY'])
authenticator2 = IAMAuthenticator(os.environ['TTSKEY'])

speech_to_text = SpeechToTextV1(
    authenticator=authenticator
)
tts = TextToSpeechV1(authenticator=authenticator2)

app = Flask(__name__)
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        f = request.files['audio_data']
        res = speech_to_text.recognize(audio=f,
                                       content_type="audio/webm; codecs=opus",
                                       model='pt-BR_BroadbandModel',
                                       continuous=True).get_result()
        print(json.dumps(res, indent=2))
        print('file uploaded successfully')
        retorno = res['results'][0]['alternatives'][0]
        print('******************************\n', retorno)
        return json.dumps(retorno)
    else:
        return render_template("index.html")

@app.route("/text", methods=['POST'])
def text():
    i = 0
    if request.method == "POST":
        content = tts.synthesize(request.values['text'],
                                 voice='pt-BR_IsabelaV3Voice',
                                 accept="audio/webm; codecs=opus")\
                                .get_result().content
    return content

if __name__ == "__main__":
    app.run(debug=True)

# stt_tts_iesb2020
STT &amp; TTS Python school project IBM Cloud

![Badge](https://img.shields.io/badge/license-MIT-green) 
![Badge](https://img.shields.io/badge/python-v3.8-blue)
![Badge](https://img.shields.io/badge/flask-v1.1.2-blue)
![Badge](https://img.shields.io/badge/ibm_watson-v5.2.2-blue)
![Badge](https://img.shields.io/badge/ibm_cloud_sdk_core-v3.10.1-blue)
![Badge](https://img.shields.io/badge/browser-Chrome-red)
[![Heroku App Status](http://heroku-shields.herokuapp.com/stt-tts-iesb2020-acl)](https://stt-tts-iesb2020-acl.herokuapp.com)


Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->


## Disciplina: P8902-IANA-Computação Cognitiva 2 Interface do usuário baseada em voz
### Professor: Rafael Brasileiro de Araujo
### Alunos:
    1. Alexandre de Sousa Albuquerque
    2. Celso de Melo
    3. Juliano Ortigoso Gaspar
    
### Sobre o aplicativo:

   O *IBM Cloud STT/TTS - Interface para processamento de Áudio e Texto*, é constituído pelos seguintes componentes:

• O [Navigator.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia) é um método de captura de mídias e áudios mediante uma solicitação de permissão ao usuário para usar um dispositivo de entrada de vídeo (câmera ou tela compartilhada) e de áudio (microfone) como a fonte de um MediaStream.

•	A [API MediaStream Recording](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder_API) é uma API de gravação MediaStream que torna possível capturar os dados gerados por um objeto MediaStream ou HTMLMediaElement para a análise, o processamento ou o salvamento em disco.

•	O [Watson Speech to Text (STT)](https://www.ibm.com/br-pt/cloud/watson-speech-to-text) é um serviço de cloud que possibilita a realização de transcrição de áudio em aplicativos por meio de uma API. Com o Watson Speech to Text (STT) é possível converter áudio em texto em mais de 15 idiomas incluindo Português, Inglês, Espanhol e Mandarim, que podem ser utilizados em diferentes cenários como em chatbots automatizados com opção de voz, ferramentas de análise para dados de call-centers e transcrições multimídia.

•	O [Watson Text to Speech (TTS)](https://www.ibm.com/br-pt/cloud/watson-text-to-speech) pode sintetizar texto em áudios de diferentes formatos, pode produzir vozes masculinas e femininas em diferentes idiomas e dialetos. Oferece vozes neuronais concatenativas e melhoradas. O potencial do SSML se estende para permitir o controle da entonação da expressão e para proporcionar capacidades de transformação de voz que podem ampliar a gama de vozes, controlando aspectos como o tom, a velocidade e o timbre.

•	O osciloscópio, cortesia da [Sole](http://soledadpenades.com/).

•	Os ícones, cortesia do Find [Icons](http://findicons.com/search/microphone).

###### Instalação local

    pip install -r requirements.txt

##### Run app

    python app.py runserver 0.0.0.0:5000

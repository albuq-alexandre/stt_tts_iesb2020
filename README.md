# stt_tts_iesb2020  
STT &amp; TTS Python/Flask/Js School Project using IBM Cloud  
  
![Badge](https://img.shields.io/badge/license-MIT-green) 
![Badge](https://img.shields.io/badge/python-v3.8-blue) 
![Badge](https://img.shields.io/badge/flask-v1.1.2-blue) 
![Badge](https://img.shields.io/badge/ibm_watson-v5.2.2-blue) 
![Badge](https://img.shields.io/badge/ibm_cloud_sdk_core-v3.10.1-blue) 
![Badge](https://img.shields.io/badge/browser-Chrome-red)  [![Heroku App Status](http://heroku-shields.herokuapp.com/stt-tts-iesb2020-acl)](https://stt-tts-iesb2020-acl.herokuapp.com)  
  
  
  
  
<!--ts-->  Tabela de Conteúdo:
 * [Identificação](#stt_tts_iesb2020)  
 * [Autores](#disciplina)    
 * [Sobre](#Sobre)    
 * [Instalação](#Instalação-local)  
 * [Como Usar](#Como-Usar)  
 * [Requisitos](#pré-requisitos)  
 * [Gravar](#gravar)  
 * [Digitar](#digitar)  
  
 * [Tecnologias](#tecnologias)  
<!--te-->  
  
  
###  Disciplina 

> *P8902-IANA-Computação Cognitiva 2 - Interface do usuário baseada em voz*  
>**Professor**: Rafael Brasileiro de Araujo  
###  Alunos  
>  **Alexandre de Sousa Albuquerque** 
>  **Celso de Melo** 
>  **Juliano Ortigoso Gaspar**

## Sobre  
  
  O *IBM Cloud STT/TTS - Interface para processamento de Áudio e Texto*, é constituído pelos seguintes componentes:  
  
* O [Navigator.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia) é um método de captura de mídias e áudios mediante uma solicitação de permissão ao usuário para usar um dispositivo de entrada de vídeo (câmera ou tela compartilhada) e de áudio (microfone) como a fonte de um MediaStream.  
  
* A [API MediaStream Recording](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder_API) é uma API de gravação MediaStream que torna possível capturar os dados gerados por um objeto MediaStream ou HTMLMediaElement para a análise, o processamento ou o salvamento em disco.  
  
* O [Watson Speech to Text (STT)](https://www.ibm.com/br-pt/cloud/watson-speech-to-text) é um serviço de cloud que possibilita a realização de transcrição de áudio em aplicativos por meio de uma API. Com o Watson Speech to Text (STT) é possível converter áudio em texto em mais de 15 idiomas incluindo Português, Inglês, Espanhol e Mandarim, que podem ser utilizados em diferentes cenários como em chatbots automatizados com opção de voz, ferramentas de análise para dados de call-centers e transcrições multimídia.  
  
* O [Watson Text to Speech (TTS)](https://www.ibm.com/br-pt/cloud/watson-text-to-speech) pode sintetizar texto em áudios de diferentes formatos, pode produzir vozes masculinas e femininas em diferentes idiomas e dialetos. Oferece vozes neuronais concatenativas e melhoradas. O potencial do SSML se estende para permitir o controle da entonação da expressão e para proporcionar capacidades de transformação de voz que podem ampliar a gama de vozes, controlando aspectos como o tom, a velocidade e o timbre.  
* *MDN Web-Dictaphone*,  [by chrisdavidmills](https://github.com/mdn/web-dictaphone).
  
* *Osciloscópio*, cortesia da [Sole](http://soledadpenades.com/).  
  
* *Ícones*, cortesia do [Find Icons](http://findicons.com/search/microphone).  
  
## Instalação local  
  

     pip install -r requirements.txt  

## Run app  
  

     python app.py runserver 0.0.0.0:5000  

## Como Usar  
O aplicativo está disponível no seguinte endereço:  
  

> [IBM Cloud STT/TTS - Interface para processamento de Áudio e Texto](https://stt-tts-iesb2020-acl.herokuapp.com/)

  
### Pré-requisitos  

> Será solicitado a permissão para uso do microfone. Selecione PERMITIR para usar o app.

  
### Gravar  

>  1. Use o botão "Gravar" para iniciar a captura do áudio do microfone. “Converter em Texto ou Voz” executará as conversões para texto ou voz
> conforme as opções “Gravar” ou “Digitar” tiverem sido selecionadas;
>  2. Clique no botão "Parar a Gravação" para encerrar a captura de áudio;   
>  3. Selecione um nome para o áudio gravado. Clique no botão Ok para continuar;
>  4. Clique no botão Transcrever abaixo do controle do áudio pra usar a função STT. O Áudio convertido em texto deve aparecer após alguns
> segundos no campo "Resposta IBM Cloud";
>  5.  Ouça o áudio para disponibilizar menu download;

  
### Digitar  

>  1. Clique no botão "Digitar" para que uma caixa de texto apareça na tela;
>  2. Digite nessa caixa o texto que deseja converter em voz; 
>  3. Clique no botão "Converter em voz" para obter o áudio;
>  4. Ouça o novo áudio que apareceu na tela para habilitar o menu download.

### Botão ?

>  1. Clique no botão "?" no canto superior direito para ler "Sobre" o aplicativo.

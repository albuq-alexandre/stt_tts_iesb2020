# stt_tts_iesb2020
STT &amp; TTS Python school project IBM Cloud

## Disciplina: P8902-IANA-Computação Cognitiva 2 Interface do usuário baseada em voz
### Professor: Rafael Brasileiro de Araujo
### Alunos:
    1. Fábio Tranzillo Nogueira
    2. Guilherme Augusto das Chagas Praser
    3. Marcelo Caldeira Pereira
### Sobre o aplicativo (Text-to-speech and speech-to-text converter):
    Foi desenvolvido um aplcativo contendo 03 funções básicas, conforme seguem:

    1. Conversão de texto para fala: Nesse caso é necessário informar o autenticador IBM watson para realizar a gera-
       ção do audio. Caso não seja informado um TEXTO, será gerado um aúdio com o texto padrão (Texto não informado).
       Todo audio gerado posuirá o nome "audio.wav" e será gravado na pasta de instalação da aplicação.
       O PLAY do audio gerado será iniciado no momento da sua geração, caso seja assinalado o "check: Play Audio".
       O "check: Play Audio" é opcional.

    2. Conversão de fala para texto: Nesse caso é necessário informar o autenticador IBM watson para START de captura
    de voz. É opcional o assinalamento do "check: Verbose Processing", caso o mesmo seja assinalado  o  processamento
    irá apresentar resultados itermediários, caso contrário, somete apresentará o resultado final. Enquanto  não  for
    realizado STOP o canal para captura de voz estará aberto, sendo possível a utilização de qualquer outra  funciona-
    lidade em paralelo.

    3. Tocador de audio (wav): Nesse caso será solicitado a identificação do arquivo de audio, por meio de navegador
    (BROWSE) apresentado na própria aplicação. Após a identificação, sua reprodução será executada após o  click  no
    botão OK.

    OBS: Em toda aplicação é apresentada uma SYSOUT demonstrando toda execução que vislubramos como importante nesse
    momento de apredizado.

###### Dicas para instalação do PyAudio

    1. Encontrar a versão do Python e verificar o se o mesmo é 64 ou 32:
        1.1 python --version ou
        1.2 python
    2. encontre o arquivo .whl apropriado. Pesquisar em: https://www.lfd.uci.edu/~gohlke/pythonlibs/#pyaudio
        OBS: No meu caso foi o: PyAudio-0.2.11-cp38-cp38-win_amd64.whl
    3. Exutar arquivo localizado no item 2: pip install PyAudio-0.2.11-cp38-cp38-win_amd64.whl 
    4. Executar:
        pip install pipwin
        pipwin install pyaudio

###### Outras instalações necessárias:
    1. !pip install pysimplegui
    2. !pip install simpleaudio
    3. !pip install ibm_watson

    OBS: Caso ocorra erro no ubunto na instalação do simpleaudio, excutar o seguinte comando:
        sudo apt-get install libasound2-dev

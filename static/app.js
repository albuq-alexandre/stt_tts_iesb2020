// set up basic variables for app

const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const texting = document.querySelector('.texting');
const soundClips = document.querySelector('.sound-clips');
const canvas = document.querySelector('.visualizer');
const mainSection = document.querySelector('.main-controls');
const textingTXT = document.querySelector('textingTXT');
const txtDiv = document.querySelector('.textingDiv');
var tipo;
// disable stop button while not recording

stop.disabled = true;
document.getElementById('textingDiv').style.display = 'none';
// visualiser setup - create web audio api context and canvas

let audioCtx;
const canvasCtx = canvas.getContext("2d");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');

  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      tipo = 'voice';
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    }

    texting.onclick = function() {
      tipo = 'texto';
      console.log("texting started");
      texting.style.background = "red";
      stop.disabled = false;
      record.disabled = true;
      document.getElementById('textingDiv').style.display = 'block';
    }

    stop.onclick = function() {
      if(tipo == 'voice'){
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          record.style.background = "";
          record.style.color = "";
          }
          else
           {
              console.log("TTS iniciado");
              record.style.background = "";
              record.style.color = "";

              if(document.getElementById("textingTXT").value.trim() == ''){
                    alert("O texto para conversão em voz está vazio. Preencha o campo com algumas palavras.");
                  }else{
                        var xhr=new XMLHttpRequest();
                        xhr.open("POST","/text",true);
                        xhr.responseType = 'blob';
                        xhr.onload = function(evt) {
                              const clipContainer = document.createElement('article');
                              const clipLabel = document.createElement('p');
                              const audio = document.createElement('audio');
                              const deleteButton = document.createElement('button');
                              clipContainer.classList.add('clip');
                              audio.setAttribute('controls', '');
                              deleteButton.textContent = 'Delete';
                              deleteButton.className = 'delete';
                              clipLabel.textContent = 'Resposta de Voz';
                              clipContainer.appendChild(audio);
                              clipContainer.appendChild(clipLabel);
                              clipContainer.appendChild(deleteButton);
                              soundClips.appendChild(clipContainer);
                              audio.controls = true;
                              var blob = new Blob([xhr.response], {type: 'audio/webm; codecs=opus'});
                              var objectUrl = URL.createObjectURL(blob);
                              audio.src = objectUrl;
                              // Release resource when it's loaded
                              audio.onload = function(evt) {
                                URL.revokeObjectURL(objectUrl);
                              };
                              deleteButton.onclick = function(e) {
                                                        let evtTgt = e.target;
                                                        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
                              }
                             stop.disabled = true;
                             record.disabled = false;
                             console.log("TTS finalizado");
                            };
                        var fd=new FormData();
                        fd.append("text", document.getElementById("textingTXT").value.trim());
                        xhr.send(fd);
                  }
           }

      }
      // mediaRecorder.requestData();
      stop.disabled = true;
      record.disabled = false;

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      const clipName = prompt('Entre com o nome da gravação:','Gravação 1');
      const filename = clipName.concat('.oga')

      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');
      const sttButton = document.createElement('button');
      const divNova = document.createElement("div");
      const transcript = document.createElement('p');
      const confidence = document.createElement('p');


      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      sttButton.textContent = 'Transcrever';
      sttButton.className = 'stt';
      if(clipName === null) {
        clipLabel.textContent = 'Gravacao 1';
      } else {
        clipLabel.textContent = clipName;
      }

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(sttButton);
      clipContainer.appendChild(deleteButton);
      clipContainer.appendChild(divNova);
      divNova.appendChild(document.createTextNode("Resposta IBM Cloud:"));
      divNova.appendChild(document.createElement('br'));
      document.createElement('br')
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      const blob = new Blob(chunks, { 'type' : "audio/webm; codecs=opus" });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
      sttButton.onclick = function(e) {
         var xhr=new XMLHttpRequest();
          xhr.onload=function(e) {
              if(this.readyState === 4) {
                  console.log("Server returned: ",e.target.responseText);
                  const obj = JSON.parse(e.target.responseText);
                  console.log(obj.transcript)
                  console.log(obj.confidence)
                  var linebreak = document.createElement('br');
                  divNova.appendChild(linebreak);
                  divNova.appendChild(transcript);
                  transcript.appendChild(document.createTextNode(`Transcrição: ${obj.transcript}`));
                  divNova.appendChild(linebreak);
                  divNova.appendChild(confidence);
                  confidence.appendChild(document.createTextNode(`Confiança: ${obj.confidence}`));
              }
          };
          var fd=new FormData();
          fd.append("audio_data",blob, filename);
          xhr.open("POST","/",true);
          xhr.send(fd);

      }

      clipLabel.onclick = function() {
        const existingName = clipLabel.textContent;
        const newClipName = prompt('Digite um novo nome para a Gravação:');
        if(newClipName === null) {
          clipLabel.textContent = existingName;
        } else {
          clipLabel.textContent = newClipName;
        }
      }
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  }

  let onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
   console.log('getUserMedia not supported on your browser!');
}

function visualize(stream) {
  if(!audioCtx) {
    audioCtx = new AudioContext();
  }

  const source = audioCtx.createMediaStreamSource(stream);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  //analyser.connect(audioCtx.destination);

  draw()

  function draw() {
    const WIDTH = canvas.width
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    let sliceWidth = WIDTH * 1.0 / bufferLength;
    let x = 0;


    for(let i = 0; i < bufferLength; i++) {

      let v = dataArray[i] / 128.0;
      let y = v * HEIGHT/2;

      if(i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();

  }
}

window.onresize = function() {
  canvas.width = mainSection.offsetWidth;
}

String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g,"");
}

window.onresize();

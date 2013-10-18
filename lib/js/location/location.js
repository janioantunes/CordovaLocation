//Aguarda pelo carregamento do Cordova
document.addEventListener("deviceready", onDeviceReady, false);
var watchID = null;

//Cordova esta pronto
function onDeviceReady() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	//Jogar um erro se nenhuma atualização for recebida em 30 segundos
	var options = { timeout: 30000 };
	watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

//Geolocalização com sucesso
function onSuccess(position) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />' +
						'Altitude: '           + position.coords.altitude              + '<br />' +
						'Precisão: '           + position.coords.accuracy              + '<br />' +
						'Precisão da Altitude:'+ position.coords.altitudeAccuracy      + '<br />' +
						'Direção: '            + position.coords.heading               + '<br />' +
						'Velocidade: '         + position.coords.speed                 + '<br />' +
						'Data/Hora: '          + position.timestamp                    + '<br />';
}

//Chamada de erro recebe um objeto de erro de posicionamento
function onError(error) {
	alert(	'Código:'     + error.code    + '\n' +
			'Menssagem:'  + error.message + '\n');
}

function clearWatch() {
	if(watchID != null) {
		navigator.geolocation.clearWatch(watchID);
		watchID = null;
	}
}
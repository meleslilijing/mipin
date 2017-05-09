import api from './api.js';
import location from './location.js';

export const Api = api;
export const Location = location;

window.BasicInterface = {
	userId: 'test-userid',
	imei: 'test-imei',
	appVersion: 'test-appVersion',
	channel: 'test-channel',
	language: 'test-language'
}

window.NativeInterface = Object.assign(BasicInterface, {
	phoneNumber: '12345678901'
	// raterNumber: 'raterNumber',
 //    rateeNumber: 'rateeNumber',
 //    rateeName: 'rateeName'
})

export default {
	Api,
	Location
}

import exec from 'k6/execution';

// 1. init code
const msg = function () {
	console.info(`hello init...`)
}();

export function setup() {
	// 2. setup code
	console.info(`hello setup with vu-${exec.vu.idInTest}...`)
	return 1;
}

export default function (data) {
	// 3. VU code	
	data += data
	console.info(`hello VU code with vu-${exec.vu.idInTest}...`)
	return data;
}

export function teardown(data) {
	// 4. teardown code
	data += data
	console.info(`hello teardown with vu-${exec.vu.idInTest}...`)
}
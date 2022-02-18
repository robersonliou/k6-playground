import exec from 'k6/execution';

// 1. init code
const msg = function () {
	console.warn(`hello init...`)
}();

export function setup() {
	// 2. setup code
	console.info(`hello setup with vu-${exec.vu.idInTest}...`)
}

export default function () {
	// 3. VU code
	console.info(`hello VU code with vu-${exec.vu.idInTest}...`)
}

export function teardown() {
	// 4. teardown code	
	console.info(`hello teardown with vu-${exec.vu.idInTest}...`)
}

export function handleSummary(data) {
	console.info(`hello heandleSummary with vu-${exec.vu.idInTest}...`)
}
import http from 'k6/http';

export const options = {
	discardResponseBodies: true,
	scenarios: {
		contacts: {
			executor: 'shared-iterations',
			vus: 10,
			iterations: 100,
			maxDuration: '10s',
		},
	},
};

export default function () {
	http.get('https://google.com');
}
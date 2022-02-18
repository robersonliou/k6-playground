import http from 'k6/http';

export const options = {
	discardResponseBodies: true,
	scenarios: {
		contacts: {
			executor: 'constant-arrival-rate',
			rate: 500,
			duration: '10s',
			preAllocatedVUs: 500,
			maxVUs: 600,
		},
	},
};

export default function () {
	http.get('https://google.com');
}
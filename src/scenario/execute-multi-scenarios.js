import http from 'k6/http';

export const options = {
	scenarios: {
		example_scenario: {
			executor: 'shared-iterations',
			startTime: '0s'
		},
		another_scenario: {
			executor: 'shared-iterations',
			startTime: '5s'
		},
	},
};

export default function () {
	http.get('https://google.com/');
}
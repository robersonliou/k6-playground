import http from 'k6/http';
import { group, sleep } from 'k6';

export default function () {

	// exist group_duration metric aggregate issue.
	// https://github.com/grafana/k6/issues/2309
	group('twMVC44', function () {
		group('k6', function () {
			http.get('https://test.k6.io');
		});

		group('google', function () {
			http.get('https://google.com');
		});
	});

	sleep(1);
}
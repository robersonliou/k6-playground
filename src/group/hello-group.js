import http from 'k6/http';
import { group, sleep } from 'k6';

export default function () {

	group('twMVC44', function () {
		http.get('https://test.k6.io');
	});
	sleep(1);
}
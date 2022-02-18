import http from 'k6/http';

export default function () {
	for (let id = 1; id <= 10; id++) {
		http.get(`http://test.k6.io?id=${id}`, {
			tags: { name: 'k6-id-query' }
		});
	}
}
// tags.name="k6-id-query"
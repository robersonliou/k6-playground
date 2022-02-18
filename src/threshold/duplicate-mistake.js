export let options = {
	thresholds: {
		// 若針對同個 metric 重複套用不同的 threshold
		// 會發生「後蓋前」的狀況
		http_req_duration: ['p(90) < 400'],
		http_req_duration: ['p(95) < 800'],
	}
};
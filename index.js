var seeditTracker = {};

// 百度统计添加
// Tracker.baidu.add('86b18e74389b9186f2583902edce4ed9');
seeditTracker.baidu = {
	add: function(id) {
		window._hmt = window._hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "http://hm.baidu.com/hm.js?" + id;
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	}
};

module.exports = seeditTracker;
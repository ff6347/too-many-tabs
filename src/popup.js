document.addEventListener("DOMContentLoaded", function () {
	let ele = document.getElementById("headline");
	browser.storage.sync.get("message", function (data) {
		// console.log(data);
		ele.innerText = data.message;
	});
});

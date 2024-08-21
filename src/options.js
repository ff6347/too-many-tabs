document.addEventListener("DOMContentLoaded", function () {
	const input = document.querySelector("#max-value");
	browser.storage.sync.get("tmtabs", function (data) {
		//console.log(data);
		input.value = data.tmtabs;
	});

	input.onkeydown = function (event) {
		//console.log(event);
		if (event.keyCode == 13) {
			set();
		}
	};
	input.onchange = set;
});

function set() {
	browser.storage.sync.set(
		{
			tmtabs: document.querySelector("#max-value").value,
		},
		function () {
			//console.log(`The default tmtabs value is ${document.querySelector('#max-value').value}`);
		},
	);
}

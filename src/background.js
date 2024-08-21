browser.runtime.onInstalled.addListener(function () {
	browser.storage.sync.get("tmtabs", function (data) {
		if (typeof data.tmtabs === "undefined") {
			browser.storage.sync.set({ tmtabs: 9 }, function () {
				console.log(`The default tmtabs value is set to 9`);
			});
		} else {
			console.log(`Existing tmtabs value: ${data.tmtabs}`);
		}
	});
});

// let tmtabs = null;
// let numTabs = 0;
// let numWindows = 0;

browser.runtime.onStartup.addListener(() => {
	// console.log("startup");
});

browser.windows.onCreated.addListener(function () {
	// numWindows++;
	// console.log('fired windows created');
	// countTabsAndWindows();
});
browser.tabs.onRemoved.addListener(function () {
	// console.log('fired remove tabs');
	countTabsAndWindows();
	// numOfTabs--;
});

browser.tabs.onCreated.addListener(() => {
	// console.log('fired tabs created');
	countTabsAndWindows();
});

function countTabsAndWindows() {
	browser.windows.getAll(
		{ populate: true, windowTypes: ["normal"] },
		(windows) => {
			// numWindows = windows.length;
			let numTabs = 0;
			windows.forEach((win) => {
				numTabs += win.tabs.length;
			});
			// // console.log(`numWindows ${numWindows}`);
			// // console.log(`number of tabs ${numTabs}`);
			browser.storage.sync.get("tmtabs", function (data) {
				// console.log(data);
				if (numTabs > data.tmtabs) {
					let msg = `${numTabs} is ${numTabs - data.tmtabs} tooo many!`;
					let options = {
						type: "basic",
						title: "to many tabs",
						message: msg,
						iconUrl: "icon128.png",
					};
					browser.notifications.create(options, function () {});

					browser.storage.sync.set({ message: msg }, function () {});
				} else {
					browser.storage.sync.set(
						{
							message: `Such a self control!\nOnly ${numTabs} tabs. You rock! 🤘🏽`,
						},
						function () {},
					);
				}
			});
		},
	);
}

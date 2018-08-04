chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({tmtabs: 9}, function() {
    console.log(`The default tmtabs value is ${9}`);
  });
});

// let tmtabs = null;
// let numTabs = 0;
// let numWindows = 0;

chrome.runtime.onStartup.addListener(() => {
  console.log('startup');
});

chrome.windows.onCreated.addListener(function () {
  // numWindows++;
  console.log('fired windows created');
  // countTabsAndWindows();
});
chrome.tabs.onRemoved.addListener(function (){
  console.log('fired remove tabs');
  countTabsAndWindows();
  // numOfTabs--;
});

chrome.tabs.onCreated.addListener(() => {
  console.log('fired tabs created');
  countTabsAndWindows();
});

function countTabsAndWindows() {
  chrome.windows.getAll({ populate: true, windowTypes: ['normal'] }, windows => {
    // numWindows = windows.length;
    let numTabs = 0;
    windows.forEach(win => {
      console.log(win.session)
      numTabs += win.tabs.length;
    });
    // console.log(`numWindows ${numWindows}`);
    // console.log(`number of tabs ${numTabs}`);
    chrome.storage.sync.get('tmtabs', function(data) {
      console.log(data);
      if (numTabs > data.tmtabs) {
        let msg = `${numTabs} is ${numTabs - data.tmtabs} tooo many!`;
        let options = {
          type:'basic',
          title:'to many tabs',
          message: msg,
          iconUrl:'icon128.png'
        };
        chrome.notifications.create(options, function (){});

        chrome.storage.sync.set({message: msg}, function() {
        });
      } else {
        chrome.storage.sync.set({message: `Such a self control!<br>Only ${numTabs} tabs. You rock! 🤘🏽`}, function() {
        });
      }
    });
  });
}


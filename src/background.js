// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
const tmtabs = 6;
let numTabs = 0;
let numWindows = 0;

chrome.runtime.onStartup.addListener(() => {
  console.log('startup');
});

chrome.windows.onCreated.addListener(function () {
  // numWindows++;
  console.log('fired windows created');
  // countTabsAndWindows();
});

chrome.tabs.onCreated.addListener(function () {
  console.log('fired tabs created');
  countTabsAndWindows();
});

function countTabsAndWindows() {
  chrome.windows.getAll({ populate: true, windowTypes: ['normal'] }, windows => {
    numWindows = windows.length;
    numTabs = 0;
    windows.forEach(win => {
      
      numTabs += win.tabs.length;
    });
    console.log(`numWindows ${numWindows}`);
    console.log(`number of tabs ${numTabs}`);
    if (numTabs > tmtabs) {
      //   chrome.notifications.create(options, function (){});
      // }
    }
  });
}
// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({tmtabs: tmtabs}, function() {
//     console.log(`The default tmtabs value is ${tmtabs}`);
//   });
//   let numOfTabs = 1;
//   let options = {type:'basic', title:'to many tabs', message:'tooo many',iconUrl:'icon.png'};
//   chrome.tabs.onRemoved.addListener(function (){
//     numOfTabs--;
//     console.log(`removed tab ${numOfTabs}`);
//   });

// });
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
const tmtabs = 6;
let numTabs = 0;

chrome.windows.onCreated.addListener(function(){
  numTabs++;
  console.log(numTabs);
});

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({tmtabs: tmtabs}, function() {
//     console.log(`The default tmtabs value is ${tmtabs}`);
//   });
//   let numOfTabs = 1;
//   let options = {type:'basic', title:'to many tabs', message:'tooo many',iconUrl:'icon.png'};
//   chrome.tabs.onCreated.addListener(function(){
//     numOfTabs++;
//     console.log(`new tab ${numOfTabs}`);
//     if(numOfTabs > tmtabs ){

//       chrome.notifications.create(options, function (){});
//     }
//   });
//   chrome.tabs.onRemoved.addListener(function (){
//     numOfTabs--;
//     console.log(`removed tab ${numOfTabs}`);
//   });

// });
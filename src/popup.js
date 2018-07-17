document.addEventListener('DOMContentLoaded', function () {
  let ele = document.getElementById('headline');
  chrome.tabs.getAllInWindow(function (tabs) {
    // ele.innerHTML = tabs.length;
    if(tabs.length>9){
      ele.innerHTML = `You have to many tabs!`;
    }else{
      ele.innerHTML = `You have ${tabs.length} tabs`;
    }
    // console.log(tabs.length);
  });
});
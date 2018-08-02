document.addEventListener('DOMContentLoaded', function () {
  let ele = document.getElementById('headline');
  chrome.storage.sync.get('message', function(data) {
    ele.innerHTML = data.message;

  });
});

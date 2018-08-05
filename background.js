console.log("background script.js started");

console.log(chrome)

chrome.runtime.onInstalled.addListener(function() {
    var id = '';
    chrome.tabs.query({url: 'http://localhost:8080/'}, function(tabs) {
        id = tabs[0].id;
        let customEvent = new CustomEvent("oneInstalled", { detail: "first one installed dude"})
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: 'installFile.js' });
        console.log(id)
        chrome.tabs.get(id, function(tab) {
            chrome.tabs.highlight({'tabs': tab.index}, function() {});
        });
      });
      
  });
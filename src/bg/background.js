// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

let testObj;

function findingTheAnswer(request, sender, sendResponse){
  let testObj = {message: "I am the OBJECT!"}
  return testObj;
}

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    //console.log("I am the tab" + sender.tab.url);
    findingTheAnswer(request, sender, sendResponse)
    chrome.pageAction.show(sender.tab.id);
    console.log(testObj.message)
    sendResponse(testObj);
    return true;
    }
  );



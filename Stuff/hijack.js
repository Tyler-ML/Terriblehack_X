chrome.webNavigation.onBeforeNavigate.addListener(
  function(callback){
  console.log(callback.url);

});

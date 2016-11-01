function openUrl(e) {
	var name = document.getElementById('char_name').value;
	var tibiaUrl = "http://www.tibia.com/community/?subtopic=characters&name=" + name;
	
	chrome.tabs.update({ url: tibiaUrl });
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', openUrl);
  document.getElementById("char_name").focus();
});
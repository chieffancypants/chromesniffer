/**
 * Chrome AppSniffer by Chieffancypants (forked from Bao Nguyen)
 *
 * Project : https://github.com/chieffancypants/chromesniffer
 * Issues  : https://github.com/chieffancypants/chromesniffer/issues
 *
 * @author chieffancypants <chieffancypants@gmail.com>
 * @license GPLv3
 *
 */

var bg = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null, function (tab) {
	// Request the applications from the background page:
	chrome.extension.sendMessage({msg: "get", tab: tab.id}, function (response) {
		console.log(response);
		var display = document.getElementById('app_list');
		var apps = response.apps;
		var html = '';
		var appinfo = bg.appinfo;
		var count = 0;

		var table = document.getElementById('app-table');

		for (var appid in apps) {
			app = appinfo[appid] ? appinfo[appid] : {};

			// i'm lazy to fill all kind of the information :(
			if (!app.title) app.title = appid;
			if (!app.url) app.url = appinfo[''].url.replace('%s',appid); // it's google one
			if (!app.icon) app.icon = appinfo[''].icon;

			if (apps[appid] != "-1") {
				app.title = appid + ' ' + apps[appid];
			}

			var tr = document.createElement('tr');

			// Create the icon:
			var tdIcon = document.createElement('td');
			var link = document.createElement('a');
			var icon = document.createElement('img');

			link.target = "_blank";
			link.title = app.title;
			link.href = app.url;

			icon.alt = app.title;
			icon.width = 16;
			icon.height = 16;
			icon.src = "apps/" + app.icon;

			link.appendChild(icon);
			tdIcon.appendChild(link);

			// Attach the App Name / info
			var tdName = document.createElement('td');
			tdName.textContent = app.title;

			// put it all together:
			tr.appendChild(tdIcon);
			tr.appendChild(tdName);
			table.appendChild(tr);

			count++;
		}


	});
});

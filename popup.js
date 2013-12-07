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

angular.module('chromesniffer', [])
	.config(function ($compileProvider) {
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image/);
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|chrome-extension):/);
	})

	.controller('popup', function($scope) {
		$scope.assface = 'hi';
		getApps(function(err, apps) {
			$scope.apps = apps;
			$scope.$apply();
		});
	})

	.filter('categoryName', function() {
		return function(name) {
			switch (name) {
				case 'cms':
					return 'CMS';
					break;
				case 'framework':
					return 'Frameworks';
					break;
				case 'ecommerce':
					return 'E-Commerce';
					break;
				default:
					return name.charAt(0).toUpperCase() + name.slice(1);
					break;
			}
		}
	});




function getApps(cb) {
	var bg = chrome.extension.getBackgroundPage();
	var categories = {};
	chrome.tabs.getSelected(null, function (tab) {
		// Request the applications from the background page:
		chrome.extension.sendMessage({msg: "get", tab: tab.id}, function (response) {
			var display = document.getElementById('app_list');
			var apps = response.apps;
			var html = '';
			var appinfo = bg.appinfo;
			var count = 0;

			// categorize the apps:
			for (var appName in apps) {
				app = appinfo[appName] ? appinfo[appName] : {};
				app.title = app.title || appName;
				app.categories.forEach(function(category) {
					categories[category] = categories[category] || [];
					categories[category].push(app);
				});
			}

			cb(null, categories);

		});
	});
}



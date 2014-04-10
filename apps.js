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

/*
 * categories:
 *  - Hosting
 *  - Framework
 *  - Infrustructure
 *  - CMS
 *  - Marketing
 *  - Blogging
 *  - E-commerce
 *  - Social
 */

var appinfo = {
	// ==== services ====
	'Squarespace': {
		icon: 'squarespace.ico',
		url: 'http://squarespace.com',
		categories: ['hosting', 'cms']
	},
	'Tumblr': {
		icon: 'Tumblr.ico',
		url: 'http://tumblr.com',
		categories: ['hosting', 'blogging']
	},
	'TypePad': {
		icon: 'TypePad.ico',
		url: 'http://typepad.com',
		categories: ['hosting', 'blogging']
	},
	'Blogger': {
		icon: 'Blogger.ico',
		url: 'http://blogger.com',
		categories: ['hosting', 'blogging']
	},

	'Webs': {
		icon: 'webs.ico',
		url: 'http://www.webs.com/',
		categories: ['hosting', 'cms']
	},
	'Weebly': {
		icon: 'weebly.ico',
		url: 'http://www.weebly.com/',
		categories: ['hosting', 'cms']
	},
	'Webnode': {
		icon: 'webnode.ico',
		url: 'http://www.webnode.com/',
		categories: ['hosting', 'cms']
	},
	'Jimdo': {
		icon: 'jimdo.ico',
		url: 'http://www.jimdo.com',
		categories: ['hosting', 'cms']
	},
	'Jigsy': {
		icon: 'jigsy.ico',
		url: 'http://jigsy.com',
		categories: ['hosting', 'cms']
	},
	'Yola': {
		icon: 'yola.ico',
		url: 'http://www.yola.com/',
		categories: ['hosting', 'cms']
	},

	// ==== bulletin boards ====
	'vBulletin': {
		icon: 'vBulletin.ico',
		url: 'http://www.vbulletin.com/',
		categories: ['hosting']
	},
	'SMF': {
		title: 'Simple Machines Forum',
		icon: 'SMF.ico',
		url: 'http://www.simplemachines.org/',
		categories: ['hosting']
	},
	'phpBB': {
		icon: 'phpBB.ico',
		url: 'http://www.phpbb.com',
		categories: ['hosting']
	},
	'IPB': {
		title: 'Invision Power Board',
		icon: 'IPB.ico',
		url: 'http://invisionpower.com/',
		categories: ['hosting', 'cms', 'ecommerce']
	},
	'miniBB': {
		icon: 'miniBB.ico',
		url: 'http://www.minibb.com/',
		categories: ['hosting']
	},
	'MyBB': {
		icon: 'mybb.ico',
		url: 'http://www.mybb.com/',
		categories: ['hosting']
	},
	'XenForo': {
		icon: 'xenforo.ico',
		url: 'http://xenforo.com',
		categories: ['hosting']
	},


	// ==== CMS ====

	'Drupal': {
		icon: 'Drupal.ico',
		url: 'http://drupal.org',
		categories: ['cms']
	},
	'Ubercart': {
		icon: 'Ubercart.ico',
		url: 'http://www.ubercart.org/',
		categories: ['ecommerce']
	},
	'WordPress': {
		icon: 'WordPress.ico',
		url: 'http://wordpress.org',
		categories: ['hosting', 'cms']
	},
	'bbPress': {
		icon: 'bbPress.ico',
		url: 'http://bbpress.org',
		categories: ['forum']
	},
	'Movable Type': {
		icon: 'MovableType.ico',
		url: 'http://www.movabletype.org/',
		categories: ['cms']
	},
	'Serendipity': {
		icon: 'Serendipity.png',
		url: 'http://www.s9y.org/',
		categories: ['blogging', 'cms']
	},
	'concrete5': {
		icon: 'concrete5.gif',
		url: 'http://www.concrete5.org',
		categories: ['cms']
	},
	'OpenACS': {
		icon: 'openacs.ico',
		url: 'http://openacs.org',
		categories: ['cms']
	},
	'Joomla': {
		icon: 'Joomla.ico',
		url: 'http://joomla.org',
		categories: ['cms']
	},
	'Magento': {
		icon: 'Magento.ico',
		url: 'http://www.magentocommerce.com/',
		categories: ['ecommerce', 'cms', 'hosting']
	},
	'XOOPS': {
		icon: 'XOOPS.ico',
		url: 'http://xoops.org',
		categories: ['cms']
	},
	'Plone': {
		icon: 'Plone.ico',
		url: 'http://plone.org/',
		categories: ['cms']
	},
	'CMSMadeSimple': {
		title: 'CMS Made Simple',
		icon: 'CMSMadeSimple.ico',
		url: 'http://www.cmsmadesimple.org/',
		categories: ['cms']
	},
	'SilverStripe': {
		icon: 'SilverStripe.png',
		url: 'http://silverstripe.org',
		categories: ['cms']
	},
	'MODx': {
		icon: 'MODx.ico',
		url: 'http://modxcms.com/',
		categories: ['cms']
	},
	'Amiro.CMS': {
		icon: 'Amiro.CMS.ico',
		url: 'http://www.amirocms.com/',
		categories: ['cms']
	},
	'JaliosJCMS': {
		icon: 'JaliosJCMS.ico',
		url: 'http://www.jalios.com',
		title: 'Jalios JCMS',
		categories: ['cms']
	},
	'Koobi': {
		icon: 'Koobi.ico',
		url: 'http://www.dream4.de/',
		categories: ['cms']
	},
	'Liferay': {
		icon: 'LifeRay.ico',
		url: 'http://www.liferay.com',
		categories: ['cms']
	},
	'TYPO3': {
		icon: 'TYPO3.ico',
		url: 'http://typo3.org/',
		categories: ['cms']
	},
	'Contao': {
		icon: 'contao.ico',
		url: 'http://www.contao.org',
		categories: ['cms']
	},
	'Fatwire': {
		icon: 'Fatwire.ico',
		url: 'http://www.fatwire.com',
		categories: ['cms']
	},
	'PHP-Fusion': {
		icon: 'PHP-Fusion.ico',
		url: 'http://php-fusion.co.uk/',
		categories: ['cms']
	},
	'PHP-Nuke': {
		icon: 'PHP-Nuke.ico',
		url: 'http://phpnuke.org/',
		categories: ['cms']
	},
	'WebGUI': {
		icon: 'WebGUI.ico',
		url: 'http://www.webgui.org/',
		categories: ['cms']
	},
	'BIGACE': {
		icon: 'BIGACE.ico',
		url: 'http://www.bigace.de/',
		categories: ['cms']
	},
	'OpenCMS': {
		icon: 'opencms.ico',
		url: 'http://www.opencms.org/',
		categories: ['cms']
	},
	'1c-bitrix': {
		icon: '1c-bitrix.ico',
		url: 'http://www.1c-bitrix.ru/',
		categories: ['cms']
	},
	'MojoMotor': {
		icon: 'mojomotor.ico',
		url: '	http://mojomotor.com',
		categories: ['cms']
	},
	'GetSimple': {
		icon: 'getsimple.png',
		url: '	http://get-simple.info/',
		categories: ['cms']
	},
	'DataLifeEngine': {
		title: 'DataLife Engine',
		icon: 'datalife.ico',
		url: 'http://dle-news.ru/',
		categories: ['cms']
	},
	'DotNetNuke': {
		icon: 'DotNetNuke.ico',
		url: 'http://www.dotnetnuke.com/',
		categories: ['cms']
	},
	'Sitefinity': {
		icon: 'Sitefinity.ico',
		url: 'http://www.sitefinity.com/',
		categories: ['cms', 'ecommerce']
	},
	'ZenPhoto': {
		icon: 'ZenPhoto.ico',
		url: 'http://www.zenphoto.org',
		categories: ['cms']
	},
	'Avactis': {
		icon: 'avactis.ico',
		url: 'http://www.avactis.com',
		categories: ['cms', 'ecommerce']
	},
	'PivotX': {
		icon: 'pivotx.ico',
		url: 'http://pivotx.net',
		categories: ['cms']
	},
	'Alfresco': {
		icon: 'Alfresco.png',
		url: 'http://www.alfresco.com',
		categories: ['cms']
	},
	'ClanSphere': {
		icon: 'ClanSphere.png',
		url:  'http://csphere.eu',
		categories: ['cms']
	},


	'Elgg': {
		icon: 'Elgg.ico',
		url: 'http://www.elgg.org/',
		categories: ['social']
	},


	'SharePoint': {
		icon: 'SharePoint.png',
		url: 'http://office.microsoft.com/en-us/sharepoint/',
		title: 'Microsoft SharePoint',
		categories: ['uncategorized']
	},


	// === ecommerce ===
	'PrestaShop': {
		icon: 'PrestaShop.ico',
		url: 'http://www.prestashop.com/',
		categories: ['ecommerce']
	},
	'Prostores': {
		icon: 'prostores.ico',
		url: 'http://www.prostores.com',
		categories: ['ecommerce']
	},
	'ZenCart': {
		icon: 'zencart.ico',
		url: 'http://www.zen-cart.com',
		categories: ['ecommerce']
	},
	'ErainCart': {
		icon: 'eraincart.ico',
		url: 'http://eraincart.com',
		categories: ['ecommerce']
	},
	'Volusion': {
		icon: 'volusion.ico',
		url: 'http://www.volusion.com',
		categories: ['ecommerce']
	},
	'osCommerce': {
		icon: 'osCommerce.ico',
		url: 'http://www.oscommerce.com',
		categories: ['ecommerce']
	},
	'OpenCart': {
		icon: 'opencart.png',
		url: 'http://www.opencart.com',
		categories: ['ecommerce']
	},




	'MediaWiki': {
		icon: 'MediaWiki.ico',
		url: 'http://www.mediawiki.org/',
		categories: ['wiki']
	},
	'DokuWiki': {
		icon: 'DokuWiki.ico',
		url: 'http://www.dokuwiki.org/',
		categories: ['wiki']
	},


	'Moodle': {
		icon: 'moodle.png',
		url: 'http://moodle.org',
		categories: ['uncategorized']
	},
	'SugarCRM': {
		icon: 'sugarcrm.ico',
		url: 'http://www.sugarcrm.com',
		categories: ['uncategorized']
	},


	'Shibboleth': {
		icon: 'shibboleth.png',
		url:  'http://shibboleth.internet2.edu/',
		categories: ['uncategorized']
	},




	
	// ==== js framework ====
	'jQuery': {
		icon: 'jQuery.ico',
		url: 'http://jquery.com',
		categories: ['framework']
	},
	'jQuery UI': {
		icon: 'jQuery_UI.ico',
		url: 'http://jqueryui.com/',
		categories: ['framework']
	},
	'ExtJS': {
		icon: 'ExtJS.ico',
		url: 'http://www.extjs.com/',
		categories: ['framework']
	},
	'Prototype': {
		icon: 'Prototype.ico',
		url: 'http://www.prototypejs.org/',
		categories: ['framework']
	},
	'Closure': {
		icon: 'Closure.png',
		url: 'http://code.google.com/closure/',
		categories: ['framework']
	},
	'MooTools': {
		icon: 'MooTools.ico',
		url: 'http://mootools.net/',
		categories: ['framework']
	},
	'Dojo': {
		icon: 'dojo.ico',
		url: 'http://www.dojotoolkit.org/',
		categories: ['framework']
	},
	'script.aculo.us': {
		icon: 'script.aculo.us.ico',
		url: 'http://script.aculo.us/',
		categories: ['framework']
	},
	'YUI': {
		icon: 'YUI.ico',
		url: 'http://developer.yahoo.com/yui/',
		categories: ['framework']
	},
	'Cappuccino': {
		icon: 'cappuccino.png',
		url: 'http://cappuccino.org/',
		categories: ['framework']
	},
	'RightJS': {
		icon: 'rightjs.png',
		url: 'http://RightJS.org/',
		categories: ['framework']
	},
	'Spine': {
		icon: 'spine.ico',
		url: 'http://spinejs.com',
		categories: ['framework']
	},
	'AmplifyJS': {
		icon: 'AmplifyJS.png',
		url: 'http://amplifyjs.com',
		categories: ['framework']
	},
	'Ember.js': {
		icon: 'ember.png',
		url: 'http://emberjs.com',
		categories: ['framework']
	},
	'Batman.js': {
		icon: 'batmanjs.png',
		url: 'http://batmanjs.org',
		categories: ['framework']
	},
	'Knockback.js': {
		icon: 'knockback.png',
		url: 'http://kmalakoff.github.com/knockback/',
		categories: ['framework']
	},
	'Agility.js': {
		icon: 'agility.png',
		url: 'http://agilityjs.com/',
		categories: ['framework']
	},
	'Sammy.js': {
		icon: 'sammyjs.ico',
		url: 'http://sammyjs.org',
		categories: ['framework']
	},
	'Backbone.js': {
		icon: 'Backbone.png',
		url: 'http://documentcloud.github.com/backbone/',
		categories: ['framework']
	},
	'Underscore.js': {
		icon: 'Underscore.png',
		url: 'http://documentcloud.github.com/underscore/',
		categories: ['framework']
	},
	'AngularJS': {
		icon: 'AngularJS.ico',
		url: 'http://www.angularjs.org',
		categories: ['framework']
	},
	'Meteor': {
		icon: 'meteor.ico',
		url: 'http://www.meteor.com',
		categories: ['framework']
	},
	'MarionetteJS': {
		icon: 'marionette.png',
		url: 'http://www.marionettejs.com',
		categories: ['framework']
	},	
	'Handlebars': {
		icon: 'handlebars.png',
		url: 'http://handlebars',
		categories: ['framework']
	},
	'Head JS': {
		icon: 'headjs.gif',
		url: 'http://headjs.com',
		categories: ['framework']
	},
	'Bootstrap': {
		icon: 'bootstrap.ico',
		url: 'http://twitter.github.com/bootstrap/',
		categories: ['framework']
	},
	'Express.js': {
		icon: 'expressjs.png',
		url: 'http://expressjs.com/',
		categories: ['framework']
	},
	'Nette': {
		icon: 'nette.ico',
		url: 'http://nette.org/',
		categories: ['framework']
	},

	// ==== marketing ====
	
	'HubSpot': {
		icon: 'hubspot.ico',
		url: 'http://www.hubspot.com',
		categories: ['marketing']
	},
	'Wibiya': {
		icon: 'Wibiya.ico',
		url: 'http://wibiya.com/',
		categories: ['marketing']
	},
	'Kissmetrics': {
		icon: 'Kissmetrics.ico',
		url: 'http://kissmetrics.com',
		categories: ['marketing']
	},
	'Woopra': {
		icon: 'woopra.ico',
		url: 'http://www.woopra.com',
		categories: ['marketing']
	},
	'OpenWebAnalytics': {
		icon: 'owa.ico',
		url: 'http://www.openwebanalytics.com',
		categories: ['marketing']
	},
	'Google Analytics': {
		icon: 'Google_Analytics.ico',
		url: 'http://www.google.com/analytics/',
		categories: ['marketing']
	},
	'SiteCatalyst': {
		icon: 'SiteCatalyst.ico',
		url: 'http://www.omniture.com',
		categories: ['marketing']
	},
	'Coremetrics': {
		icon: 'coremetrics.ico',
		url: 'http://www.coremetrics.com',
		categories: ['marketing']
	},
	'Quantcast': {
		icon: 'Quantcast.ico',
		url: 'http://www.quantcast.com/',
		categories: ['marketing']
	},
	'Xiti': {
		title: 'Xiti Tracker',
		icon: 'xiti.ico',
		url: 'http://xiti.com/',
		categories: ['marketing']
	},
	'Piwik': {
		icon: 'Piwik.ico',
		url: 'http://piwik.org/',
		categories: ['marketing']
	},
	'Clicky': {
		icon: 'clicky.ico',
		url: 'http://getclicky.com/',
		categories: ['marketing']
	},
	'AdSense': {
		icon: 'AdSense.gif',
		url: 'https://www.google.com/adsense',
		categories: ['marketing']
	},
	'Chitika': {
		icon: 'chitika.ico',
		url: 'http://chitika.com/',
		categories: ['marketing']
	},
	'BuySellAds': {
		icon: 'buysellads.ico',
		url: 'http://buysellads.com/',
		categories: ['marketing']
	},	


	'Raphael': {
		icon: 'raphael.ico',
		url: 'http://raphaeljs.com/',
		categories: ['uncategorized']
	},
	'Typekit': {
		icon: 'typekit.ico',
		url: 'http://typekit.com/',
		categories: ['uncategorized']
	},
	'Cufon': {
		icon: 'cufon.ico',
		url: 'http://cufon.shoqolate.com/',
		categories: ['uncategorized']
	},
	'sIFR': {
		icon: 'sifr.gif',
		url: 'http://www.mikeindustries.com/blog/sifr/',
		categories: ['uncategorized']
	},
	'Modernizr': {
		icon: 'modernizr.ico',
		url: 'http://www.modernizr.com/',
		categories: ['uncategorized']
	},

	'Facebook': {
		title: 'Facebook Social plugins',
		icon: 'facebook.ico',
		url: 'http://developers.facebook.com/',
		categories: ['social']
	},
	'Twitter': {
		title: 'Twitter plugins',
		icon: 'twitter.ico',
		url: 'http://dev.twitter.com',
		categories: ['social']
	},
	'Buzz': {
		title: 'Google Buzz Button',
		icon: 'buzz.png',
		url: 'http://www.google.com/buzz/stuff',
		categories: ['social']
	},
	'Plus1': {
		title: 'Google Plus 1',
		icon: 'plus1.png',
		url: 'http://www.google.com/+1/button/',
		categories: ['social']
	},
	'AddThis': {
		icon: 'addthis.ico',
		url: 'http://www.addthis.com',
		categories: ['social']
	},
	
	'Google Loader': {
		icon: 'google.ico',
		url: 'http://code.google.com/apis/loader',
		categories: ['uncategorized']
	},	
	


	'New Relic': {
		icon: 'newrelic.ico',
		url: 'http://newrelic.com/',
		categories: ['uncategorized']
	},
	'Disqus': {
		icon: 'Disqus.ico',
		url: 'http://disqus.com/',
		categories: ['uncategorized']
	},
	'GetSatisfaction': {
		icon: 'GetSatisfaction.gif',
		url: 'http://getsatisfaction.com',
		categories: ['uncategorized']
	},
	'UserVoice': {
		icon: 'uservoice.ico',
		url: 'http://www.uservoice.com',
		categories: ['uncategorized']
	},




	'Prettify': {
		title: 'Google Code Prettify',
		icon: 'google.ico',
		url: 'http://code.google.com/p/google-code-prettify/',
		categories: ['uncategorized']
	},
	'reCaptcha': {
		icon: 'reCaptcha.ico',
		url: 'http://recaptcha.net/',
		categories: ['uncategorized']
	},
	'Mollom': {
		icon: 'mollom.ico',
		url: 'http://mollom.com',
		categories: ['uncategorized']
	},
	'GoogleFontApi': {
		title: 'Google Font API',
		icon: 'google-font-api.gif',
		url: 'http://code.google.com/apis/webfonts/',
		categories: ['uncategorized']
	},
	'GoogleMapApi': {
		title: 'Google Map API',
		icon: 'gmap.png',
		url: 'http://code.google.com/apis/maps/',
		categories: ['uncategorized']
	},
	'SWFObject': {
		icon: 'SWFObject.ico',
		url: 'http://code.google.com/p/swfobject/',
		categories: ['uncategorized']
	},

	'OpenX': {
		icon: 'OpenX.ico',
		url: 'http://openx.org',
		categories: ['uncategorized']
	},






	'HumansTxt': {
		icon: 'humanstxt.ico',
		url: 'http://humanstxt.org/',
		categories: ['uncategorized']
	},

	'SPDY': {
		icon: 'spdy.ico',
		url: 'http://www.chromium.org/spdy',
		categories: ['uncategorized']
	},

	'PHP': {
		icon: 'php.ico',
		url: 'http://php.net/',
		categories: ['infrastructure']
	},
	'Apache': {
		icon: 'apache.ico',
		url: 'http://httpd.apache.org/',
		categories: ['infrastructure']
	},
	'nginx': {
		icon: 'nginx.ico',
		url: 'http://nginx.org/en/',
		categories: ['infrastructure']
	},
	'Varnish': {
		icon: 'varnish.ico',
		url: 'https://www.varnish-cache.org/',
		categories: ['infrastructure']
	},
	'IIS': {
		icon: 'iis.ico',
		url: 'http://www.iis.net/',
		categories: ['infrastructure']
	},
	'ASP.NET': {
		icon: 'asp.net.ico',
		url: 'http://www.asp.net/',
		categories: ['infrastructure']
	},



	// ==== video ====
	'KZO': {
		icon: 'kzo.ico',
		url: 'http://kzoinnovations.com',
		categories: ['video']
	},
	'Ooyala': {
		icon: 'ooyala.ico',
		url: 'http://www.ooyala.com',
		categories: ['video']
	},
	'Brightcove': {
		icon: 'brightcove.ico',
		url: 'http://www.brightcove.com',
		categories: ['video']
	},
	'Vimeo': {
		icon: 'vimeo.ico',
		url: 'http://vimeo.com',
		categories: ['video']
	},
	'YouTube': {
		icon: 'youtube.ico',
		url: 'http://www.youtube.com',
		categories: ['video']
	},


	// ==== misc ====
	'': { // default
		icon: 'unknown.jpg',
		url: 'http://google.com/search?q=%s'
	},
};

var casper = require('casper').create();
var x = require('casper').selectXPath;
var fs = require('fs');

casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

//casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1');






var links = [
    'http://www.abbotsfordvw.com',
	'https://www.smpchev.ca',
	'https://www.okanagandodge.com',
	'https://www.mcnaught.com',
	'http://www.crosstownautocentre.com',
	'https://www.kelownachev.com',
	'http://www.bmwlaval.com',
	'https://www.wellingtonmotors.com',
	'https://www.northlandvolkswagencalgary.com',
	'https://www.gpsubaru.com',
	'https://www.lakewoodchev.com',
	'https://www.hyattinfiniticalgary.com',
	'https://www.mapleridgechrysler.com',
	'https://www.northlandnissan.com',
	'http://www.calgaryhyundai.com'
];

var group2 = [
	
];

var group3 = [

];

var group4 = [

];

var path = "/new-inventory/index.htm";



casper.start();
var i = 0;

casper.each(links, function(self, link) {
	
    this.thenOpen(link + path, function() {
		
//			this.then(function (){
//		var vwoGroup = window.DDC.dataLayer.vwo.vwoGroup.currentGroup;
//		console.log(vwoGroup);
//});
//				
		this.echo(this.getGlobal('DDC.dataLayer.site.franchises["0"]')); // 
		
			this.thenClick('div[data-index-position="1"]', function() {
	this.wait(1000, function () {
		
		// // Output dataLayer Variable
//		var vwoGroup = window.DDC.dataLayer.vwo.vwoGroup.currentGroup;
//		console.log(vwoGroup);

		
		// // Output to console on the current page's title
        this.echo(i + ' : ' + this.getTitle() + " @ " + link);

        // // Dump screenshots to directory 'shots'
        this.capture('shots/casper_1_' + i + '.png');
	});
});
		
		
		
        i++;

       

		

		
		
		
    });
});

casper.run();



 

//
//		console.log(link);
//        this.capture('Screenshot.png');
//



//
//
//
//var casper = require('casper').create();
//var x = require('casper').selectXPath;
//var fs = require('fs');
//
//casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
//
//casper.start('http://promotions.audi.ca/en/');
//
//casper.then(function (){
//
//	this.evaluate(function() {
//    jQuery('#province').val('MB').change();
//
//});
//});
//
//casper.wait(1000, function() {
//    this.capture('screenshot.png');
//});
//
//casper.run();

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
$(function(){
	let $hoge = $('.hamon');
	$hoge.ripples({
		resolution: 400,
		dropRadius: 25,
		perturbance: 0.05,
    imageUrl: "http://localhost:3000/uploads/idea/picture/1/%E3%83%AB%E3%82%A5%E3%81%95%E3%82%93.JPG"
	});
});

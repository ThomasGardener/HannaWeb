
$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.loader');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
//
// setTimeout (function() {
// //Preloader
// preloaderFadeOutTime = 1500;
// function hidePreloader() {
// var preloader = $('.loader');
// preloader.fadeOut(preloaderFadeOutTime);
// }
// hidePreloader();
// }, 2500);

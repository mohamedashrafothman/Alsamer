import JQuery from "jquery";
import "popper.js";
import "bootstrap";
import "moment";
import "paroller.js/dist/jquery.paroller";
import AppHeader from "./partials/AppHeader";
import swiperInitFunction from "./partials/swiperInit";
import animateCss from "./partials/animateCss";
import parollerInit from "./partials/parollerInit";
import aosInit from "./partials/aosInit";

window.$ = JQuery;

(($) => {
	$(window).on("load", () => {
		animateCss();
		$(".app-preloader").animateCss("fadeOut faster", () => {
			$(".app-preloader").removeClass("d-flex").addClass("d-none");
			$("body").removeClass("app-preloader--shown");
			parollerInit();
			aosInit();
		});
	});
	$(() => {
		$("body").addClass("app-preloader--shown");
		$("[data-toggle='tooltip']").tooltip();
		new AppHeader();
		swiperInitFunction();
	});
})(window.$);

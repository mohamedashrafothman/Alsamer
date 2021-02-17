import $ from "jquery";
import { capitalize, toLower, isEqual } from "lodash";

class AppHeader {
	constructor(options) {
		if (!AppHeader.instance) {
			// initial state
			this.DOM = {};
			this.is_menu_open = false;
			// firing method
			this._animation_state(options);
			this._cache_dom();
			this._set_open_state();
			this._resizeHeroSection();
			this._scrolling_app_header();
			this._bind_events();
			// assigning instance
			AppHeader.instance = this;
		}

		return AppHeader.instance;
	}

	_animation_state(
		options = {
			entrance_direction: "right",
			exit_direction: "right",
			speed: "",
			animation: "fade",
		}
	) {
		this.animation = {
			speed: toLower(options.speed),
			entrance: `${toLower(options.animation)}In${
				$("html").attr("dir") === "ltr" ? capitalize(options.entrance_direction) : capitalize(options.exit_direction)
			} ${options.speed}`,
			exit: `${toLower(options.animation)}Out${
				$("html").attr("dir") === "ltr" ? capitalize(options.exit_direction) : capitalize(options.entrance_direction)
			} ${options.speed}`,
		};
	}

	_cache_dom() {
		this.DOM.$body = $("body");
		this.DOM.$app_header = $(".app-header");
		this.DOM.$app_hero = $("#hero-section");
		this.DOM.$app_main_header = $(".app-main-header");
		this.header_last_scroll_top = this.DOM.$app_header.offset().top;
		this.header_height = this.DOM.$app_header.outerHeight(true);
		this.header_top = this.header_height || 0;
		this.DOM.$app_header_side_menu = this.DOM.$app_header.find(".app-header__side-menu");
		this.DOM.$app_header_underlay = this.DOM.$app_header.find(".app-header__underlay");
		this.DOM.$open_menu_button = this.DOM.$app_header.find(".app-header__burger-menu--open");
		this.DOM.$close_menu_button = this.DOM.$app_header_side_menu.find(".app-header__burger-menu--close");
	}

	_set_open_state() {
		const _this = this; // refer to AppHeader class

		if (
			_this.DOM.$app_header_side_menu.hasClass("app-header__side-menu--is-open")
			&& _this.DOM.$app_header_underlay.hasClass("app-header__underlay--is-open")
		) {
			_this.is_menu_open = true;
		}
	}

	_bind_events() {
		const _this = this; // refer to AppHeader class

		$(window).on("scroll", (e) => _this._scrolling_app_header(e));
		_this.DOM.$body.on("keyup", (e) => {
			if (isEqual(e.key, "Escape") && isEqual(e.which, 27)) {
				if (_this.is_menu_open) _this._close_app_header_menu(e);
			}
		});
		_this.DOM.$open_menu_button.on("click", (e) => _this._open_app_header_menu(e));
		_this.DOM.$close_menu_button.on("click", (e) => _this._close_app_header_menu(e));
		_this.DOM.$app_header_underlay.on("click", (e) => _this._close_app_header_menu(e));
	}

	_toggle_app_header_menu(e, cb) {
		const _this = this; // refer to AppHeader class

		// checking if side nav is closed
		if (!_this.is_menu_open) {
			_this._open_app_header_menu(e, cb);
			// return undefined
			return;
		}
		// checking if side nav is open
		if (_this.is_menu_open) {
			_this._close_app_header_menu(e, cb);
		}
	}

	_open_app_header_menu(e, cb) {
		const _this = this; // refer to AppHeader class

		// check if menu is not opened
		if (!_this.is_menu_open) {
			// add overlay hidden to body.
			_this.DOM.$body.addClass("side-menu--is-open");
			// fade in side nav background body underlay
			// NOTE: hardcoded fadeIn animation on purpose.
			_this.DOM.$app_header_underlay.addClass("app-header__underlay--is-open").animateCss(`fadeIn ${_this.animation.speed}`);
			// open side nav
			_this.DOM.$app_header_side_menu.addClass("app-header__side-menu--is-open").animateCss(_this.animation.entrance, () => {
				// setting menu open state to true
				_this.is_menu_open = true;
				// setting aria-hidden to true for acceptability reasons.
				_this.DOM.$app_header_side_menu.attr("aria-hidden", !_this.is_menu_open);
			});
			// fire callback function if passed
			if (cb && typeof cb === "function") return cb();
		}
	}

	_close_app_header_menu(e, cb) {
		const _this = this; // refer to AppHeader class

		// check if menu is opened
		if (_this.is_menu_open) {
			// fade out side nav background body underlay
			_this.DOM.$app_header_underlay.animateCss(`fadeOut ${_this.animation.speed}`, () => {
				_this.DOM.$app_header_underlay.removeClass(`${_this.animation.exit}  app-header__underlay--is-open`);
			});
			// exit side nav
			_this.DOM.$app_header_side_menu.animateCss(_this.animation.exit, () => {
				_this.DOM.$app_header_side_menu.removeClass(`${_this.animation.exit} app-header__side-menu--is-open`);
				// set menu open state to false
				_this.is_menu_open = false;
				// setting aria-hidden to false for acceptability reasons.
				_this.DOM.$app_header_side_menu.attr("aria-hidden", !_this.is_menu_open);
				// remove overlay hidden to body.
				_this.DOM.$body.removeClass("side-menu--is-open");
			});
			// fire callback function if passed
			if (cb && typeof cb === "function") return cb();
		}
	}

	_scrolling_app_header(e, cb) {
		const _this = this; // refer to AppHeader class

		// get scroll to top pixels.
		const window_scroll = $(window).scrollTop();

		if (window_scroll > _this.header_top) {
			if (window_scroll < _this.header_last_scroll_top || window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
				_this.DOM.$app_header
					.removeClass("app-header--scrolling app-header--scrolling-up")
					.addClass("app-header--scrolling app-header--scrolling-down");
			} else {
				_this.DOM.$app_header
					.removeClass("app-header--scrolling app-header--scrolling-down")
					.addClass("app-header--scrolling app-header--scrolling-up");
			}
		} else {
			_this.DOM.$app_header.removeClass("app-header--scrolling-down app-header--scrolling app-header--scrolling-up");
		}

		_this.header_last_scroll_top = window_scroll;

		// fire callback function if passed
		if (cb && typeof cb === "function") return cb();
	}

	_resizeHeroSection() {
		const _this = this; // refer to AppHeader class
		_this.DOM.$app_hero.css({ paddingTop: _this.header_height });
		_this.DOM.$app_main_header.each((index, ele) => {
			console.log("app main header", $(ele));
			$(ele).css({ paddingTop: `calc(${_this.DOM.$app_main_header.css("padding-top")} + ${_this.header_height}px)` });
		});
	}
}

export default AppHeader;

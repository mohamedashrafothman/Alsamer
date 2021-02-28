import $ from "jquery";
import Swiper, { Pagination, Navigation, A11y, Controller, Parallax, EffectFade, Keyboard, Autoplay } from "swiper";

Swiper.use([Pagination, Controller, Parallax, EffectFade, Keyboard, Autoplay, Navigation, A11y]);

const swiperInitFunction = () => {
	const $clients_section_slider = $(".swiper-container#clients-section-slider").eq(0);
	if ($clients_section_slider.length) {
		const clients_section_slider_options = {
			direction: "horizontal",
			speed: 1000,
			updateOnWindowResize: true,
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 16,
			breakpoints: {
				// when window width is >= 576px
				576: { slidesPerView: 2, slidesPerColumn: 2 },
				// when window width is >= 768px
				768: { slidesPerView: 3, slidesPerColumn: 3 },
				// when window width is >= 992px
				992: { slidesPerView: 4, slidesPerColumn: 3 },
				// when window width is >= 1200px
				1200: { slidesPerView: 5, slidesPerColumn: 3 },
			},
			navigation: {
				disabledClass: "disabled",
				prevEl: "#clients-section .slider-button-prev",
				nextEl: "#clients-section .slider-button-next",
			},
		};
		new Swiper(`#${$clients_section_slider.attr("id")}`, clients_section_slider_options);
	}

	const $our_supplier_section_slider = $(".swiper-container#our-supplier-section-slider").eq(0);
	if ($our_supplier_section_slider.length) {
		const our_supplier_section_slider_options = {
			direction: "horizontal",
			speed: 1000,
			updateOnWindowResize: true,
			slidesPerView: 1,
			slidesPerColumn: 4,
			spaceBetween: 16,
			breakpoints: {
				// when window width is >= 576px
				576: { slidesPerView: 1, slidesPerColumn: 4 },
				// when window width is >= 768px
				768: { slidesPerView: 1, slidesPerColumn: 5 },
				// when window width is >= 992px
				992: { slidesPerView: 2, slidesPerColumn: 6 },
				// when window width is >= 1200px
				1200: { slidesPerView: 2, slidesPerColumn: 6 },
			},
			navigation: {
				disabledClass: "disabled",
				prevEl: "#our-supplier-section .slider-button-prev",
				nextEl: "#our-supplier-section .slider-button-next",
			},
		};
		new Swiper(`#${$our_supplier_section_slider.attr("id")}`, our_supplier_section_slider_options);
	}

	const $projects_section_slider = $(".swiper-container#projects-section-slider").eq(0);
	if ($projects_section_slider.length) {
		const projects_section_options = {
			init: true,
			initialSlide: 1,
			grabCursor: true,
			centeredSlides: true,
			parallax: true,
			direction: "horizontal",
			speed: 1000,
			effect: "slide",
			loop: true,
			updateOnWindowResize: true,
			slideToClickedSlide: true,
			navigation: {
				disabledClass: "disabled",
				prevEl: "#projects-section .slider-button-prev",
				nextEl: "#projects-section .slider-button-next",
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false,
			},
			spaceBetween: 20,
			slidesPerView: 2,
			breakpoints: {
				// when window width is >= 576px
				576: {
					spaceBetween: 45,
					slidesPerView: 2,
				},
				// when window width is >= 768px
				768: {
					spaceBetween: 65,
					slidesPerView: 3,
				},
				// when window width is >= 1200px
				1200: {
					spaceBetween: 75,
					slidesPerView: 3,
				},
			},
		};
		new Swiper(`#${$projects_section_slider.attr("id")}`, projects_section_options);
	}

	// why choose us slider
	const $why_choose_us_images_slider = $(".swiper-container#why-choose-us-section-images-slider").eq(0);
	const $why_choose_us_content_slider = $(".swiper-container#why-choose-us-section-content-slider").eq(0);

	if ($why_choose_us_images_slider.length) {
		const why_choose_us_images_options = {
			direction: "horizontal",
			speed: 1000,
			autoplay: { delay: 5000, disableOnInteraction: true },
			slidesPerView: 1,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			navigation: {
				disabledClass: "disabled",
				prevEl: "#why-choose-us-section .slider-button-prev",
				nextEl: "#why-choose-us-section .slider-button-next",
			},
		};
		const why_choose_us_content_options = {
			speed: 1000,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			parallax: true,
			slidesPerView: 1,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		};

		const why_choose_us_images_swiper = new Swiper(`#${$why_choose_us_images_slider.attr("id")}`, why_choose_us_images_options);
		const why_choose_us_content_swiper = new Swiper(`#${$why_choose_us_content_slider.attr("id")}`, why_choose_us_content_options);

		why_choose_us_images_swiper.on("slideChange", () => {
			why_choose_us_content_swiper.slideTo(why_choose_us_images_swiper.activeIndex);
		});
		why_choose_us_content_swiper.on("slideChange", () => {
			why_choose_us_images_swiper.slideTo(why_choose_us_content_swiper.activeIndex);
		});
	}

	const $our_team_section_slider = $(".swiper-container#our-team-section-slider").eq(0);
	if ($our_team_section_slider.length) {
		const our_team_section_options = {
			init: true,
			initialSlide: 1,
			grabCursor: true,
			centeredSlides: false,
			direction: "horizontal",
			speed: 1000,
			effect: "slide",
			loop: false,
			updateOnWindowResize: true,
			slideToClickedSlide: true,
			navigation: {
				disabledClass: "disabled",
				prevEl: "#our-team-section .slider-button-prev",
				nextEl: "#our-team-section .slider-button-next",
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false,
			},
			spaceBetween: 16,
			slidesPerView: 2,
			breakpoints: {
				// when window width is >= 576px
				576: {
					slidesPerView: 2,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 3,
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 4,
				},
				// when window width is >= 1200px
				1200: {
					slidesPerView: 5,
				},
			},
		};
		new Swiper(`#${$our_team_section_slider.attr("id")}`, our_team_section_options);
	}
};

export default swiperInitFunction;

import $ from "jquery";

const animateCss = () => {
	$.fn.extend({
		animateCss(animation_name, callback) {
			const animation_end = (function (el) {
				const animations = {
					animation: "animationend",
					OAnimation: "oAnimationEnd",
					MozAnimation: "mozAnimationEnd",
					WebkitAnimation: "webkitAnimationEnd",
				};
				// eslint-disable-next-line no-restricted-syntax
				for (const t in animations) {
					if (el.style[t] !== undefined) {
						return animations[t];
					}
				}
			}(document.createElement("div")));
			this.addClass(`animated ${animation_name}`).one(animation_end, function () {
				$(this).removeClass(`animated ${animation_name}`);
				if (typeof callback === "function") callback();
			});
			return this;
		},
	});
};

export default animateCss;

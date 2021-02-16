import $ from "jquery";

const parollerInit = () => {
	$(".paroller, [data-paroller-factor]").each((index, item) => {
		$(item).paroller({ transition: "transform 0.2s linear 0s" }); // same as website css transition.
	});
};

export default parollerInit;

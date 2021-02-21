//
// ─── IMPORTING DEPENDENCIES ─────────────────────────────────────────────────────
//
const pug = require("gulp-pug");
const util = require("gulp-util");
const gulp = require("gulp");
const sass = require("gulp-sass");
const size = require("gulp-size");
const cache = require("gulp-cache");
const rtlcss = require("gulp-rtlcss");
const rename = require("gulp-rename");
const prefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const imagemin = require("gulp-imagemin");
const browserify = require("browserify");
const sourcemaps = require("gulp-sourcemaps");
const prettyHtml = require("gulp-pretty-html");
const browserSync = require("browser-sync").create();
const tildeImporter = require("node-sass-tilde-importer");
const imageminZopfli = require("imagemin-zopfli");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegRecompress = require("imagemin-jpeg-recompress");

//
// ─── CONFIGURATIONS ─────────────────────────────────────────────────────────────
//
const config = {
	is_prod: !!util.env.production,
	assets_dir: "src",
	build_dir: "build",
	sass: {
		file_path_and_pattern: "sass/**/*.scss",
	},
	rtl: {
		file_path_and_pattern: "styles/**/*.min.css",
	},
	js: {
		file_path_and_pattern: "scripts/script.js",
	},
	pug: {
		file_path_and_pattern: "views/**/*.pug",
	},
	html: {
		file_path_and_pattern: "**/*.html",
	},
	images: {
		file_path_and_pattern: "images/**/*.+(png|jpg|gif|svg|ico)",
	},
	fonts: {
		file_path_and_pattern: "fonts/**/*.+(eot|svg|ttf|woff|woff2)",
	},
};

//
// ─── GULP TASKS ─────────────────────────────────────────────────────────────────
//
gulp.task("pug", () => gulp
	.src([`${config.assets_dir}/${config.pug.file_path_and_pattern}`, `!${config.assets_dir}/views/**/_*.pug`])
	.pipe(
		pug({
			pretty: config.is_prod,
			data: {
				lang: "en",
				description: "Website Description Here",
				keywords: "Website Keywords Here",
				siteName: {
					en: "Al-Samar",
					ar: "Al-Samar",
				},
			},
		})
	)
	.pipe(gulp.dest(config.build_dir))
	.pipe(browserSync.stream()));

gulp.task("html-pretty", () => gulp
	.src([`${config.build_dir}/${config.html.file_path_and_pattern}`])
	.pipe(
		prettyHtml({
			indent_size: 4,
			indent_char: " ",
			indent_with_tabs: true,
		})
	)
	.pipe(gulp.dest(config.build_dir))
	.pipe(browserSync.stream()));

gulp.task("sass", () => gulp
	.src([`${config.assets_dir}/${config.sass.file_path_and_pattern}`, `!${config.assets_dir}/sass/**/_*.scss`])
	.pipe(!config.is_prod ? sourcemaps.init() : util.noop())
	.pipe(
		sass
			.sync({
				includePaths: ["node_modules/"],
				outputStyle: config.is_prod ? "compressed" : "compact",
				importer: tildeImporter,
			})
			.on("error", sass.logError)
	)
	.pipe(prefix("last 2 versions"))
	.pipe(
		rename((path) => {
			path.basename += ".min";
		})
	)
	.pipe(!config.is_prod ? sourcemaps.write() : util.noop())
	.pipe(gulp.dest(`${config.build_dir}/styles`))
	.pipe(config.is_prod ? size({ pretty: true, showFiles: true }) : util.noop())
	.pipe(browserSync.stream()));

gulp.task("rtl", () => gulp
	.src([`${config.build_dir}/${config.rtl.file_path_and_pattern}`, `!${config.build_dir}/styles/**/*-rtl.min.css`], {
		allowEmpty: true,
	})
	.pipe(config.is_prod ? sourcemaps.init() : util.noop())
	.pipe(rtlcss())
	.pipe(
		rename((path) => {
			path.basename = path.basename.split(".");
			path.basename[0] = `${path.basename[0]}-rtl`;
			path.basename = path.basename.join(".");
		})
	)
	.pipe(config.is_prod ? util.noop() : sourcemaps.write())
	.pipe(gulp.dest(`${config.build_dir}/styles`))
	.pipe(config.is_prod ? size({ pretty: true, showFiles: true }) : util.noop())
	.pipe(browserSync.stream()));

gulp.task("js", () => browserify({
	entries: `${config.assets_dir}/${config.js.file_path_and_pattern}`,
	debug: true,
})
	.transform("babelify", {
		presets: ["@babel/preset-env"],
		plugins: [
			"@babel/plugin-transform-runtime",
			"@babel/plugin-proposal-optional-chaining",
			"@babel/plugin-proposal-class-properties",
		],
	})
	.bundle()
	.pipe(source("app.js"))
	.pipe(buffer())
	.pipe(config.is_prod ? uglify({ mangle: false, output: { beautify: false } }) : util.noop())
	.pipe(
		rename({
			suffix: ".min",
		})
	)
	.pipe(gulp.dest(`${config.build_dir}/scripts`))
	.pipe(config.is_prod ? size({ pretty: true, showFiles: true }) : util.noop())
	.pipe(browserSync.stream()));

gulp.task("fonts", () => gulp
	.src([`${config.assets_dir}/${config.fonts.file_path_and_pattern}`])
	.pipe(gulp.dest(`${config.build_dir}/fonts`))
	.pipe(browserSync.stream()));

gulp.task("images", () => gulp
	.src([`${config.assets_dir}/${config.images.file_path_and_pattern}`])
	.pipe(
		cache(
			imagemin([
				imageminPngquant({
					speed: 1,
					quality: [0.7, 0.8],
				}),
				imageminZopfli({
					more: true,
					iterations: config.is_prod ? 50 : 10,
				}),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: false,
						},
					],
				}),
				imagemin.mozjpeg({
					progressive: true,
					quality: 90,
				}),
				imageminJpegRecompress({
					loops: 6,
					min: 40,
					max: 85,
					quality: "low",
				}),
			])
		)
	)
	.pipe(gulp.dest(`${config.build_dir}/images`))
	.pipe(browserSync.stream()));

//
// ─── WATCH TASKS ────────────────────────────────────────────────────────────────
//
gulp.task(
	"dev",
	gulp.series("fonts", "images", "sass", "rtl", "js", "pug", () => {
		browserSync.init({
			server: `./${config.build_dir}`,
			open: false,
		});
		gulp.watch(["src/fonts/**/*.+(eot|svg|ttf|woff|woff2)"], gulp.series("fonts"));
		gulp.watch(["src/images/**/*.+(png|jpg|gif|svg|ico)"], gulp.series("images"));
		gulp.watch(["src/sass/**/*.scss", "src/sass/*.scss"], gulp.series("sass"));
		gulp.watch(["build/styles/**/*.min.css", "!build/styles/**/*-rtl.min.css"], gulp.series("rtl"));
		gulp.watch(["src/scripts/**/*.js", "src/scripts/*.js"], gulp.series("js"));
		gulp.watch(["src/views/*.pug", "src/views/**/*.pug"], gulp.series("pug"));
		gulp.watch("./build/*.html").on("change", browserSync.reload);
	})
);
gulp.task("prod", gulp.series("fonts", "images", "sass", "rtl", "js", "pug", "html-pretty"));

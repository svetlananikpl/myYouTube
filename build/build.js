/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(1);
	
	var _controller = __webpack_require__(2);
	
	(0, _render.init)();
	(0, _controller.search)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	var body = document.querySelector('body');
	var RenderConstants = {
	    ulResults: document.createElement('ul'),
	    divWrapper: document.createElement('div'),
	    divPaging: document.createElement('div')
	};
	//------------init-----------------------------------------------------------------------------------------------------
	
	function init() {
	    body.innerHTML = "<form class='searchForm'><input class='searchInput' id='searchValue' type='text' placeholder='Search Video'/><button type='button' id='submitButton'></button></form>";
	    RenderConstants.submitButton = document.querySelector('#submitButton');
	    RenderConstants.searchForm = document.querySelector('.searchForm');
	}
	
	//---------------------------------------------------------------------------------------------------------------------
	
	function renderNewLayout() {
	    body.classList.add('result');
	    RenderConstants.searchForm.classList.add('top');
	    body.appendChild(RenderConstants.divWrapper);
	    RenderConstants.divWrapper.appendChild(RenderConstants.ulResults);
	    RenderConstants.divWrapper.classList.add('wrapper');
	    RenderConstants.ulResults.classList.add('flex-container');
	    RenderConstants.ulResults.innerHTML = '';
	    body.appendChild(RenderConstants.divPaging);
	    RenderConstants.divPaging.classList.add('paging');
	    initRenderPaging();
	}
	
	function initRenderPaging() {
	    RenderConstants.divPaging.innerHTML = "<a class='active color1' href='#' rel='1'><span>1</span></a><a href='#' class='color2' rel='2'><span>2</span></a><a href='#' class='color3' rel='3'><span>3</span></a>";
	}
	
	function renderPaging(isNextPage) {
	    var rel = RenderConstants.divPaging.querySelector("a:last-child").getAttribute("rel");
	    var color = rel % 2 ? 4 : 3;
	    if (isNextPage) {
	        RenderConstants.divPaging.innerHTML = "<a href='#' class='color1' rel='1'><span>1</span></a><span>...</span><a class='active color" + color + "' href='#' rel='" + (+rel + 1) + "'><span>" + (+rel + 1) + "</span></a><a href='#' class='color" + (color - 1) + "' rel='" + (+rel + 2) + "'><span>" + (+rel + 2) + "</span></a><a href='#' class='color" + (color - 2) + "' rel='" + (+rel + 3) + "'><span>" + (+rel + 3) + "</span></a>";
	    } else {
	        RenderConstants.divPaging.innerHTML = "<a href='#'  class='color1' rel='1'><span>1</span></a><span>...</span><a class='active color" + color + "' href='#' rel='" + (+rel - 3) + "'><span>" + (+rel - 3) + "</span></a><a class='color" + (color - 1) + "' href='#' rel='" + (+rel - 2) + "'><span>" + (+rel - 2) + "</span></a><a href='#' class='color" + (color - 2) + "' rel='" + (+rel - 1) + "'><span>" + (+rel - 1) + "</span></a>";
	    }
	}
	
	function renderList(item) {
	    RenderConstants.ulResults.innerHTML += "<li class='flex-item'><a href='" + item.link + "'><div class='image'><div class='bookmark'><p><span>Views: </span>" + item.views + "</p></div><img src='" + item.img.medium + "'></div><div class='color-square'><p>" + item.title + "</p></div></a><div class='author info'>" + item.channelTitle + "</div><div class='publishedAt info'>" + item.publishedAt + "</div><div class='description info'>" + item.description + "</div></li>";
	}
	
	function renderResizeLayout(wrapperWidth, newActivePage, amountLiOnPage) {
	    var trigger = newActivePage - 1;
	    var color = newActivePage % 2 ? 4 : 3;
	    RenderConstants.ulResults.style.left = -trigger * wrapperWidth + 'px';
	    if (newActivePage < 4) {
	        initRenderPaging();
	        if (newActivePage != 1) {
	            RenderConstants.divPaging.querySelector("a[class*=active]").classList.remove("active");
	            RenderConstants.divPaging.querySelector('a[rel="' + newActivePage + '"]').classList.add('active');
	        }
	    } else {
	        RenderConstants.divPaging.innerHTML = "<a href='#' class='color1' rel='1'><span>1</span></a><span>...</span><a class='active color" + color + "' href='#' rel='" + newActivePage + "'><span>" + newActivePage + "</span></a><a href='#' class='color" + (color - 1) + "' rel='" + (newActivePage + 1) + "'><span>" + (newActivePage + 1) + "</span></a><a href='#' class='color" + (color - 2) + "' rel='" + (newActivePage + 2) + "'><span>" + (newActivePage + 2) + "</span></a>";
	    }
	}
	
	exports.RenderConstants = RenderConstants;
	exports.renderNewLayout = renderNewLayout;
	exports.initRenderPaging = initRenderPaging;
	exports.renderPaging = renderPaging;
	exports.renderList = renderList;
	exports.renderResizeLayout = renderResizeLayout;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.search = search;
	
	var _render = __webpack_require__(1);
	
	var _service = __webpack_require__(3);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var widthLi = 272;
	var wrapperWidthBig = 1360;
	var wrapperWidthSmall = 262;
	var pageX = void 0;
	function search() {
	    _render.RenderConstants.submitButton.addEventListener('click', function () {
	        (0, _render.renderNewLayout)();
	        (0, _service2.default)();
	        addListeners();
	    });
	}
	
	function addListeners() {
	    window.addEventListener('resize', resizeHandler);
	    _render.RenderConstants.divPaging.addEventListener('click', clickNextPage);
	    _render.RenderConstants.divWrapper.addEventListener('mousedown', startSwipe);
	    _render.RenderConstants.divWrapper.addEventListener('touchstart', startSwipe);
	    _render.RenderConstants.divWrapper.addEventListener('mouseup', endSwipe);
	    _render.RenderConstants.divWrapper.addEventListener('touchend', endSwipe);
	}
	
	function resizeHandler() {
	    if (document.body.clientWidth < wrapperWidthBig || document.body.clientWidth > wrapperWidthBig + widthLi) {
	        var fiveResultsLi = 1360;
	        var fourResultsLi = 1088;
	        var threeResultsLi = 816;
	        var twoResultsLi = 544;
	        var amountLiOnPage = void 0;
	        var prefAmountLiOnPage = 0;
	        var newActivePage = void 0;
	
	        if (document.body.clientWidth > wrapperWidthBig) {
	            prefAmountLiOnPage--;
	        } else {
	            prefAmountLiOnPage++;
	        }
	
	        var relPrevSizePage = +_render.RenderConstants.divPaging.querySelector("a[class*=active]").getAttribute("rel");
	        if (document.body.clientWidth >= fiveResultsLi) {
	            wrapperWidthBig = fiveResultsLi;
	            amountLiOnPage = 5;
	        } else if (document.body.clientWidth < fiveResultsLi) {
	            wrapperWidthBig = fourResultsLi;
	            amountLiOnPage = 4;
	        } else if (document.body.clientWidth < fourResultsLi) {
	            wrapperWidthBig = threeResultsLi;
	            amountLiOnPage = 3;
	        } else if (document.body.clientWidth < threeResultsLi) {
	            wrapperWidthBig = twoResultsLi;
	            amountLiOnPage = 2;
	        }
	        prefAmountLiOnPage += amountLiOnPage;
	        var rightElemNumber = prefAmountLiOnPage * (relPrevSizePage - 1) + 1;
	        newActivePage = rightElemNumber % amountLiOnPage ? Math.floor(rightElemNumber / amountLiOnPage) + 1 : Math.floor(rightElemNumber / amountLiOnPage);
	        (0, _render.renderResizeLayout)(wrapperWidthBig, newActivePage, amountLiOnPage);
	    }
	}
	
	function clickNextPage(e) {
	    var relPrevActivePage = _render.RenderConstants.divPaging.querySelector("a[class*=active]").getAttribute("rel");
	    if (e.target.getAttribute("rel") === "1") {
	        goToNextPage(e.target, "2");
	        (0, _render.initRenderPaging)();
	    } else {
	        goToNextPage(e.target, relPrevActivePage);
	    }
	}
	
	function startSwipe(e) {
	    _render.RenderConstants.divPaging.querySelector("a[class*=active]").classList.add("fakehover");
	    e.preventDefault();
	    pageX = e.pageX || e.touches[0].pageX;
	}
	
	function endSwipe(e) {
	    var pageXNew = e.pageX || e.changedTouches[0].pageX;
	    var relPrevActivePage = _render.RenderConstants.divPaging.querySelector("a[class*=active]").getAttribute("rel");
	    var page = void 0;
	    var nextPage = _render.RenderConstants.divPaging.querySelector('a[rel="' + (+relPrevActivePage + 1) + '"]');
	    var prevPage = _render.RenderConstants.divPaging.querySelector('a[rel="' + (+relPrevActivePage - 1) + '"]');
	    if (pageX - pageXNew > 20) {
	        if (nextPage) {
	            page = nextPage;
	        } else {
	            (0, _render.renderPaging)(true);
	            page = _render.RenderConstants.divPaging.querySelector('a[rel="' + (+relPrevActivePage + 1) + '"]');
	        }
	    } else {
	        if (relPrevActivePage === "1") {
	            return;
	        } else {
	            if (prevPage) {
	                page = prevPage;
	            } else {
	                if (+relPrevActivePage - 1 < 4) {
	                    (0, _render.initRenderPaging)();
	                } else {
	                    (0, _render.renderPaging)(false);
	                }
	                page = _render.RenderConstants.divPaging.querySelector('a[rel="' + (+relPrevActivePage - 1) + '"]');
	            }
	        }
	    }
	    goToNextPage(page, relPrevActivePage);
	}
	function goToNextPage(nextPage, relPrevActivePage) {
	    var wrapperWidth = void 0;
	    var triggerPrev = relPrevActivePage - 1;
	    if (!_render.RenderConstants.divPaging.querySelector('a[rel="' + (+triggerPrev + 3) + '"]')) {
	        (0, _service2.default)();
	    }
	    _render.RenderConstants.divPaging.querySelector("a[class*=active]").classList.remove("active");
	    var triggerNext = nextPage.getAttribute("rel") - 1;
	    nextPage.classList.add('active');
	    if (document.body.clientWidth < 544) {
	        wrapperWidth = wrapperWidthSmall;
	    } else {
	        wrapperWidth = wrapperWidthBig;
	    }
	    _render.RenderConstants.ulResults.animate([{ left: -triggerPrev * wrapperWidth + 'px' }, { left: -triggerNext * wrapperWidth + 'px' }], 500);
	    _render.RenderConstants.ulResults.style.left = -triggerNext * wrapperWidth + 'px';
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = doSearch;
	
	var _model = __webpack_require__(4);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _render = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cfgKey = 'AIzaSyD0_KpJho46VKnpCVyEsPVI9KU1uyxPdQI';
	var nextPageToken = '';
	
	function doSearch() {
	    var url = createURL(nextPageToken);
	    httpGet(url).then(function (response) {
	        nextPageToken = JSON.parse(response).nextPageToken;
	        var videos = JSON.parse(response).items;
	        var videoIds = '';
	        videos.forEach(function (item) {
	            videoIds += item.id.videoId + ',';
	        });
	        videoIds.length - 1;
	        var statisticURL = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + videoIds + '&key=' + cfgKey;
	        httpGet(statisticURL).then(function (responseStatistic) {
	            var statistic = JSON.parse(responseStatistic).items;
	            videos.forEach(function (item) {
	                var statisticItem = _.find(statistic, ['id', item.id.videoId]);
	                var playlistItem = new _model2.default(item, statisticItem);
	                (0, _render.renderList)(playlistItem);
	            });
	        }, function (error) {
	            console.error("Failed!", error);
	        });
	    }, function (error) {
	        console.error("Failed!", error);
	    });
	}
	
	function createURL(pageToken) {
	    var searchValue = document.querySelector('#searchValue').value;
	    var url = "https://www.googleapis.com/youtube/v3/search?pageToken=";
	    url += pageToken + '&part=snippet&maxResults=15&q=' + searchValue + '&key=' + cfgKey;
	    return url;
	}
	
	function httpGet(url) {
	    return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url, true);
	        xhr.onload = function () {
	            if (this.status == 200) {
	                resolve(this.response);
	            } else {
	                var error = new Error(this.statusText);
	                error.code = this.status;
	                reject(error);
	            }
	        };
	
	        xhr.onerror = function () {
	            reject(new Error("Network Error"));
	        };
	        xhr.send();
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PlaylistItem = function PlaylistItem(item, statistic) {
	    _classCallCheck(this, PlaylistItem);
	
	    this.title = item.snippet.title;
	    this.link = 'https://www.youtube.com/watch?v=' + item.id.videoId;
	    this.img = {
	        "default": item.snippet.thumbnails.default.url,
	        "medium": item.snippet.thumbnails.medium.url,
	        "high": item.snippet.thumbnails.medium.url
	    };
	    this.views = statistic ? statistic.statistics.viewCount : '-';
	    this.channelTitle = item.snippet.channelTitle;
	    this.publishedAt = item.snippet.publishedAt.replace('T', ' ').slice(0, -5);
	    this.description = item.snippet.description;
	};
	
	exports.default = PlaylistItem;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map
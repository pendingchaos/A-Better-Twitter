// ==UserScript==
// @name          A Better Twitter
// @namespace     http://userstyles.org
// @description	  This style removes "almost" all Twitter bullshit.
// @author        natuschaos
// @homepage      https://userstyles.org/styles/155039
// @include       http://twitter.com/*
// @include       https://twitter.com/*
// @include       http://*.twitter.com/*
// @include       https://*.twitter.com/*
// @run-at        document-start
// @version       0.20180518195051
// ==/UserScript==
(function() {var css = [
	"/*Centralizar as fotos.*/",
	".AdaptiveMedia-video,",
	".AdaptiveMedia-singlePhoto,",
	".AdaptiveMedia-doublePhoto,",
	".AdaptiveMedia-triplePhoto,",
	".AdaptiveMedia-quadPhoto,",
	".AdaptiveMedia-halfWidthPhoto,",
	".AdaptiveMedia-twoThirdsWidthPhoto,",
	".AdaptiveMedia-threeQuartersWidthPhoto,",
	".AdaptiveMedia-halfHeightPhoto,",
	".AdaptiveMedia-halfHeightPhotoContainer,",
	".AdaptiveMedia-thirdHeightPhoto,",
	".AdaptiveMedia-thirdHeightPhotoContainer,",
	".AdaptiveMedia-photoContainer img {",
	"    display: block !important;",
	"    position: static !important;",
	"    width: 100% !important;",
	"    height: auto !important",
	"}",
	"/*Janela*/",
	".AdaptiveMedia,",
	".AdaptiveMedia-video {",
	"    max-height: none !important;",
	"    max-width: 100% !important;",
	"    min-height: 100% !important",
	"}",
	"/*Remover bullshit*/",
	".moments,",
	"li[data-suggestion-json*=\"ActivityTweet\"],",
	"li.promoted-trend,",
	"li.promoted-account,",
	"div.promoted-tweet,",
	"div.flex-module.trends-container,",
	"div.flexmodule.trends,",
	"div.module.trends,",
	"div.module.roaming-module.wtf-module.js-wtf-module.has-content,",
	"div.Footer.module.roaming-module,",
	"div.ProfileWTFAndTrends,",
	"div.trends-inner,",
	"div.flex-module.import-prompt {",
	"    display: none !important",
	"}",
	"/*Não logado*/",
	"div.module.Trends.trends,",
	"div.RelatedUsers.module {",
	"    display: none !important",
	"}",
	"/*Correções do perfil*/",
	".DashboardProfileCard {",
	"	margin-bottom: -11px !important",
	"}",
	".ProfileCardStats {",
	"    text-align: center !important",
	"}",
	".wrapper-home {",
	"    width: 640px !important",
	"}",
	".stream-item.separated-module {",
	"    margin-top:    10px !important;",
	"    margin-bottom: 10px !important",
	"}",
	"  dashboardProfileCard-bg {",
	"    background-size: 110%;",
	"    height: 95px;",
	"}",
	"/*Largura da coluna principal*/",
	".content-main {",
	"    width: 100% !important;",
	"    margin: 0",
	"}",
	"/*Largura do perfil*/",
	".dashboard-left {",
	"    width: 100% !important;",
	"    height: 100% !important;",
	"}",
	"/*Fix para sugestões após seguir alguém*/",
	".ProfileClusterFollow {",
	"    padding: 14px 0 1px!important;",
	"    border-bottom: none !important",
	" }",
	"/*Número de favs*/",
	".ProfileTweet-actionCountForPresentation {",
	"    vertical-align: middle !important",
	"    }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();

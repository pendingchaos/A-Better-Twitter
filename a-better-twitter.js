@-moz-document domain("twitter.com"), domain("mobile.twitter.com"), domain("www.twitter.com") {
/*Centralizar as fotos.*/

.AdaptiveMedia-singlePhoto,
.AdaptiveMedia-doublePhoto,
.AdaptiveMedia-triplePhoto,
.AdaptiveMedia-quadPhoto,
.AdaptiveMedia-halfWidthPhoto,
.AdaptiveMedia-twoThirdsWidthPhoto,
.AdaptiveMedia-threeQuartersWidthPhoto,
.AdaptiveMedia-halfHeightPhoto,
.AdaptiveMedia-halfHeightPhotoContainer,
.AdaptiveMedia-thirdHeightPhoto,
.AdaptiveMedia-thirdHeightPhotoContainer,
.AdaptiveMedia-photoContainer img {
    display: block !important;
    position: static !important;
    width: 100% !important;
    height: auto !important
}
/*Janela*/

.AdaptiveMedia {
    max-height: none !important;
    max-width: 100% !important;
    min-height: 100px !important
}
/*Remover bullshit*/

.moments,
li[data-suggestion-json*="ActivityTweet"],
li.promoted-trend,
li.promoted-account,
div.promoted-tweet,
div.flex-module.trends-container,
div.flexmodule.trends,
div.module.trends,
div.module.roaming-module.wtf-module.js-wtf-module.has-content,
div.Footer.module.roaming-module,
div.ProfileWTFAndTrends,
div.trends-inner,
div.flex-module.import-prompt {
    display: none !important
}
/*Não logado*/

span.Icon.Icon--bird.Icon--large,
div.module.Trends.trends,
div.RelatedUsers.module {
    display: none !important
}
}

"use strict";





var md5=require('js-md5');

function getMediaWikiHashPathSync(filename){
var safe=filename.replace(/ /g,'_');
var hashHex=md5(safe);
return hashHex[0]+"/"+hashHex.substring(0,2);
}

function getMediaWikiImageUrl(filename,opts){
var domain=(opts==null?void 0:opts.domain)||'skylanders';
var safe=filename.replace(/ /g,'_');
var path=getMediaWikiHashPathSync(safe);
var cb=opts!=null&&opts.cb?"?cb="+opts.cb:'';
return"https://static.wikia.nocookie.net/"+domain+"/images/"+path+"/"+safe+"/revision/latest"+cb;
}












if(typeof window!=='undefined'){

window.getMediaWikiImageUrl=getMediaWikiImageUrl;
window.getMediaWikiHashPathSync=getMediaWikiHashPathSync;

if(!window.Dex)window.Dex={};
window.Dex.getMediaWikiImageUrl=getMediaWikiImageUrl;
}
//# sourceMappingURL=assets.js.map
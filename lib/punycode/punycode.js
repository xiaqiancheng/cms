!function(e){function o(e){throw RangeError(O[e])}function n(e,o){for(var n=e.length,t=[];n--;)t[n]=o(e[n]);return t}function t(e,o){var t=e.split("@"),r="";return t.length>1&&(r=t[0]+"@",e=t[1]),r+n((e=e.replace(F,".")).split("."),o).join(".")}function r(e){for(var o,n,t=[],r=0,u=e.length;r<u;)(o=e.charCodeAt(r++))>=55296&&o<=56319&&r<u?56320==(64512&(n=e.charCodeAt(r++)))?t.push(((1023&o)<<10)+(1023&n)+65536):(t.push(o),r--):t.push(o);return t}function u(e){return n(e,function(e){var o="";return e>65535&&(o+=L((e-=65536)>>>10&1023|55296),e=56320|1023&e),o+=L(e)}).join("")}function i(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:w}function f(e,o){return e+22+75*(e<26)-((0!=o)<<5)}function c(e,o,n){var t=0;for(e=n?T(e/C):e>>1,e+=T(e/o);e>S*b>>1;t+=w)e=T(e/S);return T(t+(S+1)*e/(e+y))}function l(e){var n,t,r,f,l,s,d,p,a,h,v=[],y=e.length,C=0,I=j,E=m;for((t=e.lastIndexOf(A))<0&&(t=0),r=0;r<t;++r)e.charCodeAt(r)>=128&&o("not-basic"),v.push(e.charCodeAt(r));for(f=t>0?t+1:0;f<y;){for(l=C,s=1,d=w;f>=y&&o("invalid-input"),((p=i(e.charCodeAt(f++)))>=w||p>T((g-C)/s))&&o("overflow"),C+=p*s,a=d<=E?x:d>=E+b?b:d-E,!(p<a);d+=w)s>T(g/(h=w-a))&&o("overflow"),s*=h;E=c(C-l,n=v.length+1,0==l),T(C/n)>g-I&&o("overflow"),I+=T(C/n),C%=n,v.splice(C++,0,I)}return u(v)}function s(e){var n,t,u,i,l,s,d,p,a,h,v,y,C,I,E,F=[];for(y=(e=r(e)).length,n=j,t=0,l=m,s=0;s<y;++s)(v=e[s])<128&&F.push(L(v));for(u=i=F.length,i&&F.push(A);u<y;){for(d=g,s=0;s<y;++s)(v=e[s])>=n&&v<d&&(d=v);for(d-n>T((g-t)/(C=u+1))&&o("overflow"),t+=(d-n)*C,n=d,s=0;s<y;++s)if((v=e[s])<n&&++t>g&&o("overflow"),v==n){for(p=t,a=w;h=a<=l?x:a>=l+b?b:a-l,!(p<h);a+=w)E=p-h,I=w-h,F.push(L(f(h+E%I,0))),p=T(E/I);F.push(L(f(p,0))),l=c(t,C,u==i),t=0,++u}++t,++n}return F.join("")}var d="object"==typeof exports&&exports&&!exports.nodeType&&exports,p="object"==typeof module&&module&&!module.nodeType&&module,a="object"==typeof global&&global;a.global!==a&&a.window!==a&&a.self!==a||(e=a);var h,v,g=2147483647,w=36,x=1,b=26,y=38,C=700,m=72,j=128,A="-",I=/^xn--/,E=/[^\x20-\x7E]/,F=/[\x2E\u3002\uFF0E\uFF61]/g,O={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},S=w-x,T=Math.floor,L=String.fromCharCode;if(h={version:"1.3.2",ucs2:{decode:r,encode:u},decode:l,encode:s,toASCII:function(e){return t(e,function(e){return E.test(e)?"xn--"+s(e):e})},toUnicode:function(e){return t(e,function(e){return I.test(e)?l(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return h});else if(d&&p)if(module.exports==d)p.exports=h;else for(v in h)h.hasOwnProperty(v)&&(d[v]=h[v]);else e.punycode=h}(this);
//# sourceMappingURL=punycode.js.map
(this["webpackJsonpsorting-algorithms"]=this["webpackJsonpsorting-algorithms"]||[]).push([[0],{102:function(n,e,t){},103:function(n,e,t){"use strict";t.r(e);var a=t(5),r=t(2),i=t(0),o=t.n(i),l=t(14),c=t.n(l),u=t(3);function d(){var n=Object(r.a)(["\n    font-size: 32px;\n    font-weight: bold;\n    color: #003d34;\n    letter-spacing: 0.25em;\n    @supports (-webkit-text-stroke: 1px black) {\n        -webkit-text-stroke: 1px black;\n        -webkit-text-fill-color: #94ebd8;\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 1em 0;\n    background-color: #94ebd8;\n    color: #003d34;\n    text-align: center;\n"]);return s=function(){return n},n}var f=u.a.header(s()),b=u.a.h1(d()),m=function(n){return o.a.createElement(f,null,o.a.createElement(b,null,"Sorting algorithms"))},h=t(10),p=t(4);function g(){var n=Object(r.a)(["\n    text-align: center;\n"]);return g=function(){return n},n}function x(){var n=Object(r.a)(["\n    font-size: 16px;\n    text-align: justify;\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n    -webkit-appearance: none;\n    appearance: none;\n    height: 10px;\n    background: linear-gradient(to left, #94ebd8, #00b349);\n    outline: none;\n    opacity: 0.7;\n    padding: 0;\n    transition: opacity .2s;\n    box-sizing: border-box;\n    border: 2px solid #FFFFFF;\n    transition: opacity 0.5s;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 15px;\n        height: 15px;\n        border-radius: 50%;\n        border: 2px solid #FFFFFF;\n        background: #4CAF50;\n        cursor: pointer;\n    }\n\n    &[disabled]::-webkit-slider-thumb {\n        cursor: not-allowed;\n    }\n\n    &[disabled] {\n        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);\n        background-size: 60px 60px;\n        background-color: #94ebd8;\n        cursor: not-allowed;\n        opacity: 0.5;\n    }\n"]);return v=function(){return n},n}function j(){var n=Object(r.a)(["\n    width: 100%;\n    margin: 0.5em 0;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n    padding: 10px 20px;\n    color: #FFFFFF;\n    font-weight: bold;\n    font-size: 16px;\n    background-color: #94ebd8;\n    border: 5px solid #FFFFFF;\n    border-radius: 10px;\n    transition: background-color 0.5s;\n\n    &:hover {\n        background-color: #00b349;\n    }\n\n    &[disabled] {\n        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);\n        background-size: 60px 60px;\n        background-color: #94ebd8;\n        cursor: not-allowed;\n        opacity: 0.7;\n    }\n\n    @media screen and (max-width: 640px) {\n        display: block;\n        width: 100%;\n        margin-bottom: 0.5em;\n    }\n"]);return O=function(){return n},n}function w(){var n=Object(r.a)(["\n    display: flex;\n    margin: 0.5em;\n    flex-direction: row;\n    justify-content: space-between;\n\n    @media screen and (max-width: 480px) {\n        display: block;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)(["\n    display: block;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    padding: 3px 10px;\n    width: 100%;\n    margin: auto 0;\n\n    &[disabled] {\n        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);\n        background-size: 60px 60px;\n        background-color: #94ebd8;\n        cursor: not-allowed;\n        opacity: 0.7;\n    }\n"]);return y=function(){return n},n}function E(){var n=Object(r.a)(["\n    text-align: center;\n"]);return E=function(){return n},n}function k(){var n=Object(r.a)(["\n    display: block;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    padding: 3px 10px;\n    width: 100%;\n    margin: auto 0;\n"]);return k=function(){return n},n}function F(){var n=Object(r.a)(["\n    display: block;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    padding: 3px 10px;\n    width: 100%;\n    margin: auto 0;\n\n    &[disabled] {\n        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);\n        background-size: 60px 60px;\n        background-color: #94ebd8;\n        cursor: not-allowed;\n        opacity: 0.7;\n    }\n"]);return F=function(){return n},n}function T(){var n=Object(r.a)(["\n    display: inline-block;\n    width: 50%;\n    font-size: 0;\n    height: 100%;\n    vertical-align: middle;\n\n    @media screen and (max-width: 480px) {\n        display: block;\n        width: 100%;\n        text-align: center;\n    }\n\n    @media screen and (max-width: 320px) {\n        display: block;\n        width: 100%;\n    }\n"]);return T=function(){return n},n}function z(){var n=Object(r.a)(["\n    display: block;\n    margin: 0.5em;\n    box-sizing: border-box;\n    font-size: 0;\n"]);return z=function(){return n},n}function M(){var n=Object(r.a)(["\n    text-align: center;\n"]);return M=function(){return n},n}function S(){var n=Object(r.a)(["\n    font-size: 24px;\n    margin: 0.5em 0;\n"]);return S=function(){return n},n}function C(){var n=Object(r.a)(["\n    display: block;\n    margin: 0.5em;\n"]);return C=function(){return n},n}function D(){var n=Object(r.a)(["\n    display: block;\n    width: 100%;\n"]);return D=function(){return n},n}var A=u.a.form(D()),N=u.a.section(C()),B=u.a.h2(S()),R=Object(u.a)(B)(M()),V=u.a.div(z()),P=u.a.div(T()),L=u.a.input(F()),Y=u.a.label(k()),I=Object(u.a)(Y)(E()),q=u.a.select(y()),W=u.a.section(w()),H=u.a.button(O()),J=u.a.div(j()),U=Object(u.a)(L)(v()),X=u.a.p(x()),$=Object(u.a)(X)(g()),G=function(n){return o.a.createElement(A,null,o.a.createElement(N,null,o.a.createElement(R,null,"Sorting algorithms form"),o.a.createElement(X,null,"Please, select sorting type and add few numbers to check how diffierent sorting types work. You can let number input field empty and press 'Add number', default value will be added.")),o.a.createElement(N,null,o.a.createElement(P,null,o.a.createElement(V,null,o.a.createElement(P,null,o.a.createElement(Y,{htmlFor:"inputNum"},"Enter number:")),o.a.createElement(P,null,o.a.createElement(L,{required:!0,id:"inputNum",value:n.enteredNumber,type:"input",placeholder:"E.g. ".concat(n.defaultNumber),onChange:function(e){return n.handleChangeInputValue(e.target.value)},disabled:2===n.btnDisabled})))),o.a.createElement(P,null,o.a.createElement(V,null,o.a.createElement(P,null,o.a.createElement(Y,{htmlFor:"sortType"},"Select sort type:")),o.a.createElement(P,null,o.a.createElement(q,{required:!0,id:"sortType",value:n.selectedSortType,onChange:function(e){return n.handleChangeSortType(e.target.value)},disabled:2===n.btnDisabled},n.sortTypes.map((function(n){return o.a.createElement("option",{disabled:"selectType"===n.sortTypeValue,key:n.sortTypeValue,value:n.sortTypeValue},n.sortTypeName)}))))))),o.a.createElement(W,null,o.a.createElement(H,{disabled:2===n.btnDisabled,type:"submit",onClick:function(e){return n.handleAddNumber(e)}},"Add number"),o.a.createElement(H,{disabled:2===n.btnDisabled,type:"button",onClick:function(e){return n.handleAddRandomTen(e)}},"Add 10 random numbers"),o.a.createElement(H,{disabled:2===n.btnDisabled,type:"button",onClick:function(e){return n.handleSortBtnClick(e,1)}},"Sort numbers"),o.a.createElement(H,{disabled:2===n.btnDisabled,type:"reset",onClick:function(e){return n.handleClearList(e)}},"Clear list")),o.a.createElement(N,null,o.a.createElement(I,{htmlFor:"inputDuration"},"Time per one action (comparison, changing, setting sorted etc.) (min 4ms):"),o.a.createElement(J,null,o.a.createElement(U,{id:"inputDuration",value:n.ms,type:"range",step:"2",min:"4",max:"2000",placeholder:"E.g. ".concat(n.ms),onChange:function(e){return n.handleMSChange(e)},disabled:2===n.btnDisabled})),o.a.createElement($,null,"Current action time: ",n.ms," ms.")),"selectType"!==n.selectedSortType?o.a.createElement(N,null,o.a.createElement(X,null,n.sortTypes.find((function(e){return n.selectedSortType===e.sortTypeValue})).sortTypeDescription)):null)},K=t(6);function Q(){var n=Object(r.a)(["\n    background-color: #003d34; \n    border: 5px solid #003d34;\n"]);return Q=function(){return n},n}function Z(){var n=Object(r.a)(["\n    background-color: #00787a; \n    border: 5px solid #003d34;\n    animation: "," ","ms ease 0s 1 forwards;\n"]);return Z=function(){return n},n}function _(){var n=Object(r.a)(["\n    background-color: #00787a; \n    border: 5px solid #003d34;\n    animation: "," ","ms ease 0s 1 forwards;\n"]);return _=function(){return n},n}function nn(){var n=Object(r.a)(["\n    background-color: #94ebd8; \n    border: 5px solid #003d34;\n"]);return nn=function(){return n},n}function en(){var n=Object(r.a)(["\n    background-color: #00b349; \n    border: 5px solid #003d34;\n"]);return en=function(){return n},n}function tn(){var n=Object(r.a)(["\n    background-color: #00b349; \n    border: 5px solid #003d34;\n    animation: 1 1s ",";\n"]);return tn=function(){return n},n}function an(){var n=Object(r.a)(["\n    height: 100px;\n    width: 100px;\n    margin: 10px;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 10px;\n    overflow: hidden;\n    position: relative;\n"]);return an=function(){return n},n}function rn(){var n=Object(r.a)(["\n    from {\n        left: 0;\n    }\n\n    to {\n        left: 120px;\n    }\n"]);return rn=function(){return n},n}function on(){var n=Object(r.a)(["\n    from {\n        left: 0;\n    }\n\n    to {\n        left: -120px;\n    }\n"]);return on=function(){return n},n}function ln(){var n=Object(r.a)(["\n    display: block;\n    position: relative;\n    width: 100%;\n    word-wrap: break-word;\n    margin: 0;\n    text-align: center;\n    top: 50%;\n    transform: translateY(-50%);\n    font-weight: bold;\n    color: #FFFFFF;\n"]);return ln=function(){return n},n}function cn(){var n=Object(r.a)(["",""]);return cn=function(){return n},n}var un=Object(u.b)(cn(),K.bounceIn),dn=u.a.p(ln()),sn=Object(u.b)(on()),fn=Object(u.b)(rn()),bn=u.a.section(an()),mn=Object(u.a)(bn)(tn(),un),hn=Object(u.a)(bn)(en()),pn=Object(u.a)(bn)(nn()),gn=Object(u.a)(bn)(_(),sn,(function(n){return n.ms})),xn=Object(u.a)(bn)(Z(),fn,(function(n){return n.ms})),vn=Object(u.a)(bn)(Q()),jn=function(n){switch(!0){case"initial"===n.state:return o.a.createElement(mn,{state:n.state},o.a.createElement(dn,null,n.value));case"checked"===n.state:return o.a.createElement(hn,{state:n.state},o.a.createElement(dn,null,n.value));case"selected"===n.state:return o.a.createElement(pn,{state:n.state},o.a.createElement(dn,null,n.value));case"changeToLeft"===n.state:return o.a.createElement(gn,{state:n.state,ms:n.ms},o.a.createElement(dn,null,n.value));case"changeToRight"===n.state:return o.a.createElement(xn,{state:n.state,ms:n.ms},o.a.createElement(dn,null,n.value));case"sorted"===n.state:return o.a.createElement(vn,{state:n.state},o.a.createElement(dn,null,n.value));default:return null}};function On(){var n=Object(r.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    box-sizing: border-box;\n"]);return On=function(){return n},n}var wn=u.a.section(On()),yn=function(n){return o.a.createElement(wn,null,n.numberArray.map((function(e){return o.a.createElement(jn,{key:e.id,value:e.value,state:e.state,ms:n.ms})})))};function En(){var n=Object(r.a)(["\n    text-align: center;\n    padding: 1em 0;\n"]);return En=function(){return n},n}function kn(){var n=Object(r.a)(["\n    font-size: 18px;\n"]);return kn=function(){return n},n}function Fn(){var n=Object(r.a)(["\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    color: #003d34;\n    text-align: center;\n    overflow: hidden;\n"]);return Fn=function(){return n},n}var Tn=u.a.section(Fn()),zn=u.a.h3(kn()),Mn=Object(u.a)(zn)(En()),Sn=function(n){return o.a.createElement(Tn,null,o.a.createElement(Mn,null,"Container"),o.a.createElement(yn,{numberArray:n.numberArray,ms:n.ms}))};function Cn(){var n=Object(r.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    & li {\n        position: absolute;\n        display: block;\n        list-style: none;\n        width: 20px;\n        height: 20px;\n        background: rgba(255, 255, 255, 0.2);\n        animation: "," 25s linear infinite;\n        bottom: -150px;\n    }\n    \n    & li:nth-child(1) {\n        left: 25%;\n        width: 80px;\n        height: 80px;\n        animation-delay: 0s;\n        animation-duration: 25s;\n    }\n    \n    \n    & li:nth-child(2) {\n        left: 10%;\n        width: 20px;\n        height: 20px;\n        animation-delay: 2s;\n        animation-duration: 12s;\n    }\n    \n    & li:nth-child(3) {\n        left: 70%;\n        width: 20px;\n        height: 20px;\n        animation-delay: 4s;\n        animation-duration: 25s;\n    }\n    \n    & li:nth-child(4) {\n        left: 40%;\n        width: 60px;\n        height: 60px;\n        animation-delay: 0s;\n        animation-duration: 18s;\n    }\n    \n    & li:nth-child(5) {\n        left: 65%;\n        width: 20px;\n        height: 20px;\n        animation-delay: 0s;\n        animation-duration: 25s;\n    }\n    \n    & li:nth-child(6) {\n        left: 75%;\n        width: 110px;\n        height: 110px;\n        animation-delay: 3s;\n        animation-duration: 18s;\n    }\n    \n    & li:nth-child(7) {\n        left: 35%;\n        width: 150px;\n        height: 150px;\n        animation-delay: 7s;\n        animation-duration: 25s;\n    }\n    \n    & li:nth-child(8) {\n        left: 50%;\n        width: 25px;\n        height: 25px;\n        animation-delay: 15s;\n        animation-duration: 45s;\n    }\n    \n    & li:nth-child(9) {\n        left: 20%;\n        width: 15px;\n        height: 15px;\n        animation-delay: 2s;\n        animation-duration: 35s;\n    }\n    \n    & li:nth-child(10) {\n        left: 85%;\n        width: 150px;\n        height: 150px;\n        animation-delay: 0s;\n        animation-duration: 11s;\n    }\n    \n    & li:nth-child(11) {\n        left: 80%;\n        width: 15px;\n        height: 15px;\n        animation-delay: 2s;\n        animation-duration: 22s;\n    }\n\n    & li:nth-child(12) {\n        left: 15%;\n        width: 40px;\n        height: 40px;\n        animation-delay: 10s;\n        animation-duration: 15s;\n    }\n\n    & li:nth-child(13) {\n        left: 70%;\n        width: 60px;\n        height: 60px;\n        animation-delay: 8s;\n        animation-duration: 35s;\n    }\n\n    & li:nth-child(14) {\n        left: 35%;\n        width: 120px;\n        height: 120px;\n        animation-delay: 5s;\n        animation-duration: 28s;\n    }\n\n    & li:nth-child(15) {\n        left: 10%;\n        width: 80px;\n        height: 80px;\n        animation-delay: 12s;\n        animation-duration: 22s;\n    }\n\n    & li:nth-child(16) {\n        left: 15%;\n        width: 70px;\n        height: 70px;\n        animation-delay: 0s;\n        animation-duration: 24s;\n    }\n\n    & li:nth-child(17) {\n        left: 45%;\n        width: 45px;\n        height: 45px;\n        animation-delay: 1s;\n        animation-duration: 45s;\n    }\n\n    & li:nth-child(18) {\n        left: 65%;\n        width: 65px;\n        height: 65px;\n        animation-delay: 6s;\n        animation-duration: 20s;\n    }\n\n    & li:nth-child(19) {\n        left: 50%;\n        width: 50px;\n        height: 50px;\n        animation-delay: 5s;\n        animation-duration: 18s;\n    }\n\n    & li:nth-child(20) {\n        left: 10%;\n        width: 30px;\n        height: 30px;\n        animation-delay: 8s;\n        animation-duration: 13s;\n    }\n\n    & p {\n        position: absolute;\n        display: block;\n        animation: "," 30s linear infinite;\n        color: #FFFFFF99;\n        bottom: -150px;\n    }\n    \n    & p:nth-child(21) {\n        left: 5%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 3s;\n        animation-duration: 28s;\n    }\n    \n    & p:nth-child(22) {\n        left: 10%;\n        font-size: 40px;\n        font-weight: bold;\n        animation-delay: 8s;\n        animation-duration: 19s;\n    }\n    \n    & p:nth-child(23) {\n        left: 15%;\n        font-size: 48px;\n        font-weight: bold;\n        animation-delay: 1s;\n        animation-duration: 18s;\n    }\n    \n    & p:nth-child(24) {\n        left: 20%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 5s;\n        animation-duration: 30s;\n    }\n    \n    & p:nth-child(25) {\n        left: 25%;\n        font-size: 24px;\n        font-weight: bold;\n        animation-delay: 0s;\n        animation-duration: 18s;\n    }\n    \n    & p:nth-child(26) {\n        left: 30%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 3s;\n        animation-duration: 18s;\n    }\n    \n    & p:nth-child(27) {\n        left: 35%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 5s;\n        animation-duration: 18s;\n    }\n    \n    & p:nth-child(28) {\n        left: 40%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 15s;\n        animation-duration: 45s;\n    }\n    \n    & p:nth-child(29) {\n        left: 45%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 2s;\n        animation-duration: 35s;\n    }\n    \n    & p:nth-child(30) {\n        left: 50%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 0s;\n        animation-duration: 11s;\n    }\n    \n    & p:nth-child(31) {\n        left: 55%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 2s;\n        animation-duration: 22s;\n    }\n\n    & p:nth-child(32) {\n        left: 60%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 10s;\n        animation-duration: 15s;\n    }\n\n    & p:nth-child(33) {\n        left: 65%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 8s;\n        animation-duration: 35s;\n    }\n\n    & p:nth-child(34) {\n        left: 70%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 5s;\n        animation-duration: 28s;\n    }\n\n    & p:nth-child(35) {\n        left: 75%;\n        font-size: 32px;\n        font-weight: bold;\n        animation-delay: 12s;\n        animation-duration: 22s;\n    }\n\n    & p:nth-child(36) {\n        left: 80%;\n        font-size: 48px;\n        font-weight: bold;\n        animation-delay: 16s;\n        animation-duration: 24s;\n    }\n\n    & p:nth-child(37) {\n        left: 85%;\n        font-size: 36px;\n        font-weight: bold;\n        animation-delay: 1s;\n        animation-duration: 45s;\n    }\n\n    & p:nth-child(38) {\n        left: 90%;\n        font-size: 28px;\n        font-weight: bold;\n        animation-delay: 6s;\n        animation-duration: 20s;\n    }\n\n    & p:nth-child(39) {\n        left: 95%;\n        font-size: 44px;\n        font-weight: bold;\n        animation-delay: 5s;\n        animation-duration: 18s;\n    }\n\n    & p:nth-child(40) {\n        left: 60%;\n        font-size: 40px;\n        font-weight: bold;\n        animation-delay: 12s;\n        animation-duration: 13s;\n    }\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(r.a)(["\n    0% {\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateY(-100vh) rotate(720deg);\n        opacity: 0;\n    }\n"]);return Dn=function(){return n},n}function An(){var n=Object(r.a)(["\n    0% {\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n\n    100% {\n        transform: translateY(-100vh) rotate(720deg);\n        opacity: 0;\n        border-radius: 25%;\n    }\n"]);return An=function(){return n},n}function Nn(){var n=Object(r.a)(["\n    background: #00b349;\n    background: linear-gradient(to left, #00b349, #94ebd8);\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    display: flex;\n    width: 100%;\n    height: 100%;\n"]);return Nn=function(){return n},n}var Bn=u.a.div(Nn()),Rn=Object(u.b)(An()),Vn=Object(u.b)(Dn()),Pn=u.a.div(Cn(),Rn,Vn),Ln=o.a.memo((function(n){return o.a.createElement(Bn,null,o.a.createElement(Pn,null,o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3)),o.a.createElement("p",null,Math.round(2e3*Math.random()-1e3))))}));function Yn(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 960px;\n    width: 100%;\n    box-sizing: border-box;\n    margin: 0 auto;\n    flex: 1 1 auto;\n    align-items: stretch;\n    height: 100%;\n    z-index: 1;\n"]);return Yn=function(){return n},n}function In(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    box-sizing: border-box;\n    margin: 0 auto;\n    flex: 1 1 auto;\n    align-items: stretch;\n    position: relative;\n"]);return In=function(){return n},n}var qn=u.a.main(In()),Wn=u.a.section(Yn()),Hn=function(){return Math.round(10*Math.random())>5?Math.round(2e3*Math.random()-1e3):2e3*Math.random()-1e3},Jn=function(){for(var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz$_^".split(""),e="",t=0;t<10;t++)e+=n[Math.floor(Math.random()*n.length)];return e},Un=function(n){var e=Object(i.useState)([]),t=Object(a.a)(e,2),r=t[0],l=t[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),d=u[0],s=u[1],f=Object(i.useState)(Hn()),b=Object(a.a)(f,2),m=b[0],g=b[1],x=Object(i.useState)(1e3),v=Object(a.a)(x,2),j=v[0],O=v[1],w=Object(i.useState)("selectType"),y=Object(a.a)(w,2),E=y[0],k=y[1],F=Object(i.useState)(1),T=Object(a.a)(F,2),z=T[0],M=T[1],S=function(){var n=r.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}));switch(l(n),!0){case"shakerSort"===E:A(n);break;case"bubbleSort"===E:D(n)}},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;M(1===n?2:1)},D=function(n){function e(n,e){if(!(n<=e))return l(i.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"sorted"})}))),void C(2);setTimeout(t,j,0,i.length-1-n,n,e)}function t(n,o,c,u){var d;n<o?(d=n,i=i.map((function(n,e){return e===d||e===d+1?Object(p.a)(Object(p.a)({},n),{},{state:"selected"}):"sorted"===n.state?Object(p.a)(Object(p.a)({},n),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},n),{},{state:"checked"})})),l(i),i[n].value>i[n+1].value?setTimeout(a,j,n,c,u,o):n===o-1?setTimeout(r,j,n,c,u):setTimeout(t,j,n+1,i.length-1-c,c,u)):setTimeout(e,0,c+1,u)}function a(n,e,a,o){i=i.map((function(e,t){switch(!0){case t===n:return Object(p.a)(Object(p.a)({},e),{},{state:"changeToRight"});case t===n+1:return Object(p.a)(Object(p.a)({},e),{},{state:"changeToLeft"});default:return"sorted"===e.state?Object(p.a)(Object(p.a)({},e),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},e),{},{state:"checked"})}})),l(i);var c=[i[n+1],i[n]];i[n]=c[0],i[n+1]=c[1],n===o-1?setTimeout(r,j,n,e,a):setTimeout(t,j,n+1,i.length-1-e,e,a)}function r(n,t,a){i=i.map((function(e,t){return t===n+1||"sorted"===e.state?Object(p.a)(Object(p.a)({},e),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},e),{},{state:"checked"})})),l(i),setTimeout(e,0,t+1,a)}var i=n.slice();e(0,i.length-1)},A=function(n){function e(n,t,l){if(t<l)a(o,t,"forward"),o[t].value>o[t+1].value?setTimeout(r,j,o,t,"forward",n,l):setTimeout(e,j,n,t+1,l);else{if(t===l&&t-n===1)return i(o,n,t,l),void C(2);i(o,n,t,l,"reverse")}}function t(n,e,l){if(n<e)a(o,e,"reverse"),o[e].value<o[e-1].value?setTimeout(r,j,o,e,"reverse",n,l):setTimeout(t,j,n,e-1,l);else{if(n===e&&l-e===1)return i(o,n,e,l),void C(2);i(o,n,e,l,"forward")}}function a(n,e,t){l(n.map((function(n,a){return a===e||a===("forward"===t?e+1:e-1)?Object(p.a)(Object(p.a)({},n),{},{state:"selected"}):"sorted"===n.state?Object(p.a)(Object(p.a)({},n),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},n),{},{state:"checked"})})))}function r(n,a,r,i,o){if("forward"===r){l(n.map((function(n,e){switch(!0){case e===a:return Object(p.a)(Object(p.a)({},n),{},{state:"changeToRight"});case e===a+1:return Object(p.a)(Object(p.a)({},n),{},{state:"changeToLeft"});default:return"sorted"===n.state?Object(p.a)(Object(p.a)({},n),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}})));var c=[n[a+1],n[a]];n[a]=c[0],n[a+1]=c[1],setTimeout(e,j,i,a+1,o)}else{l(n.map((function(n,e){switch(!0){case e===a:return Object(p.a)(Object(p.a)({},n),{},{state:"changeToLeft"});case e===a-1:return Object(p.a)(Object(p.a)({},n),{},{state:"changeToRight"});default:return"sorted"===n.state?Object(p.a)(Object(p.a)({},n),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}})));var u=[n[a-1],n[a]];n[a]=u[0],n[a-1]=u[1],setTimeout(t,j,i,a-1,o)}}function i(n,a,r,i,c){c?(o=n.map((function(n,e){return e===r||"sorted"===n.state?Object(p.a)(Object(p.a)({},n),{},{state:"sorted"}):Object(p.a)(Object(p.a)({},n),{},{state:"checked"})})),l(o),"forward"===c?setTimeout(e,j,a+1,r+1,i):setTimeout(t,j,a,i-1,i-1)):(o=n.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"sorted"})})),l(o))}var o=n.slice();e(0,0,o.length-1)};return o.a.createElement(qn,null,o.a.createElement(Ln,null),o.a.createElement(Wn,null,o.a.createElement(G,{defaultNumber:m,enteredNumber:d,handleAddNumber:function(e){e.preventDefault();var t=/^[\-]{0,1}[0-9]{1,}(([\.\,]{0,1}[0-9]{1,})|([0-9]{0,}))$/;if(""!==d&&t.test(d)){var a=r.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}));a=[].concat(Object(h.a)(a),[{id:Jn(),value:Number(d),state:"initial"}]),l(a),s(""),g(Hn())}else if(""===d||t.test(d)){var i=r.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}));i=[].concat(Object(h.a)(i),[{id:Jn(),value:Number(m),state:"initial"}]),l(i),s(""),g(Hn())}else n.handleShowModal("Please, enter correct number value (it can be positive decimal floating negative/non-negative number).")},handleChangeInputValue:function(n){s(n)},sortTypes:[{sortTypeValue:"selectType",sortTypeName:"Select type"},{sortTypeValue:"bubbleSort",sortTypeName:"Bubble Sort",sortTypeDescription:"Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of \u039f(n2) where n is the number of items."},{sortTypeValue:"shakerSort",sortTypeName:"Shaker Sort",sortTypeDescription:"Cocktail Sort is a variation of Bubble sort. The Bubble sort algorithm always traverses elements from left and moves the largest element to its correct position in first iteration and second largest in second iteration and so on. Cocktail Sort traverses through a given array in both directions alternatively."}],selectedSortType:E,handleChangeSortType:function(n){k(n)},handleAddRandomTen:function(n){n.preventDefault();for(var e=[],t=0;t<10;t++)e.push({id:Jn(),value:Number(Hn()),state:"initial"});var a=r.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{state:"checked"})}));a=[].concat(Object(h.a)(a),e),l(a)},handleClearList:function(n){n.preventDefault(),l([])},handleSortBtnClick:function(e,t){switch(e.preventDefault(),!0){case"bubbleSort"===E&&r.length>=2:case"shakerSort"===E&&r.length>=2:C(t),S();break;case("bubbleSort"===E||"shakerSort"===E)&&r.length<2:n.handleShowModal("Please, add at least two numbers to sorting container.");break;case"selectType"===E&&r.length<2:n.handleShowModal("Please, add at least two numbers to sorting container and select sort type.");break;case"selectType"===E&&r.length>=2:n.handleShowModal("Please, select sort type.")}},ms:j,handleMSChange:function(n){n.preventDefault(),O(Number(n.target.value))},btnDisabled:z,handleDisableBtn:C}),o.a.createElement(Sn,{numberArray:r,ms:j})))};function Xn(){var n=Object(r.a)(["\n    color: #003d34;\n"]);return Xn=function(){return n},n}function $n(){var n=Object(r.a)(["\n    font-size: 12px;\n    transition: all 1s;\n    &:hover {\n        font-size: 18px;\n    }\n"]);return $n=function(){return n},n}function Gn(){var n=Object(r.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 1em 0;\n    background-color: #00b349;\n    color: #003d34;\n    text-align: center;\n"]);return Gn=function(){return n},n}var Kn=u.a.footer(Gn()),Qn=u.a.h3($n()),Zn=u.a.a(Xn()),_n=function(n){return o.a.createElement(Kn,null,o.a.createElement(Qn,null,"This project uses ",o.a.createElement(Zn,{href:"https://reactjs.org/"},"React"),", ",o.a.createElement(Zn,{href:"https://styled-components.com/"},"styled-components")," and ",o.a.createElement(Zn,{href:"http://react-animations.herokuapp.com/"},"react-animations"),".",o.a.createElement("br",null),"This project was created with educational purposes. ",o.a.createElement(Zn,{href:"#"},"GitHub")))};function ne(){var n=Object(r.a)(["\n    font-size: 14px;\n    text-align: center;\n"]);return ne=function(){return n},n}function ee(){var n=Object(r.a)(["\n    padding: 10px;\n"]);return ee=function(){return n},n}function te(){var n=Object(r.a)(["\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translate(-5px, -5px)\n               rotate(45deg);\n    font-size: 24px;\n    font-weight: bold;\n    color: #00000099;\n    background-color: transparent;\n    border: none;\n    width: 24px;\n    height: 24px;\n    padding: 0;\n    box-sizing: border-box;\n"]);return te=function(){return n},n}function ae(){var n=Object(r.a)(["\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n"]);return ae=function(){return n},n}function re(){var n=Object(r.a)(["\n    padding: 3px 10px;\n    border-bottom: 1px solid #FFFFFF77;\n"]);return re=function(){return n},n}function ie(){var n=Object(r.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #FFFFFF77;\n    border: 1px solid #00000033;\n    border-radius: 5px;\n    box-sizing: border-box;\n    width: 80%;\n    height: 80%;\n    margin: auto;\n"]);return ie=function(){return n},n}function oe(){var n=Object(r.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: #FFFFFF99;\n    backdrop-filter: blur(5px);\n    z-index: 3;\n"]);return oe=function(){return n},n}var le=u.a.div(oe()),ce=u.a.div(ie()),ue=u.a.section(re()),de=u.a.h4(ae()),se=u.a.button(te()),fe=u.a.section(ee()),be=u.a.p(ne()),me=function(n){return o.a.createElement(le,{id:"modalPadding",onClick:function(e){("modalPadding"===e.target.id||"modalX"===e.target.id)&&n.handleShowModal()}},o.a.createElement(ce,null,o.a.createElement(ue,null,o.a.createElement(se,{id:"modalX",type:"button"},"+"),o.a.createElement(de,null,"Warning")),o.a.createElement(fe,null,o.a.createElement(be,null,n.modalText))))},he=o.a.memo((function(n){var e=Object(i.useState)("closed"),t=Object(a.a)(e,2),r=t[0],l=t[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),d=u[0],s=u[1],f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown message.";"closed"===r?(s(n),l("open")):(l("closed"),s(""))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(Un,{handleShowModal:f}),o.a.createElement(_n,null),"open"===r?o.a.createElement(me,{handleShowModal:f,modalText:d}):null)}));t(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(){var n=Object(r.a)(["\n    width: 220px;\n    height: 100px;\n    border: 5px solid #FFFFFF;\n    font-size: 36px;\n    animation: 1 1s ",";\n"]);return pe=function(){return n},n}function ge(){var n=Object(r.a)(["",""]);return ge=function(){return n},n}function xe(){var n=Object(r.a)(["\n    box-sizing: border-box;\n    width: 200px;\n    height: 80px;\n    border: 5px solid #FFFFFF;\n    background-color: #000000AA;\n    font-weight: bold;\n    color: #FFFFFF;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate( -50%, -50%);\n    z-index: 5;\n    border-radius: 40px;\n    font-size: 32px;\n    transition: all 0.5s;\n\n    &:hover {\n        width: 220px;\n        height: 100px;\n        border: 5px solid #FFFFFF;\n        font-size: 36px;\n    }\n"]);return xe=function(){return n},n}function ve(){var n=Object(r.a)(["\n    background-color: #94ebd8;\n    clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);\n    animation: 1 1s ",";\n"]);return ve=function(){return n},n}function je(){var n=Object(r.a)(["\n    background-color: #003d34;\n    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 60%);\n    animation: 1 1s ",";\n"]);return je=function(){return n},n}function Oe(){var n=Object(r.a)(["\n    bottom: 0;\n    background-color: #94ebd8;\n    clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);\n"]);return Oe=function(){return n},n}function we(){var n=Object(r.a)(["\n    top: 0;\n    background-color: #003d34;\n    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 60%);\n\n"]);return we=function(){return n},n}function ye(){var n=Object(r.a)(["",""]);return ye=function(){return n},n}function Ee(){var n=Object(r.a)(["",""]);return Ee=function(){return n},n}function ke(){var n=Object(r.a)(["\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    letter-spacing: 0.25em;\n    transform: translate(-50%, 0);\n    font-size: 48px;\n    font-weight: bold;\n    color: #FFFFFF;\n    letter-spacing: 0.25em;\n\n    @media screen and (max-width: 480px) {\n        font-size: 32px;\n    }\n"]);return ke=function(){return n},n}function Fe(){var n=Object(r.a)(["\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    position: absolute;\n    background: turquoise;\n"]);return Fe=function(){return n},n}function Te(){var n=Object(r.a)(["\n    min-height: 100vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #003d34;\n    overflow: hidden;\n"]);return Te=function(){return n},n}var ze=u.a.div(Te()),Me=u.a.div(Fe()),Se=u.a.h1(ke()),Ce=Object(u.b)(Ee(),K.slideOutDown),De=Object(u.b)(ye(),K.slideOutUp),Ae=Object(u.a)(Me)(we()),Ne=Object(u.a)(Me)(Oe()),Be=Object(u.a)(Me)(je(),De),Re=Object(u.a)(Me)(ve(),Ce),Ve=u.a.button(xe()),Pe=Object(u.b)(ge(),K.fadeOut),Le=Object(u.a)(Ve)(pe(),Pe),Ye=function(){var n=Object(i.useState)(1),e=Object(a.a)(n,2),t=e[0],r=e[1];return o.a.createElement(ze,null,function(){switch(!0){case 1===t:return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ae,null,o.a.createElement(Se,null,"Sorting algorithms")),o.a.createElement(Ne,null),o.a.createElement(Ve,{type:"button",onClick:function(n){return function(n){n.preventDefault(),r(2),setTimeout((function(){return r(3)}),1e3)}(n)}},"START"));case 2===t:return o.a.createElement(o.a.Fragment,null,o.a.createElement(Be,null),o.a.createElement(Re,null),o.a.createElement(Le,{type:"button",onClick:function(n){n.preventDefault()}},"START"));default:return null}}(),o.a.createElement(he,null))};c.a.render(o.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},18:function(n,e,t){n.exports=t(103)}},[[18,1,2]]]);
//# sourceMappingURL=main.163f119a.chunk.js.map
/*! For license information please see main.35da2356.chunk.js.LICENSE.txt */
(this["webpackJsonppdf-token"]=this["webpackJsonppdf-token"]||[]).push([[0],{245:function(e,t){},247:function(e,t){},250:function(e,t){},254:function(e,t){},255:function(e,t){},282:function(e,t){},284:function(e,t){},298:function(e,t){},300:function(e,t){},315:function(e,t){},333:function(e,t){},335:function(e,t){},352:function(e,t){},353:function(e,t){},423:function(e,t){},425:function(e,t){},431:function(e,t){},443:function(e,t){},446:function(e,t){},451:function(e,t){},529:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"idToken","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"shaCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"nftCreated","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"code","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownr","type":"address"},{"internalType":"uint256","name":"_idToken","type":"uint256"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(36),i=n.n(s),c=n(14),o=n.n(c),d=n(28),u=n(16),l=n(0);n(228).config();var p=new(n(231))("https://rinkeby.infura.io/v3/".concat("23b4f5d218d040f5a393da9c105b2450")),b=n(529),j="0xd61cAf6bc3167E8ED0ae0bA11338A13C400984A1",y=new p.eth.Contract(b,j),m=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,y.methods.getInfo().call();case 3:return n=e.sent,t[0]=n.account,t[1]=n.tokenId,t[2]=n.code256,t[3]=n.date,e.abrupt("return",{data:t,lastTokenCreated:n});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=v(n),t){e.next=5;break}return e.abrupt("return",{wallet:!0});case 5:return e.next=7,a;case 7:if(e.t0=e.sent.tkExist,1!=e.t0){e.next=10;break}return e.abrupt("return",{exist:!0});case 10:return r={to:j,from:t,data:y.methods.safeMint(t,n).encodeABI()},e.prev=11,e.next=14,window.ethereum.request({method:"eth_sendTransaction",params:[r]});case 14:return s=e.sent,e.abrupt("return",{txHash:s,success:!0});case 18:return e.prev=18,e.t1=e.catch(11),e.abrupt("return","");case 21:case"end":return e.stop()}}),e,null,[[11,18]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e){var t=new Date(1e3*e);return t.toLocaleDateString()+"    "+t.toLocaleTimeString()},O=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"Wallet Connected!!",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",0);case 15:case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"Billetera conectada"});case 9:return e.abrupt("return",{address:"",status:"Conecta tu billetera usando el boton 'Conectar billetera'."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(l.jsx)("span",{children:Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"Debe instalar MetaMask para poder operar en la plataforma."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.methods.exists(t).call();case 2:if(1!=e.sent){e.next=7;break}return e.abrupt("return",{tkExist:!0});case 7:return e.abrupt("return",{tkExist:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Token m\xe1s reciente "}),Object(l.jsx)("table",{id:"lastTokenTable",children:Object(l.jsx)("tbody",{children:e.currentToken?Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Cuenta"}),Object(l.jsx)("th",{children:"ID-Token"}),Object(l.jsx)("th",{children:"C\xf3digo"}),Object(l.jsx)("th",{children:"Fecha de creaci\xf3n"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{id:"owner",children:e.currentToken[0].substring(0,6)+"..."+e.currentToken[0].substring(38)}),Object(l.jsx)("td",{id:"tokenId",children:e.currentToken[1].slice(0,15)}),Object(l.jsx)("td",{id:"code",children:e.currentToken[2].slice(0,15)}),Object(l.jsx)("td",{id:"timestamp",children:x(e.currentToken[3])})]})]}):Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:"No hay tokens que mostrar"})})})})})]})})},g=n.p+"static/media/LogoSoferim.e9c55ba3.png",T=n(4),w=n(540),C=n(541),M=function(e){return Object(l.jsx)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",keyboard:!1,backdrop:"static",centered:!0,children:Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h4",{style:{color:"black"},children:"\xc9xito!! \ud83e\udd8a"}),Object(l.jsx)("div",{id:"form-div",children:Object(l.jsxs)("form",{id:"form-token",method:"post",action:"",children:[Object(l.jsxs)("div",{id:"div-form-input-container",children:[Object(l.jsx)("input",{type:"text",name:"idToken",readOnly:"readOnly",value:e.token[1],placeholder:"ID-Token"}),Object(l.jsx)("input",{type:"text",name:"owner",readOnly:"readOnly",value:e.token[0],placeholder:"Cuenta"}),Object(l.jsx)("input",{type:"text",name:"code",readOnly:"readOnly",value:e.token[2],placeholder:"C\xf3digo"}),Object(l.jsx)("input",{type:"text",name:"timestamp",readOnly:"readOnly",value:x(e.token[3]),placeholder:"Fecha de creaci\xf3n"}),Object(l.jsx)("input",{type:"text",name:"hash",readOnly:"readOnly",value:e.hash,placeholder:"Hash de transacci\xf3n"}),Object(l.jsx)("input",{type:"text",name:"idContract",readOnly:"readOnly",value:e.contract,style:{display:"none"}})]}),Object(l.jsxs)("div",{id:"div-form-text-container",children:[Object(l.jsx)("p",{children:e.message}),Object(l.jsx)("div",{id:"div-load",children:Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:"fab fa-ethereum","aria-hidden":"true",style:{fontSize:"1.7em",marginBottom:"0.6em",color:"black"}})," ",Object(l.jsx)("br",{})]})}),Object(l.jsx)("button",{id:"formButton",type:"submit",children:"OK"})]})]})})]})}))},I=function(e){return Object(l.jsxs)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h4",{children:"Oops!!"}),Object(l.jsx)("p",{children:e.message})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(C.a,{onClick:e.onHide,children:"Cerrar"})})]}))},S=function(e){return Object(l.jsxs)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",keyboard:!1,backdrop:"static",centered:!0,children:[Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h4",{children:"MetaMask desconectado"}),Object(l.jsx)("p",{children:e.message}),Object(l.jsxs)("p",{children:["Puedes descargar MetaMask ",Object(l.jsx)("a",{target:"blank",href:"https://metamask.io/download.html",onClick:e.onHide,children:"aqu\xed "}),"si no lo tienes instalado en tu navegador"]})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(C.a,{onClick:e.onHide,children:"Cerrar"})})]}))},H=function(e){return Object(l.jsxs)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h4",{children:"Operaci\xf3n rechazada"}),Object(l.jsx)("p",{children:e.message})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(C.a,{onClick:e.onHide,children:"Cerrar"})})]}))},E=function(e){return Object(l.jsxs)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h4",{children:"Ya existe \ud83e\udd14"}),Object(l.jsx)("p",{children:e.message})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(C.a,{onClick:e.onHide,children:"Cerrar"})})]}))},A=function(e){return Object(l.jsx)(w.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,keyboard:!1,backdrop:"static",children:Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)("h6",{children:e.message}),Object(l.jsx)("div",{id:"div-load",children:Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:"fab fa-ethereum","aria-hidden":"true",id:"eth-icon"})," ",Object(l.jsx)("br",{})]})})]})}))},B=function(){return Object(l.jsx)("div",{id:"listContainer",children:Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"\xbfCu\xe1nto tiempo tarda mi token en generarse?"}),Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:["Al generar un Token \xe9ste debe ser registrado en la red Ethereum. Esto toma cierto tiempo, que depender\xe1 de algunos factores como:",Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Congestionamiento de la red en el momento de creaci\xf3n del Token."}),Object(l.jsx)("li",{children:"Precio pagado por el gas. Puedes optar desde tu MetaMask por pagar un poco m\xe1s por la operaci\xf3n, esto har\xe1 que se ejecute m\xe1s r\xe1pido y, por lo tanto, estar\xe1 disponible antes para su consulta."})]})]})})]})})},F=n(55),q=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),c=i[0],p=i[1],b=Object(a.useState)(!1),j=Object(u.a)(b,2),y=j[0],x=j[1],v=Object(a.useState)(!1),T=Object(u.a)(v,2),w=T[0],C=T[1],q=Object(a.useState)(!1),N=Object(u.a)(q,2),D=N[0],z=N[1],_=Object(a.useState)(!1),J=Object(u.a)(_,2),P=J[0],L=J[1],G=Object(a.useState)(!1),K=Object(u.a)(G,2),R=K[0],U=K[1],V=Object(a.useState)(""),W=Object(u.a)(V,2),Y=W[0],Q=W[1],X=Object(a.useState)(""),Z=Object(u.a)(X,2),$=(Z[0],Z[1]),ee=Object(a.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(!1),se=Object(u.a)(re,2),ie=se[0],ce=se[1],oe=Object(a.useState)(""),de=Object(u.a)(oe,2),ue=de[0],le=de[1];Object(a.useEffect)(Object(d.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,n=t.address,a=t.status,Q(n),$(a),pe(),be(),p(document.getElementById("idInput").value),document.getElementById("inputHash").value="",le(document.getElementById("idContract").value);case 12:case"end":return e.stop()}}),e)}))),[]);var pe=function(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(Q(e[0]),$("\ud83d\udc46\ud83c\udffd Genera un nuevo token!.")):(Q(""),$("\ud83e\udd8a Conecta tu billetera de MetaMask con el bot\xf3n 'Conectar'."))})):$(Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{href:"https://metamask.io/download.html",children:"Debes intalar MetaMask en tu navegador para poder crear un token."})]}))},be=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,r(t.lastTokenCreated),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNaN(c)&&""!=c){e.next=4;break}C(!0),e.next=8;break;case 4:return e.next=6,h(Y,Number.parseInt(c));case 6:1==(t=e.sent).wallet?z(!0):1==t.exist?ce(!0):""==t?U(!0):1==t.success&&(ae(t.txHash),document.getElementById("inputHash").value=t.txHash,L(!0),setTimeout(Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:e.sent,L(!1),x(!0);case 5:case"end":return e.stop()}}),e)}))),15e3));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:0==(t=e.sent)?(z(!0),$(t.status)):($(t.status),Q(t.address));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"root",children:[Object(l.jsxs)("div",{id:"container",children:[Object(l.jsxs)("div",{id:"header",children:[Object(l.jsx)("img",{id:"logo",src:g,alt:"Soferim logo"}),Object(l.jsx)("button",{id:"walletButton",onClick:ye,children:Y.length>0?"Connected: "+String(Y).substring(0,6)+"..."+String(Y).substring(38):Object(l.jsx)("span",{children:"Conectar billetera"})})]}),Object(l.jsx)("input",{id:"inputHash",type:"hidden"}),Object(l.jsx)(k,{currentToken:n}),Object(l.jsx)("h3",{style:{paddingTop:"18px"},children:"ID de tu nuevo Token"}),Object(l.jsx)("div",{children:Object(l.jsx)("table",{id:"buttonsTable",children:Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("input",{id:"idInput",defaultValue:"C\xf3digo de Token",readOnly:"readOnly"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{id:"publish",onClick:je,children:"Generar"})}),Object(l.jsx)("input",{type:"hidden",id:"idContract",value:"1"}),Object(l.jsx)(I,{show:w,onHide:function(){return C(!1)},message:F.data.empty.message}),Object(l.jsx)(S,{show:D,onHide:function(){return z(!1)},message:F.data.metaNotInstalled.message}),Object(l.jsx)(H,{show:R,onHide:function(){return U(!1)},message:F.data.rejected.message}),Object(l.jsx)(M,{show:y,onHide:x,hash:ne,token:n,message:F.data.success.message,contract:ue}),Object(l.jsx)(E,{show:ie,onHide:function(){return ce(!1)},message:F.data.exists.message}),Object(l.jsx)(A,{show:P,onHide:function(){return L(!1)},message:F.data.load.message})]})})})})]}),Object(l.jsx)("div",{id:"helpSection",children:Object(l.jsx)(B,{id:"helpSection"})})]})};n(532),n(533);i.a.render(Object(l.jsx)(q,{}),document.getElementById("root"))},55:function(e){e.exports=JSON.parse('{"data":{"success":{"message":"Este es el detalle de tu token generado, para seguir con el proceso de creaci\xf3n presiona el bot\xf3n de Continuar."},"empty":{"message":"El ID del token no puede estar vac\xedo, por favor, ingresa un n\xfamero v\xe1lido."},"metaNotInstalled":{"message":"Parece que no tienes tu cuenta de MetaMask conectada, puedes conectarla con el boton Conectar billetera."},"rejected":{"message":"Operaci\xf3n cancelada \ud83d\ude25"},"exists":{"message":"El token que intenta crear ya existe, intente crear el token desde otro contrato."},"load":{"message":"El token est\xe1 siendo creado, por favor, aguarde unos momentos."}}}')}},[[534,1,2]]]);
//# sourceMappingURL=main.35da2356.chunk.js.map
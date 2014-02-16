var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function s(e,t){var s,i,r,n,o,a,h,c,u,p,l=t&&t.split("/"),d=g.map,f=d&&d["*"]||{};if(e&&"."===e.charAt(0))if(t){for(l=l.slice(0,l.length-1),e=l.concat(e.split("/")),c=0;c<e.length;c+=1)if(p=e[c],"."===p)e.splice(c,1),c-=1;else if(".."===p){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((l||f)&&d){for(s=e.split("/"),c=s.length;c>0;c-=1){if(i=s.slice(0,c).join("/"),l)for(u=l.length;u>0;u-=1)if(r=d[l.slice(0,u).join("/")],r&&(r=r[i])){n=r,o=c;break}if(n)break;!a&&f&&f[i]&&(a=f[i],h=c)}!n&&a&&(n=a,o=h),n&&(s.splice(0,o,n),e=s.join("/"))}return e}function i(t,s){return function(){return u.apply(e,x.call(arguments,0).concat([t,s]))}}function r(e){return function(t){return s(t,e)}}function n(e){return function(t){d[e]=t}}function o(s){if(t(f,s)){var i=f[s];delete f[s],y[s]=!0,c.apply(e,i)}if(!t(d,s)&&!t(y,s))throw new Error("No "+s);return d[s]}function a(e){var t,s=e?e.indexOf("!"):-1;return s>-1&&(t=e.substring(0,s),e=e.substring(s+1,e.length)),[t,e]}function h(e){return function(){return g&&g.config&&g.config[e]||{}}}var c,u,p,l,d={},f={},g={},y={},v=Object.prototype.hasOwnProperty,x=[].slice;p=function(e,t){var i,n=a(e),h=n[0];return e=n[1],h&&(h=s(h,t),i=o(h)),h?e=i&&i.normalize?i.normalize(e,r(t)):s(e,t):(e=s(e,t),n=a(e),h=n[0],e=n[1],h&&(i=o(h))),{f:h?h+"!"+e:e,n:e,pr:h,p:i}},l={require:function(e){return i(e)},exports:function(e){var t=d[e];return"undefined"!=typeof t?t:d[e]={}},module:function(e){return{id:e,uri:"",exports:d[e],config:h(e)}}},c=function(s,r,a,h){var c,u,g,v,x,m,k=[],w=typeof a;if(h=h||s,"undefined"===w||"function"===w){for(r=!r.length&&a.length?["require","exports","module"]:r,x=0;x<r.length;x+=1)if(v=p(r[x],h),u=v.f,"require"===u)k[x]=l.require(s);else if("exports"===u)k[x]=l.exports(s),m=!0;else if("module"===u)c=k[x]=l.module(s);else if(t(d,u)||t(f,u)||t(y,u))k[x]=o(u);else{if(!v.p)throw new Error(s+" missing "+u);v.p.load(v.n,i(h,!0),n(u),{}),k[x]=d[u]}g=a?a.apply(d[s],k):void 0,s&&(c&&c.exports!==e&&c.exports!==d[s]?d[s]=c.exports:g===e&&m||(d[s]=g))}else s&&(d[s]=a)},requirejs=require=u=function(t,s,i,r,n){return"string"==typeof t?l[t]?l[t](s):o(p(t,s).f):(t.splice||(g=t,s.splice?(t=s,s=i,i=null):t=e),s=s||function(){},"function"==typeof i&&(i=r,r=n),r?c(e,t,s,i):setTimeout(function(){c(e,t,s,i)},4),u)},u.config=function(e){return g=e,g.deps&&u(g.deps,g.callback),u},requirejs._defined=d,define=function(e,s,i){s.splice||(i=s,s=[]),t(d,e)||t(f,e)||(f[e]=[e,s,i])},define.amd={jQuery:!0}}(),define("../bower_components/almond/almond",function(){}),define("EaselJS",{}),define("TweenJS",{}),function(){define("Goal",["require","EaselJS","TweenJS"],function(){var e;return e=function(){function e(e,t,s,i,r){this.id=e,this.width=t,this.height=s,this.options=r,this.currencies=[],this.score=0,this.shape=new createjs.Container,this.goal=new createjs.Shape,this.scoreText=new createjs.Text(this.getScore(),'bold 32px "Press Start 2P"',"white"),this.valueText=new createjs.Text("  ",'bold 32px "Press Start 2P"',"white"),this.currency=new createjs.Text("   ",'bold 32px "Press Start 2P"',"white"),this.updateCurrencyAndValueX(),this.scoreText.regX=this.scoreText.getMeasuredWidth()/2,this.scoreText.regY=this.scoreText.getMeasuredLineHeight(),this.valueText.regY=this.scoreText.regY,this.currency.regY=this.scoreText.regY,this.scoreText.x=50+this.scoreText.regX,this.scoreText.y=16.25+this.scoreText.regY,this.valueText.y=this.scoreText.y,this.currency.y=this.scoreText.y,this.shape.regX=this.width/2,this.shape.regY=32.5,this.shape.x=this.shape.regX,this.goal.x=0,i?(this.shape.rotation=180,this.shape.y=this.shape.regY,this.goal.y=0):(this.shape.y=s-this.shape.regY,this.goal.y=s-75),this.shape.addChild(this.scoreText),this.shape.addChild(this.valueText),this.shape.addChild(this.currency)}return e.prototype.add=function(e){var t;return this.currencies.length&&e===this.currencies[this.currencies.length-1]?0===this.puckValue?this.puckValue=1:this.puckValue*=2:this.puckValue=0,t=this.score,this.score=Math.min(this.score+this.puckValue,this.options.winningScore),this.currencies.push(e),this.score>t&&(this.scoreText.set({text:this.getScore(e)}),this.animate(this.scoreText)),this.valueText.set({text:"X"+(2*this.puckValue||1)}),this.currency.set({text:e.text}),this.updateCurrencyAndValueX(),this.animate(this.valueText),this.goal.graphics.f(e.color).dr(0,0,this.width,75).ef()},e.prototype.updateCurrencyAndValueX=function(){return this.valueText.regX=this.valueText.getMeasuredWidth()/2,this.valueText.x=this.width-50-this.valueText.regX,this.currency.x=this.valueText.x-this.valueText.regX-25-this.currency.getMeasuredWidth()},e.prototype.animate=function(e){return createjs.Tween.get(e).to({scaleX:2,scaleY:2},this.options.scoreBounce,createjs.Ease.easeOut).to({scaleX:1,scaleY:1},this.options.scoreBounce,createjs.Ease.easeIn)},e.prototype.getScore=function(e){var t;return t=(null!=e?e.symbol:void 0)||"",t+=""+this.score+"M"},e}()})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define("Puck",["require","EaselJS","TweenJS"],function(){var t;return t=function(){function t(t,s,i,r){this.currency=i,this.options=r,this.release=e(this.release,this),this.move=e(this.move,this),this.press=e(this.press,this),this.shape=new createjs.Container,this.shape.x=t,this.shape.y=s,this.shape.scaleX=0,this.shape.scaleY=0,this.vel={x:0,y:0},this.circle=new createjs.Shape,this.text=new createjs.Text(this.currency.text,'bold 32px "Press Start 2P"'),this.text.rotation=359*Math.random(),this.text.regX=this.text.getMeasuredWidth()/2,this.text.regY=this.text.getMeasuredLineHeight()/3,this.shape.addChild(this.circle),this.shape.addChild(this.text),this.shape.hitArea=this.circle,this.render(),createjs.Tween.get(this.shape).to({scaleX:1,scaleY:1},this.options.puckFadeIn,createjs.Ease.elasticOut),this.shape.addEventListener("mousedown",this.press)}return t.prototype.press=function(e){return null==this.pointerId?(this.pointerId=e.pointerID,this.vel={x:0,y:0},this.tap={x:e.stageX,y:e.stageY},this.time=createjs.Ticker.getTime(),this.shape.addEventListener("pressmove",this.move),this.shape.addEventListener("pressup",this.release),this.render()):void 0},t.prototype.move=function(e){return this.pointerId===e.pointerID&&(this.vel.x=e.stageX-this.tap.x,this.vel.y=e.stageY-this.tap.y,this.tap.x=e.stageX,this.tap.y=e.stageY,this.shape.x+=this.vel.x,this.shape.y+=this.vel.y,this.time=createjs.Ticker.getTime(),this.options.debug)?this.render():void 0},t.prototype.release=function(e){return this.pointerId===e.pointerID?(delete this.pointerId,createjs.Ticker.getTime()-this.time>this.options.stationaryTime?this.vel={x:0,y:0}:(this.vel.x*=this.options.releaseBoost,this.vel.y*=this.options.releaseBoost),this.shape.removeEventListener("pressmove",this.move),this.shape.removeEventListener("pressup",this.release),this.render()):void 0},t.prototype.updatePosition=function(e){var t;return null==this.pointerId&&null!=this.vel?(this.shape.x+=this.vel.x,this.shape.y+=this.vel.y,t=1-this.options.friction/e,this.vel.x*=t,this.vel.y*=t):void 0},t.prototype.checkWallCollision=function(e){var t;return this.shape.x<this.options.puckRadius?t=this.options.puckRadius-this.shape.x:this.shape.x>e-this.options.puckRadius&&(t=e-this.options.puckRadius-this.shape.x),null!=t?(this.shape.x+=t,null!=this.pointerId&&(this.tap.x+=t),this.vel.x=-this.vel.x*this.options.collisionFriction,this.vel.y*=this.options.collisionFriction):void 0},t.prototype.checkPuckCollision=function(e){var t,s,i,r,n,o,a,h,c,u,p;return s=this.shape.x-e.shape.x,i=this.shape.y-e.shape.y,r=Math.sqrt(Math.pow(s,2)+Math.pow(i,2)),r<2*this.options.puckRadius?(t=Math.abs(s/r),c=Math.abs(i/r),u=this.vel.x*t+this.vel.y*t,p=-this.vel.x*c+this.vel.y*t,n=(2*this.options.puckRadius-r)/2,h=n/r,o=s*h,a=i*h,this.shape.x+=o,this.shape.y+=a,null!=this.pointerId&&(this.tap.x+=o,this.tap.y+=a),s>0&&i>0||0>s&&0>i?(u=-u*this.options.collisionFriction,p*=this.options.collisionFriction):(p=-p*this.options.collisionFriction,u*=this.options.collisionFriction),this.vel.x=u*t-p*c,this.vel.y=u*c+p*t):void 0},t.prototype.destroy=function(e){return this.shape.removeEventListener("pressmove",this.move),this.shape.removeEventListener("pressup",this.release),delete this.pointerId,this.render(),createjs.Tween.get(this.shape).to({scaleX:0,scaleY:0},this.options.puckFadeIn,createjs.Ease.circOut).call(function(){return null!=e?e():void 0})},t.prototype.render=function(){return null==this.pointerId?(this.circle.graphics.ss(2*this.options.puckBorder).s("white").f(this.currency.color).dc(0,0,this.options.puckRadius-this.options.puckBorder).es().ef(),this.text.set({color:"white"})):(this.circle.graphics.f("white").dc(0,0,this.options.puckRadius).ef(),this.text.set({color:this.currency.color})),this.options.debug&&(null!=this.vel&&this.circle.graphics.ef().ss(4).s("red").mt(0,0).lt(this.vel.x,this.vel.y),null!=this.tap)?this.circle.graphics.es().ss(0).f("green").dc(this.tap.x-this.shape.x,this.tap.y-this.shape.y,25):void 0},t}()})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define("GameBoard",["require","EaselJS","Goal","Puck"],function(t){var s,i,r;return i=t("Goal"),r=t("Puck"),s=function(){function t(t,s){this.stage=t,this.options=s,this.tick=e(this.tick,this),createjs.Ticker.addEventListener("tick",this.tick),this.pucks=[],this.player1=new i(1,this.stage.canvas.width,0,!0,this.options),this.player2=new i(2,this.stage.canvas.width,this.stage.canvas.height,!1,this.options),this.gameBoard=new createjs.Container,this.scoreBoard=new createjs.Container,this.scoreBoard.addChild(this.player1.shape),this.scoreBoard.addChild(this.player2.shape),this.stage.addChild(this.player1.goal),this.stage.addChild(this.player2.goal),this.stage.addChild(this.gameBoard),this.stage.addChild(this.scoreBoard),this.addPucks()}return t.prototype.checkRates=function(){var e,t;return this.pucks.length+1<this.options.maxPucks&&(t=(1-this.pucks.length/this.options.maxPucks)/this.options.probabilityDivider,e=Math.random(),t>e)?this.addPucks():void 0},t.prototype.addPucks=function(){var e,t,s,i,n,o,a,h,c,u,p;for(e=Math.floor(Math.random()*this.options.currencies.length),n=(e+1)%this.options.currencies.length,u=[e,n],p=[],h=0,c=u.length;c>h;h++)s=u[h],o=(this.stage.canvas.width-2*this.options.puckRadius)*Math.random()+this.options.puckRadius,a=this.stage.canvas.height/2+this.stage.canvas.height*(2*this.options.maxDistance*Math.random()-this.options.maxDistance),t=this.options.currencies[s],i=new r(o,a,t,this.options),this.pucks.push(i),p.push(this.gameBoard.addChild(i.shape));return p},t.prototype.checkGoal=function(){var e,t,s,i,r,n,o,a,h=this;for(t=[],o=this.pucks,s=0,r=o.length;r>s;s++)e=o[s],e.shape.y<0?(this.player1.add(e.currency),ga("send","event","game","goal:player 1","score:"+this.player1.score),t.push(e)):e.shape.y>this.stage.canvas.height&&(this.player2.add(e.currency),ga("send","event","game","goal:player 2","score:"+this.player2.score),t.push(e));for(a=[],i=0,n=t.length;n>i;i++)e=t[i],e.destroy(function(){return h.gameBoard.removeChild(e.shape)}),a.push(this.pucks.splice(this.pucks.indexOf(e),1));return a},t.prototype.checkVictory=function(){var e,t,s,i,r,n,o=this;if(this.player1.score>=this.options.winningScore?s=this.player1:this.player2.score>=this.options.winningScore&&(s=this.player2),null!=s){for(this.gameOver=!0,n=this.pucks,i=0,r=n.length;r>i;i++)t=n[i],t.destroy(function(){return o.gameBoard.removeChild(t.shape)});return e=s.flipped?-4:4,createjs.Tween.get(s.scoreText,{override:!0}).to({scaleX:4,scaleY:4,x:this.stage.canvas.width/2-s.scoreText.getMeasuredWidth()/2,y:-this.stage.canvas.height/2+e*s.scoreText.getMeasuredLineHeight()},1e3,createjs.Ease.easeOut).wait(1e3).call(function(){return o.options.winningCallback(s)})}},t.prototype.start=function(){return this.gameOver=!1,createjs.Ticker.setPaused(!1)},t.prototype.stop=function(){return createjs.Ticker.setPaused(!0)},t.prototype.tick=function(e){var t,s,i,r,n,o,a,h,c,u,p,l;if(!e.paused){if(!this.gameOver){for(this.checkRates(),u=this.pucks,r=0,a=u.length;a>r;r++)i=u[r],i.updatePosition(e.delta);for(p=this.pucks,t=n=0,h=p.length;h>n;t=++n)for(i=p[t],i.checkWallCollision(this.stage.canvas.width),l=this.pucks,o=0,c=l.length;c>o;o++)s=l[o],i!==s&&i.checkPuckCollision(s);this.checkGoal(),this.checkVictory()}return this.stage.update()}},t}()})}.call(this),define("SoundJS",{}),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define("RateHockey",["require","EaselJS","GameBoard","SoundJS"],function(t){var s,i;return s=t("GameBoard"),i=function(){function t(){this.showVictoryScreen=e(this.showVictoryScreen,this);var t,i;return createjs.Sound.initializeDefaultPlugins()?(t=document.getElementById("victory").dataset.audio,createjs.Sound.registerSound(t,"worldklass"),i=new createjs.Stage("canvas"),createjs.Touch.enable(i),createjs.Ticker.setFPS(60),createjs.Ticker.setPaused(!0),this.board=new s(i,{debug:!1,black:"#223",puckRadius:85,puckBorder:5,currencies:[{text:"EUR",symbol:"€",color:"#2b2"},{text:"GBP",symbol:"£",color:"#b22"},{text:"USD",symbol:"$",color:"#22b"}],winningCallback:this.showVictoryScreen,winningScore:75,friction:.15,collisionFriction:.8,releaseBoost:2,stationaryTime:250,maxDistance:.1,maxPucks:6,probabilityDivider:20,puckFadeIn:750,scoreBounce:250}),void 0):(console.error("createjs.Sound failed to initialize"),void 0)}return t.prototype.showStartScreen=function(){return ga("send","pageview","/rate-hockey/start"),document.body.dataset.show="start"},t.prototype.showGameScreen=function(){return ga("send","pageview","/rate-hockey/game"),document.body.dataset.show="game",this.board.start()},t.prototype.showVictoryScreen=function(e){var t,s=this;return ga("send","pageview","/rate-hockey/victory"),ga("send","event","game","victory:player "+e.id,"score:"+e.score),this.board.stop(),document.getElementById("playerId").textContent=e.id,document.getElementById("victory").className=1===e.id?"screen flipped":"screen",document.body.dataset.show="victory",t=createjs.Sound.play("worldklass",{volume:1}),t.playState===createjs.Sound.PLAY_FAILED&&console.error("createjs.Sound failed to play mp3"),setTimeout(function(){return s.showStartScreen()},5e3)},t}()})}.call(this),function(){require.config({shim:{TweenJS:{deps:["EaselJS"],exports:"createjs"}},paths:{EaselJS:"../bower_components/EaselJS/lib/easeljs-0.7.1.min",SoundJS:"../bower_components/SoundJS/lib/soundjs-0.5.2.min",TweenJS:"../bower_components/TweenJS/lib/tweenjs-0.5.1.min"}}),require(["RateHockey"],function(){var e;return e=require("RateHockey"),setTimeout(function(){return e.prototype.showStartScreen()},3e3),document.getElementById("start").getElementsByTagName("button")[0].onclick=function(){var t;return t=new e,t.showGameScreen()}})}.call(this),define("main",function(){}),require(["main"]);
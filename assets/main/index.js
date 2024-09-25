System.register("chunks:///_virtual/client.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,r;return{setters:[function(n){t=n.asyncToGenerator,e=n.regeneratorRuntime},function(n){r=n.cclegacy}],execute:function(){r._RF.push({},"7ebf4jlhiRGDaqFXuXFpscn","client",void 0);var c="http://localhost:8456";n("client",{get:function(n){return t(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[c,n].join(""),t.abrupt("return",fetch(r).then((function(n){return n.json()})).then((function(n){return n.data})).catch((function(n){return console.error("Error:",n),null})));case 3:case"end":return t.stop()}}),t)})))()}});r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/defaultLevel1.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"93ff2MsouZDkIjUrJSGM0G+","defaultLevel1",void 0);e("defaultLevelConfig",{maxSpeed:10,jumpSpeed:39,jumpSpeedMin:3,deceleration:90,drag:.1,planetGravity:100,zoomMin:.1,zoomDefault:1,zoomMax:10,baseOrthoHeight:1e3,acceleration:4e4,maxMoveForce:5e3,asteroid:{x:0,y:2500,vx:20,vy:0,scale:1,debug:0,count:5,totalCount:300},planet:{gravity:3}});t._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./client.ts","./defaultLevel1.ts"],(function(e){var t,n,o,i,a,r,l,s,c,u,h,p,g,y,v,d,m,f,C,T,b,D,P,M,E,w,x,S,_,R,B,G,z,k;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.asyncToGenerator,r=e.regeneratorRuntime},function(e){l=e.cclegacy,s=e._decorator,c=e.Prefab,u=e.Camera,h=e.Button,p=e.input,g=e.Input,y=e.Node,v=e.KeyCode,d=e.RigidBody2D,m=e.PhysicsSystem2D,f=e.Vec2,C=e.PHYSICS_2D_PTM_RATIO,T=e.director,b=e.UITransform,D=e.screen,P=e.view,M=e.instantiate,E=e.Sprite,w=e.Color,x=e.Collider2D,S=e.Contact2DType,_=e.Graphics,R=e.AudioSource,B=e.Vec3,G=e.Component},function(e){z=e.client},function(e){k=e.defaultLevelConfig}],execute:function(){var A,O,U,L,W,I,K,N,Y,F,H,V,Z,j,Q,q,J,X,$,ee,te;l._RF.push({},"760ecfKtzlAHKjDvx0Tlsu/","GameManager",void 0);var ne=s.ccclass,oe=s.property,ie=function(e,t){return Math.random()*(t-e)+e};function ae(e){return e*(180/Math.PI)}function re(e){var t=e.rotation,n=-t.z,o=t.w;return 2*Math.atan2(o,n)-Math.PI}e("GameManager",(A=ne("GameManager"),O=oe(c),U=oe(c),L=oe(c),W=oe(c),I=oe(c),K=oe(u),N=oe(h),Y=oe(h),F=oe(h),A((Z=t((V=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,o(t,"player",Z,i(t)),t.playerMoveDirection=new B(0,0,0),o(t,"planet",j,i(t)),o(t,"asteroid",Q,i(t)),o(t,"explosion",q,i(t)),o(t,"bullet2",J,i(t)),o(t,"camera",X,i(t)),o(t,"leftButton",$,i(t)),o(t,"upButton",ee,i(t)),o(t,"rightButton",te,i(t)),t.enablePlanetGravity=!0,t.enableGlobalGravity=!0,t.zoomRatio=k.zoomDefault,t.time=0,t.graphics=void 0,t.levelConfig=void 0,t.totalAsteroidCount=0,t}n(t,e);var l=t.prototype;return l.getLevelConfig=function(){return this.levelConfig||k},l.updateLevelConfig=function(){var e=a(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get("/api/config/1?t="+Date.now());case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:this.levelConfig=t;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),l.start=function(){var e=this;p.on(g.EventType.TOUCH_START,this.onTouchStart,this),p.on(g.EventType.KEY_DOWN,this.onKeyDown,this),p.on(g.EventType.KEY_UP,this.onKeyUp,this),p.on(g.EventType.MOUSE_WHEEL,this.onMouseWhell,this),[this.leftButton,this.upButton,this.rightButton].forEach((function(t){t.node.on(y.EventType.TOUCH_START,e.onButtonDown,e),t.node.on(y.EventType.TOUCH_END,e.onButtonUp,e),t.node.on(y.EventType.MOUSE_DOWN,e.onButtonDown,e),t.node.on(y.EventType.MOUSE_UP,e.onButtonUp,e)})),this.levelConfig=k,this.updateLevelConfig(),setInterval((function(){e.updateLevelConfig()}),1e3)},l.onDestroy=function(){var e=this;p.off(g.EventType.KEY_DOWN,this.onKeyDown,this),p.off(g.EventType.KEY_UP,this.onKeyUp,this),p.off(g.EventType.TOUCH_START,this.onTouchStart,this),p.off(g.EventType.MOUSE_WHEEL,this.onMouseWhell,this),[this.leftButton,this.upButton,this.rightButton].forEach((function(t){t.node.off(y.EventType.TOUCH_START,e.onButtonDown,e),t.node.off(y.EventType.TOUCH_END,e.onButtonUp,e),t.node.off(y.EventType.MOUSE_DOWN,e.onButtonDown,e),t.node.off(y.EventType.MOUSE_UP,e.onButtonUp,e)}))},l.setZoomRatio=function(e){var t=this.getLevelConfig(),n=t.zoomMin,o=t.zoomMax;this.zoomRatio=Math.min(Math.max(e,n),o)},l.onMouseWhell=function(e){this.setZoomRatio(this.zoomRatio+e.getScrollY()/1e3)},l.onButtonDown=function(e){switch(e.target.name){case"LeftButton":this.playerMoveDirection.x=-1;break;case"RightButton":this.playerMoveDirection.x=1;break;case"UpButton":this.playerMoveDirection.y=1}},l.onButtonUp=function(e){switch(e.target.name){case"LeftButton":case"RightButton":this.playerMoveDirection.x=0;break;case"UpButton":this.playerMoveDirection.y=0}},l.onKeyDown=function(e){switch(e.keyCode){case v.KEY_G:this.enablePlanetGravity=!this.enablePlanetGravity;break;case v.KEY_H:this.enableGlobalGravity=!this.enableGlobalGravity;break;case v.ARROW_LEFT:this.playerMoveDirection.x=-1;break;case v.ARROW_RIGHT:this.playerMoveDirection.x=1;break;case v.ARROW_UP:this.playerMoveDirection.y=1;break;case v.ARROW_DOWN:this.playerMoveDirection.y=-1;break;case v.KEY_A:this.playerMoveDirection.x=-1;break;case v.KEY_D:this.playerMoveDirection.x=1;break;case v.KEY_W:this.playerMoveDirection.y=1;break;case v.KEY_S:this.playerMoveDirection.y=-1;break;case v.KEY_E:this.playerMoveDirection.z=1;break;case v.KEY_Q:this.playerMoveDirection.z=-1;break;case v.SPACE:var t=this.getPlayer();if(!t)return;this.generateBullet(t);break;case v.DIGIT_1:this.generateAsteroid();break;case v.DIGIT_2:this.generatePlanet();break;case v.DIGIT_3:this.generatePlayer();break;case v.DIGIT_9:this.setZoomRatio(.5*this.zoomRatio);break;case v.DIGIT_0:this.setZoomRatio(2*this.zoomRatio)}},l.onKeyUp=function(e){switch(e.keyCode){case v.ARROW_LEFT:case v.ARROW_RIGHT:this.playerMoveDirection.x=0;break;case v.ARROW_UP:case v.ARROW_DOWN:this.playerMoveDirection.y=0;break;case v.KEY_A:case v.KEY_D:this.playerMoveDirection.x=0;break;case v.KEY_W:case v.KEY_S:this.playerMoveDirection.y=0;break;case v.KEY_Q:case v.KEY_E:this.playerMoveDirection.z=0}},l.updatePlanet=function(e,t){var n=t.deltaTime;this.drawDebug(e,{compass:1,gravity:0,movement:0}),e.angle=0,e.getComponent(d).angularVelocity=0,e.getComponent(d).angularDamping=0,e.getComponent(d).linearDamping=0,e.getComponent(d).fixedRotation=!0,e.setPosition(0,0),e.angle+=.3*n,this.enablePlanetGravity?m.instance.gravity=new f(0,0):this.enableGlobalGravity&&(m.instance.gravity=new f(0,-10*C))},l.updateCamera=function(e,t){t.deltaTime;var n=this.getGravityForce(e),o=this.getCamera().getComponent(u),i=this.getLevelConfig().baseOrthoHeight*this.zoomRatio*e.scale.x*5,a=(ae(re(e)),ae(Math.atan2(n.y,n.x))),r=e.getPosition().x,l=e.getPosition().y,s=a+90;o.node.setPosition(r,l),o.node.angle=s,o.orthoHeight=i;var c=T.getScene(),h=null==c?void 0:c.getChildByPath("UICanvas/Window");if(h){h.setPosition(r,l),h.angle=s;var p=h.getComponent(b);if(p){var g=D.windowSize,y=P.getFrameSize(),v=y.width||g.width,d=y.height||g.height,m=this.zoomRatio;p.setContentSize(v,d),h.setScale(m,m)}}},l.getCamera=function(){return this.camera},l.getPlanet=function(){return this.node.children.reverse().find((function(e){return"Planet"===e.name}))},l.getPlayer=function(){return this.node.children.reverse().find((function(e){return"Player"===e.name}))},l.generateWorld=function(){for(var e,t,n=this,o=0;o<1;o++)this.generatePlanet();for(var i=(null==(e=this.getLevelConfig())||null==(t=e.asteroid)?void 0:t.count)||10,a=0;a<i;a++)this.generateAsteroid();for(var r=0;r<1;r++)this.generatePlayer();this.schedule((function(){var e,t,o,i,a=(null==(e=n.getLevelConfig())||null==(t=e.asteroid)?void 0:t.count)||10;if(!(n.totalAsteroidCount>=(null==(o=n.getLevelConfig())||null==(i=o.asteroid)?void 0:i.totalCount)))for(var r=0;r<a;r++){n.totalAsteroidCount+=1,setTimeout((function(){n.generateAsteroid()}),1e3/a*r)}}),1)},l.update=function(e){this.time||this.generateWorld(),this.time+=e;var t=this.getPlanet(),n=this.getPlayer();t&&this.updatePlanet(t,{deltaTime:e}),(n||t)&&this.updateCamera(n||t,{deltaTime:e}),this.updatePlayers({deltaTime:e}),this.updateAsteroids({deltaTime:e})},l.updateAsteroid=function(e,t){var n,o,i=t.deltaTime;!(null==(n=this.getLevelConfig())||null==(o=n.asteroid)||!o.debug)&&this.drawDebug(e,{compass:1,gravity:1,movement:0}),this.applyTeleport(e),this.applyGravity(e,{deltaTime:i})},l.updateAsteroids=function(e){var t=this,n=e.deltaTime;this.node.children.filter((function(e){return"Asteroid"===e.name})).forEach((function(e){t.updateAsteroid(e,{deltaTime:n})}))},l.generatePlayer=function(){var e=this,t=M(this.player);t.setParent(this.node);var n={x:0,y:-1030,vx:0,vy:0,scale:.1,gravityScale:0,angularVelocity:0,angularDamping:1,linearDamping:0,color:[ie(100,255),ie(100,255),ie(100,255),255]};t.setPosition(n.x,n.y),t.setScale(n.scale,n.scale),t.getComponent(d).linearVelocity=new f(n.vx,n.vy);var o=t.getChildByName("Body");if(o){o.getComponent(E).color=new w(n.color[0],n.color[1],n.color[2],n.color[3]);t.getComponent(x).on(S.BEGIN_CONTACT,(function(n,o){if("Planet"===o.node.name){var i=M(e.explosion);i.setParent(t.parent),i.setPosition(t.getPosition()),i.setScale(t.getScale()),e.scheduleOnce((function(){return i.destroy()}),1)}}),this)}},l.updatePlayers=function(e){var t=this,n=e.deltaTime;this.node.children.filter((function(e){return"Player"===e.name})).forEach((function(e){t.updatePlayer(e,{deltaTime:n})}))},l.applyTeleport=function(e){var t=e.getPosition();(Number.isNaN(t.y)||Number.isNaN(t.x))&&e.setPosition(0,0),Math.abs(t.x)>4e3&&e.setPosition(-t.x,t.y),Math.abs(t.y)>2700&&e.setPosition(t.x,-t.y)},l.getGravityForce=function(e){var t=this,n=this.node.children.filter((function(e){return"Planet"===e.name})),o=new f(0,0);return n.forEach((function(n){var i,a,r=new f;if(f.subtract(r,new f(n.worldPosition.x,n.worldPosition.y),new f(e.worldPosition.x,e.worldPosition.y)),!(f.len(r)<.1)){var l=null==(i=t.getLevelConfig())||null==(a=i.planet)?void 0:a.gravity,s=new f;f.normalize(s,r),f.multiplyScalar(s,s,l),f.add(o,o,s)}})),o},l.applyGravity=function(e,t){var n=t.deltaTime,o=e.getComponent(d),i=this.getGravityForce(e).multiplyScalar(1e3*n);o.applyForceToCenter(i,!0)},l.getMovementForce=function(e){var t=this.getGravityForce(e).normalize(),n=-Math.atan2(t.y,t.x)-Math.PI/2,o=this.getLevelConfig(),i=o.acceleration,a=o.maxMoveForce,r=new f(this.playerMoveDirection.x,this.playerMoveDirection.y).multiplyScalar(i).rotate(-n);return r.length()>a&&r.normalize().multiplyScalar(a),r},l.applyMovement=function(e,t){var n,o=t.deltaTime,i=e.getComponent(d),a=this.getMovementForce(e).multiplyScalar(o),r=100*-this.playerMoveDirection.z;i.applyAngularImpulse(r,!0),i.applyForceToCenter(a,!0);var l=i.linearVelocity,s=(null==(n=this.getLevelConfig())?void 0:n.maxSpeed)||1;if(l.length()>s){var c=l.normalize().multiplyScalar(s);i.linearVelocity=c}},l.drawDebug=function(e,t){var n=t.compass,o=void 0===n?1:n,i=t.gravity,a=void 0===i?1:i,r=t.movement,l=void 0===r?1:r,s=e.getChildByName("Debug");if(s){var c=s.getComponent(_);c||(c=s.addComponent(_));var u=re(e);if(o){c.clear();var h=new f(1e3,0).rotate(-u),p=new f(0,1e3).rotate(-u);c.moveTo(0,0),c.lineTo(h.x,h.y),c.lineWidth=15,c.strokeColor=w.RED,c.stroke(),c.moveTo(0,0),c.lineTo(p.x,p.y),c.lineWidth=15,c.strokeColor=w.GREEN,c.stroke()}if(l){var g=this.getMovementForce(e),y=g.length(),v=g.normalize().multiplyScalar(1e3).rotate(-u);c.moveTo(0,0),c.lineTo(v.x,v.y),c.lineWidth=y/100,c.strokeColor=w.RED,c.stroke()}if(a){var d=this.getGravityForce(e),m=d.length(),C=d.normalize().multiplyScalar(1e3).rotate(-u);c.moveTo(0,0),c.lineTo(C.x,C.y),c.lineWidth=2*m+10,c.strokeColor=w.BLUE,c.stroke()}}},l.updatePlayer=function(e,t){var n=t.deltaTime;this.drawDebug(e,{compass:1,gravity:1,movement:1}),this.applyTeleport(e),this.applyGravity(e,{deltaTime:n}),this.applyMovement(e,{deltaTime:n})},l.generatePlanet=function(){var e=M(this.planet);e.setParent(this.node);var t={x:0,y:0,vx:0,vy:0,scale:ie(30,60),gravityScale:ie(0,1),angularVelocity:0,angularDamping:0,linearDamping:ie(0,1),fixedRotation:ie(0,1),color:[ie(100,255),ie(100,255),ie(100,255),255]};e.setPosition(t.x,t.y),e.getComponent(d).linearVelocity=new f(t.vx,t.vy),e.setScale(t.scale,t.scale),e.getComponent(d).angularVelocity=t.angularVelocity,e.getComponent(d).gravityScale=t.gravityScale,e.getComponent(E).color=new w(t.color[0],t.color[1],t.color[2],t.color[3]),e.getComponent(d).type=2},l.generateAsteroid=function(){var e,t,n,o,i,a,r,l,s,c,u=this,h=M(this.asteroid);h.setParent(this.node);var p={x:(null==(e=this.getLevelConfig())||null==(t=e.asteroid)?void 0:t.x)||0,y:(null==(n=this.getLevelConfig())||null==(o=n.asteroid)?void 0:o.y)||1700,vx:((null==(i=this.getLevelConfig())||null==(a=i.asteroid)?void 0:a.vx)||0)+Math.random(),vy:((null==(r=this.getLevelConfig())||null==(l=r.asteroid)?void 0:l.vy)||0)+Math.random(),scale:-(null==(s=this.getLevelConfig())||null==(c=s.asteroid)?void 0:c.scale)||ie(.1,1),gravityScale:1,angularVelocity:0,angularDamping:0,linearDamping:0,fixedRotation:0,color:[ie(100,255),ie(100,255),ie(100,255),255]};h.setPosition(p.x,p.y),h.setScale(p.scale,p.scale),h.getComponent(d).linearVelocity=new f(p.vx,p.vy),h.getComponent(d).angularVelocity=p.angularVelocity,h.getComponent(d).gravityScale=p.gravityScale,h.getComponent(d).angularDamping=p.angularDamping,h.getComponent(d).linearDamping=p.linearDamping,h.getComponent(d).fixedRotation=p.fixedRotation>.5,h.getChildByName("Body").getComponent(E).color=new w(p.color[0],p.color[1],p.color[2],p.color[3]);h.getComponent(x).on(S.BEGIN_CONTACT,(function(e,t){if("Planet"===t.node.name){h.destroy();var n=M(u.explosion);n.setParent(h.parent),n.setPosition(h.getPosition()),n.setScale(10*h.getScale()),u.scheduleOnce((function(){n.destroy()}),1)}}),this)},l.generateBullet=function(e){var t,n,o=this,i=this.getMovementForce(e).normalize(),a=1500*(t=i.length()>.1?i:this.getGravityForce(e).normalize().rotate(Math.PI)).x,r=1500*t.y,l=e.getPosition().x+a/60,s=e.getPosition().y+r/60,c=Math.atan2(r,a);console.log(11111);try{n=M(this.bullet2)}catch(e){console.log("err",e),n=M(this.asteroid)}n.setParent(this.node),n.setPosition(l,s),n.angle=ae(c),n.getComponent(d).linearVelocity=new f(a,r);var u=n.getChildByName("Body"),h=[new w(255,0,0,255),new w(0,255,0,255),new w(0,0,255,255)];u.getComponent(E).color=h[Math.floor(Math.random()*h.length)];var p=n.getComponent(R);if(p)try{p.play()}catch(e){console.error("bulletSound [err]",e)}n.getComponent(x).on(S.BEGIN_CONTACT,(function(e,t){if("Planet"===t.node.name||"Asteroid"===t.node.name){n.destroy();var i=M(o.explosion);i.setParent(n.parent),i.setPosition(n.getPosition()),i.setScale(3*n.getScale()),o.scheduleOnce((function(){i.destroy()}),1),"Asteroid"===t.node.name&&t.node.destroy()}}),this),this.scheduleOnce((function(){n.destroy()}),5)},l.onTouchStart=function(){},t}(G)).prototype,"player",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=t(V.prototype,"planet",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(V.prototype,"asteroid",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=t(V.prototype,"explosion",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=t(V.prototype,"bullet2",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=t(V.prototype,"camera",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=t(V.prototype,"leftButton",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(V.prototype,"upButton",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(V.prototype,"rightButton",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=V))||H));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameManager.ts","./client.ts","./defaultLevel1.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
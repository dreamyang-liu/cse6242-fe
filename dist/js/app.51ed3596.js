(function(t){function e(e){for(var i,c,s=e[0],r=e[1],l=e[2],u=0,h=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},o=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=r;o.push([3,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},1862:function(t,e,a){},2:function(t,e){},2395:function(t,e,a){},3:function(t,e,a){t.exports=a("56d7")},4:function(t,e){},"4f5f":function(t,e,a){"use strict";a("59be")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a(t.currentTabComponent,{tag:"component"})],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},s=[],r={},l=r,d=a("2877"),u=Object(d["a"])(l,c,s,!1,null,null,null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"main_container"},[a("div",{staticClass:"select_map_container"},[a("Select"),a("Map",{attrs:{poi_types:t.poitypes,demographic_types:t.demographictypes,time_types:t.time_types}})],1),a("div",{staticClass:"stat_control_container"},[a("GlobalStat")],1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav_bar"},[a("div",[a("img",{staticClass:"nav_img",attrs:{src:"https://thumbs.gfycat.com/AgedHeavyHumpbackwhale.webp",alt:""}})]),a("span",{staticClass:"nav_title"},[t._v(" The Ease and Equity of Point of Interest Accessibility via Public Transit in the US ")])])}],g=a("5530"),y=(a("b0c0"),a("d3b7"),a("d81d"),a("a9e3"),a("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map",attrs:{id:"hex-map"}},[a("VueDeckgl",{ref:"deckgl",staticClass:"deck-map",attrs:{layers:t.layers,viewState:t.viewState,width:"70vw",height:"90vh"},on:{click:t.handleClick,"view-state-change":t.handleViewStateChange}}),a("div",{ref:"map",attrs:{id:"map"}}),a("el-popover",{staticClass:"control-panel",attrs:{placement:"right",width:"400",trigger:"click"}},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("Opacity")]),a("el-slider",{staticStyle:{width:"200px"},attrs:{width:300,min:0,max:1,step:.01},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1),a("el-divider"),a("p",{staticClass:"demonstration"},[t._v("POI Type")]),a("el-radio-group",{model:{value:t.checkedPOITypes,callback:function(e){t.checkedPOITypes=e},expression:"checkedPOITypes"}},t._l(t.poi_types,(function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1),a("br"),a("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.clearCatchment}},[t._v("Clear Catchments")]),a("el-divider"),a("p",{staticClass:"demonstration"},[t._v("Demographic Groups")]),a("el-cascader",{attrs:{options:t.options},model:{value:t.checkedDemographicTypes,callback:function(e){t.checkedDemographicTypes=e},expression:"checkedDemographicTypes"}}),a("el-divider"),a("p",{staticClass:"demonstration"},[t._v("Time of Day")]),a("el-radio-group",{model:{value:t.time_of_day,callback:function(e){t.time_of_day=e},expression:"time_of_day"}},t._l(t.time_types,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("Control Panel")])],1)],1)}),m=[],v=a("2909"),b=a("ade3"),_=(a("6062"),a("3ca3"),a("ddb0"),a("07ac"),a("4de4"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deckgl-container",attrs:{width:t.width,height:t.height}},[t._t("default"),a("canvas",{ref:"canvas",attrs:{id:"deck-canvas"},on:{contextmenu:t.handleContextMenu}}),t._t("foreground")],2)}),k=[],C=(a("b680"),a("9b26")),O=a("5a2b"),w={name:"VueDeckgl",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},layers:{type:Array,default:function(){return[]}},viewState:{type:Object,default:function(){return{latitude:40.6971494,longitude:-74.2598655,zoom:12,pitch:0}},required:!0},cursor:{type:String,default:"default"},controller:{type:[Boolean,Object],default:!0},effects:{type:Array,default:function(){return[]}},disableContextMenu:{type:Boolean,default:!1}},data:function(){return{}},methods:{initializeDeck:function(t,e){var a=this;return new C["a"]({canvas:this.$refs.canvas,width:this.width,height:this.height,style:{"!position":"relative"},viewState:t,controller:this.controller,onViewStateChange:function(t){var e=t.viewState;a.deck.setProps({viewState:e}),a.$emit("view-state-change",e)},onClick:function(t,e){a.$emit("click",{info:t,event:e})},onDrag:function(t,e){a.$emit("drag",{info:t,event:e})},onDragStart:function(t,e){a.$emit("onDragStart",{info:t,event:e})},onDragEnd:function(t,e){a.$emit("onDragEnd",{info:t,event:e})},getCursor:function(t){var e=t.isDragging;return e?"grabbing":a.cursor||"grab"},layers:e,effects:this.effects,getTooltip:function(t){try{if("heatmap"===t.layer.id){var e=t.object,a="Total Population: ".concat(e.total.toFixed(0),"\n");for(var i in e.data)a+="".concat(i,": ").concat((100*Number(e.data[i])/e.total).toFixed(2),"%\n");return e&&{text:a,style:{position:"relative",fontSize:"12px",color:"#000",backgroundColor:"#efe",width:"260px",height:"155px",overflow:"scroll",marginLeft:"20px",marginTop:"20px",opacity:.75}}}var n=t.object,o="Category: ".concat(n.category,"\n");return o+="Name: ".concat(n.name,"\n"),n&&{text:o,style:{position:"relative",fontSize:"12px",color:"#000",backgroundColor:"#efe",width:"200px",height:"50px",overflow:"scroll",marginLeft:"20px",marginTop:"20px",opacity:.75}}}catch(c){return}}})},handleContextMenu:function(t){this.disableContextMenu&&t.preventDefault()}},watch:{layers:function(t){this.deck.setProps({layers:t})},viewState:{handler:function(t){this.deck.setProps({viewState:Object(g["a"])(Object(g["a"])({},t),{},{transitionInterpolator:new O["a"]})})},deep:!0},effects:function(t){this.deck.setProps({effects:t})}},created:function(){this.deck=null},mounted:function(){this.deck=this.initializeDeck(this.viewState,this.layers)},destroyed:function(){this.deck.finalize()}},x=w,j=(a("c9a1"),Object(d["a"])(x,_,k,!1,null,"408c3013",null)),P=j.exports,S=a("475f"),D=a("fbbb"),I=a("9043"),T=a("3614"),$=a("e192"),A=a.n($),N=a("2f62"),L=a("262e"),E=a("2caf"),M=a("d4ec"),R=a("bee2"),V=(a("e9c4"),function(){function t(){Object(M["a"])(this,t),this.obj={changed:[],config:{poi_category:"Vaccination centre",demographic_category:"Race",time_of_day:"morning",city_id:1},poi_list:{added:[],deleted:[]}}}return Object(R["a"])(t,[{key:"add_change",value:function(t){-1===this.obj.changed.indexOf(t)&&this.obj.changed.push(t)}},{key:"fill_poi_list",value:function(t){this.obj.poi_list=t}},{key:"update_config_field",value:function(t,e){this.obj.config[t]=e}},{key:"fill_config",value:function(t){this.obj.config=t}}]),t}()),F=function(){function t(){Object(M["a"])(this,t),this.ajax=new XMLHttpRequest}return Object(R["a"])(t,[{key:"get",value:function(t,e){var a=this;this.ajax.open("GET",t,!1),this.ajax.onreadystatechange=function(){4===a.ajax.readyState&&200===a.ajax.status&&e(a.ajax.responseText)},this.ajax.send()}},{key:"post",value:function(t,e,a){var i=this;this.ajax.open("POST",t),this.ajax.setRequestHeader("Content-Type","application/json"),this.ajax.onreadystatechange=function(){4===i.ajax.readyState&&200===i.ajax.status&&a(i.ajax.responseText)},this.ajax.send(JSON.stringify(e))}}]),t}(),z=function(t){Object(L["a"])(a,t);var e=Object(E["a"])(a);function a(){return Object(M["a"])(this,a),e.call(this)}return Object(R["a"])(a,[{key:"fetchConfig",value:function(t){this.get("/config",(function(e){t(JSON.parse(e))}))}},{key:"init",value:function(t){var e=new V;e.add_change("poi_category"),e.add_change("demographic_category"),e.add_change("time_of_day"),this.post("/city_data/",e.obj,(function(e){t(JSON.parse(e))}))}},{key:"switchCity",value:function(t,e){var a=new V;a.add_change("poi_category"),a.add_change("demographic_category"),a.add_change("time_of_day"),a.obj.config.city_id=t,this.post("/city_data/",a.obj,(function(t){e(JSON.parse(t))}))}},{key:"updateConfig",value:function(t,e){this.post("/city_data/",e.obj,(function(e){t(JSON.parse(e))}))}},{key:"updatePOIs",value:function(t,e){this.get("/city_data",(function(e){t(JSON.parse(e))}))}},{key:"fetchCatchement",value:function(t,e,a,i,n){this.get("/catchment/".concat(e,"/").concat(a,"?time_of_day=").concat(i,"&demographics_category=").concat(n),(function(e){t(e)}))}}]),a}(F),B=z,H=a("f75e"),J="mapbox://styles/mapbox/streets-v11",q={name:"Map",components:{VueDeckgl:P},props:{poi_types:{type:Array,require:!0},demographic_types:{type:Array,require:!0},time_types:{type:Array,require:!0}},data:function(){return{ICON_MAPPING:{marker:{x:0,y:0,width:128,height:128,mask:!0}},checkedPOITypes:"Vaccination centre",checkedDemographicTypes:["Race","all"],checkTimeTypes:[],data:null,viewState:{longitude:-84.388,latitude:33.749,zoom:11,minZoom:3,maxZoom:17,pitch:20},picked_poi_id:null,layers:[],hexagonLayer:null,scatterLayer:null,iconLayer:null,polygonLayer:null,map:null,coverage:1,opacity:.2,hex_set:new Set,time_of_day:"morning",addedPois:[],deletedPois:[],options:[{value:"Race",label:"Race",children:[{value:"all",label:"All"},{value:"white",label:"White"},{value:"black",label:"Black"},{value:"asian",label:"Asian"},{value:"native",label:"American Indian and Native Alaskan"},{value:"hawaiian",label:"Native Hawaiian and Other Pacific Islander"}]},{value:"Age and Sex",label:"Age and Sex"},{value:"Income",label:"Income"},{value:"Origin",label:"Origin"},{value:"Vehicle Availability",label:"Vehicle Availability"}]}},computed:Object(g["a"])({},Object(N["b"])({cityData:function(t){return t.cityData},pois:function(t){return t.pois},clickEvent:function(t){return t.clickEvent}})),watch:{opacity:function(t,e){this.update_layers("hex")},pois:{handler:function(t){this.update_layers("scatter")},deep:!0},addedPois:{handler:function(t){console.log(t),this.update_layers("scatter")}},cityData:{handler:function(t){this.update_layers("hex");var e=t.pois.data[0].long,a=t.pois.data[0].lat,i=this.viewState;i.longitude=e,i.latitude=a,this.viewState=i,this.map.flyTo({center:[i.longitude,i.latitude],zoom:i.zoom,bearing:i.bearing,pitch:i.pitch})},deep:!0},checkedDemographicTypes:{handler:function(t){this.$store.commit("setConfigDemographicType",t[0]),this.update_layers("hex"),t[0]!==this.$store.state.config.demographic_category&&this.commit_config_change("demographic_category")},deep:!0},time_of_day:{handler:function(t){this.$store.commit("setConfigTimeofDay",t),this.commit_config_change("time_of_day")},deep:!0},checkedPOITypes:{handler:function(t){this.$store.commit("setConfigPOIType",t),this.commit_config_change("poi_category")},deep:!0}},methods:{commit_config_change:function(t){var e=this,a=new V;a.add_change(t),a.fill_config(this.$store.state.config);var i=new B;i.updateConfig((function(t){e.$store.commit("setStatistics",t.stats),e.$store.commit("setPois",t.pois.data)}),a)},clearCatchment:function(){null!==this.polygonLayer&&(this.picked_poi_id=null,this.polygonLayer=null,this.$store.commit("clearPOIStatistics"),this.update_layers("scatter"),this.notify("Remove Catchments Succeed","All catchment areas removed",!0))},notify:function(t,e,a){a?this.$notify({title:t,message:e,duration:4500,type:"success"}):this.$notify.error({title:t,message:e,duration:4500})},handleCatchment:function(t){var e=JSON.parse(t),a=e.geometry.coordinates,i={labels:Object.keys(e.population_detail),datasets:[{backgroundColor:["#43A047","#0D6986","#8956FF","#f93e6e","#EF5411","#5C4B51","#cc773f"],data:Object.values(e.population_detail)}]};this.$store.commit("setPOIStatistics",i),this.update_layers("polygon",a)},handleClickChain:function(t){try{if(0===this.clickEvent)if("heatmap"===t.info.layer.id)this.clearCatchment();else{this.picked_poi_id=t.info.object.id,this.update_layers("scatter");var e=new B;e.fetchCatchement(this.handleCatchment,this.$store.state.config.city_id,t.info.object.h3id,this.time_of_day,this.checkedDemographicTypes[0])}else this.handleAddPOI(t)}catch(a){return void this.notify("Error","No POI data found or "+a,!1)}},handleAddPOI:function(t){var e=this;if(1===this.clickEvent)if(console.log(t),"heatmap"===t.info.layer.id){var a={long:t.info.coordinate[0],lat:t.info.coordinate[1],name:"Unknown ".concat(this.checkedPOITypes),h3id:H["c"](t.info.coordinate[1],t.info.coordinate[0],9),id:-1*this.addedPois.length-1,category:this.checkedPOITypes,coords:{lat:t.info.coordinate[1],long:t.info.coordinate[0]}};this.addedPois.push(a);var i=new V;i.add_change("poi_add"),i.fill_poi_list({added:this.addedPois.map((function(t){return t.h3id})),deleted:this.deletedPois});var n=new B;n.updateConfig((function(t){e.$store.commit("setStatistics",t.stats)}),i),this.notify("Add POI Succeed","It may take a while to recalculate",!0)}else this.notify("Add POI Failed","Cannot add POI on a existing POI",!1);else this.handleRemovePOI(t)},handleRemovePOI:function(t){var e=this;if(2!==this.clickEvent)throw new Error("Invalid clickEvent");if("heatmap"===t.info.layer.id)this.notify("Remove POI Failed","Cannot remove an unexisting POI",!1);else{this.deletedPois.push(t.info.object.h3id);var a=new V;a.add_change("poi_remove"),a.fill_poi_list({added:this.addedPois.map((function(t){return t.h3id})),deleted:this.deletedPois});var i=new B;i.updateConfig((function(t){e.$store.commit("setStatistics",t.stats),e.$store.commit("setPois",t.pois.data)}),a),this.notify("Remove POI Succeed","It may take a while to recalculate",!0)}},handleClick:function(t){this.handleClickChain(t)},handleViewStateChange:function(t){this.viewState=Object(g["a"])({},t),null!==this.map&&this.map.jumpTo({center:[t.longitude,t.latitude],zoom:t.zoom,bearing:t.bearing,pitch:t.pitch})},createPolyonLayer:function(t){var e=t,a=new S["a"]({id:"polygon-layer",data:e,pickable:!0,stroked:!0,filled:!0,wireframe:!0,lineWidthMinPixels:1,getPolygon:function(t){return t},opacity:.5,getFillColor:function(t){return[60,140,0]},getLineColor:[80,80,80],getLineWidth:1});return a},createHexagonLayer:function(){var t=this,e=this.cityData.demographics.data.filter((function(t){return t.total>0})),a=new T["a"](Object(b["a"])({id:"heatmap",data:e,elevationRange:[0,0],opacity:.2,wireframe:!1,filled:!0,extruded:!1,pickable:!0,getHexagon:function(t){return t.h3id},getFillColor:function(e){var a=[600,100,100,50,50,10];return t.hex_set.has(e.h3id)?[0,255,0]:-1!=t.checkedDemographicTypes.indexOf("white")?[255,255-e.data["White"]/a[1]*255,0]:-1!=t.checkedDemographicTypes.indexOf("black")?[255,255-e.data["Black or African American"]/a[2]*255,0]:-1!=t.checkedDemographicTypes.indexOf("asian")?[255,255-e.data["Asian"]/a[3]*255,0]:-1!=t.checkedDemographicTypes.indexOf("native")?[255,255-e.data["American Indian and Alaska Native"]/a[4]*255,0]:-1!=t.checkedDemographicTypes.indexOf("hawaiian")?[255,255-e.data["Native Hawaiian and Other Pacific Islander"]/a[5]*255,0]:[255,255-e.total/a[0]*255,0]},coverage:this.coverage},"opacity",this.opacity));return a||null},createScatterLayer:function(){var t=this;console.log("Redrawing the layer of Scatter...");var e=new D["a"]({id:"scatterplot-layer",data:[].concat(Object(v["a"])(this.pois),Object(v["a"])(this.addedPois)),pickable:!0,opacity:.8,stroked:!0,filled:!0,radiusScale:6,radiusMinPixels:5,radiusMaxPixels:3,lineWidthMinPixels:1,getPosition:function(t){return[t.long,t.lat]},getRadius:function(t){return 4},getFillColor:function(e){return t.picked_poi_id===e.id?[0,255,255]:[170,10,217]},updateTriggers:{getFillColor:this.picked_poi_id},getLineColor:function(t){return[0,0,0]}});return e||null},createIconLayer:function(){var t=new I["a"]({id:"icon-layer",data:this.pois,pickable:!0,iconAtlas:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",iconMapping:this.ICON_MAPPING,getIcon:function(t){return"marker"},sizeScale:9,getPosition:function(t){return[t.long,t.lat]},getSize:function(t){return 5},getColor:function(t){return[0,128,255]}});return t||null},update_layers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"all"!==t&&"hex"!==t||(this.hexagonLayer=this.createHexagonLayer()),"all"!==t&&"scatter"!==t||(this.scatterLayer=this.createScatterLayer()),"all"!==t&&"polygon"!==t||(this.polygonLayer=this.createPolyonLayer(e)),this.$refs["deckgl"].deck.setProps({layers:[this.hexagonLayer,this.scatterLayer,this.polygonLayer]})}},mounted:function(){this.map=new A.a.Map({accessToken:"pk.eyJ1Ijoic2VuZGF5byIsImEiOiJjams4MjdqOXAyZ2VrM3BydDRzeTR4cjBsIn0.Hk0FF4BvDNJZeDAZZiPlcg",container:this.$refs.map,style:J,interactive:!0,center:[this.viewState.longitude,this.viewState.latitude],zoom:this.viewState.zoom,bearing:0,pitch:this.viewState.pitch})}},G=q,Z=(a("4f5f"),Object(d["a"])(G,y,m,!1,null,"30b4f37e",null)),W=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stat_continer"},[a("div",{staticClass:"globa_stat"},[a("h3",[t._v(" City Level Statistics ")]),a("div",{staticClass:"block"},[a("el-carousel",{attrs:{trigger:"click",height:"35vh",autoplay:!1}},t._l(t.items,(function(e){return a("el-carousel-item",{key:e},["Radar"==e?a("Radar",{attrs:{width:400,height:300,chartData:t.radarChartData}}):t._e()],1)})),1)],1)]),a("div",{staticClass:"globa_stat"},[a("h3",[t._v(" POI Statistics ")]),a("div",{staticClass:"block"},[a("el-carousel",{attrs:{trigger:"click",height:"35vh",autoplay:!1}},t._l(t.items,(function(e){return a("el-carousel-item",{key:e},[a("DoughnutChart",{attrs:{width:400,height:400,chartData:t.dongnutChartData}})],1)})),1)],1)])])},U=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Radar",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},Q=[],Y=a("7b97"),tt=a("9b4a");tt["e"].register(tt["p"],tt["q"],tt["g"],tt["k"],tt["n"],tt["i"]);var et={name:"RadarChart",components:{Radar:Y["b"]},props:{chartId:{type:String,default:"radar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Object,default:function(){}},chartData:{type:Object,default:function(){}}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},at=et,it=Object(d["a"])(at,X,Q,!1,null,null,null),nt=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Doughnut",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},ct=[];tt["e"].register(tt["p"],tt["q"],tt["g"],tt["a"],tt["d"]);var st,rt={name:"DoughnutChart",components:{Doughnut:Y["a"]},props:{chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Object,default:function(){}},chartData:{type:Object,default:function(){}}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},lt=rt,dt=Object(d["a"])(lt,ot,ct,!1,null,null,null),ut=dt.exports,ht={name:"GlobalStat",components:{Radar:nt,DoughnutChart:ut},data:function(){return{items:["Radar"],radarChartData:{}}},computed:Object(g["a"])({},Object(N["b"])({statistics:function(t){return t.statistics},dongnutChartData:function(t){return t.poi_statistics}})),watch:{statistics:{handler:function(t){null!==t&&this.render(t)},deep:!0}},methods:{render:function(t){console.log(t);var e=Object.keys(t.index_detail),a=Object.values(t.index_detail),i={labels:Object(v["a"])(e),datasets:[{label:"City Level Accessibilty Score",backgroundColor:"#f67019",borderColor:"#f67019",pointBackgroundColor:"#f67019",pointBorderColor:"#fff",pointHoverBackgroundColor:"#f0f",pointHoverBorderColor:"#f67019",data:a}]};this.radarChartData=i}}},pt=ht,ft=(a("b123"),Object(d["a"])(pt,K,U,!1,null,"40467ed1",null)),gt=ft.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"city_select"},[a("el-button",{staticStyle:{"margin-right":"150px"},attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogVisible=!0}}},[t._v("Methodology Details")]),a("el-dialog",{attrs:{title:"Methodology",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("This is the methodology of the tool")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Done")])],1)]),a("div",{staticStyle:{padding:"1px 0"}},[a("el-select",{attrs:{placeholder:"Select City"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.cityList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1),a("el-radio-group",{staticStyle:{"margin-left":"20px"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:0}},[t._v("Default")]),a("el-radio-button",{attrs:{label:1}},[t._v("Add")]),a("el-radio-button",{attrs:{label:2}},[t._v("Delete")])],1)],1)],1)},mt=[],vt={name:"Select",data:function(){return{value:1,radio:0,dialogVisible:!1}},methods:{render:function(t){this.$store.commit("setCityData",t),this.$store.commit("setPois",t.pois.data),this.$store.commit("setStatistics",t.stats);var e={city_id:this.value,poi_category:"Vaccination centre",demographic_category:"Race",time_of_day:"morning"};this.$store.commit("setConfig",e)},update_callback:function(t){this.render(t)},handleClose:function(t){this.$confirm("Are you sure you want to close this box?").then((function(e){t()})).catch((function(t){}))}},computed:Object(N["b"])({cityList:function(t){return t.cityList},config:function(t){return t.config}}),watch:{value:function(t){console.log(t);var e=new B;e.switchCity(t,this.update_callback)},radio:function(t){this.$store.commit("setClickEvent",t)}}},bt=vt,_t=(a("cbff"),Object(d["a"])(bt,yt,mt,!1,null,"5ddf0a62",null)),kt=_t.exports,Ct=a("5698"),Ot={name:"Main",components:{Map:W,GlobalStat:gt,Select:kt},data:function(){return{poitypes:[],demographictypes:[],time_types:[]}},methods:{configure:function(t){console.log(t),this.poitypes=t.poi_categories,this.demographictypes=t.demographic_categories,this.time_types=t.times_of_day;for(var e=t.cities,a=[],i=0;i<e.length;i++)a.push({value:e[i].id,label:e[i].name});this.$store.commit("setCityList",a)},dummy_render:function(t){var e=this;new Promise((function(t,a){Ct["a"]("./dummy_data.csv").then((function(t){var a=t.map((function(t){return[Number(t.stop_lon),Number(t.stop_lat)]}));e.$store.commit("setPois",a)})),Ct["a"]("lat_lon_to_census_data.csv").then((function(t){var a=t.map((function(t){return{hex:H["c"](Number(t.lat),Number(t.lon),9),lon:Number(t.lon),lat:Number(t.lat),totpop:Number(t.pop_total),white:Number(t.pop_white),black:Number(t.pop_black),hisp:Number(t.pop_indian_alaskan),asian:Number(t.pop_asian)}}));a=a.reduce((function(t,e){return t[e.hex]?(t[e.hex].totpop+=e.totpop,t[e.hex].white+=e.white,t[e.hex].black+=e.black,t[e.hex].hisp+=e.hisp,t[e.hex].asian+=e.asian,t[e.hex].count+=1,t):(t[e.hex]=Object(g["a"])(Object(g["a"])({},e),{},{count:1}),t)}),{});var i=Object.keys(a).map((function(t){var e=a[t];return{hex:e.hex,totpop:e.totpop,count:e.count,white:e.white,black:e.black,hisp:e.hisp,asian:e.asian}}));e.$store.commit("setCityData",i)}))}))},render:function(t){this.$store.commit("setCityData",t),this.$store.commit("setPois",t.pois.data),this.$store.commit("setStatistics",t.stats)},init:function(){this.FEProxy.fetchConfig(this.configure),this.FEProxy.init(this.render)}},mounted:function(){this.FEProxy=new B,this.init()}},wt=Ot,xt=(a("cd16"),Object(d["a"])(wt,p,f,!1,null,"b91608ca",null)),jt=xt.exports,Pt={name:"App",components:{Compare:h,Main:jt},data:function(){return{currentPage:"Main"}},computed:{currentTabComponent:function(){return"main"===this.currentPage.toLowerCase()?jt:h}}},St=Pt,Dt=(a("7c55"),Object(d["a"])(St,n,o,!1,null,null,null)),It=Dt.exports;i["default"].use(N["a"]);var Tt=new N["a"].Store({state:{config:{city_id:1,poi_category:"Vaccination centre",demographic_category:"Race",time_of_day:"morning"},pois:null,cityData:{},cityList:{},clickEvent:0,statistics:{},poi_statistics:{labels:["None"],datasets:[{backgroundColor:["#A0A0A0"],data:[1]}]}},mutations:(st={setClickEvent:function(t,e){t.clickEvent=e},setPois:function(t,e){t.pois=e},addPoi:function(t,e){t.pois.push(e)},deletePoi:function(t,e){t.pois=t.pois.filter((function(t){return t.id!==e}))},setConfig:function(t,e){t.config=e},setCityData:function(t,e){t.cityData=e},setCityList:function(t,e){t.cityList=e},setStatistics:function(t,e){t.statistics=e},setPOIStatistics:function(t,e){t.poi_statistics=e},clearPOIStatistics:function(t){t.poi_statistics={labels:["None"],datasets:[{backgroundColor:["#A0A0A0"],data:[1]}]}},setConfigPOIType:function(t,e){t.config.poiType=e},setConfigCity:function(t,e){t.config.city_id=e},setConfigTimeofDay:function(t,e){t.config.time_of_day=e}},Object(b["a"])(st,"setConfigPOIType",(function(t,e){t.config.poi_category=e})),Object(b["a"])(st,"setConfigDemographicType",(function(t,e){t.config.demographic_category=e})),st),actions:{},modules:{}}),$t=a("5c96"),At=a.n($t);a("0fae");i["default"].config.productionTip=!1,i["default"].use(At.a),new i["default"]({store:Tt,render:function(t){return t(It)}}).$mount("#app")},"59be":function(t,e,a){},"7c55":function(t,e,a){"use strict";a("2395")},"7e9a":function(t,e,a){},b123:function(t,e,a){"use strict";a("7e9a")},c9a1:function(t,e,a){"use strict";a("de91")},cbff:function(t,e,a){"use strict";a("da2d")},cd16:function(t,e,a){"use strict";a("1862")},da2d:function(t,e,a){},de91:function(t,e,a){}});
//# sourceMappingURL=app.51ed3596.js.map
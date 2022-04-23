(function(t){function e(e){for(var i,s,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([3,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},1851:function(t,e,a){"use strict";a("cc4c")},2:function(t,e){},2395:function(t,e,a){},"261c":function(t,e,a){},3:function(t,e,a){t.exports=a("56d7")},4:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a(t.currentTabComponent,{tag:"component"})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},c=[],r={},l=r,d=a("2877"),u=Object(d["a"])(l,s,c,!1,null,null,null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"main_container"},[a("div",{staticClass:"select_map_container"},[a("Select"),a("Map",{attrs:{poi_types:t.poitypes,demographic_types:t.demographictypes,time_types:t.time_types}})],1),a("div",{staticClass:"stat_control_container"},[a("GlobalStat")],1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav_bar"},[a("div",[a("img",{staticClass:"nav_img",attrs:{src:"https://thumbs.gfycat.com/AgedHeavyHumpbackwhale.webp",alt:""}})]),a("span",{staticClass:"nav_title"},[t._v(" The Ease and Equity of Point of Interest Accessibility via Public Transit in the US ")])])}],g=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map",attrs:{id:"hex-map"}},[a("VueDeckgl",{ref:"deckgl",staticClass:"deck-map",attrs:{layers:t.layers,viewState:t.viewState,width:"70vw",height:"90vh"},on:{click:t.handleClick,"view-state-change":t.handleViewStateChange}}),a("div",{ref:"map",attrs:{id:"map"}}),a("el-popover",{staticClass:"control-panel",attrs:{placement:"bottom",width:"300",trigger:"click"}},[a("h3",[t._v("Accessibility statistics parameters")]),a("p",{staticClass:"demonstration cp-title"},[t._v("Point of interest type")]),a("el-radio-group",{model:{value:t.checkedPOITypes,callback:function(e){t.checkedPOITypes=e},expression:"checkedPOITypes"}},t._l(t.poi_types,(function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1),a("p",{staticClass:"demonstration"},[t._v("Time of Day")]),a("el-radio-group",{model:{value:t.time_of_day,callback:function(e){t.time_of_day=e},expression:"time_of_day"}},t._l(t.time_types,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1),a("el-divider"),a("p",{staticClass:"demonstration cp-title"},[t._v("Demographic Groups")]),a("el-cascader",{attrs:{options:t.options},model:{value:t.checkedDemographicTypes,callback:function(e){t.checkedDemographicTypes=e},expression:"checkedDemographicTypes"}}),a("el-divider"),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("Map opacity")]),a("el-slider",{staticStyle:{width:"200px"},attrs:{width:300,min:0,max:1,step:.01},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.clearCatchment}},[t._v("Clear visible catchments")]),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("Control Panel")])],1)],1)}),y=[],m=a("2909"),v=a("ade3"),_=a("5530"),b=(a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("d81d"),a("b64b"),a("07ac"),a("4de4"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deckgl-container",attrs:{width:t.width,height:t.height}},[t._t("default"),a("canvas",{ref:"canvas",attrs:{id:"deck-canvas"},on:{contextmenu:t.handleContextMenu}}),t._t("foreground")],2)}),C=[],k=(a("a9e3"),a("b680"),a("9b26")),w=a("5a2b"),O={name:"VueDeckgl",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},layers:{type:Array,default:function(){return[]}},viewState:{type:Object,default:function(){return{latitude:40.6971494,longitude:-74.2598655,zoom:12,pitch:0}},required:!0},cursor:{type:String,default:"default"},controller:{type:[Boolean,Object],default:!0},effects:{type:Array,default:function(){return[]}},disableContextMenu:{type:Boolean,default:!1}},data:function(){return{}},methods:{initializeDeck:function(t,e){var a=this;return new k["a"]({canvas:this.$refs.canvas,width:this.width,height:this.height,style:{"!position":"relative"},viewState:t,controller:this.controller,onViewStateChange:function(t){var e=t.viewState;a.deck.setProps({viewState:e}),a.$emit("view-state-change",e)},onClick:function(t,e){a.$emit("click",{info:t,event:e})},onDrag:function(t,e){a.$emit("drag",{info:t,event:e})},onDragStart:function(t,e){a.$emit("onDragStart",{info:t,event:e})},onDragEnd:function(t,e){a.$emit("onDragEnd",{info:t,event:e})},getCursor:function(t){var e=t.isDragging;return e?"grabbing":a.cursor||"grab"},layers:e,effects:this.effects,getTooltip:function(t){try{if("heatmap"===t.layer.id){var e=t.object,a="Total Population: ".concat(e.total.toFixed(0),"\n");for(var i in e.data)a+="".concat(i,": ").concat((100*Number(e.data[i])/e.total).toFixed(2),"%\n");return e&&{text:a,style:{position:"relative",fontSize:"12px",color:"#000",backgroundColor:"#efe",width:"260px",height:"155px",overflow:"scroll",marginLeft:"20px",marginTop:"20px",opacity:.75}}}var n=t.object,o="Category: ".concat(n.category,"\n");return o+="Name: ".concat(n.name,"\n"),n&&{text:o,style:{position:"relative",fontSize:"12px",color:"#000",backgroundColor:"#efe",width:"200px",height:"50px",overflow:"scroll",marginLeft:"20px",marginTop:"20px",opacity:.75}}}catch(s){return}}})},handleContextMenu:function(t){this.disableContextMenu&&t.preventDefault()}},watch:{layers:function(t){this.deck.setProps({layers:t})},viewState:{handler:function(t){this.deck.setProps({viewState:Object(_["a"])(Object(_["a"])({},t),{},{transitionInterpolator:new w["a"]})})},deep:!0},effects:function(t){this.deck.setProps({effects:t})}},created:function(){this.deck=null},mounted:function(){this.deck=this.initializeDeck(this.viewState,this.layers)},destroyed:function(){this.deck.finalize()}},x=O,S=(a("c9a1"),Object(d["a"])(x,b,C,!1,null,"408c3013",null)),j=S.exports,P=a("475f"),I=a("fbbb"),D=a("9043"),A=a("3614"),$=a("e192"),T=a.n($),L=a("2f62"),E=a("262e"),M=a("2caf"),R=a("d4ec"),N=a("bee2"),F=(a("e9c4"),function(){function t(){Object(R["a"])(this,t),this.obj={changed:[],config:{poi_category:"Vaccination centers",demographic_category:"Race",time_of_day:"morning",city_id:1},poi_list:{added:[],deleted:[]}}}return Object(N["a"])(t,[{key:"add_change",value:function(t){-1===this.obj.changed.indexOf(t)&&this.obj.changed.push(t)}},{key:"fill_poi_list",value:function(t){this.obj.poi_list=t}},{key:"update_config_field",value:function(t,e){this.obj.config[t]=e}},{key:"fill_config",value:function(t){this.obj.config=t}}]),t}()),z=function(){function t(){Object(R["a"])(this,t),this.ajax=new XMLHttpRequest}return Object(N["a"])(t,[{key:"api_endpoint",value:function(){return"/api"}},{key:"get",value:function(t,e){var a=this;console.log(this.api_endpoint()+t),this.ajax.open("GET",this.api_endpoint()+t,!1),this.ajax.onreadystatechange=function(){4===a.ajax.readyState&&200===a.ajax.status&&e(a.ajax.responseText)},this.ajax.send()}},{key:"post",value:function(t,e,a){var i=this;this.ajax.open("POST",this.api_endpoint()+t),this.ajax.setRequestHeader("Content-Type","application/json"),this.ajax.onreadystatechange=function(){4===i.ajax.readyState&&200===i.ajax.status&&a(i.ajax.responseText)},this.ajax.send(JSON.stringify(e))}}]),t}(),B=function(t){Object(E["a"])(a,t);var e=Object(M["a"])(a);function a(){return Object(R["a"])(this,a),e.call(this)}return Object(N["a"])(a,[{key:"fetchConfig",value:function(t){this.get("/configuration",(function(e){t(JSON.parse(e))}))}},{key:"init",value:function(t){var e=new F;e.add_change("poi_category"),e.add_change("demographic_category"),e.add_change("time_of_day"),this.post("/city_data/",e.obj,(function(e){t(JSON.parse(e))}))}},{key:"switchCity",value:function(t,e,a){var i=new F;i.add_change("poi_category"),i.add_change("demographic_category"),i.add_change("time_of_day"),a.city_id=t,i.fill_config(a),this.post("/city_data/",i.obj,(function(t){e(JSON.parse(t))}))}},{key:"updateConfig",value:function(t,e){this.post("/city_data/",e.obj,(function(e){t(JSON.parse(e))}))}},{key:"updatePOIs",value:function(t,e){this.get("/city_data/",(function(e){t(JSON.parse(e))}))}},{key:"fetchCatchement",value:function(t,e,a,i,n){this.get("/catchment/".concat(e,"/").concat(a,"?time_of_day=").concat(i,"&demographics_category=").concat(n),(function(e){t(e)}))}}]),a}(z),V=B,H=a("f75e"),J="mapbox://styles/mapbox/streets-v11",q={name:"Map",components:{VueDeckgl:j},props:{poi_types:{type:Array,require:!0},demographic_types:{type:Array,require:!0},time_types:{type:Array,require:!0}},data:function(){return{ICON_MAPPING:{marker:{x:0,y:0,width:128,height:128,mask:!0}},checkedPOITypes:"Vaccination centers",checkedDemographicTypes:["Race","all"],checkTimeTypes:[],data:null,viewState:{longitude:-84.388,latitude:33.749,zoom:11,minZoom:3,maxZoom:17,pitch:20},picked_poi_id:null,layers:[],hexagonLayer:null,scatterLayer:null,iconLayer:null,polygonLayer:null,map:null,coverage:1,opacity:.2,hex_set:new Set,time_of_day:"morning",options:[{value:"Race",label:"Race",children:[{value:"all",label:"All"},{value:"white",label:"White"},{value:"black",label:"Black"},{value:"asian",label:"Asian"},{value:"native",label:"American Indian and Native Alaskan"},{value:"hawaiian",label:"Native Hawaiian and Other Pacific Islander"}]},{value:"Age and Sex",label:"Age and Sex"},{value:"Income",label:"Income"},{value:"Origin",label:"Origin"},{value:"Vehicle Availability",label:"Vehicle Availability"}]}},computed:Object(_["a"])({},Object(L["b"])({cityData:function(t){return t.cityData},pois:function(t){return t.pois},clickEvent:function(t){return t.clickEvent},addedPois:function(t){return t.poisAdded}})),watch:{opacity:function(t,e){this.clearCatchment(),this.update_layers("hex")},pois:{handler:function(t){this.clearCatchment(),this.update_layers("scatter")},deep:!0},addedPois:{handler:function(t){this.clearCatchment(),this.update_layers("scatter"),console.log("AddedPOIs triggered")}},cityData:{handler:function(t){this.clearCatchment(),this.update_layers("hex");var e=t.long,a=t.lat,i=this.viewState;i.longitude=e,i.latitude=a,this.viewState=i,this.map.easeTo({center:[i.longitude,i.latitude],zoom:i.zoom,bearing:i.bearing,pitch:i.pitch})},deep:!0},checkedDemographicTypes:{handler:function(t){this.clearCatchment(),t[0]!==this.$store.state.config.demographic_category&&(this.$store.commit("setConfigDemographicType",t[0]),this.commit_config_change(["demographic_category"]),this.update_layers("hex"))},deep:!0},time_of_day:{handler:function(t){this.clearCatchment(),this.$store.commit("setConfigTimeofDay",t),this.commit_config_change(["time_of_day","demographic_category"])},deep:!0},checkedPOITypes:{handler:function(t){this.clearCatchment(),this.$store.commit("setConfigPOIType",t),this.$store.commit("clearPOIChanges");var e=["poi_category","demographic_category"];this.commit_config_change(e)},deep:!0}},methods:{commit_config_change:function(t){for(var e=this,a=new F,i=0;i<t.length;i++)a.add_change(t[i]);a.fill_config(this.$store.state.config),a.fill_poi_list({added:this.$store.state.poisAdded.map((function(t){return t.h3id})),deleted:this.$store.state.poisRemoved});var n=new V;n.updateConfig((function(t){null!==t.stats&&e.$store.commit("setStatistics",t.stats),null!==t.pois&&e.$store.commit("setPois",t.pois.data),null!==t.demographics&&e.$store.commit("setDemographics",t.demographics)}),a)},clearCatchment:function(){null!==this.polygonLayer&&(this.picked_poi_id=null,this.polygonLayer=null,this.$store.commit("clearPOIStatistics"),this.update_layers("scatter"),this.notify("Remove Catchments Succeed","All catchment areas removed",!0))},notify:function(t,e,a){a?this.$notify({title:t,message:e,duration:4500,type:"success"}):this.$notify.error({title:t,message:e,duration:4500})},handleCatchment:function(t){var e=JSON.parse(t),a=e.geometry.coordinates,i={labels:Object.keys(e.population_detail),datasets:[{backgroundColor:["#43A047","#0D6986","#8956FF","#f93e6e","#EF5411","#5C4B51","#cc773f","#D64045","#467599","#546A7B"],data:Object.values(e.population_detail)}]};this.$store.commit("setPOIStatistics",i),this.update_layers("polygon",a)},handleClickChain:function(t){try{if(0===this.clickEvent)if("heatmap"===t.info.layer.id)this.clearCatchment();else{this.picked_poi_id=t.info.object.id,this.update_layers("scatter");var e=new V;e.fetchCatchement(this.handleCatchment,this.$store.state.config.city_id,t.info.object.h3id,this.time_of_day,this.checkedDemographicTypes[0])}else this.handleAddPOI(t)}catch(a){return void this.notify("Error","No POI data found or "+a,!1)}},handleAddPOI:function(t){var e=this;if(1===this.clickEvent)if("heatmap"===t.info.layer.id){var a={long:t.info.coordinate[0],lat:t.info.coordinate[1],name:"Unknown ".concat(this.checkedPOITypes),h3id:H["c"](t.info.coordinate[1],t.info.coordinate[0],9),id:-1*this.addedPois.length-1,category:this.checkedPOITypes,coords:{lat:t.info.coordinate[1],long:t.info.coordinate[0]},fake:!0};this.$store.commit("addPOI",a),console.log(this.$store.state.poisAdded);var i=new F;i.add_change("poi_add"),i.fill_config(this.$store.state.config),i.fill_poi_list({added:this.$store.state.poisAdded.map((function(t){return t.h3id})),deleted:this.$store.state.poisRemoved});var n=new V;n.updateConfig((function(t){e.$store.commit("setStatistics",t.stats)}),i),this.notify("Add POI Succeed","It may take a while to recalculate",!0)}else this.notify("Add POI Failed","Cannot add POI on a existing POI",!1);else this.handleRemovePOI(t)},handleRemovePOI:function(t){var e=this;if(2!==this.clickEvent)throw new Error("Invalid clickEvent");if("heatmap"===t.info.layer.id)this.notify("Remove POI Failed","Cannot remove an unexisting POI",!1);else{this.$store.commit("removePOI",t.info.object.h3id);var a=new F;a.add_change("poi_remove"),a.fill_config(this.$store.state.config),a.fill_poi_list({added:this.$store.state.poisAdded.map((function(t){return t.h3id})),deleted:this.$store.state.poisRemoved});var i=new V;i.updateConfig((function(t){e.$store.commit("setStatistics",t.stats),e.$store.commit("setPois",t.pois.data)}),a),this.notify("Remove POI Succeed","It may take a while to recalculate",!0)}},handleClick:function(t){this.handleClickChain(t)},handleViewStateChange:function(t){this.viewState=Object(_["a"])({},t),null!==this.map&&this.map.jumpTo({center:[t.longitude,t.latitude],zoom:t.zoom,bearing:t.bearing,pitch:t.pitch})},createPolyonLayer:function(t){var e=t,a=new P["a"]({id:"polygon-layer",data:e,pickable:!1,stroked:!0,filled:!0,wireframe:!0,lineWidthMinPixels:1,getPolygon:function(t){return t},opacity:.5,getFillColor:function(t){return[60,140,0]},getLineColor:[80,80,80],getLineWidth:1});return a},createHexagonLayer:function(){for(var t=this,e=0,a=0;a<this.cityData.demographics.data.length;a++){var i=this.cityData.demographics.data[a];e+=i.accessibility}e/=this.cityData.demographics.data.length;var n=this.cityData.demographics.data.filter((function(t){return t.total>0})),o=new A["a"](Object(v["a"])({id:"heatmap",data:n,elevationRange:[0,0],opacity:.2,wireframe:!1,filled:!0,extruded:!1,pickable:!0,getHexagon:function(t){return t.h3id},getFillColor:function(a){return t.hex_set.has(a.h3id)?[0,0,0]:[170,a.accessibility/(2*e)*255,0]},coverage:this.coverage},"opacity",this.opacity));return o||null},createScatterLayer:function(){var t=this;console.log("Redrawing the layer of Scatter...");var e=new I["a"]({id:"scatterplot-layer",data:[].concat(Object(m["a"])(this.pois),Object(m["a"])(this.$store.state.poisAdded)),pickable:!0,opacity:.8,stroked:!0,filled:!0,radiusScale:6,radiusMinPixels:5,radiusMaxPixels:3,lineWidthMinPixels:1,getPosition:function(t){return[t.long,t.lat]},getRadius:function(t){return 4},getFillColor:function(e){return t.picked_poi_id===e.id?[0,255,255]:e.fake?[255,0,0]:[170,10,217]},updateTriggers:{getFillColor:this.picked_poi_id},getLineColor:function(t){return[0,0,0]}});return e||null},createIconLayer:function(){var t=new D["a"]({id:"icon-layer",data:this.pois,pickable:!0,iconAtlas:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",iconMapping:this.ICON_MAPPING,getIcon:function(t){return"marker"},sizeScale:9,getPosition:function(t){return[t.long,t.lat]},getSize:function(t){return 5},getColor:function(t){return[0,128,255]}});return t||null},update_layers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"all"!==t&&"hex"!==t||(this.hexagonLayer=this.createHexagonLayer()),"all"!==t&&"scatter"!==t||(this.scatterLayer=this.createScatterLayer()),"all"!==t&&"polygon"!==t||(this.polygonLayer=this.createPolyonLayer(e)),this.$refs["deckgl"].deck.setProps({layers:[this.hexagonLayer,this.scatterLayer,this.polygonLayer]})}},mounted:function(){this.map=new T.a.Map({accessToken:"pk.eyJ1Ijoic2VuZGF5byIsImEiOiJjams4MjdqOXAyZ2VrM3BydDRzeTR4cjBsIn0.Hk0FF4BvDNJZeDAZZiPlcg",container:this.$refs.map,style:J,interactive:!0,center:[this.viewState.longitude,this.viewState.latitude],zoom:this.viewState.zoom,bearing:0,pitch:this.viewState.pitch})}},G=q,W=(a("7281"),Object(d["a"])(G,g,y,!1,null,"439f2eb7",null)),Z=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stat_continer"},[a("div",{staticClass:"globa_stat"},[a("h3",[t._v(" City Level Statistics ")]),a("div",{staticClass:"block"},[a("el-carousel",{attrs:{trigger:"click",height:"35vh",autoplay:!1}},t._l(t.items,(function(e){return a("el-carousel-item",{key:e},["Bar"==e?a("BarChart",{attrs:{width:t.barWidth,height:t.barHeight,chartData:t.radarChartData}}):t._e()],1)})),1)],1)]),a("div",{staticClass:"globa_stat"},[a("h3",[t._v(" Catchment Area Demographics (on POI click) ")]),a("div",{staticClass:"block"},[a("el-carousel",{attrs:{trigger:"click",height:"35vh",autoplay:!1}},t._l(t.items,(function(e){return a("el-carousel-item",{key:e},[a("DoughnutChart",{attrs:{width:400,height:400,chartData:t.dongnutChartData}})],1)})),1)],1)])])},U=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Bar",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},X=[],Y=a("7b97"),tt=a("d9fa"),et=a("9b4a");et["f"].register(et["p"],et["q"],et["h"],et["c"],et["e"],et["j"],tt["a"]);var at={name:"BarChart",components:{Bar:Y["a"]},props:{chartId:{type:String,default:"bar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Object,default:function(){}},chartData:{type:Object,default:function(){return{labels:["January","February","March","April","May","June","July"],datasets:[{data:[40,20,12,15,18,30,24]}]}}}},data:function(){return{chartOptions:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{formatter:function(t,e){return t.toFixed(3)}}}}}}},it=at,nt=Object(d["a"])(it,Q,X,!1,null,null,null),ot=nt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Doughnut",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},ct=[];et["f"].register(et["p"],et["q"],et["h"],et["a"],et["e"]);var rt,lt={name:"DoughnutChart",components:{Doughnut:Y["b"]},props:{chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Object,default:function(){}},chartData:{type:Object,default:function(){}}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{formatter:function(t,e){return""}}}}}}},dt=lt,ut=Object(d["a"])(dt,st,ct,!1,null,null,null),ht=ut.exports,pt={name:"GlobalStat",components:{BarChart:ot,DoughnutChart:ht},data:function(){return{items:["Bar"],radarChartData:{}}},computed:Object(_["a"])(Object(_["a"])({},Object(L["b"])({statistics:function(t){return t.statistics},dongnutChartData:function(t){return t.poi_statistics}})),{},{barWidth:function(){return 400},barHeight:function(){return 300}}),watch:{statistics:{handler:function(t){null!==t&&this.render(t)},deep:!0}},methods:{render:function(t){var e=Object.keys(t.index_detail),a=Object.values(t.index_detail),i={labels:Object(m["a"])(e),datasets:[{label:"City Level Accessibility Score",backgroundColor:"#f67019",borderColor:"#f67019",pointBackgroundColor:"#f67019",pointBorderColor:"#fff",pointHoverBackgroundColor:"#f0f",pointHoverBorderColor:"#f67019",data:a}]};this.radarChartData=i}}},ft=pt,gt=(a("1851"),Object(d["a"])(ft,K,U,!1,null,"56efa408",null)),yt=gt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"city_select"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("City Analyzed:")]),a("div",{staticStyle:{padding:"1px 0"}},[a("el-select",{attrs:{placeholder:"Select City"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.cityList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1),a("span",{staticStyle:{"margin-right":"10px","margin-left":"20px"}},[t._v("Interaction:")]),a("el-radio-group",{staticStyle:{"margin-left":"10px"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:0}},[t._v("Explore")]),a("el-radio-button",{attrs:{label:1}},[t._v("Add New POIs")]),a("el-radio-button",{attrs:{label:2}},[t._v("Remove POIs")])],1)],1),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogVisible=!0}}},[t._v("Methodology Details")]),a("el-dialog",{attrs:{title:"Methodology",visible:t.dialogVisible,width:"42%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("p",{staticClass:"method"},[t._v("We employed a "),a("strong",[t._v("custom, Dockerized travel time isochrone service ")]),t._v("based on OpenTripPlanner which computes accurate isochrones based on supplied GTFS and OSM data.")]),a("p",{staticClass:"method"},[t._v("We also created a normalized dataset with "),a("strong",[t._v("GeoPandas")]),t._v(" and Uber’s "),a("strong",[t._v("H3 hexagons")]),t._v(" being the atomic unit of location. The mapping is done by finding the hex which overlaps with a given POI. The area of each hex was set to be ~0.1 km2.")]),a("p",{staticClass:"method"},[t._v("Isochrones were combined with the Census data to compute the accessibility index using the "),a("strong",[t._v("2SFCA")]),t._v(" method – an interpretable gravity model")]),a("p",{staticClass:"method"},[t._v("All the data was stored in a "),a("strong",[t._v("PostgreSQL")]),t._v(" database and cached using "),a("strong",[t._v("Redis")]),t._v(" for low-latency querying.")]),a("p",{staticClass:"method"},[t._v("The tool was developed with "),a("strong",[t._v("FastAPI, Vue.js,")]),t._v(" and the "),a("strong",[t._v("Deck.GL")]),t._v(" mapping library was used to display the interactive visualization on the H3 hexagon scale. City and catchment level statistics were displayed using "),a("strong",[t._v("Chart.js")]),t._v(" and drew from the PostgreSQL backend.")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Done")])],1)])],1)},vt=[],_t={name:"Select",data:function(){return{value:1,radio:0,dialogVisible:!1}},methods:{render:function(t){this.$store.commit("setCityData",t),this.$store.commit("setPois",t.pois.data),this.$store.commit("setStatistics",t.stats)},update_callback:function(t){this.render(t)},handleClose:function(t){this.$confirm("Are you sure you want to close this box?").then((function(e){t()})).catch((function(t){}))}},computed:Object(L["b"])({cityList:function(t){return t.cityList},config:function(t){return t.config}}),watch:{value:function(t){console.log(t);var e=new V;console.log("Switching city"),this.$store.commit("clearPOIChanges"),e.switchCity(t,this.update_callback,this.$store.state.config)},radio:function(t){this.$store.commit("setClickEvent",t)}}},bt=_t,Ct=(a("659a"),Object(d["a"])(bt,mt,vt,!1,null,"3c788ba4",null)),kt=Ct.exports,wt=(a("5698"),{name:"Main",components:{Map:Z,GlobalStat:yt,Select:kt},data:function(){return{poitypes:[],demographictypes:[],time_types:[]}},methods:{configure:function(t){console.log(t),this.poitypes=t.poi_categories,this.demographictypes=t.demographic_categories,this.time_types=t.times_of_day;for(var e=t.cities,a=[],i=0;i<e.length;i++)a.push({value:e[i].id,label:e[i].name});this.$store.commit("setCityList",a)},render:function(t){this.$store.commit("setCityData",t),this.$store.commit("setPois",t.pois.data),this.$store.commit("setStatistics",t.stats)},init:function(){this.FEProxy.fetchConfig(this.configure),this.FEProxy.init(this.render)}},mounted:function(){this.FEProxy=new V,this.init()}}),Ot=wt,xt=(a("67b4"),Object(d["a"])(Ot,p,f,!1,null,"056cb136",null)),St=xt.exports,jt={name:"App",components:{Compare:h,Main:St},data:function(){return{currentPage:"Main"}},computed:{currentTabComponent:function(){return"main"===this.currentPage.toLowerCase()?St:h}}},Pt=jt,It=(a("7c55"),Object(d["a"])(Pt,n,o,!1,null,null,null)),Dt=It.exports;i["default"].use(L["a"]);var At=new L["a"].Store({state:{config:{city_id:1,poi_category:"Vaccination centers",demographic_category:"Race",time_of_day:"morning"},pois:null,cityData:{},cityList:{},demographics:{},poisAdded:[],poisRemoved:[],clickEvent:0,statistics:{},poi_statistics:{labels:["None"],datasets:[{backgroundColor:["#A0A0A0"],data:[1]}]}},mutations:(rt={setClickEvent:function(t,e){t.clickEvent=e},setPois:function(t,e){t.pois=e},clearPOIChanges:function(t){t.poisAdded=[],t.poisRemoved=[]},addPOI:function(t,e){t.poisAdded.push(e)},removePOI:function(t,e){t.poisRemoved.push(e),t.poisAdded=t.poisAdded.filter((function(t){return t.h3id!=e}))},setConfig:function(t,e){t.config=e},setCityData:function(t,e){t.cityData=e},setDemographics:function(t,e){t.cityData.demographics=e},setCityList:function(t,e){t.cityList=e},setStatistics:function(t,e){t.statistics=e},setPOIStatistics:function(t,e){t.poi_statistics=e},clearPOIStatistics:function(t){t.poi_statistics={labels:["None"],datasets:[{backgroundColor:["#A0A0A0"],data:[1]}]}},setConfigPOIType:function(t,e){t.config.poiType=e},setConfigCity:function(t,e){t.config.city_id=e},setConfigTimeofDay:function(t,e){t.config.time_of_day=e}},Object(v["a"])(rt,"setConfigPOIType",(function(t,e){t.config.poi_category=e})),Object(v["a"])(rt,"setConfigDemographicType",(function(t,e){t.config.demographic_category=e})),rt),actions:{},modules:{}}),$t=a("5c96"),Tt=a.n($t);a("0fae");i["default"].config.productionTip=!1,i["default"].use(Tt.a),new i["default"]({store:At,render:function(t){return t(Dt)}}).$mount("#app")},"659a":function(t,e,a){"use strict";a("ea35")},"67b4":function(t,e,a){"use strict";a("8706")},7281:function(t,e,a){"use strict";a("261c")},"7c55":function(t,e,a){"use strict";a("2395")},8706:function(t,e,a){},c9a1:function(t,e,a){"use strict";a("de91")},cc4c:function(t,e,a){},de91:function(t,e,a){},ea35:function(t,e,a){}});
//# sourceMappingURL=app.55a52b59.js.map
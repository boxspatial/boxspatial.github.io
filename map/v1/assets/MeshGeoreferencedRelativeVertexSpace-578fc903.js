import{aS as a,a as n,K as l,bL as p,ah as o,gc as c,ai as g,al as d,dt as y}from"./index-eed032b4.js";let r=class extends a(y){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=n()}getOriginPoint(e){const[t,i,s]=this.origin;return new l({x:t,y:i,z:s,spatialReference:e})}setOriginFormPoint({x:e,y:t,z:i}){this.origin=p(e,t,i??0)}};o([c({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([g({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([d("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const f=r;export{f as m};
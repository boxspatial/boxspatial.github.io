import{ah as I,al as L}from"./index-edf1cead.js";import{n as M}from"./BitmapTileContainer-ec7e6b9a.js";const b=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new M(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren()}};return e=I([L("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function C(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function T(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function y(t,e,i,o){if(i.level===o.level)return e;const n=t.tileInfo.size,l=t.getTileResolution(i.level),r=t.getTileResolution(o.level);let a=t.getLODInfoAt(o.level);const m=a.getXForColumn(o.col),d=a.getYForRow(o.row);a=t.getLODInfoAt(i.level);const u=a.getXForColumn(i.col),w=a.getYForRow(i.row),s=C(e)/n[0],h=T(e)/n[1],g=Math.round(s*((m-u)/l)),f=Math.round(h*(-(d-w)/l)),v=Math.round(s*n[0]*(r/l)),p=Math.round(h*n[1]*(r/l)),c=V(n);return c.getContext("2d").drawImage(e,g,f,v,p,0,0,n[0],n[1]),c}function V(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{y as n,V as o,b as t};

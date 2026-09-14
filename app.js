var Tn={smallSpawnProbability:[.12,.18,1],smallSpawnCount:[1,1,15],depletionSpawnCount:[2,3,5],coreThreshold:15,smallStone:{hp:54,speed:5.7,emergeSeconds:1.6,spawnStagger:.12,mergeSeconds:.65},warningSeconds:1.6,formingSeconds:4.5,kneelSeconds:8,harvestSeconds:[3.4,4.2,5.2],occupationRadius:[5,7.5,10],occupation:{captureSeconds:3,productionSeconds:3,graceSeconds:2}};function oh(i=Math.random){let e=0,t=!1,n=new Map,s=new Set,r=new Set,o=[],a=(l=!1)=>({count:e,threshold:Tn.coreThreshold,triggered:t,newlyTriggered:l});return{harvest(l){if(t||!Number.isInteger(l.remaining)||l.remaining<0||!Number.isInteger(l.grade)||l.grade<1||l.grade>3)return null;let c=n.get(l.id);if(c?.has(l.remaining)||s.has(l.id))return null;c||(c=new Set,n.set(l.id,c)),c.add(l.remaining);let u=l.remaining===0,h=u?null:Tn.smallSpawnProbability[l.grade-1],f=!u&&h===1,d=u||f?null:i(),g=u?Tn.depletionSpawnCount[l.grade-1]:f||d<h?Tn.smallSpawnCount[l.grade-1]:0;u&&s.add(l.id);let x={type:"harvest",mine:l.id,grade:l.grade,remaining:l.remaining,count:g,reason:u?"depletion":f?"production":"random",roll:d,chance:h};return o.push(x),{...x}},arrive(l){if(t||r.has(l))return a();r.add(l),e++,t=e>=Tn.coreThreshold;let c=a(t);return o.push({type:"arrival",id:l,...c}),c},stop(){t||o.push({type:"stop",count:e,threshold:Tn.coreThreshold}),t=!0},snapshot(){return{count:e,threshold:Tn.coreThreshold,triggered:t,exhausted:[...s],history:o.map(l=>({...l}))}}}}function jd(i,e,t,n){let s=r=>r.kind==="enemy"?"rival":"player";return!i.transit&&t.some(r=>!r.dead&&!r.transit&&r.floor===e.floor&&s(r)!==s(i)&&Math.hypot(r.pos.x-e.pos.x,r.pos.z-e.pos.z)<=n)}var Hp=0,Zh=1,Vp=2;var Na=1,Sc=2,To=3,Nn=0,on=1,St=2,ai=0,ds=1,Sr=2,Kh=3,$h=4,Gp=5;var Bs=100,Wp=101,Xp=102,qp=103,Yp=104,Zp=200,Kp=201,$p=202,Jp=203,Kl=204,$l=205,jp=206,Qp=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,Jl=0,jl=1,Ql=2,cr=3,ec=4,tc=5,nc=6,ic=7,Ua=0,am=1,lm=2,Ci=0,Oa=1,Ba=2,ka=3,wr=4,za=5,Ha=6,Va=7,Fh="attached",cm="detached",Jh=300,qs=301,Tr=302,Eo=303,wc=304,Ga=306,Un=1e3,Fn=1001,lo=1002,Zt=1003,Tc=1004;var Er=1005;var Kt=1006,Ao=1007;var Ii=1008;var Xn=1009,jh=1010,Qh=1011,Ro=1012,Ec=1013,Pi=1014,ei=1015,li=1016,Ac=1017,Rc=1018,Co=1020,ef=35902,tf=35899,nf=1021,sf=1022,ti=1023,Zi=1026,Ys=1027,Cc=1028,Ic=1029,Zs=1030,Pc=1031;var Lc=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Dc=35840,Fc=35841,Nc=35842,Uc=35843,Oc=36196,Bc=37492,kc=37496,zc=37488,Hc=37489,Za=37490,Vc=37491,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,Zc=37813,Kc=37814,$c=37815,Jc=37816,jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,su=36494,ru=36495,ou=36283,au=36284,Ka=36285,lu=36286,cu=2200,uu=2201,um=2202,ur=2300,hr=2301,Zl=2302,Nh=2303,or=2400,ar=2401,oa=2402,hu=2500,hm=2501,rf=0,$a=1,Io=2,fm=3200;var Po=0,dm=1,Li="",tt="srgb",xn="srgb-linear",aa="linear",vt="srgb";var rr=7680;var Uh=519,pm=512,mm=513,gm=514,fu=515,xm=516,vm=517,du=518,ym=519,sc=35044;var of="300 es",_i=2e3,co=2001;function R0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function C0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _m(){let i=uo("canvas");return i.style.display="block",i}var Qd={},ho=null;function la(...i){let e="THREE."+i.shift();ho?ho("log",e,...i):console.log(e,...i)}function Mm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Mm(i);let e="THREE."+i.shift();if(ho)ho("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Mm(i);let e="THREE."+i.shift();if(ho)ho("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function lr(...i){let e=i.join(" ");e in Qd||(Qd[e]=!0,Oe(...i))}function bm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sm={[Jl]:jl,[Ql]:nc,[ec]:ic,[cr]:tc,[jl]:Jl,[nc]:Ql,[ic]:ec,[tc]:cr},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=1234567,sa=Math.PI/180,fr=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function af(i,e){return(i%e+e)%e}function I0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function P0(i,e,t){return i!==e?(t-i)/(e-i):0}function ra(i,e,t){return(1-t)*i+t*e}function L0(i,e,t,n){return ra(i,e,1-Math.exp(-t*n))}function D0(i,e=1){return e-Math.abs(af(i,e*2)-e)}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function N0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function U0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function O0(i,e){return i+Math.random()*(e-i)}function B0(i){return i*(.5-Math.random())}function k0(i){i!==void 0&&(ep=i);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function z0(i){return i*sa}function H0(i){return i*fr}function V0(i){return(i&i-1)===0&&i!==0}function G0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function W0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ot={DEG2RAD:sa,RAD2DEG:fr,generateUUID:Mi,clamp:Je,euclideanModulo:af,mapLinear:I0,inverseLerp:P0,lerp:ra,damp:L0,pingpong:D0,smoothstep:F0,smootherstep:N0,randInt:U0,randFloat:O0,randFloatSpread:B0,seededRandom:k0,degToRad:z0,radToDeg:H0,isPowerOfTwo:V0,ceilPowerOfTwo:G0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:wt,denormalize:yi},ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;var He=ff,At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),_=Math.sin(M);p=Math.sin(p*M)/_,a=Math.sin(a*M)/_,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},df=class df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};df.prototype.isVector3=!0;var O=df,ah=new O,tp=new At,pf=class pf{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],v=s[7],E=s[2],T=s[5],A=s[8];return r[0]=o*x+a*M+l*E,r[3]=o*m+a*_+l*T,r[6]=o*p+a*v+l*A,r[1]=c*x+u*M+h*E,r[4]=c*m+u*_+h*T,r[7]=c*p+u*v+h*A,r[2]=f*x+d*M+g*E,r[5]=f*m+d*_+g*T,r[8]=f*p+d*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;var qe=pf,lh=new qe,np=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q0(){let i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:e,whitePoint:n,transfer:aa,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var Ze=q0();function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=uo("canvas")),Xr.width=e.width,Xr.height=e.height;let s=Xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y0=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ch(s[o].image)):r.push(ch(s[o]))}else r=ch(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Z0=0,uh=new O,$t=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Kt,o=Ii,a=ti,l=Xn,c=i.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Mi(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Jh;$t.DEFAULT_ANISOTROPY=1;var mf=class mf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,T=(u+f)/4,A=(h+x)/4,y=(g+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-x)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;var lt=mf,oc=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new $t(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ca=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bc=class bc{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,$0)}lookAt(e,t,n){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ls.crossVectors(n,jn),Ls.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ls.crossVectors(n,jn)),Ls.normalize(),yl.crossVectors(jn,Ls),s[0]=Ls.x,s[4]=yl.x,s[8]=jn.x,s[1]=Ls.y,s[5]=yl.y,s[9]=jn.y,s[2]=Ls.z,s[6]=yl.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],v=n[11],E=n[15],T=s[0],A=s[4],y=s[8],C=s[12],U=s[1],S=s[5],P=s[9],L=s[13],B=s[2],D=s[6],z=s[10],X=s[14],j=s[3],re=s[7],fe=s[11],R=s[15];return r[0]=o*T+a*U+l*B+c*j,r[4]=o*A+a*S+l*D+c*re,r[8]=o*y+a*P+l*z+c*fe,r[12]=o*C+a*L+l*X+c*R,r[1]=u*T+h*U+f*B+d*j,r[5]=u*A+h*S+f*D+d*re,r[9]=u*y+h*P+f*z+d*fe,r[13]=u*C+h*L+f*X+d*R,r[2]=g*T+x*U+m*B+p*j,r[6]=g*A+x*S+m*D+p*re,r[10]=g*y+x*P+m*z+p*fe,r[14]=g*C+x*L+m*X+p*R,r[3]=M*T+_*U+v*B+E*j,r[7]=M*A+_*S+v*D+E*re,r[11]=M*y+_*P+v*z+E*fe,r[15]=M*C+_*L+v*X+E*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=l*d-c*f,_=a*d-c*h,v=a*f-l*h,E=o*d-c*u,T=o*f-l*u,A=o*h-a*u;return t*(x*M-m*_+p*v)-n*(g*M-m*E+p*T)+s*(g*_-x*E+p*A)-r*(g*v-x*T+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*a-n*o,_=t*l-s*o,v=t*c-r*o,E=n*l-s*a,T=n*c-r*a,A=s*c-r*l,y=u*x-h*g,C=u*m-f*g,U=u*p-d*g,S=h*m-f*x,P=h*p-d*x,L=f*p-d*m,B=M*L-_*P+v*S+E*U-T*C+A*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/B;return e[0]=(a*L-l*P+c*S)*D,e[1]=(s*P-n*L-r*S)*D,e[2]=(x*A-m*T+p*E)*D,e[3]=(f*T-h*A-d*E)*D,e[4]=(l*U-o*L-c*C)*D,e[5]=(t*L-s*U+r*C)*D,e[6]=(m*v-g*A-p*_)*D,e[7]=(u*A-f*v+d*_)*D,e[8]=(o*P-a*U+c*y)*D,e[9]=(n*U-t*P-r*y)*D,e[10]=(g*T-x*v+p*M)*D,e[11]=(h*v-u*T-d*M)*D,e[12]=(a*C-o*S-l*y)*D,e[13]=(t*S-n*C+s*y)*D,e[14]=(x*_-g*E-m*M)*D,e[15]=(u*E-h*_+f*M)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,M=l*c,_=l*u,v=l*h,E=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(m-M)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=qr.set(s[0],s[1],s[2]).length(),a=qr.set(s[4],s[5],s[6]).length(),l=qr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let c=1/o,u=1/a,h=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===_i)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===co)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===_i)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===co)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bc.prototype.isMatrix4=!0;var Ae=bc,qr=new O,gi=new Ae,K0=new O(0,0,0),$0=new O(1,1,1),Ls=new O,yl=new O,jn=new O,sp=new Ae,rp=new At,zt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zt.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},J0=0,op=new O,Yr=new At,os=new Ae,_l=new O,Ko=new O,j0=new O,Q0=new At,ap=new O(1,0,0),lp=new O(0,1,0),cp=new O(0,0,1),up={type:"added"},ex={type:"removed"},Zr={type:"childadded",child:null},hh={type:"childremoved",child:null},gt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new zt,n=new At,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new qe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_l.copy(e):_l.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Ko,_l,this.up):os.lookAt(_l,Ko,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(os),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,j0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=af(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fh(o,r,e+1/3),this.g=fh(o,r,e),this.b=fh(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Ze.workingToColorSpace(An.copy(this),e),Math.round(Je(An.r*255,0,255))*65536+Math.round(Je(An.g*255,0,255))*256+Math.round(Je(An.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=tt){Ze.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Ml);let n=ra(Ds.h,Ml.h,t),s=ra(Ds.s,Ml.s,t),r=ra(Ds.l,Ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new ve;ve.NAMES=wm;var ua=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new O,as=new O,dh=new O,ls=new O,Kr=new O,$r=new O,hp=new O,ph=new O,mh=new O,gh=new O,xh=new lt,vh=new lt,yh=new lt,qi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),as.subVectors(n,t),dh.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(as),l=xi.dot(dh),c=as.dot(as),u=as.dot(dh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return xh.setScalar(0),vh.setScalar(0),yh.setScalar(0),xh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xh,r.x),o.addScaledVector(vh,r.y),o.addScaledVector(yh,r.z),o}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),as.subVectors(e,t),xi.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),xi.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Kr.subVectors(s,n),$r.subVectors(r,n),ph.subVectors(e,n);let l=Kr.dot(ph),c=$r.dot(ph);if(l<=0&&c<=0)return t.copy(n);mh.subVectors(e,s);let u=Kr.dot(mh),h=$r.dot(mh);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Kr,o);gh.subVectors(e,r);let d=Kr.dot(gh),g=$r.dot(gh);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($r,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return hp.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(hp,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Kr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bl.copy(n.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Sl.subVectors(this.max,$o),Jr.subVectors(e.a,$o),jr.subVectors(e.b,$o),Qr.subVectors(e.c,$o),Fs.subVectors(jr,Jr),Ns.subVectors(Qr,jr),tr.subVectors(Jr,Qr);let t=[0,-Fs.z,Fs.y,0,-Ns.z,Ns.y,0,-tr.z,tr.y,Fs.z,0,-Fs.x,Ns.z,0,-Ns.x,tr.z,0,-tr.x,-Fs.y,Fs.x,0,-Ns.y,Ns.x,0,-tr.y,tr.x,0];return!_h(t,Jr,jr,Qr,Sl)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,Jr,jr,Qr,Sl))?!1:(wl.crossVectors(Fs,Ns),t=[wl.x,wl.y,wl.z],_h(t,Jr,jr,Qr,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cs=[new O,new O,new O,new O,new O,new O,new O,new O],vi=new O,bl=new Bn,Jr=new O,jr=new O,Qr=new O,Fs=new O,Ns=new O,tr=new O,$o=new O,Sl=new O,wl=new O,nr=new O;function _h(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){nr.fromArray(i,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=n.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nn=new O,Tl=new He,nx=0,sn=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var De=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ix=new Bn,Jo=new O,Mh=new O,Hn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);let t=Jo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Mh)),this.expandByPoint(Jo.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sx=0,si=new Ae,bh=new gt,eo=new O,Qn=new Bn,jo=new Bn,dn=new O,nt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?ha:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Qn.min,jo.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,jo.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(jo.min),Qn.expandByPoint(jo.max))}Qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dn.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),dn.add(eo)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new O,l[y]=new O;let c=new O,u=new O,h=new O,f=new He,d=new He,g=new He,x=new O,m=new O;function p(y,C,U){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,U),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(S),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(S),a[y].add(x),a[C].add(x),a[U].add(x),l[y].add(m),l[C].add(m),l[U].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,C=M.length;y<C;++y){let U=M[y],S=U.start,P=U.count;for(let L=S,B=S+P;L<B;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new O,v=new O,E=new O,T=new O;function A(y){E.fromBufferAttribute(s,y),T.copy(E);let C=a[y];_.copy(C),_.sub(E.multiplyScalar(E.dot(C))).normalize(),v.crossVectors(T,C);let S=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,S)}for(let y=0,C=M.length;y<C;++y){let U=M[y],S=U.start,P=U.count;for(let L=S,B=S+P;L<B;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new sn(f,u,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new O,xo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rx=0,Rn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ds,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=$l,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kl&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var us=new O,Sh=new O,El=new O,Us=new O,wh=new O,Al=new O,Th=new O,ks=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sh.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Us.copy(this.origin).sub(Sh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=Us.dot(this.direction),l=-Us.dot(El),c=Us.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sh).addScaledVector(El,f),d}intersectSphere(e,t){us.subVectors(e.center,this.origin);let n=us.dot(this.direction),s=us.dot(us)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,s,r){wh.subVectors(t,e),Al.subVectors(n,e),Th.crossVectors(wh,Al);let o=this.direction.dot(Th),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Us.subVectors(this.origin,e);let l=a*this.direction.dot(Al.crossVectors(Us,Al));if(l<0)return null;let c=a*this.direction.dot(wh.cross(Us));if(c<0||l+c>o)return null;let u=-a*Us.dot(Th);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fp=new Ae,ir=new ks,Rl=new Hn,dp=new O,Cl=new O,Il=new O,Pl=new O,Eh=new O,Ll=new O,pp=new O,Dl=new O,Re=class extends gt{constructor(e=new nt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Eh.fromBufferAttribute(h,e),o?Ll.addScaledVector(Eh,u):Ll.addScaledVector(Eh.sub(t),u))}t.add(Ll)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(Rl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Rl,dp)===null||ir.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),ir.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){let T=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=Fl(this,p,e,n,c,u,h,T,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Fl(this,o,e,n,c,u,h,M,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){let T=v,A=v+1,y=v+2;s=Fl(this,p,e,n,c,u,h,T,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,v=m+2;s=Fl(this,o,e,n,c,u,h,M,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ox(i,e,t,n,s,r,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:i}}function Fl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Cl),i.getVertexPosition(l,Il),i.getVertexPosition(c,Pl);let u=ox(i,e,t,n,Cl,Il,Pl,pp);if(u){let h=new O;qi.getBarycoord(pp,Cl,Il,Pl,h),s&&(u.uv=qi.getInterpolatedAttribute(s,a,l,c,h,new He)),r&&(u.uv1=qi.getInterpolatedAttribute(r,a,l,c,h,new He)),o&&(u.normal=qi.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};qi.getNormal(Cl,Il,Pl,f.normal),u.face=f,u.barycoord=h}return u}var Qo=new lt,mp=new lt,gp=new lt,ax=new lt,xp=new Ae,Nl=new O,Ah=new Hn,vp=new Ae,Rh=new ks,mr=class extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingBox.expandByPoint(Nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingSphere.expandByPoint(Nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(s),e.ray.intersectsSphere(Ah)!==!1&&(vp.copy(s).invert(),Rh.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;mp.fromBufferAttribute(s.attributes.skinIndex,e),gp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Qo.copy(t),t.set(0,0,0,0)):(Qo.set(...t,1),t.set(0,0,0)),Qo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=gp.getComponent(r);if(o!==0){let a=mp.getComponent(r);xp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ax.copy(Qo).applyMatrix4(xp),o)}}return t.isVector4&&(t.w=Qo.w),t.applyMatrix4(this.bindMatrixInverse)}},ps=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vo=class extends $t{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Zt,u=Zt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yp=new Ae,lx=new Ae,gr=class i{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lx;yp.multiplyMatrices(a,t[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vo(t,e,e,ti,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new ps),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},zs=class extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},to=new Ae,_p=new Ae,Ul=[],Mp=new Bn,cx=new Ae,ea=new Re,ta=new Hn,xr=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),Mp.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),ta.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,to),_p.multiplyMatrices(n,to),ea.matrixWorld=_p,ea.raycast(e,Ul);for(let o=0,a=Ul.length;o<a;o++){let l=Ul[o];l.instanceId=r,l.object=this,t.push(l)}Ul.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vo(new Float32Array(s*this.count),s,this.count,Cc,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ch=new O,ux=new O,hx=new qe,zn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ch.subVectors(n,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hx.getNormalMatrix(e),s=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new Hn,fx=new He(.5,.5),Ol=new O,yo=class{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,p-g,E-M).normalize(),s[1].setComponents(c+o,d+u,p+g,E+M).normalize(),s[2].setComponents(c+a,d+h,p+x,E+_).normalize(),s[3].setComponents(c-a,d-h,p-x,E-_).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,E-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,E-v).normalize(),t===_i)s[5].setComponents(c+l,d+f,p+m,E+v).normalize();else if(t===co)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=fx.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ol.x=s.normal.x>0?e.max.x:e.min.x,Ol.y=s.normal.y>0?e.max.y:e.min.y,Ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ki=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lc=new O,cc=new O,bp=new Ae,na=new ks,Bl=new Hn,Ih=new O,Sp=new O,Si=class extends gt{constructor(e=new nt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lc.fromBufferAttribute(t,s-1),cc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new De(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;bp.copy(s).invert(),na.copy(e.ray).applyMatrix4(bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),M=u.getX(x+1),_=kl(this,e,na,l,p,M,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=kl(this,e,na,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=kl(this,e,na,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=kl(this,e,na,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(lc.fromBufferAttribute(a,s),cc.fromBufferAttribute(a,r),t.distanceSqToSegment(lc,cc,Ih,Sp)>n)return;Ih.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ih);if(!(c<e.near||c>e.far))return{distance:c,point:Sp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wp=new O,Tp=new O,fa=class extends Si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wp.fromBufferAttribute(t,s),Tp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wp.distanceTo(Tp);e.setAttribute("lineDistance",new De(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends Si{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hs=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ep=new Ae,Oh=new ks,zl=new Hn,Hl=new O,vr=class extends gt{constructor(e=new nt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;Ep.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Hl.fromBufferAttribute(h,m),Ap(Hl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Hl.fromBufferAttribute(h,g),Ap(Hl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ap(i,e,t,n,s,r,o){let a=Oh.distanceSqToPoint(i);if(a<t){let l=new O;Oh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pa=class extends $t{constructor(e=[],t=qs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yr=class extends $t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends $t{constructor(e,t,n=Pi,s,r,o,a=Zt,l=Zt,c,u=Zi,h=1){if(u!==Zi&&u!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uc=class extends ms{constructor(e,t=Pi,n=qs,s,r,o=Zt,a=Zt,l,c=Zi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ma=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class i extends nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function g(x,m,p,M,_,v,E,T,A,y,C){let U=v/A,S=E/y,P=v/2,L=E/2,B=T/2,D=A+1,z=y+1,X=0,j=0,re=new O;for(let fe=0;fe<z;fe++){let R=fe*S-L;for(let k=0;k<D;k++){let te=k*U-P;re[x]=te*M,re[m]=R*_,re[p]=B,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(k/A),h.push(1-fe/y),X+=1}}for(let fe=0;fe<y;fe++)for(let R=0;R<A;R++){let k=f+R+D*fe,te=f+R+D*(fe+1),ce=f+(R+1)+D*(fe+1),oe=f+(R+1)+D*fe;l.push(k,te,oe),l.push(te,ce,oe),j+=6}a.addGroup(d,j,C),d+=j,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ga=class i extends nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,u=new He;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_o=class i extends nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(d,2));function M(){let v=new O,E=new O,T=0,A=(t-e)/n;for(let y=0;y<=r;y++){let C=[],U=y/r,S=U*(t-e)+e;for(let P=0;P<=s;P++){let L=P/s,B=L*l+a,D=Math.sin(B),z=Math.cos(B);E.x=S*D,E.y=-U*n+m,E.z=S*z,h.push(E.x,E.y,E.z),v.set(D,A,z).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-U),C.push(g++)}x.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let U=x[C][y],S=x[C+1][y],P=x[C+1][y+1],L=x[C][y+1];(e>0||C!==0)&&(u.push(U,S,L),T+=3),(t>0||C!==r-1)&&(u.push(S,P,L),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){let E=g,T=new He,A=new O,y=0,C=v===!0?e:t,U=v===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*U,0),f.push(0,U,0),d.push(.5,.5),g++;let S=g;for(let P=0;P<=s;P++){let B=P/s*l+a,D=Math.cos(B),z=Math.sin(B);A.x=C*z,A.y=m*U,A.z=C*D,h.push(A.x,A.y,A.z),f.push(0,U,0),T.x=D*.5+.5,T.y=z*.5*U+.5,d.push(T.x,T.y),g++}for(let P=0;P<s;P++){let L=E+P,B=S+P;v===!0?u.push(B,B+1,L):u.push(B+1,B,L),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xa=class i extends nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new O,v=new O,E=new O;for(let T=0;T<t.length;T+=3)d(t[T+0],_),d(t[T+1],v),d(t[T+2],E),l(_,v,E,M)}function l(M,_,v,E){let T=E+1,A=[];for(let y=0;y<=T;y++){A[y]=[];let C=M.clone().lerp(v,y/T),U=_.clone().lerp(v,y/T),S=T-y;for(let P=0;P<=S;P++)P===0&&y===T?A[y][P]=C:A[y][P]=C.clone().lerp(U,P/S)}for(let y=0;y<T;y++)for(let C=0;C<2*(T-y)-1;C++){let U=Math.floor(C/2);C%2===0?(f(A[y][U+1]),f(A[y+1][U]),f(A[y][U])):(f(A[y][U+1]),f(A[y+1][U+1]),f(A[y+1][U]))}}function c(M){let _=new O;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let M=new O;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let v=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;o.push(v,1-E)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],E=o[M+4],T=Math.max(_,v,E),A=Math.min(_,v,E);T>.9&&A<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,_){let v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){let M=new O,_=new O,v=new O,E=new O,T=new He,A=new He,y=new He;for(let C=0,U=0;C<r.length;C+=9,U+=6){M.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),T.set(o[U+0],o[U+1]),A.set(o[U+2],o[U+3]),y.set(o[U+4],o[U+5]),E.copy(M).add(_).add(v).divideScalar(3);let S=m(E);x(T,U+0,M,S),x(A,U+2,_,S),x(y,U+4,v,S)}}function x(M,_,v,E){E<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var va=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new Ae;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Je(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function dx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=vx(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ya(r,o,t,a,l,c,0),o}function Tm(i,e,t,n,s){let r;if(s===Cx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Rp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Rp(o/n|0,i[o],i[o+1],r);return r&&Mo(r,r.next)&&(Ma(r),r=r.next),r}function _r(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mo(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ya(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Sx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mx(i,n,s,r):px(i)){e.push(l.i,i.i,c.i),Ma(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gx(_r(i),e),ya(i,e,t,n,s,r,2)):o===2&&xx(i,e,t,n,s,r):ya(_r(i),e,t,n,s,r,1);break}}}function px(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ia(s,a,r,l,o,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),x=Math.max(a,l,c),m=Math.max(u,h,f),p=Bh(d,g,e,t,n),M=Bh(x,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ia(a,u,l,h,c,f,_.x,_.y)&&kt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ia(a,u,l,h,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ia(a,u,l,h,c,f,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ia(a,u,l,h,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Mo(n,s)&&Am(n,t,t.next,s)&&_a(n,s)&&_a(s,n)&&(e.push(n.i,t.i,s.i),Ma(t),Ma(t.next),t=i=s),t=t.next}while(t!==i);return _r(t)}function xx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ex(o,a)){let l=Rm(o,a);o=_r(o,o.next),l=_r(l,l.next),ya(o,e,t,n,s,r,0),ya(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Tm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tx(c))}s.sort(yx);for(let r=0;r<s.length;r++)t=_x(s[r],t);return t}function yx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _x(i,e){let t=Mx(i,e);if(!t)return e;let n=Rm(t,i);return _r(n,n.next),_r(t,t.next)}function Mx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Mo(i,t))return t;do{if(Mo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Em(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);_a(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&bx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function bx(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function Sx(i,e,t,n){let s=i;do s.z===0&&(s.z=Bh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Bh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Em(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ia(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Em(i,e,t,n,s,r,o,a)}function Ex(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ax(i,e)&&(_a(i,e)&&_a(e,i)&&Rx(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Mo(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mo(i,e){return i.x===e.x&&i.y===e.y}function Am(i,e,t,n){let s=Gl(kt(i,e,t)),r=Gl(kt(i,e,n)),o=Gl(kt(t,n,i)),a=Gl(kt(t,n,e));return!!(s!==r&&o!==a||s===0&&Vl(i,t,e)||r===0&&Vl(i,n,e)||o===0&&Vl(t,i,n)||a===0&&Vl(t,e,n))}function Vl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Gl(i){return i>0?1:i<0?-1:0}function Ax(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _a(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function Rx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rm(i,e){let t=kh(i.i,i.x,i.y),n=kh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rp(i,e,t,n){let s=kh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zh=class{static triangulate(e,t,n=2){return dx(e,t,n)}},ba=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cp(e),Ip(n,e);let o=e.length;t.forEach(Cp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ip(n,t[l]);let a=zh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ip(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var pn=class i extends xa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Sa=class i extends xa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Vs=class i extends nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*f-o;for(let _=0;_<c;_++){let v=_*h-r;g.push(v,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let _=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),T=M+1+c*p;d.push(_,v,T),d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ri=class i extends nt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new O,g=new He;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,_=M,v=M+n+1,E=M+n+2,T=M+1;a.push(_,v,T),a.push(v,E,T)}}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var bo=class i extends nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new O,f=new O,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,v=o+_*a,E=e*Math.cos(v),T=Math.sqrt(e*e-E*E),A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let C=y/t,U=s+C*r;h.x=-T*Math.cos(U),h.y=E,h.z=T*Math.sin(U),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(C+A,1-_),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=u[p][M+1],v=u[p][M],E=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&d.push(_,v,T),(p!==n-1||l<Math.PI)&&d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wa=class i extends nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new O,d=new O,g=new O;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,_=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(p,M,v),l.push(M,_,v)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pp(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let s in n)e[s]=n[s]}return e}function Pp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ix(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Lo={clone:Ar,merge:In},Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bt=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vn=class extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Gs=class extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mr=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hc=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Fx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dc=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ar:r=e,a=2*t-n;break;case oa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ar:o=e,l=2*n-t;break;case oa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+M*o[c+E]+_*o[l+E]+v*o[h+E];return r}},Ta=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},pc=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mc=class extends Ji{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,M=h[p],_=h[p+1],v=e*f+g*2,E=u[v],T=u[v+1],A=(n-t)/(s-t),y,C,U,S,P;for(let L=0;L<8;L++){y=A*A,C=y*A,U=1-A,S=U*U,P=S*U;let D=P*t+3*S*A*M+3*U*y*E+C*s-n;if(Math.abs(D)<1e-10)break;let z=3*S*(M-t)+6*U*A*(E-M)+3*y*(s-E);if(Math.abs(z)<1e-10)break;A=A-D/z,A=Math.max(0,Math.min(1,A))}r[g]=P*x+3*S*A*_+3*U*y*T+C*m}return r}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wl(t,this.TimeBufferType),this.values=Wl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wl(e.times,Array),values:Wl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Zl:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Zl;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&C0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=hr;var gs=class extends Gn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ur;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ea.prototype.ValueTypeName="color";var wi=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};wi.prototype.ValueTypeName="number";var gc=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ti=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Gn{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ur;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};ji.prototype.ValueTypeName="vector";var vs=class{constructor(e="",t=-1,n=[],s=hu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ux(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Dx(l);l=Lp(l,1,u),c=Lp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Nx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Ea;case"quaternion":return Ti;case"bool":case"boolean":return gs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ux(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Nx(i.type);if(i.times===void 0){let t=[],n=[];Fx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Dp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Dp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Dp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cm=new wo,Wn=class{constructor(e){this.manager=e!==void 0?e:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var hs={},Hh=class extends Error{constructor(e,t){super(e),this.response=t}},Ws=class extends Wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(hs[e]!==void 0){hs[e].push({onLoad:t,onProgress:n,onError:s});return}hs[e]=[],hs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=hs[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,A=u.length;T<A;T++){let y=u[T];y.onProgress&&y.onProgress(E)}p.enqueue(v),M()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Hh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yi.add(`file:${e}`,c);let u=hs[e];delete hs[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=hs[e];if(u===void 0)throw this.manager.itemError(e),c;delete hs[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var no=new WeakMap,xc=class extends Wn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=no.get(o);h===void 0&&(h=[],no.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=uo("img");function l(){u(),t&&t(this);let h=no.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}no.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Yi.remove(`image:${e}`);let f=no.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}no.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ei=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=new $t,o=new xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xs=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Aa=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ph=new Ae,Fp=new O,Np=new O,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),Ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===co||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=new O,ql=new At,Xi=new O,Ca=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,ql,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xl,ql,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new O,Up=new He,Op=new He,Gt=class extends Ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Op),t.subVectors(Op,Up)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vh=class extends Ra{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},br=class extends Xs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gh=class extends Ra{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},oi=class extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qi=class extends Ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wh=class extends Ra{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ia=class extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Lh=new WeakMap,Pa=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Lh.has(o)===!0?(s&&s(Lh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Lh.set(l,c),Yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var io=-90,so=1,vc=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(io,so,e,t);s.layers=this.layers,this.add(s);let r=new Gt(io,so,e,t);r.layers=this.layers,this.add(r);let o=new Gt(io,so,e,t);o.layers=this.layers,this.add(o);let a=new Gt(io,so,e,t);a.layers=this.layers,this.add(a);let l=new Gt(io,so,e,t);l.layers=this.layers,this.add(l);let c=new Gt(io,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},yc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},La=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ox.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ox(){this._document.hidden===!1&&this.reset()}var _c=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){At.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;At.multiplyQuaternionsFlat(e,o,e,t,e,n),At.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},cf="\\[\\]\\.:\\/",Bx=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",kx="[^"+cf.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",uf),Hx=/(WCOD+)?/.source.replace("WCOD",kx),Vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),Wx=new RegExp("^"+zx+Hx+Vx+Gx+"$"),Xx=["material","materials","bones","map"],Xh=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=Wx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Xh;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:or,endingEnd:or};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=uu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case hm:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case hu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===um;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===cu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ar,s.endingEnd=ar):(e?s.endingStart=this.zeroSlopeAtStart?ar:or:s.endingStart=oa,t?s.endingEnd=this.zeroSlopeAtEnd?ar:or:s.endingEnd=oa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},qx=new Float32Array(1),Da=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new _c(mt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ta(new Float32Array(2),new Float32Array(2),1,qx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?vs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=hu),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Mc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?vs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Bp=new Ae,Ri=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bp),this}intersectObject(e,t=!0,n=[]){return qh(e,this,n,t),n.sort(kp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qh(e[s],this,n,t);return n.sort(kp),n}};function kp(i,e){return i.distance-e.distance}function qh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)qh(r[o],e,t,!0)}}var gf=class gf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gf.prototype.isMatrix2=!0;var Yh=gf;var zp=new O,Yl=new O,ro=new O,oo=new O,Dh=new O,Yx=new O,Zx=new O,Fa=class{constructor(e=new O,t=new O){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zp.subVectors(e,this.start),Yl.subVectors(this.end,this.start);let n=Yl.dot(Yl);if(n===0)return 0;let r=Yl.dot(zp)/n;return t&&(r=Je(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Yx,n=Zx){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;ro.subVectors(c,a),oo.subVectors(u,l),Dh.subVectors(a,l);let h=ro.dot(ro),f=oo.dot(oo),d=oo.dot(Dh);if(h<=s&&f<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=s)r=0,o=d/f,o=Je(o,0,1);else{let g=ro.dot(Dh);if(f<=s)o=0,r=Je(-g/h,0,1);else{let x=ro.dot(oo),m=h*f-x*x;m!==0?r=Je((x*d-g*f)/m,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=Je(-g/h,0,1)):o>1&&(o=1,r=Je((x-g)/h,0,1))}}return t.copy(a).addScaledVector(ro,r),n.copy(l).addScaledVector(oo,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function hf(i,e,t,n){let s=Kx(n);switch(t){case nf:return i*e;case Cc:return i*e/s.components*s.byteLength;case Ic:return i*e/s.components*s.byteLength;case Zs:return i*e*2/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case sf:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case Lc:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Uc:return Math.max(i,16)*Math.max(e,8)/4;case Dc:case Nc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case Bc:case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:case Za:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case iu:case su:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ou:case au:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kx(i){switch(i){case Xn:case jh:return{byteLength:1,components:1};case Ro:case Qh:case li:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Pi:case Ec:case ei:return{byteLength:4,components:1};case ef:case tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function jm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jx(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$v=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:jx,alphahash_pars_fragment:Qx,alphamap_fragment:ev,alphamap_pars_fragment:tv,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:sv,aomap_pars_fragment:rv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:xv,color_pars_fragment:vv,color_pars_vertex:yv,color_vertex:_v,common:Mv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:wv,displacementmap_vertex:Tv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Av,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Iv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Lv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:Wv,envmap_vertex:Fv,fog_vertex:Nv,fog_pars_vertex:Uv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Kv,lights_physical_pars_fragment:$v,lights_fragment_begin:Jv,lights_fragment_maps:jv,lights_fragment_end:Qv,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:hy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:vy,normal_pars_vertex:yy,normal_vertex:_y,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Ty,opaque_fragment:Ey,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Iy,dithering_pars_fragment:Py,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:ky,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Zy,uv_pars_vertex:Ky,uv_vertex:$y,worldpos_vertex:Jy,background_vert:jy,background_frag:Qy,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distance_vert:o_,distance_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:u_,linedashed_frag:h_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:x_,meshnormal_vert:v_,meshnormal_frag:y_,meshphong_vert:__,meshphong_frag:M_,meshphysical_vert:b_,meshphysical_frag:S_,meshtoon_vert:w_,meshtoon_frag:T_,points_vert:E_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:I_,sprite_frag:P_},Se={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ns={basic:{uniforms:In([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:In([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:In([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:In([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:In([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:In([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:In([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:In([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:In([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:In([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:In([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:In([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:In([Se.lights,Se.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ns.physical={uniforms:In([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var pu={r:0,b:0,g:0},L_=new Ae,Qm=new qe;Qm.set(-1,0,0,0,1,0,0,0,1);function D_(i,e,t,n,s,r){let o=new ve(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let v=M.backgroundBlurriness>0;_=e.get(_,v)}return _}function g(M){let _=!1,v=d(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Ga)?(c===void 0&&(c=new Re(new $i(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ar(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==vt,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Re(new Vs(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ar(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,_){M.getRGB(pu,lf(i)),t.buffers.color.setClear(pu.r,pu.g,pu.b,_,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function F_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,P,L,B,D){let z=!1,X=h(S,B,L,P);r!==X&&(r=X,c(r.object)),z=d(S,B,L,D),z&&g(S,B,L,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(S,P,L,B),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,L,B){let D=B.wireframe===!0,z=n[P.id];z===void 0&&(z={},n[P.id]=z);let X=S.isInstancedMesh===!0?S.id:0,j=z[X];j===void 0&&(j={},z[X]=j);let re=j[L.id];re===void 0&&(re={},j[L.id]=re);let fe=re[D];return fe===void 0&&(fe=f(l()),re[D]=fe),fe}function f(S){let P=[],L=[],B=[];for(let D=0;D<t;D++)P[D]=0,L[D]=0,B[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,P,L,B){let D=r.attributes,z=P.attributes,X=0,j=L.getAttributes();for(let re in j)if(j[re].location>=0){let R=D[re],k=z[re];if(k===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),R===void 0||R.attribute!==k||k&&R.data!==k.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(S,P,L,B){let D={},z=P.attributes,X=0,j=L.getAttributes();for(let re in j)if(j[re].location>=0){let R=z[re];R===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(R=S.instanceColor));let k={};k.attribute=R,R&&R.data&&(k.data=R.data),D[re]=k,X++}r.attributes=D,r.attributesNum=X,r.index=B}function x(){let S=r.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){let L=r.newAttributes,B=r.enabledAttributes,D=r.attributeDivisors;L[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),D[S]!==P&&(i.vertexAttribDivisor(S,P),D[S]=P)}function M(){let S=r.newAttributes,P=r.enabledAttributes;for(let L=0,B=P.length;L<B;L++)P[L]!==S[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function _(S,P,L,B,D,z,X){X===!0?i.vertexAttribIPointer(S,P,L,D,z):i.vertexAttribPointer(S,P,L,B,D,z)}function v(S,P,L,B){x();let D=B.attributes,z=L.getAttributes(),X=P.defaultAttributeValues;for(let j in z){let re=z[j];if(re.location>=0){let fe=D[j];if(fe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){let R=fe.normalized,k=fe.itemSize,te=e.get(fe);if(te===void 0)continue;let ce=te.buffer,oe=te.type,H=te.bytesPerElement,J=oe===i.INT||oe===i.UNSIGNED_INT||fe.gpuType===Ec;if(fe.isInterleavedBufferAttribute){let ee=fe.data,me=ee.stride,ue=fe.offset;if(ee.isInstancedInterleavedBuffer){for(let he=0;he<re.locationSize;he++)p(re.location+he,ee.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<re.locationSize;he++)m(re.location+he);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let he=0;he<re.locationSize;he++)_(re.location+he,k/re.locationSize,oe,R,me*H,(ue+k/re.locationSize*he)*H,J)}else{if(fe.isInstancedBufferAttribute){for(let ee=0;ee<re.locationSize;ee++)p(re.location+ee,fe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<re.locationSize;ee++)m(re.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ee=0;ee<re.locationSize;ee++)_(re.location+ee,k/re.locationSize,oe,R,k*H,k/re.locationSize*ee*H,J)}}else if(X!==void 0){let R=X[j];if(R!==void 0)switch(R.length){case 2:i.vertexAttrib2fv(re.location,R);break;case 3:i.vertexAttrib3fv(re.location,R);break;case 4:i.vertexAttrib4fv(re.location,R);break;default:i.vertexAttrib1fv(re.location,R)}}}}M()}function E(){C();for(let S in n){let P=n[S];for(let L in P){let B=P[L];for(let D in B){let z=B[D];for(let X in z)u(z[X].object),delete z[X];delete B[D]}}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let L in P){let B=P[L];for(let D in B){let z=B[D];for(let X in z)u(z[X].object),delete z[X];delete B[D]}}delete n[S.id]}function A(S){for(let P in n){let L=n[P];for(let B in L){let D=L[B];if(D[S.id]===void 0)continue;let z=D[S.id];for(let X in z)u(z[X].object),delete z[X];delete D[S.id]}}}function y(S){for(let P in n){let L=n[P],B=S.isInstancedMesh===!0?S.id:0,D=L[B];if(D!==void 0){for(let z in D){let X=D[z];for(let j in X)u(X[j].object),delete X[j];delete D[z]}delete L[B],Object.keys(L).length===0&&delete n[P]}}}function C(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function N_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function U_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ei&&!y)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,maxSamples:E,samples:T}}function O_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new zn,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,_=M*4,v=p.clippingState||null;l.value=v,v=u(g,f,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ks=4,Im=[.125,.215,.35,.446,.526,.582],Rr=20,B_=256,Ja=new Qi,Pm=new ve,xf=null,vf=0,yf=0,_f=!1,k_=new O,No=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=k_}=r;xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,vf,yf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:li,format:ti,colorSpace:xn,depthBuffer:!1},s=Lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z_(r)),this._blurMaterial=V_(r,e,t),this._ggxMaterial=H_(r,e,t)}return s}_compileMaterial(e){let t=new Re(new nt,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,s,r){let l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pm),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new $i,new ht({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Pm),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));let E=this._cubeSize;Do(s,v*E,_>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ks?n-g+Ks:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Do(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Do(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Ja)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Rr-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Rr;m>Rr&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);let p=[],M=0;for(let A=0;A<Rr;++A){let y=A/x,C=Math.exp(-y*y/2);p.push(C),A===0?M+=C:A<m&&(M+=2*C)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],E=3*v*(s>_-Ks?s-_+Ks:0),T=4*(this._cubeSize-v);Do(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Ja)}};function z_(i){let e=[],t=[],n=[],s=i,r=i-Ks+1+Im.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ks?l=Im[o-i+Ks-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,y=T>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];M.set(C,x*g*T),_.set(f,m*g*T);let U=[T,T,T,T,T,T];v.set(U,p*g*T)}let E=new nt;E.setAttribute("position",new sn(M,x)),E.setAttribute("uv",new sn(_,m)),E.setAttribute("faceIndex",new sn(v,p)),n.push(new Re(E,null)),s>Ks&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lm(i,e,t){let n=new On(i,e,t);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function H_(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function V_(i,e,t){let n=new Float32Array(Rr),s=new O(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Dm(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fm(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var gu=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ai});r.uniforms.tEquirect.value=t;let o=new Re(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Kt),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function G_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Eo||d===wc)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new gu(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Eo||d===wc,x=d===qs||d===Tr;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new No(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new No(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Eo?f.mapping=qs:d===wc&&(f.mapping=Tr),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function W_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){let E=M[_+0],T=M[_+1],A=M[_+2];f.push(E,T,T,A,A,E)}}else{let M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let E=_+0,T=_+1,A=_+2;f.push(E,T,T,A,A,E)}}let m=new(g.count>=65535?ha:pr)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function q_(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,e,t){let n=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let C=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),A=new ca(T,v,E,h);A.type=ei,A.needsUpdate=!0;let y=_*4;for(let U=0;U<h;U++){let S=m[U],P=p[U],L=M[U],B=v*E*4*U;for(let D=0;D<S.count;D++){let z=D*y;d===!0&&(s.fromBufferAttribute(S,D),T[B+z+0]=s.x,T[B+z+1]=s.y,T[B+z+2]=s.z,T[B+z+3]=0),g===!0&&(s.fromBufferAttribute(P,D),T[B+z+4]=s.x,T[B+z+5]=s.y,T[B+z+6]=s.z,T[B+z+7]=0),x===!0&&(s.fromBufferAttribute(L,D),T[B+z+8]=s.x,T[B+z+9]=s.y,T[B+z+10]=s.z,T[B+z+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new He(v,E)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function K_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var $_={[Oa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[ka]:"CINEON_TONE_MAPPING",[wr]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function J_(i,e,t,n,s,r){let o=new On(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ms(e,t):void 0}),a=new On(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),l=new nt;l.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new De([0,2,0,0,2,0],2));let c=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Re(l,c),h=new Qi(-1,1,1,-1,0,1),f=null,d=null,g=!1,x,m=null,p=[],M=!1;this.setSize=function(_,v){o.setSize(_,v),a.setSize(_,v);for(let E=0;E<p.length;E++){let T=p[E];T.setSize&&T.setSize(_,v)}},this.setEffects=function(_){p=_,M=p.length>0&&p[0].isRenderPass===!0;let v=o.width,E=o.height;for(let T=0;T<p.length;T++){let A=p[T];A.setSize&&A.setSize(v,E)}},this.begin=function(_,v){if(g||_.toneMapping===Ci&&p.length===0)return!1;if(m=v,v!==null){let E=v.width,T=v.height;(o.width!==E||o.height!==T)&&this.setSize(E,T)}return M===!1&&_.setRenderTarget(o),x=_.toneMapping,_.toneMapping=Ci,!0},this.hasRenderPass=function(){return M},this.end=function(_,v){_.toneMapping=x,g=!0;let E=o,T=a;for(let A=0;A<p.length;A++){let y=p[A];if(y.enabled!==!1&&(y.render(_,T,E,v),y.needsSwap!==!1)){let C=E;E=T,T=C}}if(f!==_.outputColorSpace||d!==_.toneMapping){f=_.outputColorSpace,d=_.toneMapping,c.defines={},Ze.getTransfer(f)===vt&&(c.defines.SRGB_TRANSFER="");let A=$_[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(u,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var eg=new $t,Sf=new ms(1,1),tg=new ca,ng=new ac,ig=new pa,Nm=[],Um=[],Om=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function Uo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yu(i,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function nM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;km.set(n),i.uniformMatrix2fv(this.addr,!1,km),ln(t,n)}}function iM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Bm.set(n),i.uniformMatrix3fv(this.addr,!1,Bm),ln(t,n)}}function sM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Om.set(n),i.uniformMatrix4fv(this.addr,!1,Om),ln(t,n)}}function rM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function aM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function cM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function fM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function dM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?du:fu,r=Sf):r=eg,t.setTexture2D(e||r,s)}function pM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ng,s)}function mM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ig,s)}function gM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tg,s)}function xM(i){switch(i){case 5126:return j_;case 35664:return Q_;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return hM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(i,e){i.uniform1fv(this.addr,e)}function yM(i,e){let t=Uo(e,this.size,2);i.uniform2fv(this.addr,t)}function _M(i,e){let t=Uo(e,this.size,3);i.uniform3fv(this.addr,t)}function MM(i,e){let t=Uo(e,this.size,4);i.uniform4fv(this.addr,t)}function bM(i,e){let t=Uo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SM(i,e){let t=Uo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wM(i,e){let t=Uo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TM(i,e){i.uniform1iv(this.addr,e)}function EM(i,e){i.uniform2iv(this.addr,e)}function AM(i,e){i.uniform3iv(this.addr,e)}function RM(i,e){i.uniform4iv(this.addr,e)}function CM(i,e){i.uniform1uiv(this.addr,e)}function IM(i,e){i.uniform2uiv(this.addr,e)}function PM(i,e){i.uniform3uiv(this.addr,e)}function LM(i,e){i.uniform4uiv(this.addr,e)}function DM(i,e,t){let n=this.cache,s=e.length,r=yu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sf:o=eg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function FM(i,e,t){let n=this.cache,s=e.length,r=yu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ng,r[o])}function NM(i,e,t){let n=this.cache,s=e.length,r=yu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ig,r[o])}function UM(i,e,t){let n=this.cache,s=e.length,r=yu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tg,r[o])}function OM(i){switch(i){case 5126:return vM;case 35664:return yM;case 35665:return _M;case 35666:return MM;case 35674:return bM;case 35675:return SM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return EM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return IM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return UM}}var wf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OM(t.type)}},Ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function zm(i,e){i.seq.push(e),i.map[e.id]=e}function BM(i,e,t){let n=i.name,s=n.length;for(Mf.lastIndex=0;;){let r=Mf.exec(n),o=Mf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zm(t,c===void 0?new wf(a,i,e):new Tf(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ef(a),zm(t,h)),t=h}}}var Fo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);BM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kM=37297,zM=0;function HM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vm=new qe;function VM(i){Ze._getMatrix(Vm,Ze.workingColorSpace,i);let e=`mat3( ${Vm.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case aa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+HM(i.getShaderSource(e),a)}else return r}function GM(i,e){let t=VM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var WM={[Oa]:"Linear",[Ba]:"Reinhard",[ka]:"Cineon",[wr]:"ACESFilmic",[Ha]:"AgX",[Va]:"Neutral",[za]:"Custom"};function XM(i,e){let t=WM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mu=new O;function qM(){Ze.getLuminanceCoefficients(mu);let i=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function ZM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qa(i){return i!==""}function Wm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(i){return i.replace($M,jM)}var JM=new Map;function jM(i,e){let t=it[e];if(t===void 0){let n=JM.get(e);if(n!==void 0)t=it[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Af(t)}var QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(i){return i.replace(QM,eb)}function eb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ym(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var tb={[Na]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function nb(i){return tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[qs]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function sb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rb={[Tr]:"ENVMAP_MODE_REFRACTION"};function ob(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ab={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ab[i.combine]||"ENVMAP_BLENDING_NONE"}function cb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ub(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nb(t),c=sb(t),u=ob(t),h=lb(t),f=cb(t),d=YM(t),g=ZM(r),x=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qa).join(`
`),p.length>0&&(p+=`
`)):(m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),p=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?it.tonemapping_pars_fragment:"",t.toneMapping!==Ci?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),qM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),o=Af(o),o=Wm(o,t),o=Xm(o,t),a=Af(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+o,v=M+p+a,E=Hm(s,s.VERTEX_SHADER,_),T=Hm(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(S){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(T)||"",D=P.trim(),z=L.trim(),X=B.trim(),j=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let fe=Gm(s,E,"vertex"),R=Gm(s,T,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+fe+`
`+R)}else D!==""?Oe("WebGLProgram: Program Info Log:",D):(z===""||X==="")&&(re=!1);re&&(S.diagnostics={runnable:j,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(E),s.deleteShader(T),y=new Fo(s,x),C=KM(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,kM)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var hb=0,Rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}},Cf=class{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}};function fb(i){return i===Zs||i===Za||i===Ka}function db(i,e,t,n,s,r){let o=new po,a=new Rf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,C,U,S,P,L){let B=S.fog,D=P.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?S.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||z,X),re=j&&j.mapping===Ga?j.image.height:null,fe=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let R=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=R!==void 0?R.length:0,te=0;D.morphAttributes.position!==void 0&&(te=1),D.morphAttributes.normal!==void 0&&(te=2),D.morphAttributes.color!==void 0&&(te=3);let ce,oe,H,J;if(fe){let Ne=ns[fe];ce=Ne.vertexShader,oe=Ne.fragmentShader}else{ce=y.vertexShader,oe=y.fragmentShader;let Ne=a.getVertexShaderStage(y),Ht=a.getFragmentShaderStage(y);a.update(y,Ne,Ht),H=Ne.id,J=Ht.id}let ee=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),ue=P.isInstancedMesh===!0,he=P.isBatchedMesh===!0,Ge=!!y.map,Fe=!!y.matcap,Xe=!!j,Ie=!!y.aoMap,$e=!!y.lightMap,Dt=!!y.bumpMap&&y.wireframe===!1,Ft=!!y.normalMap,Tt=!!y.displacementMap,tn=!!y.emissiveMap,Nt=!!y.metalnessMap,Ut=!!y.roughnessMap,G=y.anisotropy>0,fn=y.clearcoat>0,ft=y.dispersion>0,N=y.iridescence>0,b=y.sheen>0,q=y.transmission>0,K=G&&!!y.anisotropyMap,Q=fn&&!!y.clearcoatMap,pe=fn&&!!y.clearcoatNormalMap,xe=fn&&!!y.clearcoatRoughnessMap,ne=N&&!!y.iridescenceMap,se=N&&!!y.iridescenceThicknessMap,ye=b&&!!y.sheenColorMap,ke=b&&!!y.sheenRoughnessMap,be=!!y.specularMap,_e=!!y.specularColorMap,We=!!y.specularIntensityMap,Ye=q&&!!y.transmissionMap,je=q&&!!y.thicknessMap,V=!!y.gradientMap,ge=!!y.alphaMap,ie=y.alphaTest>0,Me=!!y.alphaHash,Ee=!!y.extensions,le=Ci;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(le=i.toneMapping);let Be={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:oe,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:he,batchingColor:he&&P._colorsTexture!==null,instancing:ue,instancingColor:ue&&P.instanceColor!==null,instancingMorph:ue&&P.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Fe,envMap:Xe,envMapMode:Xe&&j.mapping,envMapCubeUVHeight:re,aoMap:Ie,lightMap:$e,bumpMap:Dt,normalMap:Ft,displacementMap:Tt,emissiveMap:tn,normalMapObjectSpace:Ft&&y.normalMapType===dm,normalMapTangentSpace:Ft&&y.normalMapType===Po,packedNormalMap:Ft&&y.normalMapType===Po&&fb(y.normalMap.format),metalnessMap:Nt,roughnessMap:Ut,anisotropy:G,anisotropyMap:K,clearcoat:fn,clearcoatMap:Q,clearcoatNormalMap:pe,clearcoatRoughnessMap:xe,dispersion:ft,iridescence:N,iridescenceMap:ne,iridescenceThicknessMap:se,sheen:b,sheenColorMap:ye,sheenRoughnessMap:ke,specularMap:be,specularColorMap:_e,specularIntensityMap:We,transmission:q,transmissionMap:Ye,thicknessMap:je,gradientMap:V,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ie,alphaHash:Me,combine:y.combine,mapUv:Ge&&g(y.map.channel),aoMapUv:Ie&&g(y.aoMap.channel),lightMapUv:$e&&g(y.lightMap.channel),bumpMapUv:Dt&&g(y.bumpMap.channel),normalMapUv:Ft&&g(y.normalMap.channel),displacementMapUv:Tt&&g(y.displacementMap.channel),emissiveMapUv:tn&&g(y.emissiveMap.channel),metalnessMapUv:Nt&&g(y.metalnessMap.channel),roughnessMapUv:Ut&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:Q&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(y.sheenRoughnessMap.channel),specularMapUv:be&&g(y.specularMap.channel),specularColorMapUv:_e&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:Ye&&g(y.transmissionMap.channel),thicknessMapUv:je&&g(y.thicknessMap.channel),alphaMapUv:ge&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ft||G),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(Ge||ge),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&Ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:tn&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===St,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)C.push(U),C.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(p(C,y),M(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let C=d[y.type],U;if(C){let S=ns[C];U=Lo.clone(S.uniforms)}else U=y.uniforms;return U}function v(y,C){let U=u.get(C);return U!==void 0?++U.usedTimes:(U=new ub(i,C,y,s),c.push(U),u.set(C,U)),U}function E(y){if(--y.usedTimes===0){let C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:A}}function pb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Km(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function l(f,d,g,x,m,p){let M=a(f,d,g,x,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(f,d,g,x,m,p){let M=a(f,d,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(f,d,g){t.length>1&&t.sort(f||mb),n.length>1&&n.sort(d||Zm),s.length>1&&s.sort(d||Zm),g&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let f=e,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function gb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Km,i.set(n,[o])):s>=r.length?(o=new Km,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ve};break;case"SpotLight":t={position:new O,direction:new O,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function vb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yb=0;function _b(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mb(i){let e=new xb,t=vb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Ae,o=new Ae;function a(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,_=0,v=0,E=0,T=0,A=0;c.sort(_b);for(let C=0,U=c.length;C<U;C++){let S=c[C],P=S.color,L=S.intensity,B=S.distance,D=null;if(S.shadow&&S.shadow.map&&(S.shadow.map.texture.format===Zs?D=S.shadow.map.texture:D=S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],L);A++}else if(S.isDirectionalLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let X=S.shadow,j=t.get(S);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=z,d++}else if(S.isSpotLight){let z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(P).multiplyScalar(L),z.distance=B,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[x]=z;let X=S.shadow;if(S.map&&(n.spotLightMap[E]=S.map,E++,X.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=X.matrix,S.castShadow){let j=t.get(S);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=D,v++}x++}else if(S.isRectAreaLight){let z=e.get(S);z.color.copy(P).multiplyScalar(L),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=z,m++}else if(S.isPointLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let X=S.shadow,j=t.get(S);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=z,g++}else if(S.isHemisphereLight){let z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(L),z.groundColor.copy(S.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let y=n.hash;(y.directionalLength!==d||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==M||y.numPointShadows!==_||y.numSpotShadows!==v||y.numSpotMaps!==E||y.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,y.directionalLength=d,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=M,y.numPointShadows=_,y.numSpotShadows=v,y.numSpotMaps=E,y.numLightProbes=A,n.version=yb++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function $m(i){let e=new Mb(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $m(i),e.set(s,[a])):r>=o.length?(a=new $m(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tb=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Eb=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Jm=new Ae,ja=new O,bf=new O;function Ab(i,e,t){let n=new yo,s=new He,r=new He,o=new lt,a=new hc,l=new fc,c={},u=t.maxTextureSize,h={[Nn]:on,[on]:Nn,[St]:St},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Sb,fragmentShader:wb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new nt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let p=this.type;this.render=function(T,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Sc&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);let C=i.getRenderTarget(),U=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ai),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=p!==this.type;L&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(D=>D.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,D=T.length;B<D;B++){let z=T[B],X=z.shadow;if(X===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let j=X.getFrameExtents();s.multiply(j),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,X.mapSize.y=r.y));let re=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=re,X.map===null||L===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===To){if(z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new On(s.x,s.y,{format:Zs,type:li,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),X.map.texture.name=z.name+".shadowMap",X.map.depthTexture=new ms(s.x,s.y,ei),X.map.depthTexture.name=z.name+".shadowMapDepth",X.map.depthTexture.format=Zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt}else z.isPointLight?(X.map=new gu(s.x),X.map.depthTexture=new uc(s.x,Pi)):(X.map=new On(s.x,s.y),X.map.depthTexture=new ms(s.x,s.y,Pi)),X.map.depthTexture.name=z.name+".shadowMap",X.map.depthTexture.format=Zi,this.type===Na?(X.map.depthTexture.compareFunction=re?du:fu,X.map.depthTexture.minFilter=Kt,X.map.depthTexture.magFilter=Kt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt);X.camera.updateProjectionMatrix()}let fe=X.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<fe;R++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,R),i.clear();else{R===0&&(i.setRenderTarget(X.map),i.clear());let k=X.getViewport(R);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),P.viewport(o)}if(z.isPointLight){let k=X.camera,te=X.matrix,ce=z.distance||k.far;ce!==k.far&&(k.far=ce,k.updateProjectionMatrix()),ja.setFromMatrixPosition(z.matrixWorld),k.position.copy(ja),bf.copy(k.position),bf.add(Tb[R]),k.up.copy(Eb[R]),k.lookAt(bf),k.updateMatrixWorld(),te.makeTranslation(-ja.x,-ja.y,-ja.z),Jm.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Jm,k.coordinateSystem,k.reversedDepth)}else X.updateMatrices(z);n=X.getFrustum(),v(A,y,X.camera,z,this.type)}X.isPointLightShadow!==!0&&this.type===To&&M(X,y),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,U,S)};function M(T,A){let y=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new On(s.x,s.y,{format:Zs,type:li})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,y,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,y,d,x,null)}function _(T,A,y,C){let U=null,S=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)U=S;else if(U=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=U.uuid,L=A.uuid,B=c[P];B===void 0&&(B={},c[P]=B);let D=B[L];D===void 0&&(D=U.clone(),B[L]=D,A.addEventListener("dispose",E)),U=D}if(U.visible=A.visible,U.wireframe=A.wireframe,C===To?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:h[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let P=i.properties.get(U);P.light=y}return U}function v(T,A,y,C,U){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===To)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let L=e.update(T),B=T.material;if(Array.isArray(B)){let D=L.groups;for(let z=0,X=D.length;z<X;z++){let j=D[z],re=B[j.materialIndex];if(re&&re.visible){let fe=_(T,re,C,U);T.onBeforeShadow(i,T,A,y,L,fe,j),i.renderBufferDirect(y,null,L,fe,T,j),T.onAfterShadow(i,T,A,y,L,fe,j)}}}else if(B.visible){let D=_(T,B,C,U);T.onBeforeShadow(i,T,A,y,L,D,null),i.renderBufferDirect(y,null,L,D,T,null),T.onAfterShadow(i,T,A,y,L,D,null)}}let P=T.children;for(let L=0,B=P.length;L<B;L++)v(P[L],A,y,C,U)}function E(T){T.target.removeEventListener("dispose",E);for(let y in c){let C=c[y],U=T.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}function Rb(i,e){function t(){let V=!1,ge=new lt,ie=null,Me=new lt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!V&&(i.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,le,Be,Ne,Ht){Ht===!0&&(Ee*=Ne,le*=Ne,Be*=Ne),ge.set(Ee,le,Be,Ne),Me.equals(ge)===!1&&(i.clearColor(Ee,le,Be,Ne),Me.copy(ge))},reset:function(){V=!1,ie=null,Me.set(-1,0,0,0)}}}function n(){let V=!1,ge=!1,ie=null,Me=null,Ee=null;return{setReversed:function(le){if(ge!==le){let Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=le;let Ne=Ee;Ee=null,this.setClear(Ne)}},getReversed:function(){return ge},setTest:function(le){le?ee(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(le){ie!==le&&!V&&(i.depthMask(le),ie=le)},setFunc:function(le){if(ge&&(le=Sm[le]),Me!==le){switch(le){case Jl:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Ql:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=le}},setLocked:function(le){V=le},setClear:function(le){Ee!==le&&(Ee=le,ge&&(le=1-le),i.clearDepth(le))},reset:function(){V=!1,ie=null,Me=null,Ee=null,ge=!1}}}function s(){let V=!1,ge=null,ie=null,Me=null,Ee=null,le=null,Be=null,Ne=null,Ht=null;return{setTest:function(Pt){V||(Pt?ee(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Pt){ge!==Pt&&!V&&(i.stencilMask(Pt),ge=Pt)},setFunc:function(Pt,Vi,Gi){(ie!==Pt||Me!==Vi||Ee!==Gi)&&(i.stencilFunc(Pt,Vi,Gi),ie=Pt,Me=Vi,Ee=Gi)},setOp:function(Pt,Vi,Gi){(le!==Pt||Be!==Vi||Ne!==Gi)&&(i.stencilOp(Pt,Vi,Gi),le=Pt,Be=Vi,Ne=Gi)},setLocked:function(Pt){V=Pt},setClear:function(Pt){Ht!==Pt&&(i.clearStencil(Pt),Ht=Pt)},reset:function(){V=!1,ge=null,ie=null,Me=null,Ee=null,le=null,Be=null,Ne=null,Ht=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,v=null,E=null,T=null,A=null,y=new ve(0,0,0),C=0,U=!1,S=null,P=null,L=null,B=null,D=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=j>=1):re.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=j>=2);let fe=null,R={},k=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ce=new lt().fromArray(k),oe=new lt().fromArray(te);function H(V,ge,ie,Me){let Ee=new Uint8Array(4),le=i.createTexture();i.bindTexture(V,le),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ie;Be++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ge+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return le}let J={};J[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(cr),Dt(!1),Ft(Zh),ee(i.CULL_FACE),Ie(ai);function ee(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function me(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function ue(V,ge){return f[V]!==ge?(i.bindFramebuffer(V,ge),f[V]=ge,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ge),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function he(V,ge){let ie=g,Me=!1;if(V){ie=d.get(ge),ie===void 0&&(ie=[],d.set(ge,ie));let Ee=V.textures;if(ie.length!==Ee.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Be=Ee.length;le<Be;le++)ie[le]=i.COLOR_ATTACHMENT0+le;ie.length=Ee.length,Me=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ie)}function Ge(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let Fe={[Bs]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};Fe[qp]=i.MIN,Fe[Yp]=i.MAX;let Xe={[Zp]:i.ZERO,[Kp]:i.ONE,[$p]:i.SRC_COLOR,[Kl]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[jp]:i.DST_ALPHA,[Jp]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[sm]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(V,ge,ie,Me,Ee,le,Be,Ne,Ht,Pt){if(V===ai){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),V!==Gp){if(V!==p||Pt!==U){if((M!==Bs||E!==Bs)&&(i.blendEquation(i.FUNC_ADD),M=Bs,E=Bs),Pt)switch(V){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",V);break}else switch(V){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",V);break}_=null,v=null,T=null,A=null,y.set(0,0,0),C=0,p=V,U=Pt}return}Ee=Ee||ge,le=le||ie,Be=Be||Me,(ge!==M||Ee!==E)&&(i.blendEquationSeparate(Fe[ge],Fe[Ee]),M=ge,E=Ee),(ie!==_||Me!==v||le!==T||Be!==A)&&(i.blendFuncSeparate(Xe[ie],Xe[Me],Xe[le],Xe[Be]),_=ie,v=Me,T=le,A=Be),(Ne.equals(y)===!1||Ht!==C)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Ht),y.copy(Ne),C=Ht),p=V,U=!1}function $e(V,ge){V.side===St?me(i.CULL_FACE):ee(i.CULL_FACE);let ie=V.side===on;ge&&(ie=!ie),Dt(ie),V.blending===ds&&V.transparent===!1?Ie(ai):Ie(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Me=V.stencilWrite;a.setTest(Me),Me&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function Ft(V){V!==Hp?(ee(i.CULL_FACE),V!==P&&(V===Zh?i.cullFace(i.BACK):V===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),P=V}function Tt(V){V!==L&&(X&&i.lineWidth(V),L=V)}function tn(V,ge,ie){V?(ee(i.POLYGON_OFFSET_FILL),(B!==ge||D!==ie)&&(B=ge,D=ie,o.getReversed()&&(ge=-ge),i.polygonOffset(ge,ie))):me(i.POLYGON_OFFSET_FILL)}function Nt(V){V?ee(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=i.TEXTURE0+z-1),fe!==V&&(i.activeTexture(V),fe=V)}function G(V,ge,ie){ie===void 0&&(fe===null?ie=i.TEXTURE0+z-1:ie=fe);let Me=R[ie];Me===void 0&&(Me={type:void 0,texture:void 0},R[ie]=Me),(Me.type!==V||Me.texture!==ge)&&(fe!==ie&&(i.activeTexture(ie),fe=ie),i.bindTexture(V,ge||J[V]),Me.type=V,Me.texture=ge)}function fn(){let V=R[fe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(V){Ke("WebGLState:",V)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(V){Ke("WebGLState:",V)}}function b(){try{i.texSubImage2D(...arguments)}catch(V){Ke("WebGLState:",V)}}function q(){try{i.texSubImage3D(...arguments)}catch(V){Ke("WebGLState:",V)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Ke("WebGLState:",V)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Ke("WebGLState:",V)}}function pe(){try{i.texStorage2D(...arguments)}catch(V){Ke("WebGLState:",V)}}function xe(){try{i.texStorage3D(...arguments)}catch(V){Ke("WebGLState:",V)}}function ne(){try{i.texImage2D(...arguments)}catch(V){Ke("WebGLState:",V)}}function se(){try{i.texImage3D(...arguments)}catch(V){Ke("WebGLState:",V)}}function ye(V){return h[V]!==void 0?h[V]:i.getParameter(V)}function ke(V,ge){h[V]!==ge&&(i.pixelStorei(V,ge),h[V]=ge)}function be(V){ce.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ce.copy(V))}function _e(V){oe.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function We(V,ge){let ie=c.get(ge);ie===void 0&&(ie=new WeakMap,c.set(ge,ie));let Me=ie.get(V);Me===void 0&&(Me=i.getUniformBlockIndex(ge,V.name),ie.set(V,Me))}function Ye(V,ge){let Me=c.get(ge).get(V);l.get(ge)!==Me&&(i.uniformBlockBinding(ge,Me,V.__bindingPointIndex),l.set(ge,Me))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},fe=null,R={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,v=null,E=null,T=null,A=null,y=new ve(0,0,0),C=0,U=!1,S=null,P=null,L=null,B=null,D=null,ce.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:me,bindFramebuffer:ue,drawBuffers:he,useProgram:Ge,setBlending:Ie,setMaterial:$e,setFlipSided:Dt,setCullFace:Ft,setLineWidth:Tt,setPolygonOffset:tn,setScissorTest:Nt,activeTexture:Ut,bindTexture:G,unbindTexture:fn,compressedTexImage2D:ft,compressedTexImage3D:N,texImage2D:ne,texImage3D:se,pixelStorei:ke,getParameter:ye,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:pe,texStorage3D:xe,texSubImage2D:b,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:be,viewport:_e,reset:je}}function Cb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return g?new OffscreenCanvas(N,b):uo("canvas")}function m(N,b,q){let K=1,Q=ft(N);if((Q.width>q||Q.height>q)&&(K=q/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let pe=Math.floor(K*Q.width),xe=Math.floor(K*Q.height);f===void 0&&(f=x(pe,xe));let ne=b?x(pe,xe):f;return ne.width=pe,ne.height=xe,ne.getContext("2d").drawImage(N,0,0,pe,xe),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pe+"x"+xe+")."),ne}else return"data"in N&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function p(N){return N.generateMipmaps}function M(N){i.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,b,q,K,Q,pe=!1){if(N!==null){if(i[N]!==void 0)return i[N];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xe;K&&(xe=e.get("EXT_texture_norm16"),xe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===i.RED&&(q===i.FLOAT&&(ne=i.R32F),q===i.HALF_FLOAT&&(ne=i.R16F),q===i.UNSIGNED_BYTE&&(ne=i.R8),q===i.UNSIGNED_SHORT&&xe&&(ne=xe.R16_EXT),q===i.SHORT&&xe&&(ne=xe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.R8UI),q===i.UNSIGNED_SHORT&&(ne=i.R16UI),q===i.UNSIGNED_INT&&(ne=i.R32UI),q===i.BYTE&&(ne=i.R8I),q===i.SHORT&&(ne=i.R16I),q===i.INT&&(ne=i.R32I)),b===i.RG&&(q===i.FLOAT&&(ne=i.RG32F),q===i.HALF_FLOAT&&(ne=i.RG16F),q===i.UNSIGNED_BYTE&&(ne=i.RG8),q===i.UNSIGNED_SHORT&&xe&&(ne=xe.RG16_EXT),q===i.SHORT&&xe&&(ne=xe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RG8UI),q===i.UNSIGNED_SHORT&&(ne=i.RG16UI),q===i.UNSIGNED_INT&&(ne=i.RG32UI),q===i.BYTE&&(ne=i.RG8I),q===i.SHORT&&(ne=i.RG16I),q===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),q===i.UNSIGNED_INT&&(ne=i.RGB32UI),q===i.BYTE&&(ne=i.RGB8I),q===i.SHORT&&(ne=i.RGB16I),q===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),q===i.UNSIGNED_INT&&(ne=i.RGBA32UI),q===i.BYTE&&(ne=i.RGBA8I),q===i.SHORT&&(ne=i.RGBA16I),q===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGB16_EXT),q===i.SHORT&&xe&&(ne=xe.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),b===i.RGBA){let se=pe?aa:Ze.getTransfer(Q);q===i.FLOAT&&(ne=i.RGBA32F),q===i.HALF_FLOAT&&(ne=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ne=se===vt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGBA16_EXT),q===i.SHORT&&xe&&(ne=xe.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(N,b){let q;return N?b===null||b===Pi||b===Co?q=i.DEPTH24_STENCIL8:b===ei?q=i.DEPTH32F_STENCIL8:b===Ro&&(q=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===Co?q=i.DEPTH_COMPONENT24:b===ei?q=i.DEPTH_COMPONENT32F:b===Ro&&(q=i.DEPTH_COMPONENT16),q}function T(N,b){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Zt&&N.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function A(N){let b=N.target;b.removeEventListener("dispose",A),C(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function y(N){let b=N.target;b.removeEventListener("dispose",y),S(b)}function C(N){let b=n.get(N);if(b.__webglInit===void 0)return;let q=N.source,K=d.get(q);if(K){let Q=K[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(N),Object.keys(K).length===0&&d.delete(q)}n.remove(N)}function U(N){let b=n.get(N);i.deleteTexture(b.__webglTexture);let q=N.source,K=d.get(q);delete K[b.__cacheKey],o.memory.textures--}function S(N){let b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Q=0;Q<b.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=N.textures;for(let K=0,Q=q.length;K<Q;K++){let pe=n.get(q[K]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(N)}let P=0;function L(){P=0}function B(){return P}function D(N){P=N}function z(){let N=P;return N>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function X(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function j(N,b){let q=n.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let K=N.image;if(K===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{me(q,N,b);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function re(N,b){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){me(q,N,b);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function fe(N,b){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){me(q,N,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function R(N,b){let q=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ue(q,N,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let k={[Un]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},te={[Zt]:i.NEAREST,[Tc]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ce={[pm]:i.NEVER,[ym]:i.ALWAYS,[mm]:i.LESS,[fu]:i.LEQUAL,[gm]:i.EQUAL,[du]:i.GEQUAL,[xm]:i.GREATER,[vm]:i.NOTEQUAL};function oe(N,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kt||b.magFilter===Ao||b.magFilter===Er||b.magFilter===Ii||b.minFilter===Kt||b.minFilter===Ao||b.minFilter===Er||b.minFilter===Ii)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,k[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,k[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,k[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,te[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,te[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==Er&&b.minFilter!==Ii||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function H(N,b){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let pe=X(b);if(pe!==N.__cacheKey){Q[pe]===void 0&&(Q[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),Q[pe].usedTimes++;let xe=Q[N.__cacheKey];xe!==void 0&&(Q[N.__cacheKey].usedTimes--,xe.usedTimes===0&&U(b)),N.__cacheKey=pe,N.__webglTexture=Q[pe].texture}return q}function J(N,b,q){return Math.floor(Math.floor(N/q)/b)}function ee(N,b,q,K){let pe=N.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,K,b.data);else{pe.sort((ke,be)=>ke.start-be.start);let xe=0;for(let ke=1;ke<pe.length;ke++){let be=pe[xe],_e=pe[ke],We=be.start+be.count,Ye=J(_e.start,b.width,4),je=J(be.start,b.width,4);_e.start<=We+1&&Ye===je&&J(_e.start+_e.count-1,b.width,4)===Ye?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++xe,pe[xe]=_e)}pe.length=xe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ke=0,be=pe.length;ke<be;ke++){let _e=pe[ke],We=Math.floor(_e.start/4),Ye=Math.ceil(_e.count/4),je=We%b.width,V=Math.floor(We/b.width),ge=Ye,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,je,V,ge,ie,q,K,b.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function me(N,b,q){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let Q=H(N,b),pe=b.source;t.bindTexture(K,N.__webglTexture,i.TEXTURE0+q);let xe=n.get(pe);if(pe.version!==xe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ie=Ze.getPrimaries(Ze.workingColorSpace),Me=b.colorSpace===Li?null:Ze.getPrimaries(b.colorSpace),Ee=b.colorSpace===Li||ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let se=m(b.image,!1,s.maxTextureSize);se=fn(b,se);let ye=r.convert(b.format,b.colorSpace),ke=r.convert(b.type),be=v(b.internalFormat,ye,ke,b.normalized,b.colorSpace,b.isVideoTexture);oe(K,b);let _e,We=b.mipmaps,Ye=b.isVideoTexture!==!0,je=xe.__version===void 0||Q===!0,V=pe.dataReady,ge=T(b,se);if(b.isDepthTexture)be=E(b.format===Ys,b.type),je&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,be,se.width,se.height,0,ye,ke,null));else if(b.isDataTexture)if(We.length>0){Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let ie=0,Me=We.length;ie<Me;ie++)_e=We[ie],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,ye,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ie,be,_e.width,_e.height,0,ye,ke,_e.data);b.generateMipmaps=!1}else Ye?(je&&t.texStorage2D(i.TEXTURE_2D,ge,be,se.width,se.height),V&&ee(b,se,ye,ke)):t.texImage2D(i.TEXTURE_2D,0,be,se.width,se.height,0,ye,ke,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,We[0].width,We[0].height,se.depth);for(let ie=0,Me=We.length;ie<Me;ie++)if(_e=We[ie],b.format!==ti)if(ye!==null)if(Ye){if(V)if(b.layerUpdates.size>0){let Ee=hf(_e.width,_e.height,b.format,b.type);for(let le of b.layerUpdates){let Be=_e.data.subarray(le*Ee/_e.data.BYTES_PER_ELEMENT,(le+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,le,_e.width,_e.height,1,ye,Be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,se.depth,ye,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,be,_e.width,_e.height,se.depth,0,_e.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,se.depth,ye,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,be,_e.width,_e.height,se.depth,0,ye,ke,_e.data)}else{Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let ie=0,Me=We.length;ie<Me;ie++)_e=We[ie],b.format!==ti?ye!==null?Ye?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,be,_e.width,_e.height,0,_e.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,ye,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ie,be,_e.width,_e.height,0,ye,ke,_e.data)}else if(b.isDataArrayTexture)if(Ye){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,se.width,se.height,se.depth),V)if(b.layerUpdates.size>0){let ie=hf(se.width,se.height,b.format,b.type);for(let Me of b.layerUpdates){let Ee=se.data.subarray(Me*ie/se.data.BYTES_PER_ELEMENT,(Me+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,se.width,se.height,1,ye,ke,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,ke,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,ye,ke,se.data);else if(b.isData3DTexture)Ye?(je&&t.texStorage3D(i.TEXTURE_3D,ge,be,se.width,se.height,se.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,ke,se.data)):t.texImage3D(i.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,ye,ke,se.data);else if(b.isFramebufferTexture){if(je)if(Ye)t.texStorage2D(i.TEXTURE_2D,ge,be,se.width,se.height);else{let ie=se.width,Me=se.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,be,ie,Me,0,ye,ke,null),ie>>=1,Me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),h.add(b),ie.onpaint=Me=>{let Ee=Me.changedElements;for(let le of h)Ee.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Ee=i.RGBA,le=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,le,Be,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ye&&je){let ie=ft(We[0]);t.texStorage2D(i.TEXTURE_2D,ge,be,ie.width,ie.height)}for(let ie=0,Me=We.length;ie<Me;ie++)_e=We[ie],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ye,ke,_e):t.texImage2D(i.TEXTURE_2D,ie,be,ye,ke,_e);b.generateMipmaps=!1}else if(Ye){if(je){let ie=ft(se);t.texStorage2D(i.TEXTURE_2D,ge,be,ie.width,ie.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ke,se)}else t.texImage2D(i.TEXTURE_2D,0,be,ye,ke,se);p(b)&&M(K),xe.__version=pe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ue(N,b,q){if(b.image.length!==6)return;let K=H(N,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let pe=n.get(Q);if(Q.version!==pe.__version||K===!0){t.activeTexture(i.TEXTURE0+q);let xe=Ze.getPrimaries(Ze.workingColorSpace),ne=b.colorSpace===Li?null:Ze.getPrimaries(b.colorSpace),se=b.colorSpace===Li||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ke=b.image[0]&&b.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!ye&&!ke?be[le]=m(b.image[le],!0,s.maxCubemapSize):be[le]=ke?b.image[le].image:b.image[le],be[le]=fn(b,be[le]);let _e=be[0],We=r.convert(b.format,b.colorSpace),Ye=r.convert(b.type),je=v(b.internalFormat,We,Ye,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,ge=pe.__version===void 0||K===!0,ie=Q.dataReady,Me=T(b,_e);oe(i.TEXTURE_CUBE_MAP,b);let Ee;if(ye){V&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,je,_e.width,_e.height);for(let le=0;le<6;le++){Ee=be[le].mipmaps;for(let Be=0;Be<Ee.length;Be++){let Ne=Ee[Be];b.format!==ti?We!==null?V?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,je,Ne.width,Ne.height,0,Ne.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,Ne.width,Ne.height,We,Ye,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,je,Ne.width,Ne.height,0,We,Ye,Ne.data)}}}else{if(Ee=b.mipmaps,V&&ge){Ee.length>0&&Me++;let le=ft(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,je,le.width,le.height)}for(let le=0;le<6;le++)if(ke){V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,We,Ye,be[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,be[le].width,be[le].height,0,We,Ye,be[le].data);for(let Be=0;Be<Ee.length;Be++){let Ht=Ee[Be].image[le].image;V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,Ht.width,Ht.height,We,Ye,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,je,Ht.width,Ht.height,0,We,Ye,Ht.data)}}else{V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,We,Ye,be[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,We,Ye,be[le]);for(let Be=0;Be<Ee.length;Be++){let Ne=Ee[Be];V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,We,Ye,Ne.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,je,We,Ye,Ne.image[le])}}}p(b)&&M(i.TEXTURE_CUBE_MAP),pe.__version=Q.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function he(N,b,q,K,Q,pe){let xe=r.convert(q.format,q.colorSpace),ne=r.convert(q.type),se=v(q.internalFormat,xe,ne,q.normalized,q.colorSpace),ye=n.get(b),ke=n.get(q);if(ke.__renderTarget=b,!ye.__hasExternalTextures){let be=Math.max(1,b.width>>pe),_e=Math.max(1,b.height>>pe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,pe,se,be,_e,b.depth,0,xe,ne,null):t.texImage2D(Q,pe,se,be,_e,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,ke.__webglTexture,0,Nt(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,ke.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(N,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){let K=b.depthTexture,Q=K&&K.isDepthTexture?K.type:null,pe=E(b.stencilBuffer,Q),xe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(b),pe,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(b),pe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,N)}else{let K=b.textures;for(let Q=0;Q<K.length;Q++){let pe=K[Q],xe=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),se=v(pe.internalFormat,xe,ne,pe.normalized,pe.colorSpace);Ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(b),se,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(N,b,q){let K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(i.TEXTURE_CUBE_MAP,b.depthTexture);let ye=r.convert(b.depthTexture.format),ke=r.convert(b.depthTexture.type),be;b.depthTexture.format===Zi?be=i.DEPTH_COMPONENT24:b.depthTexture.format===Ys&&(be=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,b.width,b.height,0,ye,ke,null)}}else j(b.depthTexture,0);let pe=Q.__webglTexture,xe=Nt(b),ne=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,se=b.depthTexture.format===Ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Zi)Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,pe,0);else if(b.depthTexture.format===Ys)Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(N){let b=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=K}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)Fe(b.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?Fe(b.__webglFramebuffer[0],N,0):Fe(b.__webglFramebuffer,N,0)}else if(q){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Ge(b.__webglDepthbuffer[K],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ge(b.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(N,b,q){let K=n.get(N);b!==void 0&&he(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Xe(N)}function $e(N){let b=N.texture,q=n.get(N),K=n.get(b);N.addEventListener("dispose",y);let Q=N.textures,pe=N.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),pe){q.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ne]=[];for(let se=0;se<b.mipmaps.length;se++)q.__webglFramebuffer[ne][se]=i.createFramebuffer()}else q.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)q.__webglFramebuffer[ne]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,se=Q.length;ne<se;ne++){let ye=n.get(Q[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Ut(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){let se=Q[ne];q.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ne]);let ye=r.convert(se.format,se.colorSpace),ke=r.convert(se.type),be=v(se.internalFormat,ye,ke,se.normalized,se.colorSpace,N.isXRRenderTarget===!0),_e=Nt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,be,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,q.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),oe(i.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)he(q.__webglFramebuffer[ne][se],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else he(q.__webglFramebuffer[ne],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(b)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,se=Q.length;ne<se;ne++){let ye=Q[ne],ke=n.get(ye),be=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ke.__webglTexture),oe(be,ye),he(q.__webglFramebuffer,N,ye,i.COLOR_ATTACHMENT0+ne,be,0),p(ye)&&M(be)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ne=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),oe(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)he(q.__webglFramebuffer[se],N,b,i.COLOR_ATTACHMENT0,ne,se);else he(q.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,ne,0);p(b)&&M(ne),t.unbindTexture()}N.depthBuffer&&Xe(N)}function Dt(N){let b=N.textures;for(let q=0,K=b.length;q<K;q++){let Q=b[q];if(p(Q)){let pe=_(N),xe=n.get(Q).__webglTexture;t.bindTexture(pe,xe),M(pe),t.unbindTexture()}}}let Ft=[],Tt=[];function tn(N){if(N.samples>0){if(Ut(N)===!1){let b=N.textures,q=N.width,K=N.height,Q=i.COLOR_BUFFER_BIT,pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(N),ne=b.length>1;if(ne)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let se=N.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let ke=n.get(b[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,Q,i.NEAREST),l===!0&&(Ft.length=0,Tt.length=0,Ft.push(i.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ft.push(pe),Tt.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let ke=n.get(b[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Nt(N){return Math.min(s.maxSamples,N.samples)}function Ut(N){let b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function G(N){let b=o.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function fn(N,b){let q=N.colorSpace,K=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==xn&&q!==Li&&(Ze.getTransfer(q)===vt?(K!==ti||Q!==Xn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",q)),b}function ft(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.getTextureUnits=B,this.setTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=re,this.setTexture3D=fe,this.setTextureCube=R,this.rebindTextures=Ie,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ib(i,e){function t(n,s=Li){let r,o=Ze.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Ro)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===ti)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Fc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Za||n===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Bc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return r.COMPRESSED_R11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===$c||n===Jc||n===jc||n===Qc||n===eu||n===tu||n===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===iu||n===su||n===ru)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===iu)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===au||n===Ka||n===lu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,If=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new If,p={},M=t.getContextAttributes(),_=null,v=null,E=[],T=[],A=new He,y=null,C=new Gt;C.viewport=new lt;let U=new Gt;U.viewport=new lt;let S=[C,U],P=new yc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=E[H];return J===void 0&&(J=new mo,E[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=E[H];return J===void 0&&(J=new mo,E[H]=J),J.getGripSpace()},this.getHand=function(H){let J=E[H];return J===void 0&&(J=new mo,E[H]=J),J.getHandSpace()};function D(H){let J=T.indexOf(H.inputSource);if(J===-1)return;let ee=E[J];ee!==void 0&&(ee.update(H.inputSource,H.frame,c||o),ee.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let H=0;H<E.length;H++){let J=T[H];J!==null&&(T[H]=null,E[H].disconnect(J))}L=null,B=null,m.reset();for(let H in p)delete p[H];e.setRenderTarget(_),d=null,f=null,h=null,s=null,v=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,me=null,ue=null;M.depth&&(ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?Ys:Zi,me=M.stencil?Co:Pi);let he={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(he),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new On(f.textureWidth,f.textureHeight,{format:ti,type:Xn,depthTexture:new ms(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new On(d.framebufferWidth,d.framebufferHeight,{format:ti,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(H){for(let J=0;J<H.removed.length;J++){let ee=H.removed[J],me=T.indexOf(ee);me>=0&&(T[me]=null,E[me].disconnect(ee))}for(let J=0;J<H.added.length;J++){let ee=H.added[J],me=T.indexOf(ee);if(me===-1){for(let he=0;he<E.length;he++)if(he>=T.length){T.push(ee),me=he;break}else if(T[he]===null){T[he]=ee,me=he;break}if(me===-1)break}let ue=E[me];ue&&ue.connect(ee)}}let j=new O,re=new O;function fe(H,J,ee){j.setFromMatrixPosition(J.matrixWorld),re.setFromMatrixPosition(ee.matrixWorld);let me=j.distanceTo(re),ue=J.projectionMatrix.elements,he=ee.projectionMatrix.elements,Ge=ue[14]/(ue[10]-1),Fe=ue[14]/(ue[10]+1),Xe=(ue[9]+1)/ue[5],Ie=(ue[9]-1)/ue[5],$e=(ue[8]-1)/ue[0],Dt=(he[8]+1)/he[0],Ft=Ge*$e,Tt=Ge*Dt,tn=me/(-$e+Dt),Nt=tn*-$e;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Nt),H.translateZ(tn),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ue[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ut=Ge+tn,G=Fe+tn,fn=Ft-Nt,ft=Tt+(me-Nt),N=Xe*Fe/G*Ut,b=Ie*Fe/G*Ut;H.projectionMatrix.makePerspective(fn,ft,N,b,Ut,G),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function R(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let J=H.near,ee=H.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),P.near=U.near=C.near=J,P.far=U.far=C.far=ee,(L!==P.near||B!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,B=P.far),P.layers.mask=H.layers.mask|6,C.layers.mask=P.layers.mask&-5,U.layers.mask=P.layers.mask&-3;let me=H.parent,ue=P.cameras;R(P,me);for(let he=0;he<ue.length;he++)R(ue[he],me);ue.length===2?fe(P,C,U):P.projectionMatrix.copy(C.projectionMatrix),k(H,P,me)};function k(H,J,ee){ee===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(ee.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=fr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(H){return p[H]};let te=null;function ce(H,J){if(u=J.getViewerPose(c||o),g=J,u!==null){let ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let me=!1;ee.length!==P.cameras.length&&(P.cameras.length=0,me=!0);for(let Fe=0;Fe<ee.length;Fe++){let Xe=ee[Fe],Ie=null;if(d!==null)Ie=d.getViewport(Xe);else{let Dt=h.getViewSubImage(f,Xe);Ie=Dt.viewport,Fe===0&&(e.setRenderTargetTextures(v,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(v))}let $e=S[Fe];$e===void 0&&($e=new Gt,$e.layers.enable(Fe),$e.viewport=new lt,S[Fe]=$e),$e.matrix.fromArray(Xe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Xe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Fe===0&&(P.matrix.copy($e.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),me===!0&&P.cameras.push($e)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Fe=h.getDepthInformation(ee[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(ue&&ue.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<ee.length;Fe++){let Xe=ee[Fe].camera;if(Xe){let Ie=p[Xe];Ie||(Ie=new ma,p[Xe]=Ie);let $e=h.getCameraImage(Xe);Ie.sourceTexture=$e}}}}for(let ee=0;ee<E.length;ee++){let me=T[ee],ue=E[ee];me!==null&&ue!==void 0&&ue.update(me,J,c||o)}te&&te(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let oe=new jm;oe.setAnimationLoop(ce),this.setAnimationLoop=function(H){te=H},this.dispose=function(){}}},Db=new Ae,sg=new qe;sg.set(-1,0,0,0,1,0,0,0,1);function Fb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let T=E.program;n.uniformBlockBinding(v,T)}function c(v,E){let T=s[v.id];T===void 0&&(m(v),T=u(v),s[v.id]=T,v.addEventListener("dispose",M));let A=E.program;n.updateUBOMapping(v,A);let y=e.render.frame;r[v.id]!==y&&(f(v),r[v.id]=y)}function u(v){let E=h();v.__bindingPointIndex=E;let T=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let E=s[v.id],T=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,C=T.length;y<C;y++){let U=T[y];if(Array.isArray(U))for(let S=0,P=U.length;S<P;S++)d(U[S],y,S,A);else d(U,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,E,T,A){if(x(v,E,T,A)===!0){let y=v.__offset,C=v.value;if(Array.isArray(C)){let U=0;for(let S=0;S<C.length;S++){let P=C[S],L=p(P);g(P,v.__data,U),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(U+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,E,T){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,T)}function x(v,E,T,A){let y=v.value,C=E+"_"+T;if(A[C]===void 0)return typeof y=="number"||typeof y=="boolean"?A[C]=y:ArrayBuffer.isView(y)?A[C]=y.slice():A[C]=y.clone(),!0;{let U=A[C];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return A[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function m(v){let E=v.uniforms,T=0,A=16;for(let C=0,U=E.length;C<U;C++){let S=Array.isArray(E[C])?E[C]:[E[C]];for(let P=0,L=S.length;P<L;P++){let B=S[P],D=Array.isArray(B.value)?B.value:[B.value];for(let z=0,X=D.length;z<X;z++){let j=D[z],re=p(j),fe=T%A,R=fe%re.boundary,k=fe+R;T+=R,k!==0&&A-k<re.storage&&(T+=A-k),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=re.storage}}}let y=T%A;return y>0&&(T+=A-y),v.__size=T,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function _(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}var Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ts=null;function Ob(){return ts===null&&(ts=new vo(Ub,16,16,Zs,li),ts.name="DFG_LUT",ts.minFilter=Kt,ts.magFilter=Kt,ts.wrapS=Fn,ts.wrapT=Fn,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}var xu=class{constructor(e={}){let{canvas:t=_m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Xn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Lc,Pc,Ic]),p=new Set([Xn,Pi,Ro,Co,Ac,Rc]),M=new Uint32Array(4),_=new Int32Array(4),v=new O,E=null,T=null,A=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,S=!1,P=null,L=null,B=null,D=null;this._outputColorSpace=tt;let z=0,X=0,j=null,re=-1,fe=null,R=new lt,k=new lt,te=null,ce=new ve(0),oe=0,H=t.width,J=t.height,ee=1,me=null,ue=null,he=new lt(0,0,H,J),Ge=new lt(0,0,H,J),Fe=!1,Xe=new yo,Ie=!1,$e=!1,Dt=new Ae,Ft=new O,Tt=new lt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Ut(){return j===null?ee:1}let G=n;function fn(I,W){return t.getContext(I,W)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Vi,!1),G===null){let W="webgl2";if(G=fn(W,I),G===null)throw fn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw Ke("WebGLRenderer: "+I.message),I}let ft,N,b,q,K,Q,pe,xe,ne,se,ye,ke,be,_e,We,Ye,je,V,ge,ie,Me,Ee,le;function Be(){ft=new W_(G),ft.init(),Me=new Ib(G,ft),N=new U_(G,ft,e,Me),b=new Rb(G,ft),N.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),L=G.createFramebuffer(),B=G.createFramebuffer(),D=G.createFramebuffer(),q=new Y_(G),K=new pb,Q=new Cb(G,ft,b,K,N,Me,q),pe=new G_(U),xe=new Jx(G),Ee=new F_(G,xe),ne=new X_(G,xe,q,Ee),se=new K_(G,ne,xe,Ee,q),V=new Z_(G,N,Q),We=new O_(K),ye=new db(U,pe,ft,N,Ee,We),ke=new Fb(U,K),be=new gb,_e=new bb(ft),je=new D_(U,pe,b,se,g,l),Ye=new Ab(U,se,N),le=new Nb(G,q,N,b),ge=new N_(G,ft,q),ie=new q_(G,ft,q),q.programs=ye.programs,U.capabilities=N,U.extensions=ft,U.properties=K,U.renderLists=be,U.shadowMap=Ye,U.state=b,U.info=q}Be(),x!==Xn&&(C=new J_(x,t.width,t.height,a,s,r));let Ne=new Pf(U,G);this.xr=Ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let I=ft.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ft.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(I){I!==void 0&&(ee=I,this.setSize(H,J,!1))},this.getSize=function(I){return I.set(H,J)},this.setSize=function(I,W,$=!0){if(Ne.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,J=W,t.width=Math.floor(I*ee),t.height=Math.floor(W*ee),$===!0&&(t.style.width=I+"px",t.style.height=W+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(H*ee,J*ee).floor()},this.setDrawingBufferSize=function(I,W,$){H=I,J=W,ee=$,t.width=Math.floor(I*$),t.height=Math.floor(W*$),this.setViewport(0,0,I,W)},this.setEffects=function(I){if(x===Xn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let W=0;W<I.length;W++)if(I[W].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(he)},this.setViewport=function(I,W,$,Y){I.isVector4?he.set(I.x,I.y,I.z,I.w):he.set(I,W,$,Y),b.viewport(R.copy(he).multiplyScalar(ee).round())},this.getScissor=function(I){return I.copy(Ge)},this.setScissor=function(I,W,$,Y){I.isVector4?Ge.set(I.x,I.y,I.z,I.w):Ge.set(I,W,$,Y),b.scissor(k.copy(Ge).multiplyScalar(ee).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(I){b.setScissorTest(Fe=I)},this.setOpaqueSort=function(I){me=I},this.setTransparentSort=function(I){ue=I},this.getClearColor=function(I){return I.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(I=!0,W=!0,$=!0){let Y=0;if(I){let Z=!1;if(j!==null){let Te=j.texture.format;Z=m.has(Te)}if(Z){let Te=j.texture.type,Le=p.has(Te),we=je.getClearColor(),Ue=je.getClearAlpha(),ze=we.r,Qe=we.g,rt=we.b;Le?(M[0]=ze,M[1]=Qe,M[2]=rt,M[3]=Ue,G.clearBufferuiv(G.COLOR,0,M)):(_[0]=ze,_[1]=Qe,_[2]=rt,_[3]=Ue,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}W&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),P=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Vi,!1),je.dispose(),be.dispose(),_e.dispose(),K.dispose(),pe.dispose(),se.dispose(),Ee.dispose(),le.dispose(),ye.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Wd),Ne.removeEventListener("sessionend",Xd),er.stop()};function Ht(I){I.preventDefault(),la("WebGLRenderer: Context Lost."),S=!0}function Pt(){la("WebGLRenderer: Context Restored."),S=!1;let I=q.autoReset,W=Ye.enabled,$=Ye.autoUpdate,Y=Ye.needsUpdate,Z=Ye.type;Be(),q.autoReset=I,Ye.enabled=W,Ye.autoUpdate=$,Ye.needsUpdate=Y,Ye.type=Z}function Vi(I){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Gi(I){let W=I.target;W.removeEventListener("dispose",Gi),M0(W)}function M0(I){b0(I),K.remove(I)}function b0(I){let W=K.get(I).programs;W!==void 0&&(W.forEach(function($){ye.releaseProgram($)}),I.isShaderMaterial&&ye.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,$,Y,Z,Te){W===null&&(W=tn);let Le=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,we=T0(I,W,$,Y,Z);b.setMaterial(Y,Le);let Ue=$.index,ze=1;if(Y.wireframe===!0){if(Ue=ne.getWireframeAttribute($),Ue===void 0)return;ze=2}let Qe=$.drawRange,rt=$.attributes.position,Ve=Qe.start*ze,Et=(Qe.start+Qe.count)*ze;Te!==null&&(Ve=Math.max(Ve,Te.start*ze),Et=Math.min(Et,(Te.start+Te.count)*ze)),Ue!==null?(Ve=Math.max(Ve,0),Et=Math.min(Et,Ue.count)):rt!=null&&(Ve=Math.max(Ve,0),Et=Math.min(Et,rt.count));let qt=Et-Ve;if(qt<0||qt===1/0)return;Ee.setup(Z,Y,we,$,Ue);let Vt,Rt=ge;if(Ue!==null&&(Vt=xe.get(Ue),Rt=ie,Rt.setIndex(Vt)),Z.isMesh)Y.wireframe===!0?(b.setLineWidth(Y.wireframeLinewidth*Ut()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(Z.isLine){let wn=Y.linewidth;wn===void 0&&(wn=1),b.setLineWidth(wn*Ut()),Z.isLineSegments?Rt.setMode(G.LINES):Z.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else Z.isPoints?Rt.setMode(G.POINTS):Z.isSprite&&Rt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let wn=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Jn=Z._multiDrawCount,pt=Ue?xe.get(Ue).bytesPerElement:1,ii=K.get(Y).currentProgram.getUniforms();for(let Wi=0;Wi<Jn;Wi++)ii.setValue(G,"_gl_DrawID",Wi),Rt.render(wn[Wi]/pt,Pe[Wi])}else if(Z.isInstancedMesh)Rt.renderInstances(Ve,qt,Z.count);else if($.isInstancedBufferGeometry){let wn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,wn);Rt.renderInstances(Ve,qt,Pe)}else Rt.render(Ve,qt)};function Gd(I,W,$){I.transparent===!0&&I.side===St&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,vl(I,W,$),I.side=Nn,I.needsUpdate=!0,vl(I,W,$),I.side=St):vl(I,W,$)}this.compile=function(I,W,$=null){$===null&&($=I),T=_e.get($),T.init(W),y.push(T),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),I!==$&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights();let Y=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Te=Z.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){let we=Te[Le];Gd(we,$,Z),Y.add(we)}else Gd(Te,$,Z),Y.add(Te)}),T=y.pop(),Y},this.compileAsync=function(I,W,$=null){let Y=this.compile(I,W,$);return new Promise(Z=>{function Te(){if(Y.forEach(function(Le){K.get(Le).currentProgram.isReady()&&Y.delete(Le)}),Y.size===0){Z(I);return}setTimeout(Te,10)}ft.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let sh=null;function S0(I){sh&&sh(I)}function Wd(){er.stop()}function Xd(){er.start()}let er=new jm;er.setAnimationLoop(S0),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(I){sh=I,Ne.setAnimationLoop(I),I===null?er.stop():er.start()},Ne.addEventListener("sessionstart",Wd),Ne.addEventListener("sessionend",Xd),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P!==null&&P.renderStart(I,W);let $=Ne.enabled===!0&&Ne.isPresenting===!0,Y=C!==null&&(j===null||$)&&C.begin(U,j);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(W),W=Ne.getCamera()),I.isScene===!0&&I.onBeforeRender(U,I,W,j),T=_e.get(I,y.length),T.init(W),T.state.textureUnits=Q.getTextureUnits(),y.push(T),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(Dt,_i,W.reversedDepth),$e=this.localClippingEnabled,Ie=We.init(this.clippingPlanes,$e),E=be.get(I,A.length),E.init(),A.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){let Le=U.xr.getDepthSensingMesh();Le!==null&&rh(Le,W,-1/0,U.sortObjects)}rh(I,W,0,U.sortObjects),E.finish(),U.sortObjects===!0&&E.sort(me,ue,W.reversedDepth),Nt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Nt&&je.addToRenderList(E,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&We.beginShadows();let Z=T.state.shadowsArray;if(Ye.render(Z,I,W),Ie===!0&&We.endShadows(),(Y&&C.hasRenderPass())===!1){let Le=E.opaque,we=E.transmissive;if(T.setupLights(),W.isArrayCamera){let Ue=W.cameras;if(we.length>0)for(let ze=0,Qe=Ue.length;ze<Qe;ze++){let rt=Ue[ze];Yd(Le,we,I,rt)}Nt&&je.render(I);for(let ze=0,Qe=Ue.length;ze<Qe;ze++){let rt=Ue[ze];qd(E,I,rt,rt.viewport)}}else we.length>0&&Yd(Le,we,I,W),Nt&&je.render(I),qd(E,I,W)}j!==null&&X===0&&(Q.updateMultisampleRenderTarget(j),Q.updateRenderTargetMipmap(j)),Y&&C.end(U),I.isScene===!0&&I.onAfterRender(U,I,W),Ee.resetDefaultState(),re=-1,fe=null,y.pop(),y.length>0?(T=y[y.length-1],Q.setTextureUnits(T.state.textureUnits),Ie===!0&&We.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,P!==null&&P.renderEnd()};function rh(I,W,$,Y){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)$=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLightProbeGrid)T.pushLightProbeGrid(I);else if(I.isLight)T.pushLight(I),I.castShadow&&T.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Xe.intersectsSprite(I)){Y&&Tt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Dt);let Le=se.update(I),we=I.material;we.visible&&E.push(I,Le,we,$,Tt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Xe.intersectsObject(I))){let Le=se.update(I),we=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Tt.copy(I.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Tt.copy(Le.boundingSphere.center)),Tt.applyMatrix4(I.matrixWorld).applyMatrix4(Dt)),Array.isArray(we)){let Ue=Le.groups;for(let ze=0,Qe=Ue.length;ze<Qe;ze++){let rt=Ue[ze],Ve=we[rt.materialIndex];Ve&&Ve.visible&&E.push(I,Le,Ve,$,Tt.z,rt)}}else we.visible&&E.push(I,Le,we,$,Tt.z,null)}}let Te=I.children;for(let Le=0,we=Te.length;Le<we;Le++)rh(Te[Le],W,$,Y)}function qd(I,W,$,Y){let{opaque:Z,transmissive:Te,transparent:Le}=I;T.setupLightsView($),Ie===!0&&We.setGlobalState(U.clippingPlanes,$),Y&&b.viewport(R.copy(Y)),Z.length>0&&xl(Z,W,$),Te.length>0&&xl(Te,W,$),Le.length>0&&xl(Le,W,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Yd(I,W,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Ve=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new On(1,1,{generateMipmaps:!0,type:Ve?li:Xn,minFilter:Ii,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let Te=T.state.transmissionRenderTarget[Y.id],Le=Y.viewport||R;Te.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);let we=U.getRenderTarget(),Ue=U.getActiveCubeFace(),ze=U.getActiveMipmapLevel();U.setRenderTarget(Te),U.getClearColor(ce),oe=U.getClearAlpha(),oe<1&&U.setClearColor(16777215,.5),U.clear(),Nt&&je.render($);let Qe=U.toneMapping;U.toneMapping=Ci;let rt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),Ie===!0&&We.setGlobalState(U.clippingPlanes,Y),xl(I,$,Y),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Et=0,qt=W.length;Et<qt;Et++){let Vt=W[Et],{object:Rt,geometry:wn,material:Pe,group:Jn}=Vt;if(Pe.side===St&&Rt.layers.test(Y.layers)){let pt=Pe.side;Pe.side=on,Pe.needsUpdate=!0,Zd(Rt,$,Y,wn,Pe,Jn),Pe.side=pt,Pe.needsUpdate=!0,Ve=!0}}Ve===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}U.setRenderTarget(we,Ue,ze),U.setClearColor(ce,oe),rt!==void 0&&(Y.viewport=rt),U.toneMapping=Qe}function xl(I,W,$){let Y=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Te=I.length;Z<Te;Z++){let Le=I[Z],{object:we,geometry:Ue,group:ze}=Le,Qe=Le.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),we.layers.test($.layers)&&Zd(we,W,$,Ue,Qe,ze)}}function Zd(I,W,$,Y,Z,Te){I.onBeforeRender(U,W,$,Y,Z,Te),I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(U,W,$,Y,I,Te),Z.transparent===!0&&Z.side===St&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,U.renderBufferDirect($,W,Y,Z,I,Te),Z.side=Nn,Z.needsUpdate=!0,U.renderBufferDirect($,W,Y,Z,I,Te),Z.side=St):U.renderBufferDirect($,W,Y,Z,I,Te),I.onAfterRender(U,W,$,Y,Z,Te)}function vl(I,W,$){W.isScene!==!0&&(W=tn);let Y=K.get(I),Z=T.state.lights,Te=T.state.shadowsArray,Le=Z.state.version,we=ye.getParameters(I,Z.state,Te,W,$,T.state.lightProbeGridArray),Ue=ye.getProgramCacheKey(we),ze=Y.programs;Y.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;let Qe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Y.envMap=pe.get(I.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,ze===void 0&&(I.addEventListener("dispose",Gi),ze=new Map,Y.programs=ze);let rt=ze.get(Ue);if(rt!==void 0){if(Y.currentProgram===rt&&Y.lightsStateVersion===Le)return $d(I,we),rt}else we.uniforms=ye.getUniforms(I),P!==null&&I.isNodeMaterial&&P.build(I,$,we),I.onBeforeCompile(we,U),rt=ye.acquireProgram(we,Ue),ze.set(Ue,rt),Y.uniforms=we.uniforms;let Ve=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ve.clippingPlanes=We.uniform),$d(I,we),Y.needsLights=A0(I),Y.lightsStateVersion=Le,Y.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=rt,Y.uniformsList=null,rt}function Kd(I){if(I.uniformsList===null){let W=I.currentProgram.getUniforms();I.uniformsList=Fo.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function $d(I,W){let $=K.get(I);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function w0(I,W){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let $=0,Y=I.length;$<Y;$++){let Z=I[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function T0(I,W,$,Y,Z){W.isScene!==!0&&(W=tn),Q.resetTextureUnits();let Te=W.fog,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,we=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ze.workingColorSpace,Ue=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ze=pe.get(Y.envMap||Le,Ue),Qe=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,rt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!$.morphAttributes.position,Et=!!$.morphAttributes.normal,qt=!!$.morphAttributes.color,Vt=Ci;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Vt=U.toneMapping);let Rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,wn=Rt!==void 0?Rt.length:0,Pe=K.get(Y),Jn=T.state.lights;if(Ie===!0&&($e===!0||I!==fe)){let Lt=I===fe&&Y.id===re;We.setState(Y,I,Lt)}let pt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Jn.state.version||Pe.outputColorSpace!==we||Z.isBatchedMesh&&Pe.batching===!1||!Z.isBatchedMesh&&Pe.batching===!0||Z.isBatchedMesh&&Pe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Pe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Z.isInstancedMesh&&Pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pe.instancingMorph===!1&&Z.morphTexture!==null||Pe.envMap!==ze||Y.fog===!0&&Pe.fog!==Te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==We.numPlanes||Pe.numIntersection!==We.numIntersection)||Pe.vertexAlphas!==Qe||Pe.vertexTangents!==rt||Pe.morphTargets!==Ve||Pe.morphNormals!==Et||Pe.morphColors!==qt||Pe.toneMapping!==Vt||Pe.morphTargetsCount!==wn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Pe.__version=Y.version);let ii=Pe.currentProgram;pt===!0&&(ii=vl(Y,W,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,ii,Pe));let Wi=!1,Cs=!1,Gr=!1,Ct=ii.getUniforms(),Yt=Pe.uniforms;if(b.useProgram(ii.program)&&(Wi=!0,Cs=!0,Gr=!0),Y.id!==re&&(re=Y.id,Cs=!0),Pe.needsLights){let Lt=w0(T.state.lightProbeGridArray,Z);Pe.lightProbeGrid!==Lt&&(Pe.lightProbeGrid=Lt,Cs=!0)}if(Wi||fe!==I){b.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",I.projectionMatrix),Ct.setValue(G,"viewMatrix",I.matrixWorldInverse);let Ps=Ct.map.cameraPosition;Ps!==void 0&&Ps.setValue(G,Ft.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),fe!==I&&(fe=I,Cs=!0,Gr=!0)}if(Pe.needsLights&&(Jn.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",Jn.state.directionalShadowMap,Q),Jn.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",Jn.state.spotShadowMap,Q),Jn.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",Jn.state.pointShadowMap,Q)),Z.isSkinnedMesh){Ct.setOptional(G,Z,"bindMatrix"),Ct.setOptional(G,Z,"bindMatrixInverse");let Lt=Z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Lt.boneTexture,Q))}Z.isBatchedMesh&&(Ct.setOptional(G,Z,"batchingTexture"),Ct.setValue(G,"batchingTexture",Z._matricesTexture,Q),Ct.setOptional(G,Z,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",Z._indirectTexture,Q),Ct.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",Z._colorsTexture,Q));let Is=$.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&V.update(Z,$,ii),(Cs||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,Ct.setValue(G,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(Yt.envMapIntensity.value=W.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Ob()),Cs){if(Ct.setValue(G,"toneMappingExposure",U.toneMappingExposure),Pe.needsLights&&E0(Yt,Gr),Te&&Y.fog===!0&&ke.refreshFogUniforms(Yt,Te),ke.refreshMaterialUniforms(Yt,Y,ee,J,T.state.transmissionRenderTarget[I.id]),Pe.needsLights&&Pe.lightProbeGrid){let Lt=Pe.lightProbeGrid;Yt.probesSH.value=Lt.texture,Yt.probesMin.value.copy(Lt.boundingBox.min),Yt.probesMax.value.copy(Lt.boundingBox.max),Yt.probesResolution.value.copy(Lt.resolution)}Fo.upload(G,Kd(Pe),Yt,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fo.upload(G,Kd(Pe),Yt,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(G,"center",Z.center),Ct.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ct.setValue(G,"normalMatrix",Z.normalMatrix),Ct.setValue(G,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Lt=Y.uniformsGroups;for(let Ps=0,Wr=Lt.length;Ps<Wr;Ps++){let Jd=Lt[Ps];le.update(Jd,ii),le.bind(Jd,ii)}}return ii}function E0(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function A0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(I,W,$){let Y=K.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(I.texture).__webglTexture=W,K.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,W){let $=K.get(I);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,$=0){j=I,z=W,X=$;let Y=null,Z=!1,Te=!1;if(I){let we=K.get(I);if(we.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(G.FRAMEBUFFER,we.__webglFramebuffer),R.copy(I.viewport),k.copy(I.scissor),te=I.scissorTest,b.viewport(R),b.scissor(k),b.setScissorTest(te),re=-1;return}else if(we.__webglFramebuffer===void 0)Q.setupRenderTarget(I);else if(we.__hasExternalTextures)Q.rebindTextures(I,K.get(I.texture).__webglTexture,K.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qe=I.depthTexture;if(we.__boundDepthTexture!==Qe){if(Qe!==null&&K.has(Qe)&&(I.width!==Qe.image.width||I.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(I)}}let Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);let ze=K.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?Y=ze[W][$]:Y=ze[W],Z=!0):I.samples>0&&Q.useMultisampledRTT(I)===!1?Y=K.get(I).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[$]:Y=ze,R.copy(I.viewport),k.copy(I.scissor),te=I.scissorTest}else R.copy(he).multiplyScalar(ee).floor(),k.copy(Ge).multiplyScalar(ee).floor(),te=Fe;if($!==0&&(Y=L),b.bindFramebuffer(G.FRAMEBUFFER,Y)&&b.drawBuffers(I,Y),b.viewport(R),b.scissor(k),b.setScissorTest(te),Z){let we=K.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,$)}else if(Te){let we=W;for(let Ue=0;Ue<I.textures.length;Ue++){let ze=K.get(I.textures[Ue]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ue,ze.__webglTexture,$,we)}}else if(I!==null&&$!==0){let we=K.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,we.__webglTexture,$)}re=-1},this.readRenderTargetPixels=function(I,W,$,Y,Z,Te,Le,we=0){if(!(I&&I.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=K.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){b.bindFramebuffer(G.FRAMEBUFFER,Ue);try{let ze=I.textures[we],Qe=ze.format,rt=ze.type;if(I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(Qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(rt)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Y&&$>=0&&$<=I.height-Z&&G.readPixels(W,$,Y,Z,Me.convert(Qe),Me.convert(rt),Te)}finally{let ze=j!==null?K.get(j).__webglFramebuffer:null;b.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(I,W,$,Y,Z,Te,Le,we=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=K.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(W>=0&&W<=I.width-Y&&$>=0&&$<=I.height-Z){b.bindFramebuffer(G.FRAMEBUFFER,Ue);let ze=I.textures[we],Qe=ze.format,rt=ze.type;if(I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,Te.byteLength,G.STREAM_READ),G.readPixels(W,$,Y,Z,Me.convert(Qe),Me.convert(rt),0);let Et=j!==null?K.get(j).__webglFramebuffer:null;b.bindFramebuffer(G.FRAMEBUFFER,Et);let qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await bm(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Te),G.deleteBuffer(Ve),G.deleteSync(qt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,W=null,$=0){let Y=Math.pow(2,-$),Z=Math.floor(I.image.width*Y),Te=Math.floor(I.image.height*Y),Le=W!==null?W.x:0,we=W!==null?W.y:0;Q.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,Le,we,Z,Te),b.unbindTexture()},this.copyTextureToTexture=function(I,W,$=null,Y=null,Z=0,Te=0){let Le,we,Ue,ze,Qe,rt,Ve,Et,qt,Vt=I.isCompressedTexture?I.mipmaps[Te]:I.image;if($!==null)Le=$.max.x-$.min.x,we=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,Qe=$.min.y,rt=$.isBox3?$.min.z:0;else{let Yt=Math.pow(2,-Z);Le=Math.floor(Vt.width*Yt),we=Math.floor(Vt.height*Yt),I.isDataArrayTexture?Ue=Vt.depth:I.isData3DTexture?Ue=Math.floor(Vt.depth*Yt):Ue=1,ze=0,Qe=0,rt=0}Y!==null?(Ve=Y.x,Et=Y.y,qt=Y.z):(Ve=0,Et=0,qt=0);let Rt=Me.convert(W.format),wn=Me.convert(W.type),Pe;W.isData3DTexture?(Q.setTexture3D(W,0),Pe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Q.setTexture2DArray(W,0),Pe=G.TEXTURE_2D_ARRAY):(Q.setTexture2D(W,0),Pe=G.TEXTURE_2D),b.activeTexture(G.TEXTURE0),b.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),b.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),b.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);let Jn=b.getParameter(G.UNPACK_ROW_LENGTH),pt=b.getParameter(G.UNPACK_IMAGE_HEIGHT),ii=b.getParameter(G.UNPACK_SKIP_PIXELS),Wi=b.getParameter(G.UNPACK_SKIP_ROWS),Cs=b.getParameter(G.UNPACK_SKIP_IMAGES);b.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),b.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),b.pixelStorei(G.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),b.pixelStorei(G.UNPACK_SKIP_IMAGES,rt);let Gr=I.isDataArrayTexture||I.isData3DTexture,Ct=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){let Yt=K.get(I),Is=K.get(W),Lt=K.get(Yt.__renderTarget),Ps=K.get(Is.__renderTarget);b.bindFramebuffer(G.READ_FRAMEBUFFER,Lt.__webglFramebuffer),b.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let Wr=0;Wr<Ue;Wr++)Gr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(I).__webglTexture,Z,rt+Wr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(W).__webglTexture,Te,qt+Wr)),G.blitFramebuffer(ze,Qe,Le,we,Ve,Et,Le,we,G.DEPTH_BUFFER_BIT,G.NEAREST);b.bindFramebuffer(G.READ_FRAMEBUFFER,null),b.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||K.has(I)){let Yt=K.get(I),Is=K.get(W);b.bindFramebuffer(G.READ_FRAMEBUFFER,B),b.bindFramebuffer(G.DRAW_FRAMEBUFFER,D);for(let Lt=0;Lt<Ue;Lt++)Gr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.__webglTexture,Z,rt+Lt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yt.__webglTexture,Z),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Is.__webglTexture,Te,qt+Lt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Is.__webglTexture,Te),Z!==0?G.blitFramebuffer(ze,Qe,Le,we,Ve,Et,Le,we,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(Pe,Te,Ve,Et,qt+Lt,ze,Qe,Le,we):G.copyTexSubImage2D(Pe,Te,Ve,Et,ze,Qe,Le,we);b.bindFramebuffer(G.READ_FRAMEBUFFER,null),b.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?I.isDataTexture||I.isData3DTexture?G.texSubImage3D(Pe,Te,Ve,Et,qt,Le,we,Ue,Rt,wn,Vt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Pe,Te,Ve,Et,qt,Le,we,Ue,Rt,Vt.data):G.texSubImage3D(Pe,Te,Ve,Et,qt,Le,we,Ue,Rt,wn,Vt):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Te,Ve,Et,Le,we,Rt,wn,Vt.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Te,Ve,Et,Vt.width,Vt.height,Rt,Vt.data):G.texSubImage2D(G.TEXTURE_2D,Te,Ve,Et,Le,we,Rt,wn,Vt);b.pixelStorei(G.UNPACK_ROW_LENGTH,Jn),b.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(G.UNPACK_SKIP_PIXELS,ii),b.pixelStorei(G.UNPACK_SKIP_ROWS,Wi),b.pixelStorei(G.UNPACK_SKIP_IMAGES,Cs),Te===0&&W.generateMipmaps&&G.generateMipmap(Pe),b.unbindTexture()},this.initRenderTarget=function(I){K.get(I).__webglFramebuffer===void 0&&Q.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Q.setTextureCube(I,0):I.isData3DTexture?Q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Q.setTexture2DArray(I,0):Q.setTexture2D(I,0),b.unbindTexture()},this.resetState=function(){z=0,X=0,j=null,b.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Cr="ZC_SouDaChe_KuangQu_Test",Lf="Assets/PackRes/ArtRes/Prefab/SceneObj/ZC_SouDaChe_KuangQu_Test.prefab";function rg(i){let e=i.meshes.filter(u=>u.userData.prefabRoot===Cr),t=e.filter(u=>u.userData.presentationKind==="surface"),n=e.find(u=>u.name.endsWith("/Range/Quad"));if(t.length!==3||!n)throw new Error("The exported mining prefab is incomplete: "+Cr);n.geometry.computeBoundingBox();let s=n.geometry.boundingBox.getCenter(new O),r=t.map(u=>{let h=u.geometry.clone().translate(-s.x,-s.y,-s.z),f=h.getAttribute("normal"),d=0;if(f)for(let x=0;x<f.count;x++){let m=f.getX(x)**2+f.getY(x)**2+f.getZ(x)**2;Number.isFinite(m)&&m>.01&&d++}(!f||d<f.count*.9)&&h.computeVertexNormals(),h.computeBoundingBox(),h.computeBoundingSphere();let g=(Array.isArray(u.material)?u.material:[u.material]).map(x=>{let m=x.clone();return m.opacity=x.userData.baseOpacity??x.opacity,m.depthWrite=x.userData.baseDepthWrite??x.depthWrite,m});return{source:u,geometry:h,materials:g,isBase:u.name.includes("DiZuo")}}),o=new Set;function a(){for(let u of e)u.userData.demoHidden=!0,u.userData.replacedByMineVisual=!0,delete u.userData.entity,u.visible=!1}function l(u){let h=new ct;h.name=Cr+"/"+u.id,h.position.copy(u.pos),h.userData={entity:u,prefabRoot:Cr,prefabAsset:Lf,floor:u.floor};let f=r.map(({source:x,geometry:m,materials:p,isBase:M})=>{let _=p.map(E=>E.clone()),v=new Re(m,_.length===1?_[0]:_);return v.name=x.name.slice(x.name.indexOf(Cr)+Cr.length+1),v.castShadow=x.castShadow,v.receiveShadow=x.receiveShadow,v.userData={entity:u,prefabRoot:Cr,prefabAsset:Lf,sourceId:x.userData.sourceId,sourcePath:x.userData.sourcePath,floor:u.floor,presentationKind:"surface",isMineBase:M},h.add(v),v}),d=!1,g={root:h,meshes:f,setRemaining(x){for(let m of f)m.visible=x>0||m.userData.isMineBase},dispose(){if(!d){d=!0,h.removeFromParent();for(let x of f)for(let m of Array.isArray(x.material)?x.material:[x.material])m.dispose();o.delete(g)}}};return o.add(g),g.setRemaining(u.remaining),a(),g}function c(){for(let u of[...o])u.dispose();a()}return a(),{create:l,hideSource:a,reset:c,sourceMeshes:e,sourceAnchor:s.clone(),prefabAsset:Lf}}function _u({captureSeconds:i=3,productionSeconds:e=30,graceSeconds:t=2}={}){for(let[A,y]of Object.entries({captureSeconds:i,productionSeconds:e,graceSeconds:t}))if(!Number.isFinite(y)||y<0||A!=="graceSeconds"&&y===0)throw new RangeError(A+" must be "+(A==="graceSeconds"?"nonnegative":"positive"));let n=1e-9,s=null,r=null,o=0,a=0,l=0,c=!1,u=!0,h="unclaimed",f=!0,d="empty",g=[],x=new Set;function m(A,y,C=null){h=A,f=y,d=C}function p(){r=null,o=0,l=0,c=!1}function M(A,y){m("occupied",!1),a=Math.min(e,a+A),a+n>=e&&(a=0,y.push({type:"reward",team:s,recipients:g.filter(C=>C.team===s).map(C=>C.id)}))}function _(A,y,C){r!==A&&(p(),r=A),l=0,c=!1,m("capturing",!1);let U=Math.max(0,i-o);if(y+n<U){o+=y;return}let S=s;s=A,p(),a=0,C.push({type:"owner-changed",team:A,previousOwner:S}),M(Math.max(0,y-U),C)}function v(A){c||(c=!0,l=t);let y=Math.min(A,l);return l=Math.max(0,l-A),m("grace",!0,"capturer-absent"),l>n?{expired:!1,remainingTime:0}:(p(),{expired:!0,remainingTime:Math.max(0,A-y)})}function E(A,y=[],C=!0){if(!Number.isFinite(A)||A<0)throw new RangeError("dt must be finite and nonnegative");if(!Array.isArray(y))throw new TypeError("occupants must be an array");let U=new Map;for(let P of y)P?.id==null||P.team==null||U.has(P.id)||U.set(P.id,{id:P.id,team:P.team});g=[...U.values()],x=new Set(g.map(P=>P.team)),u=!!C;let S=[];if(!u)return m("disabled",!0,"depleted"),S;if(s===null)return x.size>1?(p(),m("contested",!0,"multiple-teams")):x.size===1?_(x.values().next().value,A,S):r!==null?v(A).expired&&m("unclaimed",!0,"empty"):m("unclaimed",!0,"empty"),S;if(x.size===1&&!x.has(s))return _(x.values().next().value,A,S),S;if(x.size>1)return r!==null&&!x.has(r)?v(A):r!==null&&(c=!1,l=0),m("contested",!0,x.has(s)&&r!==null?"owner-returned":"multiple-teams"),S;if(r!==null){let P=v(A);return P.expired&&(x.has(s)?M(P.remainingTime,S):m("occupied",!0,"owner-absent")),S}return x.has(s)?M(A,S):m("occupied",!0,"owner-absent"),S}function T(){let A=null;return u?s===null?A="unowned":x.has(s)?x.size>1?A="enemy-present":r!==null&&(A="takeover-grace"):A="owner-absent":A="depleted",{owner:s,state:h,captureTeam:r,captureProgress:o,productionProgress:a,graceRemaining:l,paused:f,reason:d,productionPaused:A!==null,productionReason:A,captureSeconds:i,productionSeconds:e,graceSeconds:t}}return{step:E,snapshot:T}}var el=["","#a7ebbb","#97dfff","#ffd284"],Oo=i=>i==="player"?"我方":i?"敌方":"无主";function Mu(i){let e=i.occupation.snapshot();return i.remaining<=0?"已采空":e.graceRemaining>0?`${e.owner?"夺占":"占领"}暂停 · ${e.graceRemaining.toFixed(1)}s 内返回`:e.captureTeam?`${Oo(e.captureTeam)}${e.owner?"夺占":"占领"}${e.paused?"暂停":"中"} · ${Math.ceil(e.captureProgress/e.captureSeconds*100)}%`:e.owner?e.productionPaused?`${Oo(e.owner)}归属 · ${e.productionReason==="enemy-present"?"有敌人，产出暂停":"空置，产出保留"}`:`${Oo(e.owner)}归属 · ${(e.productionSeconds-e.productionProgress).toFixed(1)}s 后产出`:e.reason==="multiple-teams"?"多阵营对峙 · 无法占领":"无主 · 进圈自动占领"}function og(i,e){function t(a,l,c,u){let h=new ri(a,l,192),f=h.attributes.position;for(let d=0;d<f.count;d++){let g=f.getX(d),x=-f.getY(d);f.setXYZ(d,g,e(i.floor,i.pos.x+g,i.pos.z+x)-i.pos.y+.09,x)}return h.computeVertexNormals(),new Re(h,new ht({color:c,transparent:!0,opacity:u,side:St,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))}let n=i.occupationRadius,s=t(n-.18,n,el[i.grade],.82),r=t(n-.27,n+.055,"#233b3a",.8);r.position.y=-.016,s.add(r);let o=t(n-.42,n-.2,el[i.grade],.12);return o.position.y=-.008,s.add(o),s.position.copy(i.pos),s.userData.occupationRadius=n,s}var ci=Uint8Array,Bo=Uint16Array,Bb=Int32Array,ag=new ci([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),lg=new ci([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kb=new ci([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cg=function(i,e){for(var t=new Bo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Bb(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},ug=cg(ag,2),hg=ug.b,zb=ug.r;hg[28]=258,zb[258]=28;var fg=cg(lg,0),Hb=fg.b,oE=fg.r,Nf=new Bo(32768);for(_t=0;_t<32768;++_t)_s=(_t&43690)>>1|(_t&21845)<<1,_s=(_s&52428)>>2|(_s&13107)<<2,_s=(_s&61680)>>4|(_s&3855)<<4,Nf[_t]=((_s&65280)>>8|(_s&255)<<8)>>1;var _s,_t,tl=(function(i,e,t){for(var n=i.length,s=0,r=new Bo(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Bo(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Bo(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Nf[h]>>l]=c}else for(a=new Bo(n),s=0;s<n;++s)i[s]&&(a[s]=Nf[o[i[s]-1]++]>>15-i[s]);return a}),nl=new ci(288);for(_t=0;_t<144;++_t)nl[_t]=8;var _t;for(_t=144;_t<256;++_t)nl[_t]=9;var _t;for(_t=256;_t<280;++_t)nl[_t]=7;var _t;for(_t=280;_t<288;++_t)nl[_t]=8;var _t,dg=new ci(32);for(_t=0;_t<32;++_t)dg[_t]=5;var _t;var Vb=tl(nl,9,1);var Gb=tl(dg,5,1),Df=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Di=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ff=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Wb=function(i){return(i+7)/8|0},Xb=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ci(i.subarray(e,t))};var qb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fi=function(i,e,t){var n=new Error(e||qb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Fi),!t)throw n;return n},Yb=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new ci(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new ci(s*3));var c=function(he){var Ge=t.length;if(he>Ge){var Fe=new ci(Math.max(Ge*2,he));Fe.set(t),t=Fe}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,x=e.m,m=e.n,p=s*8;do{if(!d){u=Di(i,h,1);var M=Di(i,h+1,3);if(h+=3,M)if(M==1)d=Vb,g=Gb,x=9,m=5;else if(M==2){var T=Di(i,h,31)+257,A=Di(i,h+10,15)+4,y=T+Di(i,h+5,31)+1;h+=14;for(var C=new ci(y),U=new ci(19),S=0;S<A;++S)U[kb[S]]=Di(i,h+S*3,7);h+=A*3;for(var P=Df(U),L=(1<<P)-1,B=tl(U,P,1),S=0;S<y;){var D=B[Di(i,h,L)];h+=D&15;var _=D>>4;if(_<16)C[S++]=_;else{var z=0,X=0;for(_==16?(X=3+Di(i,h,3),h+=2,z=C[S-1]):_==17?(X=3+Di(i,h,7),h+=3):_==18&&(X=11+Di(i,h,127),h+=7);X--;)C[S++]=z}}var j=C.subarray(0,T),re=C.subarray(T);x=Df(j),m=Df(re),d=tl(j,x,1),g=tl(re,m,1)}else Fi(1);else{var _=Wb(h)+4,v=i[_-4]|i[_-3]<<8,E=_+v;if(E>s){l&&Fi(0);break}a&&c(f+v),t.set(i.subarray(_,E),f),e.b=f+=v,e.p=h=E*8,e.f=u;continue}if(h>p){l&&Fi(0);break}}a&&c(f+131072);for(var fe=(1<<x)-1,R=(1<<m)-1,k=h;;k=h){var z=d[Ff(i,h)&fe],te=z>>4;if(h+=z&15,h>p){l&&Fi(0);break}if(z||Fi(2),te<256)t[f++]=te;else if(te==256){k=h,d=null;break}else{var ce=te-254;if(te>264){var S=te-257,oe=ag[S];ce=Di(i,h,(1<<oe)-1)+hg[S],h+=oe}var H=g[Ff(i,h)&R],J=H>>4;H||Fi(3),h+=H&15;var re=Hb[J];if(J>3){var oe=lg[J];re+=Ff(i,h)&(1<<oe)-1,h+=oe}if(h>p){l&&Fi(0);break}a&&c(f+131072);var ee=f+ce;if(f<re){var me=r-re,ue=Math.min(re,ee);for(me+f<0&&Fi(3);f<ue;++f)t[f]=n[me+f]}for(;f<ee;++f)t[f]=t[f-re]}}e.l=d,e.p=k,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?Xb(t,0,f):t.subarray(0,f)};var Zb=new ci(0);var Kb=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Fi(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Fi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function pg(i,e){return Yb(i.subarray(Kb(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var $b=typeof TextDecoder<"u"&&new TextDecoder,Jb=0;try{$b.decode(Zb,{stream:!0}),Jb=1}catch{}function mg(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let s=i,r=n,o=Math.floor((s+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:s=o,o=Math.floor((s+r)/2);return o}function jb(i,e,t,n){let s=[],r=[],o=[];s[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){let u=o[c+1],h=r[a-c],f=s[c]/(u+h);s[c]=l+u*f,l=h*f}s[a]=l}return s}function gg(i,e,t,n){let s=mg(i,n,e),r=jb(s,n,i,e),o=new lt(0,0,0,0);for(let a=0;a<=i;++a){let l=t[s-i+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Qb(i,e,t,n,s){let r=[];for(let h=0;h<=t;++h)r[h]=0;let o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);let a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;let l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-s[i+1-h],c[h]=s[i+h]-e;let f=0;for(let d=0;d<h;++d){let g=c[d+1],x=l[h-d];a[h][d]=g+x;let m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=x*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1,g=[];for(let x=0;x<=t;++x)g[x]=r.slice(0);g[0][0]=1;for(let x=1;x<=n;++x){let m=0,p=h-x,M=t-x;h>=x&&(g[d][0]=g[f][0]/a[M+1][p],m=g[d][0]*a[p][M]);let _=p>=-1?1:-p,v=h-1<=M?x-1:t-h;for(let T=_;T<=v;++T)g[d][T]=(g[f][T]-g[f][T-1])/a[M+1][p+T],m+=g[d][T]*a[p+T][M];h<=M&&(g[d][x]=-g[f][x-1]/a[M+1][h],m+=g[d][x]*a[h][M]),o[x][h]=m;let E=f;f=d,d=E}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function eS(i,e,t,n,s){let r=s<i?s:i,o=[],a=mg(i,n,e),l=Qb(a,n,i,r,e),c=[];for(let u=0;u<t.length;++u){let h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){let h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=r+1;u<=s+1;++u)o[u]=new lt(0,0,0);return o}function tS(i,e){let t=1;for(let s=2;s<=i;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=i-e;++s)n*=s;return t/n}function nS(i){let e=i.length,t=[],n=[];for(let r=0;r<e;++r){let o=i[r];t[r]=new O(o.x,o.y,o.z),n[r]=o.w}let s=[];for(let r=0;r<e;++r){let o=t[r].clone();for(let a=1;a<=r;++a)o.sub(s[r-a].clone().multiplyScalar(tS(r,a)*n[a]));s[r]=o.divideScalar(n[0])}return s}function xg(i,e,t,n,s){let r=eS(i,e,t,n,s);return nS(r)}var bu=class extends va{constructor(e,t,n,s,r){super();let o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||o;for(let l=0;l<a;++l){let c=n[l];this.controlPoints[l]=new lt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new O){let n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=gg(this.degree,this.knots,this.controlPoints,s);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new O){let n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=xg(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new lt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}};var et,Jt,vn,wu=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=r.path===""?Ai.extractUrlBase(e):r.path,a=new Ws(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){if(sS(e))et=new Vf().parse(e);else{let s=_g(e);if(!rS(s))throw new Error("THREE.FBXLoader: Unknown format.");if(vg(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+vg(s));et=new Hf().parse(s)}let n=new Ei(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Bf(n,this.manager).parse(et)}},Bf=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Jt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),r=new kf().parse(s);return this.parseScene(s,r,n),vn}parseConnections(){let e=new Map;return"Connections"in et&&et.Connections.connections.forEach(function(n){let s=n[0],r=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});let a={ID:r,relationship:o};e.get(s).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let l={ID:s,relationship:o};e.get(r).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in et.Objects){let n=et.Objects.Video;for(let s in n){let r=n[s],o=parseInt(s);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){let a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){let c=this.parseImage(n[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(let n in e){let s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in et.Objects){let n=et.Objects.Texture;for(let s in n){let r=this.parseTexture(n[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let s=e.WrapModeU,r=e.WrapModeV,o=s!==void 0?s.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Un:Fn,n.wrapT=a===0?Un:Fn,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n=e.FileName.split(".").pop().toLowerCase(),s=this.manager.getHandler(`.${n}`);s===null&&(s=this.textureLoader);let r=s.path;r||s.setPath(this.textureLoader.path);let o=Jt.get(e.id).children,a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&s.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new $t;let l=s.load(a);return s.setPath(r),l}parseMaterials(e){let t=new Map;if("Material"in et.Objects){let n=et.Objects.Material;for(let s in n){let r=this.parseMaterial(n[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){let n=e.id,s=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Jt.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(r.toLowerCase()){case"phong":a=new Gs;break;case"lambert":a=new Mr;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new Gs;break}return a.setValues(o),a.name=s,a}parseParameters(e,t,n){let s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=Ze.colorSpaceToWorking(new ve().fromArray(e.Diffuse.value),tt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=Ze.colorSpaceToWorking(new ve().fromArray(e.DiffuseColor.value),tt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=Ze.colorSpaceToWorking(new ve().fromArray(e.Emissive.value),tt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=Ze.colorSpaceToWorking(new ve().fromArray(e.EmissiveColor.value),tt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=Ze.colorSpaceToWorking(new ve().fromArray(e.Specular.value),tt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=Ze.colorSpaceToWorking(new ve().fromArray(e.SpecularColor.value),tt));let r=this;return Jt.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":s.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,o.ID),s.map!==void 0&&(s.map.colorSpace=tt);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,o.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=tt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=Eo,s.envMap.colorSpace=tt);break;case"SpecularColor":s.specularMap=r.getTexture(t,o.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=tt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,o.ID),s.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),s}getTexture(e,t){return"LayeredTexture"in et.Objects&&t in et.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Jt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in et.Objects){let n=et.Objects.Deformer;for(let s in n){let r=n[s],o=Jt.get(parseInt(s));if(r.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[s]=a}else if(r.attrType==="BlendShape"){let a={id:s};a.rawTargets=this.parseMorphTargets(o,n),a.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(s){let r=t[s.ID];if(r.attrType!=="Cluster")return;let o={ID:s.ID,indices:[],weights:[],transformLink:new Ae().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let s=0;s<e.children.length;s++){let r=e.children[s],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Jt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){vn=new ct;let s=this.parseModels(e.skeletons,t,n),r=et.Objects.Model,o=this;s.forEach(function(h){let f=r[h.ID];o.setLookAtProperties(h,f),Jt.get(h.ID).parents.forEach(function(g){let x=s.get(g.ID);x!==void 0&&x.add(h)}),h.parent===null&&vn.add(h)}),this.addGlobalSceneSettings(),vn.traverse(function(h){if(h.userData.transformData){h.parent&&(h.userData.transformData.parentMatrix=h.parent.matrix,h.userData.transformData.parentMatrixWorld=h.parent.matrixWorld);let f=yg(h.userData.transformData);h.applyMatrix4(f),h.updateWorldMatrix()}});let a=this.parsePoseNodes(),l=new Set;for(let h in e.skeletons)e.skeletons[h].rawBones.forEach(function(f,d){let g=e.skeletons[h].bones[d];g&&l.add(g.ID)});let c=new Ae;vn.traverse(function(h){if(h.isBone&&h.ID!==void 0&&!l.has(h.ID)){let f=a[h.ID];f!==void 0&&(h.parent?(c.copy(h.parent.matrixWorld).invert(),c.multiply(f)):c.copy(f),c.decompose(h.position,h.quaternion,h.scale),h.updateMatrix(),h.matrixWorld.copy(f))}}),this.bindSkeleton(e.skeletons,t,s);let u=new zf().parse();vn.children.length===1&&vn.children[0].isGroup&&(vn.children[0].animations=u,vn=vn.children[0]),vn.animations=u,"GlobalSettings"in et&&"UpAxis"in et.GlobalSettings&&et.GlobalSettings.UpAxis.value===2&&(console.warn("THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted."),vn.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,n){let s=new Map,r=et.Objects.Model;for(let o in r){let a=parseInt(o),l=r[o],c=Jt.get(a),u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new ps;break;default:u=new ct;break}u.name=l.attrName?mt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),s.set(a,u)}return s}buildSkeleton(e,t,n,s){let r=null;return e.parents.forEach(function(o){for(let a in t){let l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){let h=r;r=new ps,r.matrixWorld.copy(c.transformLink),r.name=s?mt.sanitizeNodeName(s):"",r.userData.originalName=s,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(s){let r=et.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new gt;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);let c=a/l,u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);let h=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new Gt(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new gt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new gt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){let r=et.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new gt;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ze.colorSpaceToWorking(new ve().fromArray(n.Color.value),tt));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let l=1;switch(s){case 0:t=new oi(r,o,a,l);break;case 1:t=new es(r,o);break;case 2:let c=Math.PI/3,u=0;n.OuterAngle!==void 0?(c=Ot.degToRad(n.OuterAngle.value),n.InnerAngle!==void 0&&(u=1-n.InnerAngle.value/n.OuterAngle.value,u=Math.max(0,u))):n.InnerAngle!==void 0&&(c=Ot.degToRad(n.InnerAngle.value)),t=new br(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new oi(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,r=null,o=null,a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Gs({name:Wn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,u=r.groups.length;c<u;c++){let h=r.groups[c];(h.materialIndex<0||h.materialIndex>=a.length)&&(h.materialIndex=a.length,l=!0)}if(l){let c=new Gs;a.push(c)}}return r.FBX_Deformer?(s=new mr(r,o),s.normalizeSkinWeights()):s=new Re(r,o),s}createCurve(e,t){let n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),s=new Ki({name:Wn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Si(n,s)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=il(t.RotationOrder.value):n.eulerOrder=il(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Jt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){let r=et.Objects.Model[s.ID];if("Lcl_Translation"in r){let o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),vn.add(e.target)):e.lookAt(new O().fromArray(o))}}})}bindSkeleton(e,t,n){for(let s in e){let r=e[s],o=[];for(let l=0,c=r.bones.length;l<c;l++){let u=new Ae;r.bones[l]&&r.rawBones[l]&&u.copy(r.rawBones[l].transformLink).invert(),o.push(u)}Jt.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;Jt.get(c).parents.forEach(function(h){if(n.has(h.ID)){let f=n.get(h.ID);f.updateMatrixWorld(!0),f.bind(new gr(r.bones,o),f.matrixWorld)}})}})}}parsePoseNodes(){let e={};if("Pose"in et.Objects){let t=et.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new Ae().fromArray(r.Matrix.a)}):e[s.Node]=new Ae().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in et){if("AmbientColor"in et.GlobalSettings){let e=et.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){let r=new ve().setRGB(t,n,s,tt);vn.add(new Ia(r,1))}}"UnitScaleFactor"in et.GlobalSettings&&(vn.userData.unitScaleFactor=et.GlobalSettings.UnitScaleFactor.value)}}},kf=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in et.Objects){let n=et.Objects.Geometry;for(let s in n){let r=Jt.get(parseInt(s)),o=this.parseGeometry(r,n[s],e);t.set(parseInt(s),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let s=n.skeletons,r=[],o=e.parents.map(function(h){return et.Objects.Model[h.ID]});if(o.length===0)return;let a=e.children.reduce(function(h,f){return s[f.ID]!==void 0&&(h=s[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});let l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=il(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let u=yg(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,s){let r=new nt;e.attrName&&(r.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new De(a.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new De(a.colors,3)),t&&(r.setAttribute("skinIndex",new pr(a.weightsIndices,4)),r.setAttribute("skinWeight",new De(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){let c=new qe().getNormalMatrix(s),u=new De(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h=u===0?"uv":`uv${u}`;r.setAttribute(h,new De(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){let h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,s),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:s.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,s=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[],f=this;return e.vertexIndices.forEach(function(d,g){let x,m=!1;d<0&&(d=d^-1,m=!0);let p=[],M=[];if(o.push(d*3,d*3+1,d*3+2),e.color){let _=Su(g,n,d,e.color);l.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(_){M.push(_.weight),p.push(_.id)}),M.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let _=[0,0,0,0],v=[0,0,0,0];M.forEach(function(E,T){let A=E,y=p[T];v.forEach(function(C,U,S){if(A>C){S[U]=A,A=C;let P=_[U];_[U]=y,y=P}})}),p=_,M=v}for(;M.length<4;)M.push(0),p.push(0);for(let _=0;_<4;++_)u.push(M[_]),h.push(p[_])}if(e.normal){let _=Su(g,n,d,e.normal);a.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=Su(g,n,d,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(_,v){let E=Su(g,n,d,_);c[v]===void 0&&(c[v]=[]),c[v].push(E[0]),c[v].push(E[1])}),s++,m&&(f.genFace(t,e,o,x,a,l,c,u,h,s),n++,s=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){let t=new O(0,0,0);for(let n=0;n<e.length;n++){let s=e[n],r=e[(n+1)%e.length];t.x+=(s.y-r.y)*(s.z+r.z),t.y+=(s.z-r.z)*(s.x+r.x),t.z+=(s.x-r.x)*(s.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new O(0,1,0):new O(0,0,1)).cross(t).normalize(),r=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:r}}flattenVertex(e,t,n){return new He(e.dot(t),e.dot(n))}genFace(e,t,n,s,r,o,a,l,c,u){let h;if(u>3){let f=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)f.push(new O(d[n[p]],d[n[p+1]],d[n[p+2]]));let{tangent:g,bitangent:x}=this.getNormalTangentAndBitangent(f),m=[];for(let p of f)m.push(this.flattenVertex(p,g,x));h=ba.triangulateShape(m,[])}else h=[[0,1,2]];for(let[f,d,g]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(x,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=s.clone().setPosition(0,0,0),o=this;n.forEach(function(a){a.rawTargets.forEach(function(l){let c=et.Objects.Geometry[l.geoID];c!==void 0&&o.genMorphGeometry(e,t,c,r,l.name)})})}genMorphGeometry(e,t,n,s,r){let o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let x=0;x<c.length;x++){let m=c[x]*3;h[m]=l[x*3],h[m+1]=l[x*3+1],h[m+2]=l[x*3+2]}let f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},d=this.genBuffers(f),g=new De(d.vertex,3);g.name=r||n.attrName,g.applyMatrix4(s),e.morphAttributes.position.push(g)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new ve;o<s.length;o+=4)a.fromArray(s,o),Ze.colorSpaceToWorking(a,tt),a.toArray(s,o);return{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let s=e.Materials.a,r=[];for(let o=0;o<s.length;++o)r.push(o);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new nt;let n=t-1,s=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new lt().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=s.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}let u=new bu(n,s,r,a,l).getPoints(r.length*12);return new nt().setFromPoints(u)}},zf=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let s=t[n],r=this.addClip(s);e.push(r)}return e}parseClips(){if(et.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=et.Objects.AnimationCurveNode,t=new Map;for(let n in e){let s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=et.Objects.AnimationCurve;for(let n in t){let s={id:t[n].id,times:t[n].KeyTime.a.map(oS),values:t[n].KeyValueFloat.a},r=Jt.get(s.id);if(r!==void 0){let o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=s:a.match(/Y/)?e.get(o).curves.y=s:a.match(/Z/)?e.get(o).curves.z=s:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){let t=et.Objects.AnimationLayer,n=new Map;for(let s in t){let r=[],o=Jt.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){let u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){let h=Jt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0});if(h.length===0)return;let f=h[0].ID;if(f!==void 0){let d=et.Objects.Model[f.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let g={modelName:d.attrName?mt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};vn.traverse(function(x){x.ID===d.id&&(g.transform=x.matrix,x.userData.transformData&&(g.eulerOrder=x.userData.transformData.eulerOrder,x.userData.transformData.rotation&&(g.initialRotation=x.userData.transformData.rotation)))}),g.transform||(g.transform=new Ae),"PreRotation"in d&&(g.preRotation=d.PreRotation.value),"PostRotation"in d&&(g.postRotation=d.PostRotation.value),r[c]=g}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){let h=Jt.get(l.ID).parents.filter(function(M){return M.relationship!==void 0});if(h.length===0)return;let f=h[0].ID,d=Jt.get(f).parents[0].ID,g=Jt.get(d).parents[0].ID,x=Jt.get(g).parents[0].ID,m=et.Objects.Model[x],p={modelName:m.attrName?mt.sanitizeNodeName(m.attrName):"",morphName:et.Objects.Deformer[f].attrName};r[c]=p}r[c][u.attr]=u}}}),n.set(parseInt(s),r))}return n}parseAnimStacks(e){let t=et.Objects.AnimationStack,n={};for(let s in t){let r=Jt.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(r[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new vs(e.name,-1,t)}generateTracks(e){let t=[],n=new O,s=new O;if(e.transform&&e.transform.decompose(n,new At,s),n=n.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,s){let r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new ji(e+"."+s,r,o)}generateRotationTrack(e,t,n,s,r,o){let a,l;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){let d=this.getTimesForAllAxes(t);if(d.length>0){let g=o||[0,0,0],x=this.synchronizeCurve(t.x,d,g[0]),m=this.synchronizeCurve(t.y,d,g[1]),p=this.synchronizeCurve(t.z,d,g[2]),M=this.interpolateRotations(x,m,p,r);a=M[0],l=M[1]}}let c=il(0);n!==void 0&&(n=n.map(Ot.degToRad),n.push(c),n=new zt().fromArray(n),n=new At().setFromEuler(n)),s!==void 0&&(s=s.map(Ot.degToRad),s.push(c),s=new zt().fromArray(s),s=new At().setFromEuler(s).invert());let u=new At,h=new zt,f=[];if(!(!l||!a)){for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],r),u.setFromEuler(h),n!==void 0&&u.premultiply(n),s!==void 0&&u.multiply(s),d>2&&new At().fromArray(f,(d-3)/3*4).dot(u)<0&&u.set(-u.x,-u.y,-u.z,-u.w),u.toArray(f,d/3*4);return new Ti(e+".quaternion",a,f)}}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),s=vn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new wi(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let r=1;r<t.length;r++){let o=t[r];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let s=n,r=[],o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){let u=t.x.values[o];r.push(u),s[0]=u}else r.push(s[0]);if(a!==-1){let u=t.y.values[a];r.push(u),s[1]=u}else r.push(s[1]);if(l!==-1){let u=t.z.values[l];r.push(u),s[2]=u}else r.push(s[2])}),r}synchronizeCurve(e,t,n){if(e===void 0)return{times:t,values:t.map(()=>n)};if(e.times.length===t.length)return e;let s=[];for(let r=0;r<t.length;r++)s.push(this.sampleCurveValue(e,t[r],n));return{times:t,values:s}}sampleCurveValue(e,t,n){let s=e.times,r=e.values;if(t<=s[0])return r[0];if(t>=s[s.length-1])return r[r.length-1];for(let o=0;o<s.length-1;o++)if(t>=s[o]&&t<=s[o+1]){if(s[o]===t)return r[o];let a=(t-s[o])/(s[o+1]-s[o]);return r[o]*(1-a)+r[o+1]*a}return n}interpolateRotations(e,t,n,s){let r=[],o=[];r.push(e.times[0]),o.push(Ot.degToRad(e.values[0])),o.push(Ot.degToRad(t.values[0])),o.push(Ot.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(Ot.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;let h=u.map(Ot.degToRad),f=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let x=Math.max(...d)/180,m=new zt(...c,s),p=new zt(...h,s),M=new At().setFromEuler(m),_=new At().setFromEuler(p);M.dot(_)<0&&_.set(-_.x,-_.y,-_.z,-_.w);let v=e.times[a-1],E=e.times[a]-v,T=new At,A=new zt;for(let y=0;y<1;y+=1/x)T.copy(M.clone().slerp(_.clone(),y)),r.push(v+y*E),A.setFromQuaternion(T,s),o.push(A.x),o.push(A.y),o.push(A.z)}else r.push(e.times[a]),o.push(Ot.degToRad(e.values[a])),o.push(Ot.degToRad(t.values[a])),o.push(Ot.degToRad(n.values[a]))}return[r,o]}},Hf=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Eu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,r){let o=s.match(/^[\s\t]*;/),a=s.match(/^[\s\t]*$/);if(o||a)return;let l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++r]):u?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(s),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){let l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]),h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),s="connections",r=[c,u],lS(r,h),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=r),s in o&&Array.isArray(o[s])?o[s].push(r):s!=="a"?o[s]=r:o.a=r,this.setCurrentProp(o,s),s==="a"&&r.slice(-1)!==","&&(o.a=Of(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Of(t.a))}parseNodeSpecialProperty(e,t,n){let s=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],o=s[1],a=s[2],l=s[3],c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Of(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}},Vf=class{parse(e){let t=new Tu(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let s=new Eu;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(s===0)return null;let l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){let f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){let s=[];n.propertyList.forEach(function(r,o){o!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],r=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let s=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}let a=pg(new Uint8Array(e.getArrayBuffer(o))),l=new Tu(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},Tu=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}},Eu=class{add(e,t){this[e]=t}};function sS(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===_g(i,0,e.length)}function rS(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(s){let r=i[s-1];return i=i.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function vg(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function oS(i){return i/46186158e3}var aS=[];function Su(i,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=i;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);let r=s*n.dataSize,o=r+n.dataSize;return cS(aS,n.buffer,r,o)}var Uf=new zt,ko=new O;function yg(i){let e=new Ae,t=new Ae,n=new Ae,s=new Ae,r=new Ae,o=new Ae,a=new Ae,l=new Ae,c=new Ae,u=new Ae,h=new Ae,f=new Ae,d=i.inheritType?i.inheritType:0;i.translation&&e.setPosition(ko.fromArray(i.translation));let g=il(0);if(i.preRotation){let S=i.preRotation.map(Ot.degToRad);S.push(g),t.makeRotationFromEuler(Uf.fromArray(S))}if(i.rotation){let S=i.rotation.map(Ot.degToRad);S.push(i.eulerOrder||g),n.makeRotationFromEuler(Uf.fromArray(S))}if(i.postRotation){let S=i.postRotation.map(Ot.degToRad);S.push(g),s.makeRotationFromEuler(Uf.fromArray(S)),s.invert()}i.scale&&r.scale(ko.fromArray(i.scale)),i.scalingOffset&&a.setPosition(ko.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(ko.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(ko.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(ko.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));let x=t.clone().multiply(n).multiply(s),m=new Ae;m.extractRotation(u);let p=new Ae;p.copyPosition(u);let M=p.clone().invert().multiply(u),_=m.clone().invert().multiply(M),v=r,E=new Ae;if(d===0)E.copy(m).multiply(x).multiply(_).multiply(v);else if(d===1)E.copy(m).multiply(_).multiply(x).multiply(v);else{let P=new Ae().scale(new O().setFromMatrixScale(h)).clone().invert(),L=_.clone().multiply(P);E.copy(m).multiply(x).multiply(L).multiply(v)}let T=c.clone().invert(),A=o.clone().invert(),y=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(T).multiply(a).multiply(o).multiply(r).multiply(A),C=new Ae().copyPosition(y),U=u.clone().multiply(C);return f.copyPosition(U),y=f.clone().multiply(E),y.premultiply(u.invert()),y}function il(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function Of(i){return i.split(",").map(function(t){return parseFloat(t)})}function _g(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function lS(i,e){for(let t=0,n=i.length,s=e.length;t<s;t++,n++)i[n]=e[t]}function cS(i,e,t,n){for(let s=t,r=0;s<n;s++,r++)i[r]=e[s];return i}function Au(i){let e=new Map,t=new Map,n=i.clone();return Mg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Mg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Mg(i.children[n],e.children[n],t)}var uS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==";async function bg(i=()=>{}){let e=await(await fetch("assets/project/manifest.json")).json(),t=new wo;t.setURLModifier(a=>/\.(tga|jpg|jpeg|bmp|dds)$/i.test(a)?uS:a);let n=new wu(t),s=new Ei,r=0,o={};for(let a of["boss","hero","small"]){let l=e[a],c=await n.loadAsync(l.model),u={},h=a==="boss"?["GW20105_t_01","GW20105_t_01_n"]:a==="small"?["GW20103_t_01"]:["NPTDM0023_t_01","NPTOM0023_t_01","NPYFM0023_t_01"];for(let p of h){if(!l.textures[p])continue;let M=await s.loadAsync(l.textures[p]);M.colorSpace=p.endsWith("_n")?Li:tt,M.wrapS=M.wrapT=Un,M.anisotropy=8,u[p]=M}let f=[];c.traverse(p=>{if(p.isMesh){f.push({name:p.name,skinned:!!p.isSkinnedMesh,material:Array.isArray(p.material)?p.material.map(_=>_.name):p.material?.name,bones:p.skeleton?.bones.map(_=>_.name)});let M=Array.isArray(p.material)?p.material:[p.material];p.material=M.map(_=>{let v;if(a==="boss")v=u.GW20105_t_01;else if(a==="small")v=u.GW20103_t_01;else{let E=(_?.name||"")+" "+p.name;v=u[E.includes("NPTDM")?"NPTDM0023_t_01":E.includes("NPTOM")?"NPTOM0023_t_01":"NPYFM0023_t_01"]}return new bt({name:_?.name||a,map:v,normalMap:a==="boss"?u.GW20105_t_01_n:null,normalScale:new He(.55,.55),roughness:a==="boss"?.88:.79,metalness:.03,side:St,alphaTest:a==="hero"?.42:0})}),p.material.length===1&&(p.material=p.material[0]),p.castShadow=!0,p.receiveShadow=!0}}),c.updateMatrixWorld(!0);let d=new Bn().setFromObject(c).getSize(new O),g=(a==="boss"?5.2:a==="hero"?2:.85)/d.y;c.scale.multiplyScalar(g),c.updateMatrixWorld(!0);let x={},m=new Set;c.traverse(p=>m.add(p.name));for(let[p,M]of Object.entries(l.clips)){let _=await n.loadAsync(M);if(!_.animations.length)throw new Error(a+" missing animation "+p);let v=_.animations[0].clone();if(v.name=p,v.tracks=v.tracks.filter(E=>m.has(E.name.slice(0,E.name.lastIndexOf(".")))),!v.tracks.length)throw new Error(a+" no shared skeleton tracks "+p);x[p]=v,i(a,p,++r)}o[a]={root:c,clips:x,meshes:f,sourceBounds:d.toArray(),normalizationScale:g,source:l}}return o}function Ir(i){let e=Au(i.root),t=new ct;e.rotation.y=Math.PI,t.add(e),t.scale.x=-1;let n=new Da(e),s={};for(let[r,o]of Object.entries(i.clips))s[r]=n.clipAction(o);return{root:t,model:e,mixer:n,actions:s,active:null,asset:i}}function Ni(i,e,t,{loop:n=!0,speed:s=1,fade:r=.14}={}){let o=i.actions[e]||i.actions.idle_battle;if(o){if(i.active!==e){let a=i.actions[i.active];o.reset().setLoop(n?uu:cu,n?1/0:1),o.clampWhenFinished=!n,o.enabled=!0,o.setEffectiveTimeScale(s),o.setEffectiveWeight(1),o.fadeIn(r).play(),a&&a!==o&&a.fadeOut(r),i.active=e}else o.setEffectiveTimeScale(s);i.mixer.update(t)}}var hS={hp:54,speed:5.7,emergeSeconds:1.6,spawnStagger:.12,mergeSeconds:.65,arrivalRadius:1.25},Ru=i=>i.state==="dead"||i.state==="arrived",Pr=.55,Sg=1.5,wg=i=>Math.max(0,Math.min(1,i)),fS=["三层集合！","去找老大啦！","兄弟们，快跑！","老大，接住我！"],dS=["矿没了，我先溜啦！","三层集合！","去找老大啦！","兄弟们，快跑！","老大，接住我！"],Tg=["快跑！","去找老大啦！","三层集合！","别追我，追不上！","老大，接住我！","兄弟们，往三层跑！"];function Eg(i){let{ctx:e,world:t,safeLanding:n,pathTo:s,followPath:r,portalUse:o,updateFlight:a,visibleActor:l,flatdist:c,ring:u,contactShadow:h,setEntity:f,addLabel:d,flash:g,ringFx:x,floating:m,onArrive:p}=i,M={...hS,...i.config},_=[],v=1,E=null;function T(){if(!E){let{boss:R}=e();if(!R||R.floor!==2)throw new Error("Small stones require the initial third-floor core");E=R.pos.clone()}return E}function A(R){R.bubbleUntil=0,R.isPopping=!1,R.root.removeFromParent(),R.visual.mixer.stopAllAction();for(let k of[R.circle,R.contact])k.removeFromParent(),k.geometry?.dispose(),k.material?.dispose();if(R.labelView?.el.remove(),e().player?.target===R){let k=e().player;k.target=k.harvest?.target||null,k.path=[]}}function y(R,k){if(R===2)return 0;let te=[{floor:R,hops:0}],ce=new Set([R]);for(let oe=0;oe<te.length;oe++){let H=te[oe];for(let J of k)if(!(J.floor!==H.floor||J.canDepart===!1)){if(J.to===2)return H.hops+1;ce.has(J.to)||(ce.add(J.to),te.push({floor:J.to,hops:H.hops+1}))}}return 1/0}function C(R,k){let te=R,ce=0;for(let oe of k)ce+=c(te,oe),te=oe;return ce}function U(R){if(R.path=[],R.routePortal=null,R.routeRetry=1.2,R.floor===2){R.path=s(R,T());return}let{portals:k}=e(),te=y(R.floor,k),ce=[];for(let oe of k){if(oe.floor!==R.floor||oe.canDepart===!1||y(oe.to,k)>=te)continue;let H=s(R,oe.pos),J=c(R.pos,oe.pos);!H.length&&J>=1.5||ce.push({portal:oe,path:H,cost:H.length?C(R.pos,H):J})}ce.sort((oe,H)=>oe.cost-H.cost),ce.length&&(R.routePortal=ce[0].portal,R.path=ce[0].path)}function S(R,k){let te=t(R.floor,0,0),ce=Math.PI*2*(k*.38196601125),oe={kind:"stone"},H=null;for(let J=0;J<24;J++){let ee=ce+J*Math.PI/12,me=2+k%3*.28;try{let ue=n(oe,R.floor,R.pos.x-te.x+Math.cos(ee)*me,R.pos.z-te.z+Math.sin(ee)*me);if(H??(H=ue),_.every(he=>Ru(he)||he.floor!==R.floor||c(he.state==="emerging"?he.spawnLanding:he.pos,ue)>.55))return ue}catch{}}if(H)return H;throw new Error("No supported small-stone spawn near "+R.id)}function P(R){R.revealed=!0;let{environment:k,time:te}=e(),ce=R.mineDepleted?dS:fS;R.bubbleText=ce[(R.serial-1)%ce.length],R.bubbleUntil=te+1.8,R.nextBubbleAt=te+3+R.serial*.61803398875%1*2,k?.dust?.(R.spawnOrigin,R.floor,8,.8),l(R)&&(x?.(R.pos,.7,"#ceb587",.45),i.tone?.("rock"),g?.(R.spawnOrigin,"#ceb587",6))}function L(R,k,te){T();let ce=[],{projectActors:oe,groupDynamic:H,time:J}=e();for(let ee=0;ee<Math.max(0,Math.floor(k));ee++){let me=S(R,ee),ue=R.pos.clone(),he=ue.clone(),Ge=v++,Fe=Ir(oe.small),Xe=Fe.root;Xe.position.copy(he),Xe.visible=!1,H.add(Xe);let Ie={id:"small-stone-"+Ge,serial:Ge,kind:"stone",state:"emerging",floor:R.floor,pos:he,root:Xe,visual:Fe,visualLast:he.clone(),baseScale:Xe.scale.clone(),hp:M.hp,maxHp:M.hp,radius:.32,speed:M.speed,face:Math.atan2(me.x-he.x,me.z-he.z)+Math.PI,walk:0,path:[],target:null,harvest:null,transit:null,portalCD:0,landingT:0,dead:!1,arrived:!1,hurtAt:-99,attackCD:0,invul:0,shield:0,spawnDelay:ee*M.spawnStagger,emergeElapsed:0,mergeElapsed:0,revealed:!1,spawnOrigin:ue,spawnLanding:me,popHeight:0,popProgress:0,emergeProgress:0,isPopping:!1,bubbleText:"",bubbleUntil:0,nextBubbleAt:1/0,bubbleRound:0,mineDepleted:R.remaining<=0,mineId:R.id,grade:R.grade,ownerId:te?.id??null,spawnedAt:J,routeRetry:0,routePortal:null,travelledPortals:[],stuckSeconds:0};Object.defineProperty(Ie,"targetable",{enumerable:!0,get:()=>!Ie.dead&&Ie.spawnDelay<=0}),Ie.circle=u(.46,"#d4b77c",.55),Ie.circle.visible=!1,H.add(Ie.circle),Ie.contact=h(.5),Ie.contact.visible=!1,H.add(Ie.contact),f(Xe,Ie),d(Ie,"小石头人"),Ni(Fe,"born1",0,{loop:!1,fade:0}),_.push(Ie),ce.push(Ie)}return X(),ce}function B(R){R.state="merging",R.path=[],R.routePortal=null,R.mergeElapsed=0,R.mergeStart=R.pos.clone(),l(R)&&x?.(E,1.2,"#d7c49a",M.mergeSeconds)}function D(R,k){if(Ru(R))return;if(R.spawnDelay>0){let oe=R.spawnDelay;if(R.spawnDelay=Math.max(0,oe-k),k=Math.max(0,k-oe),R.spawnDelay>0)return}R.revealed||P(R);let te=e().time;if(te>=R.nextBubbleAt&&!R.transit&&R.state!=="merging"&&(R.bubbleRound++,R.bubbleText=Tg[(R.serial+R.bubbleRound)%Tg.length],R.bubbleUntil=te+1.65,R.nextBubbleAt=te+3+(R.serial+R.bubbleRound)*.61803398875%1*2),R.portalCD=Math.max(0,R.portalCD-k),R.transit){let oe=R.transit.portalId;a(R,k),R.transit||(R.travelledPortals.push(oe),R.routePortal=null,R.routeRetry=0),Ni(R.visual,"idle_battle",k,{fade:.08});return}if(R.landingT=Math.max(0,R.landingT-k),R.state==="emerging"){let oe=Math.max(1.5,M.emergeSeconds);R.emergeElapsed=Math.min(oe,R.emergeElapsed+k),R.emergeProgress=wg(R.emergeElapsed/oe),R.popProgress=wg(R.emergeElapsed/Pr);let H=R.popProgress,J=H*H*(3-2*H),ee=R.isPopping;R.popHeight=H<1?Math.sin(Math.PI*H)*Sg:0,R.isPopping=H<1,R.pos.lerpVectors(R.spawnOrigin,R.spawnLanding,J).y+=R.popHeight,R.root.position.copy(R.pos),ee&&!R.isPopping&&(e().environment?.dust?.(R.spawnLanding,R.floor,5,.6),l(R)&&x?.(R.spawnLanding,.55,"#d5bf96",.24)),Ni(R.visual,"born1",k,{loop:!1,speed:R.visual.asset.clips.born1.duration/oe,fade:.08}),R.emergeElapsed>=oe&&(R.pos.copy(R.spawnLanding),R.visualLast.copy(R.pos),R.state="running",U(R));return}if(R.state==="merging"){R.mergeElapsed=Math.min(M.mergeSeconds,R.mergeElapsed+k);let oe=R.mergeElapsed/M.mergeSeconds;R.pos.copy(R.mergeStart).lerp(E,oe),Ni(R.visual,"skill1",k,{loop:!1,speed:R.visual.asset.clips.skill1.duration/M.mergeSeconds,fade:.08}),oe>=1&&(R.state="arrived",R.arrived=!0,R.dead=!0,R.arrivedAt=e().time,R.path=[],l(R)&&g?.(E,"#cfdfac",5),A(R),p?.(R.id));return}if(R.floor===2&&c(R.pos,E)<=M.arrivalRadius){B(R);return}if(R.routeRetry-=k,(!R.path.length&&!R.routePortal||R.stuckSeconds>1.5)&&R.routeRetry<=0&&(U(R),R.stuckSeconds=0),R.routePortal&&c(R.pos,R.routePortal.pos)<1.5)R.portalCD<=0&&o(R,R.routePortal)&&(R.routePortal=null,R.stuckSeconds=0);else{let oe=R.pos.clone();r(R,k,M.speed),c(oe,R.pos)<1e-4?R.stuckSeconds+=k:R.stuckSeconds=0}let ce=c(R.pos,R.visualLast)>1e-4;R.visualLast.copy(R.pos),Ni(R.visual,ce?"run_front":"idle_battle",k,{speed:ce?1.05*M.speed/2.2:1,fade:.1})}function z(R){for(let k of _)D(k,R)}function X(){for(let R of _){if(Ru(R))continue;let k=R.revealed&&l(R);R.root.visible=k,R.root.position.copy(R.pos),R.root.rotation.set(0,R.face,0);let te=R.state==="merging"?Math.max(.04,1-R.mergeElapsed/M.mergeSeconds):1;R.root.scale.copy(R.baseScale).multiplyScalar(te);let ce=0;if(R.state==="emerging"){let H=R.emergeElapsed;H<.1?ce=.32*(1-H/.1):H<Pr?ce=-.15*Math.sin(Math.PI*(H-.1)/(Pr-.1)):H<Pr+.16?ce=.25*Math.sin(Math.PI*(H-Pr)/.16):H<Pr+.36&&(ce=-.1*Math.sin(Math.PI*(H-Pr-.16)/.2))}let oe=e().time-R.hurtAt;oe>=0&&oe<.12&&(ce+=.18*Math.sin(Math.PI*oe/.12)),R.root.scale.x*=1+ce*.5,R.root.scale.z*=1+ce*.5,R.root.scale.y*=1-ce,R.circle.position.copy(R.pos).y+=.04,R.contact.position.copy(R.pos).y+=.03,R.isPopping&&(R.circle.position.y-=R.popHeight,R.contact.position.y-=R.popHeight),R.circle.visible=k&&!R.transit&&R.state!=="merging",R.contact.visible=k&&!R.transit,R.circle.material.opacity=e().player?.target===R?.9:.45,R.contact.scale.setScalar(te*(R.isPopping?1-R.popHeight/Sg*.3:1)),!R.revealed&&R.labelView&&(R.labelView.el.style.display="none")}}function j(R,k,te){return!_.includes(R)||!R.targetable||R.transit||!Number.isFinite(k)||k<=0?!1:(R.hp=Math.max(0,R.hp-k),R.hurtAt=e().time,R.bubbleText="别敲啦，快跑！",R.bubbleUntil=e().time+1.2,R.nextBubbleAt=Math.max(R.nextBubbleAt,R.bubbleUntil+1.5),m?.(R.pos,Math.round(k),"#efd594"),g?.(R.pos,"#d2bf96",5),R.hp===0&&(R.state="dead",R.dead=!0,R.deadAt=e().time,R.killedBy=te?.id??null,R.path=[],R.routePortal=null,e().environment?.dust?.(R.pos,R.floor,9,.85),x?.(R.pos,.85,"#c4b089",.35),A(R)),!0)}function re(){for(let R of _)Ru(R)||A(R);_.length=0,v=1,E=null}function fe(){return _.map(R=>({id:R.id,state:R.state,floor:R.floor,pos:R.pos.toArray().map(k=>+k.toFixed(3)),hp:R.hp,mineId:R.mineId,grade:R.grade,spawnDelay:R.spawnDelay,targetable:R.targetable,dead:R.dead,arrived:R.arrived,spawnOrigin:R.spawnOrigin.toArray(),spawnLanding:R.spawnLanding.toArray(),emergeProgress:+R.emergeProgress.toFixed(3),popProgress:+R.popProgress.toFixed(3),popHeight:+R.popHeight.toFixed(3),isPopping:R.isPopping,bubbleText:R.bubbleText,bubbleUntil:R.bubbleUntil,pathLength:R.path.length,portal:R.routePortal?.id??null,travelledPortals:[...R.travelledPortals],transit:R.transit?{fromFloor:R.transit.fromFloor,toFloor:R.transit.toFloor,portalId:R.transit.portalId,progress:R.transit.progress}:null,animation:R.visual.active,visible:R.root.visible&&!!R.root.parent,core:E?.toArray()??null}))}return{spawn:L,update:z,render:X,damage:j,reset:re,all:()=>_,snapshot:fe,stones:_,config:M}}var yn=Object.freeze({radius:3,captureSeconds:3,graceSeconds:2,pickupSeconds:1,pickupRadius:1.8,damageReduction:.2}),pS=Object.freeze([Object.freeze([48.4,63.6]),Object.freeze([43.2,39.8]),Object.freeze([62.9,34.2]),Object.freeze([71.5,56.9])]),mS=Object.freeze([Object.freeze({floor:0,worldXZ:Object.freeze([64.1,68.7])}),Object.freeze({floor:0,worldXZ:Object.freeze([71.8,88.1])}),Object.freeze({floor:1,worldXZ:Object.freeze([96.1,111.5])})]),Ag=i=>i&&i.alive!==!1,Gf=(i,e,t)=>Ag(i)&&!i.transit&&i.floor===e.floor&&Math.hypot(i.x-e.worldXZ[0],i.z-e.worldXZ[1])<=t+1e-9;function Rg({startIndex:i,random:e=Math.random}={}){let t=i??Math.max(0,Math.min(3,Math.floor(e()*4)));if(!Number.isInteger(t)||t<0||t>3)throw new RangeError("startIndex must be 0 through 3");let n=[{floor:0,worldXZ:pS[t]},...mS].map((p,M)=>({id:"earth-pulse-"+(M+1),stageIndex:M,floor:p.floor,worldXZ:[...p.worldXZ],completed:!1,completedBy:null,occupation:_u({captureSeconds:yn.captureSeconds,graceSeconds:yn.graceSeconds,productionSeconds:30})})),s=0,r="pulses",o=0,a=!1,l=new Map,c={team:null,holderId:null,active:!1,damageReduction:yn.damageReduction},u=n[3];function h(p){return a||r!=="pickup"||!Gf(p,u,yn.pickupRadius)||p.team==null||p.id==null?!1:(l.has(p.id)||l.set(p.id,{actorId:p.id,team:p.team,progress:0,duration:yn.pickupSeconds,sequence:o++}),!0)}function f(p){return l.delete(typeof p=="object"?p?.id:p)}function d(p){let M=l.get(typeof p=="object"?p?.id:p);return M?{actorId:M.actorId,team:M.team,progress:M.progress,duration:M.duration}:null}function g(p,M=[]){if(!Number.isFinite(p)||p<0)throw new RangeError("dt must be finite and nonnegative");let _=[];if(a)return _;if(c.active&&!M.some(T=>Ag(T)&&T.team===c.team)&&(c={...c,active:!1},_.push({type:"buff-cleared",team:c.team,reason:"team-wiped"})),r==="pulses"){let T=n[s],A=M.filter(C=>Gf(C,T,yn.radius)).map(C=>({id:C.id,team:C.team})),y=T.occupation.step(p,A).find(C=>C.type==="owner-changed");return y&&(T.completed=!0,T.completedBy=y.team,_.push({type:"point-completed",pointId:T.id,stageIndex:s,team:y.team}),s<3?(s++,_.push({type:"point-activated",pointId:n[s].id,stageIndex:s})):(s=-1,r="pickup",_.push({type:"spirit-ready",pointId:T.id}))),_}if(r!=="pickup")return _;let v=new Map(M.map(T=>[T.id,T]));for(let[T,A]of l){let y=v.get(T);(!Gf(y,u,yn.pickupRadius)||y.team!==A.team)&&(l.delete(T),_.push({type:"pickup-cancelled",actorId:T,reason:"invalid-actor-or-range"}))}let E=[...l.values()].filter(T=>T.progress+p+1e-9>=T.duration).sort((T,A)=>T.duration-T.progress-(A.duration-A.progress)||T.sequence-A.sequence);if(E.length){let T=E[0];c={team:T.team,holderId:T.actorId,active:!0,damageReduction:yn.damageReduction},r="claimed",l.clear(),_.push({type:"picked-up",actorId:T.actorId,team:T.team})}else for(let T of l.values())T.progress+=p;return _}function x(){return{stage:r,ended:a,startIndex:t,activeIndex:s,completedCount:n.filter(p=>p.completed).length,points:n.map(p=>({id:p.id,stageIndex:p.stageIndex,floor:p.floor,worldXZ:[...p.worldXZ],active:p.stageIndex===s,completed:p.completed,completedBy:p.completedBy,occupation:p.occupation.snapshot()})),pickup:{available:!a&&r==="pickup",claimed:r==="claimed",duration:yn.pickupSeconds,entityId:"earth-spirit"},pickups:[...l.values()].map(p=>d(p.actorId)),buff:{...c}}}function m(){a=!0,l.clear(),c={...c,active:!1}}return{step:g,tryPickup:h,cancelPickup:f,pickupFor:d,snapshot:x,endRun:m,damageMultiplier:p=>c.active&&c.team===p?1-yn.damageReduction:1}}var ui="#ffdb61",gS="#99d7ad";function Cg(i){let{ctx:e,actorTeam:t,world:n,addLabel:s,setEntity:r,ringFx:o}=i,a=null,l=[],c=null,u=[],h=0,f=null,d=(k=0,te=0,ce=0)=>new O(k,te,ce),g=()=>e().actors||[e().player,e().ally,...e().enemies||[]].filter(Boolean),x=k=>({id:k.id,team:t(k),alive:!k.dead&&k.hp>0,floor:k.floor,x:k.pos.x,z:k.pos.z,transit:!!k.transit}),m=(k,[te,ce])=>{let oe=e().centers?.[k];return n(k,te-(oe?.x??oe?.[0]??0),ce-(oe?.z??oe?.[2]??0))},p=k=>e().mapView||e().visibleFloor?.(k)||k===e().player?.floor||k===e().player?.transit?.toFloor;function M(k,te,ce,oe=.1){let H=new Re(new ri(k-oe,k,80),new ht({color:te,transparent:!0,opacity:ce,side:St,depthWrite:!1}));return H.rotation.x=-Math.PI/2,H}function _(k,te,ce,oe,H,J=.11){let ee=new ri(te,ce,128),me=ee.attributes.position;for(let he=0;he<me.count;he++){let Ge=me.getX(he),Fe=-me.getY(he),Xe=e().environment?.heightAt?.(k.floor,k.pos.x+Ge,k.pos.z+Fe)??k.pos.y;me.setXYZ(he,Ge,Xe-k.pos.y+J,Fe)}ee.computeVertexNormals();let ue=new Re(ee,new ht({color:oe,transparent:!0,opacity:H,side:St,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return ue.renderOrder=J<.1?4:5,ue}function v(k){k&&(k.removeFromParent(),k.traverse(te=>{if(te.isMesh||te.isLine){te.geometry?.dispose();for(let ce of Array.isArray(te.material)?te.material:[te.material])ce?.dispose()}}))}function E(k){let te=new ct;te.name=k.id,te.position.copy(k.pos);let ce=yn.radius,oe=_(k,ce-.13,ce,ui,.95);te.add(oe);let H=_(k,ce-.2,ce+.055,"#5b421f",.75,.094);te.add(H);let J=_(k,ce-.23,ce-.2,ui,.4);te.add(J);let ee=new Re(new _o(.62,.72,.1,6),new bt({color:"#918269",roughness:.92}));ee.position.y=.05,te.add(ee);let me=new Re(new _o(.06,.33,3.4,24,1,!0),new ht({color:ui,transparent:!0,opacity:.13,blending:Sr,side:St,depthWrite:!1}));me.position.y=1.8,me.renderOrder=5,te.add(me);let ue=new ct;ue.position.y=1.7,te.add(ue);let he=new Re(new Sa(.43,0),new bt({color:"#ffe294",emissive:"#a76c15",emissiveIntensity:.35,metalness:.45,roughness:.4}));he.scale.set(.8,1.25,.35),ue.add(he);let Ge=new Re(new wa(.64,.025,5,4),new ht({color:ui}));Ge.rotation.z=Math.PI/4,ue.add(Ge);for(let[Fe,Xe]of[[.25,.055],[.055,.34]]){let Ie=new Re(new $i(Fe,Xe,.04),new ht({color:"#634520"}));Ie.position.z=-.16,ue.add(Ie)}e().groupDynamic.add(te),k.root=te,k.visual={ring:oe,border:H,inner:J,pillar:me,token:ue,diamond:he,base:ee},r?.(te,k),s?.(k,"压脉点 "+(k.stageIndex+1),"earth-pulse")}function T(k){let te=new ct;te.name="earth-spirit",te.position.copy(k.pos);let ce=new ct;te.add(ce);let oe=new Re(new pn(.3,1),new bt({color:"#ddc07b",emissive:"#755116",emissiveIntensity:.35,roughness:.75}));oe.scale.set(1,1.1,.82),ce.add(oe);for(let me of[-.095,.095]){let ue=new Re(new bo(.038,8,6),new ht({color:"#fff4bd"}));ue.position.set(me,.04,-.23),ce.add(ue)}let H=M(.63,ui,.65,.035);H.position.y=-.15,ce.add(H);let J=[];for(let me=0;me<4;me++){let ue=new Re(new pn(.085,0),new bt({color:"#c7aa6b",roughness:1}));ce.add(ue),J.push(ue)}let ee=_(k,1.02,1.1,ui,.7);te.add(ee),e().groupDynamic.add(te),k.root=te,k.visual={body:ce,halo:H,ring:ee,pebbles:J},r?.(te,k),s?.(k,"土灵蕴","earth-spirit")}function A(){for(let k of[...l,...c?[c]:[]])k.labelView?.el?.remove(),v(k.root);for(let k of u)v(k.root);a=null,l=[],c=null,u=[],h=0,f=null}function y(k={}){A(),a=Rg(k),l=a.snapshot().points.map(ce=>{let oe={...ce,kind:"earth-pulse",pos:m(ce.floor,ce.worldXZ),radius:yn.radius,occupationRadius:yn.radius,dead:!1,occupation:{snapshot:()=>a.snapshot().points[ce.stageIndex].occupation}};return E(oe),oe});let te=l[3];return c={id:"earth-spirit",kind:"earth-spirit",floor:te.floor,pos:te.pos.clone(),radius:yn.pickupRadius,occupationRadius:yn.pickupRadius,available:!1,claimed:!1,dead:!0},T(c),C(),P(),re()}function C(){if(!a)return;let k=a.snapshot();for(let te=0;te<l.length;te++)Object.assign(l[te],{active:k.points[te].active,completed:k.points[te].completed,completedBy:k.points[te].completedBy});c.available=k.pickup.available,c.claimed=k.pickup.claimed,c.dead=!c.available}function U(k,te){let ce=i.pathTo||e().pathTo,oe=i.routePortal||e().routePortal;if(!ce)return;let H=[],J=(ue,he,Ge)=>{let Fe=ce({kind:"player",floor:ue,pos:he.clone()},Ge);if(!Fe?.length)return;let Xe=[he,...Fe,Ge],Ie=[];for(let $e=1;$e<Xe.length;$e++){let Dt=Math.max(1,Math.ceil(Xe[$e-1].distanceTo(Xe[$e])/.5));for(let Ft=0;Ft<Dt;Ft++){let Tt=Xe[$e-1].clone().lerp(Xe[$e],Ft/Dt);Tt.y=(e().environment?.heightAt?.(ue,Tt.x,Tt.z)??Tt.y)+.15,(!Ie.length||Ie.at(-1).distanceToSquared(Tt)>1e-5)&&Ie.push(Tt)}}Ie.push(Ge.clone().add(d(0,.15,0))),H.push({points:Ie,floors:[ue],air:!1})};if(k.floor===te.floor)J(k.floor,k.pos,te.pos);else{let ue=oe?.(k.floor,te.floor);if(!ue||ue.to!==te.floor||ue.canDepart===!1)return;J(k.floor,k.pos,ue.pos);let he=n(ue.to,...ue.landing),Ge=[];for(let Fe=0;Fe<=32;Fe++){let Xe=Fe/32,Ie=ue.pos.clone().lerp(he,Xe);Ie.y+=.35+Math.sin(Math.PI*Xe)*2.4,Ge.push(Ie)}H.push({points:Ge,floors:[k.floor,te.floor],air:!0}),J(te.floor,he,te.pos)}let ee=new ct,me=[];for(let ue of H){let he,Ge;if(ue.air)he=new Si(new nt().setFromPoints(ue.points),new Ki({color:ui,transparent:!0,opacity:.7,depthWrite:!1}));else{let Ie=($e,Dt,Ft,Tt)=>{let tn=[],Nt=[];ue.points.forEach((fn,ft)=>{let N=ue.points[Math.min(ft+1,ue.points.length-1)].clone().sub(ue.points[Math.max(0,ft-1)]);N.y=0,N.normalize();for(let b of[-1,1]){let q=fn.x+N.z*$e*b,K=fn.z-N.x*$e*b,Q=(e().environment?.heightAt?.(ue.floors[0],q,K)??fn.y-.15)+Tt;tn.push(q,Q,K)}if(ft){let b=ft*2;Nt.push(b-2,b-1,b,b,b-1,b+1)}});let Ut=new nt;Ut.setAttribute("position",new De(tn,3)),Ut.setIndex(Nt),Ut.computeVertexNormals();let G=new Re(Ut,new ht({color:Dt,transparent:!0,opacity:Ft,side:St,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return G.renderOrder=Tt<.14?4:5,G};he=Ie(.045,ui,.8,.15),Ge=Ie(.08,"#68491e",.6,.133),ee.add(Ge)}he.renderOrder=5,ee.add(he);let Fe=[];for(let Ie=0;Ie<3;Ie++){let $e=new Re(new bo(.09,6,4),new ht({color:"#fff0a4",transparent:!0,opacity:.8}));$e.renderOrder=6,ee.add($e),Fe.push($e)}let Xe=[0];for(let Ie=1;Ie<ue.points.length;Ie++)Xe.push(Xe.at(-1)+ue.points[Ie].distanceTo(ue.points[Ie-1]));me.push({...ue,line:he,outline:Ge,beads:Fe,lengths:Xe,total:Xe.at(-1)})}ee.name="EarthSpiritFlow",e().groupDynamic.add(ee),u.push({root:ee,parts:me,fromIndex:k.stageIndex,toIndex:te.stageIndex})}function S(k){if(!a)return[];h+=k;let te=a.step(k,g().map(x));C();for(let ce of te){if(ce.type==="point-completed"){let oe=l[ce.stageIndex];o?.(oe.pos,yn.radius,ui,.9),ce.stageIndex<3&&U(oe,l[ce.stageIndex+1])}else if(ce.type==="spirit-ready")o?.(c.pos,2.1,ui,1.2);else if(ce.type==="picked-up"){let oe=g().find(H=>H.id===ce.actorId);oe&&o?.(oe.pos,1.4,ui,1.1)}i.onEvent?.(ce,R)}return te}function P(){if(!a)return;let k=a.snapshot(),te=k.stage==="pulses";for(let H of l){H.root.visible=te&&(H.active||p(H.floor));let{ring:J,border:ee,inner:me,pillar:ue,token:he,diamond:Ge}=H.visual;J.material.color.set(H.completed?gS:ui),J.material.opacity=H.active?.95:H.completed?.42:.12,ee.material.opacity=H.active?.75:H.completed?.4:.12,me.material.color.copy(J.material.color),me.material.opacity=H.active?.3:H.completed?.18:.05,ue.visible=H.active,ue.material.opacity=.18+Math.sin(h*2.2)*.045,he.visible=H.active||H.completed,he.position.y=H.completed?.7:1.6+Math.sin(h*2)*.12,he.rotation.y=h*.35,he.scale.setScalar(H.completed?.58:1),Ge.material.emissiveIntensity=H.completed?.12:.35}let ce=g().filter(H=>!H.dead&&H.hp>0&&t(H)===k.buff.team),oe=ce.find(H=>H.id===k.buff.holderId)||ce[0];if(f=k.buff.active&&oe?.id||null,k.buff.active&&oe){let H=h*1.2,J=d(Math.cos(H)*.9,1.25+Math.sin(h*2.2)*.15,Math.sin(H)*.6);c.root.position.copy(oe.pos).add(J),c.root.visible=p(oe.floor),c.visual.ring.visible=!1,c.visual.body.position.y=0}else c.root.position.copy(c.pos),c.root.visible=c.available,c.visual.ring.visible=c.available,c.visual.body.position.y=1.05+Math.sin(h*2.4)*.15;c.visual.body.rotation.y=Math.sin(h*.5)*.18,c.visual.pebbles.forEach((H,J)=>{let ee=h*1.4+J*Math.PI/2;H.position.set(Math.cos(ee)*.48,Math.sin(h*2+J)*.12-.16,Math.sin(ee)*.48)});for(let H of u)H.root.visible=te;for(let H of u)for(let J of H.parts){let ee=J.floors.some(p);J.line.visible=ee,J.line.material.opacity=l[H.toIndex]?.active?J.air?.7:.8:.2,J.outline&&(J.outline.visible=ee,J.outline.material.opacity=l[H.toIndex]?.active?.6:.15);for(let me=0;me<J.beads.length;me++){let ue=J.beads[me];ue.visible=ee&&!!l[H.toIndex]?.active;let he=(h*5+me*J.total/3)%Math.max(.001,J.total),Ge=1;for(;Ge<J.lengths.length-1&&J.lengths[Ge]<he;)Ge++;let Fe=J.lengths[Ge]-J.lengths[Ge-1];ue.position.copy(J.points[Ge-1]).lerp(J.points[Ge],Fe?(he-J.lengths[Ge-1])/Fe:0)}}}function L(k){return!!k&&!!a?.tryPickup(x(k))}function B(k){return!!a?.cancelPickup(k)}function D(k){return a?.pickupFor(k)||null}function z(k){return k&&a?a.damageMultiplier(t(k)):1}function X(k){if(!a||!k||k.dead||k.hp<=0)return null;let te=a.snapshot();return te.activeIndex>=0?l[te.activeIndex]:c.available?c:null}function j(){return[...l,...c?[c]:[]]}function re(){return a?{...a.snapshot(),visualHostId:f}:null}function fe(){a?.endRun(),C(),P()}let R={init:y,reset:A,endRun:fe,update:S,render:P,entities:j,snapshot:re,tryPickup:L,cancelPickup:B,pickupFor:D,damageMultiplier:z,aiTarget:X};return R}var Iu=0,xS=1,vS=new O,Ig=new Fa,Wf=new zn,Pg=new O,Cu=new qi,Pu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Lu,this.unassigned=new Lu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Xf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new O;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,vS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Iu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new O,t=new O,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-n[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=n[o],l=s[o],c,u;r=0,Ig.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let g=e[f];if(g!==a&&g!==l){Ig.closestPointToPoint(g.point,!0,Pg);let x=Pg.distanceToSquared(g.point);x>r&&(r=x,c=g)}}r=-1,Wf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let g=e[f];if(g!==a&&g!==l&&g!==c){let x=Math.abs(Wf.distanceToPoint(g.point));x>r&&(r=x,u=g)}}let h=[];if(Wf.distanceToPoint(u.point)<0){h.push(Ui.create(a,l,c),Ui.create(u,l,a),Ui.create(u,c,l),Ui.create(u,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge(d)),h[f+1].getEdge(1).setTwin(h[d+1].getEdge(0))}}else{h.push(Ui.create(a,c,l),Ui.create(u,a,l),Ui.create(u,l,c),Ui.create(u,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge((3-f)%3)),h[f+1].getEdge(0).setTwin(h[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(h[f]);for(let f=0,d=e.length;f<d;f++){let g=e[f];if(g!==a&&g!==l&&g!==c&&g!==u){r=this.tolerance;let x=null;for(let m=0;m<4;m++){let p=this.faces[m].distanceToPoint(g.point);p>r&&(r=p,x=this.faces[m])}x!==null&&this._addVertexToFace(g,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===Iu&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=xS;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Iu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=Ui.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Ui=class i{constructor(){this.normal=new O,this.midpoint=new O,this.area=0,this.constant=0,this.outside=null,this.mark=Iu,this.edge=null}static create(e,t,n){let s=new i,r=new sl(e,s),o=new sl(t,s),a=new sl(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Cu.set(e.point,t.point,n.point),Cu.getNormal(this.normal),Cu.getMidpoint(this.midpoint),this.area=Cu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},sl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Xf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Lu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Du=class extends nt{constructor(e=[]){super();let t=[],n=[],r=new Pu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new De(t,3)),this.setAttribute("normal",new De(n,3))}};var Nu=i=>Math.max(0,Math.min(1,i)),Fu=i=>{let e=Nu(i);return e*e*(3-2*e)},Oi=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453123;return e-Math.floor(e)},Lg={legs:{start:.02,end:.36,label:"双腿"},torso:{start:.2,end:.6,label:"躯干"},arms:{start:.43,end:.82,label:"双臂"},head:{start:.72,end:.96,label:"头部"}};function yS(i){for(let e=i;e;e=e.parent){if(/Head/i.test(e.name))return"head";if(/UpperArm|Forearm|Hand|Finger/i.test(e.name))return"arms";if(/Thigh|Calf|Foot/i.test(e.name))return"legs"}return["Bone032","Bone033"].includes(i?.name)?"arms":"torso"}function _S(i,e,t){let n=new Map,s=new Map,r=l=>l.map(c=>c.toFixed(4)).join(",");for(let l=0;l<i.length;l+=9){let c=[0,1,2].map(u=>i.slice(l+u*3,l+u*3+3));for(let u=0;u<3;u++){let h=c[u],f=c[(u+1)%3],d=r(h),g=r(f),x=d<g?d+"|"+g:g+"|"+d;n.set(x,(n.get(x)||0)+1),s.set(d,new O(h[0]-e.x,h[1]-e.y,h[2]-e.z))}}if(![...n.values()].some(l=>l===1)||s.size<4)return null;let o=new Du([...s.values()]),a=new Re(o,t);return a.scale.setScalar(.985),a.name="SolidRockInterior",a.castShadow=!0,a.receiveShadow=!0,a}function MS(i){let e=Ir(i),t=i.clips.born1||i.clips.idle_battle;Ni(e,i.clips.born1?"born1":"idle_battle",t?.duration||0,{loop:!1,fade:0}),e.root.updateMatrixWorld(!0);let n=e.root.matrixWorld.clone().invert(),s=[],r=new Map,o=new bt({color:"#788177",roughness:.95,side:St}),a=0;return e.root.traverse(l=>{if(!l.isMesh)return;l.skeleton?.update();let c=l.geometry,u=c.attributes.position,h=c.attributes.normal,f=c.index,d=c.attributes.uv,g=c.attributes.skinIndex,x=c.attributes.skinWeight,m=f?f.count:u.count,p=new Map,M=n.clone().multiply(l.matrixWorld),_=new qe().getNormalMatrix(M),v=new O,E=new O,T=new O,A=l.isSkinnedMesh?l.skeleton.bones.map((y,C)=>new qe().setFromMatrix4(l.bindMatrixInverse.clone().multiply(y.matrixWorld).multiply(l.skeleton.boneInverses[C]).multiply(l.bindMatrix))):[];for(let y=0;y<m;y+=3){let C=[0,1,2].map(D=>f?f.getX(y+D):y+D),U=new Map;for(let D of C)if(g&&x)for(let z=0;z<4;z++){let X=g.getComponent(D,z),j=x.getComponent(D,z);j>0&&U.set(X,(U.get(X)||0)+j)}let S=[...U].sort((D,z)=>z[1]-D[1])[0]?.[0]??-1,P=c.groups.find(D=>y>=D.start&&y<D.start+D.count)?.materialIndex??0,L=S+":"+P;p.has(L)||p.set(L,{bone:l.skeleton?.bones[S],materialIndex:P,positions:[],normals:[],uvs:[]});let B=p.get(L);for(let D of C){if(l.getVertexPosition(D,v),v.applyMatrix4(M),B.positions.push(v.x,v.y,v.z),h){if(E.set(0,0,0),A.length)for(let z=0;z<4;z++){let X=x.getComponent(D,z);X<=0||(T.fromBufferAttribute(h,D).applyMatrix3(A[g.getComponent(D,z)]),E.addScaledVector(T,X))}else E.fromBufferAttribute(h,D);E.applyMatrix3(_).normalize(),B.normals.push(E.x,E.y,E.z)}d&&B.uvs.push(d.getX(D),d.getY(D))}a++}for(let y of p.values()){let C=new nt;C.setAttribute("position",new De(y.positions,3)),y.normals.length?C.setAttribute("normal",new De(y.normals,3)):C.computeVertexNormals(),y.uvs.length&&C.setAttribute("uv",new De(y.uvs,2)),C.computeBoundingBox();let U=C.boundingBox.getCenter(new O);C.translate(-U.x,-U.y,-U.z),C.computeBoundingSphere();let S=Array.isArray(l.material)?l.material[y.materialIndex]:l.material;if(!r.has(S)){let B=S.clone();B.transparent=!1,B.opacity=1,r.set(S,B)}let P=new Re(C,r.get(S));P.name="Formation_"+(y.bone?.name||l.name),P.castShadow=!0,P.receiveShadow=!0;let L=_S(y.positions,U,o);L&&P.add(L),s.push({mesh:P,center:U,bone:y.bone?.name||l.name,region:yS(y.bone),triangles:y.positions.length/9})}}),e.mixer.stopAllAction(),{pieces:s,materials:[...r.values(),o],triangleCount:a}}function Dg(i,{groupDynamic:e,environment:t}={}){let n=new ct;n.name="BossStoneFormation",n.visible=!1,i.root.add(n);let s=MS(i.visual.asset),r=s.pieces,o=[],a=!1,l=0,c=!1,u=!1,h=i.visual.model.visible,f=s.materials.map(S=>({material:S,emissive:S.emissive?.clone(),intensity:S.emissiveIntensity??1}));for(let S=0;S<r.length;S++){let P=r[S],L=S*2.399963229728653,B=2.1+Oi(S+1)*2.1;P.start=new O(Math.cos(L)*B,.12+Math.min(.75,P.mesh.geometry.boundingSphere.radius*.55),Math.sin(L)*B),P.rotation=new At().setFromEuler(new zt((Oi(S+11)-.5)*2.2,(Oi(S+21)-.5)*3.8,(Oi(S+31)-.5)*2.2));let D=Lg[P.region];P.begin=D.start+Oi(S+41)*.035,P.end=D.end+Oi(S+51)*.018,P.lift=.75+Oi(S+61)*1.05,P.attached=!1,P.localProgress=0,n.add(P.mesh)}let d=new pn(1,0),g=new bt({color:"#89918a",emissive:"#264c39",emissiveIntensity:.35,roughness:.95}),x=[];for(let S=0;S<34;S++){let P=new Re(d,g),L=S*2.399963229728653,B=3+Oi(S+71)*2;P.castShadow=!0,P.name="GatheringPebble_"+S,n.add(P),x.push({mesh:P,angle:L,radius:B,start:Oi(S+81)*.48,duration:.24+Oi(S+91)*.18,size:.08+Oi(S+101)*.12})}let m=new bt({color:"#8acfa2",emissive:"#55b983",emissiveIntensity:.8,roughness:.4}),p=new Re(new pn(.38,1),m);p.position.y=.6,p.name="FormationSpiritCore",n.add(p);let M=new ht({color:"#98c7a2",transparent:!0,opacity:.36,side:St,depthWrite:!1}),_=new Re(new ri(1.5,1.59,64),M);_.rotation.x=-Math.PI/2,_.position.y=.06,_.name="FormationGatherRing",n.add(_);function v(S){if(u)return;l=Nu(S);for(let L of r){let B=Nu((l-L.begin)/(L.end-L.begin)),D=Fu(B);L.localProgress=B,L.mesh.position.lerpVectors(L.start,L.center,D),L.mesh.position.y+=Math.sin(Math.PI*B)*L.lift,L.mesh.quaternion.copy(L.rotation).slerp(new At,D),L.mesh.scale.setScalar(1);for(let z of L.mesh.children)z.visible=B<.995;B>=1&&!L.attached?(L.attached=!0,o.push({type:"piece-joined",bone:L.bone,region:L.region,progress:l})):B<1&&(L.attached=!1)}for(let L of x){let B=Nu((l-L.start)/L.duration),D=L.angle+B*1.7,z=L.radius*(1-Fu(B));L.mesh.visible=l>=L.start&&B<1,L.mesh.position.set(Math.cos(D)*z,.12+Math.sin(Math.PI*B)*(.8+L.radius*.35)+B*1.2,Math.sin(D)*z),L.mesh.rotation.set(B*7+L.angle,B*4,B*5),L.mesh.scale.setScalar(L.size*(1-B*.8))}let P=1-Fu((l-.66)/.3);p.visible=l<.96,p.scale.setScalar((1+Math.sin(l*70)*.12)*Math.max(.01,P)),p.rotation.y=l*12,_.visible=l<.99,_.scale.setScalar(1+.1*Math.sin(l*24)),M.opacity=.38*(1-Fu((l-.8)/.2));for(let L of f)L.emissive&&(L.material.emissive.copy(L.emissive).lerp(new ve("#416344"),Math.sin(Math.PI*l)*.18),L.material.emissiveIntensity=L.intensity)}function E(){if(u)throw new Error("Cannot restart a disposed boss formation");a=!0,c=!1,o.length=0;for(let S of r)S.attached=!1;if(i.root.updateMatrixWorld(!0),t?.heightAt)for(let S of r){let P=i.root.localToWorld(S.start.clone()),L=t.heightAt(i.floor,P.x,P.z);Number.isFinite(L)&&(S.start.y=L-i.pos.y+.12+Math.min(.75,S.mesh.geometry.boundingSphere.radius*.55))}v(0),n.visible=!0,i.visual.model.visible=!1}function T(S=!0){u||(n.visible=a&&S,a&&(i.visual.model.visible=!1))}function A(){u||(v(1),a=!1,c=!0,n.visible=!1,i.visual.model.visible=h)}function y(){if(!u){a=!1,c=!1,l=0,n.visible=!1,o.length=0,i.visual.model.visible=h;for(let S of r)S.attached=!1}}function C(){if(!u){y(),n.removeFromParent();for(let S of r)S.mesh.traverse(P=>P.geometry?.dispose());for(let S of s.materials)S.dispose();d.dispose(),g.dispose(),p.geometry.dispose(),m.dispose(),_.geometry.dispose(),M.dispose(),u=!0}}function U(){return{active:a,finished:c,progress:+l.toFixed(4),source:"GW20105_m_01 skin triangles",pieceCount:r.length,triangleCount:s.triangleCount,visible:n.visible,modelVisible:i.visual.model.visible,joined:r.filter(S=>S.attached).length,stages:Object.fromEntries(Object.entries(Lg).map(([S,P])=>[S,{label:P.label,total:r.filter(L=>L.region===S).length,joined:r.filter(L=>L.region===S&&L.attached).length}])),pieces:r.map(S=>({bone:S.bone,region:S.region,triangles:S.triangles,progress:+S.localProgress.toFixed(4),position:S.mesh.position.toArray().map(P=>+P.toFixed(4)),target:S.center.toArray().map(P=>+P.toFixed(4))})),events:o.map(S=>({...S}))}}return{start:E,update:v,apply:T,finish:A,reset:y,dispose:C,snapshot:U,root:n,pieces:r,get active(){return a}}}var Fg=(i,e,t)=>Math.max(e,Math.min(t,i)),Ng=i=>i*i*(3-2*i);function Ug(i,e,t){let n=Math.hypot(e.x-i.x,e.z-i.z),s=e.y-i.y,r=2.8+Math.abs(s)*.55;for(let l=1;l<24;l++){let c=l/24,u=Ng(c),h=Ot.lerp(i.x,e.x,u),f=Ot.lerp(i.z,e.z,u),d=t?.(h,f);Number.isFinite(d)&&(r=Math.max(r,(d+.45-Ot.lerp(i.y,e.y,c))/(4*c*(1-c))))}let o=.16,a=Fg(1.2+n/18+Math.abs(s)/15,1.8,3.1);return{start:i.clone(),end:e.clone(),arc:r,elapsed:0,anticipation:o,flightSeconds:a,duration:o+a,progress:0,phase:"takeoff"}}function Og(i,e,t){i.elapsed=Math.min(i.duration,i.elapsed+e);let n=Fg((i.elapsed-i.anticipation)/i.flightSeconds,0,1);i.progress=n,t.copy(i.start).lerp(i.end,Ng(n)),t.y=Ot.lerp(i.start.y,i.end.y,n)+4*i.arc*n*(1-n);let s=i.end.y-i.start.y+4*i.arc*(1-2*n);return i.phase=i.elapsed<i.anticipation?"takeoff":s>0?"rising":"falling",i.elapsed>=i.duration?(t.copy(i.end),i.phase="landed",!0):!1}var Uu=class extends nt{constructor(e=new Re,t=new O,n=new zt,s=new O(1,1,1)){super();let r=[],o=[],a=[],l=new O,c=new qe().getNormalMatrix(e.matrixWorld),u=new Ae;u.makeRotationFromEuler(n),u.setPosition(t);let h=new Ae;h.copy(u).invert(),f(),this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(a,2)),o.length>0&&this.setAttribute("normal",new De(o,3));function f(){let m=[],p=new O,M=new O,_=e.geometry,v=_.attributes.position,E=_.attributes.normal;if(_.index!==null){let T=_.index;for(let A=0;A<T.count;A++)p.fromBufferAttribute(v,T.getX(A)),E?(M.fromBufferAttribute(E,T.getX(A)),d(m,p,M)):d(m,p)}else{if(v===void 0)return;for(let T=0;T<v.count;T++)p.fromBufferAttribute(v,T),E?(M.fromBufferAttribute(E,T),d(m,p,M)):d(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let T=0;T<m.length;T++){let A=m[T];a.push(.5+A.position.x/s.x,.5+A.position.y/s.y),A.position.applyMatrix4(u),r.push(A.position.x,A.position.y,A.position.z),A.normal!==null&&o.push(A.normal.x,A.normal.y,A.normal.z)}}function d(m,p,M=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(h),M?(M.applyNormalMatrix(c),m.push(new rl(p.clone(),M.clone()))):m.push(new rl(p.clone()))}function g(m,p){let M=[],_=.5*Math.abs(s.dot(p));for(let v=0;v<m.length;v+=3){let E=0,T,A,y,C,U=m[v+0].position.dot(p)-_,S=m[v+1].position.dot(p)-_,P=m[v+2].position.dot(p)-_,L=U>0,B=S>0,D=P>0;switch(E=(L?1:0)+(B?1:0)+(D?1:0),E){case 0:{M.push(m[v]),M.push(m[v+1]),M.push(m[v+2]);break}case 1:{if(L&&(T=m[v+1],A=m[v+2],y=x(m[v],T,p,_),C=x(m[v],A,p,_)),B){T=m[v],A=m[v+2],y=x(m[v+1],T,p,_),C=x(m[v+1],A,p,_),M.push(y),M.push(A.clone()),M.push(T.clone()),M.push(A.clone()),M.push(y.clone()),M.push(C);break}D&&(T=m[v],A=m[v+1],y=x(m[v+2],T,p,_),C=x(m[v+2],A,p,_)),M.push(T.clone()),M.push(A.clone()),M.push(y),M.push(C),M.push(y.clone()),M.push(A.clone());break}case 2:{L||(T=m[v].clone(),A=x(T,m[v+1],p,_),y=x(T,m[v+2],p,_),M.push(T),M.push(A),M.push(y)),B||(T=m[v+1].clone(),A=x(T,m[v+2],p,_),y=x(T,m[v],p,_),M.push(T),M.push(A),M.push(y)),D||(T=m[v+2].clone(),A=x(T,m[v],p,_),y=x(T,m[v+1],p,_),M.push(T),M.push(A),M.push(y));break}case 3:break}}return M}function x(m,p,M,_){let v=m.position.dot(M)-_,E=p.position.dot(M)-_,T=v/(v-E),A=new O(m.position.x+T*(p.position.x-m.position.x),m.position.y+T*(p.position.y-m.position.y),m.position.z+T*(p.position.z-m.position.z)),y=null;return m.normal!==null&&p.normal!==null&&(y=new O(m.normal.x+T*(p.normal.x-m.normal.x),m.normal.y+T*(p.normal.y-m.normal.y),m.normal.z+T*(p.normal.z-m.normal.z))),new rl(A,y)}}},rl=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function bS(){let i=document.createElement("canvas");i.width=1536,i.height=640;let e=i.getContext("2d"),t=190909,n=()=>(t=1664525*t+1013904223>>>0,t/4294967296);for(let h=0;h<5e3;h++)e.fillStyle=`rgba(${n()>.5?"228,210,169":"31,40,32"},${n()*.08})`,e.fillRect(n()*1536,n()*640,n()*18+2,n()*5+1);let s=(h,f=12,d="#f0d59b")=>{e.strokeStyle=d,e.lineWidth=f,e.lineCap="round",e.lineJoin="round",e.beginPath(),h.forEach(([g,x],m)=>m?e.lineTo(g,x):e.moveTo(g,x)),e.stroke()},r=(h,f,d)=>{e.beginPath(),e.arc(h,f,d,0,Math.PI*2),e.stroke()},o=(h,f,d,g="#d98b52")=>{e.fillStyle=g,e.beginPath();for(let x=0;x<6;x++){let m=x/6*Math.PI*2;e.lineTo(h+Math.cos(m)*d,f+Math.sin(m)*d*.8)}e.closePath(),e.fill()},a=(h,f,d=1,g=!1)=>{e.strokeStyle="#f0d59b",e.lineWidth=12,r(h,f-58,16),s([[h,f-39],[h+d*8,f+8],[h-21*d,f+52]]),s([[h+d*8,f+8],[h+d*38,f+45]]),s([[h,f-23],[h+d*38,f-40],[h+d*(g?62:75),f-70]]),s([[h,f-20],[h-d*25,f+5],[h-d*40,f-12]]),g||(s([[h+d*45,f-95],[h+d*96,f-44]],9),s([[h+d*63,f-87],[h+d*100,f-75]],10))};s([[58,490],[210,482],[348,496],[513,487],[690,500],[880,486],[1060,495],[1240,482],[1474,492]],5,"#aca080"),a(164,382),a(344,370,-1),o(262,421,40),o(283,384,32),o(228,399,24),s([[80,210],[160,153],[307,176],[409,225]],7,"#4a4634");for(let[h,f,d]of[[641,434,30],[862,446,26],[621,327,20],[901,297,21],[700,405,30],[810,405,30],[759,337,54],[708,281,30],[811,281,30],[760,236,32],[758,189,18]])o(h,f,d);s([[620,399],[642,366],[673,347]],5,"#b7a17b"),s([[884,402],[864,365],[838,342]],5,"#b7a17b"),o(1100,320,60),o(1100,237,32),o(1053,404,30),o(1147,404,30),o(1024,302,29),o(1176,280,29),a(1302,381,1,!0),a(1407,357,1,!0),s([[1165,200],[1228,184],[1261,210]],5,"#bc936d");for(let h=0;h<900;h++)e.fillStyle=`rgba(134,124,96,${n()*.25})`,e.fillRect(n()*1536,n()*640,2+n()*14,1+n()*4);for(let h of[[[488,0],[477,92],[495,150],[471,241],[478,270]],[[945,640],[934,524],[954,450],[940,374]],[[0,104],[73,117],[128,111],[156,135]]])s(h,3,"#393d30");e.globalCompositeOperation="destination-in";let l=e.createRadialGradient(768,320,210,768,320,810);l.addColorStop(0,"#ffffffff"),l.addColorStop(.8,"#ffffffc0"),l.addColorStop(1,"#ffffff00"),e.fillStyle=l,e.fillRect(0,0,1536,640);let c=document.createElement("canvas");c.width=1536,c.height=370,c.getContext("2d").drawImage(i,0,140,1536,370,0,0,1536,370);let u=new yr(c);return u.colorSpace=tt,u.anisotropy=8,u}var SS=Object.freeze({sourceId:"723059099",floor:0,position:[72.58094117346435,13.16,62.47778199800883],normal:[-.6861435343250835,0,-.7274661849899849],size:[7.8,1.9,.12]});function Bg(i,e){let t=SS,n=e.find(f=>String(f.userData.sourceId)===t.sourceId);if(!n||!i[t.floor])return null;n.updateWorldMatrix(!0,!1);let s=new O(...t.position),r=new O(...t.normal),o=new gt;o.position.copy(s),o.lookAt(s.clone().add(r));let a=new Uu(n,s,o.rotation,new O(...t.size));if(!a.getAttribute("position").count)throw a.dispose(),new Error("Original Unity mural wall has no projected surface");let l=new bt({map:bS(),transparent:!0,depthWrite:!1,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,side:Nn}),c=new Re(a,l);c.name="取矿_聚形_驱人_岩壁旧画",c.castShadow=!1,c.receiveShadow=!0,c.renderOrder=2;let h=new Ri(s.clone().addScaledVector(r,.3),r.clone().negate(),0,.6).intersectObject(n,!1)[0]?.face;return c.userData={kind:"mural",sourceId:t.sourceId,sourcePath:n.userData.sourcePath,floor:t.floor,projection:{position:t.position,normal:t.normal,size:t.size},sourceMaterialIndex:h?.materialIndex??0},c.onBeforeRender=()=>{let f=Array.isArray(n.material)?n.material:[n.material],d=f[c.userData.sourceMaterialIndex]||f[0];l.opacity=n.visible?d?.opacity??1:0},i[t.floor].add(c),c}function $s(i){let e=i.clone();return e.z=-e.z,e}var qf=$s;function Bi([i,e]){return[i,-e]}var wS={WB_MAT_HighLayer_MutedOchre:"#caa34f",WB_MAT_MidLayer_MutedRed:"#c25a60",WB_MAT_LowLayer_MutedBlue:"#578ad0",Lit:"#91858a",Lit_Basescene:"#a7999c",WB_MAT_Rock:"#82747a",MW_Mountain:"#70636c"};async function kg(i,e,t){let n=Array.from({length:3},(S,P)=>{let L=new ct;return L.name="UnityWhitebox_L"+(P+1),i.add(L),L}),s=[],r=[],o=[],a=[],l=[],c=[],u=0,h=0,f=(S=0,P=0,L=0)=>new O(S,P,L),d=new Map,g=new Map,x=new Ei;await Promise.all(Object.values(t.materials).filter(S=>S.map).map(async S=>{let P=await x.loadAsync(S.map);P.colorSpace=tt,P.wrapS=P.wrapT=Un,P.repeat.fromArray(S.mapRepeat||[1,1]),P.offset.fromArray(S.mapOffset||[0,0]),P.anisotropy=8,g.set(S.id,P)}));function m(S,P){let L=S??"floor-"+P;if(d.has(L))return d.get(L).clone();let B=Array.isArray(t.materials)?t.materials.find(te=>te.id===S):t.materials?.[S],D=B?.color||B?.baseColor||["#d8bd69","#d18087","#78accb"][Math.max(0,P)],z=B&&!B.presentationKind&&!B.map,X=z&&wS[B.name],j=z?tt:xn,re=X?new ve(X):Array.isArray(D)?new ve().setRGB(...D.slice(0,3),j):typeof D=="object"?new ve().setRGB(D.r,D.g,D.b,j):new ve(D),fe=B?.emission||[0,0,0],R={color:re,map:g.get(S)||null,side:B?.cullMode===2?Nn:B?.cullMode===1?on:St,transparent:!0,opacity:B?.opacity??1,depthWrite:B?.depthWrite??!0,blending:B?.blending==="additive"?Sr:ds},k=B?.presentationKind==="effect"?new ht(R):new bt({...R,roughness:z?.95:Math.max(.15,1-(B?.smoothness??.12)),metalness:z?0:B?.metallic??0,emissive:new ve().setRGB(...fe.slice(0,3))});return k.userData.baseOpacity=k.opacity,k.userData.baseDepthWrite=k.depthWrite,d.set(L,k),k.clone()}let p=new Set(e.groundMeshIds||e.levels.flatMap(S=>S.groundMeshIds||[])),M=new Set((e.sourceSceneOverrides||[]).filter(S=>S.visible===!1).map(S=>S.sourceId));for(let S of t.meshes){let P=S.floor??0,L=new nt;L.setAttribute("position",new De(S.positions,3)),L.setIndex(S.indices),S.normals?.length===S.positions.length?L.setAttribute("normal",new De(S.normals,3)):L.computeVertexNormals(),S.uvs?.length&&L.setAttribute("uv",new De(S.uvs,2)),S.colors?.length===S.positions.length/3*4&&L.setAttribute("color",new De(S.colors,4));let B=(S.materialIds?.length?S.materialIds:[S.materialId]).map(z=>m(z,P));if(L.hasAttribute("color"))for(let z of B)z.vertexColors=!0;for(let z of S.groups||[])L.addGroup(z.start,z.count,z.materialIndex||0);let D=new Re(L,B.length===1?B[0]:B);D.name=S.path||S.name,D.userData={sourceId:S.id,sourcePath:S.path,floor:P,prefabRoot:S.prefabRoot,presentationKind:S.presentationKind,demoHidden:M.has(S.id)},D.castShadow=S.castShadow!==!1&&S.presentationKind!=="effect",D.receiveShadow=S.receiveShadow!==!1,D.visible=!D.userData.demoHidden&&S.presentationKind!=="original-occupy-circle",n[Math.max(0,P)]?.add(D),l.push(D),L.computeBoundingBox(),p.has(S.id)||p.has(String(S.id))?c.push(D):D.userData.demoHidden||a.push(D)}let _=Bg(n,l);i.scale.z=-1,i.updateMatrixWorld(!0),_&&(_.material.map.repeat.x=-1,_.material.map.offset.x=1);let v=new Ri,E=new Ri;function T(S,P,L){let B=e.centers[S][1];return v.set($s(f(P,B+3,L)),f(0,-1,0)),v.far=7,v.intersectObjects(c.filter(z=>z.userData.floor===S),!1).find(z=>z.face&&Math.abs(z.face.normal.y)>.45)?.point.y??B}for(let S of e.mines){let P=S.floor,L=S.p,B=new ct;B.position.set(L[0]+2,T(P,L[0]+2,L[1]),L[1]),n[P].add(B);let D=new ct;D.position.y=2.6,B.add(D);let z=new oi("#ffd59b",4.5,7,2);D.add(z);let X=new Re(new pn(.1,0),new ht({color:"#ffe2a9"}));D.add(X),r.push({group:B,swing:D,light:z,floor:P,t:0,strength:0})}function A(S,P,L,B,D,z,X){let j=new Re(new pn(B,0),new bt({color:D,transparent:!0,roughness:1}));j.position.copy(S),i.add(j);let re={mesh:j,vel:P,life:L,max:L,kind:z,floor:X,ground:T(X,S.x,S.z)};return o.push(re),re}function y(S,P,L=6,B=1){for(let D=0;D<L;D++)A(S.clone().add(f((Math.random()-.5)*1.3,.18,(Math.random()-.5)*1.3)),f((Math.random()-.5)*.5,.35,(Math.random()-.5)*.5),.6+Math.random()*.6,.045*B,"#d5ccb4","dust",P)}function C(S,P){s.push({type:"harvest",mine:S.id,t:u}),y(S.pos,S.floor,4,.7);for(let L=0;L<6;L++){let B=A(S.pos.clone().add(f(0,.6,0)),f(),.65,.08,["","#9cebb3","#89d5f4","#edc479"][S.grade],"ore",S.floor);B.from=B.mesh.position.clone(),B.to=P.pos.clone().add(f(0,1.2,0))}S.feedbackT=.32}function U(S,P,L=1,B=!1,D=null){s.push({type:D||(B?"earthquake":"depletion"),floor:P,t:u}),h=Math.max(h,B?.62:.16*L);for(let z of r)(B||z.floor===P&&z.group.position.distanceTo(S)<18)&&(z.t=B?3.2:2.4,z.strength=L);y(S,P,B?16:8,2);for(let z=0;z<(B?22:10);z++)A(S.clone().add(f((Math.random()-.5)*8,3.5+Math.random()*2.5,(Math.random()-.5)*6)),f(0,-.3,0),3+Math.random(),.08+Math.random()*.1,"#afa48f","fall",P)}return{roots:n,meshes:l,groundMeshes:c,events:s,lamps:r,mural:_,harvest:C,tremor:U,dust:y,heightAt:T,source:t.source||t.summary,updateOcclusion(S,P,L){let B=$s(P);E.set(S.position,B.clone().add(f(0,1,0)).sub(S.position).normalize()),E.far=S.position.distanceTo(B);let D=L?new Set:new Set(E.intersectObjects(a,!1).map(z=>z.object));for(let z of a)for(let X of Array.isArray(z.material)?z.material:[z.material])X.opacity=(X.userData.baseOpacity??1)*(D.has(z)?.18:1),X.depthWrite=!D.has(z)&&(X.userData.baseDepthWrite??!0)},reset(){for(let S of o)S.mesh.removeFromParent(),S.mesh.geometry.dispose(),S.mesh.material.dispose();o.length=0,s.length=0,u=0,h=0;for(let S of r)S.t=0,S.swing.rotation.z=0;for(let S of l)delete S.userData.entity,S.visible=!S.userData.demoHidden&&S.userData.presentationKind!=="original-occupy-circle",S.position.y=0},update(S,P,L){u+=S,h=Math.max(0,h-S*.16);for(let B of r)B.t=Math.max(0,B.t-S),B.swing.rotation.z=Math.sin(u*13)*Math.min(B.t,1)*.17*B.strength;for(let B=o.length-1;B>=0;B--){let D=o[B];D.life-=S,D.mesh.visible=L||D.floor===P;let z=Math.min(1,1-D.life/D.max);D.kind==="ore"?(D.mesh.position.copy(D.from).lerp(D.to,z),D.mesh.position.y+=Math.sin(z*Math.PI)*.8):(D.kind==="fall"&&(D.vel.y-=S*10),D.mesh.position.addScaledVector(D.vel,S),D.mesh.position.y<D.ground+.04&&(D.mesh.position.y=D.ground+.04,D.vel.set(0,0,0))),D.mesh.material.opacity=Math.max(0,Math.min(1,D.life/.35)),D.life<=0&&(D.mesh.removeFromParent(),D.mesh.geometry.dispose(),D.mesh.material.dispose(),o.splice(B,1))}},get shake(){return h},get activeParticles(){return o.length}}}function zg(i,e,t){let n=new Map,s=new Map,r=1.1;return{route:(l,c)=>{let u=l.floor,h=t()[u],f=l.kind==="boss"?1.22:.5,d=(P,L)=>P+","+L,g=(P,L)=>{let B=u+":"+f+":"+P+","+L;return n.has(B)||n.set(B,i(u,P*r,L*r,f)),n.get(B)},x=(P,L,B,D)=>{let z=Math.hypot(B-P,D-L),X=Math.max(1,Math.ceil(z/.2));for(let j=1;j<=X;j++)if(!i(u,P+(B-P)*j/X,L+(D-L)*j/X,f))return!1;return!0},m=(P,L,B,D)=>{let z=d(P,L),X=d(B,D),j=u+":"+f+":"+(z<X?z+">"+X:X+">"+z);return s.has(j)||s.set(j,x(P*r,L*r,B*r,D*r)),s.get(j)},p=Math.round((l.pos.x-h.x)/r),M=Math.round((l.pos.z-h.z)/r),_=Math.round((c.x-h.x)/r),v=Math.round((c.z-h.z)/r);if(!g(_,v)){let P=null;for(let L=1;L<=6&&!P;L++)for(let B=-L;B<=L;B++)for(let D=-L;D<=L;D++)if(g(_+B,v+D)){let z=Math.hypot(B,D)+Math.hypot(_+B-p,v+D-M)*.001;(!P||z<P.score)&&(P={x:_+B,z:v+D,score:z})}if(!P)return[];_=P.x,v=P.z}let E=[],T=new Map,A=new Set,y=P=>{E.push(P);let L=E.length-1;for(;L>0;){let B=L-1>>1;if(E[B].f<=P.f)break;E[L]=E[B],L=B}E[L]=P},C=()=>{let P=E[0],L=E.pop();if(E.length){let B=0;for(;B*2+1<E.length;){let D=B*2+1;if(D+1<E.length&&E[D+1].f<E[D].f&&D++,E[D].f>=L.f)break;E[B]=E[D],B=D}E[B]=L}return P};y({x:p,z:M,g:0,f:Math.hypot(_-p,v-M),p:null});let U;for(let P=0;P<55e3&&E.length;P++){let L=C(),B=d(L.x,L.z);if(!A.has(B)){if(A.add(B),L.x===_&&L.z===v){U=L;break}for(let[D,z]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let X=L.x+D,j=L.z+z,re=d(X,j);if(A.has(re)||!g(X,j)||D&&z&&(!g(L.x+D,L.z)||!g(L.x,L.z+z))||!m(L.x,L.z,X,j))continue;let fe=L.g+Math.hypot(D,z);T.has(re)&&T.get(re)<=fe||(T.set(re,fe),y({x:X,z:j,g:fe,f:fe+Math.hypot(_-X,v-j),p:L}))}}}if(!U)return[];let S=[];for(;U.p;)S.push(e(u,U.x*r,U.z*r)),U=U.p;return S.reverse()},reset:()=>{n.clear(),s.clear()}}}function Yf(i,e){if(e===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Io||e===$a){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Io)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ou=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new Bu(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bu(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new dd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ai.extractUrlBase(e);o=Ai.resolveURL(c,this.path)}else o=Ai.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ws(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xg){try{o[ot.KHR_BINARY_GLTF]=new pd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Md(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new jf;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new md(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new gd;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new xd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Jf=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],xn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new es(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oi(u),c.distance=h;break;case"spot":c=new br(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),is(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},jf=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],xn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],xn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(r[0],r[1],r[2],xn),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(r[0],r[1],r[2],xn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},hd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},fd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},dd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new Ae,m=new O,p=new At,M=new O(1,1,1),_=new xr(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(m,p,M));for(let v in l)if(v==="_COLOR_0"){let E=l[v];_.instanceColor=new zs(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);gt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Xg="glTF",ol=12,Hg={JSON:1313821514,BIN:5130562},pd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ol),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ol,r=new DataView(e,ol),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Hg.JSON){let c=new Uint8Array(e,ol+o,a);this.content=n.decode(c)}else if(l===Hg.BIN){let c=ol+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=yd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=yd[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=zo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,xn,f)})})}},gd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},xd=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},ku=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,M=1-m,_=p-f+h;for(let v=0;v!==a;v++){let E=o[x+v+a],T=o[x+v+l]*u,A=o[g+v+a],y=o[g+v]*u;r[v]=M*E+_*T+m*A+p*y}return r}},ES=new At,vd=class extends ku{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ES.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vg={9728:Zt,9729:Kt,9984:Tc,9985:Ao,9986:Er,9987:Ii},Gg={33071:Fn,33648:lo,10497:Un},Zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AS={CUBICSPLINE:void 0,LINEAR:hr,STEP:ur},Kf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function Lr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function is(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function IS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PS(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$f(t.attributes):e=i.indices+":"+$f(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$f(i.targets[n]);return e}function $f(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _d(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function LS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var DS=new Ae,Md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ei(this.options.manager):this.textureLoader=new Pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ws(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Lr(r,a,s),is(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ai.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Zf[s.type],a=zo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new sn(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Zf[s.type],c=zo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(M);_||(x=new c(a,p*d,s.count*d/u),_=new go(x,d/u),t.cache.add(M,_)),m=new xo(_,l,f%d/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new sn(x,l,g);if(s.sparse!==void 0){let p=Zf.SCALAR,M=zo[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new M(o[1],_,s.sparse.count*p),T=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=E.length;A<y;A++){let C=E[A];if(m.setX(C,T[A*l]),l>=2&&m.setY(C,T[A*l+1]),l>=3&&m.setZ(C,T[A*l+2]),l>=4&&m.setW(C,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Vg[f.magFilter]||Kt,u.minFilter=Vg[f.minFilter]||Ii,u.wrapS=Gg[f.wrapS]||Un,u.wrapT=Gg[f.wrapT]||Un,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==Kt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new $t(x);m.needsUpdate=!0,f(m)}),t.load(Ai.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),is(h,o),h.userData.mimeType=o.mimeType||LS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Hs,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ki,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],xn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=St);let u=r.alphaMode||Kf.OPAQUE;if(u===Kf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ht){let h=r.emissiveFactor;a.emissive=new ve().setRGB(h[0],h[1],h[2],xn)}return r.emissiveTexture!==void 0&&o!==ht&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),is(h,r),t.associations.set(h,{materials:e}),r.extensions&&Lr(s,h,r),h})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=PS(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Wg(new nt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?RS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,M=c[d];if(m.mode===hi.TRIANGLES||m.mode===hi.TRIANGLE_STRIP||m.mode===hi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mr(x,M):new Re(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hi.TRIANGLE_STRIP?p.geometry=Yf(p.geometry,$a):m.mode===hi.TRIANGLE_FAN&&(p.geometry=Yf(p.geometry,Io));else if(m.mode===hi.LINES)p=new fa(x,M);else if(m.mode===hi.LINE_STRIP)p=new Si(x,M);else if(m.mode===hi.LINE_LOOP)p=new da(x,M);else if(m.mode===hi.POINTS)p=new vr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&IS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),is(p,r),m.extensions&&Lr(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Lr(s,h[0],r),h[0];let f=new ct;r.extensions&&Lr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Ot.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),is(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ae;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let _=0,v=f.length;_<v;_++){let E=f[_],T=d[_],A=g[_],y=x[_],C=m[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let U=n._createAnimationTracks(E,T,A,y,C);if(U)for(let S=0;S<U.length;S++)p.push(U[S])}let M=new vs(r,void 0,p);return is(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,DS)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,g=h[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ps:c.length>1?u=new ct:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),is(u,r),r.extensions&&Lr(n,u,r),r.matrix!==void 0){let h=new Ae;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),is(r,n),n.extensions&&Lr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(Au(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof Rn||f instanceof $t)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Js[r.path]===Js.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Js[r.path]){case Js.weights:u=wi;break;case Js.rotation:u=Ti;break;case Js.translation:case Js.scale:u=ji;break;default:n.itemSize===1?u=wi:u=ji;break}let h=s.interpolation!==void 0?AS[s.interpolation]:hr,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let x=new u(l[d]+"."+Js[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_d(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?vd:ku;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function FS(i,e,t){let n=e.attributes,s=new Bn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let u=_d(zo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=_d(zo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Wg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=yd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),is(i,e),FS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CS(i,e.targets,t):i})}var zu=class extends dr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new $i;e.deleteAttribute("uv");let t=new bt({side:on}),n=new bt,s=new oi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new xr(e,n,6),a=new gt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Re(e,Ho(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(e,Ho(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Re(e,Ho(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Re(e,Ho(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Re(e,Ho(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Re(e,Ho(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ho(i){return new Mr({color:0,emissive:16777215,emissiveIntensity:i})}var qg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ki=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},NS=new Qi(-1,1,1,-1,0,1),bd=class extends nt{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},US=new bd,Vo=class{constructor(e){this._mesh=new Re(US,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hu=class extends ki{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lo.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var al=class extends ki{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vu=class extends ki{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hu(qg),this.copyPass.material.blending=ai,this.timer=new La}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}al!==void 0&&(o instanceof al?n=!0:o instanceof Vu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wu=class extends ki{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ll={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xu=class extends ki{constructor(){super(),this.isOutputPass=!0,this.uniforms=Lo.clone(ll.uniforms),this.material=new So({name:ll.name,uniforms:this.uniforms,vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader}),this._fsQuad=new Vo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===za&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ae=i=>document.getElementById(i),NA=Math.PI*2,Mn=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),Yg=(i,e,t)=>i+(e-i)*t,Zn=new URLSearchParams(location.search).has("test"),dt=(i=0,e=0,t=0)=>new O(i,e,t),Qt=[dt(-25,8,20),dt(23,0,2),dt(-5,-8,-35)],ut=null,bn={chase:3.05,windup:{sweep:1.05,slam:1.65,roll:1.25},recovery:{sweep:1.45,slam:2.6,roll:2.4},rollSpeed:8.5,slamPulses:3,slamInterval:.95,slamRadius:4.6,aggro:12,occludedMemory:3.2},Vr={rollStops:0,losBlocks:0,slamPulses:0,attacks:{sweep:0,slam:0,roll:0},rivalRepositions:0},qn={harvest:Tn.harvestSeconds,spawn:Tn.formingSeconds,kneel:Tn.kneelSeconds,recover:2,stoneHP:190,bossHP:340,playerHP:200},Ts=oh(()=>Zn&&window.__testOptions?.rolls?.length?window.__testOptions.rolls.shift():Math.random()),xt=null,Ju=null,dl=zg((...i)=>Hr(...i),(...i)=>ni(...i),()=>Qt),Ms=innerWidth,Fr=innerHeight,js=0,kr=0,rn=new dr;rn.background=new ve("#302833");rn.fog=new ua("#60525a",.0038);var mi=new xu({canvas:ae("game"),antialias:!0,powerPreference:"high-performance"});mi.setPixelRatio(Math.min(devicePixelRatio,1.6));mi.shadowMap.enabled=!0;mi.shadowMap.type=Sc;mi.toneMapping=wr;mi.toneMappingExposure=.82;var cn=new Gt(30,16/9,1,1e3),ss=dt(-25,12,20),Dd=dt(0,20.5,17.1);cn.position.copy(ss).add(Dd);cn.lookAt(ss);var pl=new Gu(mi);pl.addPass(new Wu(rn,cn));pl.addPass(new Xu);var OS=new Aa("#eee6e6","#55444b",.7);rn.add(OS);var kn=new es("#fff5ee",1.1);kn.position.set(-24,45,22);kn.castShadow=!0;kn.shadow.mapSize.set(2048,2048);kn.shadow.camera.left=-27;kn.shadow.camera.right=27;kn.shadow.camera.top=27;kn.shadow.camera.bottom=-27;kn.shadow.camera.near=1;kn.shadow.camera.far=110;kn.shadow.normalBias=.035;kn.shadow.bias=-1e-4;rn.add(kn,kn.target);var Jg=new es("#c1bdcf",.25);Jg.position.set(30,10,-40);rn.add(Jg);var BS=new No(mi);rn.environment=BS.fromScene(new zu,.06).texture;rn.environmentIntensity=.25;var Yu=new Ri,Zg=new He,Kg=new zn(dt(0,1,0),0),Dr=dt(),zi=null,jg=[],Qg={},kS,ju=[],Wt=[],gn=[],hn=[],It=[],Xo=[],F,de,w,Ss=[],Go=[],Or=[],Zu=[],Xt="loading",Ln=!1,mn=!1,Nr=!0,Ed="high",at=0,Qu=0,e0=0,qo=0,Yo=0,Ad=0;var Rd=0,Cd=0,fi=new Set,un=new ct;rn.add(un);var Yn=Eg({ctx:()=>({boss:w,player:F,portals:gn,projectActors:zi,groupDynamic:un,environment:xt,time:at,mapView:mn,centers:Qt}),config:Tn.smallStone,world:ni,safeLanding:Od,pathTo:th,followPath:Pn,portalUse:hl,updateFlight:r0,visibleActor:Wo,flatdist:Ce,ring:zr,contactShadow:eh,setEntity:di,addLabel:Qs,flash:Kn,ringFx:Sn,floating:Es,localNotice:en,tone:Mt,onArrive:i=>{let e=Ts.snapshot().count,t=Ts.arrive(i);t.count>e&&KS(t.count),t.newlyTriggered&&o0(),Rs(!0)}}),yt=Cg({ctx:()=>({player:F,ally:de,enemies:It,groupDynamic:un,environment:xt,time:at,mapView:mn,visibleFloor:bs,centers:Qt,portals:gn}),actorTeam:i=>zd(i),world:ni,pathTo:th,routePortal:Bd,addLabel:Qs,setEntity:di,ringFx:Sn,localNotice:en}),Zo=[],Id=new Map,UA=new ht({color:"#8ce5bb",transparent:!0,opacity:.65,depthWrite:!1}),_n,Ur,zS=[];function t0(){if(!_n){_n=new(window.AudioContext||window.webkitAudioContext),Ur=_n.createGain(),Ur.gain.value=Nr?.21:0,Ur.connect(_n.destination);for(let[i,e]of[[55,.065],[82.4,.025]]){let t=_n.createOscillator(),n=_n.createGain();t.type="sine",t.frequency.value=i,n.gain.value=e,t.connect(n),n.connect(Ur),t.start(),zS.push(t)}}_n.resume()}function Mt(i="hit",e=0){if(!_n||!Nr)return;let t=_n.currentTime,n=_n.createGain(),s=_n.createStereoPanner();s.pan.value=Mn(e,-1,1),n.connect(s),s.connect(Ur);let r=.2;if(["hit","step","quake","rumble","rock","whoosh"].includes(i)){r=i==="quake"?1.8:i==="rumble"?1.35:i==="whoosh"?.5:.16;let o=_n.createBuffer(1,Math.floor(_n.sampleRate*r),_n.sampleRate),a=o.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=(Math.random()*2-1)*Math.exp(-u/a.length*(i==="quake"?4:9));let l=_n.createBufferSource();l.buffer=o;let c=_n.createBiquadFilter();c.type="lowpass",c.frequency.value=i==="quake"?210:i==="rumble"?105:i==="step"?480:1800,l.connect(c),c.connect(n),n.gain.setValueAtTime(i==="step"?.22:i==="quake"?1.5:i==="rumble"?.55:.8,t),l.start(),l.stop(t+r)}else{r=.85;let o=_n.createOscillator();o.type="sine",o.frequency.setValueAtTime(i==="ore"?740:i==="alert"?270:i==="portal"?390:i==="win"?880:550,t),i==="portal"&&o.frequency.exponentialRampToValueAtTime(830,t+.5),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.6,t+.015),n.gain.exponentialRampToValueAtTime(.001,t+r),o.connect(n),o.start(),o.stop(t+r)}setTimeout(()=>{n.disconnect(),s.disconnect()},(r+1)*1e3)}function Fd(i,e="",t=7){ae("toast").querySelector("strong").textContent=i,ae("toast").querySelector("p").textContent=e,ae("toast").querySelector("p").hidden=!e,Qu=at+t,ae("toast").classList.add("visible")}function ni(i,e,t,n=0){let s=e+Qt[i].x,r=t+Qt[i].z;return dt(s,(xt?.heightAt?xt.heightAt(i,s,r):Qt[i].y)+n,r)}function Ce(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function Qs(i,e,t=""){let n=document.createElement("div");if(n.className="world-label "+t,n.innerHTML='<div class="name"></div><div class="life"><i></i></div>',i.kind==="stone"&&(n.classList.add("stone"),n.insertAdjacentHTML("beforeend",'<div class="stone-bubble"></div>')),i.kind==="earth-pulse"&&n.insertAdjacentHTML("beforeend",'<div class="earth-capture"><i></i></div>'),ws(i)){n.classList.add("earth-objective"),n.insertAdjacentHTML("beforeend",'<span class="earth-pointer" aria-hidden="true">◆</span>'),n.setAttribute("role","button"),n.tabIndex=0,n.title="点击前往，跨层会自动寻找起跳台";let r=()=>{Xt==="play"&&!Ln&&ih(i)&&rs(F,i)};n.onclick=r,n.onkeydown=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),r())}}i.kind==="mine"&&n.insertAdjacentHTML("beforeend",'<div class="mine-status"></div><div class="mine-capture"><i></i></div><div class="mine-production"><i></i></div>'),ae("labels").append(n);let s={entity:i,el:n,text:e,kind:t};return Zu.push(s),i.labelView=s,s}function Nd(i,e,t=1){let n=Qg[i].clone(!0);return n.position.copy(e),n.scale.set(-t,t,t),n.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),un.add(n),n}var Sd;function eh(i){if(!Sd){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,2,32,32,31);s.addColorStop(0,"rgba(0,0,0,.6)"),s.addColorStop(.45,"rgba(0,0,0,.38)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),Sd=new yr(t)}let e=new Re(new Vs(i*2,i*2),new ht({map:Sd,transparent:!0,depthWrite:!1,color:"#081b18"}));return e.rotation.x=-Math.PI/2,e}function zr(i,e="#89d8bc",t=.65){let n=new ri(i-.04,i,64),s=new ht({color:e,side:St,transparent:!0,opacity:t,depthWrite:!1}),r=new Re(n,s);return r.rotation.x=-Math.PI/2,r}function di(i,e){i.traverse(t=>{t.userData.entity=e})}function wd(i,e,t,n,s){let r=ni(t,n,s),o=Ir(zi.hero),a=o.root;a.position.copy(r),un.add(a),a.traverse(c=>{c.isMesh&&(c.material=c.material.clone(),c.material.name.includes("teal")&&c.material.color.set(e==="enemy"?"#a53c38":e==="ally"?"#507c9f":"#388d81"))});let l={id:i,kind:e,floor:t,pos:r,root:a,hp:e==="player"?qn.playerHP:e==="ally"?180:100,maxHp:e==="player"?qn.playerHP:e==="ally"?180:100,radius:.34,speed:e==="player"?4.15:3.5,path:[],target:null,harvest:null,attackCD:0,cd:{q:0,dash:0,shield:0},shield:0,dash:0,invul:0,face:0,walk:0,ore:[0,0,0],depletionHintShown:!1,hurtAt:-99,portalCD:0,moveV:dt(),aiTimer:0,dead:!1,transit:null,landingT:0};return l.visual=o,l.visualLast=r.clone(),l.contact=eh(.78),l.contact.position.copy(r).y+=.035,un.add(l.contact),l.pivots={},a.traverse(c=>{["ArmL","ArmR","LegL","LegR"].includes(c.name)&&(l.pivots[c.name]={o:c,rot:c.rotation.clone()})}),l.circle=zr(.52,e==="player"?"#bcebc1":e==="enemy"?"#ed775e":"#7ab8e4"),l.circle.position.copy(r).y+=.05,un.add(l.circle),di(a,l),Qs(l,e==="player"?"青岚 · 你":e==="ally"?"执剑 · 同队":"赤霄 · 敌方",e==="ally"?"ally":""),l}function n0(i){let e=new ct;return e.position.copy(i),un.add(e),e}function i0(i,e){i.sourceMeshes=xt.meshes.filter(e);for(let t of i.sourceMeshes)t.userData.entity=i}function HS(i,e,t,n,s){let r=ni(i,e,t),o={id:"mine"+Wt.length,kind:"mine",floor:i,pos:r,grade:n,remaining:s,total:s,radius:1,occupationRadius:Tn.occupationRadius[n-1]};return o.occupation=_u(Tn.occupation),o.visual=Ju.create(o),o.root=o.visual.root,un.add(o.root),o.contact=eh(1.42),o.contact.position.copy(r).y+=.025,un.add(o.contact),o.circle=og(o,xt.heightAt),un.add(o.circle),di(o.root,o),Qs(o,"","mine"),Wt.push(o),o}function VS(i,e,t,n,s,r,o){let a=ut.portals[gn.length],l=ni(i,e,t),c=n0(l),u={...a,id:"portal"+gn.length,kind:"portal",floor:i,pos:l,root:c,to:n,landing:[s,r],label:o,radius:1.25};return i0(u,h=>String(h.userData.sourceId)===String(a.sourceId)),u.fx=zr(1.28,u.canDepart===!1?"#e9ba85":"#74d9d0",u.canDepart===!1?.4:.7),u.fx.position.copy(l).y+=.28,un.add(u.fx),di(c,u),di(u.fx,u),Qs(u,o),gn.push(u),u}function GS(i,e,t,n){let s=ni(0,i,e),r=n0(s),o=ut.exits.find(u=>u.type===t),a=dt(o.spawn[0]-i,0,o.spawn[1]-e).normalize(),l={id:"exit-"+t,kind:"exit",floor:0,pos:s,root:r,label:n,type:t,blocked:!1,hp:qn.stoneHP,maxHp:qn.stoneHP,radius:1.35},c={metal:"ZC_Tkf_JG_Chuansongzhen_MJ (1)",wood:"ZC_Tkf_JG_Chuansongzhen_JM",fire:"ZC_Tkf_JG_Chuansongzhen_JH"}[t];return i0(l,u=>u.userData.prefabRoot===c),l.stone=Nd("barrier",s.clone().add(a),1),l.stone.visible=!1,di(r,l),di(l.stone,l),Qs(l,n),hn.push(l),l}function WS(){let i=ni(2,...ut.bossSpawn.p),e=Ir(zi.boss),t=e.root;t.position.copy(i),un.add(t);let n={id:"boss",kind:"boss",floor:2,pos:i,root:t,radius:1.2,hp:qn.bossHP,maxHp:qn.bossHP,state:"sleep",stateT:0,knocks:0,lootAvailable:!1,lootTaken:0,defense:1,path:[],target:null,speed:2.7,attackCD:1,attackCount:0,portalCD:0,patrolT:0,patrolStep:0,patrolChoices:[0,0,0],transit:null,landingT:0,followPortal:null,attack:null,face:0,walk:0,parts:[],pivots:{},hitActors:new Set};n.visual=e,n.visualLast=i.clone(),t.traverse(o=>{o.isMesh&&(Array.isArray(o.material)?o.material=o.material.map(a=>a.clone()):o.material=o.material.clone(),n.parts.push({o,p:o.position.clone(),q:o.quaternion.clone(),off:dt((Math.random()-.5)*10,-2-Math.random()*2,(Math.random()-.5)*10)})),["GolemArmL","GolemArmR","GolemLegL","GolemLegR"].includes(o.name)&&(n.pivots[o.name]={o,rot:o.rotation.clone()})}),t.visible=!1,di(t,n),n.contact=eh(2.25),n.contact.position.copy(i).y+=.036,un.add(n.contact),n.circle=zr(2.65,"#d5b05f",.6),n.circle.position.copy(i).y+=.06,n.circle.visible=!1,un.add(n.circle),n.reward=Nd("ore3",i,.8),n.reward.visible=!1,di(n.reward,n),n.core=new ct;let s=new Re(new pn(.6,2),new bt({color:"#53bca1",emissive:"#0c6f58",emissiveIntensity:.6,metalness:.2,roughness:.35}));s.position.y=.75,n.core.add(s);let r=zr(1.2,"#92b99b",.5);return r.position.y=.03,n.core.add(r),n.core.position.copy(i),un.add(n.core),di(n.core,n),n.formation=Dg(n,{groupDynamic:un,environment:xt}),Qs(n,"聚灵真身","boss"),n}function XS(){yt.reset(),Zo=[],w?.formation?.dispose(),Yn.reset(),xt?.reset(),Ju?.reset(),dl.reset(),nh();for(let i of Ss)Br(i.mesh),i.rock&&Br(i.rock);for(let i of Go)Br(i.mesh);for(let i of Zu)i.el.remove();Zu=[];for(let i of Or)i.el.remove();Or=[],un.clear(),Ss=[],Go=[],Wt=[],gn=[],hn=[],It=[],Xo=[]}function ml(i=!0){XS(),Ts=oh(()=>Zn&&window.__testOptions?.rolls?.length?window.__testOptions.rolls.shift():Math.random()),at=0,Qu=0,e0=0,Yo=0,Ad=0,qo=0,Rd=0,Cd=0,Ln=!1,mn=!1,fi.clear(),Id.clear(),ae("toast").classList.remove("visible");for(let s of ut.mines)HS(s.floor,...s.p,s.grade,s.count);for(let s of ut.portals)VS(s.floor,...s.p,s.to,...s.landing,s.label);for(let s of ut.exits)GS(...s.p,s.type,s.label);let e=ae("entry-choice").value,t=ut.exits.find(s=>s.type===e)||ut.exits[i?Math.floor(Math.random()*ut.exits.length):0],n=t.spawn;F=wd("player","player",0,...n),de=wd("ally","ally",0,...t.allySpawn),de.tether=!1,F.entryType=t.type,F.entryLabel=t.label,F.face=de.face=Math.atan2(n[0]-t.p[0],n[1]-t.p[1])+Math.PI,It=ut.enemySpawns.map((s,r)=>wd("rival"+(r+1),"enemy",s.floor,...s.p)),It[0].aiTimer=30,It[1].aiTimer=35,w=WS(),yt.init({startIndex:Zn?window.__testOptions?.earthStartIndex:void 0}),ss.copy(F.pos),Xt=i?"play":"menu",ae("menu").classList.toggle("hidden",i),ae("hud").classList.toggle("hidden",!i),ae("ending").classList.add("hidden"),ae("pause").classList.add("hidden"),i&&t0(),Rs(!0),Zn&&(window.__testNeedsFrame=!0)}function ul(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&i<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function s0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=Mn(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r||1));return Math.hypot(i-t[0]-o*s,e-t[1]-o*r)}function Ud(i,e,t,n=.1){let s=ju[i];for(let[r,o,a]of s.blockers)if(Math.hypot(e-r,t-o)<a+n)return!0;for(let{poly:r,minX:o,maxX:a,minZ:l,maxZ:c}of s._obstacleBounds||(s._obstacleBounds=(s.obstaclePolygons||[]).map(u=>({poly:u,minX:Math.min(...u.map(h=>h[0])),maxX:Math.max(...u.map(h=>h[0])),minZ:Math.min(...u.map(h=>h[1])),maxZ:Math.max(...u.map(h=>h[1]))}))))if(!(e<o-n||e>a+n||t<l-n||t>c+n)){if(ul(e,t,r))return!0;for(let u=0;u<r.length;u++)if(s0(e,t,r[u],r[(u+1)%r.length])<n)return!0}for(let r of hn)if(r.floor===i&&r.blocked&&Math.hypot(e-(r.stone.position.x-Qt[i].x),t-(r.stone.position.z-Qt[i].z))<1.35+n)return!0;return!1}function qS(i,e,t,n){return(i._surfaceBounds||(i._surfaceBounds=(i.surfaces||[]).map(r=>({rings:r,minX:Math.min(...r[0].map(o=>o[0])),maxX:Math.max(...r[0].map(o=>o[0])),minZ:Math.min(...r[0].map(o=>o[1])),maxZ:Math.max(...r[0].map(o=>o[1])),edges:r.flatMap(o=>o.map((a,l)=>{let c=o[(l+1)%o.length];return{a,b:c,minX:Math.min(a[0],c[0]),maxX:Math.max(a[0],c[0]),minZ:Math.min(a[1],c[1]),maxZ:Math.max(a[1],c[1])}}))})))).some(r=>e<r.minX+n||e>r.maxX-n||t<r.minZ+n||t>r.maxZ-n||!ul(e,t,r.rings[0])||r.rings.slice(1).some(o=>ul(e,t,o))?!1:!r.edges.some(o=>e>=o.minX-n&&e<=o.maxX+n&&t>=o.minZ-n&&t<=o.maxZ+n&&s0(e,t,o.a,o.b)<n-1e-7))}function Hr(i,e,t,n=.35){let s=ju[i];if(s.surfaces){if(!qS(s,e,t,n))return!1}else if(s.polygons){for(let[r,o]of[[0,0],[n,0],[-n,0],[0,n],[0,-n]])if(!s.polygons.some(a=>ul(e+r,t+o,a)))return!1}else{let r=s.radius-.5-n;if(e*e/(r*r)+t*t/(r*.85)**2>1)return!1}if((s.holes||[]).some(r=>ul(e,t,r))||Ud(i,e,t,n+.07))return!1;for(let r of Wt)if(r.floor===i&&Math.hypot(e-(r.pos.x-Qt[i].x),t-(r.pos.z-Qt[i].z))<r.radius+n*.65)return!1;return!0}function Hi(i,e,t,n=.05){let s=Ce(e,t),r=Math.max(2,Math.ceil(s/.25)),o=Qt[i];for(let a=1;a<r;a++){let l=a/r,c=Yg(e.x,t.x,l)-o.x,u=Yg(e.z,t.z,l)-o.z;if(Ud(i,c,u,n))return!1}return!0}function th(i,e){return dl.route(i,e)}function Bt(i,e){st(i)||(i.path=th(i,e))}function Ku(i,e,t,n=i.speed){if(st(i))return!1;let s=Qt[i.floor];if(e.lengthSq()<1e-4)return!1;e=e.clone().normalize();let r=i.pos.clone().addScaledVector(e,n*t),o=i.kind==="boss"?1:.32,a=!1;return Hr(i.floor,r.x-s.x,i.pos.z-s.z,o)&&(i.pos.x=r.x,a=!0),Hr(i.floor,i.pos.x-s.x,r.z-s.z,o)&&(i.pos.z=r.z,a=!0),a&&(xt?.heightAt&&(i.pos.y=xt.heightAt(i.floor,i.pos.x,i.pos.z)),i.face=Math.atan2(e.x,e.z)+Math.PI,i.walk+=t*n),a}function Pn(i,e,t){if(!i.path.length)return!1;for(;i.path.length&&Ce(i.pos,i.path[0])<.1;)i.path.shift();if(!i.path.length)return!1;let n=i.path[0].clone().sub(i.pos),s=t||i.speed;return Ku(i,n,e,Math.min(s,n.length()/Math.max(e,.001)))}function Od(i,e,t,n){let s=i.kind==="boss"?1.04:.34;if(Hr(e,t,n,s))return ni(e,t,n);for(let r=.35;r<=4.2;r+=.25)for(let o=0;o<24;o++){let a=o*Math.PI/12,l=t+Math.cos(a)*r,c=n+Math.sin(a)*r;if(Hr(e,l,c,s))return ni(e,l,c)}throw new Error("No safe portal landing on floor "+e)}var Td=new Ri;function pi(i){return i?.canDepart!==!1}function st(i){return!!i?.transit}function bs(i){return mn||i===F.floor||i===F.transit?.toFloor}function Wo(i){return bs(i.floor)||st(i)&&bs(i.transit.toFloor)}function YS(i,e,t,n,s){Td.set($s(dt(n,t+25,s)),dt(0,-1,0)),Td.far=40;let r=xt.meshes.filter(o=>[i,e].includes(o.userData.floor)&&o.userData.presentationKind!=="effect"&&o.userData.presentationKind!=="original-occupy-circle"&&!o.userData.prefabRoot);return Td.intersectObjects(r,!1)[0]?.point.y}function hl(i,e){if(i.dead||st(i)||i.portalCD>0||i.floor!==e.floor||!pi(e))return!1;let t=i.floor,n=Od(i,e.to,...e.landing),s=Math.max(i.pos.y,n.y);return i.transit={...Ug(i.pos,n,(r,o)=>YS(t,e.to,s,r,o)),fromFloor:t,toFloor:e.to,portalId:e.id},i.harvest=null,i.target=null,i.path=[],i.dash=0,i.swing=0,i.landingT=0,i.face=Math.atan2(n.x-i.pos.x,n.z-i.pos.z)+Math.PI,Sn(i.pos,1.7,"#a3ead3",.65),xt.dust(i.pos,t,6,.8),Mt("whoosh"),i===F&&(!["sleep","warning","forming","dead"].includes(w.state)&&w.floor===t&&Ce(w.pos,e.pos)<11&&(w.followPortal=e),!de.dead&&de.floor===t&&!st(de)&&(de.harvest=null,de.target=null,de.path=[],Ce(de.pos,e.pos)<6?(hl(de,e),de.transit&&(de.transit.anticipation+=.12,de.transit.duration+=.12)):(de.followJump=e,Bt(de,e.pos)))),!0}function r0(i,e){if(i.landingT=Math.max(0,(i.landingT||0)-e),!i.transit)return;let t=i.transit;Og(t,e,i.pos)&&(i.floor=t.toFloor,i.transit=null,i.portalCD=i===w?3:2,i.landingT=.24,i.path=[],i.target=null,i===w&&(w.followPortal=null,w.lastSeen=null,w.patrolT=0,w.patrolStep++),Sn(i.pos,1.35,"#a3ead3",.45),xt.dust(i.pos,i.floor,7,1.1),i===F&&Mt("step"))}function Bd(i,e){if(i===e)return null;let t=[{floor:i,first:null}],n=new Set([i]);for(;t.length;){let s=t.shift();for(let r of gn.filter(o=>o.floor===s.floor&&pi(o))){let o=s.first||r;if(r.to===e)return o;n.has(r.to)||(n.add(r.to),t.push({floor:r.to,first:o}))}}return null}function Sn(i,e,t="#c5de9b",n=.6){let s=zr(.8,t,.8);s.position.copy(i).y+=.1,rn.add(s),Ss.push({mesh:s,life:n,max:n,kind:"ring",r:e})}function Kn(i,e="#e6c781",t=12){for(let n=0;n<t;n++){let s=new ht({color:e,transparent:!0,opacity:1}),r=new Re(new pn(.055+Math.random()*.08,0),s);r.position.copy(i).y+=.65,rn.add(r),Ss.push({mesh:r,life:.5+Math.random()*.3,max:.8,kind:"particle",vel:dt((Math.random()-.5)*5,1+Math.random()*4,(Math.random()-.5)*5)})}}function Es(i,e,t="#f3ce85",n=1){let s=document.createElement("div");s.className="float-number",s.style.color=t,s.textContent=e,ae("floaters").append(s),Or.push({el:s,pos:i.clone().add(dt(0,1.9,0)),life:n,max:n})}function en(i,e,t="#f3ce85"){if(!F||i.floor!==F.floor||Ce(i.pos,F.pos)>24)return;let n=i.id+":"+e;at-(Id.get(n)??-1/0)<2.6||(Id.set(n,at),Es(i.pos,e,t,2.6))}function $u(i,e,t="#e99960"){let n=new ct,s=new Re(new ga(e,48),new ht({color:t,transparent:!0,opacity:.13,depthWrite:!1,side:St}));return s.rotation.x=-Math.PI/2,n.add(s),n.add(zr(e,t,.8)),n.position.copy(i).y+=.06,rn.add(n),n}function Br(i){i&&(i.removeFromParent(),i.traverse?.(e=>{e.isMesh&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}))}function ZS(i,e){let t=Ts.harvest(i);t?.count&&(Yn.spawn(i,t.count,e),e===F&&!F.depletionHintShown&&(F.depletionHintShown=!0,Fd("小石头人正奔向核心","及时点击击杀，可在矿圈内拦截；抵达三层的石灵将汇聚成形。",7)),Rs(!0))}function KS(i){let e=[[-.65,.35,0],[.65,.35,0],[-.7,.75,.1],[.7,.75,.1],[-.45,1.1,0],[.45,1.1,0],[0,1.5,0],[-.55,1.7,0],[.55,1.7,0],[-1.1,1.5,0],[1.1,1.5,0],[-1.35,1.05,.1],[1.35,1.05,.1],[0,2.15,0],[0,2.65,0]],t=Math.min(e.length-1,Math.floor((i-1)/Tn.coreThreshold*e.length)),n=new Re(new pn(.43,0),new bt({color:"#897f68",roughness:.95,emissive:"#345448",emissiveIntensity:.2}));n.position.fromArray(e[t]),n.rotation.set(i*.8,i*.37,i*.19),n.scale.set(1.1,.85,.9),n.castShadow=!0,w.core.add(n),(w.accumulated||(w.accumulated=[])).push(n),Kn(w.core.position.clone().add(n.position),"#a3d9aa",5),xt.events.push({type:"core-arrival",count:i,t:at})}function o0(){w.state==="sleep"&&(Ts.stop(),w.state="warning",w.stateT=Tn.warningSeconds,w.path=[],Mt("rumble"),xt.tremor(F.pos,F.floor,.8,!1,"warning"),Rs(!0))}function $S(){w.state="forming",w.stateT=qn.spawn,w.core.visible=!1,w.formation.start(),Mt("rumble"),Sn(w.pos,5.8,"#d8c892",2.5),xt.events.push({type:"formation",t:at})}function JS(){Yo=2.2,Mt("quake"),xt.tremor(F.pos,F.floor,2.2,!0);for(let i of hn)i.pending=!0,i.fall=1.05,i.stone.visible=!0,i.stone.position.y=i.pos.y+8;Fd("矿脉震荡，守护石灵已苏醒","",8)}function a0(i){return i.kind==="earth-pulse"?3:i.kind==="earth-spirit"?1.8:i.kind==="mine"?i.occupationRadius:i===w?3.5:2.7}function kd(i,e){if(!(!e||st(i)||i.harvest||i.dead||e.floor!==i.floor)){if(e.kind==="mine"){e.remaining>0&&Ce(i.pos,e.pos)<=e.occupationRadius&&(i.path=[],i===F&&en(e,Mu(e)));return}e!==w||w.state!=="kneel"||!w.lootAvailable||Ce(i.pos,e.pos)>3.3||(i.path=[],i.harvest={target:e,progress:0,duration:3.2},i===F&&Mt("ore"))}}function $n(i,e=!1){yt.cancelPickup(i),i.harvest&&i===F&&e&&Es(i.pos,"采集中断","#f4a383"),i.harvest=null}function jS(i){let e=i.harvest;e&&(i.harvest=null,!(e.target!==w||w.state!=="kneel"||!w.lootAvailable)&&(w.lootAvailable=!1,w.lootTaken++,i.ore[2]++,xt.harvest({id:"boss",pos:w.pos,grade:3,floor:w.floor},i),i===F?(Mt("ore"),Es(i.pos,"+1 三级灵矿")):(F.harvest?.target===w||F.target===w)&&en(w,"灵矿已被其他修士采走"),i.target=null,Rs(!0)))}var zd=i=>i.kind==="enemy"?"rival":"player";function QS(i){return[F,de,...It].filter(e=>!e.dead&&!st(e)&&e.floor===i.floor&&Ce(e.pos,i.pos)<=i.occupationRadius)}function e1(i){for(let e of Wt){let t=QS(e),n=e.playerInside,s=t.includes(F)&&e.remaining>0;e.playerInside=s,s&&!n&&(Mt("portal"),e.highlightUntil=at+.6);let r=e.occupation.snapshot(),o=e.occupation.step(i,t.map(l=>({id:l.id,team:zd(l)})),e.remaining>0),a=e.occupation.snapshot();r.captureProgress>0&&!a.captureProgress&&r.owner===a.owner&&o.every(l=>l.type!=="owner-changed")&&en(e,"占领读条中断","#f4a383");for(let l of o){if(l.type==="owner-changed"&&(e.highlightUntil=at+.8,en(e,Oo(l.team)+"已占领","#d3ebc2"),s&&Mt("ore")),l.type!=="reward"||e.remaining<=0)continue;let c=t.filter(u=>l.recipients.includes(u.id));if(c.length){e.remaining--,e.visual.setRemaining(e.remaining);for(let u of c)u.ore[e.grade-1]++,xt.harvest(e,u),Wo(u)&&Ce(u.pos,F.pos)<18&&Es(u.pos,"+1 "+["一级","二级","三级"][e.grade-1]+"灵矿",el[e.grade]);if(c.includes(F)&&Mt("ore"),ZS(e,c.includes(F)?F:c[0]),e.remaining===0){en(e,"灵矿已采尽"),xt.dust(e.pos,e.floor,12,1.4);for(let u of t)u.target===e&&(u.target=null,u.path=[])}xt.events.push({type:"mine-output",mine:e.id,recipients:c.map(u=>u.id),remaining:e.remaining,t:at})}}}}function As(i,e,t){if(!(!i||st(i)||i.dead||i.hp<=0)){if(i.kind==="stone"){Yn.damage(i,e,t);return}if(t===w&&(e*=1+w.knocks*.15),i===w){l0(e,t);return}if(i.kind==="exit"){if(!i.blocked)return;i.hp=Math.max(0,i.hp-e),Kn(i.stone.position,"#d6c7a0",5),Mt("rock"),Es(i.stone.position,Math.round(e),"#e4c98c"),i.hp<=0&&(i.blocked=!1,i.cleared=!0,dl.reset(),i.stone.visible=!1,Sn(i.pos,2,"#b7e3ad",1),Mt("quake"),en(i,i.label+"已打通"),F.target=null);return}if(!(i.invul>0)&&(e*=(i.shield>0?.4:1)*yt.damageMultiplier(i),i.hp=Math.max(0,i.hp-e),i.hurtAt=at,$n(i,!0),Es(i.pos,Math.round(e),i===F?"#ffb09b":"#efd594"),Kn(i.pos,"#dac49d",4),i===F&&(qo=.4,Mt("hit")),i.hp<=0)){if(i.dead=!0,i.deadAt=at,i.path=[],i.root.rotation.z=0,i.circle.visible=!1,i===F){f0(!1);return}if(i.kind==="enemy"){let n=[...i.ore];if(n.reduce((s,r)=>s+r,0)>0){let s=Nd("ore3",i.pos,.38),r={kind:"bag",id:"bag"+Xo.length,pos:i.pos.clone(),floor:i.floor,ore:n,root:s};di(s,r),Qs(r,"遗落灵矿"),Xo.push(r)}en(i,"击退敌方修士")}else en(F,"队友已倒下")}}}function l0(i,e){if(["sleep","warning","forming","dead","falling","kneel"].includes(w.state))return;let t=1/[1,.83,.68][Math.min(2,w.knocks)],n=i*t;if(w.hp=Math.max(w.state==="recover"?1:0,w.hp-n),w.target=e?.floor===w.floor?e:w.target,Es(w.pos,Math.round(n),"#ffe0a0"),Kn(w.pos.clone().add(dt(0,2,0)),"#8bddc5",6),Mt("rock"),w.hp<=0){w.knocks++,w.state="falling",w.stateT=zi.boss.clips.hit1_1.duration,w.path=[],w.attack=null,w.lootAvailable=!1,w.circle.visible=!1,nh(),F.target===w&&(F.target=null);for(let s of It)s.target===w&&(s.target=null);Sn(w.pos,3.6,"#edcf8a",1),Mt("quake"),Rs(!0)}}function Pd(i,e){if(i.attackCD>0||!e||e.dead||e.kind==="stone"&&!e.targetable||i.dead||st(i)||st(e))return;let t=e===w?3.8:e.kind==="exit"?3.1:2.6;if(i.floor!==e.floor||Ce(i.pos,e.kind==="exit"?e.stone.position:e.pos)>t)return;if(e.kind!=="exit"&&!Hi(i.floor,i.pos,e.pos)){Vr.losBlocks++;return}i.attackCD=i.kind==="player"?.62:i.kind==="ally"?.85:1.1,i.swing=.58,i.face=Math.atan2(e.pos.x-i.pos.x,e.pos.z-i.pos.z)+Math.PI,$n(i),As(e,i===F?18:i===de?10:9,i),Sn(i.pos.clone().lerp(e.pos,.5),.85,i.kind==="enemy"?"#df8c76":"#a9efd0",.22),Mt("whoosh")}function Hd(){if(Xt!=="play"||Ln||st(F)||F.cd.q>0)return;F.cd.q=5.5;let i=F.target;(!i||st(i)||!["boss","enemy","exit","stone"].includes(i.kind))&&(i=[...Yn.all().filter(n=>n.targetable),w,...It,...hn.filter(n=>n.blocked)].filter(n=>n.floor===F.floor&&!n.dead&&!st(n)&&(n!==w||!["sleep","dead","kneel"].includes(w.state))).sort((n,s)=>Ce(n.pos,F.pos)-Ce(s.pos,F.pos))[0]),$n(F,!0),F.swing=.58;let e=(i&&Ce(i.pos,F.pos)<12?i.pos:Dr).clone().sub(F.pos);e.y=0,e.lengthSq()<.01&&e.set(0,0,-1),e.normalize(),F.face=Math.atan2(e.x,e.z)+Math.PI;let t=new Re(new pn(.22,1),new ht({color:"#a4ffe0"}));t.scale.set(1,.6,2.5),t.position.copy(F.pos).y+=.9,t.quaternion.setFromUnitVectors(dt(0,0,1),e),rn.add(t),Go.push({mesh:t,dir:e,life:.85,speed:15,owner:F,floor:F.floor,hit:new Set}),Mt("whoosh")}function c0(){Xt!=="play"||Ln||st(F)||F.cd.dash>0||(F.cd.dash=4.2,F.dash=.22,F.invul=.42,F.dashDir=g0(),F.dashDir.lengthSq()<.01&&(F.dashDir=dt(-Math.sin(F.face),0,-Math.cos(F.face))),$n(F,!0),F.earthGoal=null,F.target=null,F.path=[],Sn(F.pos,1.2,"#abf4d7",.35),Mt("whoosh"))}function u0(){Xt!=="play"||Ln||st(F)||F.cd.shield>0||(F.cd.shield=13,F.shield=3,F.hp=Math.min(F.maxHp,F.hp+18),Sn(F.pos,1.25,"#b8e7f3",1.2),Mt("portal"))}function rs(i,e){if(!(!e||st(i)||st(e)||i.dead)){if(ws(e)){if(e.dead||e.kind==="earth-pulse"&&!e.active)return;$n(i),i.earthGoal=e,i.target=e,i.path=[];return}if(i.earthGoal=null,i.floor===e.floor)if(e.kind==="mine"){if(e.remaining<=0){en(i,"该矿点已采空");return}$n(i),i.target=e,Bt(i,e.pos)}else if(e===w){if(w.state==="sleep"){en(i,"守护石灵尚未苏醒");return}i.target=e,Bt(i,e.pos)}else if(e.kind==="portal"||e.kind==="exit"||e.kind==="bag"){if(e.kind==="portal"&&!pi(e)){i===F&&en(F,"此处仅供落地，请从三层起跳");return}i.target=e,Bt(i,e.kind==="exit"&&e.blocked?e.stone.position:e.pos)}else(e.kind==="enemy"||e.kind==="stone"&&e.targetable)&&!e.dead&&($n(i),i.target=e,Bt(i,e.pos))}}function h0(){return[...yt.entities().filter(e=>e.active||e.available),...Wt.filter(e=>e.remaining>0),...gn.filter(pi),...hn,...Xo,...w.state==="kneel"&&w.lootAvailable?[w]:[]].filter(e=>e.floor===F.floor&&Ce(F.pos,e.pos)<=a0(e)).sort((e,t)=>Ce(F.pos,e.pos)-Ce(F.pos,t.pos))[0]}function t1(){if(Xt!=="play"||Ln||st(F))return;if(F.harvest||yt.pickupFor(F)){$n(F),F.target=null,F.earthGoal=null;return}let i=h0();F.target&&F.target.floor===F.floor&&Ce(F.pos,F.target.pos)<=a0(F.target)&&(i=F.target),i?.kind==="mine"&&i.remaining>0?(F.target=i,kd(F,i)):i&&rs(F,i)}function f0(i){Xt==="play"&&(yt.endRun(),Zo=[],Xt=i?"won":"lost",F.path=[],$n(F),ae("ending").classList.remove("hidden"),ae("ending-title").textContent=i?"带矿归来":"此行受挫",ae("ending-kicker").textContent=i?"撤离成功":"修士倒下",ae("ending-description").textContent=i?"你打通出口，带着采得的灵矿离开了土区域。":"矿区仍在变化。重新开始，换一种采矿与撤离节奏。",ae("ending-loot").innerHTML=F.ore.map((e,t)=>`<div><span>${["一级灵矿","二级灵矿","三级灵矿"][t]}</span><b>${e}</b></div>`).join(""),ae("ending-facts").textContent=`用时 ${Math.floor(at/60)}分${Math.floor(at%60)}秒 · 真身击倒 ${w.knocks}/3 · 打通 ${hn.filter(e=>e.cleared).length} 个外部入口${i?" · 不必打满三次也能结束这一趟":""}`,Mt(i?"win":"alert"))}function fl(i,e){let t=i.target;if(!t)return;if(t.floor!==i.floor||t.dead||st(t)||t===w&&w.state==="dead"||t.kind==="mine"&&t.remaining<=0){let r=i.harvest?.target;r===t&&(i.harvest=null),i.target=r&&r!==t?r:null,i.path=[],i.harvest&&(i.harvest.paused=!1);return}let n=t.kind==="exit"&&t.blocked?t.stone.position:t.pos,s=Ce(i.pos,n);if(ws(t)){if(t.kind==="earth-pulse"&&!t.active||t.kind==="earth-spirit"&&!t.available){i.target=null,i.earthGoal=null,i.path=[];return}let r=t.kind==="earth-pulse"?1.25:1.6;s<=r?(i.path=[],t.kind==="earth-spirit"&&yt.tryPickup(i)):(i.path.length||Bt(i,n),Pn(i,e));return}if(t.kind==="mine"||t===w&&w.state==="kneel"){if(i.harvest?.target===t){i.path=[];return}let r=t===w?3.25:i===F?Math.min(3.5,t.occupationRadius):t.occupationRadius;s<=r?(i.path=[],t===w&&kd(i,t)):(i.path.length===0&&Bt(i,n),Pn(i,e));return}if(t.kind==="portal"){s<1.55?hl(i,t):(i.path.length||Bt(i,n),Pn(i,e));return}if(t.kind==="exit"){if(t.pending){i.path=[];return}t.blocked?s<3?(i.path=[],Pd(i,t)):(i.path.length||Bt(i,n),Pn(i,e)):s<2.05?i===F&&f0(!0):(i.path.length||Bt(i,n),Pn(i,e));return}if(t.kind==="bag"){s<2?(t.ore.forEach((r,o)=>i.ore[o]+=r),t.root.visible=!1,t.dead=!0,i.target=null,Es(i.pos,"拾取遗落灵矿"),Mt("ore")):Pn(i,e);return}["enemy","player","ally","boss","stone"].includes(t.kind)&&(s<(t===w?3.55:2.4)?(i.path=[],Pd(i,t)):(i.repath=(i.repath||0)-e,(i.repath<=0||!i.path.length)&&(Bt(i,n),i.repath=.5),Pn(i,e)))}function n1(i,e){i.attackCD=Math.max(0,i.attackCD-e),i.portalCD=Math.max(0,i.portalCD-e),i.shield=Math.max(0,i.shield-e),i.invul=Math.max(0,i.invul-e),i.swing=Math.max(0,(i.swing||0)-e);for(let t of Object.keys(i.cd))i.cd[t]=Math.max(0,i.cd[t]-e);if(i.harvest){let t=i.harvest;if(t.target.floor!==i.floor||Ce(i.pos,t.target.pos)>(t.target===w?3.4:t.target.occupationRadius)||t.target===w&&(w.state!=="kneel"||!w.lootAvailable)||t.target.kind==="mine"&&t.target.remaining<=0)i.harvest=null;else{if(t.contested=jd(i,t.target,[F,de,...It],t.target===w?3.3:t.target.occupationRadius),t.paused=!!(i.target?.kind==="stone"&&!i.target.dead&&i.target.targetable||i.swing>0),t.contested||t.paused)return;t.progress+=e,t.progress>=t.duration&&jS(i),i===F&&Math.floor(t.progress/.68)!==Math.floor((t.progress-e)/.68)&&(Mt("rock"),Kn(t.target.pos,"#c9dfb1",2))}}i===F&&at-i.hurtAt>7&&i.hp>0&&(i.hp=Math.min(i.maxHp,i.hp+e*.65))}function i1(i,e){if(i.dead||st(i)||Zn&&window.__testOptions?.disableNPC||(i.aiTimer-=e,i.aiTimer>0))return;if(i.decisionT=(i.decisionT||0)-e,w.floor===i.floor&&["windup","slamming","roll"].includes(w.state)&&Ce(i.pos,w.pos)<7&&i.decisionT<=0){$n(i),i.target=null;let r=i.pos.clone().sub(w.pos);r.y=0,r.normalize();let o=dt(-r.z,0,r.x).multiplyScalar(i.id==="rival1"?1:-1),a=i.pos.clone().addScaledVector(r,3.2).addScaledVector(o,2.1);Bt(i,a),i.evadeT=1.6,i.decisionT=1.1,Vr.rivalRepositions++}if((i.evadeT||0)>0){i.evadeT-=e,Pn(i,e,i.speed*1.04);return}let n=[F,de].filter(r=>!r.dead&&!st(r)&&r.floor===i.floor&&Ce(r.pos,i.pos)<5.3&&Hi(i.floor,i.pos,r.pos)).sort((r,o)=>Ce(r.pos,i.pos)-Ce(o.pos,i.pos))[0],s=n&&(n.harvest||yt.pickupFor(n)||yt.entities().some(r=>r.active&&r.floor===i.floor&&Ce(i.pos,r.pos)<=3&&Ce(n.pos,r.pos)<=3)||Wt.some(r=>r.remaining>0&&r.floor===i.floor&&Ce(i.pos,r.pos)<=r.occupationRadius&&Ce(n.pos,r.pos)<=r.occupationRadius)||Ce(n.pos,i.pos)<2.4||at-i.hurtAt<4);if(s&&($n(i),i.earthGoal=null,i.target=n),(i.target?.kind==="player"||i.target?.kind==="ally")&&(i.target.dead||st(i.target)||i.target.floor!==i.floor||Ce(i.target.pos,i.pos)>6.2||!Hi(i.floor,i.pos,i.target.pos)&&at-i.hurtAt>2)&&(i.target=null),w.state==="kneel"&&w.lootAvailable&&w.floor===i.floor&&Ce(w.pos,i.pos)<8&&!s&&i.target!==w&&(i.target=w,Bt(i,w.pos)),!s&&!["player","ally","boss"].includes(i.target?.kind)&&!(Zn&&window.__testOptions?.disableEarthAI)){let r=yt.aiTarget(i);if(r){i.earthGoal=r,p0(i,r,e);return}}if(i.target?.kind==="mine"&&i.target.remaining<=0&&(i.target=null),!i.target&&!i.harvest){let r=Wt.filter(o=>o.floor===i.floor&&o.remaining>0).sort((o,a)=>Ce(o.pos,i.pos)-Ce(a.pos,i.pos));if(r.length)i.target=r[0],Bt(i,r[0].pos);else{let o=gn.filter(a=>a.floor===i.floor&&pi(a));o.length&&(i.target=o[Math.floor(at/17)%o.length],Bt(i,i.target.pos))}}fl(i,e)}function s1(i){if(de.dead||st(de)||Zn&&window.__testOptions?.disableNPC||st(F)&&de.floor===F.transit.toFloor)return;if(de.followJump||de.floor!==F.floor){let n=de.followJump?.floor===de.floor?de.followJump:Bd(de.floor,F.floor);if(n&&pi(n)){de.target=n,fl(de,i),st(de)&&(de.followJump=null);return}de.followJump=null}let e=null;!st(w)&&!["sleep","warning","forming","dead","falling","kneel"].includes(w.state)&&w.floor===de.floor&&Ce(de.pos,w.pos)<(de.tether?15:8)&&(e=w);let t=It.find(n=>!n.dead&&!st(n)&&n.floor===de.floor&&Ce(n.pos,F.pos)<4.5);if(t&&!de.tether&&(e=t),de.tether&&w.state!=="sleep"&&!e){let n=hn.filter(s=>s.blocked&&s.floor===de.floor&&Ce(de.pos,s.stone.position)<8).sort((s,r)=>Ce(s.pos,de.pos)-Ce(r.pos,de.pos))[0];n&&w.state==="kneel"&&(e=n)}if(e)de.target!==e&&(de.target=e,Bt(de,e.pos)),fl(de,i);else{if(de.target=null,de.floor!==F.floor||st(F))return;let n=F.pos.clone().add(dt(1.4,0,1.1));Ce(de.pos,n)>2?(de.path.length||Bt(de,n),Pn(de,i)):de.path=[]}}function nh(){w?.telegraph&&(Br(w.telegraph),w.telegraph=null)}function ws(i){return i?.kind==="earth-pulse"||i?.kind==="earth-spirit"}function ih(i){return ws(i)&&!i.dead&&(i.kind==="earth-pulse"?i.active:i.available)}function d0(i){if(i.completed)return`压脉 ${i.stageIndex+1}/4 · 已镇定`;if(!i.active)return`压脉 ${i.stageIndex+1}/4 · 尚未开启`;let e=i.occupation.snapshot();return`压脉 ${i.stageIndex+1}/4`+(e.reason==="multiple-teams"?" · 多队争夺":e.graceRemaining>0?` · ${e.graceRemaining.toFixed(1)}秒内返回续占`:e.captureTeam?` · ${Oo(e.captureTeam)} ${e.captureProgress.toFixed(1)}/3秒`:" · 进圈镇压")}function p0(i,e,t){if(!e||e.dead||e.kind==="earth-pulse"&&!e.active||e.kind==="earth-spirit"&&!e.available){i.earthGoal=null,ws(i.target)&&(i.target=null),i.path=[];return}if(st(i))return;let n=i.floor===e.floor?e:Bd(i.floor,e.floor);if(!n){i.earthGoal=null,i.target=null,i.path=[];return}i.target!==n&&(i.target=n,i.path=[]),fl(i,t)}function r1(i){let e=yt.snapshot();yt.update(i);let t=yt.snapshot();if(t.completedCount>e.completedCount){let s=yt.entities().find(r=>r.kind==="earth-pulse"&&r.stageIndex===e.activeIndex);s&&en(s,t.completedCount===4?"四脉已定，土灵蕴凝成":"此脉已定，循地脉前往下一点","#eed490")}let n=yt.aiTarget(F);if(n)for(let s of[F,de,...It])s.dead||s.earthHintShown||st(s)||s.floor!==n.floor||Ce(s.pos,n.pos)>18||!Hi(s.floor,s.pos,n.pos)||(s.earthHintShown=!0,s===F&&Zo.push({title:"灵蕴事件-封脉稳流",desc:"循地脉依次镇压四处脉点，争夺全队抗伤增益。"}));t.buff.active&&!e.buff.active&&Zo.push({title:t.buff.team==="player"?"获得土灵蕴":"敌方获得土灵蕴",desc:t.buff.team==="player"?"全队受到伤害降低 20%。":"敌方全队获得抗伤增益。"})}function o1(){if(Zo.length&&at>=Qu&&!["warning","forming"].includes(w.state)){let i=Zo.shift();Fd(i.title,i.desc,5)}}function a1(){let i=yt.snapshot(),e=yt.aiTarget(F),t=ae("earth-event");if(!t)return;ae("earth-stage").textContent=i.stage==="pulses"?`镇压地脉 ${i.completedCount}/4`:i.stage==="pickup"?"四脉已定 · 灵蕴待拾取":i.buff.active?i.buff.team==="player"?"全队减伤 20%":"敌方持有 · 减伤 20%":"土灵蕴已消散",ae("earth-detail").textContent=e?`${["一","二","三"][e.floor]}层 · ${e.kind==="earth-spirit"?"终点短交互拾取":"循金色地脉前往压脉点"}`:i.buff.active?"持有人倒下不掉落，全队阵亡才消散。":"本局事件已结束",ae("earth-go").hidden=!e,ae("earth-go").textContent=e?.kind==="earth-spirit"?"前往拾取":e?.floor!==F.floor?"循脉跨层":"前往脉点";let n=ae("earth-map");n||(n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.id="earth-map",ae("minimap").insertBefore(n,ae("map-player")));let r=(i.stage==="pulses"?yt.entities().filter(o=>o.kind==="earth-pulse"):i.stage==="pickup"?yt.entities().filter(o=>o.kind==="earth-spirit"&&o.available):[]).map(o=>{let[a,l]=Bi([o.pos.x,o.pos.z]),c=o.kind==="earth-spirit",u=c?"active loot":o.completed?"done":o.active?"active":"future";return`<g ${c?"data-earth-loot":"data-earth-point"}="${o.id}" class="earth-pin ${u}" role="button" tabindex="0" aria-label="${c?"土灵蕴待拾取":"压脉点 "+(o.stageIndex+1)}，${o.floor+1}层"><circle cx="${a}" cy="${l}" r="${c?4:3.3}"/><text x="${a}" y="${l}" text-anchor="middle" dominant-baseline="central">${c?"蕴":o.stageIndex+1}</text></g>`}).join("");if(n.innerHTML!==r){n.innerHTML=r;for(let o of n.querySelectorAll("[data-earth-point],[data-earth-loot]")){let a=()=>{if(Xt!=="play"||Ln)return;let l=yt.entities().find(c=>c.id===(o.dataset.earthPoint||o.dataset.earthLoot));ih(l)?rs(F,l):en(F,l?.completed?"此处地脉已镇定":"需依次镇压前面的脉点")};o.onclick=a,o.onkeydown=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),l.stopPropagation(),a())}}}t.classList.toggle("empowered",i.buff.active&&i.buff.team==="player")}function $g(){let i=ae("minimap"),e=[...ut.mapBounds||[-108,-107,245,275]];e[1]=-e[1]-e[3],e[0]-=12,e[2]+=24,i.setAttribute("viewBox",e.join(" ")),i.style.height="205px";let t="",n=["#746e42","#794f57","#3c667a"];for(let a=0;a<3;a++){for(let l of ut.levels[a].polygons)t+=`<polygon data-floor="${a}" points="${l.map(c=>Bi(c).join(",")).join(" ")}" fill="${n[a]}" stroke="#819582" stroke-width=".55"/>`;for(let l of ut.levels[a].holes)t+=`<polygon points="${l.map(c=>Bi(c).join(",")).join(" ")}" fill="#11282b"/>`}t+='<defs><marker id="jump-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#f0cf82" stroke-width="2"/></marker></defs>';for(let a=0;a<ut.portals.length;a++){let l=ut.portals[a],c=ut.portals[l.partner],[u,h]=Bi(l.p),f=l.oneWay?"#e5b370":"#80d7d0";if(a<l.partner){let d=l.oneWay&&!pi(l)?c:l,g=d===l?c:l,[x,m]=Bi(d.p),[p,M]=Bi(g.p);t+=`<line data-route="${l.pair}" data-oneway="${!!l.oneWay}" x1="${x}" y1="${m}" x2="${p}" y2="${M}" stroke="${f}" stroke-width=".8" marker-end="url(#jump-arrow)" ${l.oneWay?"":'marker-start="url(#jump-arrow)"'} opacity=".65"/>`}t+=`<g data-mapportal="${a}" role="button" tabindex="0" aria-label="${l.label}" aria-disabled="${!pi(l)}"><title>${l.label}</title><circle class="portal-pin" cx="${u}" cy="${h}" r="2.6" fill="${pi(l)?"#142a29":f}" stroke="${f}" stroke-width="1"/><text x="${u+3}" y="${h+1}" style="font-size:5px">${"ABCD"[l.pair]}</text></g>`}for(let a=0;a<ut.mines.length;a++){let l=ut.mines[a],[c,u]=Bi(l.p);t+=`<circle role="button" tabindex="0" aria-label="${l.grade}级矿点" data-mapmine="${a}" cx="${c}" cy="${u}" r="2" fill="${["","#a8d5a5","#93c4e0","#e4ba72"][l.grade]}"/>`}let s=ut.entryLabels||Object.fromEntries(ut.exits.map(a=>[a.type,[a.p[0],a.p[1]+12]]));for(let a of ut.exits){let[l,c]=Bi(s[a.type]),[u,h]=Bi(a.p);t+=`<g data-mapexit="${a.type}" role="button" tabindex="0" aria-label="${a.label}"><title>${a.label} · 点击前往</title><line class="entry-leader" x1="${u}" y1="${h}" x2="${l}" y2="${c}"/><circle class="entry-pin" cx="${u}" cy="${h}" r="4.3"/><rect class="entry-label-bg" x="${l-31}" y="${c-9}" width="62" height="18" rx="3"/><text class="entry-label" x="${l}" y="${c}" text-anchor="middle" dominant-baseline="central">${a.label}</text></g>`}let[r,o]=Bi(ut.bossSpawn.p);t+=`<path id="core-pin" d="M${r} ${o-3}l3 3 -3 3 -3 -3Z"/><circle id="map-player" r="2.4"/>`,i.innerHTML=t,v1();for(let a of i.querySelectorAll("[data-mapportal]")){let l=()=>{let c=gn[Number(a.dataset.mapportal)];!c||Xt!=="play"||(i.querySelectorAll("[data-route]").forEach(u=>{u.style.opacity=Number(u.dataset.route)===ut.portals[Number(a.dataset.mapportal)].pair?"1":".15",u.style.strokeWidth=Number(u.dataset.route)===ut.portals[Number(a.dataset.mapportal)].pair?"1.8":".6"}),F.floor===c.floor?rs(F,c):en(F,"目标位于第"+(c.floor+1)+"层，请通过古阵前往"))};a.onclick=l,a.onkeydown=c=>{c.key==="Enter"&&l()}}ae("core-pin").onclick=()=>{mn=!mn,Zn&&(window.__testNeedsFrame=!0)};for(let a of i.querySelectorAll("[data-mapmine]")){let l=()=>{let c=Wt[Number(a.dataset.mapmine)];!c||Xt!=="play"||(c.floor===F.floor?rs(F,c):en(F,"矿点位于第"+(c.floor+1)+"层，请通过古阵前往"))};a.onclick=l,a.onkeydown=c=>{c.key==="Enter"&&l()}}}function qu(i){w.state="recovery",w.stateT=bn.recovery[i]-w.knocks*.12,w.attackCD=.2,nh()}function l1(i,e,t=.8){let n=$u(e,1.25,"#db9c65"),s=new Re(new pn(.32,1),new bt({color:"#a5a18a",roughness:.9}));s.position.copy(i).y+=3.4,rn.add(s),Ss.push({mesh:n,rock:s,kind:"arcBoulder",life:t,max:t,start:s.position.clone(),pos:e.clone(),floor:w.floor,damage:16})}function c1(){Vr.slamPulses++;let i=w.attack;i.pulses=(i.pulses||0)+1,Mt("quake"),Sn(w.pos,bn.slamRadius,"#edba80",.66),Kn(w.pos,"#d8cba0",12);let e=w.pos.clone();Ss.push({mesh:$u(e,.1,"#e8bd8d"),kind:"shockwave",life:.62,max:.62,origin:e,floor:w.floor,damage:18,radius:bn.slamRadius,hit:new Set})}function m0(i,e=null){w.path=[],w.target=i;let t=Ce(i.pos,w.pos),n=e;n||(w.pillarPursuit>2.4&&t<6.5?n="slam":t>5.3&&w.lastKind!=="roll"?n="roll":t<3.8&&w.lastKind!=="slam"&&w.attackCount%3===2?n="slam":n="sweep"),w.attackCount++,w.lastKind=n,Vr.attacks[n]++;let s=i.pos.clone().sub(w.pos);s.y=0,s.normalize(),w.face=Math.atan2(s.x,s.z)+Math.PI;let r=bn.windup[n];if(w.attack={kind:n,duration:r,dir:s,origin:w.pos.clone(),target:i.pos.clone(),pulses:0},w.state="windup",w.stateT=r,n==="roll"){w.telegraph=new ct;let o=new Re(new Vs(2.8,11),new ht({color:"#e6a177",transparent:!0,opacity:.19,side:St,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.rotation.z=-Math.atan2(s.x,s.z),o.position.copy(w.pos).addScaledVector(s,5.5),o.position.y+=.06,w.telegraph.add(o),rn.add(w.telegraph)}else n==="sweep"?(w.telegraph=$u(w.pos,3.4,"#d9a168"),w.telegraph.scale.set(1,1,1)):w.telegraph=$u(w.pos,bn.slamRadius,"#dd9f76");Mt("whoosh")}function u1(i,e){if(w.state==="recovery")return w.stateT-=i,w.stateT<=0&&(w.state="roam"),!0;if(w.state==="windup"){if(w.stateT-=i,w.stateT>0)return!0;let t=w.attack;if(nh(),t.kind==="roll")w.state="roll",w.stateT=1.32,w.hitActors.clear();else if(t.kind==="slam")w.state="slamming",w.stateT=zi.boss.clips.skill3_2.duration,w.pulseIn=.15;else{Mt("hit");for(let r of e){let o=r.pos.clone().sub(w.pos);o.y=0;let a=o.normalize().dot(t.dir);Ce(r.pos,w.pos)<3.6&&a>-.15&&Hi(w.floor,w.pos,r.pos)&&As(r,23,w)}Sn(w.pos.clone().addScaledVector(t.dir,1.2),2,"#c5e8be",.32);let n=t.target.clone();Ce(n,w.pos)<5&&(n=w.pos.clone().addScaledVector(t.dir,7.5));let s=dt(-t.dir.z,0,t.dir.x);for(let r=-1;r<=1;r++)l1(w.pos,n.clone().addScaledVector(s,r*1.45),.95+Math.abs(r)*.12);qu("sweep")}return!0}if(w.state==="slamming")return w.stateT-=i,w.pulseIn-=i,w.pulseIn<=0&&w.attack.pulses<bn.slamPulses&&(c1(),w.pulseIn+=bn.slamInterval),w.stateT<=0&&qu("slam"),!0;if(w.state==="roll"){let t=w.pos.clone(),n=t.clone().addScaledVector(w.attack.dir,bn.rollSpeed*i),s=Qt[w.floor];if(!Hr(w.floor,n.x-s.x,n.z-s.z,1))return Vr.rollStops++,Kn(w.pos.clone().add(dt(0,.8,0)),"#e8c393",22),Sn(w.pos,2,"#debf8b",.5),Mt("quake"),qu("roll"),w.stateT+=.5,!0;Ku(w,w.attack.dir,i,bn.rollSpeed);for(let r of e)Ce(r.pos,w.pos)<1.85&&!w.hitActors.has(r.id)&&Hi(w.floor,w.pos,r.pos)&&(w.hitActors.add(r.id),As(r,29,w));return w.stateT-=i,w.stateT<=0&&qu("roll"),!0}return!1}function h1(i,e){if(i.kind==="arcBoulder"){let t=Mn(1-i.life/i.max);if(i.rock.position.copy(i.start).lerp(i.pos.clone().add(dt(0,.3,0)),t),i.rock.position.y+=Math.sin(t*Math.PI)*3.2,i.rock.rotation.x+=e*6,i.rock.rotation.z+=e*4,i.life<=0){for(let n of[F,de,...It])!n.dead&&n.floor===i.floor&&Ce(n.pos,i.pos)<1.25&&As(n,i.damage,w);Kn(i.pos,"#d4c5a1",8),Mt("rock"),Br(i.rock)}return!0}if(i.kind==="shockwave"){let t=Mn(1-i.life/i.max),n=.15+t*i.radius;i.mesh.scale.setScalar(n/.1);for(let s of[F,de,...It]){if(s.dead||s.floor!==i.floor||i.hit.has(s.id))continue;let r=Ce(s.pos,i.origin);Math.abs(r-n)<.45&&Hi(i.floor,i.origin,s.pos)&&(i.hit.add(s.id),As(s,i.damage,w))}return!0}return!1}function f1(i){if(st(w)||(w.portalCD=Math.max(0,w.portalCD-i),w.attackCD=Math.max(0,w.attackCD-i),w.state==="sleep"||w.state==="dead"))return;if(w.state==="warning"){w.stateT-=i,w.stateT<=0&&$S();return}if(w.state==="forming"){w.stateT-=i;let r=Mn(1-w.stateT/qn.spawn);w.formation.update(r),Math.floor(w.stateT*4)!==Math.floor((w.stateT+i)*4)&&Kn(w.pos.clone().add(dt(0,r*3,0)),"#dbca98",3),w.stateT<=0&&(w.formation.finish(),w.state="roam",w.attackCD=1.6,JS());return}if(w.state==="falling"){w.stateT-=i,w.stateT<=0&&(w.state="kneel",w.stateT=qn.kneel,w.lootAvailable=!0,w.circle.visible=!0,en(w,"矿甲开裂，可靠近采集三级灵矿"));return}if(w.state==="kneel"){w.stateT-=i,w.stateT<=0&&(w.lootAvailable=!1,w.circle.visible=!1,w.knocks>=3?(w.state="dead",w.root.visible=!1,Kn(w.pos.clone().add(dt(0,2,0)),"#8cdfb1",45),Sn(w.pos,5,"#bfcfaa",2),Mt("quake"),en(w,"聚灵真身已被击败")):(w.state="recover",w.stateT=qn.recover,w.hp=qn.bossHP,w.parts.forEach(r=>{if(r.o.name.startsWith("ArmorPlate_")){let o=Number(r.o.name.split("_")[1]);r.o.visible=o>=w.knocks*3}}),en(w,"聚灵真身再次起身")));return}if(w.state==="recover"){w.stateT-=i,w.stateT<=0&&(w.state="roam",w.attackCD=.6);return}let e=[F,de,...It].filter(r=>!r.dead&&!st(r)&&r.floor===w.floor);if(u1(i,e))return;w.pillarPursuit=e.some(r=>Ce(r.pos,w.pos)<6.5&&!Hi(w.floor,w.pos,r.pos))?(w.pillarPursuit||0)+i:Math.max(0,(w.pillarPursuit||0)-i);let t=e.filter(r=>Ce(r.pos,w.pos)<bn.aggro&&Hi(w.floor,w.pos,r.pos)).sort((r,o)=>Ce(r.pos,w.pos)-Ce(o.pos,w.pos))[0];if(t){if(w.target=t,w.lastSeen={pos:t.pos.clone(),floor:t.floor,t:at},w.followPortal=null,Ce(t.pos,w.pos)<9&&w.attackCD<=0&&Hi(w.floor,w.pos,t.pos)){m0(t);return}w.repath=(w.repath||0)-i,(w.repath<=0||w.path.length===0)&&(Bt(w,t.pos),w.repath=.42),Pn(w,i,bn.chase*(1+w.knocks*.06));return}if(!t&&w.lastSeen&&w.lastSeen.floor===w.floor&&at-w.lastSeen.t<bn.occludedMemory&&!w.followPortal){w.target=null,w.path.length||Bt(w,w.lastSeen.pos),Pn(w,i,bn.chase*.87);return}if(w.target=null,w.followPortal&&pi(w.followPortal)&&w.followPortal.floor===w.floor){let r=w.followPortal;Ce(w.pos,r.pos)<1.7&&w.portalCD<=0?hl(w,r):(w.path.length||Bt(w,r.pos),Pn(w,i,2.9));return}w.patrolT+=i,w.floor===2&&(w.patrolDirection=-1),w.floor===0&&(w.patrolDirection=1);let n=w.floor+(w.patrolDirection||-1),s=gn.filter(r=>r.floor===w.floor&&r.to===n&&pi(r));if(w.patrolT>10&&s.length){let r=s[w.patrolChoices[w.floor]%s.length];Ce(w.pos,r.pos)<1.7&&w.portalCD<=0?(w.patrolChoices[w.floor]++,hl(w,r)):(w.path.length||Bt(w,r.pos),Pn(w,i,3));return}if(!w.path.length){let r=ut.patrolPoints[w.floor],o=r[Math.floor(at/5)%r.length];Bt(w,ni(w.floor,...o))}Pn(w,i,1.45)}function g0(){let i=dt();return(fi.has("KeyW")||fi.has("ArrowUp"))&&i.z++,(fi.has("KeyS")||fi.has("ArrowDown"))&&i.z--,(fi.has("KeyA")||fi.has("ArrowLeft"))&&i.x--,(fi.has("KeyD")||fi.has("ArrowRight"))&&i.x++,i.normalize()}function x0(i){if(Xt!=="play"||Ln)return;at+=i,qo=Math.max(0,qo-i),Yo=Math.max(0,Yo-i),Ad=Math.max(0,Ad-i);for(let t of[F,de,...It,w])t.dead||r0(t,i);for(let t of[F,de,...It])t.dead||n1(t,i);let e=g0();st(F)||(F.dash>0?(F.dash-=i,Ku(F,F.dashDir,i,14)):e.lengthSq()>.01?($n(F,!0),F.earthGoal=null,F.target=null,F.path=[],Ku(F,e,i)):F.earthGoal?p0(F,F.earthGoal,i):F.target?fl(F,i):Pn(F,i)),F.walk-Cd>.9&&(Cd=F.walk,Mt("step")),s1(i);for(let t of It)i1(t,i);e1(i),r1(i),Yn.update(i),f1(i),o1(),p1(i);for(let t of hn)if(t.pending&&(t.fall-=i,t.stone.position.y=t.pos.y+8*Math.pow(Mn(t.fall/1.05),2),t.fall<=0)){t.pending=!1,t.blocked=!0,t.stone.position.y=t.pos.y,dl.reset();for(let n of[F,de,...It])if(!n.dead&&!st(n)&&n.floor===0&&Ce(n.pos,t.stone.position)<1.85){let s=n.pos.clone().sub(t.stone.position);s.lengthSq()<.01&&s.set(1,0,0),s.normalize(),n.pos.copy(Od(n,0,t.stone.position.x+s.x*2.5-Qt[0].x,t.stone.position.z+s.z*2.5-Qt[0].z)),n.path=[]}xt.dust(t.stone.position,0,12,2),Kn(t.stone.position,"#c4b287",12),Sn(t.pos,2,"#d4bc81",.5)}xt.update(i,F.floor,mn);for(let t of Wt)t.feedbackT=Math.max(0,(t.feedbackT||0)-i),t.root.position.y=t.pos.y+Math.sin(t.feedbackT*40)*t.feedbackT*.16;for(let t of Go){if(t.life-=i,t.mesh.position.addScaledVector(t.dir,t.speed*i),Ud(t.floor,t.mesh.position.x-Qt[t.floor].x,t.mesh.position.z-Qt[t.floor].z,.06)&&!hn.some(n=>n.blocked&&n.floor===t.floor&&Ce(n.stone.position,t.mesh.position)<1.8)){t.life=0,Kn(t.mesh.position,"#adbcaa",3);continue}for(let n of[w,...It,...Yn.all().filter(s=>s.targetable),...hn.filter(s=>s.blocked)]){if(n.floor!==t.floor||n.dead||st(n)||n===w&&["sleep","warning","dead","forming","kneel"].includes(n.state)||t.hit.has(n.id))continue;let s=n.kind==="exit"?n.stone.position:n.pos;Ce(t.mesh.position,s)<(n.kind==="boss"||n.kind==="exit"?1.5:.7)&&(t.hit.add(n.id),As(n,34,t.owner))}}Go=Go.filter(t=>t.life<=0?(Br(t.mesh),!1):!0);for(let t of Ss)if(t.life-=i,!h1(t,i)){if(t.kind==="ring"){let n=1-t.life/t.max;t.mesh.scale.setScalar(.2+n*t.r),t.mesh.material.opacity=(1-n)*.65}else if(t.kind==="particle")t.vel.y-=i*6,t.mesh.position.addScaledVector(t.vel,i),t.mesh.rotation.x+=i*3,t.mesh.material.opacity=Mn(t.life/t.max);else if(t.kind==="delayedHit"&&t.life<=0){for(let n of[F,de,...It])!n.dead&&n.floor===t.floor&&Ce(n.pos,t.pos)<1.25&&As(n,t.damage,w);Kn(t.pos,"#d2bd85",7),Mt("rock")}}Ss=Ss.filter(t=>t.life<=0?(Br(t.mesh),!1):!0);for(let t of Or)t.life-=i,t.pos.y+=i*(t.max>1?.3:.75),t.el.style.opacity=String(Mn(t.life/(t.max>1?.65:t.max)));Or=Or.filter(t=>t.life<=0?(t.el.remove(),!1):!0),at>Qu&&ae("toast").classList.remove("visible"),at>e0&&(ae("cause-msg").textContent=""),at-Rd>.09&&(Rs(),Rd=at)}function d1(){if(F){for(let i of[F,de,...It])i.root.position.copy(i.pos),i.root.rotation.set(i.transit?i.transit.phase==="falling"?.12:-.12:0,i.face,0),i.root.scale.y=1-(i.transit?.phase==="takeoff"?.1*Math.sin(Math.PI*i.transit.elapsed/i.transit.anticipation):(i.landingT||0)>0?.1*Math.sin(Math.PI*i.landingT/.24):0),i.root.visible=i===F||i===de?!0:(!i.dead||at-(i.deadAt??-99)<2.8)&&Wo(i)&&Ce(i.pos,F.pos)<13.5,i.circle.visible=i.root.visible&&!i.dead&&!st(i),i.circle.position.copy(i.pos).y+=.04,i.contact.position.copy(i.pos).y+=.03,i.contact.visible=i.root.visible&&!i.dead&&!st(i),i.circle.material.color.set(i.shield>0?"#9ccff4":i===F?"#bcebc1":i===de?"#7ab8e4":"#ed775e"),i.circle.scale.setScalar(i.shield>0?1.4:1);w.root.position.copy(w.pos),w.root.rotation.set(0,w.face,0),w.root.scale.set(-1,1,1),w.root.visible=!["sleep","warning","dead"].includes(w.state)&&Wo(w),w.contact.position.copy(w.pos).y+=.03,w.contact.visible=w.root.visible&&!st(w),w.circle.position.copy(w.pos).y+=.05,w.circle.visible=w.state==="kneel"&&w.root.visible,w.reward.visible=w.circle.visible&&w.lootAvailable,w.reward.position.copy(w.pos).y+=1.3,w.core.visible=["sleep","warning"].includes(w.state)&&bs(2),w.core.position.copy(ni(2,...ut.bossSpawn.p)),w.core.rotation.y=at*.15;for(let i of Wt){let e=i.occupation.snapshot(),t=e.productionReason==="enemy-present"||e.reason==="multiple-teams"||e.reason==="owner-returned";i.circle.visible=i.remaining>0&&bs(i.floor),i.circle.material.opacity=i.playerInside?.98:.78,i.circle.material.color.set(t?"#ff9479":e.owner==="player"?"#9bffd4":e.owner?"#f29b83":el[i.grade]),i.highlightUntil>at&&(i.circle.material.opacity=.7+.3*Math.abs(Math.sin(at*16)))}for(let i of w.smallPresentation||[])i.root.visible=w.state==="forming"&&(mn||w.floor===F.floor);w.formation.apply(Wo(w));for(let i of gn)i.fx.rotation.z=at*.12}}function p1(i){for(let r of[F,de,...It]){if(!r.visual)continue;let o=Ce(r.pos,r.visualLast)>1e-4;r.visualLast.copy(r.pos);let a=r.dead?"die":r.transit?"idle_battle":r.swing>0?"atk1":o?"run_front":r.harvest&&!r.harvest.paused||Wt.some(l=>l.remaining>0&&l.occupation.snapshot().owner===zd(r)&&!l.occupation.snapshot().productionPaused&&r.floor===l.floor&&Ce(r.pos,l.pos)<=l.occupationRadius)?"mine":"idle_battle";Ni(r.visual,a,i,{loop:!["die","atk1"].includes(a),speed:a==="run_front"?1.05:a==="atk1"?1.7:1,fade:.1})}let e="idle_battle",t=!0,n=1,s=w.attack?.kind;w.state==="forming"?(e="born1",t=!1,n=zi.boss.clips.born1.duration/qn.spawn):w.state==="falling"?(e="hit1_1",t=!1):w.state==="kneel"?e="hit1_2":w.state==="recover"?(e="hit1_3",t=!1,n=zi.boss.clips.hit1_3.duration/qn.recover):w.state==="windup"?(e=s==="roll"?"skill2_1":s==="slam"?"skill3_1":"atk1",t=!1,n=s==="sweep"?.85:zi.boss.clips[e].duration/bn.windup[s]):w.state==="slamming"?(e="skill3_2",n=1):w.state==="roll"?(e="skill2_2",n=1):w.state==="recovery"?(e=s==="roll"?"skill2_3":s==="slam"?"skill3_3":"atk1",t=!1,n=s==="sweep"?.85:zi.boss.clips[e].duration/bn.recovery[s]):Ce(w.pos,w.visualLast)>1e-4&&(e="run_front"),w.visualLast.copy(w.pos),Ni(w.visual,e,i,{loop:t,speed:n,fade:.08})}function Ld(i){let e=$s(i).project(cn);return{x:js+(e.x*.5+.5)*Ms,y:kr+(-.5*e.y+.5)*Fr,visible:e.z>-1&&e.z<1&&e.x>-1.2&&e.x<1.2&&e.y>-1.2&&e.y<1.2}}function m1(i,e){let t=i.offsetWidth/2,n=i.offsetHeight,s=10,r=[...document.querySelectorAll("#hud .glass,.location,.top-actions,#toast.visible,#interaction")].map(d=>d.getBoundingClientRect()).filter(d=>d.width&&d.height),o=(d,g)=>({x:Mn(d,js+t+s,js+Ms-t-s),y:Mn(g,kr+n+s,kr+Fr-s)}),a=o(e.x,e.y),l=[a];for(let d of r)l.push(o(d.left-t-s,a.y),o(d.right+t+s,a.y),o(a.x,d.top-s),o(a.x,d.bottom+n+s));let c=d=>!r.some(g=>d.x+t>g.left-s&&d.x-t<g.right+s&&d.y>g.top-s&&d.y-n<g.bottom+s),u=l.filter(c).sort((d,g)=>Math.hypot(d.x-e.x,d.y-e.y)-Math.hypot(g.x-e.x,g.y-e.y))[0]||a;i.style.left=u.x+"px",i.style.top=u.y+"px";let h=Math.hypot(u.x-e.x,u.y-e.y)>2,f=i.querySelector(".earth-pointer");i.classList.toggle("relocated",h),f.textContent=h?"➤":"◆",f.style.transform=h?`rotate(${Math.atan2(e.y-(u.y-6),e.x-u.x)*180/Math.PI}deg)`:"none"}function g1(){if(!F)return;let i=[];for(let e of Zu){let t=e.entity,n=Xt==="play"&&Wo(t)&&!t.dead,s=t===w?5.6:t.kind==="mine"?2.3:t.kind==="portal"?3.8:t.kind==="exit"?3.4:t.kind==="stone"?1.2:2.65;t===w&&(n=n&&w.state!=="dead"&&Ce(t.pos,F.pos)<14,s=w.state==="sleep"?1.6:w.state==="kneel"?4:5.6),ws(t)&&(n=Xt==="play"&&ih(t),s=t.kind==="earth-pulse"?3.7:2.1),t.kind==="enemy"&&(n=n&&Ce(t.pos,F.pos)<13.5),t.kind==="stone"&&(n=n&&t.targetable&&Ce(t.pos,F.pos)<16),t.kind==="mine"&&(n=n&&!Yn.all().some(u=>u.mineId===t.id&&u.state==="emerging"&&!u.dead&&u.revealed));let r=Ld(t.pos.clone().add(dt(0,s,0))),o=r.x<282&&r.y<330||r.x>innerWidth-302&&r.y<455||r.y>innerHeight-135;if(e.el.style.display=n&&r.visible&&(!o||ws(t))?"block":"none",!n)continue;e.el.style.left=r.x+"px",e.el.style.top=r.y+"px",e.el.classList.toggle("selected",F.target===t);let a=e.text,l=null;if(t.kind==="earth-pulse"){a=`${["一","二","三"][t.floor]}层 · ${d0(t)}`;let u=e.el.querySelector(".earth-capture"),h=t.occupation.snapshot();u.style.display=t.active&&h.captureTeam?"block":"none",u.querySelector("i").style.width=Mn(h.captureProgress/h.captureSeconds)*100+"%",u.classList.toggle("stalled",!!h.paused)}else t.kind==="earth-spirit"?a=`${["一","二","三"][t.floor]}层 · 土灵蕴待拾取`:t.kind==="mine"?a=["","一级灵矿","二级灵矿","三级灵矿"][t.grade]+`  ${t.remaining}/${t.total}`:t===w?(a=w.state==="sleep"?"三层核心 · 沉睡":w.state==="forming"?"三层核心 · 正在合体":w.state==="kneel"?`聚灵真身 · 停攻 ${w.stateT.toFixed(1)}s${w.lootAvailable?" · 可采":" · 已采"}`:`聚灵真身 · ${w.state==="windup"?{sweep:"上撩抛石·蓄势",roll:"滚石·方向锁定",slam:"连续拍地·蓄势"}[w.attack?.kind]||"蓄势":w.state==="recovery"?"收招·可反击":w.state==="slamming"?"连续拍地":w.state==="roll"?"滚石冲撞":"矿甲 "+w.knocks+"/3"}`,l=w.hp/w.maxHp):t.kind==="exit"?(a=t.label+(t.pending?" · 落石将至":t.blocked?" · 堵路巨石":" · 可离开"),l=t.blocked?t.hp/t.maxHp:null):t.kind==="stone"?(a=t.state==="merging"?"小石头人 · 正在汇入":"小石头人",l=t.hp/t.maxHp):["player","ally","enemy"].includes(t.kind)&&(l=t.hp/t.maxHp);if(t.kind==="mine"){let u=t.occupation.snapshot();e.el.querySelector(".mine-status").textContent=Mu(t);let h=e.el.querySelector(".mine-capture"),f=e.el.querySelector(".mine-production");h.style.display=u.captureTeam&&t.remaining>0?"block":"none",h.querySelector("i").style.width=Mn(u.captureProgress/u.captureSeconds)*100+"%",h.querySelector("i").style.background=u.paused?"#929da4":u.captureTeam==="player"?"#93ebd2":"#ef9b83",f.style.display=u.owner&&t.remaining>0?"block":"none",f.querySelector("i").style.width=Mn(u.productionProgress/u.productionSeconds)*100+"%",f.classList.toggle("stalled",!!u.productionPaused)}if(t.kind==="stone"){let u=e.el.querySelector(".stone-bubble");if(u.style.display="none",e.el.style.display!=="none"&&t.bubbleUntil>at&&t.bubbleText&&i.length<4&&!t.transit){let h=38;u.textContent=t.bubbleText,u.style.display="block",u.style.bottom=h+"px";let f=u.getBoundingClientRect(),d=(x,m,p=6)=>x.left<m.right+p&&x.right>m.left-p&&x.top<m.bottom+p&&x.bottom>m.top-p;for(let x=0;x<4&&i.some(m=>d(f,m));x++)h+=Math.max(...i.filter(m=>d(f,m)).map(m=>f.bottom-m.top+7)),u.style.bottom=h+"px",f=u.getBoundingClientRect();let g=[...document.querySelectorAll("#hud .glass,.location,.top-actions,#toast.visible")].map(x=>x.getBoundingClientRect());f.top>kr+8&&f.left>js&&f.right<js+Ms&&!g.some(x=>d(f,x))&&!i.some(x=>d(f,x))?i.push(f):u.style.display="none"}}e.el.querySelector(".name").textContent=a;let c=e.el.querySelector(".life");c.style.display=l===null?"none":"block",c.querySelector("i").style.width=Mn(l??0)*100+"%",(t===F||t===de)&&(c.querySelector("i").style.background="#8dd7ba"),ws(t)&&e.el.style.display!=="none"&&m1(e.el,r)}for(let e of Or){let t=Ld(e.pos);e.el.style.left=t.x+"px",e.el.style.top=t.y+"px"}}function Rs(i=!1){if(!F)return;a1(),ae("floor-name").textContent=F.transit?["一","二","三"][F.transit.fromFloor]+"层 → "+["一","二","三"][F.transit.toFloor]+"层 · "+(F.transit.phase==="falling"?"下落中":"跃行中"):["一层 · 古矿入口","二层 · 矿道遗迹","三层 · 核心矿坑"][F.floor],ae("clock").textContent=String(Math.floor(at/60)).padStart(2,"0")+":"+String(Math.floor(at%60)).padStart(2,"0"),ae("map-floor").textContent=F.transit?F.floor+1+" → "+(F.transit.toFloor+1):F.floor+1+" / 3",document.querySelectorAll("#minimap [data-floor]").forEach(o=>o.classList.toggle("active",Number(o.dataset.floor)===F.floor));let e=Qt[F.floor],t=ut.scale_world_per_pixel,n=ut.levels[F.floor].source_center_px;ae("map-player").setAttribute("cx",n[0]+(F.pos.x-e.x)/t),ae("map-player").setAttribute("cy",-(n[1]+(F.pos.z-e.z)/t)),ae("core-pin").classList.toggle("alert",Ts.snapshot().count>0||w.state!=="sleep");let s=w.state==="sleep"?Ts.snapshot().count?"散石正在聚形":"核心静候汇聚":w.state==="warning"?"深处石鸣渐起":w.state==="forming"?"深处轰鸣不止":w.state==="dead"?"已击败 · 本局不再苏醒":w.state==="kneel"?`矿甲开裂 · 第${w.knocks}次倒地`:"守护石灵已苏醒";ae("boss-stage").textContent=s,ae("boss-stage").style.color=w.state==="sleep"?"#a9b6a0":"#e3bb82",ae("boss-rule").textContent=w.state==="sleep"?"采矿释放小石头人；途中击杀可延缓合体。":"可继续采矿、挑战石灵，或清障离开。";for(let o of hn){let a=document.querySelector(`[data-exit="${o.type}"]`);a.textContent=o.label[0]+"口 · "+(o.pending?"落石中":o.blocked?"受阻":o.cleared?"已打开":"畅通"),a.classList.toggle("blocked",o.blocked||o.pending),a.classList.toggle("open",!o.blocked&&!o.pending);let l=document.querySelector(`[data-mapexit="${o.type}"]`);l&&(l.style.fill=o.blocked||o.pending?"#e89675":"#a5d8b5")}F.ore.forEach((o,a)=>ae("ore"+(a+1)).textContent=o),ae("hp-fill").style.width=F.hp/F.maxHp*100+"%",ae("hp-text").textContent=Math.ceil(F.hp)+" / "+F.maxHp,ae("mana-fill").style.width=(F.shield>0?100:60+40*(1-F.cd.shield/13))+"%";for(let[o,a]of[["skill-q","q"],["skill-space","dash"],["skill-r","shield"]]){let l=ae(o),c=F.cd[a];l.classList.toggle("cooldown",c>0),l.querySelector("small").textContent=c>0?Math.ceil(c):""}ae("ally-status").textContent=de.dead?"执剑 · 已倒下":de.tether?"执剑 · 主动牵制 / 协助开路":"执剑 · 随行护卫",w.state==="sleep"?(ae("quest-title").textContent=F.ore.reduce((o,a)=>o+a,0)?"继续探索，或带矿离开":F.entryLabel+" · 入矿",ae("quest-detail").textContent=F.ore.reduce((o,a)=>o+a,0)?"留意矿堆旁的小石头人，点击即可攻击。站在矿圈内即可持续取矿；采空后可自由追击。":"沿洞道寻找灵矿。点击小地图矿点可前往，进圈后自动占领并产出，留意敌方争夺。"):["warning","forming"].includes(w.state)?(ae("quest-title").textContent="矿脉正在变化",ae("quest-detail").textContent="深处传来连续石鸣。观察周围，准备移动。"):w.state==="kneel"?(ae("quest-title").textContent="争采矿甲，或趁机开路",ae("quest-detail").textContent=`停攻剩余 ${Math.ceil(w.stateT)} 秒。本次仅一份三级矿收益。`):(ae("quest-title").textContent=w.state==="dead"?"带矿离开":"继续取矿，还是清障撤离",ae("quest-detail").textContent="返回一层，打通金、木、火任意一个入口即可离开。");for(let o=0;o<Wt.length;o++)ae("minimap").querySelector(`[data-mapmine="${o}"]`)?.setAttribute("opacity",Wt[o].remaining?1:.2);let r=st(F)?null:(yt.pickupFor(F)?yt.entities().find(o=>o.kind==="earth-spirit"):null)||F.harvest?.target||h0()||Wt.filter(o=>o.remaining>0&&o.occupation.snapshot().graceRemaining>0&&o.floor===F.floor&&Ce(o.pos,F.pos)<o.occupationRadius+3).sort((o,a)=>Ce(o.pos,F.pos)-Ce(a.pos,F.pos))[0];if(r&&Xt==="play"){ae("interaction").style.display="block",ae("interact-key").style.display=["mine","earth-pulse"].includes(r.kind)?"none":"inline-block",ae("mine-output-ui").hidden=!0;let o=r.kind==="mine"?`${["","一级","二级","三级"][r.grade]}灵矿 · 余 ${r.remaining} 份`:r===w?w.lootAvailable?"采一份三级矿":"本次已被采走":r.kind==="portal"?r.label:r.kind==="exit"?r.blocked?"攻击堵路巨石 · "+Math.ceil(r.hp)+"血":r.label+" · 带矿离开":"拾取遗落灵矿";if(ae("interact-text").textContent=F.harvest?F.harvest.contested?"敌方占圈 · 采矿暂停":F.harvest.paused?"拦截中 · 保留采集进度":"采集中 · 再按E停止":o,ae("harvest-track").style.display=F.harvest?"block":"none",ae("harvest-track").querySelector("i").style.width=F.harvest?F.harvest.progress/F.harvest.duration*100+"%":"0%",r.kind==="mine"){let a=r.occupation.snapshot();ae("interact-text").textContent=Mu(r),ae("harvest-track").style.display=a.captureTeam?"block":"none",ae("harvest-track").querySelector("i").style.width=Mn(a.captureProgress/a.captureSeconds)*100+"%",ae("harvest-track").classList.toggle("stalled",!!a.paused),ae("mine-output-ui").hidden=!1,ae("mine-output-caption").textContent=a.owner?`产出 ${a.productionProgress.toFixed(1)} / ${a.productionSeconds}s · 圈内同队每人 +1`:`进圈自动占领 · 半径 ${r.occupationRadius}m`,ae("mine-output-track").style.display=a.owner?"block":"none",ae("mine-output-track").classList.toggle("stalled",!!a.productionPaused),ae("mine-output-track").querySelector("i").style.width=Mn(a.productionProgress/a.productionSeconds)*100+"%"}else if(ws(r)){let a=yt.pickupFor(F),l=r.kind==="earth-pulse"?r.occupation.snapshot():null;ae("interact-text").textContent=l?d0(r):a?"凝取土灵蕴 · 再按 E 取消":"拾取土灵蕴 · 全队减伤 20%",ae("harvest-track").style.display=a||l?.captureTeam?"block":"none",ae("harvest-track").classList.toggle("stalled",!!l?.paused),ae("harvest-track").querySelector("i").style.width=Mn(a?a.progress/a.duration:l?l.captureProgress/l.captureSeconds:0)*100+"%"}}else ae("interaction").style.display="none"}function cl(){if(!F)return;for(let t of jg)t.visible=!0;for(let t of Wt){t.root.visible=bs(t.floor),t.visual.setRemaining(t.remaining),t.circle.visible=t.remaining>0&&t.root.visible,t.contact.visible=t.root.visible;for(let n of t.sourceMeshes||[])n.visible=t.root.visible&&(t.remaining>0||n.name.includes("DiZuo")),n.position.y=t.root.position.y-t.pos.y}for(let t of gn)t.root.visible=bs(t.floor),t.fx.visible=t.root.visible;for(let t of hn)t.root.visible=bs(0),t.stone.visible=!!(t.blocked||t.pending)&&bs(0);d1(),Yn.render(),yt.render();let i=mn?dt(...ut.overviewTarget||[8,0,25]):F.pos.clone();ss.copy($s(i)),cn.position.copy(ss).add(mn?dt(...ut.overviewOffset||[0,245,205]).multiplyScalar(1.4):Dd),cn.far=mn?650:200,rn.fog.density=mn?15e-5:.001;let e=Math.sin(at*48)*(xt.shake+(Yo>0?Yo*.035:0));cn.lookAt(ss.x+e,ss.y,ss.z+e*.4),mn||cn.rotation.set(-49*Math.PI/180+e*.006,e*.003,0),cn.updateProjectionMatrix(),cn.updateMatrixWorld(),xt.updateOcclusion(cn,F.pos,mn),kn.target.position.copy(F.pos),kn.position.copy(F.pos).add(dt(-18,35,18)),ae("vignette").style.boxShadow=qo>0?`inset 0 0 130px rgba(178,51,33,${qo})`:"none",mi.toneMappingExposure=.82,g1(),Ed==="high"?pl.render():mi.render(rn,cn)}function Vd(){Ms=Math.min(innerWidth,innerHeight*16/9),Fr=Ms*9/16,js=(innerWidth-Ms)/2,kr=(innerHeight-Fr)/2,mi.setSize(Ms,Fr),pl.setSize(Ms,Fr),ae("game").style.left=js+"px",ae("game").style.top=kr+"px",cn.aspect=16/9,cn.updateProjectionMatrix()}function gl(){Xt==="play"&&(Ln=!Ln,ae("pause").classList.toggle("hidden",!Ln),fi.clear())}function v0(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}function y0(){!de||de.dead||(de.tether=!de.tether,de.target=null,de.path=[],Rs(!0))}window.addEventListener("resize",Vd);window.addEventListener("contextmenu",i=>{i.target===ae("game")&&i.preventDefault()});window.addEventListener("keydown",i=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault(),fi.add(i.code),Zn&&(window.__testNeedsFrame=!0),!i.repeat&&((i.code==="Escape"||i.code==="KeyP")&&gl(),i.code==="KeyF"&&v0(),i.code==="KeyM"&&(mn=!mn),!(Xt!=="play"||Ln)&&(i.code==="KeyE"&&t1(),i.code==="Space"&&c0(),i.code==="KeyQ"&&Hd(),i.code==="KeyR"&&u0(),i.code==="Digit1"&&y0()))});window.addEventListener("keyup",i=>fi.delete(i.code));function x1(i){for(;i;){if(!i.visible)return!1;i=i.parent}return!0}function _0(i){Zg.set((i.clientX-js)/Ms*2-1,-(i.clientY-kr)/Fr*2+1),Yu.setFromCamera(Zg,cn);let e=Yu.intersectObjects(xt.groundMeshes.filter(t=>t.userData.floor===F.floor),!1)[0];return e?(Dr.copy(qf(e.point)),Dr.clone()):(Kg.constant=-Qt[F.floor].y,Yu.ray.intersectPlane(Kg,Dr),Dr.copy(qf(Dr)),Dr.clone())}ae("game").addEventListener("pointermove",i=>{F&&_0(i)});ae("game").addEventListener("pointerdown",i=>{if(Xt!=="play"||Ln||st(F))return;t0();let e=_0(i);if(i.button===2){$n(F,!0),F.earthGoal=null,F.target=null,Bt(F,e),Sn(e,.8,"#acf0ca",.4);return}if(i.button!==0)return;let t=Yu.intersectObjects([...un.children,...xt.meshes.filter(n=>n.userData.entity)],!0).find(n=>x1(n.object)&&n.object.userData.entity&&(n.object.userData.entity.floor===F.floor||ih(n.object.userData.entity))&&!n.object.userData.entity.dead&&(n.object.userData.entity.kind!=="stone"||n.object.userData.entity.targetable));if(t)rs(F,t.object.userData.entity);else{let n=[...Yn.all().filter(s=>s.targetable),...yt.entities().filter(s=>s.active||s.available),...Wt,...gn,...hn,w,...It,...Xo].filter(s=>s.floor===F.floor&&!s.dead&&Ce(s.pos,e)<(s===w?2:1.5)).sort((s,r)=>Ce(s.pos,e)-Ce(r.pos,e))[0];n?rs(F,n):($n(F),F.earthGoal=null,F.target=null,Bt(F,e),Sn(e,.8,"#acf0ca",.4))}});ae("earth-go").onclick=()=>{let i=yt.aiTarget(F);i&&Xt==="play"&&rs(F,i)};ae("start-btn").onclick=()=>{Nr=ae("audio-toggle").checked,Ed=ae("quality").value,mi.setPixelRatio(Math.min(devicePixelRatio,Ed==="high"?1.6:1)),Vd(),ml(!0)};ae("resume-btn").onclick=gl;ae("pause-btn").onclick=gl;ae("help-btn").onclick=()=>{Ln||gl()};ae("restart-btn").onclick=()=>ml(!0);ae("again-btn").onclick=()=>ml(!0);ae("fullscreen-btn").onclick=v0;ae("sound-btn").onclick=()=>{Nr=!Nr,Ur&&(Ur.gain.value=Nr?.21:0),ae("sound-btn").textContent=Nr?"声":"静"};ae("skill-q").onclick=Hd;ae("skill-space").onclick=c0;ae("skill-r").onclick=u0;ae("ally-btn").onclick=y0;ae("core-pin").onclick=()=>{mn=!mn};function v1(){document.querySelectorAll("[data-mapexit]").forEach(i=>{let e=()=>{let t=hn.find(n=>n.type===i.dataset.mapexit);Xt!=="play"||!t||(F.floor===0?rs(F,t):en(F,t.label+"位于一层，请通过古阵返回"))};i.onclick=e,i.onkeydown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.stopPropagation(),e())}})}document.addEventListener("visibilitychange",()=>{document.hidden&&Xt==="play"&&!Ln&&!Zn&&gl()});window.render_game_to_text=()=>JSON.stringify({mode:Xt,paused:Ln,time:+at.toFixed(2),telemetry:Vr,tuning:bn,sceneSource:ut?.source,coordinates:"Gameplay and source buffers retain Unity world axes; display converts (x,y,z) to (x,y,-z). Floor0=front entry; floor1=right rear; floor2=left rear.",player:F?{entry:F.entryType,pos:F.pos.toArray().map(i=>+i.toFixed(2)),floor:F.floor,transit:F.transit?{fromFloor:F.transit.fromFloor,toFloor:F.transit.toFloor,progress:F.transit.progress,phase:F.transit.phase,elapsed:F.transit.elapsed,duration:F.transit.duration}:null,hp:+F.hp.toFixed(1),ore:F.ore,target:F.target?.id||null,animation:F.visual?.active,harvest:F.harvest?{id:F.harvest.target.id,progress:+F.harvest.progress.toFixed(2),duration:F.harvest.duration,paused:!!F.harvest.paused,contested:!!F.harvest.contested}:null,cooldowns:F.cd,pathLength:F.path.length}:null,earthSpirit:yt.snapshot(),stones:Yn.snapshot(),wake:Zn?Ts.snapshot():void 0,effects:Zn?{events:xt.events,particles:xt.activeParticles}:void 0,camera:{type:"perspective",fov:cn.fov,offset:Dd.toArray(),aspect:cn.aspect},boss:w?{state:w.state,floor:w.floor,pos:w.pos.toArray().map(i=>+i.toFixed(2)),hp:+w.hp.toFixed(1),animation:w.visual?.active,knocks:w.knocks,window:+w.stateT.toFixed(2),lootAvailable:w.lootAvailable}:null,exits:hn.map(i=>({id:i.id,title:i.label,blocked:i.blocked,pending:!!i.pending,hp:+i.hp.toFixed(1)})),nearbyMines:F?Wt.filter(i=>i.floor===F.floor).map(i=>({id:i.id,pos:i.pos.toArray(),grade:i.grade,remaining:i.remaining,occupationRadius:i.occupationRadius,occupation:i.occupation.snapshot()})):[],nearbyPortals:F?gn.filter(i=>i.floor===F.floor).map(i=>({id:i.id,pos:i.pos.toArray(),to:i.to,canDepart:pi(i),oneWay:!!i.oneWay})):[],opponents:F?It.filter(i=>i.floor===F.floor&&!i.dead).map(i=>({id:i.id,hp:i.hp,pos:i.pos.toArray(),target:i.target?.id})):[],ally:de?{hp:de.hp,tether:de.tether}:null});window.advanceTime=i=>{let e=Math.max(1,Math.ceil(i/16.666666666666668)),t=i/1e3/e;for(let n=0;n<e;n++)x0(t);Rs(!0),cl()};Zn&&(window.__testOptions={disableNPC:!1},window.__test={get:()=>({player:F,ally:de,boss:w,mines:Wt,portals:gn,exits:hn,enemies:It,layout:ut,levels:ju,centers:Qt,tuning:bn,telemetry:Vr,projectActors:zi,environment:xt,config:qn,awakening:Ts,smallStones:Yn,earthSpirit:yt,mineVisuals:Ju,nav:dl,camera:cn,renderer:mi,composer:pl,scene:rn}),walkable:Hr,lineClear:Hi,pathTo:th,startBossAttack:m0,screen:i=>{let e=[F,de,w,...Wt,...gn,...hn,...It,...Xo,...Yn.all(),...yt.entities()].find(t=>t.id===i);return e?Ld(e.pos.clone().add(dt(0,e.kind==="boss"?2.5:.5,0))):null},place:(i,e,t)=>{F.transit=null,de.transit=null,F.floor=i,F.pos.copy(ni(i,e,t)),F.path=[],F.target=null,F.earthGoal=null,F.harvest=null,yt.cancelPickup(F),de.floor=i,de.pos.copy(F.pos).add(dt(1,0,1)),ss.copy(F.pos),cn.position.copy(ss).add(dt(23,29,25)),cl()},damageBoss:i=>l0(i,F),forceWake:()=>{o0()},setRolls:i=>window.__testOptions.rolls=i,damagePlayer:i=>As(F,i,w),damageActor:(i,e)=>As([F,de,...It].find(t=>t.id===i),e,null),disableNPC:()=>window.__testOptions.disableNPC=!0,restart:()=>ml(!0),harvestOnce:i=>{let e=Wt.find(t=>t.id===i);kd(F,e)},basicAttack:i=>Pd(F,Yn.all().find(e=>e.id===i)),castQ:Hd,pick:i=>{let e=[w,...Wt,...gn,...hn,...Yn.all(),...yt.entities()].find(t=>t.id===i);rs(F,e)}});async function y1(){try{let a=function(l){let c=Math.min(.045,(l-o)/1e3);o=l,Zn?window.__testNeedsFrame&&(cl(),window.__testNeedsFrame=!1):(x0(c),cl()),requestAnimationFrame(a)},i=new Ou,e=["portal","ore1","ore2","ore3","barrier"],t=0;kS=await(await fetch("assets/manifest.json")).json(),zi=await bg((l,c,u)=>{ae("loading-text").textContent="正在载入修士与守护石灵…",ae("loading-bar").style.width=Math.min(75,u*3)+"%"}),ut=await(await fetch("assets/layout-unity.json")).json(),ju=ut.levels,Qt=ut.centers.map(l=>dt(...l)),$g(),await Promise.all(e.map(async l=>{let c=await i.loadAsync("assets/"+l+".glb");Qg[l]=c.scene,t++,ae("loading-bar").style.width=75+t/e.length*25+"%",ae("loading-text").textContent="正在布置矿洞…"}));let n=await(await fetch("assets/unity-whitebox.json")).json();xt=await kg(rn,ut,n),Ju=rg(xt),jg.push(...xt.roots),$g();let s=new nt,r=[];for(let l=0;l<240;l++)r.push((Math.random()-.5)*100,Math.random()*27-12,(Math.random()-.5)*110);s.setAttribute("position",new De(r,3)),rn.add(new vr(s,new Hs({color:"#bdd3b0",size:.04,transparent:!0,opacity:.28,depthWrite:!1}))),Vd(),ml(!1),ae("loading").classList.add("hidden"),cl(),window.__assetsReady=!0;let o=performance.now();requestAnimationFrame(a)}catch(i){console.error(i),ae("loading-text").textContent="载入失败："+i.message,ae("loading-bar").style.background="#dc775e",window.__loadError=i.message}}y1();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/

export function setBadgePosition(a,b){return a['down-left']?{bottom:'0',left:'0'}:a['down-right']?{bottom:'0',right:'0'}:a['up-left']?{top:'0',left:'0'}:a['up-right']?{top:'0',right:'0'}:b.bottom||b.top||b.left||b.right?{bottom:b.bottom||0,top:b.top||0,left:b.left||0,right:b.right||0}:{top:'0',right:'0'}}
app.filter('formatTime', [function() {
    return function( second ) {
        if ( !second ) {
            second = 0
        }
        var scn = Math.floor(second)%60
        var min = Math.floor(second/60)%60
        var h = Math.floor(second/3600)%24
        scn = scn > 9 ? scn : '0'+scn
        min = min > 9 ? min : '0'+min
        h = h > 9 ? h : '0'+h
        var time = ''
        if (h<=0) {
            time = min+':'+scn
        } else {
            time = h+':'+min+':'+scn
        }
        return time
    }
},
])

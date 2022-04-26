function pad(n) { return ("0" + n).slice(-2); }

export function formatDateTime(dat) {
    return(
        dat.getHours()+':'+
        pad(dat.getMinutes())+' '+
        dat.getDate()+'.'+
        (dat.getMonth()+1)+'.'+
        dat.getFullYear().toString().slice(2,4)
    )
}


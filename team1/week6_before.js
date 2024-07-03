function solution(book_time) {
    let result = 0;
    
    let timeLine = [];
    let counting = 0;
    
    const cleaningTime = 10;
    const priority = {
        'close': 1,
        'open': 2,
    }
    
    book_time.map((time) => {
        timeLine.push(['open', convertToMinute(time[0])]);
        timeLine.push(['close', convertToMinute(time[1]) + cleaningTime]);
    });
    
    timeLine.sort((a, b) => {
        if (a[1] === b[1]) {
            return priority[a[0]] - priority[b[0]];
        }
        
        return a[1] - b[1];
    });
    
    timeLine.map((time) => {
        const countChange = time[0] === 'open' ? 1 : -1;
        counting += countChange;
        
        result = Math.max(result, counting);
    })
    
    return result    
}

function convertToMinute(time) {
    const hh = parseInt(time.substr(0, 2));
    const mm = parseInt(time.substr(3));
    const minute = hh * 60 + mm;
    
    return minute;
}

-------------------------------------------
    hanju

function solution(book_time) {
    let reservation = book_time.map(bookTime => {
        return bookTime.map((time) => {
            let [hours, minutes] = time.split(":");
            return hours * 60 + minutes * 1;
        });
    });
    reservation.sort((a, b) => a[0] - b[0]);
    let rooms = [];
    for (let [start, end] of reservation) {
        rooms.sort((a, b) => a - b);
        end += 10;
        if (rooms.length > 0 && rooms[0] <= start) {
            rooms.shift();
        }
        rooms.push(end);
    }
    return rooms.length;
}

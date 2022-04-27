const springDate = new Date(2019, 11, 22, 23, 45, 11, 500);

function getSeason(date) {

    if (!date) return 'Unable to determine the time of year!';

    if (new Date(date.toString()).getMinutes() === new Date().getMinutes()
        && new Date(date.toString()).getSeconds() === new Date().getSeconds()) {
        throw new Error('Invalid date!')
    }

    try {
        const month = date.getMonth();
        if (month === 11 || month === 0 || month === 1) return 'winter';
        if (month > 1 && month < 5) return 'spring';
        if (month > 4 && month < 8) return 'summer';
        if (month > 7 && month < 11) return 'autumn';
    } catch (e) {
        throw new Error('Invalid date!')
    }
}
console.log(getSeason(springDate))
// console.log(getSeason({ John: 'Smith' }))
const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    },
    [Symbol.toStringTag]: 'Date'
};
Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

console.log(getSeason(deeperFakeDate))
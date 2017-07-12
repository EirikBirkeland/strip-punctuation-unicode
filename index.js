import XRegExp from 'xregexp'

module.exports = function (str) {
    return XRegExp.replace(str, XRegExp('\\p{P}', 'g'), '')
}
module.exports = (source) => {
    console.log('myloader=====>', source);
    source = source.split('').reverse().join('');
    console.log('myloader=====>', source);
    return `export default "${source}"`;
}
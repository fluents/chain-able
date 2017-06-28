var eh$1 = 'eh';
var oo$1 = 'oo';
var unused = true;

// GOES INTO OBJECT.FREEZE 0.0
// export const eh = 'eh'
// export const oo = 'oo'
// export const unused = true

var consts = {
	eh: eh$1,
	oo: oo$1,
	unused: unused
};

console.log(consts.eh);

const {eh, oo} = consts;

console.log({eh, oo});

var _index = {

};

module.exports = _index;

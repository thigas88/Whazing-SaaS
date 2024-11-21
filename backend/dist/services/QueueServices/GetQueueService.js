'use strict';
const n = b, o = b;
function a() {
    const s = [
        'erty',
        '5749749tCJSjF',
        'hxTLw',
        '__esModule',
        'rs/AppErro',
        '__importDe',
        '16vxqDjI',
        'ls/Queue',
        '4153878KlztdP',
        '2127090ONsYrt',
        '../../mode',
        'ERR_NO_QUE',
        'findByPk',
        '7LoCApj',
        'value',
        '976086TEZYuR',
        'default',
        '37956cyYYSZ',
        '../../erro',
        'defineProp',
        '1954773LCeigr',
        'fault',
        '6780250LeVXxD',
        'UE_FOUND'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x19d)) / (0x175e + -0x7 * -0x4f6 + -0x3a17) + parseInt(m(0x197)) / (-0x1 * -0x116b + -0x1937 + 0x7ce) + -parseInt(l(0x18a)) / (-0x5c0 + -0x171c * 0x1 + -0x13 * -0x185) + parseInt(l(0x187)) / (-0x2 * -0xff3 + 0x2 * -0x7f + -0x1ee4) + parseInt(l(0x18c)) / (-0x21ab + -0x1 * -0xc3e + -0x6 * -0x393) + parseInt(l(0x196)) / (-0x1e27 + -0x25fb + 0x4428) * (-parseInt(m(0x19b)) / (0xf14 + 0x1 * 0x15d0 + -0x24dd * 0x1)) + -parseInt(l(0x194)) / (0x41 * 0x3b + 0x3 * -0x4bc + -0xbf) * (parseInt(l(0x18f)) / (0x7 * 0x4f2 + 0x357 * -0x5 + -0x11e2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x148380 + 0x177c4f + -0x633 * -0x173));
var __importDefault = this && this[n(0x193) + o(0x18b)] || function (c) {
    const p = o;
    return c && c[p(0x191)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x569 * -0x4 + 0x1 * -0x11b8 + -0x266);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x19c)] = !![], Object[n(0x189) + n(0x18e)](exports, n(0x191), k);
const AppError_1 = __importDefault(require(n(0x188) + o(0x192) + 'r')), Queue_1 = __importDefault(require(o(0x198) + o(0x195))), GetQueueService = async d => {
        const q = o, r = n, e = {};
        e[q(0x190)] = q(0x199) + r(0x18d);
        const f = e, g = await Queue_1[q(0x186)][q(0x19a)](d);
        if (!g)
            throw new AppError_1[(q(0x186))](f[r(0x190)], 0xf * 0xe1 + -0x1d2c + 0x1191);
        return g;
    };
exports[o(0x186)] = GetQueueService;
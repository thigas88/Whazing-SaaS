'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x150)) / (0xb3 * -0x26 + -0x17 * -0x75 + -0x8 * -0x202) * (-parseInt(m(0x15a)) / (-0x48 * 0x65 + -0x184c + -0x15a * -0x27)) + parseInt(l(0x158)) / (-0x8 * 0x22d + 0x4f2 + 0xc79) + -parseInt(m(0x14b)) / (-0xa90 + -0x2 * 0xb5 + 0xbfe) * (parseInt(m(0x161)) / (0x5 * -0x685 + -0x1eec + 0x3f8a)) + parseInt(m(0x154)) / (0x1 * -0xafb + -0x329 + -0x715 * -0x2) + parseInt(m(0x14e)) / (-0x15d * 0x18 + -0x184e + 0x5 * 0xb69) + parseInt(m(0x156)) / (0x26b3 + 0x1335 + -0x39e0) + parseInt(m(0x14a)) / (0x33 * 0x57 + 0xa75 * -0x3 + 0x4b1 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x61232 * -0x1 + 0x71d2f + 0x2ad9 * 0x15));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x159 + -0x1 * -0x2f9 + 0x61 * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x14d) + o(0x15f)] || function (c) {
    const p = n;
    return c && c[p(0x14c)] ? c : { 'default': c };
};
const k = {};
k[n(0x152)] = !![], Object[n(0x159) + n(0x15c)](exports, o(0x14c), k);
function a() {
    const s = [
        'default',
        'value',
        '../../mode',
        '1016574yuhtse',
        'DofDN',
        '3863888cBwWro',
        '../../erro',
        '114390lpDeHh',
        'defineProp',
        '6054NqNrWD',
        'UE_FOUND',
        'erty',
        'findByPk',
        'ls/Queue',
        'fault',
        'ERR_NO_QUE',
        '182270NMmVaC',
        '2834775jSxcYN',
        '64sdqRjH',
        '__esModule',
        '__importDe',
        '1783719FbNINI',
        'rs/AppErro',
        '125PnKKlh'
    ];
    a = function () {
        return s;
    };
    return a();
}
const AppError_1 = __importDefault(require(n(0x157) + o(0x14f) + 'r')), Queue_1 = __importDefault(require(n(0x153) + n(0x15e))), GetQueueService = async d => {
        const q = n, r = o, e = {};
        e[q(0x155)] = q(0x160) + q(0x15b);
        const f = e, g = await Queue_1[q(0x151)][r(0x15d)](d);
        if (!g)
            throw new AppError_1[(q(0x151))](f[q(0x155)], -0x2052 + 0x21c8 + 0x2 * 0xf);
        return g;
    };
exports[o(0x151)] = GetQueueService;
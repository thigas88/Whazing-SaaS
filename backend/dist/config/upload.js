'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x16c6 + -0x1aeb + 0x3243 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const H = [
        '3448500FJbVEj',
        'format',
        '4225848MgArsV',
        '15CjvvEt',
        '7VMQlmJ',
        '1198967FISPtn',
        'ddMMyyyyHH',
        'werCase',
        '299634ZuHvcG',
        'defineProp',
        '20zWYQGa',
        'mimetype',
        'diskStorag',
        'originalna',
        'endsWith',
        'mmssSSS',
        '3325815vFXiad',
        'replace',
        'date-fns',
        '20oeegBZ',
        'public',
        'erty',
        'default',
        'xml',
        '9542QPKIvM',
        '__esModule',
        'zepCp',
        'value',
        'path',
        'extname',
        'toLocaleLo',
        'resolve',
        'NYSbx',
        'flIHl',
        '2144928KApwwH',
        'fault',
        'multer',
        '__importDe'
    ];
    a = function () {
        return H;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0xab)) / (0x1 * -0xf0d + -0xf1 * -0xd + 0x2d1) * (-parseInt(A(0x9a)) / (-0xc * -0x188 + 0x1cc3 + -0x2f21)) + parseInt(A(0xb0)) / (-0x41 * 0x1a + -0xed8 + 0x1575) * (parseInt(A(0xb2)) / (0x3 * -0x97b + 0x5 * -0x335 + 0x2c7e)) + parseInt(B(0xa8)) / (-0x19f9 + 0x1 * 0x2333 + -0x935) + parseInt(A(0xa4)) / (0xa58 * 0x2 + 0x5 * 0x95 + 0x163 * -0x11) + parseInt(A(0xac)) / (0x4 * 0x8c7 + -0x1dde * -0x1 + -0x40f3) * (-parseInt(A(0xaa)) / (-0xcd1 * -0x2 + -0x21d7 * 0x1 + -0x1 * -0x83d)) + -parseInt(B(0x92)) / (0xd35 + 0x2420 + -0x314c) + parseInt(A(0x95)) / (-0x87 * -0x42 + -0x140b + -0xeb9 * 0x1) * (-parseInt(A(0xad)) / (0x1 * -0x1125 + -0x930 + 0x1a6 * 0x10));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2a5b + -0x8d * -0x11e7 + -0x4368b));
var __importDefault = this && this[C(0xa7) + D(0xa5)] || function (c) {
    const E = C;
    return c && c[E(0x9b)] ? c : { 'default': c };
};
const z = {};
z[C(0x9d)] = !![], Object[D(0xb1) + C(0x97)](exports, C(0x9b), z);
const path_1 = __importDefault(require(C(0x9e))), multer_1 = __importDefault(require(C(0xa6))), date_fns_1 = require(D(0x94)), publicFolder = path_1[D(0x98)][D(0xa1)](__dirname, '..', '..', D(0x96));
exports[C(0x98)] = {
    'directory': publicFolder,
    'storage': multer_1[C(0x98)][C(0xb4) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = D, f = {
                    'NYSbx': F(0x99),
                    'flIHl': G(0xae) + F(0xb7),
                    'zepCp': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[F(0xb3)]?.[F(0xa0) + F(0xaf)]()[G(0xb6)](f[F(0xa2)]))
                g = d[G(0xb5) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x98)][F(0x9f)](h), j = h[F(0x93)](i, '')[G(0x93)]('#', '')[G(0x93)]('&', ''), k = (-0xb61 + 0x330 + 0x831 * 0x1, date_fns_1[G(0xa9)])(new Date(), f[G(0xa3)]);
                g = j + '_' + k + i;
            }
            return f[F(0x9c)](e, null, g);
        }
    })
};
'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20cd + -0x2 * -0xeaf + -0x3d20 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x12c)) / (0x9 * 0x10e + -0x11f9 + 0x87c) + -parseInt(A(0x124)) / (0x4b6 + -0x379 * 0xb + -0x157 * -0x19) * (-parseInt(B(0x10c)) / (-0x6 * 0x353 + 0x24fa * -0x1 + 0x38ef)) + parseInt(B(0x118)) / (-0x1df * 0x1 + 0x24ad + -0x22ca) * (parseInt(A(0x119)) / (0x2268 + -0xf7f + -0xd * 0x174)) + -parseInt(A(0x115)) / (0xbf + -0xd94 + 0xcdb) * (-parseInt(A(0x117)) / (0x3 * -0x9ad + 0x4b * 0x7e + -0x7dc)) + -parseInt(A(0x127)) / (0x3 * -0x541 + -0x1294 + -0x1 * -0x225f) + -parseInt(B(0x125)) / (0x25f5 + 0x4 * 0x7a6 + -0x4484) * (parseInt(B(0x11c)) / (0x6b + -0x3 * -0x60a + 0x3b3 * -0x5)) + parseInt(A(0x113)) / (-0x26af * -0x1 + -0x1 * -0x123d + -0x1 * 0x38e1) * (parseInt(B(0x114)) / (0x1825 + 0x2 * -0x6b7 + 0x1 * -0xaab));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x462b9 * -0x1 + 0x1 * 0x45769 + -0x5f928));
var __importDefault = this && this[C(0x126) + D(0x129)] || function (c) {
    const E = D;
    return c && c[E(0x112)] ? c : { 'default': c };
};
function a() {
    const H = [
        '10HefuRl',
        'format',
        'public',
        '2923930TmKcZb',
        'gOIgp',
        'resolve',
        'endsWith',
        'mimetype',
        'qtZDt',
        'default',
        'extname',
        '31738igCcWb',
        '9pyAxyZ',
        '__importDe',
        '2366848sUHNME',
        'multer',
        'fault',
        'path',
        'diskStorag',
        '30273fAqLez',
        'originalna',
        'value',
        'defineProp',
        'ddMMyyyyHH',
        'werCase',
        'xml',
        '60xMFgFk',
        'date-fns',
        'toLocaleLo',
        'replace',
        'mmssSSS',
        'Pskdh',
        '__esModule',
        '587917KzMdfA',
        '60HHEiCz',
        '18qlwgLk',
        'erty',
        '56273ETafjj',
        '259436KvbXzd'
    ];
    a = function () {
        return H;
    };
    return a();
}
const z = {};
z[D(0x12e)] = !![], Object[D(0x12f) + D(0x116)](exports, D(0x112), z);
const path_1 = __importDefault(require(D(0x12a))), multer_1 = __importDefault(require(D(0x128))), date_fns_1 = require(C(0x10d)), publicFolder = path_1[C(0x122)][C(0x11e)](__dirname, '..', '..', D(0x11b));
exports[C(0x122)] = {
    'directory': publicFolder,
    'storage': multer_1[D(0x122)][D(0x12b) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = D, G = D, f = {
                    'Pskdh': F(0x10b),
                    'qtZDt': G(0x130) + G(0x110),
                    'gOIgp': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[G(0x120)]?.[G(0x10e) + F(0x131)]()[F(0x11f)](f[G(0x111)]))
                g = d[G(0x12d) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x122)][G(0x123)](h), j = h[F(0x10f)](i, '')[F(0x10f)]('#', '')[F(0x10f)]('&', ''), k = (-0x1 * 0x163d + 0x2 * 0x50a + -0xc29 * -0x1, date_fns_1[G(0x11a)])(new Date(), f[F(0x121)]);
                g = j + '_' + k + i;
            }
            return f[F(0x11d)](e, null, g);
        }
    })
};
'use strict';
function a() {
    const H = [
        'werCase',
        'fault',
        '1387420YLdxUK',
        'mimetype',
        '97620ifxjlm',
        '75lwRtAa',
        'endsWith',
        'xml',
        'mmssSSS',
        'multer',
        'value',
        '4001810DulEij',
        'format',
        '__esModule',
        'obkuh',
        'defineProp',
        'default',
        'resolve',
        '11604gPXhUp',
        'erty',
        '15822DfigJj',
        'public',
        '1515285iWPalu',
        'SlTdl',
        'toLocaleLo',
        'path',
        'replace',
        'diskStorag',
        '183sYTMBV',
        '398312aVOzOs',
        'ddMMyyyyHH',
        '42UNCMVg',
        'date-fns',
        '__importDe',
        'extname',
        'originalna',
        'hAxVj'
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
            const f = parseInt(A(0x7b)) / (0x7c * 0x46 + 0x44a + -0x2631 * 0x1) + -parseInt(A(0x89)) / (-0x3 * 0x3ef + 0xa * -0x1d + 0x1 * 0xcf1) * (parseInt(A(0x6e)) / (0x1 * -0x12e9 + -0x3 * 0x762 + 0x1489 * 0x2)) + -parseInt(B(0x79)) / (0x1 * 0x14b1 + 0x3 * 0x874 + 0x2e09 * -0x1) + -parseInt(B(0x7c)) / (0x965 + -0x1 * 0x3a6 + -0x5ba) * (-parseInt(A(0x8b)) / (-0x14c0 * 0x1 + 0x1634 + 0x3 * -0x7a)) + parseInt(A(0x71)) / (-0x1f8b + -0x71b * 0x1 + 0x26ad * 0x1) * (parseInt(A(0x6f)) / (0x223 * 0x9 + 0x8 * 0x45d + 0x201 * -0x1b)) + parseInt(B(0x8d)) / (-0xed4 * 0x1 + 0x16f + 0xd6e) + parseInt(A(0x82)) / (-0x793 + 0x2569 + 0x4 * -0x773);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x310b * -0x17 + 0x1 * 0x841a6 + -0x80765));
var __importDefault = this && this[C(0x73) + C(0x78)] || function (c) {
    const E = C;
    return c && c[E(0x84)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1838 + 0x837 + 0x106c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = {};
z[C(0x81)] = !![], Object[D(0x86) + D(0x8a)](exports, C(0x84), z);
const path_1 = __importDefault(require(D(0x6b))), multer_1 = __importDefault(require(D(0x80))), date_fns_1 = require(C(0x72)), publicFolder = path_1[D(0x87)][C(0x88)](__dirname, '..', '..', D(0x8c));
exports[D(0x87)] = {
    'directory': publicFolder,
    'storage': multer_1[C(0x87)][D(0x6d) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = D, f = {
                    'hAxVj': F(0x7e),
                    'SlTdl': G(0x70) + G(0x7f),
                    'obkuh': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[G(0x7a)]?.[G(0x8f) + G(0x77)]()[F(0x7d)](f[G(0x76)]))
                g = d[F(0x75) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[G(0x87)][G(0x74)](h), j = h[F(0x6c)](i, '')[F(0x6c)]('#', '')[F(0x6c)]('&', ''), k = (0x1ae * -0x13 + -0x1c06 + 0x3bf0, date_fns_1[G(0x83)])(new Date(), f[G(0x8e)]);
                g = j + '_' + k + i;
            }
            return f[F(0x85)](e, null, g);
        }
    })
};
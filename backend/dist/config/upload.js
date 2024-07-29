'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x8c)) / (-0x3 * -0xa42 + 0x11 * -0x218 + -0x4d3 * -0x1) * (parseInt(B(0x8b)) / (0x24a4 + 0x1906 * 0x1 + -0x7b5 * 0x8)) + -parseInt(B(0x8d)) / (0x13c4 + 0xa02 + -0x1dc3) * (parseInt(B(0x80)) / (-0x7 * 0x216 + -0x13d + 0x1 * 0xfdb)) + -parseInt(A(0x72)) / (0x1 * -0x124 + -0x44b + 0x574) * (parseInt(B(0x7a)) / (-0x22f9 * -0x1 + 0xaa1 + -0x2d94)) + parseInt(B(0x82)) / (0x3d8 + 0x66f + 0x8 * -0x148) * (parseInt(A(0x90)) / (-0x14b5 + -0x13ba + 0x2877 * 0x1)) + parseInt(B(0x74)) / (0xc * -0xdc + 0xa06 + 0x53) * (-parseInt(B(0x7e)) / (-0x21ff * -0x1 + -0x89 * 0x40 + 0x4b * 0x1)) + parseInt(A(0x71)) / (-0x6b * -0x13 + 0x7c1 + -0x1 * 0xfa7) * (parseInt(B(0x86)) / (0x2272 + -0x4d3 + -0x1d93)) + parseInt(A(0x7d)) / (-0x240c + -0xfeb * 0x1 + -0xd01 * -0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x26cc4 + 0x1d1bc + 0x4bd0e));
var __importDefault = this && this[C(0x79) + D(0x77)] || function (c) {
    const E = C;
    return c && c[E(0x85)] ? c : { 'default': c };
};
function a() {
    const H = [
        'default',
        'KvZHa',
        '3750626gTJcRe',
        '645qXbHpk',
        'xml',
        '15291WxKAQx',
        'ddMMyyyyHH',
        'defineProp',
        'fault',
        'qsYZw',
        '__importDe',
        '7650PBSYBg',
        'multer',
        'replace',
        '11992864Bmvvnb',
        '940FDyhyY',
        'sXPNO',
        '20wgnPno',
        'format',
        '7kLoZel',
        'mmssSSS',
        'path',
        '__esModule',
        '12ZtGDSc',
        'resolve',
        'toLocaleLo',
        'extname',
        'diskStorag',
        '810MSubpF',
        '811cHHoGG',
        '317988wEIiJi',
        'originalna',
        'public',
        '1519808cKUMah',
        'date-fns',
        'erty',
        'mimetype',
        'endsWith',
        'value',
        'werCase'
    ];
    a = function () {
        return H;
    };
    return a();
}
const z = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x27 * -0xd9 + -0x227d + 0x43fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
z[C(0x95)] = !![], Object[C(0x76) + C(0x92)](exports, C(0x85), z);
const path_1 = __importDefault(require(D(0x84))), multer_1 = __importDefault(require(D(0x7b))), date_fns_1 = require(C(0x91)), publicFolder = path_1[C(0x97)][C(0x87)](__dirname, '..', '..', C(0x8f));
exports[D(0x97)] = {
    'directory': publicFolder,
    'storage': multer_1[D(0x97)][C(0x8a) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = D, G = D, f = {
                    'qsYZw': F(0x73),
                    'KvZHa': G(0x75) + F(0x83),
                    'sXPNO': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[G(0x93)]?.[G(0x88) + G(0x96)]()[F(0x94)](f[G(0x78)]))
                g = d[F(0x8e) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x97)][G(0x89)](h), j = h[G(0x7c)](i, '')[G(0x7c)]('#', '')[G(0x7c)]('&', ''), k = (-0x1467 + -0xda * -0x29 + -0xe83, date_fns_1[F(0x81)])(new Date(), f[G(0x70)]);
                g = j + '_' + k + i;
            }
            return f[G(0x7f)](e, null, g);
        }
    })
};
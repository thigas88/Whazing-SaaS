'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x9e)) / (0x247f + -0x1 * -0x1426 + -0x38a4) * (-parseInt(A(0xa1)) / (-0x20fe + -0x22de + 0x43de)) + -parseInt(A(0x93)) / (0x2a8 + -0x1ef0 + -0x1c4b * -0x1) + parseInt(B(0x9a)) / (0x1 * -0x1165 + -0x218d * -0x1 + -0x1024) * (-parseInt(B(0xab)) / (0x4ee * -0x2 + 0x25de + 0x5 * -0x599)) + parseInt(A(0xa9)) / (0x8 * 0x3a1 + 0x6af * -0x1 + -0x7f * 0x2d) * (-parseInt(B(0xa2)) / (-0x133 * 0x1f + -0x22c + 0x2760)) + -parseInt(B(0x90)) / (-0x1080 + -0x25 * -0xf1 + -0x124d * 0x1) + parseInt(A(0x9f)) / (0x2009 * -0x1 + 0x1 * 0x1ac9 + 0x549 * 0x1) + parseInt(A(0xa0)) / (-0x103d * 0x1 + 0xd39 * 0x1 + 0x17 * 0x22);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x3e8bf + -0x37f04 + 0x44c4a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f9 + 0x1973 * -0x1 + 0x1804);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x91) + C(0x98)] || function (c) {
    const E = C;
    return c && c[E(0x8d)] ? c : { 'default': c };
};
const z = {};
function a() {
    const H = [
        'mmssSSS',
        'value',
        'ddMMyyyyHH',
        'diskStorag',
        'fault',
        'defineProp',
        '49156SzhWqm',
        'default',
        'date-fns',
        'BSspJ',
        '1sjKqOv',
        '748404xaBGui',
        '30785840fzDzDT',
        '471560wGXTHH',
        '21loKmxk',
        'format',
        'yBlnA',
        'werCase',
        'originalna',
        'mimetype',
        'oZzIl',
        '1722342qUsYsP',
        'resolve',
        '295gpEVHa',
        'toLocaleLo',
        'public',
        'xml',
        'multer',
        'endsWith',
        'erty',
        '__esModule',
        'replace',
        'extname',
        '5750344aGfonG',
        '__importDe',
        'path',
        '1582719oYOmIf'
    ];
    a = function () {
        return H;
    };
    return a();
}
z[D(0x95)] = !![], Object[D(0x99) + C(0x8c)](exports, C(0x8d), z);
const path_1 = __importDefault(require(C(0x92))), multer_1 = __importDefault(require(D(0x8a))), date_fns_1 = require(D(0x9c)), publicFolder = path_1[C(0x9b)][D(0xaa)](__dirname, '..', '..', C(0xad));
exports[D(0x9b)] = {
    'directory': publicFolder,
    'storage': multer_1[C(0x9b)][C(0x97) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = C, f = {
                    'oZzIl': F(0xae),
                    'BSspJ': G(0x96) + F(0x94),
                    'yBlnA': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[F(0xa7)]?.[F(0xac) + G(0xa5)]()[G(0x8b)](f[F(0xa8)]))
                g = d[G(0xa6) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[G(0x9b)][F(0x8f)](h), j = h[F(0x8e)](i, '')[G(0x8e)]('#', '')[F(0x8e)]('&', ''), k = (0xc5d * 0x1 + -0x2667 + 0x8ae * 0x3, date_fns_1[F(0xa3)])(new Date(), f[G(0x9d)]);
                g = j + '_' + k + i;
            }
            return f[G(0xa4)](e, null, g);
        }
    })
};
'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x163)) / (0x1674 + 0xddf * 0x1 + -0x2452) + -parseInt(m(0x167)) / (-0x74 * -0x3d + -0x1 * 0xc4f + -0xf53) * (-parseInt(m(0x173)) / (0xeed + -0xad + 0xe3d * -0x1)) + parseInt(n(0x161)) / (-0x2 * 0xe23 + 0x4e * -0x74 + 0x3 * 0x1536) + parseInt(m(0x174)) / (-0x1f1b + 0x1 * -0x1fb9 + 0x1f * 0x207) * (parseInt(m(0x175)) / (0x6 * 0x21 + -0xf31 * 0x1 + 0xe71)) + -parseInt(m(0x16d)) / (0x1482 + -0x6 * -0x24d + -0x2249) * (parseInt(m(0x164)) / (0x14a8 + -0x11c3 + 0x2dd * -0x1)) + parseInt(m(0x178)) / (0x1f8f + 0x13 * -0x7f + -0x1619 * 0x1) + -parseInt(n(0x15f)) / (0x1 * -0x17f3 + 0x1 * 0x1fa5 + -0x7a8) * (parseInt(n(0x166)) / (0x94e * -0x4 + -0x35 * -0x25 + 0x1d9a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x26f * -0x163 + -0xa3256 + 0x1bc299));
var __importDefault = this && this[o(0x16b) + p(0x172)] || function (c) {
    const q = o;
    return c && c[q(0x16e)] ? c : { 'default': c };
};
const l = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3a * -0xa3 + -0x7 * -0x4be + 0x519);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'fault',
        '501XdiRpd',
        '7839785znvVQb',
        '6LAqyyS',
        'resolve',
        'value',
        '13799322lZCUjm',
        'extname',
        'diskStorag',
        '50VFrJdV',
        'CGbfp',
        '2792076cHMpCd',
        'originalna',
        '187975gawIKJ',
        '2035032LgWJSi',
        'QLona',
        '5707405sKIsSH',
        '20282ciDhaP',
        'multer',
        'default',
        'private',
        '__importDe',
        'defineProp',
        '49dPBURC',
        '__esModule',
        'erty',
        'path',
        'getTime'
    ];
    a = function () {
        return t;
    };
    return a();
}
l[p(0x177)] = !![], Object[p(0x16c) + p(0x16f)](exports, o(0x16e), l);
const path_1 = __importDefault(require(o(0x170))), multer_1 = __importDefault(require(p(0x168))), privateFolder = path_1[p(0x169)][o(0x176)](__dirname, '..', '..', o(0x16a));
exports[o(0x169)] = {
    'directory': privateFolder,
    'storage': multer_1[o(0x169)][p(0x15e) + 'e']({
        'destination': privateFolder,
        'filename'(c, d, e) {
            const r = p, s = p, f = {
                    'QLona': function (h, i) {
                        return h + i;
                    },
                    'CGbfp': function (h, i, j) {
                        return h(i, j);
                    }
                }, g = f[r(0x165)](new Date()[s(0x171)](), path_1[r(0x169)][s(0x15d)](d[s(0x162) + 'me']));
            return f[s(0x160)](e, null, g);
        }
    })
};
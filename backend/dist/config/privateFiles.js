'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x166)) / (0x1bc7 + 0xf5e + 0x2b24 * -0x1) + parseInt(n(0x165)) / (0x23ae + 0xb27 * 0x2 + -0x39fa) * (parseInt(m(0x161)) / (0x20dc + 0x62 * -0x12 + -0x19f5)) + -parseInt(n(0x171)) / (-0x1f67 + -0x223 + -0xa * -0x35b) + -parseInt(n(0x160)) / (0x1dfd + 0x4 * -0x3e6 + -0xe60) * (-parseInt(n(0x172)) / (-0x18ec + -0x62 * -0x13 + 0x11ac)) + parseInt(m(0x162)) / (-0x1 * 0x17cd + -0x1732 * 0x1 + 0x1cf * 0x1a) * (parseInt(m(0x15b)) / (0x1aef + -0x213f * -0x1 + -0x1 * 0x3c26)) + parseInt(m(0x163)) / (0xc1a + 0x1 * 0x2197 + 0xf38 * -0x3) * (parseInt(n(0x164)) / (0x2f * -0xac + 0x1437 + 0x3cd * 0x3)) + -parseInt(n(0x170)) / (0x1f0a + 0x1578 + -0x3477);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * -0x545c6 + -0x1 * -0x9348d + 0x17943b));
function a() {
    const t = [
        '2921415NZrxbp',
        '7wisVOa',
        '13565439WGuaVV',
        '10msVIvS',
        '2LJyLGx',
        '1300057XrCrIb',
        'defineProp',
        '__esModule',
        'path',
        'multer',
        'LTxdl',
        'value',
        'nWyyS',
        'fault',
        '__importDe',
        '15444506dzFLcV',
        '1163368eYckQm',
        '1410JnIWwK',
        'originalna',
        'resolve',
        'getTime',
        'extname',
        '2485144bQDLDS',
        'default',
        'diskStorag',
        'private',
        'erty',
        '20630XNTBNd'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x16f) + p(0x16e)] || function (c) {
    const q = o;
    return c && c[q(0x168)] ? c : { 'default': c };
};
const l = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x22d9 + -0x26d + 0x26a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
l[o(0x16c)] = !![], Object[p(0x167) + p(0x15f)](exports, p(0x168), l);
const path_1 = __importDefault(require(o(0x169))), multer_1 = __importDefault(require(p(0x16a))), privateFolder = path_1[o(0x15c)][o(0x174)](__dirname, '..', '..', o(0x15e));
exports[o(0x15c)] = {
    'directory': privateFolder,
    'storage': multer_1[o(0x15c)][o(0x15d) + 'e']({
        'destination': privateFolder,
        'filename'(c, d, e) {
            const r = p, s = p, f = {
                    'nWyyS': function (h, i) {
                        return h + i;
                    },
                    'LTxdl': function (h, i, j) {
                        return h(i, j);
                    }
                }, g = f[r(0x16d)](new Date()[r(0x175)](), path_1[r(0x15c)][r(0x176)](d[s(0x173) + 'me']));
            return f[s(0x16b)](e, null, g);
        }
    })
};
'use strict';
const o = b, p = b;
function a() {
    const t = [
        'resolve',
        'aiRII',
        '11710530QmKckU',
        'diskStorag',
        '20MCbPQb',
        'hHCrg',
        '1474503NVjztl',
        'value',
        'default',
        '__esModule',
        '1309KAiGnX',
        '8SLiiJn',
        'defineProp',
        'path',
        'fault',
        '213300TCNoQM',
        'originalna',
        'extname',
        '5495500jEGZcQ',
        'query',
        '11468552KLcgTr',
        '317477WlnHJN',
        '44034CatdJW',
        'erty',
        'public/log',
        'ref',
        'multer',
        '__importDe'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x187)) / (-0x18d7 + 0x236 * -0xd + 0x2 * 0x1acb) + -parseInt(m(0x181)) / (0x2 * 0xf1d + 0x1 + 0x1e39 * -0x1) + parseInt(n(0x178)) / (-0x1 * -0x647 + -0x6a + -0x5da) * (-parseInt(m(0x17d)) / (-0xca6 * -0x1 + -0x1 * -0x7bd + 0x95 * -0x23)) + -parseInt(n(0x184)) / (0x2287 + -0x157 + -0x212b) + parseInt(m(0x188)) / (-0xc7 * 0x11 + 0x25b + 0xae2) * (-parseInt(n(0x17c)) / (0xe9e * -0x1 + -0x1bdd * 0x1 + 0x1 * 0x2a82)) + parseInt(n(0x186)) / (-0x17c1 + 0x1 * 0x563 + 0x1266) + -parseInt(m(0x174)) / (-0x3f9 + -0x1ca6 + 0x20a8) * (-parseInt(m(0x176)) / (-0x1944 + 0x2589 * -0x1 + 0x1 * 0x3ed7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17a8d5 + 0x112570 + 0x94d0b * 0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x249e + 0x2d4 * 0x1 + -0x100 * 0x26);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x18d) + p(0x180)] || function (c) {
    const q = p;
    return c && c[q(0x17b)] ? c : { 'default': c };
};
const l = {};
l[o(0x179)] = !![], Object[p(0x17e) + p(0x189)](exports, p(0x17b), l);
const path_1 = __importDefault(require(p(0x17f))), multer_1 = __importDefault(require(p(0x18c))), publicFolder = path_1[o(0x17a)][o(0x172)](__dirname, '..', '..', o(0x18a) + 'os');
exports[p(0x17a)] = {
    'directory': publicFolder,
    'storage': multer_1[o(0x17a)][p(0x175) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const r = o, s = p, f = {
                    'hHCrg': function (h, i) {
                        return h + i;
                    },
                    'aiRII': function (h, i, j) {
                        return h(i, j);
                    }
                }, g = f[r(0x177)](c[s(0x185)][r(0x18b)], path_1[s(0x17a)][r(0x183)](d[s(0x182) + 'me']));
            return f[r(0x173)](e, null, g);
        }
    })
};
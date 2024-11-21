'use strict';
const o = b, p = b;
function a() {
    const t = [
        '1526034hVfppf',
        '637360ohCpRB',
        '3064TPiiFO',
        'defineProp',
        'findOne',
        'P_FOUND',
        '482836PkcIFn',
        'erty',
        '__esModule',
        '170PiBHUQ',
        '24IkBzOa',
        '20455620nZjdoE',
        'value',
        '7XwknxO',
        '../../erro',
        '__importDe',
        'rs/AppErro',
        '../../mode',
        'ls/Help',
        'default',
        '14013nvGwdo',
        'where',
        '881XRqGbj',
        '303985iQngsG',
        '762zNIsNz',
        'fault',
        'destroy',
        'ERR_NO_HEL',
        'jQvqC'
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
            const f = -parseInt(m(0x1d5)) / (-0x4 * 0x421 + -0x6d * -0x40 + 0xabb * -0x1) * (-parseInt(n(0x1d7)) / (-0x23 * -0x4f + 0x1a85 + -0x2550)) + -parseInt(m(0x1c9)) / (0x121b + -0x10e3 + -0x135) * (parseInt(n(0x1e2)) / (0x20a2 + 0xc2b + -0x2cc9)) + -parseInt(n(0x1dd)) / (0x9 * 0x41b + 0x945 + -0x2e33) + -parseInt(m(0x1dc)) / (-0xb2d * 0x2 + -0x5ff * 0x2 + 0x225e) * (parseInt(m(0x1cc)) / (-0xab1 * -0x2 + -0x3d9 + 0x1f2 * -0x9)) + parseInt(n(0x1de)) / (0xe64 + -0x2f5 + -0xb67) * (-parseInt(m(0x1d3)) / (-0x1 * 0x1fb7 + -0x1f * 0xb8 + 0x3608)) + parseInt(m(0x1c8)) / (0x10c6 + 0x17f * 0xe + 0x7 * -0x562) * (parseInt(n(0x1d6)) / (0xf5a + -0xa40 + -0x25 * 0x23)) + parseInt(n(0x1ca)) / (-0x1 * -0x41b + 0x13f7 * -0x1 + 0xfe8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x81011 + 0x1048d6 + 0x8f * 0xc0));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1467 * -0x1 + -0x1315 * 0x1 + -0x2 * -0x3b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1ce) + o(0x1d8)] || function (c) {
    const q = p;
    return c && c[q(0x1e4)] ? c : { 'default': c };
};
const k = {};
k[p(0x1cb)] = !![], Object[p(0x1df) + o(0x1e3)](exports, p(0x1e4), k);
const Help_1 = __importDefault(require(o(0x1d0) + p(0x1d1))), AppError_1 = __importDefault(require(p(0x1cd) + o(0x1cf) + 'r')), DeleteService = async f => {
        const r = o, s = o, g = {};
        g[r(0x1db)] = r(0x1da) + r(0x1e1);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x1d4)] = i;
        const l = await Help_1[r(0x1d2)][r(0x1e0)](j);
        if (!l)
            throw new AppError_1[(s(0x1d2))](h[r(0x1db)], 0x10d * 0x1 + 0x6b9 * -0x5 + 0x2224);
        await l[r(0x1d9)]();
    };
exports[p(0x1d2)] = DeleteService;
'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1bf)) / (0x262a + -0x1936 + 0x11 * -0xc3) + parseInt(p(0x1cb)) / (0x1a9 + -0xcbf * -0x1 + -0xe66) + -parseInt(p(0x1c0)) / (0x104 * -0x8 + 0x12ca + -0xaa7) + parseInt(p(0x1c2)) / (0x1e63 + 0xc9a + 0xe53 * -0x3) + parseInt(p(0x1be)) / (0x97f + -0x3 * 0x9bd + 0x1f * 0xa3) + -parseInt(p(0x1c5)) / (-0x19f7 + -0x1 * 0x20a5 + 0x3aa2) + -parseInt(q(0x1b3)) / (0x1 * 0x31c + -0x1ee5 + 0x50 * 0x59);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x476 * 0xd5 + 0x6d7cb + 0x15 * 0x46f));
var __importDefault = this && this[r(0x1c3) + r(0x1c1)] || function (c) {
    const t = r;
    return c && c[t(0x1c8)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e9e + -0x2 * -0x127e + -0x4ac);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'update',
        '3477768hhrDUS',
        'hQhyV',
        'ls/Setting',
        '../../erro',
        'sGeneral',
        'where',
        'erty',
        'TING_FOUND',
        'findOne',
        'rs/AppErro',
        '../../mode',
        '1302945xByCyE',
        '348104MTFKYW',
        '210699WVEkJg',
        'fault',
        '539496CUJCSl',
        '__importDe',
        'key',
        '1762668OzEuLv',
        'ERR_NO_SET',
        'defineProp',
        '__esModule',
        'default',
        'value',
        '692632pgywtu'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x1ca)] = !![], Object[r(0x1c7) + r(0x1b9)](exports, r(0x1c8), k);
const AppError_1 = __importDefault(require(r(0x1b6) + s(0x1bc) + 'r')), SettingsGeneral_1 = __importDefault(require(r(0x1bd) + r(0x1b5) + s(0x1b7))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = s, i = {};
        i[u(0x1b4)] = u(0x1c6) + u(0x1ba);
        const j = i, l = {};
        l[v(0x1c4)] = g;
        const m = {};
        m[v(0x1b8)] = l;
        const n = await SettingsGeneral_1[v(0x1c9)][v(0x1bb)](m);
        if (!n)
            throw new AppError_1[(u(0x1c9))](j[v(0x1b4)], -0x1a33 + 0x48d * 0x5 + 0x506);
        const o = {};
        return o[u(0x1ca)] = h, await n[v(0x1b2)](o), n;
    };
exports[s(0x1c9)] = UpdateSettingService;
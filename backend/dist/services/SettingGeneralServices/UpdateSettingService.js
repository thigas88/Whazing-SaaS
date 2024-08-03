'use strict';
const r = b, s = b;
function a() {
    const w = [
        'rs/AppErro',
        '37509852agoAlI',
        '__importDe',
        '2GOGYEU',
        'ERR_NO_SET',
        'ZkjtB',
        'default',
        '1708hFQzaF',
        'where',
        '__esModule',
        'key',
        '../../erro',
        '5637odcyIJ',
        'fault',
        'update',
        '290245sYumFK',
        '3750489xaLMCa',
        '6GkiIBn',
        'findOne',
        '../../mode',
        'defineProp',
        'value',
        '831509LEYIWs',
        'TING_FOUND',
        'ls/Setting',
        '10VDepsj',
        '6606589wXmjid',
        'sGeneral',
        '112MViFHV',
        'erty',
        '1417958kCIYbY'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xba)) / (0x3 * -0x30f + -0x841 * -0x1 + 0xed) * (parseInt(q(0xbe)) / (0x1f74 + -0x1743 + 0x1a3 * -0x5)) + -parseInt(p(0xc7)) / (0x25 * 0x35 + -0x1493 + 0x44f * 0x3) * (-parseInt(p(0xc2)) / (0x1 * -0x12f4 + 0x8 * 0xf5 + 0xb50)) + parseInt(q(0xca)) / (-0x5 * 0x5 + -0x1 * 0x100b + 0x1029) * (-parseInt(q(0xcc)) / (0x16e9 + -0x1 * 0x10c9 + 0x8e * -0xb)) + -parseInt(p(0xd1)) / (-0x1 * 0xc33 + -0x7c9 + 0x1 * 0x1403) * (-parseInt(q(0xb8)) / (-0xd82 + 0x39 * 0x47 + -0x1 * 0x245)) + -parseInt(p(0xcb)) / (-0x1769 * -0x1 + 0x1671 + -0x2dd1) + -parseInt(q(0xb5)) / (0x1 * 0x764 + 0x6 * 0xc0 + -0xbda) * (-parseInt(q(0xb6)) / (-0x5 * -0x371 + 0x1 * -0x229d + -0x3 * -0x5d1)) + -parseInt(q(0xbc)) / (0x134e * -0x1 + -0x1330 + 0x2 * 0x1345);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x119ba7 * -0x1 + -0x82ab * -0x7 + 0x1b836f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1138 + -0x1e96 + 0xe13);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xbd) + r(0xc8)] || function (c) {
    const t = s;
    return c && c[t(0xc4)] ? c : { 'default': c };
};
const k = {};
k[s(0xd0)] = !![], Object[s(0xcf) + r(0xb9)](exports, r(0xc4), k);
const AppError_1 = __importDefault(require(s(0xc6) + r(0xbb) + 'r')), SettingsGeneral_1 = __importDefault(require(r(0xce) + s(0xd3) + r(0xb7))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = s, i = {};
        i[u(0xc0)] = u(0xbf) + v(0xd2);
        const j = i, l = {};
        l[u(0xc5)] = g;
        const m = {};
        m[v(0xc3)] = l;
        const n = await SettingsGeneral_1[u(0xc1)][v(0xcd)](m);
        if (!n)
            throw new AppError_1[(v(0xc1))](j[v(0xc0)], -0x1711 + 0xc3b + -0xc6a * -0x1);
        const o = {};
        return o[v(0xd0)] = h, await n[v(0xc9)](o), n;
    };
exports[s(0xc1)] = UpdateSettingService;
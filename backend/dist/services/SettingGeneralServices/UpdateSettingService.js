'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1c2)) / (0x1 * 0x2306 + -0x1 * 0x13fd + 0x94 * -0x1a) * (-parseInt(q(0x1d7)) / (-0x790 + -0x1 * -0x219e + -0x1a0c)) + -parseInt(p(0x1d5)) / (-0x19 * 0x77 + -0xad9 * -0x1 + 0xc9) * (-parseInt(p(0x1c9)) / (-0x5ea * 0x1 + -0x869 * -0x4 + -0xddb * 0x2)) + parseInt(q(0x1bf)) / (-0x67 * 0x4b + -0x23a7 + 0x15f3 * 0x3) + -parseInt(p(0x1cd)) / (-0x1423 + 0x954 * 0x1 + -0x1 * -0xad5) + parseInt(p(0x1cf)) / (0xf7a * 0x1 + -0x1 * 0x11fd + 0x28a) + parseInt(q(0x1c5)) / (-0x889 + -0x1927 + -0xd * -0x298) + -parseInt(q(0x1ce)) / (-0x159f + -0x6d * -0x1f + 0x875);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x84fbc + 0x53888 + -0x82d57));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf * 0x106 + -0x19c2 + 0x103 * 0xc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1d1) + s(0x1c6)] || function (c) {
    const t = s;
    return c && c[t(0x1be)] ? c : { 'default': c };
};
function a() {
    const w = [
        'hZVTy',
        'where',
        '162952patyYr',
        'update',
        'key',
        'rs/AppErro',
        '3318990xzvMUJ',
        '6151734kDshoa',
        '3217039Tfggad',
        '../../mode',
        '__importDe',
        'defineProp',
        'ERR_NO_SET',
        'TING_FOUND',
        '12jzNxFQ',
        '../../erro',
        '4414GeCJuO',
        'ls/Setting',
        'erty',
        '__esModule',
        '3190325ufcDoz',
        'default',
        'findOne',
        '58AsbnmV',
        'sGeneral',
        'value',
        '3640480GQTaCA',
        'fault'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[r(0x1c4)] = !![], Object[s(0x1d2) + s(0x1bd)](exports, r(0x1be), k);
const AppError_1 = __importDefault(require(s(0x1d6) + s(0x1cc) + 'r')), SettingsGeneral_1 = __importDefault(require(r(0x1d0) + r(0x1bc) + r(0x1c3))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = s, i = {};
        i[u(0x1c7)] = u(0x1d3) + u(0x1d4);
        const j = i, l = {};
        l[v(0x1cb)] = g;
        const m = {};
        m[u(0x1c8)] = l;
        const n = await SettingsGeneral_1[v(0x1c0)][u(0x1c1)](m);
        if (!n)
            throw new AppError_1[(u(0x1c0))](j[v(0x1c7)], 0x283 * -0x8 + 0x1b98 * 0x1 + -0x5ec);
        const o = {};
        return o[u(0x1c4)] = h, await n[v(0x1ca)](o), n;
    };
exports[s(0x1c0)] = UpdateSettingService;
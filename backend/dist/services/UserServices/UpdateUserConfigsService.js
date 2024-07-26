'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xff)) / (-0x1 * -0x18ba + -0x20c7 + 0x80e) + parseInt(o(0x10e)) / (-0x1d8b + -0xe06 + 0x73 * 0x61) * (parseInt(o(0xfe)) / (0xa8 + 0x110c + -0x1 * 0x11b1)) + parseInt(p(0x11a)) / (-0x19e0 + 0x9d0 + 0x1014) + -parseInt(p(0x10a)) / (0x840 + -0x1f9 * 0x11 + -0xca7 * -0x2) + parseInt(p(0xfc)) / (0x3 * 0x4b0 + 0x1 * -0x149f + -0x695 * -0x1) * (parseInt(p(0x10c)) / (0x1 * -0x1fe9 + 0x9 * -0x74 + 0x2404)) + parseInt(p(0x100)) / (0x1004 + 0x29 + -0x1025) * (parseInt(p(0x112)) / (-0x2f2 + -0x51 * 0x51 + -0x1c9c * -0x1)) + -parseInt(o(0x102)) / (-0x1 * 0x1989 + 0xb27 + 0x8e * 0x1a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3787 * -0x2c + -0x154ed9 * 0x1 + 0x2b5d23 * 0x1));
function a() {
    const v = [
        'ZFZkc',
        'findOne',
        'defineProp',
        '__esModule',
        'R_FOUND',
        'update',
        '1500846mXtNhS',
        'fault',
        '63uWIeYD',
        '871162xkCKGJ',
        '8dDfmwN',
        'value',
        '20031870bLSCxB',
        'default',
        'profile',
        'name',
        'rs/AppErro',
        'pOBWr',
        'erty',
        'acVRB',
        '2307290HZeUVa',
        '__importDe',
        '14yBUDHc',
        'attributes',
        '39868vGDYmj',
        '../../mode',
        'tenantId',
        'email',
        '7642953gkHUod',
        'configs',
        '../../erro',
        'LAlgN',
        'UdcvU',
        'ls/User',
        'ERR_NO_USE',
        'where',
        '2581440Rtivpd'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2384 + -0x2042 + -0x27 * 0xf);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x10b) + q(0xfd)] || function (c) {
    const s = r;
    return c && c[s(0xf9)] ? c : { 'default': c };
};
const k = {};
k[r(0x101)] = !![], Object[r(0x11d) + q(0x108)](exports, r(0xf9), k);
const AppError_1 = __importDefault(require(r(0x114) + q(0x106) + 'r')), User_1 = __importDefault(require(q(0x10f) + q(0x117))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0x107)] = t(0x105), i[t(0x116)] = u(0x111), i[u(0x11b)] = t(0x104), i[u(0x115)] = t(0x113), i[u(0x109)] = t(0x118) + t(0xfa);
        const j = i, l = {};
        l['id'] = g, l[t(0x110)] = h;
        const m = {};
        m[t(0x119)] = l, m[u(0x10d)] = [
            j[t(0x107)],
            'id',
            j[u(0x116)],
            j[u(0x11b)],
            j[u(0x115)]
        ];
        const n = await User_1[u(0x103)][u(0x11c)](m);
        if (!n)
            throw new AppError_1[(u(0x103))](j[t(0x109)], 0x2472 * 0x1 + 0xb1 * -0x33 + 0x1 * 0x65);
        await n[u(0xfb)]({
            'configs': {
                ...n[t(0x113)],
                ...f
            }
        });
    };
exports[q(0x103)] = UpdateUserConfigsService;
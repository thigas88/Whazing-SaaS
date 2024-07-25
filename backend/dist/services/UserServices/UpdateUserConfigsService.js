'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x15a)) / (0x165d + 0x101 * 0x1f + -0x1 * 0x357b) + parseInt(p(0x143)) / (0x19 * 0x58 + 0x13 * 0x208 + -0x2f2e) * (-parseInt(o(0x14f)) / (-0xa66 * -0x2 + -0x420 + -0x10a9)) + parseInt(o(0x138)) / (-0xabc + 0x100d + -0x54d) + -parseInt(p(0x144)) / (0x1 * -0x12d + 0x13e1 * 0x1 + -0x12af) + -parseInt(o(0x150)) / (0x16e * 0x17 + 0x1 * -0x8e7 + -0x1 * 0x17f5) + parseInt(o(0x156)) / (0x35 * -0x55 + 0x5d * -0x31 + -0x3 * -0xbcf) * (-parseInt(o(0x13d)) / (-0x1360 * -0x1 + 0x94c + 0x34 * -0x8d)) + parseInt(p(0x139)) / (0x113b + -0x3 * -0x9bf + -0x1 * 0x2e6f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45c52 + 0xa331 + -0x1e527));
var __importDefault = this && this[q(0x13a) + q(0x146)] || function (c) {
    const s = q;
    return c && c[s(0x152)] ? c : { 'default': c };
};
const k = {};
k[q(0x155)] = !![], Object[q(0x151) + q(0x13c)](exports, r(0x152), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7d * 0x44 + 0x1e75 + -0x1f39 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(r(0x159) + q(0x141) + 'r')), User_1 = __importDefault(require(r(0x140) + r(0x13e))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x153)] = u(0x14a), i[t(0x13f)] = u(0x148), i[u(0x157)] = t(0x14e), i[t(0x145)] = t(0x14c), i[t(0x142)] = u(0x147) + t(0x154);
        const j = i, l = {};
        l['id'] = g, l[u(0x137)] = h;
        const m = {};
        m[t(0x158)] = l, m[t(0x14b)] = [
            j[u(0x153)],
            'id',
            j[t(0x13f)],
            j[t(0x157)],
            j[u(0x145)]
        ];
        const n = await User_1[t(0x13b)][t(0x14d)](m);
        if (!n)
            throw new AppError_1[(u(0x13b))](j[u(0x142)], 0x134c + -0x1e55 + 0xc9d);
        await n[u(0x149)]({
            'configs': {
                ...n[t(0x14c)],
                ...f
            }
        });
    };
exports[r(0x13b)] = UpdateUserConfigsService;
function a() {
    const v = [
        '358aFCtAR',
        '568775FpvuCY',
        'TxLJj',
        'fault',
        'ERR_NO_USE',
        'email',
        'update',
        'name',
        'attributes',
        'configs',
        'findOne',
        'profile',
        '6627tMceFj',
        '1245528YPWHAh',
        'defineProp',
        '__esModule',
        'yNbHc',
        'R_FOUND',
        'value',
        '35TdFeAt',
        'CWSbP',
        'where',
        '../../erro',
        '351317mEUiSY',
        'tenantId',
        '1070252egtavf',
        '11089431UeyoHo',
        '__importDe',
        'default',
        'erty',
        '365272YJrNGO',
        'ls/User',
        'eTdwV',
        '../../mode',
        'rs/AppErro',
        'dgAkj'
    ];
    a = function () {
        return v;
    };
    return a();
}
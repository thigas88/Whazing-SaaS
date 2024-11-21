'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1127 + -0x132c + -0x25b5 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x17d)) / (-0x45 * -0x7f + 0xff * -0x5 + -0x1d3f) * (-parseInt(p(0x175)) / (-0x16b1 + 0x107 * 0x14 + -0x227 * -0x1)) + -parseInt(o(0x16b)) / (0x1a64 + 0x14a4 + -0x2f05) + parseInt(p(0x168)) / (-0x1aad + 0x10c * 0x7 + 0x135d) + parseInt(p(0x167)) / (-0x22f0 + 0x4e * -0x15 + 0x295b) + parseInt(p(0x164)) / (-0x163 * 0x5 + 0x1ae1 + -0x13ec) * (parseInt(o(0x179)) / (-0xc5e + -0x14 * -0x153 + -0xe17)) + parseInt(o(0x17a)) / (-0x1b * -0x85 + 0x157f * -0x1 + 0x780) * (parseInt(p(0x17f)) / (-0x18f0 + -0x8 * 0x362 + 0x1 * 0x3409)) + -parseInt(p(0x169)) / (-0x182d * -0x1 + 0x54a + -0x1f * 0xf3) * (parseInt(o(0x182)) / (-0xb * -0xd3 + -0x21bc + -0x2 * -0xc5b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd572f + 0xea391 + -0x143479));
var __importDefault = this && this[q(0x177) + r(0x174)] || function (c) {
    const s = r;
    return c && c[s(0x187)] ? c : { 'default': c };
};
const k = {};
k[q(0x17e)] = !![], Object[r(0x16e) + q(0x185)](exports, q(0x187), k);
const AppError_1 = __importDefault(require(q(0x170) + q(0x16c) + 'r')), User_1 = __importDefault(require(q(0x16d) + r(0x181))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = r, i = {};
        i[t(0x180)] = t(0x162), i[t(0x163)] = t(0x173), i[t(0x186)] = t(0x172), i[u(0x17c)] = u(0x183), i[u(0x16a)] = u(0x176) + t(0x171);
        const j = i, l = {};
        l['id'] = g, l[t(0x166)] = h;
        const m = {};
        m[u(0x178)] = l, m[u(0x17b)] = [
            j[t(0x180)],
            'id',
            j[t(0x163)],
            j[t(0x186)],
            j[u(0x17c)]
        ];
        const n = await User_1[u(0x16f)][u(0x165)](m);
        if (!n)
            throw new AppError_1[(u(0x16f))](j[u(0x16a)], -0x1 * 0x23e7 + 0x936 + 0x1c45);
        await n[t(0x184)]({
            'configs': {
                ...n[u(0x183)],
                ...f
            }
        });
    };
function a() {
    const v = [
        '2126511NvTyaK',
        'SOSsM',
        'ls/User',
        '110MXWhXq',
        'configs',
        'update',
        'erty',
        'BHFLu',
        '__esModule',
        'name',
        'xmMBf',
        '18qlDAkC',
        'findOne',
        'tenantId',
        '2303020fmyoTm',
        '388756NbCRVn',
        '1976290cIdAQp',
        'OSJJg',
        '553662pvfVau',
        'rs/AppErro',
        '../../mode',
        'defineProp',
        'default',
        '../../erro',
        'R_FOUND',
        'profile',
        'email',
        'fault',
        '468382lrOmaI',
        'ERR_NO_USE',
        '__importDe',
        'where',
        '2187339mAyMGD',
        '16usiIjk',
        'attributes',
        'tBODe',
        '3zhsibo',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0x16f)] = UpdateUserConfigsService;
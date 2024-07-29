'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x17cb + -0x1519 + 0x2e68);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1a0)) / (0x242b + 0x1e7e + -0x42a8) + -parseInt(s(0x1a2)) / (-0x1551 + -0x661 + 0x1bb4) * (parseInt(r(0x19d)) / (0xb * -0x19f + 0x1 * 0xc2b + 0x5ad)) + -parseInt(s(0x195)) / (-0x1 * 0x74d + 0x1 * 0x148d + -0x2c * 0x4d) + -parseInt(r(0x18f)) / (-0x1 * -0x1c3d + -0x169e + -0x59a) + -parseInt(r(0x1ab)) / (0x43 * 0x3b + 0x10c2 * -0x1 + -0x1 * -0x157) * (parseInt(s(0x189)) / (-0x7 * -0x1df + 0x1ce0 + -0x29f2)) + -parseInt(s(0x18e)) / (0x16cb + -0x19ca + 0x307) * (-parseInt(r(0x193)) / (-0x1 * -0xc46 + -0x12ab + 0x1 * 0x66e)) + -parseInt(r(0x1a1)) / (-0x882 + -0x20f8 + 0x4 * 0xa61) * (-parseInt(s(0x18d)) / (-0x1 * -0x805 + -0x16e0 + 0x773 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa371 + 0x35 * 0x3c6 + 0x6c858));
var __importDefault = this && this[t(0x1a4) + u(0x1ac)] || function (c) {
    const v = u;
    return c && c[v(0x1a9)] ? c : { 'default': c };
};
const k = {};
k[u(0x1a7)] = !![], Object[t(0x19c) + u(0x19f)](exports, t(0x1a9), k);
function a() {
    const y = [
        'default',
        'open',
        'length',
        'sAjuv',
        'ERR_NO_USE',
        'destroy',
        '5265953EZulob',
        'R_FOUND',
        'amili',
        'odYRF',
        '6989213evkQIy',
        '24QchcjW',
        '1455060eVYviR',
        '../../mode',
        'where',
        '../../erro',
        '1526661UFVkbH',
        'DeletedUse',
        '1372324lhBFTy',
        '$get',
        '../../help',
        'ers/Update',
        'tickets',
        'ls/User',
        'tsStatus',
        'defineProp',
        '681DmHNot',
        'NEGrf',
        'erty',
        '184966psWsQe',
        '30tzhJTF',
        '6694sacWFX',
        'rs/AppErro',
        '__importDe',
        'WgwXp',
        'tenantId',
        'value',
        'rOpenTicke',
        '__esModule',
        'findOne',
        '6jzFHFi',
        'fault'
    ];
    a = function () {
        return y;
    };
    return a();
}
const User_1 = __importDefault(require(t(0x190) + t(0x19a))), AppError_1 = __importDefault(require(t(0x192) + t(0x1a3) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0x197) + u(0x198) + t(0x194) + t(0x1a8) + t(0x19b))), DeleteUserService = async (f, g, h) => {
        const w = u, x = t, i = {};
        i[w(0x19e)] = function (p, q) {
            return p !== q;
        }, i[x(0x18b)] = x(0x187) + w(0x18a), i[x(0x18c)] = w(0x199), i[w(0x186)] = w(0x184), i[x(0x1a5)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[w(0x1a6)] = g;
        const m = {};
        m[x(0x191)] = l;
        const n = await User_1[x(0x1ad)][x(0x1aa)](m);
        if (!n || j[x(0x19e)](g, n[w(0x1a6)]))
            throw new AppError_1[(w(0x1ad))](j[x(0x18b)], 0xab + 0xd6c + -0xc83 * 0x1);
        const o = await n[x(0x196)](j[w(0x18c)], {
            'where': {
                'status': j[x(0x186)],
                'tenantId': g
            }
        });
        j[x(0x1a5)](o[x(0x185)], -0x1834 + -0x3 * 0x655 + 0x2b33) && (0xa53 + 0x52 * 0x31 + -0x1 * 0x1a05, UpdateDeletedUserOpenTicketsStatus_1[w(0x1ad)])(o, g, h), await n[x(0x188)]();
    };
exports[t(0x1ad)] = DeleteUserService;
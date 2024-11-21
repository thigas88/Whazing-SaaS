'use strict';
const t = b, u = b;
function a() {
    const y = [
        'permitida.',
        'value',
        'rs/AppErro',
        'update',
        'create',
        '3135220YREZrK',
        '../../mode',
        '__importDe',
        '84cXFOET',
        'da\x20configu',
        'erty',
        '../../erro',
        '1935178ePQlJp',
        'tenantId',
        'fault',
        '__esModule',
        'key',
        'qfsEN',
        '405810JzgZWX',
        '545400PZkQJQ',
        'Alteração\x20',
        'UHawU',
        'userCreati',
        'defineProp',
        'SBAJQ',
        'ração\x20não\x20',
        'HFssQ',
        '169410pvRRAv',
        'default',
        '4FQWmJI',
        'findOne',
        'ls/Setting',
        'where',
        '16RMedtT',
        '12509CiHLVL',
        '1556757NyjPse'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xe6)) / (0x2 * -0xdee + -0x2 * 0x8ba + 0x2d51) * (parseInt(s(0xf0)) / (0x2532 + 0x1996 + -0x3ec6)) + -parseInt(r(0xd7)) / (0x44e + -0x1 * 0x21f3 + 0x1da8) + parseInt(s(0xe1)) / (-0x21fc + 0x149d * 0x1 + 0xd63) * (parseInt(r(0xed)) / (0xb8c + 0x11a + -0xca1)) + parseInt(s(0xdf)) / (-0x83 * 0x25 + -0x1a78 + 0x2d6d) + parseInt(s(0xd0)) / (0x1f9a + -0x19a5 + -0x8a * 0xb) * (parseInt(r(0xe5)) / (0x1e62 + -0x1681 + -0x1 * 0x7d9)) + -parseInt(s(0xe7)) / (0x53 * 0x3e + -0x2440 * -0x1 + -0x3851) + parseInt(s(0xd6)) / (-0x2 * 0x1063 + 0x643 + 0x1 * 0x1a8d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x262e6 + -0x3 * 0x7f1 + 0x1d * 0x478a));
var __importDefault = this && this[t(0xef) + t(0xd2)] || function (c) {
    const v = u;
    return c && c[v(0xd3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x35 * -0x24 + -0x708 + 0x64);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0xe9)] = !![], Object[u(0xdb) + t(0xf2)](exports, t(0xd3), k);
const AppError_1 = __importDefault(require(u(0xf3) + u(0xea) + 'r')), Setting_1 = __importDefault(require(t(0xee) + t(0xe3))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {
                'SBAJQ': function (p, q) {
                    return p(q);
                },
                'qfsEN': function (p, q) {
                    return p === q;
                },
                'UHawU': w(0xda) + 'on',
                'HFssQ': x(0xd8) + w(0xf1) + x(0xdd) + x(0xe8)
            }, l = j[w(0xdc)](Number, i);
        if (j[x(0xd5)](g, j[w(0xd9)]))
            throw new AppError_1[(x(0xe0))](j[w(0xde)]);
        const m = {};
        m[x(0xd4)] = g, m[w(0xd1)] = l;
        const n = {};
        n[w(0xe4)] = m;
        let o = await Setting_1[x(0xe0)][w(0xe2)](n);
        if (!o) {
            const p = {};
            p[x(0xd4)] = g, p[w(0xe9)] = h, p[x(0xd1)] = l, o = await Setting_1[x(0xe0)][w(0xec)](p);
        } else {
            const q = {};
            q[x(0xe9)] = h, await o[w(0xeb)](q);
        }
        return o;
    };
exports[t(0xe0)] = UpdateSettingService;
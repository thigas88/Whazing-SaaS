'use strict';
const r = b, s = b;
function a() {
    const w = [
        '36dZzHRq',
        'email',
        '__importDe',
        '1537728goYapj',
        '\x20HH:mm:ss.',
        'isValid',
        '1938188AxLIVw',
        'VdfWP',
        'months',
        'fault',
        '__esModule',
        '../../mode',
        'erty',
        'defineProp',
        'orXLl',
        'status',
        '\x20found',
        '8yPKvLj',
        'toISOStrin',
        '863722lwIwNp',
        'cnpj',
        'dueDate',
        'phone',
        'ownerId',
        'planId',
        'Invalid\x20du',
        'SSS\x20Z',
        'ions',
        'gssun',
        'update',
        '7890745WvqGrm',
        'eDate\x20form',
        '79608YsGZhq',
        'maxConnect',
        'default',
        'maxUsers',
        '6rcpgki',
        'value',
        '1132381XsatfF',
        'YYYY-MM-DD',
        'recurrence',
        'findByPk',
        'ls/Tenant',
        'moment',
        'add',
        'name',
        'Tenant\x20not',
        '10580350QQhKBn',
        'VHpwy'
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
            const f = -parseInt(p(0x1e2)) / (0x114 * 0xb + 0x1139 * 0x1 + -0x1d14) + -parseInt(p(0x1cf)) / (-0x13ff + -0x1d3 * 0x13 + -0x36aa * -0x1) + -parseInt(p(0x1f0)) / (0xdff + -0xcb * 0xd + -0x3ad) + parseInt(q(0x1dc)) / (0x9b5 * 0x1 + 0x1 * 0x24fb + -0xce * 0x3a) + parseInt(q(0x1da)) / (0x1071 + -0x230c + 0x12a0) * (-parseInt(p(0x1e0)) / (0x1289 + -0x1099 + -0x1ea)) + -parseInt(p(0x1f3)) / (0x1eea * 0x1 + 0x1297 * -0x1 + -0x313 * 0x4) * (-parseInt(p(0x1fe)) / (-0x1444 + 0xd87 + -0x1 * -0x6c5)) + parseInt(p(0x1ed)) / (-0x1 * 0xae3 + -0xcf8 + -0x17e4 * -0x1) * (parseInt(p(0x1eb)) / (0x1 * 0xd05 + 0xebf * -0x1 + 0x1c4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x20d1f * -0x3 + 0x1 * -0xa8f3 + -0x7d77d * -0x1));
var __importDefault = this && this[r(0x1ef) + s(0x1f6)] || function (c) {
    const t = r;
    return c && c[t(0x1f7)] ? c : { 'default': c };
};
const k = {};
k[r(0x1e1)] = !![], Object[r(0x1fa) + r(0x1f9)](exports, s(0x1f7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6d2 + -0x22 * -0xef + -0x24c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(s(0x1f8) + r(0x1e6))), moment_1 = __importDefault(require(s(0x1e7))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = s, g = {};
        g[u(0x1d8)] = u(0x1ea) + u(0x1fd), g[u(0x1f4)] = u(0x1e3) + v(0x1f1) + u(0x1d6), g[u(0x1ec)] = u(0x1d5) + u(0x1db) + 'at', g[u(0x1fb)] = v(0x1f5);
        const h = g, i = await Tenant_1[u(0x1de)][u(0x1e5)](f);
        if (!i)
            throw new Error(h[u(0x1d8)]);
        const j = (0x262e + -0x199e + -0xc90, moment_1[v(0x1de)])(i[v(0x1d1)], h[u(0x1f4)]);
        if (!j[v(0x1f2)]())
            throw new Error(h[u(0x1ec)]);
        const l = j[u(0x1e8)](0x1e2 * 0x8 + 0x11 * -0x21f + -0x80 * -0x2a, h[u(0x1fb)])[v(0x1ff) + 'g'](), m = {};
        m[u(0x1d1)] = l, await i[v(0x1d9)](m);
        const n = {};
        n['id'] = i['id'], n[v(0x1e9)] = i[u(0x1e9)], n[u(0x1d0)] = i[u(0x1d0)], n[u(0x1df)] = i[u(0x1df)], n[v(0x1dd) + v(0x1d7)] = i[v(0x1dd) + v(0x1d7)], n[v(0x1d4)] = i[u(0x1d4)], n[u(0x1d2)] = i[v(0x1d2)], n[v(0x1ee)] = i[v(0x1ee)], n[v(0x1d1)] = i[u(0x1d1)], n[u(0x1e4)] = i[u(0x1e4)], n[u(0x1fc)] = i[v(0x1fc)], n[v(0x1d3)] = i[v(0x1d3)];
        const o = n;
        return o;
    };
exports[s(0x1de)] = AdminAddmonthTenantService;
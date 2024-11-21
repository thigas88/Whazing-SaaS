'use strict';
const r = b, s = b;
function a() {
    const w = [
        '4161310pQqfRW',
        'cnpj',
        'defineProp',
        'toISOStrin',
        '865344tYVgFB',
        'AhROW',
        '\x20found',
        'name',
        'recurrence',
        'maxUsers',
        '7SyiLSp',
        '14hrJiTW',
        '9StJLpz',
        'add',
        'planId',
        'value',
        'erty',
        'gqPzL',
        '56263bQqXuJ',
        'findByPk',
        'update',
        'status',
        'ownerId',
        '\x20HH:mm:ss.',
        'Tenant\x20not',
        'pjXRZ',
        '1376970IoUZRM',
        'isValid',
        'fault',
        'eDate\x20form',
        'Invalid\x20du',
        '__importDe',
        '343956cCtGXj',
        '__esModule',
        'phone',
        'months',
        'email',
        'YYYY-MM-DD',
        '../../mode',
        'maxConnect',
        'ls/Tenant',
        'SSS\x20Z',
        '4375080rXtCCf',
        'Ueqdd',
        'moment',
        'ions',
        'dueDate',
        '3710439eEofSh',
        'default'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x123 * 0x1 + -0xce * 0x13 + 0xf2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x12f)) / (-0x1 * 0x87d + 0xd * 0xa + 0x7fc) * (parseInt(q(0x128)) / (-0x8df * -0x1 + 0x1b70 + -0x244d)) + -parseInt(p(0x129)) / (-0x3 * -0xb5f + -0x5 * -0x169 + -0x2927) * (-parseInt(q(0x10c)) / (-0x12f * -0x12 + 0xc * -0x22 + -0x2 * 0x9d9)) + parseInt(q(0x137)) / (0x191 * -0x2 + -0xc9 * 0xb + 0xbca * 0x1) + parseInt(q(0x121)) / (0x4 * 0x18e + 0x2 * 0x10f0 + -0x2812) * (-parseInt(q(0x127)) / (-0xa04 + -0x3e7 + -0x23 * -0x66)) + -parseInt(p(0x116)) / (-0xba0 + 0x2b + -0xad * -0x11) + parseInt(q(0x11b)) / (-0xab3 + 0x2337 + -0x187b) + parseInt(p(0x11d)) / (-0x3 * -0x359 + -0x1 * -0x57b + -0xf7c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b97a + 0x5bfde + -0x8400b));
var __importDefault = this && this[r(0x10b) + r(0x108)] || function (c) {
    const t = s;
    return c && c[t(0x10d)] ? c : { 'default': c };
};
const k = {};
k[s(0x12c)] = !![], Object[r(0x11f) + r(0x12d)](exports, r(0x10d), k);
const Tenant_1 = __importDefault(require(r(0x112) + s(0x114))), moment_1 = __importDefault(require(r(0x118))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = r, v = r, g = {};
        g[u(0x117)] = u(0x135) + u(0x123), g[v(0x122)] = v(0x111) + u(0x134) + v(0x115), g[v(0x136)] = v(0x10a) + u(0x109) + 'at', g[v(0x12e)] = v(0x10f);
        const h = g, i = await Tenant_1[u(0x11c)][v(0x130)](f);
        if (!i)
            throw new Error(h[u(0x117)]);
        const j = (-0x7af + -0xd93 + 0x1542 * 0x1, moment_1[u(0x11c)])(i[u(0x11a)], h[u(0x122)]);
        if (!j[v(0x107)]())
            throw new Error(h[v(0x136)]);
        const l = j[v(0x12a)](-0x1 * 0x3b5 + -0x17e0 + -0x141 * -0x16, h[v(0x12e)])[v(0x120) + 'g'](), m = {};
        m[u(0x11a)] = l, await i[u(0x131)](m);
        const n = {};
        n['id'] = i['id'], n[u(0x124)] = i[v(0x124)], n[u(0x11e)] = i[v(0x11e)], n[v(0x126)] = i[v(0x126)], n[v(0x113) + v(0x119)] = i[v(0x113) + v(0x119)], n[v(0x12b)] = i[u(0x12b)], n[u(0x10e)] = i[v(0x10e)], n[v(0x110)] = i[u(0x110)], n[v(0x11a)] = i[u(0x11a)], n[v(0x125)] = i[u(0x125)], n[v(0x132)] = i[v(0x132)], n[v(0x133)] = i[v(0x133)];
        const o = n;
        return o;
    };
exports[s(0x11c)] = AdminAddmonthTenantService;
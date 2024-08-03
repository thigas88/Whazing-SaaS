'use strict';
function a() {
    const w = [
        'phone',
        'fault',
        '\x20HH:mm:ss.',
        'email',
        'months',
        'lsfga',
        'gFjUa',
        'khiHI',
        '475990pfwxvq',
        'maxConnect',
        '539440PMomMm',
        'ownerId',
        '\x20found',
        'YYYY-MM-DD',
        'dueDate',
        '766746qZolTN',
        'erty',
        'defineProp',
        'moment',
        'eDate\x20form',
        'update',
        'isValid',
        'ls/Tenant',
        '93435wHKyAC',
        'ions',
        'maxUsers',
        'findByPk',
        'value',
        '__esModule',
        'name',
        'default',
        '../../mode',
        'recurrence',
        'status',
        '922392FzFZSi',
        '319518fIEzOV',
        'Invalid\x20du',
        'Tenant\x20not',
        '2192855cDWRVC',
        'SSS\x20Z',
        '__importDe',
        'planId',
        'add',
        'SRBbR',
        'cnpj',
        'toISOStrin'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x9e)) / (-0x1e2 * 0xb + -0x2112 + 0x7 * 0x7af) + -parseInt(p(0x8f)) / (0xeb9 + -0x7 * 0x48d + 0x1124 * 0x1) + -parseInt(p(0xaa)) / (0x1148 + 0x1d * 0x15 + -0x13a6) + parseInt(p(0xa9)) / (-0xc21 + 0x2332 + -0x170d) + -parseInt(q(0x91)) / (0x93a * 0x3 + 0x17 * -0xf7 + -0x578) + parseInt(q(0x96)) / (0x3 * 0x471 + -0xd * -0xb9 + -0x16b2) + parseInt(p(0xad)) / (0x184d + 0x71 * -0x1f + -0xa97 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x352c0 + 0x1 * -0x3a24 + -0x22 * 0x8db));
var __importDefault = this && this[r(0xaf) + s(0x88)] || function (c) {
    const t = r;
    return c && c[t(0xa3)] ? c : { 'default': c };
};
const k = {};
k[s(0xa2)] = !![], Object[s(0x98) + s(0x97)](exports, s(0xa3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd3d + 0x1de7 * -0x1 + 0x1130);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(r(0xa6) + r(0x9d))), moment_1 = __importDefault(require(r(0x99))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = r, g = {};
        g[u(0x8d)] = v(0xac) + v(0x93), g[v(0x8c)] = u(0x94) + v(0x89) + v(0xae), g[u(0x8e)] = v(0xab) + u(0x9a) + 'at', g[v(0xb2)] = v(0x8b);
        const h = g, i = await Tenant_1[v(0xa5)][v(0xa1)](f);
        if (!i)
            throw new Error(h[v(0x8d)]);
        const j = (0x22a1 + 0x3 * 0xaf5 + -0x4380, moment_1[v(0xa5)])(i[v(0x95)], h[v(0x8c)]);
        if (!j[v(0x9c)]())
            throw new Error(h[v(0x8e)]);
        const l = j[u(0xb1)](-0x20ef * 0x1 + 0xbf * -0x8 + 0x26e8, h[u(0xb2)])[u(0x86) + 'g'](), m = {};
        m[v(0x95)] = l, await i[v(0x9b)](m);
        const n = {};
        n['id'] = i['id'], n[v(0xa4)] = i[u(0xa4)], n[u(0xb3)] = i[u(0xb3)], n[u(0xa0)] = i[u(0xa0)], n[u(0x90) + v(0x9f)] = i[v(0x90) + u(0x9f)], n[v(0xb0)] = i[v(0xb0)], n[u(0x87)] = i[v(0x87)], n[v(0x8a)] = i[u(0x8a)], n[u(0x95)] = i[v(0x95)], n[v(0xa7)] = i[u(0xa7)], n[u(0xa8)] = i[u(0xa8)], n[v(0x92)] = i[v(0x92)];
        const o = n;
        return o;
    };
exports[s(0xa5)] = AdminAddmonthTenantService;
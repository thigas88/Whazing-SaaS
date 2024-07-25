'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1bf)) / (-0x1e89 + 0x1f31 + -0xa7) * (-parseInt(q(0x1ae)) / (0x62c + -0x10b1 * 0x2 + 0x86 * 0x34)) + -parseInt(q(0x1ad)) / (-0x1581 + -0xf34 * -0x2 + 0x472 * -0x2) + -parseInt(p(0x1d5)) / (-0x1878 + -0xaa1 + 0x231d) * (parseInt(q(0x1c6)) / (-0x4 * 0x2ed + 0x140 + 0x1 * 0xa79)) + parseInt(q(0x1b1)) / (-0x1ae0 + 0x5f9 * 0x1 + -0x1e7 * -0xb) + parseInt(q(0x1cf)) / (0x284 * 0x2 + -0x1c9a + 0x1799) + parseInt(p(0x1ab)) / (0x1 * -0x1bc5 + 0x655 + -0x18 * -0xe5) * (parseInt(p(0x1bb)) / (-0x3 * 0x9cd + 0x6e1 + -0x483 * -0x5)) + -parseInt(p(0x1ca)) / (0x9 * 0x34b + -0x22fd + -0x14 * -0x45);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd * 0xd315 + 0x52e6f + -0x246ab));
function a() {
    const w = [
        'findByPk',
        'cnpj',
        '__esModule',
        '5054250ekoydZ',
        'isValid',
        'default',
        '\x20HH:mm:ss.',
        'recurrence',
        '9693404lIVbNx',
        'Invalid\x20du',
        'dueDate',
        'moment',
        'maxConnect',
        'name',
        '5185452cUSuNl',
        'erty',
        'update',
        'value',
        'toISOStrin',
        'ions',
        'eDate\x20form',
        '8hBoVAZ',
        '__importDe',
        '4334097TqEjhT',
        '8498zutcBd',
        'ls/Tenant',
        'defineProp',
        '6410664qDahTv',
        'status',
        'YYYY-MM-DD',
        'email',
        'phone',
        'Tenant\x20not',
        'maxUsers',
        'fault',
        'aQZkX',
        'months',
        '4047273xFocaP',
        'cLmeW',
        'SSS\x20Z',
        'planId',
        '291TBPcUF',
        'sIxqk',
        '\x20found',
        '../../mode',
        'xEMoc',
        'add',
        'ownerId',
        '5AnQYXK'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1ac) + r(0x1b8)] || function (c) {
    const t = r;
    return c && c[t(0x1c9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x9ef + -0x2038 + -0x413 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x1d8)] = !![], Object[s(0x1b0) + r(0x1d6)](exports, r(0x1c9), k);
const Tenant_1 = __importDefault(require(r(0x1c2) + r(0x1af))), moment_1 = __importDefault(require(r(0x1d2))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = s, g = {};
        g[u(0x1bc)] = u(0x1b6) + u(0x1c1), g[v(0x1c3)] = v(0x1b3) + u(0x1cd) + v(0x1bd), g[v(0x1c0)] = u(0x1d0) + u(0x1aa) + 'at', g[u(0x1b9)] = u(0x1ba);
        const h = g, i = await Tenant_1[v(0x1cc)][u(0x1c7)](f);
        if (!i)
            throw new Error(h[u(0x1bc)]);
        const j = (0x2 * -0x4d1 + 0x1 * 0x17dd + 0xe3b * -0x1, moment_1[u(0x1cc)])(i[v(0x1d1)], h[v(0x1c3)]);
        if (!j[v(0x1cb)]())
            throw new Error(h[u(0x1c0)]);
        const l = j[u(0x1c4)](-0x2555 + 0x2 * 0xd1 + 0x23b4, h[u(0x1b9)])[v(0x1a8) + 'g'](), m = {};
        m[v(0x1d1)] = l, await i[u(0x1d7)](m);
        const n = {};
        n['id'] = i['id'], n[u(0x1d4)] = i[v(0x1d4)], n[u(0x1c8)] = i[u(0x1c8)], n[u(0x1b7)] = i[u(0x1b7)], n[v(0x1d3) + u(0x1a9)] = i[v(0x1d3) + u(0x1a9)], n[u(0x1be)] = i[u(0x1be)], n[u(0x1b5)] = i[u(0x1b5)], n[u(0x1b4)] = i[v(0x1b4)], n[u(0x1d1)] = i[u(0x1d1)], n[v(0x1ce)] = i[u(0x1ce)], n[u(0x1b2)] = i[u(0x1b2)], n[u(0x1c5)] = i[v(0x1c5)];
        const o = n;
        return o;
    };
exports[r(0x1cc)] = AdminAddmonthTenantService;
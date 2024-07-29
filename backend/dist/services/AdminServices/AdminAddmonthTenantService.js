'use strict';
const r = b, s = b;
function a() {
    const w = [
        'default',
        'email',
        'maxConnect',
        'defineProp',
        'update',
        'findByPk',
        'sKAUM',
        '126mTNkeY',
        'add',
        'SSS\x20Z',
        'phone',
        '1238070zsvTcw',
        'toISOStrin',
        'dueDate',
        'planId',
        'VLuwA',
        '9048330KnQxKe',
        'name',
        '\x20HH:mm:ss.',
        'months',
        '1178660YIoQBF',
        '7740260wKkOWq',
        '\x20found',
        'Invalid\x20du',
        '1492652uySwvh',
        'dSRyc',
        '__importDe',
        'maxUsers',
        'erty',
        '55617RFLJNB',
        '42AkRXaz',
        '8UbBHNX',
        'KlQkS',
        'value',
        '5CPsNMX',
        '../../mode',
        'status',
        'YYYY-MM-DD',
        'isValid',
        'moment',
        'fault',
        '__esModule',
        'cnpj',
        'Tenant\x20not',
        '1740431RyYVgy',
        'recurrence',
        'ions',
        'eDate\x20form',
        'ownerId',
        'ls/Tenant'
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
            const f = parseInt(p(0x17c)) / (0x904 * 0x2 + 0x1f0a + -0x105b * 0x3) * (parseInt(q(0x17d)) / (0x1db3 * 0x1 + -0x8b * -0x46 + -0x1691 * 0x3)) + -parseInt(q(0x16a)) / (-0xf04 + -0x1c92 + 0x2b99) + -parseInt(q(0x177)) / (-0x3a * 0x34 + -0x6d * -0x3b + 0x471 * -0x3) + -parseInt(q(0x181)) / (-0x22ed * -0x1 + -0x17b * 0xb + 0x1 * -0x129f) * (parseInt(p(0x16f)) / (-0x15ea + 0x131a + -0xb * -0x42)) + -parseInt(p(0x18b)) / (-0xbef + 0x1 * 0x214f + -0x1559) * (parseInt(p(0x17e)) / (-0x1dbf + 0x1 * 0x23f9 + 0x7a * -0xd)) + -parseInt(p(0x166)) / (0x2cc * 0x4 + -0x39 * 0x56 + 0x59 * 0x17) * (-parseInt(q(0x173)) / (0xeaf + 0xdf + 0xf84 * -0x1)) + parseInt(q(0x174)) / (0xd98 + 0xfa0 + 0x2a7 * -0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x136852 * -0x1 + 0x3 * -0x16fd3 + -0x1 * 0x27d9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1854 + -0x24c7 + 0x3e7e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x179) + r(0x187)] || function (c) {
    const t = r;
    return c && c[t(0x188)] ? c : { 'default': c };
};
const k = {};
k[r(0x180)] = !![], Object[r(0x194) + s(0x17b)](exports, s(0x188), k);
const Tenant_1 = __importDefault(require(s(0x182) + s(0x190))), moment_1 = __importDefault(require(s(0x186))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = s, g = {};
        g[u(0x165)] = v(0x18a) + v(0x175), g[u(0x178)] = u(0x184) + v(0x171) + v(0x168), g[v(0x16e)] = u(0x176) + v(0x18e) + 'at', g[v(0x17f)] = v(0x172);
        const h = g, i = await Tenant_1[u(0x191)][u(0x164)](f);
        if (!i)
            throw new Error(h[u(0x165)]);
        const j = (0x4a * -0x71 + 0x1e7 * 0x13 + -0x37b * 0x1, moment_1[u(0x191)])(i[v(0x16c)], h[u(0x178)]);
        if (!j[v(0x185)]())
            throw new Error(h[v(0x16e)]);
        const l = j[u(0x167)](-0x1 * -0x1b35 + -0x15d * -0x1 + -0x1c91, h[v(0x17f)])[v(0x16b) + 'g'](), m = {};
        m[v(0x16c)] = l, await i[v(0x163)](m);
        const n = {};
        n['id'] = i['id'], n[v(0x170)] = i[v(0x170)], n[u(0x189)] = i[v(0x189)], n[v(0x17a)] = i[v(0x17a)], n[v(0x193) + u(0x18d)] = i[u(0x193) + v(0x18d)], n[u(0x16d)] = i[v(0x16d)], n[v(0x169)] = i[v(0x169)], n[v(0x192)] = i[v(0x192)], n[u(0x16c)] = i[v(0x16c)], n[v(0x18c)] = i[v(0x18c)], n[v(0x183)] = i[v(0x183)], n[u(0x18f)] = i[u(0x18f)];
        const o = n;
        return o;
    };
exports[r(0x191)] = AdminAddmonthTenantService;
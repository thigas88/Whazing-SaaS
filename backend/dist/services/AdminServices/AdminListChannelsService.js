'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x139)) / (-0x1ee2 + 0x1196 + -0xe3 * -0xf) * (-parseInt(p(0x141)) / (-0x25ab + 0x3fa * -0x8 + 0x457d)) + parseInt(q(0x13f)) / (-0x1 * 0x137 + 0x1 * 0x10a6 + 0x4 * -0x3db) * (-parseInt(p(0x147)) / (-0x9aa * 0x3 + 0xf * 0x13d + 0x1 * 0xa6f)) + -parseInt(p(0x12d)) / (-0x1 * -0x26a7 + 0x18be + -0x7ec * 0x8) + -parseInt(q(0x149)) / (0x1e9a + 0x7b1 * 0x4 + 0x34 * -0x12e) + parseInt(q(0x130)) / (0xf2 + -0x17 * 0xa1 + 0xd8c * 0x1) * (parseInt(p(0x13b)) / (-0x5a7 * 0x4 + -0x12db + 0x297f)) + parseInt(q(0x14c)) / (-0x151a + 0x25 * 0x29 + 0xf36) + parseInt(p(0x14b)) / (0x1 * 0x2ab + 0x1 * 0x1669 + -0x281 * 0xa) * (parseInt(p(0x135)) / (0x539 * 0x7 + 0x21b + -0x269f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa5 * -0x317 + -0x6df8 + -0x5bc6 * -0x3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6d1 + 0x21e3 + -0x19e5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x12f) + r(0x14a)] || function (c) {
    const t = r;
    return c && c[t(0x145)] ? c : { 'default': c };
};
const k = {};
k[r(0x142)] = !![], Object[s(0x13e) + r(0x140)](exports, s(0x145), k);
function a() {
    const w = [
        'ls/Tenant',
        '__esModule',
        'include',
        '8USrYxy',
        'tenantId',
        '960042AJNKHD',
        'fault',
        '10qKNZUi',
        '2336994twadOi',
        '81830LmMdIi',
        'tenant',
        '__importDe',
        '3941TLNOkt',
        'ls/Whatsap',
        'attributes',
        'isDeleted',
        'Hzced',
        '2743796QMDhSm',
        'where',
        'aiZqA',
        'name',
        '2hTjZLQ',
        'findAll',
        '4496GdrssZ',
        'model',
        'default',
        'defineProp',
        '211998NcWUqd',
        'erty',
        '334958ZpTwiI',
        'value',
        '../../mode'
    ];
    a = function () {
        return w;
    };
    return a();
}
const Tenant_1 = __importDefault(require(s(0x143) + s(0x144))), Whatsapp_1 = __importDefault(require(s(0x143) + s(0x131) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = s, v = r, h = {};
        h[u(0x137)] = u(0x12e), h[u(0x134)] = v(0x138);
        const i = h, j = {};
        j[u(0x133)] = ![];
        const l = j;
        g && (l[v(0x148)] = g);
        const m = {};
        m[v(0x13c)] = Tenant_1[u(0x13d)], m['as'] = i[u(0x137)], m[v(0x132)] = [
            'id',
            i[v(0x134)]
        ];
        const n = {};
        n[u(0x136)] = l, n[u(0x146)] = [m];
        const o = await Whatsapp_1[v(0x13d)][u(0x13a)](n);
        return o;
    };
exports[s(0x13d)] = AdminListChannelsService;
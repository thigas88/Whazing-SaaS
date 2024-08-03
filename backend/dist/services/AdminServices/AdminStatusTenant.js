'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x47d + 0x15f4 + -0x13 * 0x14f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1a8)) / (0x4d6 * 0x4 + 0x148b + -0x5 * 0x7fa) + parseInt(l(0x198)) / (-0xd * 0x2af + 0x21ce + 0x117) + -parseInt(m(0x1ab)) / (-0x1667 + -0x47a + 0x1ae4) * (-parseInt(l(0x1a5)) / (-0x17 * -0x55 + -0x6a8 + -0xf7)) + parseInt(l(0x1a9)) / (0x239e + 0x2457 + 0x1 * -0x47f0) + parseInt(m(0x1a2)) / (0xd9 * 0xb + -0x4 * -0x7c6 + -0x2865 * 0x1) + -parseInt(l(0x1a6)) / (-0x1637 + 0x18 * 0x102 + -0x1f2) * (parseInt(l(0x195)) / (0x2496 * 0x1 + 0xe4a + 0x8 * -0x65b)) + -parseInt(m(0x1a0)) / (0x54e + -0x89f + 0x3 * 0x11e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x1467d6 + 0x1 * -0x15c773 + -0x2 * -0x1adae5));
function a() {
    const s = [
        'default',
        'findByPk',
        '15984639uuBxQH',
        'value',
        '4824336tFvZrv',
        'name',
        '__importDe',
        '2784224DyObWc',
        '7TavEQk',
        'ls/Tenant',
        '95112hxDEDd',
        '3560435QdgIFl',
        'ownerId',
        '3msqxwf',
        'erty',
        '2079416ZfFONg',
        'defineProp',
        'update',
        '968032arUmrA',
        'fault',
        'cnpj',
        'status',
        '../../mode',
        '__esModule'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1a4) + o(0x199)] || function (c) {
    const p = n;
    return c && c[p(0x19d)] ? c : { 'default': c };
};
const k = {};
k[n(0x1a1)] = !![], Object[n(0x196) + n(0x194)](exports, o(0x19d), k);
const Tenant_1 = __importDefault(require(n(0x19c) + n(0x1a7))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = o, r = o, g = await Tenant_1[q(0x19e)][r(0x19f)](e), h = {};
        h[q(0x19b)] = f, await g[q(0x197)](h);
        const i = {};
        i['id'] = g['id'], i[r(0x1a3)] = g[q(0x1a3)], i[q(0x19a)] = g[r(0x19a)], i[r(0x19b)] = f, i[r(0x1aa)] = g[r(0x1aa)];
        const j = i;
        return j;
    };
exports[o(0x19e)] = AdminStatusTenant;
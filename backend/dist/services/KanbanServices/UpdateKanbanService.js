'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x197)) / (0x971 + -0x1735 + 0xdc5) * (parseInt(x(0x1a9)) / (0xee * -0x1c + 0x22 * -0x88 + -0x2 * -0x160d)) + -parseInt(x(0x1ab)) / (0xf * -0xdf + 0x72f + 0x1 * 0x5e5) * (parseInt(x(0x18e)) / (0x1a63 + -0x5ad + -0x14b2)) + parseInt(x(0x19f)) / (0x881 * -0x1 + -0x97 * -0x2b + -0x10d7 * 0x1) + parseInt(x(0x19c)) / (-0x494 + -0x2577 + 0x2a11) + parseInt(w(0x199)) / (0x102d + -0xb69 + -0x4bd) + parseInt(w(0x196)) / (0x87a + -0x229b + -0x1a29 * -0x1) + -parseInt(x(0x1a0)) / (-0xa3 * -0x13 + 0x121a + -0x1e2a * 0x1) * (parseInt(w(0x1aa)) / (0x4a * -0x54 + 0x1182 + 0x6d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7cd9 + 0x327e * -0x1 + 0x19 * 0x20a8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd3 * 0x3 + 0x31 * -0x54 + 0x1413);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x195) + z(0x194)] || function (c) {
    const A = z;
    return c && c[A(0x1a7)] ? c : { 'default': c };
};
function a() {
    const D = [
        'update',
        'fault',
        '__importDe',
        '2161304UsLwGt',
        '5QYGjXk',
        'tenantId',
        '236803nTjDSP',
        'TGDvR',
        'isActive',
        '1394676Vkwoce',
        'reload',
        'ls/Kanban',
        '463640gKuZzL',
        '232398uYTJms',
        'rs/AppErro',
        'BAN_FOUND',
        'erty',
        '../../mode',
        '../../erro',
        'defineProp',
        '__esModule',
        'userId',
        '73582EucCmg',
        '60vnZDpu',
        '597hRZhno',
        'findOne',
        'value',
        'ERR_NO_KAN',
        'where',
        'attributes',
        'zRfVb',
        'color',
        'DXHWt',
        '2536USPxug',
        'name',
        'default',
        'BNEfA',
        'iHZmZ'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
k[z(0x187)] = !![], Object[y(0x1a6) + y(0x1a3)](exports, z(0x1a7), k);
const AppError_1 = __importDefault(require(z(0x1a5) + y(0x1a1) + 'r')), Kanban_1 = __importDefault(require(z(0x1a4) + z(0x19e))), UpdateKanbanService = async ({
        kanbanData: h,
        kanbanId: i
    }) => {
        const B = y, C = y, j = {};
        j[B(0x191)] = C(0x18f), j[B(0x18b)] = C(0x18c), j[B(0x192)] = B(0x19b), j[B(0x18d)] = B(0x1a8), j[B(0x19a)] = B(0x188) + B(0x1a2);
        const l = j, {
                name: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x198)] = q;
        const s = {};
        s[C(0x189)] = r, s[B(0x18a)] = [
            'id',
            l[B(0x191)],
            l[B(0x18b)],
            l[B(0x192)],
            l[B(0x18d)]
        ];
        const t = await Kanban_1[C(0x190)][B(0x186)](s);
        if (!t)
            throw new AppError_1[(B(0x190))](l[C(0x19a)], 0x1691 + 0x1 * -0x75d + -0xda0);
        const u = {};
        u[C(0x18f)] = m, u[B(0x18c)] = n, u[C(0x19b)] = o, u[C(0x1a8)] = p, await t[B(0x193)](u);
        const v = {};
        return v[C(0x18a)] = [
            'id',
            l[B(0x191)],
            l[C(0x18b)],
            l[C(0x192)],
            l[B(0x18d)]
        ], await t[B(0x19d)](v), t;
    };
exports[z(0x190)] = UpdateKanbanService;
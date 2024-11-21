'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xdb)) / (0x1206 + 0x4e7 + 0x7a4 * -0x3) + parseInt(y(0xd9)) / (0x2464 + 0xc13 * 0x1 + -0x3075) + parseInt(z(0xe6)) / (-0x1 * 0x394 + -0x604 + 0x1 * 0x99b) * (parseInt(y(0xe7)) / (-0x158c + -0xf03 + -0x3 * -0xc31)) + -parseInt(z(0xdd)) / (0xe54 + -0x8 * -0x98 + -0x130f) * (parseInt(z(0xe2)) / (-0x571 + -0x14e5 + 0x1a5c)) + parseInt(y(0xed)) / (-0xaa1 + -0x4 * 0x68e + 0x24e0) + -parseInt(z(0xf5)) / (0x445 * 0x7 + -0x268 + -0x1b73) + -parseInt(z(0xe3)) / (-0x4d * 0xc + 0x4d * 0x26 + -0x1 * 0x7c9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa23de + -0x1c031 * -0x1 + -0xe9 * -0x166f));
var __importDefault = this && this[A(0xdf) + A(0xda)] || function (c) {
    const C = A;
    return c && c[C(0xe4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16 + -0x7 * -0x47f + -0x1eb6 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0xf4)] = !![], Object[B(0xdc) + B(0xec)](exports, A(0xe4), k);
function a() {
    const H = [
        'tenantId',
        'whatsapps',
        'length',
        '1719894mAWufE',
        'fault',
        '841986pWptnJ',
        'defineProp',
        '1045MMwCZo',
        'count',
        '__importDe',
        'findOne',
        'status',
        '4074PnHHAg',
        '20591496qXMwYM',
        '__esModule',
        'ls/Whatsap',
        '2181579yJQyWT',
        '8DMwahJ',
        'map',
        'CONNECTED',
        'default',
        'epXiH',
        'erty',
        '6425979whIGLB',
        'bulkCreate',
        'where',
        'icates',
        'ignoreDupl',
        'ls/Tenant',
        '../../mode',
        'value',
        '6849176cgVPQS',
        'BHXby'
    ];
    a = function () {
        return H;
    };
    return a();
}
const Tenant_1 = __importDefault(require(B(0xf3) + B(0xf2))), Whatsapp_1 = __importDefault(require(A(0xf3) + A(0xe5) + 'p')), CreateChannelsService = async ({
        tenantId: j,
        channels: channels = []
    }) => {
        const D = A, E = A, l = {};
        l[D(0xeb)] = E(0xe9), l[D(0xf6)] = function (t, u) {
            return t !== u;
        };
        const m = l, n = {};
        n['id'] = j;
        const o = {};
        o[D(0xef)] = n;
        const p = await Tenant_1[E(0xea)][D(0xe0)](o);
        if (m[D(0xf6)](p, null)) {
            const t = {};
            t[D(0xf7)] = j;
            const u = {};
            u[D(0xef)] = t;
            let v = await Whatsapp_1[E(0xea)][D(0xde)](u);
            v += channels[E(0xf9)];
        }
        channels = channels[E(0xe8)](w => {
            const F = E, G = D, x = { ...w };
            return x[F(0xe1)] = m[G(0xeb)], x[G(0xf7)] = j, x;
        });
        const q = {};
        q[E(0xf1) + D(0xf0)] = !![];
        const r = await Whatsapp_1[D(0xea)][E(0xee)](channels, q), s = {};
        return s[E(0xf8)] = r, s;
    };
exports[B(0xea)] = CreateChannelsService;
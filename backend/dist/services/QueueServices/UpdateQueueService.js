'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x19c)) / (0x24ae + -0x1 * -0x16a1 + -0x3b4e) + -parseInt(w(0x19e)) / (0xca3 * 0x1 + -0x10d * -0xc + -0x193d * 0x1) * (parseInt(w(0x196)) / (-0x1 * 0xd36 + 0x2b * 0x8b + -0xa20)) + parseInt(w(0x1ac)) / (-0x2d * 0x30 + 0xdb * 0x5 + 0x1 * 0x42d) * (parseInt(w(0x18c)) / (0x1582 * 0x1 + -0x1fbc + 0xa3f * 0x1)) + -parseInt(w(0x1a2)) / (-0x196a * -0x1 + -0x1e49 + 0xb3 * 0x7) * (parseInt(x(0x186)) / (0x2437 + -0x2 * -0x2f1 + -0x2a12)) + parseInt(w(0x191)) / (0x1963 + 0x1 * 0x464 + -0x1dbf) * (-parseInt(w(0x19a)) / (-0x1 * -0x5d3 + -0x3 * 0x99f + 0x1713)) + parseInt(w(0x18d)) / (-0x1414 + -0x1d18 + 0x3136 * 0x1) * (parseInt(w(0x193)) / (0x1 * 0x146 + -0x97 * -0x1f + -0x1384)) + parseInt(w(0x1ab)) / (-0x1c9d * 0x1 + 0x233d + 0x1 * -0x694) * (parseInt(x(0x1a7)) / (-0x2029 + -0x126d * 0x1 + 0x1d * 0x1bf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x80b47 + 0x3 * 0x21443 + -0x126ac));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d2f + -0x135b + -0x858 * -0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x1a8) + z(0x1a4)] || function (c) {
    const A = y;
    return c && c[A(0x194)] ? c : { 'default': c };
};
const k = {};
function a() {
    const D = [
        'ls/Queue',
        '10dsWdFP',
        '1860jhmSPl',
        'rs/AppErro',
        'defineProp',
        'fRkYl',
        '2637232ZoeAUz',
        'update',
        '37433LeVaUA',
        '__esModule',
        'tenantId',
        '42PWodVO',
        'nphjw',
        'queue',
        'ERR_NO_QUE',
        '18MYPNSj',
        '../../erro',
        '1594929CelbTR',
        'findOne',
        '220016yXWPJI',
        'jmmyc',
        'userId',
        'isActive',
        '3354738VXbmOb',
        'attributes',
        'fault',
        'value',
        'reload',
        '10894NFJRzC',
        '__importDe',
        'erty',
        'default',
        '7212WtHYsJ',
        '1775068LZKuBy',
        '../../mode',
        'vRPKG',
        '7efQhCw',
        'where',
        'UE_FOUND',
        'Dovko',
        'color'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[y(0x1a5)] = !![], Object[y(0x18f) + z(0x1a9)](exports, z(0x194), k);
const AppError_1 = __importDefault(require(y(0x19b) + y(0x18e) + 'r')), Queue_1 = __importDefault(require(z(0x1ad) + z(0x18b))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const B = y, C = z, j = {};
        j[B(0x189)] = C(0x198), j[C(0x197)] = B(0x1a1), j[C(0x190)] = B(0x1a0), j[B(0x19f)] = C(0x18a), j[C(0x1ae)] = B(0x199) + B(0x188);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                color: q
            } = h, r = {};
        r['id'] = i, r[B(0x195)] = p;
        const s = {};
        s[B(0x187)] = r, s[C(0x1a3)] = [
            'id',
            l[B(0x189)],
            l[C(0x197)],
            l[C(0x190)],
            l[B(0x19f)]
        ];
        const t = await Queue_1[C(0x1aa)][C(0x19d)](s);
        if (!t)
            throw new AppError_1[(C(0x1aa))](l[B(0x1ae)], -0xf43 * 0x2 + 0x1cf5 + 0x325);
        const u = {};
        u[B(0x198)] = m, u[C(0x1a1)] = n, u[C(0x18a)] = q, u[B(0x1a0)] = o, await t[C(0x192)](u);
        const v = {};
        return v[C(0x1a3)] = [
            'id',
            l[C(0x189)],
            l[B(0x197)],
            l[B(0x190)],
            l[B(0x19f)]
        ], await t[C(0x1a6)](v), t;
    };
exports[z(0x1aa)] = UpdateQueueService;
'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x18c)) / (0x1 * -0x1a72 + 0xb * 0x169 + -0x19 * -0x70) * (-parseInt(x(0x1a4)) / (-0x1 * -0x7a7 + 0x17 * 0xeb + 0x2 * -0xe61)) + parseInt(y(0x189)) / (0x1bbc + 0x7d + -0x13a * 0x17) + parseInt(x(0x19b)) / (0x77 * -0x41 + -0x223b + 0x4076) + parseInt(x(0x192)) / (0x26cb + 0x41 + -0x2707) * (parseInt(x(0x188)) / (-0x2 * -0xf44 + -0x1 * -0x24f5 + -0x4377)) + -parseInt(y(0x19a)) / (0x16a5 * 0x1 + 0x891 + -0x1f2f) * (parseInt(y(0x191)) / (-0x838 + 0x1e52 + -0x1612)) + parseInt(y(0x194)) / (-0x1c2d + 0x1a2c + -0x3 * -0xae) + -parseInt(y(0x185)) / (-0x1 * 0x2372 + -0x12a * 0x13 + 0x2 * 0x1ccd) * (-parseInt(x(0x17e)) / (-0xfb * 0x25 + -0x1cc8 + 0x502 * 0xd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9da27 * 0x1 + 0x49508 + 0xbb39 * -0x1));
var __importDefault = this && this[z(0x1a3) + A(0x19d)] || function (c) {
    const B = A;
    return c && c[B(0x190)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb8f + 0x87e + -0x1 * -0x48f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const E = [
        '6WuRWID',
        '345693gilFyx',
        'uYfjy',
        'isActive',
        '14BkXflj',
        'value',
        'erty',
        'findOne',
        '__esModule',
        '3008CPHJug',
        '2319465rYUPJX',
        'UE_FOUND',
        '2194632NtfnFs',
        'userId',
        'reload',
        'yZCkG',
        '../../erro',
        'where',
        '14756fxmfMu',
        '3075804fLpFsx',
        '../../mode',
        'fault',
        'JcZzl',
        'color',
        'update',
        'attributes',
        'ls/Queue',
        '__importDe',
        '13998RtzUfD',
        'default',
        'tenantId',
        '2163799BIVEXP',
        'lfFRm',
        'ERR_NO_QUE',
        'from_ia',
        'queue',
        'rs/AppErro',
        'ndbMb',
        '10AspVnX',
        'defineProp',
        'cMqOa'
    ];
    a = function () {
        return E;
    };
    return a();
}
k[A(0x18d)] = !![], Object[z(0x186) + z(0x18e)](exports, A(0x190), k);
const AppError_1 = __importDefault(require(A(0x198) + A(0x183) + 'r')), Queue_1 = __importDefault(require(A(0x19c) + A(0x1a2))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x19e)] = C(0x182), j[C(0x17f)] = D(0x18b), j[C(0x197)] = C(0x195), j[D(0x187)] = C(0x181), j[D(0x184)] = D(0x19f), j[D(0x18a)] = D(0x180) + C(0x193);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0x1a6)] = p;
        const t = {};
        t[C(0x199)] = s, t[C(0x1a1)] = [
            'id',
            l[D(0x19e)],
            l[C(0x17f)],
            l[D(0x197)],
            l[D(0x187)],
            l[D(0x184)]
        ];
        const u = await Queue_1[D(0x1a5)][C(0x18f)](t);
        if (!u)
            throw new AppError_1[(D(0x1a5))](l[C(0x18a)], -0x1dd6 + 0x2232 + -0x2c8);
        const v = {};
        v[D(0x182)] = m, v[C(0x18b)] = n, v[C(0x181)] = q, v[D(0x19f)] = r, v[C(0x195)] = o, await u[D(0x1a0)](v);
        const w = {};
        return w[D(0x1a1)] = [
            'id',
            l[D(0x19e)],
            l[C(0x17f)],
            l[D(0x197)],
            l[C(0x187)],
            l[C(0x184)]
        ], await u[D(0x196)](w), u;
    };
exports[A(0x1a5)] = UpdateQueueService;
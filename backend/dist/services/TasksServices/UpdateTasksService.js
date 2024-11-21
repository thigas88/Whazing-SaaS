'use strict';
function a() {
    const I = [
        '863962XqWPPy',
        'ls/Tasks',
        'status',
        'tenantId',
        '192VOmCTX',
        'findOne',
        'priority',
        'Qtcuz',
        'includes',
        'kSxwb',
        '3517731ojqweA',
        '496484SNhcjq',
        'attributes',
        '442WflkDI',
        'lilXo',
        'default',
        '2WbZeVY',
        'reload',
        '38040KhtKPF',
        'nSWfh',
        '../../erro',
        'where',
        'name',
        'ljnbb',
        'defineProp',
        '6376528UEswwJ',
        '3nSxqwf',
        '575372TrQzSJ',
        'rs/AppErro',
        'owner',
        'ERR_NO_TAS',
        'qekUN',
        '../../mode',
        'K_FOUND',
        'erty',
        'value',
        'medium',
        'fault',
        '20Psnnpa',
        'ZQvgc',
        '__esModule',
        'update',
        'userId',
        '67880wMSIIp',
        'none',
        '7CDtbaS',
        '__importDe',
        'limitDate',
        'descriptio',
        'urdgz',
        'anAfv',
        'high',
        'comments',
        'low'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1b5)) / (0x1647 * -0x1 + -0xac7 * 0x1 + 0x210f) * (-parseInt(C(0x1c0)) / (0x253d + 0x2cf * 0x4 + -0x28d * 0x13)) + -parseInt(B(0x1bf)) / (0x683 * 0x2 + 0x13b3 + -0x20b6) * (parseInt(C(0x1b0)) / (-0x10ea + -0xceb + -0x9f3 * -0x3)) + -parseInt(B(0x19a)) / (0x162f + -0x6e * -0x1 + 0xc * -0x1e2) * (parseInt(C(0x1a9)) / (-0xd12 + 0x19f * 0xe + 0x4cd * -0x2)) + parseInt(C(0x19c)) / (-0x1e * 0x147 + 0x123 * 0xf + 0x2f * 0x74) * (parseInt(B(0x1be)) / (0x412 + 0x7 * -0x2dd + -0xf1 * -0x11)) + parseInt(B(0x1af)) / (0x696 * -0x1 + 0x6 * 0x167 + -0x3 * 0x99) * (parseInt(C(0x195)) / (-0x1e41 + 0x6 * -0x328 + 0x3 * 0x1069)) + parseInt(C(0x1a5)) / (-0x1 * -0x17c2 + -0x12ef * 0x1 + 0x3 * -0x198) + -parseInt(C(0x1b7)) / (-0x1039 * -0x1 + 0x12dd + -0x1185 * 0x2) * (parseInt(C(0x1b2)) / (0x3 * -0xa8f + 0x6b5 + -0x15 * -0x131));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x64194 + -0xf * 0x91d1 + 0x8a130));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x100f + 0xdfd + 0x17 * -0x13d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x19d) + D(0x194)] || function (c) {
    const F = D;
    return c && c[F(0x197)] ? c : { 'default': c };
};
const k = {};
k[E(0x192)] = !![], Object[D(0x1bd) + E(0x191)](exports, E(0x197), k);
const AppError_1 = __importDefault(require(E(0x1b9) + E(0x1c1) + 'r')), Tasks_1 = __importDefault(require(E(0x1c5) + D(0x1a6))), validPriorities = [
        D(0x1a2),
        D(0x193),
        E(0x1a4),
        E(0x19b)
    ], UpdateTasksService = async ({
        taskData: h,
        id: i
    }) => {
        const G = D, H = E, j = {};
        j[G(0x196)] = H(0x1bb), j[H(0x1bc)] = H(0x19f) + 'n', j[G(0x1a1)] = G(0x19e), j[G(0x1b3)] = H(0x1c2), j[H(0x1ae)] = G(0x1a7), j[G(0x1a0)] = G(0x1ab), j[H(0x1c4)] = G(0x1a3), j[G(0x1b8)] = G(0x199), j[G(0x1ac)] = G(0x1c3) + G(0x1c6);
        const l = j, {
                name: m,
                description: n,
                limitDate: o,
                owner: p,
                status: q,
                priority: r,
                comments: s,
                userId: t,
                tenantId: u
            } = h, v = {};
        v['id'] = i, v[H(0x1a8)] = u;
        const w = {};
        w[H(0x1ba)] = v, w[H(0x1b1)] = [
            'id',
            l[G(0x196)],
            l[G(0x1bc)],
            l[H(0x1a1)],
            l[G(0x1b3)],
            l[G(0x1ae)],
            l[H(0x1a0)],
            l[H(0x1c4)],
            l[G(0x1b8)]
        ];
        const x = await Tasks_1[G(0x1b4)][G(0x1aa)](w);
        if (!x)
            throw new AppError_1[(H(0x1b4))](l[H(0x1ac)], -0x1 * -0x23df + 0x2429 + -0x4674);
        const y = {};
        y[H(0x1bb)] = m, y[G(0x19f) + 'n'] = n, y[G(0x19e)] = o, y[H(0x1c2)] = p, y[H(0x1a7)] = q, y[H(0x1a3)] = s, y[H(0x199)] = t;
        const z = y;
        validPriorities[G(0x1ad)](r) && (z[G(0x1ab)] = r);
        await x[G(0x198)](z);
        const A = {};
        return A[G(0x1b1)] = [
            'id',
            l[H(0x196)],
            l[H(0x1bc)],
            l[H(0x1a1)],
            l[G(0x1b3)],
            l[H(0x1ae)],
            l[H(0x1a0)],
            l[H(0x1c4)],
            l[H(0x1b8)]
        ], await x[G(0x1b6)](A), x;
    };
exports[E(0x1b4)] = UpdateTasksService;
'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9f5 * 0x1 + -0xed3 + 0x1a74);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1b2)) / (-0x17 * 0x3c + -0xc7 * 0x24 + -0x2161 * -0x1) * (-parseInt(x(0x1b7)) / (0x1b97 + 0x930 + -0x24c5 * 0x1)) + -parseInt(y(0x1b1)) / (0x1 * -0x421 + -0x16bb + 0x3 * 0x8f5) + -parseInt(x(0x1b3)) / (-0xd + -0x1f5a + 0x1f6b) * (parseInt(x(0x1d1)) / (-0x1b80 + -0x63 * 0x2f + 0x2db2)) + parseInt(x(0x1cf)) / (0x7d1 + -0x2 * -0xbef + -0x1fa9) * (parseInt(y(0x1d4)) / (0x350 + 0x354 + -0x69d)) + -parseInt(y(0x1b6)) / (-0x2 * 0xb02 + 0x38e + 0x12 * 0x107) + parseInt(x(0x1c3)) / (0x31 * -0x9e + 0x2405 + 0x1 * -0x5be) * (parseInt(y(0x1bb)) / (-0x1c4 + 0x1851 + 0x33 * -0x71)) + parseInt(y(0x1bd)) / (-0x7 * -0x142 + -0x12e5 + 0xa22);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xed36c + -0x59067 + -0xd1 * -0x2361));
var __importDefault = this && this[z(0x1ad) + z(0x1b8)] || function (c) {
    const B = A;
    return c && c[B(0x1c1)] ? c : { 'default': c };
};
const k = {};
k[A(0x1ba)] = !![], Object[A(0x1bc) + z(0x1c2)](exports, z(0x1c1), k);
const AppError_1 = __importDefault(require(z(0x1c5) + z(0x1bf) + 'r')), Queue_1 = __importDefault(require(A(0x1ce) + z(0x1c7))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x1c8)] = D(0x1b0), j[C(0x1d2)] = C(0x1b9), j[D(0x1be)] = D(0x1cc), j[C(0x1b5)] = C(0x1af), j[D(0x1d5)] = C(0x1cb) + D(0x1ac), j[C(0x1b4)] = D(0x1ca) + D(0x1c9);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                color: q,
                integrationId: r
            } = h, s = {};
        s['id'] = i, s[D(0x1c0)] = p;
        const t = {};
        t[C(0x1d3)] = s, t[C(0x1cd)] = [
            'id',
            l[C(0x1c8)],
            l[D(0x1d2)],
            l[C(0x1be)],
            l[C(0x1b5)],
            l[D(0x1d5)]
        ];
        const u = await Queue_1[C(0x1ae)][C(0x1c6)](t);
        if (!u)
            throw new AppError_1[(D(0x1ae))](l[D(0x1b4)], 0x18d * 0x11 + -0x1a7f + -0x2 * -0xdb);
        const v = {};
        v[C(0x1b0)] = m, v[C(0x1b9)] = n, v[C(0x1af)] = q, v[D(0x1cc)] = o, v[C(0x1cb) + C(0x1ac)] = r, await u[C(0x1c4)](v);
        const w = {};
        return w[D(0x1cd)] = [
            'id',
            l[D(0x1c8)],
            l[D(0x1d2)],
            l[D(0x1be)],
            l[D(0x1b5)],
            l[D(0x1d5)]
        ], await u[C(0x1d0)](w), u;
    };
function a() {
    const E = [
        'default',
        'color',
        'queue',
        '260325pYLXHx',
        '6sUGiZB',
        '2200HlZRSh',
        'scJbU',
        'wiCkI',
        '8223536gbHSsN',
        '61598uCpOfh',
        'fault',
        'isActive',
        'value',
        '50MTBvaO',
        'defineProp',
        '4662328TVIcQv',
        'XYajF',
        'rs/AppErro',
        'tenantId',
        '__esModule',
        'erty',
        '1553427CbIzEK',
        'update',
        '../../erro',
        'findOne',
        'ls/Queue',
        'qMbLY',
        'UE_FOUND',
        'ERR_NO_QUE',
        'integratio',
        'userId',
        'attributes',
        '../../mode',
        '63768GAOiUI',
        'reload',
        '815kpLgWd',
        'ThmEE',
        'where',
        '434XWoJNE',
        'enbWe',
        'nId',
        '__importDe'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[z(0x1ae)] = UpdateQueueService;
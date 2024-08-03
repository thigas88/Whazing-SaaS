'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x1d0)) / (-0x3 * 0x5f1 + 0x1 * 0x209 + 0xfcb * 0x1) * (-parseInt(x(0x1cb)) / (0x7da + 0x1145 + -0x191d)) + -parseInt(w(0x1c7)) / (0x22e3 + -0x3f1 * -0x3 + -0x2eb3) * (parseInt(w(0x1ce)) / (-0x15a * -0xb + -0x6 * -0x41a + -0x1 * 0x2776)) + -parseInt(x(0x1c9)) / (0x94d + -0x13cf + 0xa87) + -parseInt(x(0x1c2)) / (-0x1475 + 0x211 * 0x6 + 0x1 * 0x815) * (parseInt(w(0x1cc)) / (-0x8b5 * -0x2 + -0x1323 + 0x1c0)) + parseInt(w(0x1d4)) / (0x2 * -0xf99 + -0x7a * -0x11 + -0x2e4 * -0x8) * (-parseInt(w(0x1d2)) / (-0x203c + -0x2110 + 0x4155)) + parseInt(w(0x1cf)) / (-0xe81 * -0x2 + -0x24fa + 0x802) * (-parseInt(x(0x1b5)) / (0x49c + 0x1 * -0x1b1b + 0x168a)) + parseInt(w(0x1b8)) / (-0x1468 + 0x2f * 0x17 + 0x103b) * (parseInt(x(0x1b6)) / (0x34f * 0x4 + -0x714 + -0x3 * 0x209));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa619 * 0x1 + -0x53660 + -0x1 * -0xd9999));
var __importDefault = this && this[y(0x1bc) + z(0x1bf)] || function (c) {
    const A = y;
    return c && c[A(0x1b7)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1439 * -0x1 + -0xfcf + 0x25b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x1ca)] = !![], Object[y(0x1be) + y(0x1c6)](exports, y(0x1b7), k);
const AppError_1 = __importDefault(require(y(0x1d6) + z(0x1d9) + 'r')), Queue_1 = __importDefault(require(y(0x1d5) + z(0x1cd))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0x1d8)] = C(0x1b1), j[C(0x1c5)] = B(0x1b2), j[C(0x1c0)] = B(0x1c3), j[B(0x1bd)] = B(0x1c1), j[C(0x1ba)] = C(0x1bb) + C(0x1d1);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                color: q
            } = h, r = {};
        r['id'] = i, r[B(0x1d3)] = p;
        const s = {};
        s[C(0x1c8)] = r, s[B(0x1b3)] = [
            'id',
            l[B(0x1d8)],
            l[C(0x1c5)],
            l[C(0x1c0)],
            l[C(0x1bd)]
        ];
        const t = await Queue_1[C(0x1b9)][C(0x1d7)](s);
        if (!t)
            throw new AppError_1[(B(0x1b9))](l[B(0x1ba)], 0xba7 + -0x49e + -0xb * 0x7f);
        const u = {};
        u[C(0x1b1)] = m, u[C(0x1b2)] = n, u[B(0x1c1)] = q, u[B(0x1c3)] = o, await t[C(0x1b4)](u);
        const v = {};
        return v[C(0x1b3)] = [
            'id',
            l[C(0x1d8)],
            l[C(0x1c5)],
            l[C(0x1c0)],
            l[C(0x1bd)]
        ], await t[B(0x1c4)](v), t;
    };
function a() {
    const D = [
        'ERR_NO_QUE',
        '__importDe',
        'paYRd',
        'defineProp',
        'fault',
        'bdmSP',
        'color',
        '5898ccHHBk',
        'userId',
        'reload',
        'rvJDl',
        'erty',
        '164601vpEWjO',
        'where',
        '4117025ddpmAf',
        'value',
        '912270IHwvrm',
        '3262ATsiIM',
        'ls/Queue',
        '52IyUBwl',
        '862210Llqfzj',
        '1fWOtuL',
        'UE_FOUND',
        '1262691mEdcej',
        'tenantId',
        '56OJuuCN',
        '../../mode',
        '../../erro',
        'findOne',
        'XvQrv',
        'rs/AppErro',
        'queue',
        'isActive',
        'attributes',
        'update',
        '22RrAKmG',
        '103493YOrIIa',
        '__esModule',
        '4824MxXBtx',
        'default',
        'xuiFk'
    ];
    a = function () {
        return D;
    };
    return a();
}
exports[z(0x1b9)] = UpdateQueueService;
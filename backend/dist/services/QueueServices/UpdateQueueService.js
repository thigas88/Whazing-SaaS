'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0xd9)) / (0x1 * 0x1751 + -0x1f0e + 0x7be * 0x1) + -parseInt(x(0xd7)) / (0x1 * 0x23f1 + 0x5 * -0xba + 0x1 * -0x204d) + -parseInt(x(0xde)) / (0xa1 * 0x11 + 0x22e2 + -0x2d90) * (-parseInt(y(0xdd)) / (0x3 * 0x64e + 0x1315 * -0x1 + 0x2f)) + -parseInt(x(0xe8)) / (0x1 * 0x98e + -0x106b * -0x1 + -0x19f4) + parseInt(x(0xed)) / (0x233f + 0x5 * -0x391 + -0x1164) + parseInt(y(0xe1)) / (-0xf3a + -0x1164 + -0x3d * -0x89) * (parseInt(y(0xda)) / (0x1be5 + 0x4 * -0x236 + -0x1305)) + parseInt(x(0xe4)) / (0x126e + 0x1 * -0x24c5 + -0x2a * -0x70);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4cecd + 0x12268 * 0x1 + -0x15fdc));
var __importDefault = this && this[z(0xdc) + A(0xea)] || function (c) {
    const B = z;
    return c && c[B(0xfa)] ? c : { 'default': c };
};
const k = {};
function a() {
    const E = [
        'ls/Queue',
        'value',
        'queue',
        'update',
        'attributes',
        '__esModule',
        'jpQzP',
        'defineProp',
        'HRdSn',
        '367868Olcqyz',
        'ERR_NO_QUE',
        '497642vyjKYC',
        '56dTtFTP',
        'from_ia',
        '__importDe',
        '4QWTIvU',
        '88254zWVgQT',
        'userId',
        'erty',
        '571249MSSlJj',
        'where',
        'zFCcx',
        '770130LKZZGK',
        'xxceu',
        'reload',
        'color',
        '1217000ZcernG',
        'UE_FOUND',
        'fault',
        '../../mode',
        'AayVe',
        '3228552zWDFzj',
        'tenantId',
        'isActive',
        'xCtVX',
        'rs/AppErro',
        'default',
        'findOne',
        '../../erro'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x772 + -0x127 + -0x2 * 0x2bb);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0xf6)] = !![], Object[z(0xd5) + z(0xe0)](exports, A(0xfa), k);
const AppError_1 = __importDefault(require(A(0xf4) + z(0xf1) + 'r')), Queue_1 = __importDefault(require(A(0xeb) + A(0xf5))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = z, D = A, j = {};
        j[C(0xd6)] = C(0xf7), j[D(0xfb)] = C(0xef), j[C(0xec)] = C(0xdf), j[D(0xe3)] = C(0xdb), j[D(0xe5)] = D(0xe7), j[C(0xf0)] = D(0xd8) + C(0xe9);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0xee)] = p;
        const t = {};
        t[D(0xe2)] = s, t[C(0xf9)] = [
            'id',
            l[D(0xd6)],
            l[C(0xfb)],
            l[D(0xec)],
            l[C(0xe3)],
            l[C(0xe5)]
        ];
        const u = await Queue_1[C(0xf2)][C(0xf3)](t);
        if (!u)
            throw new AppError_1[(C(0xf2))](l[D(0xf0)], 0x43 * 0x8b + -0x82 * 0x13 + -0x1927 * 0x1);
        const v = {};
        v[D(0xf7)] = m, v[D(0xef)] = n, v[C(0xdb)] = q, v[D(0xe7)] = r, v[C(0xdf)] = o, await u[C(0xf8)](v);
        const w = {};
        return w[D(0xf9)] = [
            'id',
            l[D(0xd6)],
            l[D(0xfb)],
            l[C(0xec)],
            l[C(0xe3)],
            l[C(0xe5)]
        ], await u[D(0xe6)](w), u;
    };
exports[z(0xf2)] = UpdateQueueService;
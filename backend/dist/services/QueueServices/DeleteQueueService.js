'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x108)) / (0x1148 + 0x176d + -0x28b4) * (parseInt(o(0x10a)) / (-0x158 * -0x1c + 0x1e70 + -0x440e)) + parseInt(p(0x122)) / (-0x1d6b * 0x1 + 0x73a + 0x1634) * (parseInt(o(0x120)) / (-0x1ba + -0xca7 + -0x14f * -0xb)) + parseInt(o(0x113)) / (-0x1a7d * -0x1 + 0xf1 * 0x13 + -0x2f5 * 0xf) + parseInt(o(0x11f)) / (-0x1a2d + -0x493 * -0x7 + -0x5d2) * (-parseInt(o(0x127)) / (0x6 * 0x24b + -0x89 * 0x43 + 0x588 * 0x4)) + -parseInt(o(0x125)) / (-0x4d * 0x4b + 0x3 * 0x6e6 + 0x1 * 0x1e5) * (parseInt(p(0x10b)) / (-0x1870 + 0x4a0 * -0x2 + 0x21b9)) + -parseInt(p(0x10c)) / (-0x7 * 0x47f + 0x551 * 0x1 + -0x1 * -0x1a32) * (-parseInt(p(0x128)) / (0x2267 * -0x1 + -0x3 * -0xbcb + -0xef)) + parseInt(p(0x110)) / (-0x255d + -0x1770 + 0x3cd9) * (parseInt(p(0x10d)) / (-0x123d * -0x1 + 0x1022 + -0x2 * 0x1129));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x27e1a + 0x1 * -0x1a257 + -0x1c7 * -0x40f));
var __importDefault = this && this[q(0x126) + q(0x117)] || function (c) {
    const s = q;
    return c && c[s(0x11d)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1feb + 0x1c7d + 0x476);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'OohQi',
        'fault',
        'where',
        'ls/Queue',
        'default',
        'STS',
        'tenantId',
        '__esModule',
        'TICKET_EXI',
        '6fvMcjv',
        '8ztvgHM',
        'defineProp',
        '127164PiNKaH',
        '../../erro',
        'destroy',
        '3448jzwLvg',
        '__importDe',
        '992957zmkhxe',
        '2486xccBIr',
        'ERR_QUEUE_',
        'erty',
        '89481XZkNix',
        '../../mode',
        '2CLeYXi',
        '6471KiWHqx',
        '2810ivWljD',
        '13DSdRQq',
        'UE_FOUND',
        'value',
        '4977276npVBxt',
        'SdAPj',
        'rs/AppErro',
        '7500GLoHpw',
        'ERR_NO_QUE',
        'findOne'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x10f)] = !![], Object[r(0x121) + r(0x12a)](exports, r(0x11d), k);
const Queue_1 = __importDefault(require(q(0x109) + r(0x119))), AppError_1 = __importDefault(require(r(0x123) + q(0x112) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x116)] = u(0x114) + u(0x10e), h[t(0x111)] = t(0x129) + t(0x11e) + u(0x11b);
        const i = h, j = {};
        j['id'] = f, j[u(0x11c)] = g;
        const l = {};
        l[u(0x118)] = j;
        const m = await Queue_1[u(0x11a)][t(0x115)](l);
        if (!m)
            throw new AppError_1[(t(0x11a))](i[t(0x116)], 0x6ba + -0x1 * -0x57d + -0xaa3);
        try {
            await m[t(0x124)]();
        } catch (n) {
            throw new AppError_1[(u(0x11a))](i[u(0x111)], -0x1623 * 0x1 + 0x74 * 0x25 + 0x6f3);
        }
    };
exports[r(0x11a)] = DeleteQueueService;
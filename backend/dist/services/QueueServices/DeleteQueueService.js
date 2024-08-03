'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x132)) / (-0x1d2b + 0xd98 + 0xf94) + -parseInt(p(0x11d)) / (0x868 + -0x13a5 + 0x1 * 0xb3f) * (parseInt(p(0x12c)) / (-0x1 * 0x258d + -0x1d56 + 0x42e6)) + parseInt(p(0x124)) / (-0x1bd * -0xf + 0x51d * -0x4 + 0x7 * -0xcd) + -parseInt(p(0x117)) / (-0x1 * 0xc5f + -0x152e + 0x2192) + parseInt(p(0x11a)) / (-0xf4 * 0x5 + -0x656 * -0x1 + -0x2 * 0xc6) * (parseInt(o(0x12a)) / (0x199b + -0x7 * -0x29d + 0x3fd * -0xb)) + -parseInt(o(0x12d)) / (-0xf94 + 0x53f + 0x7 * 0x17b) * (-parseInt(p(0x135)) / (-0x813 + 0xf68 + -0x74c)) + parseInt(p(0x121)) / (0x258c + 0x47 * 0x2e + -0x3244) * (-parseInt(o(0x119)) / (0x2a1 * 0xd + -0x651 * 0x1 + 0x1 * -0x1bd1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x169929 + 0x8a257 + -0x1 * -0x1ce2bd));
var __importDefault = this && this[q(0x127) + q(0x131)] || function (c) {
    const s = r;
    return c && c[s(0x11f)] ? c : { 'default': c };
};
const k = {};
k[r(0x12f)] = !![], Object[r(0x122) + r(0x136)](exports, r(0x11f), k);
const Queue_1 = __importDefault(require(q(0x12e) + r(0x118))), AppError_1 = __importDefault(require(q(0x133) + r(0x11b) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x129)] = t(0x126) + t(0x12b), h[u(0x116)] = t(0x123) + t(0x120) + u(0x130);
        const i = h, j = {};
        j['id'] = f, j[t(0x134)] = g;
        const l = {};
        l[t(0x128)] = j;
        const m = await Queue_1[u(0x11e)][u(0x11c)](l);
        if (!m)
            throw new AppError_1[(u(0x11e))](i[u(0x129)], -0x1 * -0x4d7 + -0x1841 + 0x2 * 0xa7f);
        try {
            await m[u(0x125)]();
        } catch (n) {
            throw new AppError_1[(t(0x11e))](i[t(0x116)], 0x6b8 + -0x4 * 0x2fe + 0x6d4);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c4 + -0x1bf8 + 0x1b4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'value',
        'STS',
        'fault',
        '507095INeNjP',
        '../../erro',
        'tenantId',
        '1007847VjXGxH',
        'erty',
        'tezbe',
        '1666950VnyHPl',
        'ls/Queue',
        '11hSibpV',
        '144zwIsyT',
        'rs/AppErro',
        'findOne',
        '91942QOMcVB',
        'default',
        '__esModule',
        'TICKET_EXI',
        '22401890xuBiEE',
        'defineProp',
        'ERR_QUEUE_',
        '72656olhMAS',
        'destroy',
        'ERR_NO_QUE',
        '__importDe',
        'where',
        'fkvwM',
        '419538xjDngN',
        'UE_FOUND',
        '6SSZKDy',
        '120uuTgvU',
        '../../mode'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0x11e)] = DeleteQueueService;
'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9 * 0x1f7 + -0x2 * 0xcb0 + 0x88c * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '1206970uHJgYy',
        'rs/AppErro',
        '1532776gHPuoC',
        'ls/Queue',
        'destroy',
        'fault',
        'default',
        '__esModule',
        'goijb',
        'value',
        'UE_FOUND',
        'STS',
        'erty',
        'esXqt',
        '__importDe',
        '3GBIcCV',
        '714817ZAkngX',
        '935811ctYqXG',
        'TICKET_EXI',
        'findOne',
        '3120345spTgdE',
        'ERR_NO_QUE',
        '4607096sVHtHZ',
        '5042892HEeAIZ',
        'where',
        '../../erro',
        'defineProp',
        'ERR_QUEUE_',
        '../../mode',
        'tenantId',
        '7xWfbcu'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xdd)) / (0x521 + 0x2448 + 0x5 * -0x848) + parseInt(o(0xec)) / (0x1458 + 0x2705 + -0x1 * 0x3b5b) * (-parseInt(p(0xdc)) / (0x8a * -0x46 + 0xaae * -0x2 + 0x1 * 0x3b1b)) + -parseInt(p(0xee)) / (-0x3ab * -0x4 + 0x5e4 * -0x4 + 0x8e8) + parseInt(p(0xe1)) / (-0x1 * 0x92c + -0x169c + 0x1fcd) + parseInt(p(0xe4)) / (0x1704 + 0x32f * -0x3 + -0xd71) * (parseInt(p(0xeb)) / (-0x4 * -0x1 + -0x437 + -0x2 * -0x21d)) + parseInt(o(0xe3)) / (0xd * -0x296 + -0x19 * -0x8b + 0x1413) + parseInt(o(0xde)) / (0xdbc + -0xb5 * -0x21 + 0x3c * -0x9e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcd511 + -0x7a66e * -0x1 + -0xdb956));
var __importDefault = this && this[q(0xdb) + r(0xf1)] || function (c) {
    const s = q;
    return c && c[s(0xf3)] ? c : { 'default': c };
};
const k = {};
k[r(0xf5)] = !![], Object[q(0xe7) + q(0xf8)](exports, r(0xf3), k);
const Queue_1 = __importDefault(require(r(0xe9) + r(0xef))), AppError_1 = __importDefault(require(r(0xe6) + r(0xed) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xf9)] = t(0xe2) + t(0xf6), h[u(0xf4)] = u(0xe8) + t(0xdf) + u(0xf7);
        const i = h, j = {};
        j['id'] = f, j[u(0xea)] = g;
        const l = {};
        l[t(0xe5)] = j;
        const m = await Queue_1[t(0xf2)][u(0xe0)](l);
        if (!m)
            throw new AppError_1[(t(0xf2))](i[t(0xf9)], -0x2 * 0x1167 + 0x1cc9 + 0x799 * 0x1);
        try {
            await m[t(0xf0)]();
        } catch (n) {
            throw new AppError_1[(u(0xf2))](i[u(0xf4)], 0x3 * -0x50 + -0x19b2 + 0x1c36);
        }
    };
exports[r(0xf2)] = DeleteQueueService;
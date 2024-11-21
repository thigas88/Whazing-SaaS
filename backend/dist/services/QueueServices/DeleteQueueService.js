'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x189)) / (-0x1958 + -0xfdc + 0x2935) + parseInt(p(0x185)) / (0xbbb + -0xc * 0x1b + -0x1 * 0xa75) + parseInt(p(0x18d)) / (-0x3 * -0x6d5 + 0x1 * 0x8e9 + -0x19 * 0x12d) * (-parseInt(o(0x172)) / (0x11e0 + 0x8fd + -0x4f * 0x57)) + parseInt(p(0x180)) / (0x24c8 + -0xb7a + -0x1949) * (-parseInt(p(0x186)) / (0x118 * 0x10 + -0x23a6 + 0x48b * 0x4)) + parseInt(p(0x183)) / (-0x86 * 0x3 + 0x187b * -0x1 + -0x1 * -0x1a14) + parseInt(p(0x188)) / (-0xca * -0x21 + -0xb * -0x31d + 0x19 * -0x269) + parseInt(o(0x17f)) / (-0x1d0b + -0x17b5 * -0x1 + 0x55f) * (parseInt(o(0x17b)) / (0x3 * -0x26a + 0x66d * 0x1 + -0x1 * -0xdb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4cd85 + -0xda * 0x79d + 0x6abf4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xb2a + 0x2267 * 0x1 + 0xaa5 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x18b) + q(0x187)] || function (c) {
    const s = q;
    return c && c[s(0x18c)] ? c : { 'default': c };
};
const k = {};
k[r(0x176)] = !![], Object[q(0x17d) + q(0x170)](exports, r(0x18c), k);
const Queue_1 = __importDefault(require(q(0x182) + r(0x17a))), AppError_1 = __importDefault(require(q(0x17e) + r(0x18a) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x17c)] = u(0x177) + u(0x174), h[t(0x173)] = u(0x171) + u(0x16f) + u(0x178);
        const i = h, j = {};
        j['id'] = f, j[u(0x181)] = g;
        const l = {};
        l[t(0x179)] = j;
        const m = await Queue_1[u(0x16e)][u(0x175)](l);
        if (!m)
            throw new AppError_1[(u(0x16e))](i[t(0x17c)], 0x17 * -0xe1 + 0x2 * -0x902 + -0x81 * -0x4f);
        try {
            await m[t(0x184)]();
        } catch (n) {
            throw new AppError_1[(u(0x16e))](i[t(0x173)], -0x86d + -0x11 * 0xb5 + -0x2 * -0xb03);
        }
    };
function a() {
    const v = [
        '4735056ddTebN',
        '494058sGeWJR',
        'rs/AppErro',
        '__importDe',
        '__esModule',
        '2679LIjsDB',
        'default',
        'TICKET_EXI',
        'erty',
        'ERR_QUEUE_',
        '1580sDVRMw',
        'JOGvu',
        'UE_FOUND',
        'findOne',
        'value',
        'ERR_NO_QUE',
        'STS',
        'where',
        'ls/Queue',
        '30wGKWdF',
        'lKkmB',
        'defineProp',
        '../../erro',
        '42111vXVTiV',
        '11345cZGiss',
        'tenantId',
        '../../mode',
        '3120824mCKhaC',
        'destroy',
        '430364xOxvHX',
        '246mjhkUG',
        'fault'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[q(0x16e)] = DeleteQueueService;
'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xe2)) / (0x2613 + 0xae * -0xd + -0x1d3c) + parseInt(z(0xb1)) / (0x4fa * -0x3 + 0x1d6a + -0xe7a) * (parseInt(A(0xb2)) / (-0x2 * 0x12b8 + -0x5 * 0x5fb + 0x435a * 0x1)) + -parseInt(A(0xcd)) / (-0x2148 + 0x11 + 0x213b) * (parseInt(A(0xd6)) / (0x155a + -0x266c * -0x1 + -0x3bc1)) + -parseInt(A(0xdb)) / (-0x11af * 0x1 + -0x1f * 0x92 + 0x2363) * (-parseInt(z(0xb5)) / (-0x7 * 0x1f3 + -0xb * -0x1a5 + -0xd * 0x57)) + -parseInt(z(0xe8)) / (0x17e1 * 0x1 + -0x1dfc + -0x1 * -0x623) + -parseInt(z(0xcf)) / (0xa51 * -0x1 + -0x783 * 0x1 + 0x10d * 0x11) + parseInt(z(0xab)) / (0x1 * 0x2413 + -0x3ea + -0x201f) * (parseInt(z(0xe3)) / (-0xc69 + -0x148d + 0x2101));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3c8f4 + -0xcdbcb + -0x6d8dd * -0x3));
var __importDefault = this && this[B(0xc6) + B(0xb7)] || function (c) {
    const D = B;
    return c && c[D(0xc3)] ? c : { 'default': c };
};
const k = {};
k[B(0xb0)] = !![], Object[C(0xc7) + B(0xbb)](exports, B(0xc3), k);
function a() {
    const G = [
        '241672tStURO',
        '5454933fNFQhh',
        'leys',
        's/WbotServ',
        'number',
        'path',
        '10444400XwITyb',
        'Options',
        'sendMessag',
        'ntacts',
        'temWbotBai',
        'ampaign',
        'error',
        'ar\x20message',
        'mediaName',
        'key',
        'getWbot',
        '20FgxqlG',
        'essagesSys',
        'campaignCo',
        'delay',
        'mediaUrl',
        'value',
        '2CZbhtI',
        '4169181OtuXgi',
        'messageRan',
        'estamp',
        '71673awcXFW',
        'public',
        'fault',
        'ices/SendM',
        '../libs/wb',
        'join',
        'erty',
        '\x20campaign:',
        'removeOnCo',
        'body',
        'ot-baileys',
        'Error\x20envi',
        'ntact',
        'default',
        '__esModule',
        'mplete',
        'logger',
        '__importDe',
        'defineProp',
        'TGOTM',
        'SendMessag',
        'jobId',
        'CampaignCo',
        '../utils/l',
        '271768xVcCkp',
        'where',
        '4405878CcglWu',
        '../models/',
        '../service',
        'timestamp',
        'attempts',
        'whatsappId',
        'p.net',
        '10GqMVCN',
        'ogger',
        'message',
        'messageTim',
        'getMessage',
        '318mDdXLJ',
        'eWhatsappC',
        '@s.whatsap',
        'dom',
        'messageId',
        'text',
        'update'
    ];
    a = function () {
        return G;
    };
    return a();
}
const path_1 = require(B(0xe7)), logger_1 = require(B(0xcc) + C(0xd7)), CampaignContacts_1 = __importDefault(require(B(0xd0) + B(0xcb) + C(0xa3))), wbot_baileys_1 = require(C(0xb9) + B(0xbf)), SendMessagesSystemWbotBaileys_1 = require(C(0xd1) + B(0xe5) + C(0xb8) + B(0xac) + C(0xa4) + C(0xe4)), l = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x877 * 0x2 + 0x5ae + 0xbe3);
        let h = e[f];
        return h;
    }, b(c, d);
}
l[C(0xae)] = 0x3a98, l[B(0xd3)] = 0x2, l[B(0xbd) + C(0xc4)] = !![], exports[B(0xc2)] = {
    'key': C(0xc9) + C(0xdc) + B(0xa5),
    'options': l,
    async 'handle'({data: i}) {
        const E = C, F = C, j = {};
        j[E(0xc8)] = E(0xb6);
        const m = j;
        try {
            const n = (-0x85a + 0xb * 0x1f3 + 0x1 * -0xd17, wbot_baileys_1[F(0xaa)])(i[E(0xd4)]);
            let o = {};
            const p = i[E(0xe6)] + (E(0xdd) + E(0xd5));
            if (i[E(0xaf)]) {
                const t = (0x1 * -0x1e25 + -0x35 * -0x83 + 0x306, path_1[E(0xba)])(__dirname, '..', '..', m[F(0xc8)]), u = (0x200b * -0x1 + -0x409 * -0x9 + -0x446, path_1[E(0xba)])(t, i[F(0xa8)]), v = await (0x30a + 0x956 * 0x2 + -0x15b6, SendMessagesSystemWbotBaileys_1[F(0xda) + F(0xe9)])(i[E(0xa8)], u, i[E(0xd8)]);
                if (v) {
                    const w = { ...v };
                    o = await n[F(0xea) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[F(0xe0)] = i[F(0xd8)], o = await n[E(0xea) + 'e'](p, x);
            }
            const q = {};
            q[F(0xdf)] = o?.[E(0xa9)]['id'], q[E(0xb3) + E(0xde)] = i[E(0xb3) + F(0xde)], q[E(0xbe)] = i[E(0xd8)], q[E(0xa8)] = i[E(0xa8)], q[E(0xd2)] = o?.[E(0xd9) + E(0xb4)], q[F(0xca)] = i[E(0xca)];
            const r = {};
            r['id'] = i[F(0xad) + F(0xc1)]['id'];
            const s = {};
            return s[F(0xce)] = r, await CampaignContacts_1[E(0xc2)][E(0xe1)](q, s), o;
        } catch (y) {
            logger_1[E(0xc5)][F(0xa6)](F(0xc0) + F(0xa7) + E(0xbc) + '\x20' + y);
            throw new Error(y);
        }
    }
};
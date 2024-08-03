'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1ca)) / (0xbf6 + 0x994 + -0x1589) + parseInt(A(0x19e)) / (0xba4 * 0x2 + -0x2 * -0xc45 + -0x2fd0) + parseInt(z(0x1d3)) / (0x24b * 0xd + -0x21c5 + -0x9 * -0x71) + -parseInt(z(0x1e1)) / (0x119 * 0x1d + -0x1592 + -0xa3f) * (-parseInt(A(0x1d0)) / (-0x9b6 + -0xf6d + 0x1928)) + -parseInt(z(0x1c7)) / (0xf71 * 0x1 + -0x1 * -0x26c3 + -0x362e) + -parseInt(z(0x1b6)) / (0x3 * -0xc68 + 0x3b9 * 0x1 + 0x2186) + -parseInt(A(0x1dc)) / (-0x1b79 + 0x17e8 + 0x3 * 0x133) * (-parseInt(A(0x1b9)) / (-0x2309 + 0x1 * -0x1081 + 0x3393));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5311e * -0x4 + -0x8df * -0x239 + 0xbdf3e * 0x1));
function a() {
    const G = [
        'getMessage',
        'path',
        '\x20campaign:',
        'dom',
        '3262398RDBpgQ',
        'mediaName',
        'getWbot',
        '1203497baErBl',
        'estamp',
        '__importDe',
        '@s.whatsap',
        'ices/SendM',
        'Options',
        '25fDFDfo',
        'join',
        'ogger',
        '893250pbAyHv',
        'SendMessag',
        '../models/',
        'messageId',
        'delay',
        '../libs/wb',
        'mediaUrl',
        'error',
        'jobId',
        '46488IfrIav',
        'ntact',
        'leys',
        'erty',
        'temWbotBai',
        '566036VihTIQ',
        'logger',
        'removeOnCo',
        '650700SNzmnC',
        'key',
        'where',
        'text',
        'pQLkr',
        'public',
        'update',
        'campaignCo',
        'ampaign',
        'value',
        'body',
        'ar\x20message',
        'defineProp',
        'mplete',
        'number',
        'ot-baileys',
        'message',
        's/WbotServ',
        'Error\x20envi',
        'sendMessag',
        'messageTim',
        'fault',
        'p.net',
        'whatsappId',
        '295379HrLbvX',
        'essagesSys',
        'CampaignCo',
        '1809XnCbuO',
        'timestamp',
        'default',
        '__esModule',
        '../service',
        'ntacts',
        'eWhatsappC',
        'attempts',
        '../utils/l',
        'messageRan'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20fd + 0x1a * -0xee + 0x3ac5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x1cc) + C(0x1b3)] || function (c) {
    const D = B;
    return c && c[D(0x1bc)] ? c : { 'default': c };
};
const k = {};
k[B(0x1a7)] = !![], Object[B(0x1aa) + C(0x1df)](exports, C(0x1bc), k);
const path_1 = require(B(0x1c4)), logger_1 = require(B(0x1c1) + B(0x1d2)), CampaignContacts_1 = __importDefault(require(C(0x1d5) + C(0x1b8) + B(0x1be))), wbot_baileys_1 = require(B(0x1d8) + C(0x1ad)), SendMessagesSystemWbotBaileys_1 = require(C(0x1bd) + C(0x1af) + C(0x1ce) + B(0x1b7) + B(0x1e0) + C(0x1de)), l = {};
l[B(0x1d7)] = 0x3a98, l[C(0x1c0)] = 0x2, l[B(0x19d) + C(0x1ab)] = !![], exports[C(0x1bb)] = {
    'key': C(0x1d4) + B(0x1bf) + C(0x1a6),
    'options': l,
    async 'handle'({data: i}) {
        const E = B, F = C, j = {};
        j[E(0x1a2)] = F(0x1a3);
        const m = j;
        try {
            const n = (0x3b * -0xe + -0x2c5 * -0x2 + -0x128 * 0x2, wbot_baileys_1[F(0x1c9)])(i[F(0x1b5)]);
            let o = {};
            const p = i[F(0x1ac)] + (E(0x1cd) + E(0x1b4));
            if (i[F(0x1d9)]) {
                const t = (0x24e7 + 0x62b * -0x3 + 0x1266 * -0x1, path_1[E(0x1d1)])(__dirname, '..', '..', m[F(0x1a2)]), u = (0x14c8 + 0xdd + -0x15a5, path_1[E(0x1d1)])(t, i[F(0x1c8)]), v = await (-0x251 + 0x2 * -0x1304 + 0x2859 * 0x1, SendMessagesSystemWbotBaileys_1[F(0x1c3) + E(0x1cf)])(i[F(0x1c8)], u, i[E(0x1ae)]);
                if (v) {
                    const w = { ...v };
                    o = await n[E(0x1b1) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[F(0x1a1)] = i[E(0x1ae)], o = await n[E(0x1b1) + 'e'](p, x);
            }
            const q = {};
            q[F(0x1d6)] = o?.[F(0x19f)]['id'], q[F(0x1c2) + E(0x1c6)] = i[E(0x1c2) + F(0x1c6)], q[E(0x1a8)] = i[E(0x1ae)], q[E(0x1c8)] = i[E(0x1c8)], q[F(0x1ba)] = o?.[E(0x1b2) + E(0x1cb)], q[F(0x1db)] = i[F(0x1db)];
            const r = {};
            r['id'] = i[F(0x1a5) + E(0x1dd)]['id'];
            const s = {};
            return s[F(0x1a0)] = r, await CampaignContacts_1[F(0x1bb)][F(0x1a4)](q, s), o;
        } catch (y) {
            logger_1[F(0x19c)][F(0x1da)](F(0x1b0) + E(0x1a9) + E(0x1c5) + '\x20' + y);
            throw new Error(y);
        }
    }
};
'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1ee)) / (0x3 * 0x175 + -0x1e59 + 0x19fb * 0x1) * (-parseInt(z(0x1fc)) / (-0x13 * -0x1b6 + -0xfd2 + 0x10ae * -0x1)) + parseInt(A(0x21a)) / (0x3a6 + 0x8 * 0x2bd + 0x1f7 * -0xd) * (-parseInt(A(0x1ff)) / (-0x1a4 * -0xe + -0x1c12 + 0x51e)) + -parseInt(A(0x20b)) / (0xa1 * -0x15 + 0x16b3 + -0x61 * 0x19) + -parseInt(A(0x1da)) / (-0xcf5 * 0x1 + -0x1ea2 + 0x2b9d) + parseInt(z(0x21b)) / (-0x126e + 0x24c2 + -0x3a9 * 0x5) * (parseInt(A(0x1e9)) / (-0x1b3a + -0x1340 + 0x2e82)) + parseInt(z(0x1f7)) / (-0xd * 0x2b9 + -0x3a * -0x49 + 0x12e4) + parseInt(A(0x1e1)) / (0x15c7 + -0x189 + -0x1434);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdbd43 + -0x128697 + -0x1 * -0x1210e1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x5e7 + 0x1ce2 + 0x276);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x1eb) + C(0x1e2)] || function (c) {
    const D = B;
    return c && c[D(0x204)] ? c : { 'default': c };
};
const k = {};
k[C(0x215)] = !![], Object[C(0x214) + B(0x20f)](exports, B(0x204), k);
const path_1 = require(B(0x212)), logger_1 = require(C(0x218) + C(0x1dd)), CampaignContacts_1 = __importDefault(require(B(0x1ec) + C(0x1db) + B(0x1fd))), wbot_baileys_1 = require(C(0x203) + B(0x1f4)), SendMessagesSystemWbotBaileys_1 = require(B(0x1f6) + C(0x1e8) + C(0x20a) + B(0x207) + B(0x1ed) + C(0x211)), l = {};
function a() {
    const G = [
        'error',
        '5245770NWHKmQ',
        'CampaignCo',
        '\x20campaign:',
        'ogger',
        'dom',
        'getMessage',
        'mediaUrl',
        '12358200RfzOWS',
        'fault',
        'messageTim',
        'p.net',
        'removeOnCo',
        '@s.whatsap',
        'text',
        's/WbotServ',
        '6648JyWFEI',
        'ampaign',
        '__importDe',
        '../models/',
        'temWbotBai',
        '30NxsqpS',
        'body',
        'messageRan',
        'ar\x20message',
        'getWbot',
        'SendMessag',
        'ot-baileys',
        'logger',
        '../service',
        '12949506rkNFhG',
        'Error\x20envi',
        'eWhatsappC',
        'attempts',
        'public',
        '3652kvrgRL',
        'ntacts',
        'message',
        '244WsxEPt',
        'whatsappId',
        'ntact',
        'delay',
        '../libs/wb',
        '__esModule',
        'mplete',
        'nEKit',
        'essagesSys',
        'sendMessag',
        'update',
        'ices/SendM',
        '5090105wXYeiz',
        'number',
        'messageId',
        'Options',
        'erty',
        'estamp',
        'leys',
        'path',
        'key',
        'defineProp',
        'value',
        'jobId',
        'default',
        '../utils/l',
        'timestamp',
        '39612xqIQQA',
        '7987WqkVWn',
        'mediaName',
        'where',
        'join',
        'campaignCo'
    ];
    a = function () {
        return G;
    };
    return a();
}
l[C(0x202)] = 0x3a98, l[B(0x1fa)] = 0x2, l[B(0x1e5) + C(0x205)] = !![], exports[B(0x217)] = {
    'key': C(0x1f3) + C(0x1f9) + C(0x1ea),
    'options': l,
    async 'handle'({data: i}) {
        const E = B, F = B, j = {};
        j[E(0x206)] = F(0x1fb);
        const m = j;
        try {
            const n = (0x16a + 0x109 * 0x1e + -0x81e * 0x4, wbot_baileys_1[E(0x1f2)])(i[F(0x200)]);
            let o = {};
            const p = i[E(0x20c)] + (E(0x1e6) + F(0x1e4));
            if (i[F(0x1e0)]) {
                const t = (0x1230 + 0xa * 0x329 + -0x31ca, path_1[F(0x1d7)])(__dirname, '..', '..', m[E(0x206)]), u = (0x1 * -0x1b05 + -0x8 * 0x97 + 0x1fbd, path_1[E(0x1d7)])(t, i[F(0x1d5)]), v = await (0x2466 + 0x1f02 * -0x1 + 0x1 * -0x564, SendMessagesSystemWbotBaileys_1[F(0x1df) + F(0x20e)])(i[F(0x1d5)], u, i[E(0x1fe)]);
                if (v) {
                    const w = { ...v };
                    o = await n[E(0x208) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[E(0x1e7)] = i[E(0x1fe)], o = await n[E(0x208) + 'e'](p, x);
            }
            const q = {};
            q[E(0x20d)] = o?.[E(0x213)]['id'], q[E(0x1f0) + E(0x1de)] = i[E(0x1f0) + F(0x1de)], q[F(0x1ef)] = i[F(0x1fe)], q[F(0x1d5)] = i[F(0x1d5)], q[F(0x219)] = o?.[E(0x1e3) + E(0x210)], q[F(0x216)] = i[E(0x216)];
            const r = {};
            r['id'] = i[F(0x1d8) + E(0x201)]['id'];
            const s = {};
            return s[F(0x1d6)] = r, await CampaignContacts_1[F(0x217)][E(0x209)](q, s), o;
        } catch (y) {
            logger_1[E(0x1f5)][F(0x1d9)](E(0x1f8) + F(0x1f1) + E(0x1dc) + '\x20' + y);
            throw new Error(y);
        }
    }
};
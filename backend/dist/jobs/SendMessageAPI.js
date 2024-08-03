'use strict';
const J = b, K = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8a0 + 0x1d93 + -0x2520);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x174)) / (0x66a + 0x234f * 0x1 + -0x29b8) + parseInt(H(0x160)) / (0x1bb6 + 0x6 * 0x1eb + -0x2a * 0xef) * (parseInt(I(0x146)) / (-0x11 * -0xb1 + 0x1390 + 0x1f4e * -0x1)) + parseInt(H(0x148)) / (-0x1 * 0xc19 + 0x585 * 0x5 + -0xf7c) + -parseInt(H(0x14b)) / (0x116b + 0x1481 + -0x1 * 0x25e7) * (-parseInt(H(0x168)) / (-0x1 * 0x15da + 0x1799 * -0x1 + 0x2d79)) + parseInt(I(0x169)) / (0x1 * 0xc7 + -0x25e9 + -0x54f * -0x7) + parseInt(I(0x134)) / (-0x1f63 * -0x1 + 0x5c7 * 0x4 + 0x1 * -0x3677) * (parseInt(I(0x114)) / (0x364 + -0x13af + 0x1054)) + -parseInt(H(0x153)) / (-0x1 * 0xe8f + 0xb * 0x137 + 0x13c) * (parseInt(I(0x13f)) / (-0x25c + 0x260f * 0x1 + 0x518 * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7c7 * -0xce + -0xbd9cb + 0x1b0550));
var __importDefault = this && this[J(0x11c) + J(0x122)] || function (c) {
    const L = J;
    return c && c[L(0x14a)] ? c : { 'default': c };
};
const x = {};
x[K(0x165)] = !![], Object[K(0x16a) + K(0x149)](exports, K(0x14a), x);
const Queue_1 = __importDefault(require(J(0x120) + J(0x16c))), FindOrCreateTicketService_1 = __importDefault(require(J(0x156) + K(0x152) + K(0x125) + K(0x172) + J(0x116) + 'ce')), CreateMessageSystemService_1 = __importDefault(require(J(0x156) + K(0x12f) + J(0x158) + J(0x163) + J(0x119) + K(0x11d))), wbot_baileys_1 = require(J(0x15c) + K(0x132)), Contact_1 = __importDefault(require(J(0x12a) + J(0x136))), CreateContactService_1 = __importDefault(require(K(0x151) + K(0x131) + K(0x133) + K(0x14d) + K(0x170))), AppError_1 = __importDefault(require(J(0x155) + J(0x13b))), y = {};
y[K(0x13d)] = 0x1f4, y[J(0x150)] = 0x1, y[J(0x115) + J(0x12e)] = !![], y[K(0x12b) + 'il'] = ![], exports[J(0x117)] = {
    'key': K(0x11e) + J(0x15e),
    'options': y,
    async 'handle'({data: m}) {
        const M = J, N = K, n = {};
        n[M(0x178)] = function (q, r) {
            return q == r;
        }, n[M(0x129)] = N(0x130) + M(0x171), n[N(0x127)] = M(0x12c), n[N(0x128)] = M(0x176), n[N(0x12d)] = N(0x15d), n[M(0x13c)] = N(0x124) + N(0x157), n[N(0x123)] = N(0x166) + M(0x16d), n[N(0x13a)] = N(0x139) + 'I';
        const o = n, p = (-0xdce + -0x1 * 0x156d + -0x1d * -0x137, wbot_baileys_1[N(0x126)])(m[M(0x177)]);
        try {
            const q = m[M(0x138)] + (M(0x161) + N(0x135)), r = await p[N(0x141)](q);
            if (o[N(0x178)](r[-0x1aca + 0x5c1 * 0x1 + 0x1509][N(0x143)], ![]))
                throw new AppError_1[(M(0x117))](o[M(0x129)], 0x52 * 0x3 + -0x1b * 0x7f + 0xe03);
            m[M(0x138)] = r[-0x1a3d * -0x1 + -0x2686 + 0xc49][N(0x15b)][N(0x13e)]('@')[-0x1 * 0x1746 + 0x22f * -0x11 + 0x3c65];
            const s = {};
            s[M(0x138)] = m[M(0x138)], s[M(0x159)] = m[M(0x159)];
            const t = {};
            t[N(0x11b)] = s;
            let u = await Contact_1[N(0x117)][N(0x144)](t);
            if (!u) {
                const C = {};
                C[M(0x137)] = m[M(0x138)], C[N(0x138)] = m[N(0x138)], C[M(0x159)] = m[N(0x159)], u = await (0x1e22 + 0xcbe + 0xab8 * -0x4, CreateContactService_1[N(0x117)])(C);
            }
            const v = {};
            v[M(0x14c)] = u, v[N(0x16e)] = p['id'], v[N(0x145) + M(0x167)] = 0x0, v[N(0x159)] = m[M(0x159)], v[N(0x14f) + 'ct'] = undefined, v[N(0x15f)] = o[N(0x127)];
            const w = await (-0x868 + 0xd2 * -0x1d + 0x2032, FindOrCreateTicketService_1[N(0x117)])(v), z = {};
            z[N(0x16f)] = m, z[N(0x159)] = m[M(0x159)], z[N(0x11f)] = w, z[M(0x113)] = o[N(0x128)], z[M(0x16b)] = o[N(0x12d)], await (0x1 * 0x1d2 + 0x1e19 + -0x1feb, CreateMessageSystemService_1[N(0x117)])(z);
            const A = { ...m[N(0x11a)] };
            A[N(0x142) + 'y'] = m[N(0x142) + 'y'];
            const B = {};
            B[N(0x11a)] = A, await w[N(0x164)](B);
        } catch (D) {
            const E = {};
            E[N(0x14e)] = -(0x1 * -0x16d3 + 0x1bb * -0x9 + 0x1334 * 0x2), E[N(0x118)] = m[M(0x118)], E[N(0x147)] = '', E[N(0x138)] = m[N(0x138)], E[M(0x142) + 'y'] = m[N(0x142) + 'y'], E[N(0x140)] = o[M(0x13c)], E[M(0x179)] = o[N(0x123)], E[M(0x121)] = m[N(0x121)];
            const F = E;
            if (m?.[M(0x11a)]?.[N(0x162) + N(0x175)]) {
                const G = {};
                G[M(0x173)] = m[M(0x11a)][M(0x162) + M(0x175)], G[N(0x179)] = F[N(0x179)], G[M(0x15a)] = F, Queue_1[M(0x117)][N(0x154)](o[N(0x13a)], G);
            }
            throw new Error(D);
        }
    }
};
function a() {
    const O = [
        'add',
        '../errors/',
        '../service',
        'ion',
        'ervices/Cr',
        'tenantId',
        'payload',
        'jid',
        '../libs/wb',
        'pending',
        'eAPI',
        'channel',
        '2mhKIIa',
        '@$s.whatsa',
        'urlMessage',
        'eateMessag',
        'update',
        'value',
        'hookMessag',
        'ages',
        '6883818FhiMzb',
        '5337024logbPw',
        'defineProp',
        'status',
        'eue',
        'eStatus',
        'whatsappId',
        'msg',
        'actService',
        '_FOUND',
        'dOrCreateT',
        'url',
        '1030110aqGghj',
        'Status',
        'API',
        'sessionId',
        'oknHD',
        'type',
        'sendType',
        '4305789cpZRpN',
        'removeOnCo',
        'icketServi',
        'default',
        'body',
        'eSystemSer',
        'apiConfig',
        'where',
        '__importDe',
        'vice',
        'SendMessag',
        'ticket',
        '../libs/Qu',
        'authToken',
        'fault',
        'clbLl',
        'error\x20sess',
        'rvices/Fin',
        'getWbot',
        'QOzNO',
        'PATvF',
        'sHsth',
        '../models/',
        'removeOnFa',
        'whatsapp',
        'OBHHQ',
        'mplete',
        's/MessageS',
        'NUMBER_NOT',
        'ces/Contac',
        'ot-baileys',
        'tServices/',
        '8JvAUCf',
        'pp.net',
        'Contact',
        'name',
        'number',
        'WebHooksAP',
        'SqAQo',
        'AppError',
        'QKXZO',
        'delay',
        'split',
        '9858475nllsAX',
        'error',
        'onWhatsApp',
        'externalKe',
        'exists',
        'findOne',
        'unreadMess',
        '2418909KilkfV',
        'messageId',
        '4433444nsBoMO',
        'erty',
        '__esModule',
        '5oCpgnY',
        'contact',
        'CreateCont',
        'ack',
        'groupConta',
        'attempts',
        './../servi',
        's/TicketSe',
        '30VxDumX'
    ];
    a = function () {
        return O;
    };
    return a();
}
'use strict';
function a() {
    const O = [
        'defineProp',
        'ack',
        'API',
        'BSlUT',
        'WKLkT',
        '__importDe',
        'ot-baileys',
        'number',
        '../service',
        'fault',
        '../models/',
        'ion',
        'hookMessag',
        '1786392rvakvx',
        'contact',
        'sendType',
        '../libs/Qu',
        'jid',
        '../libs/wb',
        'default',
        'channel',
        'removeOnCo',
        'add',
        'error\x20sess',
        'eAPI',
        'findOne',
        'where',
        'ces/Contac',
        'mplete',
        '42110pCREdY',
        'vhgLC',
        'exists',
        'groupConta',
        'getWbot',
        'delay',
        'ervices/Cr',
        'WebHooksAP',
        'status',
        '_FOUND',
        'messageId',
        'value',
        '322494czGVZc',
        'body',
        'urlMessage',
        'actService',
        'rvices/Fin',
        'msg',
        'erty',
        'CreateCont',
        'ages',
        'vice',
        'NUMBER_NOT',
        'onWhatsApp',
        'type',
        'externalKe',
        'authToken',
        '682jAhEsf',
        'apiConfig',
        '1796yJIjgz',
        '6118wfPnrK',
        'name',
        'eateMessag',
        'xPPTN',
        'attempts',
        '../errors/',
        'eSystemSer',
        'update',
        'payload',
        '426XuRlxy',
        'sessionId',
        '549364eIQgMA',
        'NGKrP',
        'KPblA',
        'pp.net',
        'ticket',
        'eue',
        'error',
        'dOrCreateT',
        'split',
        '__esModule',
        'AppError',
        'NBLRy',
        'SendMessag',
        'url',
        './../servi',
        's/TicketSe',
        '2211lQVBRK',
        'unreadMess',
        'Status',
        'icketServi',
        '4112kSChEP',
        's/MessageS',
        'removeOnFa',
        'Contact',
        '43705NqxUBA',
        'tServices/',
        'VPCnX',
        'eStatus',
        'tenantId',
        'pending',
        '@$s.whatsa',
        'whatsappId',
        'whatsapp'
    ];
    a = function () {
        return O;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x238)) / (0x2200 + 0x1 * 0x235 + -0x2434) * (parseInt(H(0x23a)) / (-0x1 * 0xf7f + -0x1 * 0x191 + 0x1112)) + parseInt(I(0x229)) / (0x37 * -0x8c + -0x22c6 + 0x40dd * 0x1) + parseInt(H(0x246)) / (-0x1f9 * 0x7 + -0x16e * -0x18 + -0x147d) + parseInt(I(0x1f7)) / (0xb5b + -0x19 * 0x9e + 0x1 * 0x418) * (parseInt(H(0x244)) / (-0x107 * -0x13 + -0x6d2 + -0x37 * 0x3b)) + -parseInt(I(0x23b)) / (0x20cc * 0x1 + -0x11c2 + -0xf03 * 0x1) * (parseInt(I(0x1f3)) / (0x21b7 + -0x5d0 * 0x1 + -0x593 * 0x5)) + parseInt(I(0x20d)) / (-0x17a9 + 0x188b + -0xd9) + parseInt(H(0x21d)) / (0x2191 * -0x1 + -0x116 * 0x8 + 0x2a4b) * (-parseInt(H(0x1ef)) / (0x26bc + 0x2031 + -0x46e2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xae355 + 0x71653 * 0x1 + 0x99c39));
var __importDefault = this && this[J(0x205) + K(0x209)] || function (c) {
    const L = K;
    return c && c[L(0x1e8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd99 * -0x1 + -0x1ac1 * 0x1 + -0xb * -0x3d7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = {};
x[J(0x228)] = !![], Object[K(0x200) + K(0x22f)](exports, J(0x1e8), x);
const Queue_1 = __importDefault(require(J(0x210) + K(0x1e4))), FindOrCreateTicketService_1 = __importDefault(require(K(0x208) + K(0x1ee) + K(0x22d) + J(0x1e6) + K(0x1f2) + 'ce')), CreateMessageSystemService_1 = __importDefault(require(J(0x208) + J(0x1f4) + J(0x223) + K(0x23d) + J(0x241) + K(0x232))), wbot_baileys_1 = require(J(0x212) + J(0x206)), Contact_1 = __importDefault(require(J(0x20a) + J(0x1f6))), CreateContactService_1 = __importDefault(require(K(0x1ed) + J(0x21b) + K(0x1f8) + K(0x230) + J(0x22c))), AppError_1 = __importDefault(require(K(0x240) + J(0x1e9))), y = {};
y[J(0x222)] = 0x1f4, y[J(0x23f)] = 0x1, y[J(0x215) + K(0x21c)] = !![], y[J(0x1f5) + 'il'] = ![], exports[J(0x213)] = {
    'key': J(0x1eb) + J(0x218),
    'options': y,
    async 'handle'({data: m}) {
        const M = K, N = K, n = {};
        n[M(0x203)] = function (q, r) {
            return q == r;
        }, n[N(0x204)] = N(0x233) + M(0x226), n[N(0x1ea)] = M(0x1ff), n[M(0x21e)] = N(0x202), n[M(0x247)] = M(0x1fc), n[M(0x1f9)] = M(0x217) + N(0x20b), n[N(0x23e)] = M(0x20c) + M(0x1fa), n[N(0x248)] = N(0x224) + 'I';
        const o = n, p = (0x2347 + -0xc8e * -0x2 + -0x3c63, wbot_baileys_1[N(0x221)])(m[N(0x245)]);
        try {
            const q = m[N(0x207)] + (N(0x1fd) + M(0x249)), r = await p[N(0x234)](q);
            if (o[M(0x203)](r[-0x1037 + 0x3d * 0x2b + 0x4 * 0x17e][M(0x21f)], ![]))
                throw new AppError_1[(N(0x213))](o[N(0x204)], 0x473 + 0xa00 * -0x2 + -0x1121 * -0x1);
            m[N(0x207)] = r[0x26f4 + 0x1 * 0x1d8f + -0x4483][M(0x211)][N(0x1e7)]('@')[-0x394 + -0x2 * 0x1223 + 0x1 * 0x27da];
            const s = {};
            s[M(0x207)] = m[N(0x207)], s[M(0x1fb)] = m[N(0x1fb)];
            const t = {};
            t[M(0x21a)] = s;
            let u = await Contact_1[M(0x213)][M(0x219)](t);
            if (!u) {
                const C = {};
                C[M(0x23c)] = m[N(0x207)], C[N(0x207)] = m[N(0x207)], C[M(0x1fb)] = m[M(0x1fb)], u = await (0x1ab * -0x8 + -0x212e + 0xf82 * 0x3, CreateContactService_1[N(0x213)])(C);
            }
            const v = {};
            v[N(0x20e)] = u, v[N(0x1fe)] = p['id'], v[M(0x1f0) + N(0x231)] = 0x0, v[M(0x1fb)] = m[M(0x1fb)], v[M(0x220) + 'ct'] = undefined, v[N(0x214)] = o[M(0x1ea)];
            const w = await (-0x1ef6 + 0x1 * 0xb74 + -0x16 * -0xe3, FindOrCreateTicketService_1[M(0x213)])(v), z = {};
            z[M(0x22e)] = m, z[M(0x1fb)] = m[M(0x1fb)], z[M(0x1e3)] = w, z[N(0x20f)] = o[M(0x21e)], z[N(0x225)] = o[N(0x247)], await (-0xbaa + 0x1 * -0xb55 + 0x349 * 0x7, CreateMessageSystemService_1[N(0x213)])(z);
            const A = { ...m[N(0x239)] };
            A[M(0x236) + 'y'] = m[M(0x236) + 'y'];
            const B = {};
            B[N(0x239)] = A, await w[M(0x242)](B);
        } catch (D) {
            const E = {};
            E[M(0x201)] = -(0x2178 + -0x16e7 + 0xa8f * -0x1), E[M(0x22a)] = m[M(0x22a)], E[M(0x227)] = '', E[M(0x207)] = m[N(0x207)], E[N(0x236) + 'y'] = m[N(0x236) + 'y'], E[N(0x1e5)] = o[M(0x1f9)], E[M(0x235)] = o[N(0x23e)], E[M(0x237)] = m[N(0x237)];
            const F = E;
            if (m?.[N(0x239)]?.[N(0x22b) + N(0x1f1)]) {
                const G = {};
                G[M(0x1ec)] = m[M(0x239)][M(0x22b) + N(0x1f1)], G[M(0x235)] = F[N(0x235)], G[M(0x243)] = F, Queue_1[N(0x213)][N(0x216)](o[N(0x248)], G);
            }
            throw new Error(D);
        }
    }
};
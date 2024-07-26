'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0xaa)) / (0xac3 + -0x68 * -0xc + -0x29b * 0x6) * (-parseInt(K(0xc0)) / (0x22ce + -0x2115 + -0x1b7 * 0x1)) + -parseInt(L(0x97)) / (0x1cab + 0x1994 + -0x485 * 0xc) + parseInt(K(0xb0)) / (-0x1821 * -0x1 + -0x26 * 0xac + 0x21 * 0xb) * (parseInt(K(0xc9)) / (-0x1 * -0x22fb + 0x4a2 + -0x2798)) + -parseInt(L(0xc5)) / (0xbc * 0x25 + 0x187b * 0x1 + -0x33a1) * (parseInt(K(0x84)) / (-0x1a6a + 0x22ca + 0x1 * -0x859)) + parseInt(K(0xa7)) / (-0x1 * 0x24c7 + 0x41 * -0x1f + 0x2cae) + -parseInt(L(0x92)) / (-0x1e19 + -0x47d * -0x5 + 0xb * 0xb3) + -parseInt(L(0xa2)) / (0xc25 * 0x2 + -0x1 * -0xdb9 + -0x1 * 0x25f9) * (-parseInt(K(0xd9)) / (-0x2 * 0xaee + 0x101f * 0x1 + 0x25 * 0x28));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b * -0xf33 + -0x61f * 0x287 + 0x1447e2));
var __importDefault = this && this[M(0xbf) + M(0x8c)] || function (c) {
    const O = N;
    return c && c[O(0x81)] ? c : { 'default': c };
};
const k = {};
k[M(0xc8)] = !![], Object[N(0x95) + M(0xc4)](exports, N(0x81), k);
const Contact_1 = __importDefault(require(N(0xd6) + M(0x93))), openIARestClient_1 = require(M(0xcb) + M(0x98) + N(0xce) + N(0xb8)), CreateMessageSystemService_1 = __importDefault(require(M(0xd0) + M(0x94) + M(0xb2) + M(0xc7) + M(0x8d))), Whatsapp_1 = __importDefault(require(M(0xd6) + N(0xb9) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(M(0xac) + M(0xaf) + M(0x9a) + N(0xa1))), ContactWallet_1 = __importDefault(require(M(0xd6) + M(0x93) + N(0x8a))), VerifyContactBaileys_1 = require(M(0x83) + M(0x9e) + N(0xcd) + M(0xbd) + N(0xca)), VerifyMensageOpenIAQueue = async (m, n, o = ![], p = ![], q, r) => {
        const P = M, Q = M, s = {};
        s[P(0x80)] = function (u, v) {
            return u === v;
        }, s[Q(0xd8)] = P(0x82), s[P(0xbe)] = P(0xb4) + P(0x9d), s[P(0xb1)] = Q(0xcc), s[Q(0xa6)] = P(0xd2), s[P(0xa8)] = function (u, v) {
            return u == v;
        }, s[P(0xc2)] = P(0xb6);
        const t = s;
        if (t[Q(0x80)](m[P(0xab)], t[P(0xd8)]) && !m[Q(0x99)] && !m[Q(0xbb)] && m[Q(0xb7)] && n[P(0xd1)]) {
            if (r && r[P(0xa5)])
                return;
            const u = {};
            u[Q(0x8e)] = m[P(0x8e)];
            const v = {};
            v[Q(0x9f)] = u;
            const w = await ContactWallet_1[P(0xa3)][Q(0x8f)](v);
            if (!!w) {
                await (0x7 * -0x28d + 0x1 * 0x1f5b + -0x36 * 0x40, UpdateQueueIATicket_1[P(0xa3)])(null, m, w[P(0xd7)]);
                return;
            }
            try {
                const x = await Contact_1[Q(0xa3)][Q(0xad)](m[Q(0x8e)]), y = await Whatsapp_1[Q(0xa3)][Q(0xad)](m[P(0xcf)]);
                let z;
                if (o) {
                    const D = {};
                    D['id'] = t[P(0xbe)], D[Q(0x88) + 'me'] = x[Q(0xc6)], D[Q(0x96)] = m['id'], D[Q(0x91)] = t[Q(0xb1)], D[P(0xb3) + P(0xc1)] = y[Q(0x86)], D[Q(0xb5) + P(0xc3)] = x[P(0x86)];
                    const E = {};
                    E[Q(0xa0)] = D, z = await (-0x1286 + -0x2 * -0x12b2 + -0x1e3 * 0xa, openIARestClient_1[P(0xae) + Q(0xd3)])(E);
                } else {
                    const F = await (0x1 * 0x1fcd + 0x1ed2 + 0x3af * -0x11, VerifyContactBaileys_1[Q(0xa9) + Q(0xba)])(r), G = {};
                    G['id'] = q['id'], G[Q(0x88) + 'me'] = x[Q(0xc6)], G[P(0x96)] = m['id'], G[P(0x91)] = F, G[Q(0xb3) + Q(0xc1)] = y[Q(0x86)], G[Q(0xb5) + P(0xc3)] = x[Q(0x86)];
                    const H = {};
                    H[Q(0xa0)] = G, z = await (-0xd27 + 0x829 * -0x1 + -0x4 * -0x554, openIARestClient_1[Q(0xae) + P(0xd3)])(H);
                }
                z = JSON[Q(0x9c)](z);
                const A = {};
                A[P(0x91)] = z[P(0xa0)][P(0x89)], A[P(0xa5)] = !![], A[P(0xa4)] = !![], A[P(0x90)] = t[P(0xa6)];
                const B = A, C = {};
                C[P(0x8b)] = B, C[Q(0xd5)] = m[P(0xd5)], C[Q(0x9b)] = m, C[Q(0x90)] = B[P(0x90)], C[Q(0xab)] = t[Q(0xd8)], await (0x83c + -0xfcf + -0x7 * -0x115, CreateMessageSystemService_1[P(0xa3)])(C);
                if (t[Q(0xa8)](z[Q(0xa0)][P(0xd4) + 'e'], t[Q(0xc2)])) {
                    const I = p ? m[Q(0x85)] : y[Q(0xbc) + 'sf'];
                    await (0xf1 * -0xe + 0xbb9 + -0x175 * -0x1, UpdateQueueIATicket_1[P(0xa3)])(I, m);
                }
            } catch (J) {
                console[Q(0x87)](J);
            }
        }
    };
exports[N(0xa3)] = VerifyMensageOpenIAQueue;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13b6 + -0x1109 + -0x1 * 0x22d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const R = [
        'getBodyMes',
        '122887yKpwhN',
        'status',
        '../TicketS',
        'findByPk',
        'sendMessag',
        'ervices/Up',
        '1416qACVlE',
        'XORbK',
        'reateMessa',
        'sender_num',
        'primeira\x20m',
        'receiver_n',
        'Transfer',
        'is_chat_ia',
        'ient',
        'ls/Whatsap',
        'sage',
        'answered',
        'queue_tran',
        'ContactBai',
        'VjMFM',
        '__importDe',
        '4YbDrNm',
        'ber',
        'JoQtY',
        'umber',
        'erty',
        '1922202vdGcAf',
        'name',
        'geSystemSe',
        'value',
        '13020XKRXTY',
        'leys',
        '../../rest',
        'Olá',
        'ers/Verify',
        'enIARestCl',
        'whatsappId',
        '../Message',
        'from_ia',
        'bot',
        'eToIA',
        'typeMessag',
        'tenantId',
        '../../mode',
        'walletId',
        'SDBUc',
        '22eHqTKR',
        'QrReJ',
        '__esModule',
        'pending',
        '../WbotSer',
        '7qlupJG',
        'queueId',
        'number',
        'log',
        'contact_na',
        'answer',
        'Wallet',
        'msg',
        'fault',
        'rvice',
        'contactId',
        'findOne',
        'sendType',
        'body',
        '5509296QmDJXZ',
        'ls/Contact',
        'Services/C',
        'defineProp',
        'ticket_id',
        '2071050qWVjzq',
        'Clients/op',
        'isGroup',
        'dateQueueI',
        'ticket',
        'parse',
        'ensagem',
        'vices/help',
        'where',
        'message',
        'ATicket',
        '1402760hkONFi',
        'default',
        'read',
        'fromMe',
        'rVIhh',
        '7748680LSLSNI',
        'AHQOi'
    ];
    a = function () {
        return R;
    };
    return a();
}
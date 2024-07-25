'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(O(0xa8)) / (0x219b + 0x134 + 0x5a * -0x63) + parseInt(O(0xc6)) / (0xbbf + 0x59 * 0x70 + -0x32ad) * (-parseInt(O(0xd1)) / (-0xe13 + 0x1322 + -0x50c)) + -parseInt(P(0xfd)) / (0x2141 + -0x82e + 0x503 * -0x5) + parseInt(P(0xf5)) / (0x244c + 0xe * 0x1f7 + -0x3fc9 * 0x1) * (parseInt(P(0x106)) / (0x2082 + -0x1 * 0x218 + 0x5 * -0x614)) + -parseInt(O(0xcd)) / (-0x2647 + -0x1794 + 0xb2 * 0x59) * (-parseInt(P(0x9b)) / (0x9 * 0x289 + -0x11a * 0x1 + -0x15af * 0x1)) + parseInt(P(0xa3)) / (-0x2225 + 0x1284 + 0xfaa * 0x1) + -parseInt(O(0xbb)) / (0x21 * -0x50 + 0x49 * 0x6b + -0xd * 0x18d) * (parseInt(P(0xe9)) / (-0x3 * 0xb77 + -0x1a * 0x125 + 0x4032));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5ae8c + 0x8e * -0x1360 + 0x1 * 0xa77a4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x767 + 0x10f4 + -0xd * 0x266);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[Q(0xfe) + R(0x9e)] || function (c) {
    const S = Q;
    return c && c[S(0xb1)] ? c : { 'default': c };
};
const q = {};
q[R(0xca)] = !![], Object[Q(0xb2) + Q(0x98)](exports, R(0xb1), q);
const path_1 = require(R(0x103)), sequelize_1 = require(Q(0xbe)), SetTicketMessagesAsRead_1 = __importDefault(require(R(0xa1) + Q(0xa5) + R(0xac) + Q(0x100))), socketEmit_1 = __importDefault(require(R(0xa1) + R(0xa6) + R(0xd4))), Message_1 = __importDefault(require(R(0xe6) + Q(0xa0))), Ticket_1 = __importDefault(require(R(0xe6) + R(0x9a))), logger_1 = require(R(0xa2) + R(0xe4)), SendMessagesSystemWbot = async (m, n) => {
        const T = Q, U = R, o = {};
        o[T(0xd9)] = U(0xcf), o[U(0xd7)] = T(0xce), o[T(0xb4)] = U(0xc0), o[U(0xb5)] = U(0xc9), o[U(0xab)] = U(0xc2), o[T(0x99)] = T(0xd0), o[T(0xf9)] = T(0xe2), o[U(0x105)] = T(0xfc), o[U(0xc5)] = U(0xe0), o[T(0xf7)] = T(0xf3), o[T(0xf1)] = U(0xbf), o[U(0xde)] = function (v, w) {
            return v === w;
        }, o[T(0xef)] = U(0xa4), o[U(0xaa)] = U(0xf6), o[U(0xbd)] = U(0xe8), o[U(0xe1)] = function (v, w) {
            return v === w;
        }, o[T(0xdc)] = U(0xdf), o[T(0xf0)] = U(0x9f) + T(0xff), o[U(0xdb)] = T(0x9f) + T(0xad), o[T(0x94)] = function (v, w) {
            return v * w;
        }, o[U(0xba)] = U(0xda), o[T(0xb7)] = U(0xa7), o[U(0xf8)] = T(0xea) + T(0xe3);
        const p = o, r = { [sequelize_1['Op']['is']]: null }, s = {
                'fromMe': !![],
                'messageId': r,
                'status': p[T(0xd9)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][U(0x101)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, t = await Message_1[U(0xd3)][T(0xee)]({
                'where': s,
                'include': [
                    p[T(0xd7)],
                    {
                        'model': Ticket_1[T(0xd3)],
                        'as': p[T(0xb4)],
                        'where': {
                            'tenantId': n,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: p[U(0xb5)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': p[T(0xab)],
                            'whatsappId': m['id']
                        },
                        'include': [p[U(0xd7)]]
                    },
                    {
                        'model': Message_1[T(0xd3)],
                        'as': p[T(0x99)],
                        'include': [p[U(0xd7)]]
                    }
                ],
                'order': [[
                        p[T(0xf9)],
                        p[T(0x105)]
                    ]]
            });
        let u;
        for (const v of t) {
            const w = v, {ticket: x} = w, y = x[U(0xce)][U(0xb8)], z = {};
            w[T(0xd0)] && (z[T(0xbc) + T(0xe7)] = w[T(0xd0)][T(0xfa)]);
            try {
                if (![
                        p[T(0xc5)],
                        p[U(0xf7)]
                    ][U(0xed)](w[T(0xf2)]) && w[T(0xd2)]) {
                    const F = (0x24f5 * 0x1 + 0xc89 + -0x317e, path_1[T(0xa9)])(__dirname, '..', '..', '..', p[U(0xf1)]), G = (-0x1c4b * 0x1 + -0x13ee + 0x5 * 0x9a5, path_1[T(0xa9)])(F, w[T(0xd2)]);
                    if (p[U(0xde)](w[U(0xf2)], p[T(0xef)]) || p[U(0xde)](w[T(0xf2)], p[U(0xaa)])) {
                        const H = {};
                        H[T(0xd6)] = G, u = await m[T(0xc2)][T(0x102)](y, H, z);
                    } else {
                        if (p[T(0xde)](w[U(0xf2)], p[T(0xbd)])) {
                            const I = {};
                            I[U(0xd6)] = G, u = await m[T(0xc2)][U(0xdd)](y, I, z);
                        } else {
                            if (p[U(0xe1)](w[U(0xf2)], p[U(0xdc)])) {
                                const J = {};
                                J[U(0xd6)] = G, u = await m[T(0xc2)][T(0xeb)](y, J, z);
                            } else {
                                const K = {};
                                K[T(0xd6)] = G, u = await m[U(0xc2)][U(0xb0) + 'nt'](y, K, z);
                            }
                        }
                    }
                    logger_1[U(0xc8)][T(0xae)](p[U(0xf0)]);
                } else
                    u = await m[U(0xc2)][T(0x9f) + 'e'](y, w[U(0xe5)], z), logger_1[T(0xc8)][U(0xae)](p[T(0xdb)]);
                const A = {
                        ...w,
                        ...u,
                        'id': w['id'],
                        'timestamp': p[U(0x94)](u[T(0xc3)], 0x6f7 + -0x2 * -0x1069 + -0x23e1),
                        'messageId': u[U(0x97)],
                        'status': p[U(0xba)],
                        'ack': 0x2
                    }, B = { ...A }, C = {};
                C['id'] = w['id'];
                const D = {};
                D[T(0xec)] = C, await Message_1[U(0xd3)][U(0x96)](B, D);
                const E = {};
                E[T(0x95)] = x[T(0x95)], E[U(0xc7)] = p[T(0xb7)], E[U(0xb6)] = { ...w[U(0xf4)] }, E[U(0xb6)]['id'] = w['id'], E[U(0xb6)][T(0xcb)] = w[U(0xcb)], E[U(0xb6)][T(0xd8)] = A[T(0xd8)], E[U(0xb6)][U(0xfa)] = u[T(0x97)], E[U(0xb6)][T(0xcc)] = p[U(0xba)], E[U(0xb6)][T(0x9d)] = 0x2, (-0x2237 + 0x4 * -0x3ee + 0x31ef, socketEmit_1[T(0xd3)])(E), logger_1[U(0xc8)][U(0xae)](p[T(0xf8)]), await (-0x1 * 0xe90 + -0x140 * -0x11 + 0x10 * -0x6b, SetTicketMessagesAsRead_1[U(0xd3)])(x);
            } catch (L) {
                const M = w['id'], N = w[T(0xc0)]['id'];
                logger_1[U(0xc8)][U(0xb9)](U(0xb3) + U(0x9c) + U(0xc1) + n + (U(0xaf) + '\x20') + N + ')'), logger_1[T(0xc8)][U(0xb9)](T(0x104) + U(0xd5) + T(0xc4) + M + T(0xfb) + L);
            }
        }
    };
exports[Q(0xd3)] = SendMessagesSystemWbot;
function a() {
    const V = [
        '53376GnCUkf',
        'join',
        'yMVXV',
        'xmpWH',
        'ketMessage',
        'e\x20text',
        'info',
        '\x20|\x20Ticket:',
        'sendDocume',
        '__esModule',
        'defineProp',
        'Error\x20mess',
        'cqZpn',
        'gwnnw',
        'payload',
        'pWrza',
        'telegramId',
        'error',
        'GXEle',
        '10KsXHUk',
        'reply_to_m',
        'QkebL',
        'sequelize',
        'public',
        'ticket',
        'nant:\x20',
        'telegram',
        'date',
        'id:\x20',
        'Ljole',
        '4UbhhsF',
        'type',
        'logger',
        'closed',
        'value',
        'mediaUrl',
        'status',
        '218260ozEFyY',
        'contact',
        'pending',
        'quotedMsg',
        '667302AuKsmH',
        'mediaName',
        'default',
        'Emit',
        '\x20message\x20(',
        'source',
        'KWOss',
        'timestamp',
        'vaBHt',
        'sended',
        'mJNaD',
        'ItkaS',
        'sendPhoto',
        'NgMyd',
        'video',
        'chat',
        'qitmf',
        'createdAt',
        'date\x20ok',
        's/logger',
        'body',
        '../../mode',
        'essage_id',
        'image',
        '6409689comyNU',
        'Message\x20Up',
        'sendVideo',
        'where',
        'includes',
        'findAll',
        'ZvIpP',
        'PsiBw',
        'oTRuR',
        'mediaType',
        'text',
        'dataValues',
        '5beBJos',
        'ptt',
        'gBVTk',
        'ZQrWl',
        'tcquB',
        'messageId',
        ')::\x20',
        'ASC',
        '129616VIivvr',
        '__importDe',
        'e\x20media',
        'sAsRead',
        'lte',
        'sendVoice',
        'path',
        'Error\x20send',
        'tCwwX',
        '1031898iufvFI',
        'sjDol',
        'tenantId',
        'update',
        'message_id',
        'erty',
        'SEbDt',
        'ls/Ticket',
        '168TtfGcF',
        'age\x20is\x20(te',
        'ack',
        'fault',
        'sendMessag',
        'ls/Message',
        '../../help',
        '../../util',
        '5765544YzJJQQ',
        'audio',
        'ers/SetTic',
        'ers/socket',
        'chat:ack'
    ];
    a = function () {
        return V;
    };
    return a();
}
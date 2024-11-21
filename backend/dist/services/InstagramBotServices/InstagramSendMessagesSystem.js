'use strict';
const T = b, U = b;
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(R(0xe4)) / (-0x1b5 * 0x15 + -0x7af * 0x5 + -0x4a45 * -0x1) * (-parseInt(R(0x9e)) / (-0x15b9 + -0x172e + -0x2ce9 * -0x1)) + parseInt(S(0x8c)) / (-0x7 * -0x401 + -0x217e + 0x57a) + -parseInt(S(0xa2)) / (-0x2185 + 0x1 * 0xf73 + 0xa * 0x1cf) + parseInt(R(0xc5)) / (0x2 * -0xecf + -0x2 * -0xd4c + -0x1 * -0x30b) * (-parseInt(S(0xb4)) / (-0x896 + 0x25fb + -0x1d5f)) + -parseInt(S(0xc4)) / (-0x17d2 + -0x1b3a + -0x1 * -0x3313) + -parseInt(R(0x9a)) / (-0xd5e * -0x2 + 0x15 + -0x1ac9) + parseInt(S(0xef)) / (-0xcc7 * 0x2 + 0x1 * -0xf19 + -0x10 * -0x28b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x56e7d + -0x8e778 + -0x43 * -0x50b3));
var __importDefault = this && this[T(0xb5) + U(0x92)] || function (c) {
    const V = U;
    return c && c[V(0xdd)] ? c : { 'default': c };
};
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x165c + 0x80e * 0x4 + -0x361e);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[U(0xda)] = !![], Object[U(0xab) + U(0x7e)](exports, U(0xdd), q);
const promises_1 = require(T(0xe1) + 's'), fluent_ffmpeg_1 = __importDefault(require(U(0xa3) + U(0xbc))), path_1 = require(U(0x95)), sequelize_1 = require(T(0xec)), sharp_1 = __importDefault(require(T(0x99))), socketEmit_1 = __importDefault(require(U(0xe0) + T(0xb9) + T(0xa5))), Message_1 = __importDefault(require(T(0xde) + T(0xf1))), Ticket_1 = __importDefault(require(T(0xde) + U(0x90))), logger_1 = require(T(0xa7) + T(0xac)), sleepRandomTime_1 = require(U(0xa7) + T(0xf2) + U(0x8b)), SendMessagesSystemWbot = async (l, m) => {
        const W = T, X = U, n = {
                'nJpjv': W(0xf4),
                'YLLbg': W(0xcc),
                'SiEqM': W(0xb2),
                'IhUfF': X(0xd5),
                'mQFuy': W(0xed),
                'uPMGa': X(0xd9),
                'KDUpJ': W(0xa6),
                'EKOcq': W(0xba),
                'gXqiL': W(0x7b),
                'OoYEN': X(0xbf),
                'niBxI': X(0x9c),
                'GiQWS': W(0xf0),
                'jFUvA': W(0x81),
                'ieuWw': W(0xe5),
                'HrvqC': function (t, u) {
                    return t === u;
                },
                'LZomR': X(0xe7),
                'oxlVU': W(0x8e),
                'EPTSQ': X(0xcd),
                'DNqSx': W(0xe3),
                'AsyAl': W(0xe6) + X(0xdf),
                'OfYKL': W(0xe6) + W(0xb8),
                'waSUV': W(0x7d),
                'bdPmK': W(0xbb),
                'qWupZ': W(0x88) + X(0xf9),
                'LDvYe': function (t, u) {
                    return t(u);
                },
                'FzyyZ': function (t, u) {
                    return t(u);
                }
            }, o = { [sequelize_1['Op']['is']]: null }, p = {
                'fromMe': !![],
                'messageId': o,
                'status': n[X(0xe9)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][W(0xad)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, r = await Message_1[W(0xa9)][X(0xc7)]({
                'where': p,
                'include': [
                    n[W(0xee)],
                    {
                        'model': Ticket_1[W(0xa9)],
                        'as': n[W(0xc1)],
                        'where': {
                            'tenantId': m,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: n[W(0x91)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': n[W(0x84)],
                            'whatsappId': l['id']
                        },
                        'include': [n[X(0xee)]]
                    },
                    {
                        'model': Message_1[X(0xa9)],
                        'as': n[W(0x85)],
                        'include': [n[W(0xee)]]
                    }
                ],
                'order': [[
                        n[X(0xf7)],
                        n[X(0xbe)]
                    ]]
            });
        let s;
        for (const t of r) {
            const u = t, {ticket: v} = u, w = v[X(0xed)][X(0xa1) + 'K'], x = await l[W(0xfa)][X(0x89) + 'ad']([w]);
            try {
                if (![
                        n[W(0xd0)],
                        n[W(0x83)]
                    ][X(0x98)](u[X(0xd3)]) && u[X(0xae)]) {
                    const E = (0x1f35 + -0xec2 + -0x1 * 0x1073, path_1[W(0xb0)])(__dirname, '..', '..', '..', n[W(0x8f)]), F = (0x16fa * 0x1 + 0x3 * -0xc25 + -0x35 * -0x41, path_1[X(0xb0)])(E, u[X(0xae)]), G = await (0x1178 + -0x1c46 + 0xace, promises_1[X(0x9f)])(F);
                    console[W(0xe2)](F);
                    if (n[W(0xd6)](u[X(0xd3)], n[X(0xcb)]) || n[X(0xd6)](u[W(0xd3)], n[X(0x7c)])) {
                        const H = u[W(0xae)][W(0xa0)]('.'), I = (0xa9b + 0x374 + -0x3b * 0x3d, path_1[W(0xb0)])(E, H[0xe0e + 0x17 * 0x11d + -0xd * 0x30d] + W(0x78));
                        await new Promise((L, M) => {
                            const Y = W, Z = W;
                            (-0x39 * 0x5f + 0x1 * -0x13 + 0x153a * 0x1, fluent_ffmpeg_1[Y(0xa9)])(F)[Y(0x87)](n[Z(0xc8)])['on'](n[Y(0xca)], N => M(N))['on'](n[Y(0xd8)], () => L(!![]))[Z(0xd1)](I);
                        });
                        const J = await (-0x1517 + -0x1821 + 0x2d38, promises_1[X(0x9f)])(I), K = {};
                        K[X(0x79)] = J, s = await x[W(0xf5) + W(0x9d)](K);
                    }
                    if (n[X(0xd6)](u[W(0xd3)], n[W(0x77)])) {
                        const L = await (-0x2 * 0x1052 + 0x106c + 0x1038, sharp_1[X(0xa9)])(G)[W(0xc3)]()[X(0x94)](), M = {};
                        M[W(0x79)] = L, s = await x[W(0xaf) + W(0x97)](M);
                    }
                    if (n[X(0xd6)](u[X(0xd3)], n[X(0xb7)])) {
                        const N = {};
                        N[X(0xe3)] = G, s = await x[W(0xf5) + X(0xa8)](N);
                    }
                    logger_1[W(0xe8)][X(0x93)](n[X(0xa4)]);
                }
                [
                    n[X(0xd0)],
                    n[X(0x83)]
                ][X(0x98)](u[X(0xd3)]) && !u[X(0xae)] && (s = await x[W(0xc6) + X(0xcf)](u[X(0xd7)]), logger_1[W(0xe8)][X(0x93)](n[X(0xf8)]));
                const y = {
                    ...u,
                    ...s
                };
                y['id'] = u['id'], y[W(0xce)] = u[X(0xce)], y[W(0xf3)] = s[X(0x7a)], y[X(0xb6)] = n[X(0xf6)], y[X(0xc9)] = 0x2;
                const z = y, A = { ...z }, B = {};
                B['id'] = u['id'];
                const C = {};
                C[X(0x96)] = B, await Message_1[X(0xa9)][W(0xc0)](A, C);
                const D = {};
                D[X(0xd4)] = v[X(0xd4)], D[W(0xbd)] = n[X(0xdb)], D[W(0xeb)] = { ...u[W(0xea)] }, D[W(0xeb)][X(0x82)] = u[W(0x82)], D[W(0xeb)]['id'] = u['id'], D[W(0xeb)][X(0xce)] = u[W(0xce)], D[W(0xeb)][X(0xf3)] = s[X(0x7a)], D[W(0xeb)][W(0xb6)] = n[W(0xf6)], D[W(0xeb)][X(0xc9)] = 0x2, (0xed3 + -0xbd7 + -0x2fc * 0x1, socketEmit_1[W(0xa9)])(D), logger_1[X(0xe8)][X(0x93)](n[W(0xd2)]), await (-0x2069 + 0x2 * 0x8df + 0xeab, sleepRandomTime_1[W(0xdc) + W(0xaa)])({
                    'minMilliseconds': n[X(0xb3)](Number, -0xd9d + -0x2545 + 0x3ab2),
                    'maxMilliseconds': n[W(0x80)](Number, -0x2e7 * -0x9 + -0x1728 + -0x8c1 * -0x1)
                });
            } catch (O) {
                const P = u['id'], Q = u[X(0xd9)]['id'];
                logger_1[X(0xe8)][X(0xcc)](X(0xb1) + X(0x7f) + W(0x86) + m + (W(0x8d) + '\x20') + Q + ')'), logger_1[W(0xe8)][X(0xcc)](W(0x76) + X(0xc2) + W(0x9b) + P + W(0x8a) + O);
            }
        }
    };
function a() {
    const a0 = [
        'tenantId',
        'pending',
        'HrvqC',
        'body',
        'SiEqM',
        'ticket',
        'value',
        'bdPmK',
        'sleepRando',
        '__esModule',
        '../../mode',
        'e\x20media',
        '../../help',
        'fs/promise',
        'log',
        'video',
        '282021KqLyvn',
        'public',
        'sendMessag',
        'audio',
        'logger',
        'IhUfF',
        'dataValues',
        'payload',
        'sequelize',
        'contact',
        'mQFuy',
        '13021956EJfFQt',
        'chat',
        'ls/Message',
        's/sleepRan',
        'messageId',
        'mp4',
        'broadcastV',
        'waSUV',
        'OoYEN',
        'OfYKL',
        'date\x20ok',
        'entity',
        'Error\x20send',
        'EPTSQ',
        '.mp4',
        'file',
        'item_id',
        'quotedMsg',
        'oxlVU',
        'sended',
        'erty',
        'age\x20is\x20(te',
        'FzyyZ',
        'text',
        'mediaUrl',
        'jFUvA',
        'EKOcq',
        'gXqiL',
        'nant:\x20',
        'toFormat',
        'Message\x20Up',
        'directThre',
        ')::\x20',
        'domTime',
        '443709PEtAeR',
        '\x20|\x20Ticket:',
        'ptt',
        'ieuWw',
        'ls/Ticket',
        'KDUpJ',
        'fault',
        'info',
        'toBuffer',
        'path',
        'where',
        'hoto',
        'includes',
        'sharp',
        '431632NBUocJ',
        'id:\x20',
        'ASC',
        'oice',
        '4scKuzM',
        'readFile',
        'split',
        'instagramP',
        '1156512zAkSyB',
        'fluent-ffm',
        'AsyAl',
        'Emit',
        'closed',
        '../../util',
        'ideo',
        'default',
        'mTime',
        'defineProp',
        's/logger',
        'lte',
        'mediaName',
        'broadcastP',
        'join',
        'Error\x20mess',
        'end',
        'LDvYe',
        '2327862XXgtHu',
        '__importDe',
        'status',
        'DNqSx',
        'e\x20text',
        'ers/socket',
        'instagram',
        'chat:ack',
        'peg',
        'type',
        'niBxI',
        'createdAt',
        'update',
        'uPMGa',
        '\x20message\x20(',
        'jpeg',
        '4166043nMvINq',
        '10ozHKCS',
        'broadcastT',
        'findAll',
        'nJpjv',
        'ack',
        'YLLbg',
        'LZomR',
        'error',
        'image',
        'timestamp',
        'ext',
        'GiQWS',
        'saveToFile',
        'qWupZ',
        'mediaType'
    ];
    a = function () {
        return a0;
    };
    return a();
}
exports[U(0xa9)] = SendMessagesSystemWbot;
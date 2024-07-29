'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x2159 + 0xe36 + -0x2e58);
        let h = e[f];
        return h;
    }, b(c, d);
}
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Q(0x1b2)) / (0xdfc + -0x1a5 * -0x14 + -0xd * 0x39b) * (-parseInt(Q(0x15b)) / (0x753 * -0x5 + 0x1c5c + 0x49 * 0x1d)) + parseInt(R(0x1a4)) / (-0x294 + -0x382 * -0x5 + 0x59 * -0x2b) * (-parseInt(Q(0x179)) / (-0xfcd * 0x1 + 0x1 * 0x89f + -0x2 * -0x399)) + parseInt(Q(0x160)) / (0x1f08 + -0x2290 + 0x38d) + parseInt(R(0x1a7)) / (0x1c88 + -0x1400 + -0x882) + -parseInt(R(0x192)) / (0x13a9 + 0x94e + -0x2 * 0xe78) * (-parseInt(R(0x19e)) / (0x3 * 0xb6f + -0x32d * 0x2 + -0x1beb)) + parseInt(Q(0x13b)) / (0x168b + 0x2373 * -0x1 + -0x1 * -0xcf1) * (parseInt(Q(0x188)) / (0x1a9 * -0x7 + -0x131c * 0x1 + 0x1ec5)) + parseInt(R(0x147)) / (-0x1de5 + 0x2 * -0x78f + 0x2d0e) * (parseInt(R(0x174)) / (-0x193d + -0xaed * 0x1 + -0x203 * -0x12));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x209a * -0x47 + 0xb69 * -0xd7 + 0x1b9249));
var __importDefault = this && this[S(0x170) + T(0x165)] || function (c) {
    const U = S;
    return c && c[U(0x190)] ? c : { 'default': c };
};
const q = {};
q[T(0x14c)] = !![], Object[T(0x144) + S(0x177)](exports, T(0x190), q);
const promises_1 = require(T(0x145) + 's'), fluent_ffmpeg_1 = __importDefault(require(T(0x151) + S(0x15f))), path_1 = require(T(0x172)), sequelize_1 = require(S(0x17b)), sharp_1 = __importDefault(require(T(0x148))), socketEmit_1 = __importDefault(require(T(0x169) + S(0x1b9) + T(0x1a1))), Message_1 = __importDefault(require(T(0x176) + T(0x1a9))), Ticket_1 = __importDefault(require(T(0x176) + S(0x155))), logger_1 = require(S(0x16d) + S(0x18a)), sleepRandomTime_1 = require(T(0x16d) + S(0x1a8) + S(0x1b8)), MessengerSendMessagesSystem = async (l, m) => {
        const V = T, W = T, n = {
                'yVGwS': V(0x161),
                'NpkTA': V(0x195),
                'JOSqt': W(0x18b),
                'MGAdq': W(0x142),
                'HzKxn': V(0x1a3),
                'ZEpbS': V(0x14d),
                'lwGeR': V(0x17d),
                'dMcju': W(0x19b),
                'KZbzl': W(0x173),
                'bZsyK': W(0x158),
                'ErZiC': V(0x138),
                'tQSgb': V(0x157),
                'foUSZ': W(0x17c),
                'SkzXx': W(0x13a),
                'bwLpd': function (t, u) {
                    return t === u;
                },
                'MDSxt': V(0x15c),
                'HSbWM': function (t, u) {
                    return t === u;
                },
                'rqaGD': W(0x178),
                'Zbrdc': V(0x198),
                'gOPUV': function (t, u) {
                    return t === u;
                },
                'Rgvhz': V(0x17e),
                'tJVMe': W(0x1ad) + 'n',
                'FroNc': V(0x185),
                'UozzL': V(0x183),
                'JDqIA': V(0x1b3),
                'JffVQ': V(0x193),
                'yCooa': V(0x1b4) + V(0x181),
                'aEuZD': function (t, u) {
                    return t(u);
                },
                'RrIwT': function (t, u) {
                    return t(u);
                }
            }, o = { [sequelize_1['Op']['is']]: null }, p = {
                'fromMe': !![],
                'messageId': o,
                'status': n[V(0x16c)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][V(0x1a6)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, r = await Message_1[W(0x1b6)][W(0x149)]({
                'where': p,
                'include': [
                    n[W(0x17f)],
                    {
                        'model': Ticket_1[W(0x1b6)],
                        'as': n[V(0x19f)],
                        'where': {
                            'tenantId': m,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: n[V(0x182)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': n[V(0x180)],
                            'whatsappId': l['id']
                        },
                        'include': [n[W(0x17f)]]
                    },
                    {
                        'model': Message_1[W(0x1b6)],
                        'as': n[W(0x18d)],
                        'include': [n[V(0x17f)]]
                    }
                ],
                'order': [[
                        n[W(0x16a)],
                        n[V(0x153)]
                    ]]
            });
        let s;
        for (const t of r) {
            const u = t, {ticket: v} = u, w = v[V(0x1a3)][V(0x197) + 'd'];
            try {
                if (![
                        n[W(0x15d)],
                        n[V(0x152)]
                    ][V(0x1ae)](u[V(0x1a2)]) && u[W(0x150)]) {
                    const D = (0x2 * 0x595 + -0x2 * -0x158 + -0xdda, path_1[V(0x159)])(__dirname, '..', '..', '..', n[V(0x13e)]), E = (-0xc60 + 0x34 * 0x17 + 0x44 * 0x1d, path_1[W(0x159)])(D, u[W(0x150)]), F = await (0x773 * 0x2 + 0x1 * 0x1169 + -0x9 * 0x397, promises_1[V(0x13f)])(E);
                    console[V(0x15a)](E);
                    if (n[V(0x14b)](u[W(0x1a2)], n[W(0x18c)]) || n[W(0x13d)](u[V(0x1a2)], n[W(0x167)])) {
                        const G = u[V(0x150)][V(0x171)]('.'), H = (0x2 * 0x8ad + 0x1187 * 0x2 + -0x3468, path_1[V(0x159)])(D, G[-0x8ff + 0x289 * 0x4 + -0x125] + W(0x14e));
                        await new Promise((J, K) => {
                            const X = V, Y = W;
                            (-0x21a3 * -0x1 + 0x5 * -0x7cf + 0x568, fluent_ffmpeg_1[X(0x1b6)])(E)[X(0x164)](n[Y(0x140)])['on'](n[Y(0x196)], L => K(L))['on'](n[Y(0x1ab)], () => J(!![]))[X(0x1bc)](H);
                        });
                        const I = await (-0x1115 * -0x1 + 0x1c1e + -0x2d33, promises_1[V(0x13f)])(H);
                        s = await l[V(0x17a)](w, I);
                    }
                    if (n[V(0x14b)](u[W(0x1a2)], n[V(0x139)])) {
                        const J = await (-0x1 * 0x174f + -0x671 + 0x2 * 0xee0, sharp_1[W(0x1b6)])(F)[V(0x1bb)]()[V(0x163)](), K = {};
                        K[V(0x18e)] = u[W(0x150)], s = await l[V(0x16f)](w, J, K);
                    }
                    if (n[V(0x14a)](u[V(0x1a2)], n[V(0x199)])) {
                        const L = {};
                        L[W(0x18e)] = u[W(0x150)], s = await l[W(0x16e)](w, F, L);
                    }
                    if ([
                            n[V(0x19a)],
                            n[W(0x1b0)],
                            n[W(0x162)]
                        ][W(0x1ae)](u[V(0x1a2)])) {
                        const M = {};
                        M[V(0x18e)] = u[W(0x150)], s = await l[V(0x191)](w, F, M);
                    }
                }
                [
                    n[W(0x15d)],
                    n[V(0x152)]
                ][V(0x1ae)](u[V(0x1a2)]) && !u[W(0x150)] && (s = await l[W(0x154)](w, u[V(0x1b1)]));
                const x = {
                    ...u,
                    ...s
                };
                x['id'] = u['id'], x[W(0x15e)] = u[V(0x15e)], x[V(0x168)] = s[V(0x168)], x[W(0x1b5)] = n[W(0x184)], x[V(0x13c)] = 0x2;
                const y = x, z = { ...y }, A = {};
                A['id'] = u['id'];
                const B = {};
                B[W(0x143)] = A, await Message_1[W(0x1b6)][W(0x1af)](z, B);
                const C = {};
                C[V(0x187)] = v[W(0x187)], C[W(0x14f)] = n[W(0x1ac)], C[W(0x166)] = { ...u[W(0x175)] }, C[W(0x166)][W(0x1ba)] = u[W(0x1ba)], C[W(0x166)]['id'] = u['id'], C[W(0x166)][V(0x15e)] = u[V(0x15e)], C[W(0x166)][W(0x168)] = s[V(0x168)], C[W(0x166)][W(0x1b5)] = n[W(0x184)], C[W(0x166)][V(0x13c)] = 0x2, (0x160b + -0x1bb * 0x7 + -0x9ee, socketEmit_1[V(0x1b6)])(C), logger_1[V(0x141)][W(0x156)](n[W(0x137)]), await (-0x10f3 + 0x476 + 0xc7d, sleepRandomTime_1[W(0x16b) + V(0x19c)])({
                    'minMilliseconds': n[W(0x186)](Number, 0x863 + 0x1555 + -0x1bc4),
                    'maxMilliseconds': n[V(0x146)](Number, -0x6 * -0x8 + -0x4cc + 0xa78)
                });
            } catch (N) {
                const O = u['id'], P = u[W(0x14d)]['id'];
                logger_1[W(0x141)][V(0x195)](W(0x189) + V(0x1aa) + V(0x1b7) + m + (W(0x1a5) + '\x20') + P + ')'), logger_1[V(0x141)][V(0x195)](W(0x1a0) + W(0x194) + V(0x18f) + O + W(0x19d) + N);
            }
        }
    };
exports[T(0x1b6)] = MessengerSendMessagesSystem;
function a() {
    const Z = [
        'type',
        'mediaName',
        'fluent-ffm',
        'foUSZ',
        'ErZiC',
        'sendText',
        'ls/Ticket',
        'info',
        'chat',
        'createdAt',
        'join',
        'log',
        '1480966bbxlXS',
        'audio',
        'tQSgb',
        'timestamp',
        'peg',
        '1328855ecOokw',
        'mp4',
        'UozzL',
        'toBuffer',
        'toFormat',
        'fault',
        'payload',
        'rqaGD',
        'messageId',
        '../../help',
        'bZsyK',
        'sleepRando',
        'MGAdq',
        '../../util',
        'sendVideo',
        'sendImage',
        '__importDe',
        'split',
        'path',
        'quotedMsg',
        '1164qWOfMm',
        'dataValues',
        '../../mode',
        'erty',
        'ptt',
        '60UJTnQc',
        'sendAudio',
        'sequelize',
        'text',
        'closed',
        'video',
        'HzKxn',
        'dMcju',
        'date\x20ok',
        'lwGeR',
        'document',
        'JDqIA',
        'file',
        'aEuZD',
        'tenantId',
        '40BApQbz',
        'Error\x20mess',
        's/logger',
        'end',
        'MDSxt',
        'KZbzl',
        'filename',
        'id:\x20',
        '__esModule',
        'sendFile',
        '604961nhaTYv',
        'chat:ack',
        '\x20message\x20(',
        'error',
        'NpkTA',
        'messengerI',
        'image',
        'Rgvhz',
        'tJVMe',
        'messenger',
        'mTime',
        ')::\x20',
        '24JVySPE',
        'ZEpbS',
        'Error\x20send',
        'Emit',
        'mediaType',
        'contact',
        '66477SIFwog',
        '\x20|\x20Ticket:',
        'lte',
        '600120AaJzEx',
        's/sleepRan',
        'ls/Message',
        'age\x20is\x20(te',
        'JOSqt',
        'JffVQ',
        'applicatio',
        'includes',
        'update',
        'FroNc',
        'body',
        '1rYyYQb',
        'sended',
        'Message\x20Up',
        'status',
        'default',
        'nant:\x20',
        'domTime',
        'ers/socket',
        'mediaUrl',
        'jpeg',
        'saveToFile',
        'yCooa',
        'ASC',
        'Zbrdc',
        'public',
        '458613eYozAX',
        'ack',
        'HSbWM',
        'SkzXx',
        'readFile',
        'yVGwS',
        'logger',
        'pending',
        'where',
        'defineProp',
        'fs/promise',
        'RrIwT',
        '94160ubLpft',
        'sharp',
        'findAll',
        'gOPUV',
        'bwLpd',
        'value',
        'ticket',
        '.mp4'
    ];
    a = function () {
        return Z;
    };
    return a();
}
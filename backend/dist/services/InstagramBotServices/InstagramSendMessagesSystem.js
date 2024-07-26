'use strict';
const T = b, U = b;
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(R(0x143)) / (-0x1adb + -0x99d + 0x2479) * (parseInt(S(0x128)) / (-0x1 * -0xbff + 0x11a1 * 0x1 + -0x1d9e)) + parseInt(S(0x117)) / (0x3 * 0xc2e + 0x4 * -0x337 + 0x53 * -0x49) * (parseInt(R(0x13f)) / (-0x35f + -0xc1 + -0x5 * -0xd4)) + -parseInt(R(0x115)) / (0xcb1 * -0x3 + 0x1455 + 0x11c3 * 0x1) * (-parseInt(R(0x17c)) / (-0x1c6a + 0x1 * 0xed4 + 0xd9c)) + parseInt(R(0x14f)) / (0x1cca + -0x5b * 0x41 + -0x16a * 0x4) + parseInt(R(0x151)) / (-0x137e + 0xf0d * -0x2 + -0x10 * -0x31a) * (-parseInt(R(0x13d)) / (0x15d * -0xd + 0x153f + -0x37d)) + -parseInt(S(0x112)) / (0x2325 + -0x58 * 0x54 + -0x63b) * (parseInt(S(0x148)) / (-0x2008 + -0x10 * -0x24a + -0x48d)) + -parseInt(S(0x144)) / (-0x1012 + 0x1 * -0x18ef + 0xdaf * 0x3) * (-parseInt(S(0x124)) / (-0x211a + 0x363 * 0x4 + 0x139b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xd9d3 + -0x18404 + 0x48a0a * 0x1));
var __importDefault = this && this[T(0x11b) + T(0x101)] || function (c) {
    const V = U;
    return c && c[V(0x15c)] ? c : { 'default': c };
};
const q = {};
q[T(0x161)] = !![], Object[U(0x17d) + U(0x147)](exports, T(0x15c), q);
const promises_1 = require(T(0x15f) + 's'), fluent_ffmpeg_1 = __importDefault(require(U(0x169) + T(0x110))), path_1 = require(U(0x17f)), sequelize_1 = require(U(0x130)), sharp_1 = __importDefault(require(U(0x118))), socketEmit_1 = __importDefault(require(T(0x16c) + U(0x16e) + U(0x12b))), Message_1 = __importDefault(require(U(0x107) + U(0x183))), Ticket_1 = __importDefault(require(T(0x107) + U(0x139))), logger_1 = require(U(0x176) + U(0x158)), sleepRandomTime_1 = require(T(0x176) + T(0x113) + T(0x150)), SendMessagesSystemWbot = async (l, m) => {
        const W = U, X = U, n = {
                'sUhId': W(0x11f),
                'kdIdi': W(0x145),
                'Jiybw': X(0x106),
                'QGzmA': X(0x123),
                'fWtPh': X(0x181),
                'TLHfh': X(0x140),
                'jLWML': W(0x154),
                'YPtpp': X(0x170),
                'ZMkpa': X(0x15e),
                'SeZpy': X(0x173),
                'qYTAL': X(0x16a),
                'LObXx': X(0x114),
                'iWKiJ': W(0x14d),
                'HPGwf': W(0x14c),
                'vGcit': function (t, u) {
                    return t === u;
                },
                'WHtCx': W(0x160),
                'UwLcL': function (t, u) {
                    return t === u;
                },
                'qUPSY': X(0x15a),
                'RhkiJ': function (t, u) {
                    return t === u;
                },
                'YUkHF': W(0x134),
                'SgNhd': W(0x166),
                'hMFlK': W(0x103) + X(0x13c),
                'wJoCz': X(0x103) + X(0x138),
                'Oguxi': W(0x127),
                'cykzY': W(0x185),
                'QpdtJ': X(0x146) + X(0x142),
                'MvrSR': function (t, u) {
                    return t(u);
                }
            }, o = { [sequelize_1['Op']['is']]: null }, p = {
                'fromMe': !![],
                'messageId': o,
                'status': n[X(0x180)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][W(0x16d)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, r = await Message_1[X(0x165)][W(0x149)]({
                'where': p,
                'include': [
                    n[X(0x178)],
                    {
                        'model': Ticket_1[W(0x165)],
                        'as': n[X(0x172)],
                        'where': {
                            'tenantId': m,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: n[X(0x11e)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': n[W(0x11a)],
                            'whatsappId': l['id']
                        },
                        'include': [n[W(0x178)]]
                    },
                    {
                        'model': Message_1[W(0x165)],
                        'as': n[X(0x167)],
                        'include': [n[W(0x178)]]
                    }
                ],
                'order': [[
                        n[W(0x14b)],
                        n[W(0x10c)]
                    ]]
            });
        let s;
        for (const t of r) {
            const u = t, {ticket: v} = u, w = v[X(0x181)][X(0x174) + 'K'], x = await l[W(0x10f)][X(0x10d) + 'ad']([w]);
            try {
                if (![
                        n[X(0x105)],
                        n[X(0x108)]
                    ][W(0x133)](u[X(0x12f)]) && u[X(0x11c)]) {
                    const E = (-0xe8 * -0x2b + -0x17ce + -0xf2a * 0x1, path_1[W(0x152)])(__dirname, '..', '..', '..', n[W(0x12a)]), F = (-0x4fc + 0x97 * -0x13 + 0x1031, path_1[W(0x152)])(E, u[W(0x11c)]), G = await (-0x19fc + -0x15c3 + 0x2fbf * 0x1, promises_1[X(0x179)])(F);
                    console[W(0x10e)](F);
                    if (n[W(0x10b)](u[W(0x12f)], n[X(0x10a)]) || n[X(0x16b)](u[W(0x12f)], n[W(0x12c)])) {
                        const H = u[X(0x11c)][X(0x15d)]('.'), I = (-0x14b * 0x1 + 0x1 * -0x2012 + 0x215d, path_1[X(0x152)])(E, H[-0x1 * 0x40f + -0x11 * -0x13b + -0x2 * 0x86e] + X(0x168));
                        await new Promise((L, M) => {
                            const Y = W, Z = W;
                            (-0x23a8 + -0x17 * -0x9 + 0x22d9, fluent_ffmpeg_1[Y(0x165)])(F)[Y(0x136)](n[Z(0x182)])['on'](n[Z(0x109)], N => M(N))['on'](n[Y(0x102)], () => L(!![]))[Z(0x141)](I);
                        });
                        const J = await (0xd76 + -0xc6e + -0x18 * 0xb, promises_1[W(0x179)])(I), K = {};
                        K[W(0x163)] = J, s = await x[W(0x100) + X(0x171)](K);
                    }
                    if (n[W(0x111)](u[W(0x12f)], n[W(0xfe)])) {
                        const L = await (0x2666 + -0x1dc8 + 0x1 * -0x89e, sharp_1[X(0x165)])(G)[W(0x120)]()[W(0x11d)](), M = {};
                        M[W(0x163)] = L, s = await x[W(0x186) + X(0x131)](M);
                    }
                    if (n[X(0x10b)](u[W(0x12f)], n[X(0x17b)])) {
                        const N = {};
                        N[W(0x166)] = G, s = await x[W(0x100) + W(0x184)](N);
                    }
                    logger_1[W(0x153)][W(0x14e)](n[W(0x156)]);
                }
                [
                    n[X(0x105)],
                    n[X(0x108)]
                ][W(0x133)](u[W(0x12f)]) && !u[X(0x11c)] && (s = await x[W(0x125) + W(0x15b)](u[X(0x14a)]), logger_1[X(0x153)][W(0x14e)](n[W(0x104)]));
                const y = {
                    ...u,
                    ...s
                };
                y['id'] = u['id'], y[W(0x17e)] = u[W(0x17e)], y[W(0x177)] = s[W(0x122)], y[X(0x175)] = n[W(0x12d)], y[W(0x13b)] = 0x2;
                const z = y, A = { ...z }, B = {};
                B['id'] = u['id'];
                const C = {};
                C[X(0x132)] = B, await Message_1[W(0x165)][W(0x164)](A, C);
                const D = {};
                D[X(0x13e)] = v[X(0x13e)], D[W(0x13a)] = n[X(0x12e)], D[W(0x17a)] = { ...u[W(0x157)] }, D[W(0x17a)][X(0x116)] = u[W(0x116)], D[W(0x17a)]['id'] = u['id'], D[W(0x17a)][W(0x17e)] = u[W(0x17e)], D[W(0x17a)][W(0x177)] = s[W(0x122)], D[W(0x17a)][X(0x175)] = n[X(0x12d)], D[W(0x17a)][W(0x13b)] = 0x2, (0x96e + 0x3ff + -0xd6d, socketEmit_1[W(0x165)])(D), logger_1[W(0x153)][W(0x14e)](n[W(0x121)]), await (-0x1 * 0x21f4 + 0x25 * 0xfc + -0x278 * 0x1, sleepRandomTime_1[X(0x135) + X(0x187)])({
                    'minMilliseconds': n[W(0x119)](Number, -0xcb + 0x122b + -0x990),
                    'maxMilliseconds': n[W(0x119)](Number, 0x20cf * -0x1 + -0x92f + -0x2 * -0x1adb)
                });
            } catch (O) {
                const P = u['id'], Q = u[W(0x140)]['id'];
                logger_1[W(0x153)][W(0x145)](W(0x16f) + X(0x155) + W(0x126) + m + (W(0x159) + '\x20') + Q + ')'), logger_1[W(0x153)][W(0x145)](X(0xff) + X(0x129) + W(0x162) + P + X(0x137) + O);
            }
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * -0x123 + 0x1863 + 0x1093 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[U(0x165)] = SendMessagesSystemWbot;
function a() {
    const a0 = [
        'entity',
        'peg',
        'RhkiJ',
        '3958190guKGDm',
        's/sleepRan',
        'chat',
        '500bRwyUf',
        'mediaUrl',
        '40038CUHEBS',
        'sharp',
        'MvrSR',
        'YPtpp',
        '__importDe',
        'mediaName',
        'toBuffer',
        'jLWML',
        'mp4',
        'jpeg',
        'QpdtJ',
        'item_id',
        'pending',
        '517413kdIITW',
        'broadcastT',
        'nant:\x20',
        'sended',
        '56NMUSOZ',
        '\x20message\x20(',
        'HPGwf',
        'Emit',
        'qUPSY',
        'Oguxi',
        'cykzY',
        'mediaType',
        'sequelize',
        'hoto',
        'where',
        'includes',
        'image',
        'sleepRando',
        'toFormat',
        ')::\x20',
        'e\x20text',
        'ls/Ticket',
        'type',
        'ack',
        'e\x20media',
        '418383uCZvhI',
        'tenantId',
        '16rkDAJA',
        'ticket',
        'saveToFile',
        'date\x20ok',
        '1409USARlM',
        '36wmivIe',
        'error',
        'Message\x20Up',
        'erty',
        '11xhRvtT',
        'findAll',
        'body',
        'SeZpy',
        'public',
        'text',
        'info',
        '875560CbByUx',
        'domTime',
        '8eMXoYQ',
        'join',
        'logger',
        'closed',
        'age\x20is\x20(te',
        'hMFlK',
        'dataValues',
        's/logger',
        '\x20|\x20Ticket:',
        'ptt',
        'ext',
        '__esModule',
        'split',
        'quotedMsg',
        'fs/promise',
        'audio',
        'value',
        'id:\x20',
        'file',
        'update',
        'default',
        'video',
        'ZMkpa',
        '.mp4',
        'fluent-ffm',
        'ASC',
        'UwLcL',
        '../../help',
        'lte',
        'ers/socket',
        'Error\x20mess',
        'instagram',
        'oice',
        'TLHfh',
        'createdAt',
        'instagramP',
        'status',
        '../../util',
        'messageId',
        'fWtPh',
        'readFile',
        'payload',
        'SgNhd',
        '21534iATNHM',
        'defineProp',
        'timestamp',
        'path',
        'QGzmA',
        'contact',
        'sUhId',
        'ls/Message',
        'ideo',
        'chat:ack',
        'broadcastP',
        'mTime',
        'YUkHF',
        'Error\x20send',
        'broadcastV',
        'fault',
        'Jiybw',
        'sendMessag',
        'wJoCz',
        'LObXx',
        'end',
        '../../mode',
        'iWKiJ',
        'kdIdi',
        'WHtCx',
        'vGcit',
        'qYTAL',
        'directThre',
        'log'
    ];
    a = function () {
        return a0;
    };
    return a();
}
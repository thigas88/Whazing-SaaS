'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1f3)) / (0x7ef * 0x2 + -0x138d + 0x3b0) + -parseInt(y(0x179)) / (0x22ab + -0x129d + -0x403 * 0x4) + parseInt(y(0x1bd)) / (0x2 * -0xbe3 + -0x8db + -0x1052 * -0x2) + parseInt(x(0x1a7)) / (-0xd * 0x239 + -0xb5 * -0x28 + 0xa1) + parseInt(y(0x1da)) / (0x4 * 0x44d + -0xee3 + -0x24c) + parseInt(y(0x171)) / (0xd07 + -0x1782 + 0xa81) * (parseInt(y(0x1dc)) / (-0x2653 + -0x2f3 * -0x1 + 0x9 * 0x3ef)) + -parseInt(x(0x1bb)) / (-0x2127 + 0x2445 + -0x4f * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13d * 0x2e2 + 0x2f4a7 * -0x1 + 0x39163));
var __importDefault = this && this[z(0x1d2) + z(0x161)] || function (c) {
    const B = A;
    return c && c[B(0x1fc)] ? c : { 'default': c };
};
const o = {};
o[A(0x1e3)] = !![], Object[z(0x188) + z(0x1a8)](exports, z(0x1fc), o), exports[z(0x18a)] = exports[z(0x173)] = void (-0x2ad * -0x3 + 0x1379 + -0x1b80);
const socket_io_1 = require(A(0x18f)), socket_io_redis_1 = __importDefault(require(A(0x18e) + A(0x1d1))), AppError_1 = __importDefault(require(z(0x1e5) + z(0x172))), decodeTokenSocket_1 = __importDefault(require(A(0x194) + A(0x17d))), logger_1 = require(A(0x1be) + A(0x190)), User_1 = __importDefault(require(A(0x160) + A(0x1a5))), Chat_1 = __importDefault(require(A(0x1ab) + z(0x1b2)));
let io;
const initIO = e => {
    const C = A, D = A, f = {
            'NJBVd': C(0x1de) + D(0x1bf) + C(0x19f),
            'vDMyn': function (k, l) {
                return k === l;
            },
            'FgcYV': C(0x1c4),
            'mERwc': function (k, l) {
                return k === l;
            },
            'LWsct': C(0x1ca),
            'Dlcyf': C(0x1a9),
            'uonIq': function (k, l) {
                return k === l;
            },
            'WDQWL': D(0x165),
            'pcyaH': function (k, l) {
                return k(l);
            },
            'uhrqr': C(0x1e8),
            'AtuDV': D(0x16c),
            'vkRkb': D(0x16d),
            'cWHJq': C(0x1eb),
            'AfxeU': C(0x1e7),
            'eYSyU': C(0x1f2),
            'VqMfj': C(0x1b7),
            'rfccJ': function (k) {
                return k();
            },
            'NGNFo': D(0x16a) + D(0x1a2),
            'QhAtn': function (k, l) {
                return k === l;
            },
            'EOJzD': C(0x1e1),
            'ffTQw': function (k, l) {
                return k(l);
            },
            'hkRgg': function (k, l) {
                return k === l;
            },
            'snCGa': C(0x1c0),
            'YVwDC': C(0x199),
            'HVRWw': D(0x1fe),
            'JTCEp': C(0x17f),
            'noXaH': C(0x1db),
            'WZvKi': function (k, l) {
                return k === l;
            },
            'yREmg': D(0x1a0),
            'PcBbW': D(0x1b6),
            'aYDMP': D(0x1ce) + C(0x166) + D(0x1fb),
            'KXkPv': C(0x1f5),
            'vfEAr': D(0x1f9)
        }, g = {};
    g[C(0x1c6)] = '*';
    const h = {};
    h[C(0x19b)] = g, h[C(0x178) + 't'] = 0x2bf20, h[C(0x192) + 'al'] = 0xea60, io = new socket_io_1[(D(0x1fa))](e, h);
    const i = {
            'host': process[C(0x1af)][C(0x1c1) + D(0x167)],
            'port': f[C(0x1a6)](Number, process[C(0x1af)][C(0x183) + C(0x1ba)]),
            'username': process[D(0x1af)][D(0x1f6) + D(0x185)],
            'password': process[C(0x1af)][C(0x183) + C(0x1b9)]
        }, j = socket_io_redis_1[C(0x164)];
    return io[C(0x1ee)](f[D(0x1a6)](j, i)), io[C(0x1e2)](async (k, l) => {
        const E = C, F = D;
        if (f[E(0x1aa)](f[F(0x16f)], f[F(0x16f)]))
            try {
                if (f[E(0x1d4)](f[E(0x187)], f[E(0x1d7)]))
                    g[E(0x162)][F(0x1ae)](F(0x1cc) + E(0x1a1) + E(0x1f0) + E(0x19d) + h + (F(0x1cb) + F(0x19c))), i[E(0x197)](j + (F(0x1cb) + F(0x19c)));
                else {
                    const n = k?.[F(0x1c9)]?.[E(0x16b)]?.[F(0x17e)], p = (0x1f9a + -0x2 * -0x9ae + -0x32f6, decodeTokenSocket_1[F(0x164)])(n);
                    if (p[F(0x180)]) {
                        if (f[F(0x163)](f[F(0x1f7)], f[F(0x1f7)])) {
                            const q = k?.[E(0x1c9)]?.[E(0x16b)];
                            k[E(0x1c9)][F(0x16b)] = {
                                ...q,
                                ...p[F(0x18c)],
                                'id': f[E(0x168)](String, p[F(0x18c)]['id']),
                                'tenantId': f[E(0x168)](String, p[F(0x18c)][F(0x1e8)])
                            };
                            const r = {};
                            r[F(0x15e)] = [
                                'id',
                                f[F(0x1e6)],
                                f[F(0x1c3)],
                                f[E(0x1b4)],
                                f[F(0x170)],
                                f[F(0x1ff)],
                                f[E(0x1df)],
                                f[E(0x1f1)]
                            ];
                            const s = await User_1[E(0x164)][E(0x18d)](p[E(0x18c)]['id'], r);
                            k[F(0x1c9)][E(0x16b)][E(0x1bc)] = s, f[F(0x1b1)](l);
                        } else {
                            if (!f)
                                throw new i[(E(0x164))](f[E(0x175)]);
                            return h;
                        }
                    }
                    f[E(0x168)](l, new Error(f[E(0x1b8)]));
                }
            } catch (u) {
                if (f[E(0x1c5)](f[E(0x1dd)], f[F(0x1dd)]))
                    logger_1[E(0x162)][F(0x1a3)](F(0x1f4) + F(0x184) + k), k[F(0x19e)](E(0x1f4) + F(0x174) + k['id']), f[F(0x1a6)](l, new Error(f[F(0x1b8)]));
                else {
                    const w = {};
                    w[F(0x17a)] = F(0x1fd) + F(0x17b) + E(0x19a) + g + ',\x20' + h, w[E(0x162)][F(0x1ae)](w);
                }
            }
        else
            i[E(0x162)][F(0x1ae)](F(0x1cc) + E(0x1e0) + j + ':' + k + (F(0x1d3) + E(0x1f8))), l[E(0x197)](m + ':' + n);
    }), io['on'](f[D(0x15f)], k => {
        const G = D, I = D, l = {
                'HPnlI': f[G(0x175)],
                'RTEQf': function (n, p) {
                    const H = G;
                    return f[H(0x1b3)](n, p);
                },
                'HsYkV': f[I(0x181)],
                'fcEic': f[I(0x1cd)],
                'nEHkD': function (n, p) {
                    const J = I;
                    return f[J(0x191)](n, p);
                },
                'OuBVi': f[I(0x1c7)],
                'DiJkq': f[G(0x1cf)],
                'wOtXT': function (n, p) {
                    const K = I;
                    return f[K(0x1a6)](n, p);
                },
                'BGoTJ': f[G(0x1b8)]
            }, {tenantId: m} = k[G(0x1c9)][I(0x16b)];
        if (m) {
            const n = {};
            n[I(0x17a)] = f[G(0x1a4)], n[G(0x18c)] = k[G(0x1c9)][G(0x16b)], logger_1[G(0x162)][I(0x1ae)](n), k[G(0x197)](m[I(0x189)]()), k['on'](m + (G(0x1ed) + G(0x177)), async p => {
                const L = I, M = I;
                if (l[L(0x1b0)](l[L(0x1c2)], l[M(0x1d9)]))
                    throw new h[(L(0x164))](l[M(0x16e)]);
                else {
                    const r = await User_1[M(0x164)][L(0x18d)](p[L(0x18b)]), s = {};
                    s[M(0x1ac)] = !![], await r[M(0x176)](s), k[L(0x19e)](p[L(0x1e8)] + (M(0x186) + M(0x1ec)), r);
                }
            }), k['on'](m + (G(0x1ad) + 'ox'), p => {
                const N = I, O = I;
                if (f[N(0x1b3)](f[O(0x198)], f[N(0x198)]))
                    logger_1[N(0x162)][O(0x1ae)](O(0x1c8) + O(0x195) + O(0x1d5) + '\x20' + m + ':' + p), k[N(0x197)](m + ':' + p);
                else {
                    const r = {};
                    return r[O(0x164)] = j, g && h[N(0x1fc)] ? i : r;
                }
            }), k['on'](m + (G(0x1d0) + I(0x1d8)), () => {
                const P = I, Q = G;
                l[P(0x1b5)](l[P(0x196)], l[Q(0x1ef)]) ? (i[Q(0x162)][Q(0x1ae)](Q(0x1c8) + Q(0x195) + P(0x1d5) + '\x20' + j + ':' + k), l[Q(0x197)](m + ':' + n)) : (logger_1[Q(0x162)][P(0x1ae)](P(0x1cc) + Q(0x1a1) + Q(0x1f0) + P(0x19d) + m + (Q(0x1cb) + Q(0x19c))), k[P(0x197)](m + (P(0x1cb) + Q(0x19c))));
            }), k['on'](m + (I(0x1e4) + 'ts'), p => {
                const R = G, S = G;
                f[R(0x1b3)](f[R(0x169)], f[R(0x1e9)]) ? (i[S(0x162)][S(0x1a3)](R(0x1f4) + R(0x184) + j), k[S(0x19e)](S(0x1f4) + R(0x174) + l['id']), l[R(0x1ea)](m, new n(l[S(0x182)]))) : (logger_1[R(0x162)][R(0x1ae)](R(0x1cc) + S(0x1e0) + m + ':' + p + (R(0x1d3) + R(0x1f8))), k[S(0x197)](m + ':' + p));
            }), Chat_1[G(0x164)][G(0x1d6)](k);
        }
        k['on'](f[G(0x17c)], p => {
            const T = G, U = I, q = {};
            q[T(0x17a)] = T(0x1fd) + T(0x17b) + T(0x19a) + m + ',\x20' + p, logger_1[T(0x162)][T(0x1ae)](q);
        });
    }), io;
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5b4 + -0x1a0c + 0x15b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const X = [
        'connection',
        'Server',
        'tenant',
        '__esModule',
        'SOCKET\x20Cli',
        'nJXiU',
        'AfxeU',
        'attributes',
        'vfEAr',
        '../models/',
        'fault',
        'logger',
        'uonIq',
        'default',
        'nodYZ',
        'nected\x20in\x20',
        'ERVER',
        'pcyaH',
        'YVwDC',
        'authentica',
        'auth',
        'name',
        'email',
        'HPnlI',
        'FgcYV',
        'cWHJq',
        '12PJwRkm',
        'AppError',
        'initIO',
        'id:',
        'NJBVd',
        'update',
        'ied',
        'pingTimeou',
        '609228bzRUJE',
        'message',
        'ent\x20discon',
        'KXkPv',
        'kenSocket',
        'token',
        'RpifD',
        'isValid',
        'JTCEp',
        'BGoTJ',
        'IO_REDIS_P',
        'id:\x20',
        'SERNAME',
        ':updateSta',
        'LWsct',
        'defineProp',
        'toString',
        'getIO',
        'userId',
        'data',
        'findByPk',
        'socket.io-',
        'socket.io',
        'ogger',
        'WZvKi',
        'pingInterv',
        'RzLoD',
        './decodeTo',
        'ned\x20a\x20tick',
        'OuBVi',
        'join',
        'snCGa',
        'ATuwu',
        'nected\x20,\x20',
        'cors',
        'ion',
        'hannel\x20',
        'emit',
        'lized',
        'fNNhu',
        'oined\x20noti',
        'tion\x20error',
        'warn',
        'aYDMP',
        'User',
        'ffTQw',
        '516988GvBmlO',
        'erty',
        'oQwzT',
        'vDMyn',
        './socketCh',
        'isOnline',
        ':joinChatB',
        'info',
        'env',
        'RTEQf',
        'rfccJ',
        'at/Chat',
        'hkRgg',
        'vkRkb',
        'nEHkD',
        'pEmoN',
        'lastOnline',
        'NGNFo',
        'ASSWORD',
        'ORT',
        '8024648qqIucI',
        'user',
        '1109253BIugNR',
        '../utils/l',
        'not\x20initia',
        'sDRoa',
        'IO_REDIS_S',
        'HsYkV',
        'AtuDV',
        'SZOpJ',
        'QhAtn',
        'origin',
        'yREmg',
        'Client\x20joi',
        'handshake',
        'jFNIm',
        ':notificat',
        'A\x20client\x20j',
        'noXaH',
        'Client\x20con',
        'PcBbW',
        ':joinNotif',
        'redis',
        '__importDe',
        '\x20tickets\x20c',
        'mERwc',
        'et\x20channel',
        'register',
        'Dlcyf',
        'ication',
        'fcEic',
        '2733565WZpkvD',
        'YwEJd',
        '1529101joDGIu',
        'EOJzD',
        'Socket\x20IO\x20',
        'eYSyU',
        'oined\x20to\x20',
        'lxhaY',
        'use',
        'value',
        ':joinTicke',
        '../errors/',
        'uhrqr',
        'status',
        'tenantId',
        'HVRWw',
        'wOtXT',
        'profile',
        'tusUser',
        ':userVerif',
        'adapter',
        'DiJkq',
        'fication\x20c',
        'VqMfj',
        'lastLogin',
        '99168OnrWDc',
        'tokenInval',
        'disconnect',
        'IO_REDIS_U',
        'WDQWL',
        'hannel.'
    ];
    a = function () {
        return X;
    };
    return a();
}
exports[A(0x173)] = initIO;
const getIO = () => {
    const V = z, W = A, d = {};
    d[V(0x193)] = W(0x1de) + V(0x1bf) + V(0x19f);
    const e = d;
    if (!io)
        throw new AppError_1[(W(0x164))](e[V(0x193)]);
    return io;
};
exports[z(0x18a)] = getIO;
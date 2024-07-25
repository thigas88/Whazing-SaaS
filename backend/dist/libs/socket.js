'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x17e)) / (-0xd * -0x23a + -0x169f + -0x652) * (-parseInt(A(0x1df)) / (-0x10e8 + 0xbc6 + 0x524)) + -parseInt(z(0x184)) / (0xa15 + 0x2333 + -0x2d45) + parseInt(z(0x19c)) / (0x19c7 * -0x1 + -0x1f48 + -0x3913 * -0x1) + -parseInt(A(0x1a1)) / (-0x1eae + 0x21 * 0xb3 + -0x1 * -0x7a0) + -parseInt(A(0x1d3)) / (0x20f3 + -0x2380 + 0x293) + -parseInt(A(0x1d1)) / (0xed7 * 0x2 + 0xb * 0x1f6 + -0x9 * 0x5b1) + parseInt(z(0x21a)) / (-0xc70 + 0x266 * -0x3 + -0x13aa * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5be07 + 0x96d21 + -0x51 * 0x76e));
var __importDefault = this && this[B(0x18d) + B(0x1ef)] || function (c) {
    const D = C;
    return c && c[D(0x1b5)] ? c : { 'default': c };
};
const o = {};
o[C(0x1c9)] = !![], Object[B(0x1fd) + B(0x197)](exports, B(0x1b5), o), exports[C(0x1c3)] = exports[B(0x1ff)] = void (0x8b2 + -0x3 * 0x6a7 + -0x1 * -0xb43);
const socket_io_1 = require(B(0x190)), socket_io_redis_1 = __importDefault(require(B(0x1b8) + B(0x1db))), AppError_1 = __importDefault(require(B(0x1cb) + C(0x201))), decodeTokenSocket_1 = __importDefault(require(B(0x1b4) + C(0x1ee))), logger_1 = require(C(0x1f5) + C(0x1a5)), User_1 = __importDefault(require(B(0x202) + C(0x1fc))), Chat_1 = __importDefault(require(C(0x1d0) + C(0x1cd)));
let io;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9 * 0x3b3 + -0xe93 + -0x5f * -0x85);
        let h = e[f];
        return h;
    }, b(c, d);
}
const initIO = e => {
    const E = C, F = B, f = {
            'xeJoR': E(0x1ec) + E(0x20b) + E(0x206),
            'ukOgC': function (k, l) {
                return k === l;
            },
            'IvXDP': E(0x1b6),
            'regRH': E(0x17d),
            'iVbWR': function (k, l) {
                return k === l;
            },
            'rEdQd': E(0x1a6),
            'Jqgok': E(0x208),
            'GIwbO': function (k, l) {
                return k !== l;
            },
            'Ciodm': F(0x18e),
            'PPaBw': function (k, l) {
                return k(l);
            },
            'GzkBd': F(0x1c8),
            'FVYEW': E(0x20d),
            'qvltN': F(0x18c),
            'hkCIf': E(0x18f),
            'ueLwB': F(0x1e4),
            'yiVNH': E(0x1ea),
            'nFkWc': E(0x19e),
            'bmzdt': function (k) {
                return k();
            },
            'mKmsG': E(0x189) + E(0x1f1),
            'dsPxD': function (k, l) {
                return k !== l;
            },
            'PYbLe': F(0x1e2),
            'YHfjZ': F(0x181),
            'sBWoP': E(0x1c7),
            'CNinR': F(0x217),
            'VAOsX': function (k, l) {
                return k(l);
            },
            'CzpNc': E(0x1a0),
            'SHXTx': E(0x1e0),
            'qhThs': E(0x200) + E(0x1f2) + F(0x1c1),
            'ufowL': E(0x1e5),
            'mpBhU': function (k, l) {
                return k(l);
            },
            'HOEan': F(0x1dc)
        }, g = {};
    g[F(0x218)] = '*';
    const h = {};
    h[F(0x183)] = g, h[F(0x1bc) + 't'] = 0x2bf20, h[E(0x1ce) + 'al'] = 0xea60, io = new socket_io_1[(E(0x187))](e, h);
    const i = {
            'host': process[F(0x186)][F(0x1eb) + E(0x191)],
            'port': f[F(0x1e1)](Number, process[F(0x186)][F(0x19d) + E(0x1e9)]),
            'username': process[E(0x186)][E(0x1b0) + F(0x205)],
            'password': process[E(0x186)][F(0x19d) + E(0x1bd)]
        }, j = socket_io_redis_1[E(0x1b7)];
    return io[F(0x1fb)](f[F(0x188)](j, i)), io[E(0x20f)](async (k, l) => {
        const G = F, H = F, m = {};
        m[G(0x199)] = f[H(0x1dd)];
        const n = m;
        if (f[H(0x1da)](f[G(0x193)], f[G(0x1f7)]))
            i[H(0x1d9)][H(0x1f6)](H(0x1de) + H(0x1d4) + j + ':' + k + (G(0x1d8) + H(0x1ba))), l[H(0x1b3)](m + ':' + n);
        else
            try {
                if (f[G(0x1f4)](f[G(0x1ad)], f[G(0x1c5)]))
                    throw new h[(G(0x1b7))](f[H(0x1dd)]);
                else {
                    const r = k?.[G(0x213)]?.[G(0x204)]?.[H(0x1a8)], s = (-0x1244 + 0x1 * 0xe67 + 0x2b * 0x17, decodeTokenSocket_1[H(0x1b7)])(r);
                    if (s[H(0x210)]) {
                        if (f[G(0x211)](f[G(0x212)], f[H(0x212)])) {
                            if (!f)
                                throw new i[(H(0x1b7))](n[G(0x199)]);
                            return h;
                        } else {
                            const u = k?.[G(0x213)]?.[G(0x204)];
                            k[G(0x213)][H(0x204)] = {
                                ...u,
                                ...s[H(0x1f8)],
                                'id': f[G(0x1b2)](String, s[H(0x1f8)]['id']),
                                'tenantId': f[G(0x1b2)](String, s[G(0x1f8)][H(0x1c8)])
                            };
                            const v = {};
                            v[H(0x1f0)] = [
                                'id',
                                f[H(0x182)],
                                f[G(0x1cc)],
                                f[G(0x1ed)],
                                f[G(0x1f3)],
                                f[H(0x1bb)],
                                f[H(0x1e3)],
                                f[H(0x17f)]
                            ];
                            const w = await User_1[H(0x1b7)][G(0x1e8)](s[G(0x1f8)]['id'], v);
                            k[G(0x213)][H(0x204)][H(0x1a7)] = w, f[G(0x19f)](l);
                        }
                    }
                    f[G(0x1b2)](l, new Error(f[G(0x20e)]));
                }
            } catch (x) {
                f[H(0x1af)](f[G(0x219)], f[G(0x1a2)]) ? (logger_1[G(0x1d9)][H(0x196)](G(0x1ae) + G(0x1c4) + k), k[H(0x1cf)](H(0x1ae) + H(0x198) + k['id']), f[G(0x1b2)](l, new Error(f[G(0x20e)]))) : (g[H(0x1d9)][H(0x1f6)](G(0x1de) + G(0x18b) + H(0x1ab) + G(0x20a) + h + (H(0x214) + G(0x180))), i[G(0x1b3)](j + (G(0x214) + H(0x180))));
            }
    }), io['on'](f[E(0x216)], k => {
        const J = F, K = E, l = {
                'sYoWo': function (n, p) {
                    const I = b;
                    return f[I(0x1af)](n, p);
                },
                'ptmww': f[J(0x1bf)],
                'bPFcc': f[K(0x209)],
                'UIiei': function (n, p) {
                    const L = K;
                    return f[L(0x1e1)](n, p);
                },
                'pEMva': f[K(0x20e)],
                'jNVuR': function (n, p) {
                    const M = K;
                    return f[M(0x1da)](n, p);
                },
                'pBXcH': f[K(0x21b)],
                'KsyLx': f[K(0x1d6)]
            }, {tenantId: m} = k[K(0x213)][J(0x204)];
        if (m) {
            const n = {};
            n[J(0x19b)] = f[K(0x1a9)], n[K(0x1f8)] = k[K(0x213)][J(0x204)], logger_1[K(0x1d9)][J(0x1f6)](n), k[K(0x1b3)](m[K(0x1b1)]()), k['on'](m + (K(0x20c) + J(0x194)), async p => {
                const N = J, O = K;
                if (l[N(0x1f9)](l[N(0x1c2)], l[O(0x1c2)]))
                    i[O(0x1d9)][N(0x1f6)](N(0x1fe) + N(0x215) + O(0x185) + '\x20' + j + ':' + k), l[N(0x1b3)](m + ':' + n);
                else {
                    const r = await User_1[N(0x1b7)][N(0x1e8)](p[N(0x1ac)]), s = {};
                    s[N(0x1d5)] = !![], await r[N(0x1a3)](s), k[O(0x1cf)](p[O(0x1c8)] + (N(0x1e6) + O(0x19a)), r);
                }
            }), k['on'](m + (J(0x195) + 'ox'), p => {
                const P = K, Q = K;
                if (l[P(0x1f9)](l[Q(0x1fa)], l[Q(0x1fa)])) {
                    const r = {};
                    return r[Q(0x1b7)] = j, g && h[Q(0x1b5)] ? i : r;
                } else
                    logger_1[Q(0x1d9)][P(0x1f6)](Q(0x1fe) + P(0x215) + Q(0x185) + '\x20' + m + ':' + p), k[Q(0x1b3)](m + ':' + p);
            }), k['on'](m + (J(0x192) + J(0x1c0)), () => {
                const R = J, S = J;
                l[R(0x1c6)](l[S(0x1b9)], l[S(0x1b9)]) ? (logger_1[R(0x1d9)][S(0x1f6)](S(0x1de) + R(0x18b) + R(0x1ab) + R(0x20a) + m + (R(0x214) + R(0x180))), k[R(0x1b3)](m + (S(0x214) + S(0x180)))) : (i[R(0x1d9)][R(0x196)](S(0x1ae) + R(0x1c4) + j), k[S(0x1cf)](S(0x1ae) + S(0x198) + l['id']), l[R(0x1ca)](m, new n(l[S(0x1be)])));
            }), k['on'](m + (K(0x207) + 'ts'), p => {
                const T = J, U = K;
                if (l[T(0x1f9)](l[U(0x203)], l[U(0x203)])) {
                    const r = {};
                    r[T(0x19b)] = T(0x1e7) + T(0x18a) + T(0x1d7) + g + ',\x20' + h, r[T(0x1d9)][U(0x1f6)](r);
                } else
                    logger_1[T(0x1d9)][U(0x1f6)](T(0x1de) + U(0x1d4) + m + ':' + p + (U(0x1d8) + T(0x1ba))), k[U(0x1b3)](m + ':' + p);
            }), Chat_1[K(0x1b7)][J(0x1a4)](k);
        }
        k['on'](f[J(0x1d2)], p => {
            const V = K, W = K, q = {};
            q[V(0x19b)] = W(0x1e7) + W(0x18a) + W(0x1d7) + m + ',\x20' + p, logger_1[W(0x1d9)][W(0x1f6)](q);
        });
    }), io;
};
exports[C(0x1ff)] = initIO;
function a() {
    const Z = [
        ':joinTicke',
        'GoHob',
        'CNinR',
        'hannel\x20',
        'not\x20initia',
        ':userVerif',
        'name',
        'mKmsG',
        'use',
        'isValid',
        'GIwbO',
        'Ciodm',
        'handshake',
        ':notificat',
        'ned\x20a\x20tick',
        'HOEan',
        'gPOWn',
        'origin',
        'PYbLe',
        '39967000fATpos',
        'CzpNc',
        'voYfr',
        '6945vADlFc',
        'nFkWc',
        'ion',
        'MuMNC',
        'GzkBd',
        'cors',
        '4168611XSHgZs',
        'et\x20channel',
        'env',
        'Server',
        'mpBhU',
        'authentica',
        'ent\x20discon',
        'oined\x20noti',
        'email',
        '__importDe',
        'vHeIr',
        'profile',
        'socket.io',
        'ERVER',
        ':joinNotif',
        'IvXDP',
        'ied',
        ':joinChatB',
        'warn',
        'erty',
        'id:',
        'eWeHb',
        'tusUser',
        'message',
        '1212900imNflH',
        'IO_REDIS_P',
        'lastOnline',
        'bmzdt',
        'qriOc',
        '6046785woAzir',
        'YHfjZ',
        'update',
        'register',
        'ogger',
        'pKSCs',
        'user',
        'token',
        'qhThs',
        'DxHqh',
        'fication\x20c',
        'userId',
        'rEdQd',
        'tokenInval',
        'dsPxD',
        'IO_REDIS_U',
        'toString',
        'PPaBw',
        'join',
        './decodeTo',
        '__esModule',
        'Nwyys',
        'default',
        'socket.io-',
        'pBXcH',
        'hannel.',
        'ueLwB',
        'pingTimeou',
        'ASSWORD',
        'pEMva',
        'sBWoP',
        'ication',
        'tenant',
        'ptmww',
        'getIO',
        'id:\x20',
        'Jqgok',
        'jNVuR',
        'KJCgR',
        'tenantId',
        'value',
        'UIiei',
        '../errors/',
        'FVYEW',
        'at/Chat',
        'pingInterv',
        'emit',
        './socketCh',
        '1409296Iggevm',
        'ufowL',
        '3327582RPnPrg',
        'oined\x20to\x20',
        'isOnline',
        'SHXTx',
        'nected\x20,\x20',
        '\x20tickets\x20c',
        'logger',
        'ukOgC',
        'redis',
        'connection',
        'xeJoR',
        'A\x20client\x20j',
        '318bFiZEn',
        'BQtBR',
        'VAOsX',
        'gVusj',
        'yiVNH',
        'status',
        'disconnect',
        ':updateSta',
        'SOCKET\x20Cli',
        'findByPk',
        'ORT',
        'lastLogin',
        'IO_REDIS_S',
        'Socket\x20IO\x20',
        'qvltN',
        'kenSocket',
        'fault',
        'attributes',
        'tion\x20error',
        'nected\x20in\x20',
        'hkCIf',
        'iVbWR',
        '../utils/l',
        'info',
        'regRH',
        'data',
        'sYoWo',
        'bPFcc',
        'adapter',
        'User',
        'defineProp',
        'Client\x20joi',
        'initIO',
        'Client\x20con',
        'AppError',
        '../models/',
        'KsyLx',
        'auth',
        'SERNAME',
        'lized'
    ];
    a = function () {
        return Z;
    };
    return a();
}
const getIO = () => {
    const X = B, Y = B, d = {};
    d[X(0x1aa)] = X(0x1ec) + X(0x20b) + Y(0x206);
    const e = d;
    if (!io)
        throw new AppError_1[(Y(0x1b7))](e[Y(0x1aa)]);
    return io;
};
exports[C(0x1c3)] = getIO;
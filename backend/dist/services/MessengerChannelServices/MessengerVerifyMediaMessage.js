'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x20a)) / (-0x3dc + -0x1a44 + 0x1e21) + -parseInt(F(0x1ec)) / (-0x13d1 + -0x202d + 0x3400) * (parseInt(F(0x200)) / (-0x2622 + 0x13d9 * -0x1 + 0x39fe)) + -parseInt(F(0x1af)) / (0x244 * 0x5 + 0x165d + -0x25 * 0xe9) + parseInt(E(0x1f6)) / (0x1fe7 * -0x1 + -0x233b * 0x1 + 0x4327 * 0x1) * (-parseInt(E(0x1d5)) / (-0x7 * 0x17d + 0xfb4 + -0x3 * 0x1c1)) + parseInt(E(0x1cb)) / (-0x1b4f * 0x1 + -0x1 * 0x1723 + -0x3 * -0x10d3) * (-parseInt(E(0x1c7)) / (0x11bb + -0x4a2 * -0x2 + 0x1 * -0x1af7)) + -parseInt(F(0x1ee)) / (-0x4 * -0x9bf + -0x13 * 0x170 + -0x3 * 0x3e1) + parseInt(E(0x1b7)) / (-0x7 * -0x503 + -0xc * 0x14f + -0x1 * 0x1357);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x88d + 0x2c950 + 0xd7a7 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x61 * 0x1c + -0x15 * -0x128 + -0xc03);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[G(0x1f5) + G(0x1d0)] || function (c) {
    const I = H;
    return c && c[I(0x211)] ? c : { 'default': c };
};
const w = {};
w[H(0x1f9)] = !![], Object[H(0x20e) + H(0x1f1)](exports, G(0x211), w);
const path_1 = require(H(0x1c5)), axios_1 = __importDefault(require(H(0x1c9))), fs_1 = require('fs'), content_disposition_1 = __importDefault(require(H(0x1e7) + H(0x1e3))), CreateMessageService_1 = __importDefault(require(H(0x1cc) + H(0x1ed) + G(0x1dd) + H(0x1bf))), getQuotedForMessageId_1 = __importDefault(require(G(0x1da) + G(0x1ca) + G(0x1d4) + G(0x1fc))), downloadFile = async (e, f) => {
        const J = H, K = G, g = {
                'AfjqV': J(0x1b8) + J(0x203),
                'fZuPH': function (o, p) {
                    return o(p);
                },
                'gnsWm': J(0x1ef),
                'XOMjI': K(0x1cf),
                'RvEYf': function (o, p) {
                    return o === p;
                },
                'mSmaN': J(0x1f7),
                'tdjTV': function (o, p) {
                    return o(p);
                },
                'sPoOm': function (o, p) {
                    return o !== p;
                },
                'XLcBi': K(0x1be),
                'cbcxc': K(0x1b2),
                'wGzQb': K(0x20c),
                'HUtqp': K(0x1e7) + K(0x1e3),
                'gpaJP': J(0x209),
                'pQzHV': J(0x1d3),
                'GcwIG': J(0x1b9),
                'KVpiy': K(0x1eb) + 'pe',
                'anhoL': K(0x1ea)
            }, h = {};
        h[K(0x1f0)] = e, h[K(0x1ab)] = g[K(0x20f)], h[K(0x1e8) + 'pe'] = g[J(0x1ff)];
        const i = await (-0x886 * 0x2 + -0x2 * 0xea3 + -0x79 * -0x62, axios_1[K(0x1d8)])(h), j = {};
        j[J(0x1f4)] = {};
        const k = i[K(0x1fe)][g[J(0x1bd)]] ? content_disposition_1[J(0x1d8)][K(0x1b6)](i[J(0x1fe)][g[K(0x1bd)]] || '') : j;
        let l = '';
        const m = k?.[J(0x1f4)]?.[K(0x212)];
        if (m) {
            if (g[K(0x1cd)](g[K(0x1e2)], g[K(0x1e0)])) {
                const o = k[J(0x1f4)][K(0x212)];
                l = new Date()[J(0x20d)]() + '-' + o;
            } else {
                const q = {};
                return q[J(0x1d8)] = j, g && h[J(0x211)] ? i : q;
            }
        } else {
            if (g[J(0x1ce)](g[K(0x1c0)], g[K(0x1c0)])) {
                const q = i[J(0x1fe)][g[J(0x1f8)]], r = q[J(0x1d2)]('/')[-0x161b + 0x2 * -0xde5 + -0x2 * -0x18f3];
                l = f + '-' + new Date()[J(0x20d)]() + '.' + r;
            } else {
                const t = f[K(0x1f4)][J(0x212)];
                g = new h()[J(0x20d)]() + '-' + t;
            }
        }
        const n = (-0x320 + 0x43c + 0x11c * -0x1, path_1[J(0x20b)])(__dirname, '..', '..', '..', g[J(0x1e9)], l);
        return await new Promise((t, u) => {
            const L = J, N = J, v = {
                    'gsotX': g[L(0x1e6)],
                    'reZdM': function (x, y) {
                        const M = L;
                        return g[M(0x202)](x, y);
                    }
                };
            g[L(0x1cd)](g[L(0x1b3)], g[L(0x1b3)]) ? (h[N(0x1cf)](v[L(0x1a9)], i), v[N(0x204)](j, new k(l))) : i[L(0x1b1)][N(0x1bb)]((0x1 * -0x24af + -0x9 * -0x101 + -0x2 * -0xdd3, fs_1[N(0x1ad) + L(0x1c4)])(n))['on'](g[N(0x1fd)], async () => t(l))['on'](g[L(0x1d9)], y => {
                const O = N, Q = N, z = {
                        'OOkBK': g[O(0x1e6)],
                        'NgHuT': function (A, B) {
                            const P = O;
                            return g[P(0x206)](A, B);
                        },
                        'XxXCj': g[O(0x1fd)],
                        'EBUBV': g[Q(0x1d9)]
                    };
                if (g[Q(0x1ce)](g[Q(0x208)], g[Q(0x208)]))
                    console[O(0x1cf)](g[O(0x1e6)], y), g[Q(0x202)](u, new Error(y));
                else {
                    const B = {
                        'ZMcEj': z[Q(0x1f2)],
                        'PcuRl': function (C, D) {
                            const R = O;
                            return z[R(0x1ac)](C, D);
                        }
                    };
                    k[O(0x1b1)][Q(0x1bb)]((-0x1323 + -0x25e7 + 0x390a, l[O(0x1ad) + O(0x1c4)])(m))['on'](z[Q(0x201)], async () => s(t))['on'](z[Q(0x1aa)], C => {
                        const S = O, T = Q;
                        s[S(0x1cf)](B[S(0x205)], C), B[T(0x1dc)](t, new u(C));
                    });
                }
            });
        }), l;
    }, MessengerVerifyMediaMessage = async (c, d, e, f) => {
        const U = H, V = G, g = {
                'LsLtN': U(0x1eb) + 'pe',
                'xwjQh': function (i, j, k) {
                    return i(j, k);
                },
                'ySNxN': function (i, j) {
                    return i === j;
                },
                'kGjuV': V(0x1d6),
                'HfzYE': V(0x1e5),
                'QphyX': function (i, j) {
                    return i > j;
                },
                'NQayf': U(0x1fa)
            };
        let h;
        await Promise[U(0x207)](d[U(0x1df)][V(0x1c6) + 's'][V(0x1ba)](async (i, j) => {
            const W = V, X = V, k = e['id'] + '_' + d[W(0x210)];
            h = await g[X(0x1d7)](downloadFile, i[X(0x1fb)][W(0x1f0)], k);
            let l;
            if (d?.[W(0x1df)]?.[W(0x1b5)]?.[W(0x1db)]) {
                if (g[X(0x1e4)](g[W(0x1b4)], g[W(0x1de)])) {
                    const p = g[W(0x1fe)][g[X(0x1bc)]], q = p[X(0x1d2)]('/')[-0x12 * -0x1c6 + -0x249 + 0xed1 * -0x2];
                    h = i + '-' + new j()[W(0x20d)]() + '.' + q;
                } else {
                    const p = await (0x17e * 0x11 + 0x515 + -0x1e73, getQuotedForMessageId_1[X(0x1d8)])(d[X(0x1df)][X(0x1b5)][X(0x1db)], e[W(0x1f3)]);
                    l = p?.['id'] || undefined;
                }
            }
            const m = {
                'messageId': g[X(0x1d1)](j, -0x256c * -0x1 + 0x1 * -0x2586 + -0x1 * -0x1a) ? d[W(0x210)] + '__' + j : d[X(0x210)] || '',
                'ticketId': e['id'],
                'contactId': f['id'],
                'body': d[X(0x1df)]?.[W(0x1c2)] || '',
                'fromMe': d[X(0x1c8)],
                'read': ![],
                'mediaUrl': h,
                'mediaType': d[W(0x1b0)],
                'quotedMsgId': l,
                'timestamp': +d[X(0x1e1)],
                'status': g[W(0x1ae)]
            };
            await e[X(0x1c3)]({
                'lastMessage': d[X(0x1df)]?.[X(0x1c2)] || h || '',
                'lastMessageAt': new Date()[W(0x20d)](),
                'answered': ![]
            });
            const n = {};
            n[X(0x1c1) + 'a'] = m, n[W(0x1f3)] = e[X(0x1f3)], await (-0x901 * 0x2 + 0x3a * -0x2e + 0x4bd * 0x6, CreateMessageService_1[W(0x1d8)])(n);
        }));
    };
function a() {
    const Y = [
        'pQzHV',
        'timestamp',
        'gpaJP',
        'sposition',
        'ySNxN',
        'wIZJi',
        'AfjqV',
        'content-di',
        'responseTy',
        'anhoL',
        'public',
        'content-ty',
        '8cIvQfr',
        'Services/C',
        '1513548CVVlci',
        'finish',
        'url',
        'erty',
        'OOkBK',
        'tenantId',
        'parameters',
        '__importDe',
        '36840bBMinl',
        'TWmvM',
        'KVpiy',
        'value',
        'received',
        'payload',
        'ageId',
        'gnsWm',
        'headers',
        'wGzQb',
        '142119XyTerr',
        'XxXCj',
        'tdjTV',
        'LOAD',
        'reZdM',
        'ZMcEj',
        'fZuPH',
        'all',
        'mSmaN',
        'MBoSQ',
        '240569nxggcN',
        'join',
        'stream',
        'getTime',
        'defineProp',
        'cbcxc',
        'message_id',
        '__esModule',
        'filename',
        'gsotX',
        'EBUBV',
        'method',
        'NgHuT',
        'createWrit',
        'NQayf',
        '274704DAuXFu',
        'type',
        'data',
        'GET',
        'XLcBi',
        'kGjuV',
        'reply_to',
        'parse',
        '3713360eBkRQT',
        'ERROR\x20DONW',
        'ywFTQ',
        'map',
        'pipe',
        'LsLtN',
        'HUtqp',
        'siPGu',
        'geService',
        'GcwIG',
        'messageDat',
        'text',
        'update',
        'eStream',
        'path',
        'attachment',
        '70216ADqXow',
        'fromMe',
        'axios',
        'ers/getQuo',
        '7PGvZTk',
        '../Message',
        'sPoOm',
        'RvEYf',
        'error',
        'fault',
        'QphyX',
        'split',
        'lHqNf',
        'tedForMess',
        '42pfoQjO',
        'WHoLl',
        'xwjQh',
        'default',
        'XOMjI',
        '../../help',
        'mid',
        'PcuRl',
        'reateMessa',
        'HfzYE',
        'message'
    ];
    a = function () {
        return Y;
    };
    return a();
}
exports[H(0x1d8)] = MessengerVerifyMediaMessage;
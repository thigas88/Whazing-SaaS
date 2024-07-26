'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x21b)) / (0x2 * -0x1249 + 0x3 * -0x9ee + -0x7 * -0x97b) + -parseInt(C(0x1fd)) / (-0x13 * -0x17f + -0x1b * -0x89 + 0x2ade * -0x1) * (parseInt(D(0x1b5)) / (-0xd * 0xa1 + -0xe53 + 0x1683)) + -parseInt(D(0x1b9)) / (-0x34 * -0xb2 + 0x1 * -0x1c5a + -0x2 * 0x3e5) * (-parseInt(D(0x1f6)) / (-0x4 * 0x83a + 0x1c66 + 0x487)) + parseInt(D(0x1c6)) / (0x1af * 0x4 + -0xa46 + 0x390) * (parseInt(C(0x22b)) / (-0x1380 + 0x26e3 + -0x162 * 0xe)) + parseInt(D(0x200)) / (0x1 * 0x22d3 + 0xf6b + -0x3236) + -parseInt(C(0x232)) / (-0x1d8b + -0x8 * -0x70 + 0x2 * 0xd0a) * (parseInt(C(0x220)) / (-0x1 * 0xb4d + -0x1459 + 0x6 * 0x548)) + parseInt(C(0x1ba)) / (0x38b * 0x9 + -0x16b4 + -0x924) * (-parseInt(C(0x1ae)) / (0x12a7 + 0xebf + -0x2 * 0x10ad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x655 * -0x49 + 0x611e + -0xa7d8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c60 + -0x1999 + -0x37a7 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x1e0) + E(0x1d1)] || function (c) {
    const G = F;
    return c && c[G(0x1bd)] ? c : { 'default': c };
};
const u = {};
u[F(0x1bf)] = !![], Object[E(0x238) + F(0x1f5)](exports, E(0x1bd), u);
const path_1 = require(F(0x1d0)), util_1 = require(E(0x1c0)), fs_1 = require('fs'), axios_1 = __importDefault(require(E(0x212))), CreateMessageService_1 = __importDefault(require(E(0x21d) + E(0x209) + F(0x1f8) + E(0x1f3))), logger_1 = require(F(0x214) + F(0x233)), getQuotedForMessageId_1 = __importDefault(require(F(0x1b6) + E(0x1bc) + F(0x221) + F(0x1e7))), writeFileAsync = (-0x11fd + 0x1c20 + 0x361 * -0x3, util_1[E(0x224)])(fs_1[F(0x21e)]), getMediaInfo = j => {
        const H = F, I = F, k = {};
        k[H(0x1ee)] = I(0x21c), k[H(0x1f0)] = I(0x207), k[H(0x23d)] = I(0x22f), k[I(0x1de)] = I(0x225), k[H(0x1e1)] = H(0x1c1), k[H(0x1eb)] = H(0x20f), k[H(0x1d4)] = function (w, z) {
            return w - z;
        }, k[I(0x1d3)] = function (w, z) {
            return w == z;
        }, k[I(0x1be)] = I(0x1ce), k[H(0x228)] = I(0x1e6);
        const l = k, m = j[I(0x21c)] ? l[H(0x1ee)] : j[H(0x207)] ? l[H(0x1f0)] : j[H(0x22f)] ? l[I(0x23d)] : j[I(0x225)] ? l[I(0x1de)] : j[H(0x1c1)] && !j[I(0x1c1)][I(0x1d5) + 'd'] ? l[I(0x1e1)] : l[I(0x1eb)], n = j[m], [o, p, q, r, s, t, v] = [
                m,
                n[I(0x1fc)] ? n[H(0x1fc)] : '',
                ![],
                null,
                n[H(0x216)] ? n[I(0x216)] : n[l[H(0x1d4)](n[I(0x1b3)], 0xc74 * -0x3 + 0x4 * 0x70f + 0x921)][H(0x216)],
                j[H(0x1fa)] ? j[I(0x1fa)] : '',
                l[I(0x1d3)](m, l[I(0x1de)])
            ];
        switch (m) {
        case l[H(0x1ee)]:
            const w = {};
            w[I(0x1b1)] = o, w[H(0x210)] = l[H(0x1be)], w[I(0x20d)] = q, w[I(0x1d6)] = r, w[H(0x22a)] = s, w[H(0x1fa)] = t, w[H(0x1d2)] = v;
            return w;
            break;
        case l[H(0x1f0)]:
            const x = {};
            x[I(0x1b1)] = o, x[I(0x210)] = p, x[H(0x20d)] = q, x[I(0x1d6)] = r, x[I(0x22a)] = s, x[I(0x1fa)] = t, x[I(0x1d2)] = v;
            return x;
            break;
        case l[H(0x23d)]:
            const y = {};
            y[I(0x1b1)] = o, y[H(0x210)] = p, y[H(0x20d)] = q, y[H(0x1d6)] = r, y[I(0x22a)] = s, y[I(0x1fa)] = t, y[H(0x1d2)] = v;
            return y;
            break;
        case l[H(0x1de)]:
            const z = {};
            z[I(0x1b1)] = o, z[I(0x210)] = p, z[I(0x20d)] = q, z[H(0x1d6)] = r, z[I(0x22a)] = s, z[H(0x1fa)] = t, z[H(0x1d2)] = v;
            return z;
            break;
        case l[I(0x1e1)]:
            const A = {};
            A[I(0x1b1)] = o, A[I(0x210)] = l[I(0x228)], A[I(0x20d)] = q, A[H(0x1d6)] = r, A[I(0x22a)] = s, A[I(0x1fa)] = t, A[H(0x1d2)] = v, A[H(0x1e4)] = !![];
            return A;
            break;
        default:
            const B = {};
            B[I(0x1b1)] = o, B[I(0x210)] = p, B[H(0x20d)] = !![], B[H(0x1d6)] = n[H(0x217)] ? n[H(0x217)] : null, B[H(0x22a)] = s, B[I(0x1fa)] = t, B[H(0x1d2)] = v;
            return B;
            break;
        }
    }, downloadFile = async (c, d) => {
        const J = E, K = F, e = {
                'kxppu': function (g, h) {
                    return g === h;
                },
                'zHKOB': J(0x204),
                'RUBmD': J(0x1ea) + J(0x23a),
                'EifIJ': function (g, h) {
                    return g(h);
                },
                'JGwjS': function (g, h) {
                    return g !== h;
                },
                'uCMmT': J(0x203),
                'tUlRs': J(0x1c5),
                'DwwNi': J(0x20b),
                'CpKuo': J(0x201),
                'Ockoo': K(0x1f4),
                'GnKKc': J(0x1dd)
            }, f = await (0x2 * -0x338 + 0x7c * 0x33 + 0x29c * -0x7, axios_1[J(0x213)])({
                'url': c[K(0x219)](),
                'method': e[K(0x1e2)],
                'responseType': e[J(0x22e)]
            });
        await new Promise((g, h) => {
            const M = K, N = J, i = {
                    'Wygar': function (j, k) {
                        const L = b;
                        return e[L(0x1f1)](j, k);
                    },
                    'BzLEp': e[M(0x235)],
                    'wjhzX': e[M(0x20a)],
                    'QHHhX': function (j, k) {
                        const O = M;
                        return e[O(0x1fb)](j, k);
                    }
                };
            if (e[N(0x1bb)](e[M(0x206)], e[M(0x1d9)]))
                f[M(0x222)][M(0x227)]((-0x1b5d + -0xea3 * -0x2 + -0xa3 * 0x3, fs_1[N(0x21a) + N(0x1db)])(d))['on'](e[M(0x1c9)], async () => g(!![]))['on'](e[M(0x20e)], j => {
                    const P = M, Q = M;
                    if (i[P(0x1b2)](i[Q(0x1ff)], i[Q(0x1ff)]))
                        console[P(0x201)](i[Q(0x208)], j), i[Q(0x1f7)](h, new Error(j));
                    else {
                        const l = {};
                        return l[Q(0x213)] = j, g && h[Q(0x1bd)] ? i : l;
                    }
                });
            else {
                e[N(0x1e8)][M(0x201)](N(0x237) + M(0x21f) + N(0x1b4) + f[M(0x1c7)]);
                return;
            }
        });
    }, VerifyMediaMessage = async (d, e, f, g) => {
        const R = E, S = E, h = {
                'Icpln': R(0x1ea) + S(0x23a),
                'NFzEK': function (v, w) {
                    return v(w);
                },
                'hXLqA': S(0x20b),
                'JKSvp': S(0x201),
                'jNNhV': function (v, w) {
                    return v && w;
                },
                'fjaTV': function (v, w) {
                    return v === w;
                },
                'ISOLZ': S(0x22c),
                'MNKHt': S(0x23c),
                'OAaYz': function (v, w) {
                    return v === w;
                },
                'TvWIN': S(0x1c2),
                'qMYxH': R(0x1cf),
                'gDozv': function (v, w, x) {
                    return v(w, x);
                },
                'UYaAC': function (v, w) {
                    return v === w;
                },
                'gEZxv': R(0x1dc),
                'DrwAP': S(0x1b7),
                'oGjLK': function (v, w) {
                    return v * w;
                },
                'TQjIQ': R(0x1fe),
                'TFzvI': R(0x234),
                'kZFJu': function (v, w) {
                    return v || w;
                }
            };
        let i, j = {};
        i = d?.[S(0x231)], j = d?.[S(0x20c)];
        if (h[R(0x1e9)](!i, j)) {
            if (h[S(0x1e5)](h[S(0x1c4)], h[R(0x1e3)])) {
                const w = {
                    'oreBX': h[R(0x1d7)],
                    'SKTiV': function (x, y) {
                        const T = S;
                        return h[T(0x202)](x, y);
                    }
                };
                j[S(0x222)][R(0x227)]((0xed * -0x12 + -0x1 * -0xf06 + 0x1a4, k[S(0x21a) + R(0x1db)])(l))['on'](h[S(0x1c8)], async () => q(!![]))['on'](h[R(0x1af)], x => {
                    const U = S, V = S;
                    q[U(0x201)](w[V(0x1cd)], x), w[U(0x211)](r, new s(x));
                });
            } else
                i = j?.[R(0x1f2) + R(0x205)];
        }
        const k = await h[S(0x202)](getMediaInfo, i), l = await d[R(0x1ed)][R(0x215)](k[S(0x22a)]);
        if (!l) {
            if (h[R(0x1df)](h[R(0x239)], h[R(0x239)])) {
                logger_1[R(0x1e8)][S(0x201)](S(0x237) + S(0x21f) + R(0x1b4) + i[R(0x1c7)]);
                return;
            } else
                h[S(0x201)](h[S(0x1d7)], i), h[S(0x202)](j, new k(l));
        }
        const m = k[R(0x210)][S(0x236)]('/')[0x1852 + -0x945 + -0x504 * 0x3][R(0x236)](';')[0x14f + -0xde8 * -0x1 + -0x29 * 0x5f], n = l[R(0x216)] + '_' + new Date()[R(0x1da)]() + '.' + m, o = (0x697 + 0x134b + -0xcf1 * 0x2, path_1[S(0x22d)])(__dirname, '..', '..', '..', h[S(0x1ca)], n), p = await d[S(0x1ed)][R(0x223) + 'k'](k[R(0x22a)]);
        await h[S(0x1cc)](downloadFile, p, o);
        let q;
        if (i?.[R(0x1ef) + R(0x218)]?.[R(0x1c7)]) {
            if (h[S(0x1b0)](h[S(0x1ec)], h[R(0x1f9)]))
                e = f?.[R(0x1f2) + S(0x205)];
            else {
                const y = await (0x1a1 * -0xd + -0xd3 * 0x2 + -0x1 * -0x16d3, getQuotedForMessageId_1[S(0x213)])(i[S(0x1ef) + R(0x218)][R(0x1c7)], f[R(0x23b)]);
                q = y?.['id'] || undefined;
            }
        }
        const r = {
            'messageId': h[S(0x202)](String, i?.[R(0x1c7)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[S(0x230)] || i[S(0x1fa)] || n,
            'fromMe': e,
            'read': e,
            'mediaUrl': n,
            'mediaType': k[S(0x210)][S(0x236)]('/')[-0x1bdd + -0x2376 + 0x3f53],
            'quotedMsgId': q,
            'timestamp': h[R(0x1cb)](+i[S(0x1b8)], 0x6a6 + -0x2 * 0x210 + 0x162),
            'status': e ? h[S(0x226)] : h[R(0x1d8)]
        };
        await f[S(0x20c)]({
            'lastMessage': i[S(0x230)] || i[R(0x1fa)] || n,
            'lastMessageAt': new Date()[S(0x1da)](),
            'answered': h[S(0x229)](e, ![])
        });
        const s = {};
        s[R(0x1c3) + 'a'] = r, s[S(0x23b)] = f[S(0x23b)];
        const t = await (0x1 * -0x984 + -0x2 * 0xa51 + 0x1e26, CreateMessageService_1[S(0x213)])(s);
        return t;
    };
exports[E(0x213)] = VerifyMediaMessage;
function a() {
    const W = [
        'ERR_DOWNLO',
        'defineProp',
        'TvWIN',
        'LOAD',
        'tenantId',
        'ycDVQ',
        'UWrEm',
        '348hbilQK',
        'JKSvp',
        'UYaAC',
        'type',
        'Wygar',
        'length',
        '\x20ID:\x20',
        '231qgljVW',
        '../../help',
        'hBxFI',
        'date',
        '260RXwBMX',
        '319KDnoKm',
        'JGwjS',
        'ers/getQuo',
        '__esModule',
        'OMBMU',
        'value',
        'util',
        'sticker',
        'vcksD',
        'messageDat',
        'ISOLZ',
        'nRtbm',
        '16986ouEqnM',
        'message_id',
        'hXLqA',
        'DwwNi',
        'qMYxH',
        'oGjLK',
        'gDozv',
        'oreBX',
        'image/png',
        'public',
        'path',
        'fault',
        'SAV',
        'GRZVD',
        'yPXMe',
        'is_animate',
        'fileName',
        'Icpln',
        'TFzvI',
        'tUlRs',
        'getTime',
        'eStream',
        'DmfYd',
        'stream',
        'PzsFW',
        'OAaYz',
        '__importDe',
        'bSYtK',
        'Ockoo',
        'MNKHt',
        'SAS',
        'fjaTV',
        'image/webp',
        'ageId',
        'logger',
        'jNNhV',
        'ERROR\x20DONW',
        'uNIHx',
        'gEZxv',
        'telegram',
        'khPMC',
        'reply_to_m',
        'fLdyY',
        'kxppu',
        'edited_mes',
        'geService',
        'GET',
        'erty',
        '13070NIEjnB',
        'QHHhX',
        'reateMessa',
        'DrwAP',
        'caption',
        'EifIJ',
        'mime_type',
        '2066oxGlyu',
        'sended',
        'BzLEp',
        '276456XMBQtW',
        'error',
        'NFzEK',
        'uvBop',
        'QEgkm',
        'sage',
        'uCMmT',
        'video',
        'wjhzX',
        'Services/C',
        'RUBmD',
        'finish',
        'update',
        'SAD',
        'CpKuo',
        'document',
        'mimeType',
        'SKTiV',
        'axios',
        'default',
        '../../util',
        'getFile',
        'file_id',
        'file_name',
        'essage',
        'toString',
        'createWrit',
        '43772GeAGsU',
        'photo',
        '../Message',
        'writeFile',
        'AD_MEDIA::',
        '10BNLHxJ',
        'tedForMess',
        'data',
        'getFileLin',
        'promisify',
        'voice',
        'TQjIQ',
        'pipe',
        'jBmrc',
        'kZFJu',
        'fileId',
        '364YwQsJJ',
        'nsRzt',
        'join',
        'GnKKc',
        'audio',
        'text',
        'message',
        '1145682CNBZVJ',
        's/logger',
        'received',
        'zHKOB',
        'split'
    ];
    a = function () {
        return W;
    };
    return a();
}
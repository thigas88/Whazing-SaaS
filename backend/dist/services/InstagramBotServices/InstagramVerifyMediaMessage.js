'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0xbd)) / (0xd98 + 0x5 * -0x79d + 0x187a) + parseInt(G(0xdc)) / (0x3 * 0x459 + 0x44a + -0x1153) + parseInt(G(0x102)) / (-0x610 * -0x2 + -0x31 * -0x2 + -0xc7f * 0x1) + -parseInt(G(0xb1)) / (-0x1c2c * -0x1 + 0x210 + -0x1e38) + -parseInt(G(0x11c)) / (0x3 * 0x83f + 0x726 * 0x1 + 0xfef * -0x2) * (parseInt(G(0xf1)) / (0xc7f + 0x40 * 0x74 + -0x2979)) + -parseInt(F(0xc7)) / (-0x6 * 0x17d + -0x3a * 0x86 + 0x2751) + parseInt(F(0xb8)) / (0x1e * 0xef + -0x4 * -0x552 + -0x3142);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xc599 + 0x5 * 0xcefc + 0x16023));
var __importDefault = this && this[H(0xac) + H(0x121)] || function (c) {
    const J = H;
    return c && c[J(0xc4)] ? c : { 'default': c };
};
const u = {};
u[I(0x122)] = !![], Object[I(0xa9) + I(0x104)](exports, H(0xc4), u);
const path_1 = require(I(0xff)), fs_1 = require('fs'), axios_1 = __importDefault(require(I(0xf5))), CreateMessageService_1 = __importDefault(require(H(0xd2) + I(0x10f) + I(0xd4) + I(0xf6))), getExt = d => {
        const K = H, L = I, e = {};
        e[K(0xb9)] = function (j, k) {
            return j - k;
        };
        const f = e, g = d[K(0xc1)]('?'), h = g[0x59 * 0x2 + 0x1e56 + -0x1 * 0x1f08][L(0xc1)]('/'), i = h[f[K(0xb9)](h[K(0x110)], -0x1ab * 0xa + -0x6 * -0x1e7 + 0x545)][K(0xc1)]('.');
        return i[0x2107 + -0x2 * -0x1b1 + -0x1d2 * 0x14];
    }, downloadFile = async (c, d) => {
        const M = H, N = H, e = {
                'hUVrZ': M(0xcc),
                'YsqEE': M(0xe3),
                'SSgga': M(0xe6),
                'vDJFk': function (g, h) {
                    return g(h);
                },
                'tKdwp': function (g, h) {
                    return g - h;
                },
                'RlJFK': function (g, h) {
                    return g !== h;
                },
                'SwUPy': N(0x112),
                'chQjT': N(0xfb),
                'JIkva': M(0x129) + M(0xf9),
                'pNGPh': function (g, h) {
                    return g !== h;
                },
                'dhiUI': N(0xb0),
                'ZqXqc': N(0xc0),
                'SbgBi': N(0x115),
                'DmIjg': M(0x107),
                'YPAmv': N(0x127)
            }, f = await (-0x2060 + 0x1a0 * 0x8 + 0x1360, axios_1[N(0xc2)])({
                'url': c[M(0xd3)](),
                'method': e[N(0xb2)],
                'responseType': e[M(0x11f)]
            });
        await new Promise((g, h) => {
            const Q = M, R = N, i = {
                    'WRZov': function (j, k) {
                        const O = b;
                        return e[O(0xeb)](j, k);
                    },
                    'lLJGw': function (j, k) {
                        const P = b;
                        return e[P(0x117)](j, k);
                    },
                    'wlVAS': e[Q(0xf7)],
                    'PTyqY': e[R(0x120)],
                    'ntVjb': e[R(0x12b)],
                    'UXXxs': function (j, k) {
                        const S = R;
                        return e[S(0x116)](j, k);
                    }
                };
            if (e[R(0xa8)](e[Q(0x111)], e[R(0x111)])) {
                const k = e[R(0x105)][R(0xc1)]('|');
                let l = -0xf29 * -0x1 + -0x2 * -0xd1d + -0x2963;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        [n] = o[R(0xee)][Q(0x10c)][R(0xd7) + Q(0x108)][Q(0xc9)];
                        continue;
                    case '1':
                        l = m[R(0xee)][R(0x10c)];
                        continue;
                    case '2':
                        t = e[R(0x12a)];
                        continue;
                    case '3':
                        s = e[R(0xe4)];
                        continue;
                    case '4':
                        p = e[R(0x116)](q, r[R(0x10d)]);
                        continue;
                    }
                    break;
                }
            } else
                f[Q(0xd5)][R(0xcb)]((-0x11ab + -0x1c60 + 0x2e0b, fs_1[Q(0xc5) + R(0x103)])(d))['on'](e[Q(0xd8)], async () => g(!![]))['on'](e[Q(0xcd)], k => {
                    const T = R, U = R;
                    if (i[T(0xe9)](i[U(0x10e)], i[T(0xcf)]))
                        console[U(0x115)](i[T(0xef)], k), i[T(0x118)](h, new Error(k));
                    else {
                        const m = d[T(0xc1)]('?'), n = m[-0x13b9 + 0x277 * -0x7 + 0x127d * 0x2][U(0xc1)]('/'), o = n[i[T(0xb5)](n[T(0x110)], -0x2c5 + -0x2a * -0x87 + -0x3e0 * 0x5)][U(0xc1)]('.');
                        return o[-0x355 * -0x2 + 0x170f + -0x1db8];
                    }
                });
        });
    }, VerifyMediaMessage = async (d, e, f, g) => {
        const V = H, W = I, h = {
                'ZjbSk': V(0x129) + W(0xf9),
                'EHLqw': function (t, v) {
                    return t(v);
                },
                'dlmjP': V(0xe8),
                'iPpDP': V(0xda),
                'elPnS': function (t, v) {
                    return t(v);
                },
                'Kujmw': V(0xbc),
                'kWQsr': V(0xf0) + 'n',
                'aiJUm': V(0x109),
                'KSNtf': function (t, v) {
                    return t === v;
                },
                'DpuFa': V(0xf8),
                'lxZgN': W(0x114),
                'DLdGD': V(0xb6),
                'VmLhb': function (t, v) {
                    return t(v);
                },
                'KXgba': V(0xe3),
                'DnskS': W(0xe6),
                'pFNsH': function (t, v) {
                    return t === v;
                },
                'VyJKf': V(0xfe),
                'QcbXA': W(0x119),
                'YWUuC': V(0x124),
                'nmRPw': function (t, v) {
                    return t(v);
                },
                'SkvMW': function (t, v) {
                    return t === v;
                },
                'HqkLk': W(0xbe) + 'a',
                'aKigQ': function (t, v) {
                    return t === v;
                },
                'terxQ': W(0x11a),
                'dchhw': V(0x113),
                'NGmbw': V(0xe5),
                'WpRDB': V(0xd6),
                'ChbfC': W(0xec),
                'ScuSF': function (t, v) {
                    return t === v;
                },
                'ePOTK': function (t, v, w) {
                    return t(v, w);
                },
                'NGfsR': V(0xf3),
                'OqoCi': W(0xe1),
                'ClWkH': function (t, v) {
                    return t || v;
                }
            };
        let i, j, k, l = h[W(0xfc)], m = h[W(0xfa)];
        if (h[W(0xe0)](d[V(0xee)]?.[W(0x10c)]?.[W(0xca)], 0x1105 + 0x1 * -0x1254 + 0x15 * 0x10)) {
            if (h[V(0xe0)](h[V(0x128)], h[V(0x106)])) {
                const v = {};
                return v[W(0xc2)] = j, g && h[W(0xc4)] ? i : v;
            } else {
                const v = h[W(0xb3)][V(0xc1)]('|');
                let w = -0x3 * 0x5a9 + -0x1de9 + 0x1772 * 0x2;
                while (!![]) {
                    switch (v[w++]) {
                    case '0':
                        [i] = d[V(0xee)][V(0x10c)][W(0xd7) + W(0x108)][V(0xc9)];
                        continue;
                    case '1':
                        k = h[W(0x10a)](getExt, i[V(0x10d)]);
                        continue;
                    case '2':
                        m = h[V(0xd1)];
                        continue;
                    case '3':
                        l = h[V(0x125)];
                        continue;
                    case '4':
                        j = d[V(0xee)][W(0x10c)];
                        continue;
                    }
                    break;
                }
            }
        }
        if (h[W(0xaf)](d[V(0xee)]?.[V(0x10c)]?.[W(0xca)], -0x867 + 0x5 * -0x779 + 0x2dc6)) {
            if (h[W(0xe0)](h[W(0x11b)], h[V(0xab)]))
                h[V(0x115)](h[W(0xf2)], i), h[V(0xd9)](j, new k(l));
            else {
                const y = h[W(0xdf)][W(0xc1)]('|');
                let z = -0x1c3f + -0x17e0 + 0x1 * 0x341f;
                while (!![]) {
                    switch (y[z++]) {
                    case '0':
                        j = d[W(0xee)][W(0x10c)];
                        continue;
                    case '1':
                        [i] = d[W(0xee)][V(0x10c)][W(0xc6) + V(0xdb)];
                        continue;
                    case '2':
                        l = h[W(0x100)];
                        continue;
                    case '3':
                        k = h[V(0xba)](getExt, i[V(0x10d)]);
                        continue;
                    case '4':
                        m = h[W(0x101)];
                        continue;
                    }
                    break;
                }
            }
        }
        if (h[W(0xde)](d[W(0xee)]?.[W(0xbb)], h[V(0xbf)])) {
            if (h[V(0xb4)](h[V(0x126)], h[W(0x126)])) {
                const A = h[W(0xc3)][V(0xc1)]('|');
                let B = 0x15 * 0x185 + -0x116f + -0xe7a;
                while (!![]) {
                    switch (A[B++]) {
                    case '0':
                        m = h[W(0xad)];
                        continue;
                    case '1':
                        k = h[V(0x123)](getExt, i[W(0xa7)]);
                        continue;
                    case '2':
                        i = d[V(0xee)][W(0xbe) + 'a'][W(0x10c)][W(0xd6)];
                        continue;
                    case '3':
                        l = h[V(0x11e)];
                        continue;
                    case '4':
                        j = d[V(0xee)][W(0xbe) + 'a'][W(0x10c)];
                        continue;
                    }
                    break;
                }
            } else {
                const D = h[W(0xd0)][W(0xc1)]('|');
                let E = 0x43 * 0x77 + -0x7b8 + -0x7cf * 0x3;
                while (!![]) {
                    switch (D[E++]) {
                    case '0':
                        t = h[W(0x101)];
                        continue;
                    case '1':
                        [n] = o[W(0xee)][V(0x10c)][W(0xc6) + V(0xdb)];
                        continue;
                    case '2':
                        l = m[W(0xee)][V(0x10c)];
                        continue;
                    case '3':
                        p = h[V(0x123)](q, r[W(0x10d)]);
                        continue;
                    case '4':
                        s = h[W(0x100)];
                        continue;
                    }
                    break;
                }
            }
        }
        const n = f['id'] + '_' + j['id'] + '_' + new Date()[W(0xed)]() + '.' + k, o = (-0x1e14 + 0x17a5 + 0x3 * 0x225, path_1[V(0xf4)])(__dirname, '..', '..', '..', h[W(0xe7)], n), p = h[W(0xaa)](d[V(0xee)][V(0xbb)], h[V(0xbf)]) ? i[W(0xa7)] : i[W(0x10d)];
        await h[W(0xdd)](downloadFile, p, o);
        const q = {
            'messageId': h[V(0x123)](String, d[W(0xee)]?.[W(0xea)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': d[V(0xee)]?.[W(0xb7)] || d[V(0xee)]?.[V(0xce)] || m,
            'fromMe': e,
            'read': e,
            'mediaUrl': n,
            'mediaType': l,
            'quotedMsgId': '',
            'timestamp': new Date()[V(0xed)](),
            'status': e ? h[W(0x11d)] : h[W(0xc8)]
        };
        await f[W(0xae)]({
            'lastMessage': d[W(0xee)]?.[V(0xb7)] || d[V(0xee)]?.[W(0xce)] || m,
            'lastMessageAt': new Date()[W(0xed)](),
            'answered': h[W(0x10b)](e, ![])
        });
        const r = {};
        r[V(0xfd) + 'a'] = q, r[V(0xe2)] = f[W(0xe2)];
        const s = await (0x4 * -0x464 + -0x1fdd * -0x1 + 0x1 * -0xe4d, CreateMessageService_1[V(0xc2)])(r);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8 * -0x1d8 + 0x1298 + -0x2b * 0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const X = [
        'hUVrZ',
        'lxZgN',
        'GET',
        'ions2',
        'arquivo',
        'VmLhb',
        'ClWkH',
        'media',
        'url',
        'wlVAS',
        'Services/C',
        'length',
        'dhiUI',
        'wIuxH',
        '4|2|1|3|0',
        'TrliB',
        'error',
        'vDJFk',
        'RlJFK',
        'UXXxs',
        'rXUVn',
        'poeDe',
        'VyJKf',
        '491260SwakZC',
        'NGfsR',
        'WpRDB',
        'YPAmv',
        'chQjT',
        'fault',
        'value',
        'elPnS',
        '0|1|3|2|4',
        'DnskS',
        'terxQ',
        'stream',
        'DpuFa',
        'ERROR\x20DONW',
        'YsqEE',
        'JIkva',
        'audio_src',
        'pNGPh',
        'defineProp',
        'ScuSF',
        'QcbXA',
        '__importDe',
        'NGmbw',
        'update',
        'pFNsH',
        'oajCB',
        '914320HqDtDJ',
        'DmIjg',
        'DLdGD',
        'aKigQ',
        'WRZov',
        '4|0|1|3|2',
        'text',
        '1664936qSrcNL',
        'WmmiL',
        'nmRPw',
        'item_type',
        'video',
        '392454QWTcid',
        'voice_medi',
        'HqkLk',
        'finish',
        'split',
        'default',
        'dchhw',
        '__esModule',
        'createWrit',
        'video_vers',
        '948528UHrUkS',
        'OqoCi',
        'candidates',
        'media_type',
        'pipe',
        '1|0|4|3|2',
        'SbgBi',
        'caption',
        'PTyqY',
        'dlmjP',
        'KXgba',
        '../Message',
        'toString',
        'reateMessa',
        'data',
        'audio',
        'image_vers',
        'ZqXqc',
        'EHLqw',
        'vídeo',
        'ions',
        '1193116zVwzAz',
        'ePOTK',
        'SkvMW',
        'YWUuC',
        'KSNtf',
        'received',
        'tenantId',
        'imagem',
        'SSgga',
        'áudio',
        'image',
        'ChbfC',
        '2|1|3|4|0',
        'lLJGw',
        'item_id',
        'tKdwp',
        'public',
        'getTime',
        'message',
        'ntVjb',
        'applicatio',
        '36IqBZqw',
        'ZjbSk',
        'sended',
        'join',
        'axios',
        'geService',
        'SwUPy',
        'Zmszh',
        'LOAD',
        'aiJUm',
        'ZemtR',
        'kWQsr',
        'messageDat',
        'ZeGMm',
        'path',
        'Kujmw',
        'iPpDP',
        '182907UfFbnT',
        'eStream',
        'erty'
    ];
    a = function () {
        return X;
    };
    return a();
}
exports[H(0xc2)] = VerifyMediaMessage;
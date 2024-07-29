'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x1e4)) / (0x6 * 0x27e + -0x3 * -0xad0 + -0x2f63) * (-parseInt(C(0x1ed)) / (0x2 * -0x1069 + -0x2f * -0x1f + 0x1b23)) + -parseInt(D(0x1a4)) / (-0x1f30 + -0x1 * -0x152e + 0x9 * 0x11d) * (parseInt(D(0x1e0)) / (-0x9da * 0x1 + -0x96 * 0x2 + 0xb0a)) + parseInt(C(0x1a1)) / (-0x25b6 + -0x2524 + -0x4adf * -0x1) + -parseInt(D(0x1f0)) / (0x1a8a + -0x22bb * 0x1 + 0x837) * (parseInt(C(0x1f6)) / (0x8e * 0x33 + -0x1 * -0x246d + -0x1590 * 0x3)) + parseInt(D(0x1ad)) / (-0x635 + -0xc3e + 0x127b * 0x1) + parseInt(D(0x20f)) / (-0x1316 + 0x1 * -0x26c3 + 0x39e2) * (parseInt(D(0x1b7)) / (-0x164 * 0x1 + -0x86a + -0xfc * -0xa)) + parseInt(D(0x1b8)) / (-0x7a3 + 0x6 * 0x2b8 + -0x451 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x15797 + 0x1 * -0xcb4a7 + 0x14c43a));
var __importDefault = this && this[E(0x1ae) + F(0x1dd)] || function (c) {
    const G = F;
    return c && c[G(0x207)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9b2 + 0x24d3 + -0xb * 0x415);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[F(0x20c)] = !![], Object[F(0x1e6) + F(0x1c8)](exports, E(0x207), w);
const path_1 = require(E(0x1f3)), axios_1 = __importDefault(require(F(0x1fe))), fs_1 = require('fs'), content_disposition_1 = __importDefault(require(E(0x1c5) + F(0x1d9))), CreateMessageService_1 = __importDefault(require(E(0x1bf) + E(0x1fa) + F(0x1f8) + E(0x1a0))), getQuotedForMessageId_1 = __importDefault(require(F(0x205) + E(0x204) + E(0x1bb) + F(0x200))), downloadFile = async (e, f) => {
        const H = E, I = F, g = {
                'wLfwB': H(0x1e9) + 'pe',
                'hsnum': H(0x1c4) + I(0x1a8),
                'wOSxn': function (o, p) {
                    return o(p);
                },
                'chjLe': H(0x1d8),
                'duvZn': H(0x1c0),
                'fJhaz': function (o, p) {
                    return o !== p;
                },
                'UBmLM': I(0x19f),
                'xCbKZ': I(0x1b6),
                'UTmFZ': function (o, p) {
                    return o(p);
                },
                'UGepC': function (o, p) {
                    return o === p;
                },
                'MSivD': I(0x1ca),
                'GBXMS': H(0x1ab),
                'rdeAC': H(0x1b0),
                'CYNgr': I(0x1d3),
                'qUaoE': I(0x1c5) + H(0x1d9),
                'aqfYo': function (o, p) {
                    return o !== p;
                },
                'BjqZx': I(0x1eb),
                'igEBx': H(0x1cb),
                'MXvNz': function (o, p) {
                    return o !== p;
                },
                'ekxNg': H(0x1c9),
                'IUsoW': I(0x1f4)
            }, h = {};
        h[H(0x1ac)] = e, h[I(0x20d)] = g[H(0x1c3)], h[I(0x210) + 'pe'] = g[H(0x1da)];
        const i = await (-0x1e07 * 0x1 + 0x1ec4 + 0x9 * -0x15, axios_1[H(0x1b2)])(h), j = {};
        j[I(0x1b9)] = {};
        const k = i[I(0x1de)][g[H(0x1ec)]] ? content_disposition_1[I(0x1b2)][H(0x1e8)](i[I(0x1de)][g[I(0x1ec)]] || '') : j;
        let l = '';
        const m = k?.[H(0x1b9)]?.[I(0x211)];
        if (m) {
            if (g[H(0x1df)](g[I(0x1d6)], g[H(0x1ba)])) {
                const o = k[H(0x1b9)][H(0x211)];
                l = new Date()[H(0x1cc)]() + '-' + o;
            } else {
                const q = g[H(0x1de)][g[H(0x1af)]], r = q[I(0x1f9)]('/')[0x24f1 + 0xa09 + 0xb9 * -0x41];
                h = i + '-' + new j()[I(0x1cc)]() + '.' + r;
            }
        } else {
            if (g[I(0x1d7)](g[I(0x1e2)], g[H(0x1e2)])) {
                const r = f[I(0x1b9)][H(0x211)];
                g = new h()[H(0x1cc)]() + '-' + r;
            } else {
                const r = i[H(0x1de)][g[H(0x1af)]], s = r[I(0x1f9)]('/')[-0x2058 + 0x3b * 0x5f + 0xa74];
                l = f + '-' + new Date()[H(0x1cc)]() + '.' + s;
            }
        }
        const n = (0x45 * 0x2f + -0x3e6 + 0x5 * -0x1c1, path_1[H(0x1b3)])(__dirname, '..', '..', '..', g[H(0x1a7)], l);
        return await new Promise((t, u) => {
            const J = H, L = I, v = {
                    'snLha': g[J(0x1b5)],
                    'UKmCU': function (x, y) {
                        const K = J;
                        return g[K(0x1aa)](x, y);
                    },
                    'nlWVl': g[L(0x1c1)],
                    'DzXsF': g[J(0x1e1)],
                    'VaDPD': function (z, A) {
                        const M = L;
                        return g[M(0x201)](z, A);
                    },
                    'RYYfx': g[L(0x202)],
                    'uKWAA': g[J(0x1db)],
                    'oYuDV': function (x, y) {
                        const N = J;
                        return g[N(0x1ce)](x, y);
                    }
                };
            if (g[L(0x20b)](g[J(0x1ee)], g[J(0x1be)])) {
                const y = {};
                return y[L(0x1b2)] = j, g && h[J(0x207)] ? i : y;
            } else
                i[L(0x1e3)][J(0x1ef)]((0x1474 + -0x17b0 + 0x5c * 0x9, fs_1[J(0x1a6) + J(0x1c2)])(n))['on'](g[J(0x1c1)], async () => t(l))['on'](g[L(0x1e1)], y => {
                    const O = L, Q = J, z = {
                            'mUcUU': v[O(0x1f2)],
                            'SixEz': function (A, B) {
                                const P = O;
                                return v[P(0x20e)](A, B);
                            },
                            'CwdKu': v[O(0x1f5)],
                            'AqQRW': v[O(0x1a5)]
                        };
                    v[Q(0x209)](v[O(0x1ff)], v[Q(0x1dc)]) ? (console[O(0x1c0)](v[O(0x1f2)], y), v[O(0x1d5)](u, new Error(y))) : k[Q(0x1e3)][O(0x1ef)]((-0xe39 + -0x124b * 0x1 + 0x2084, l[O(0x1a6) + O(0x1c2)])(m))['on'](z[O(0x1b1)], async () => s(t))['on'](z[O(0x1bd)], B => {
                        const R = Q, S = Q;
                        s[R(0x1c0)](z[S(0x1ea)], B), z[R(0x1a2)](t, new u(B));
                    });
                });
        }), l;
    }, MessengerVerifyMediaMessage = async (c, d, e, f) => {
        const T = F, U = E, g = {
                'ngSOK': T(0x1c4) + U(0x1a8),
                'ylOuy': function (i, j) {
                    return i(j);
                },
                'EsGow': function (i, j, k) {
                    return i(j, k);
                },
                'gxAAX': function (i, j) {
                    return i !== j;
                },
                'FvNSJ': T(0x1c6),
                'RSXHB': function (i, j) {
                    return i > j;
                },
                'fcahD': U(0x1a9)
            };
        let h;
        await Promise[U(0x1a3)](d[U(0x1d0)][T(0x1fc) + 's'][T(0x19e)](async (i, j) => {
            const V = U, W = U, k = e['id'] + '_' + d[V(0x1f7)];
            h = await g[W(0x1cd)](downloadFile, i[V(0x208)][W(0x1ac)], k);
            let l;
            if (d?.[V(0x1d0)]?.[V(0x1e5)]?.[V(0x20a)]) {
                if (g[W(0x203)](g[W(0x1b4)], g[W(0x1b4)]))
                    h[V(0x1c0)](g[V(0x1d1)], i), g[W(0x1cf)](j, new k(l));
                else {
                    const p = await (0x23f9 + 0x1465 + 0x3c2 * -0xf, getQuotedForMessageId_1[W(0x1b2)])(d[W(0x1d0)][V(0x1e5)][V(0x20a)], e[V(0x206)]);
                    l = p?.['id'] || undefined;
                }
            }
            const m = {
                'messageId': g[W(0x1f1)](j, -0x23f0 + 0x16a1 + -0xd4f * -0x1) ? d[V(0x1f7)] + '__' + j : d[V(0x1f7)] || '',
                'ticketId': e['id'],
                'contactId': f['id'],
                'body': d[W(0x1d0)]?.[V(0x1d2)] || '',
                'fromMe': d[W(0x1fd)],
                'read': ![],
                'mediaUrl': h,
                'mediaType': d[V(0x1e7)],
                'quotedMsgId': l,
                'timestamp': +d[V(0x1fb)],
                'status': g[V(0x1c7)]
            };
            await e[V(0x1d4)]({
                'lastMessage': d[W(0x1d0)]?.[V(0x1d2)] || h || '',
                'lastMessageAt': new Date()[W(0x1cc)](),
                'answered': ![]
            });
            const n = {};
            n[W(0x1bc) + 'a'] = m, n[V(0x206)] = e[W(0x206)], await (-0x697 + 0x1263 + 0xa * -0x12e, CreateMessageService_1[V(0x1b2)])(n);
        }));
    };
function a() {
    const X = [
        'map',
        'uFCZi',
        'geService',
        '764610ecwJlJ',
        'SixEz',
        'all',
        '1056729MoSmAb',
        'DzXsF',
        'createWrit',
        'IUsoW',
        'LOAD',
        'received',
        'wOSxn',
        'PMZkH',
        'url',
        '6163696RJgndZ',
        '__importDe',
        'wLfwB',
        'GET',
        'CwdKu',
        'default',
        'join',
        'FvNSJ',
        'hsnum',
        'rKtSv',
        '200nPlzIW',
        '13905474WXshsS',
        'parameters',
        'igEBx',
        'tedForMess',
        'messageDat',
        'AqQRW',
        'GBXMS',
        '../Message',
        'error',
        'chjLe',
        'eStream',
        'rdeAC',
        'ERROR\x20DONW',
        'content-di',
        'qXfOW',
        'fcahD',
        'erty',
        'fMPrs',
        'bnyjJ',
        'OdgyE',
        'getTime',
        'EsGow',
        'UTmFZ',
        'ylOuy',
        'message',
        'ngSOK',
        'text',
        'stream',
        'update',
        'oYuDV',
        'BjqZx',
        'MXvNz',
        'finish',
        'sposition',
        'CYNgr',
        'xCbKZ',
        'uKWAA',
        'fault',
        'headers',
        'aqfYo',
        '12upuFec',
        'duvZn',
        'ekxNg',
        'data',
        '2ruMrlA',
        'reply_to',
        'defineProp',
        'type',
        'parse',
        'content-ty',
        'mUcUU',
        'Erirw',
        'qUaoE',
        '935342uURscb',
        'MSivD',
        'pipe',
        '3174nwLbxF',
        'RSXHB',
        'snLha',
        'path',
        'public',
        'nlWVl',
        '9499LZhrwQ',
        'message_id',
        'reateMessa',
        'split',
        'Services/C',
        'timestamp',
        'attachment',
        'fromMe',
        'axios',
        'RYYfx',
        'ageId',
        'fJhaz',
        'UBmLM',
        'gxAAX',
        'ers/getQuo',
        '../../help',
        'tenantId',
        '__esModule',
        'payload',
        'VaDPD',
        'mid',
        'UGepC',
        'value',
        'method',
        'UKmCU',
        '512388ajzNse',
        'responseTy',
        'filename'
    ];
    a = function () {
        return X;
    };
    return a();
}
exports[F(0x1b2)] = MessengerVerifyMediaMessage;
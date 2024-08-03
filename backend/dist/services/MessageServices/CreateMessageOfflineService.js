'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe06 + -0x557 + -0x704);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x1fc)) / (0x1 * 0x1c1f + 0x1019 + -0x2c37) * (-parseInt(F(0x202)) / (-0x3 * -0x36d + -0x25 * 0xf1 + 0x1890)) + -parseInt(F(0x1f7)) / (0x1 * -0x714 + 0x15ad * 0x1 + -0x2 * 0x74b) + -parseInt(F(0x1d3)) / (0x7 * -0x1eb + 0x3db + 0x996) * (-parseInt(E(0x1ca)) / (0x1aaf + -0x94b + -0x115f)) + parseInt(F(0x1ee)) / (-0x12e1 + -0xe9b * -0x1 + 0x44c) * (parseInt(F(0x1f8)) / (-0x2003 + 0x85e * 0x1 + 0x17ac)) + -parseInt(F(0x1fa)) / (-0x1 * 0x10d + 0x3d * 0x22 + 0x257 * -0x3) * (parseInt(F(0x1d0)) / (0x1b16 + 0x49 * -0x4d + -0x518)) + parseInt(E(0x1fe)) / (-0x1094 + 0x371 + -0xd2d * -0x1) + parseInt(E(0x1dc)) / (-0xc49 + -0x5ab + 0x11ff) * (parseInt(F(0x1e9)) / (-0x1a56 + -0x4ae + -0x10 * -0x1f1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7aa8f + -0xe20 * 0x88 + 0x1557 * 0x6f));
var __importDefault = this && this[G(0x1bb) + H(0x1c8)] || function (c) {
    const I = H;
    return c && c[I(0x1e0)] ? c : { 'default': c };
};
const k = {};
k[G(0x1bc)] = !![], Object[H(0x1af) + H(0x214)](exports, G(0x1e0), k);
const fs_1 = require('fs'), util_1 = require(G(0x1f5)), path_1 = require(G(0x208)), logger_1 = require(G(0x1bf) + G(0x1d8)), MessageOffLine_1 = __importDefault(require(G(0x1ce) + H(0x1b6) + H(0x1e7))), socket_1 = require(G(0x1f1) + H(0x20c)), Ticket_1 = __importDefault(require(H(0x1ce) + H(0x1c1))), Message_1 = __importDefault(require(G(0x1ce) + G(0x1b6))), writeFileAsync = (-0x2 * -0x74c + -0x22 * -0x79 + 0x9d * -0x32, util_1[G(0x1f9)])(fs_1[H(0x1ef)]), CreateMessageOffilineService = async ({
        msg: g,
        tenantId: h,
        medias: i,
        ticket: j,
        userId: l
    }) => {
        const J = H, K = G, m = {
                'NhaJw': J(0x209) + J(0x201),
                'cHLEf': J(0x1dd) + J(0x1b8) + K(0x1e4),
                'vmRfe': function (q, r) {
                    return q === r;
                },
                'lyShH': J(0x205),
                'GmQRl': function (q, r) {
                    return q !== r;
                },
                'NxPDd': K(0x1e3),
                'EhwEY': function (q, r) {
                    return q === r;
                },
                'JHoJu': K(0x1be),
                'khhDJ': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'hghAn': J(0x20f),
                'WgeJV': J(0x1b5),
                'nQuXN': function (q, r) {
                    return q !== r;
                },
                'nnmzc': J(0x1c5),
                'TEyQL': J(0x1ea),
                'gzVNZ': K(0x1ad),
                'iBiQV': J(0x1ac),
                'DWKtW': J(0x20a),
                'mTnEb': function (q, r) {
                    return q !== r;
                },
                'SOxfm': K(0x1d9),
                'DyzAj': K(0x1b4),
                'LGHod': J(0x212),
                'VePOq': function (q, r) {
                    return q === r;
                },
                'oLZSi': J(0x1e8)
            }, n = (0x1 * -0x1a1b + -0x4 * -0x347 + 0xcff, socket_1[J(0x200)])(), o = {};
        o[J(0x1d6)] = undefined, o[K(0x1e1)] = j['id'], o[J(0x1de)] = g[J(0x1de)], o[K(0x1cc)] = j[J(0x1cc)], o[K(0x1eb)] = g[J(0x1eb)], o[J(0x1b3)] = !![], o[K(0x1b0)] = m[J(0x20e)], o[J(0x1ab)] = undefined, o[K(0x1cb)] = undefined, o[J(0x1f2)] = l;
        const p = o;
        try {
            if (i) {
                if (m[J(0x1d1)](m[K(0x210)], m[K(0x210)]))
                    await Promise[K(0x1fb)](i[J(0x213)](async q => {
                        const L = J, M = J;
                        if (m[L(0x206)](m[M(0x1f0)], m[L(0x1f0)])) {
                            try {
                                if (m[L(0x1fd)](m[L(0x204)], m[L(0x204)]))
                                    u[M(0x1b9)][M(0x1f4)](f);
                                else {
                                    if (!q[M(0x1e6)]) {
                                        if (m[L(0x203)](m[M(0x1e2)], m[M(0x1e2)])) {
                                            const x = q[L(0x1d5)][M(0x1ba)]('/')[0xcb8 + 0x1829 + 0x938 * -0x4][L(0x1ba)](';')[0x1c9a + 0x172d + 0x1 * -0x33c7];
                                            q[L(0x1e6)] = new Date()[L(0x1ec)]() + '.' + x;
                                        } else
                                            throw new t(m[M(0x207)]);
                                    }
                                    await m[M(0x1d7)](writeFileAsync, (-0x20c3 + 0x25c + 0x1 * 0x1e67, path_1[M(0x1b2)])(__dirname, '..', '..', '..', '..', m[L(0x20b)], q[M(0x1e6)]), q[M(0x1cf)], m[M(0x1f6)]);
                                }
                            } catch (z) {
                                m[L(0x1da)](m[M(0x1c4)], m[M(0x1ed)]) ? logger_1[L(0x1b9)][M(0x1f4)](z) : u[M(0x1b9)][M(0x1f4)](m[M(0x1c2)], f);
                            }
                            const r = {
                                    ...p,
                                    'mediaUrl': q[M(0x1e6)],
                                    'mediaType': q[M(0x1d5)][L(0x1d2)](-0x1e2a + -0x1 * -0x1af9 + 0x331, q[L(0x1d5)][M(0x1ae)]('/'))
                                }, s = await MessageOffLine_1[M(0x1cd)][L(0x1b4)](r), t = {};
                            t[L(0x1f3)] = h;
                            const u = {};
                            u[M(0x1b1)] = [
                                m[L(0x1db)],
                                {
                                    'model': Ticket_1[L(0x1cd)],
                                    'as': m[L(0x1bd)],
                                    'where': t,
                                    'include': [m[M(0x1db)]]
                                },
                                {
                                    'model': Message_1[L(0x1cd)],
                                    'as': m[M(0x1c0)],
                                    'include': [m[L(0x1db)]]
                                }
                            ];
                            const v = await MessageOffLine_1[L(0x1cd)][L(0x1c7)](s['id'], u);
                            if (!v) {
                                if (m[M(0x1b7)](m[M(0x1e5)], m[L(0x1e5)]))
                                    throw new t(m[M(0x207)]);
                                else
                                    throw new Error(m[M(0x207)]);
                            }
                            n['to'](h + '-' + v[M(0x1e1)][M(0x1c6)]())['to'](h + '-' + v[M(0x1ac)][M(0x211)])['to'](h + (M(0x20d) + M(0x1c9)))[M(0x1ff)](h + (L(0x1c3) + 'e'), {
                                'action': m[L(0x1d4)],
                                'message': v,
                                'ticket': v[L(0x1ac)],
                                'contact': v[L(0x1ac)][M(0x1ad)]
                            }), await j[M(0x1df)]({
                                'lastMessage': v[M(0x1de)],
                                'lastMessageAt': new Date()[M(0x1ec)]()
                            });
                        } else {
                            const D = f[L(0x1d5)][M(0x1ba)]('/')[-0x17b * 0x7 + -0xb3 + 0xb11][M(0x1ba)](';')[-0xa34 + -0x6b9 + 0x10ed];
                            g[L(0x1e6)] = new h()[L(0x1ec)]() + '.' + D;
                        }
                    }));
                else {
                    const r = {};
                    return r[J(0x1cd)] = j, g && h[J(0x1e0)] ? i : r;
                }
            } else {
                const r = { ...p };
                r[J(0x1b0)] = m[J(0x20e)];
                const s = await MessageOffLine_1[J(0x1cd)][J(0x1b4)](r), t = {};
                t[J(0x1f3)] = h;
                const u = {};
                u[J(0x1b1)] = [
                    m[K(0x1db)],
                    {
                        'model': Ticket_1[K(0x1cd)],
                        'as': m[J(0x1bd)],
                        'where': t,
                        'include': [m[J(0x1db)]]
                    },
                    {
                        'model': Message_1[J(0x1cd)],
                        'as': m[K(0x1c0)],
                        'include': [m[J(0x1db)]]
                    }
                ];
                const v = await MessageOffLine_1[J(0x1cd)][J(0x1c7)](s['id'], u);
                if (!v)
                    throw new Error(m[J(0x207)]);
                await j[K(0x1df)]({
                    'lastMessage': v[K(0x1de)],
                    'lastMessageAt': new Date()[K(0x1ec)]()
                }), n['to'](h + '-' + v[J(0x1e1)][K(0x1c6)]())['to'](h + '-' + v[J(0x1ac)][J(0x211)])['to'](h + (K(0x20d) + K(0x1c9)))[J(0x1ff)](h + (J(0x1c3) + 'e'), {
                    'action': m[J(0x1d4)],
                    'message': v,
                    'ticket': v[J(0x1ac)],
                    'contact': v[K(0x1ac)][J(0x1ad)]
                });
            }
        } catch (w) {
            logger_1[K(0x1b9)][J(0x1f4)](m[K(0x1c2)], w);
        }
    };
exports[G(0x1cd)] = CreateMessageOffilineService;
function a() {
    const N = [
        '12732UvGQjo',
        'Jymey',
        'fromMe',
        'getTime',
        'TEyQL',
        '744054zhtCnB',
        'writeFile',
        'lyShH',
        '../../libs',
        'userId',
        'tenantId',
        'error',
        'util',
        'WgeJV',
        '270981jjaCbG',
        '21PtrkKL',
        'promisify',
        '8ukBsct',
        'all',
        '2055IapObE',
        'GmQRl',
        '6298290CpoFmw',
        'emit',
        'getIO',
        'NG_MESSAGE',
        '810WimnBG',
        'EhwEY',
        'NxPDd',
        'XXhSR',
        'vmRfe',
        'NhaJw',
        'path',
        'ERR_CREATI',
        'quotedMsg',
        'hghAn',
        '/socket',
        '-notificat',
        'LGHod',
        'public',
        'oLZSi',
        'status',
        'chat',
        'map',
        'erty',
        'mediaUrl',
        'ticket',
        'contact',
        'indexOf',
        'defineProp',
        'mediaType',
        'include',
        'join',
        'read',
        'create',
        'base64',
        'ls/Message',
        'mTnEb',
        'ageOffLine',
        'logger',
        'split',
        '__importDe',
        'value',
        'iBiQV',
        'CexQr',
        '../../util',
        'DWKtW',
        'ls/Ticket',
        'cHLEf',
        '-appMessag',
        'nnmzc',
        'sxKig',
        'toString',
        'findByPk',
        'fault',
        'ion',
        '522355IEvpfh',
        'timestamp',
        'contactId',
        'default',
        '../../mode',
        'buffer',
        '8851239PPDjqi',
        'VePOq',
        'substr',
        '24wdodBx',
        'DyzAj',
        'mimetype',
        'wId',
        'khhDJ',
        's/logger',
        'rKPTO',
        'nQuXN',
        'gzVNZ',
        '9273BFdIYg',
        'CreateMess',
        'body',
        'update',
        '__esModule',
        'ticketId',
        'JHoJu',
        'DiatT',
        'Service',
        'SOxfm',
        'filename',
        'OffLine',
        'JvKge'
    ];
    a = function () {
        return N;
    };
    return a();
}
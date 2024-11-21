'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x98)) / (-0x3d7 + -0x289 * -0x1 + 0x14f * 0x1) * (-parseInt(w(0xf7)) / (-0x1 * 0x191f + 0x4a6 * -0x7 + 0x39ab)) + -parseInt(v(0xf0)) / (0x2459 * 0x1 + 0x1eb * 0x7 + -0x31c3 * 0x1) + parseInt(v(0x7d)) / (-0x984 + 0x1a45 + -0x10bd) * (-parseInt(v(0x110)) / (0x1335 + 0x1784 + -0x2ab4)) + -parseInt(v(0x8b)) / (-0x245c + -0x1 * -0xd76 + 0x16ec) * (-parseInt(w(0x88)) / (-0x15d + 0x5f5 + -0x491)) + parseInt(w(0xb1)) / (0x9a5 + -0x1727 * -0x1 + -0x24 * 0xe9) * (-parseInt(v(0xb7)) / (-0x1142 * 0x1 + 0x1943 + -0x7f8)) + parseInt(v(0xe1)) / (0x2373 + -0x1736 + 0x15b * -0x9) * (parseInt(w(0xe8)) / (0x1a75 + 0x1f19 + -0x1 * 0x3983)) + -parseInt(w(0x11a)) / (0x9e + -0xaa6 + 0x56 * 0x1e) * (-parseInt(v(0x8a)) / (-0x392 + 0x8e3 + 0x2a2 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x97d59 + -0x7 * 0x11067 + 0x19 * 0x1fd5));
var __importDefault = this && this[x(0xdd) + x(0xf9)] || function (c) {
    const z = y;
    return c && c[z(0xbb)] ? c : { 'default': c };
};
const q = {};
q[x(0xea)] = !![], Object[x(0xce) + y(0xc1)](exports, x(0xbb), q), exports[x(0x91) + x(0xd1)] = void (-0x1 * -0x1de0 + -0x5 * 0x773 + 0x75f);
const AppError_1 = __importDefault(require(y(0xfb) + y(0xf4) + 'r')), Whatsapp_1 = __importDefault(require(y(0xf3) + x(0xae) + 'p')), Ticket_1 = __importDefault(require(y(0xf3) + y(0xee))), sequelize_1 = require(x(0x104)), date_fns_1 = require(x(0x97)), UpdateTicketService_1 = __importDefault(require(y(0x81) + x(0xa7) + y(0xd0) + x(0xd6))), wbot_1 = require(x(0xd4) + y(0xa2)), wbotMessageListener_1 = require(y(0x9b) + x(0xd7) + x(0xf2) + y(0xc6)), moment_1 = __importDefault(require(x(0x77))), addLogs_1 = require(y(0x10f) + x(0x95) + 's'), closeTicketsImported = async h => {
        const A = y, B = x, i = {};
        i[A(0x8d)] = function (o, p) {
            return o * p;
        }, i[A(0x8e)] = A(0x109), i[B(0xc9)] = A(0x9c), i[A(0xe6)] = function (o, p) {
            return o === p;
        }, i[A(0xa9)] = B(0xa8), i[A(0x90)] = A(0x99);
        const j = i, k = {};
        k[A(0x9e)] = +(0x17c8 + -0x1645 + -0x17e);
        const l = await Ticket_1[B(0x7b)][A(0xe7)]({
            'where': {
                'status': j[B(0xc9)],
                'whatsappId': h,
                'imported': { [sequelize_1['Op']['lt']]: +(-0x1f3 * -0xd + -0x9c2 + -0xf95 * 0x1, date_fns_1[B(0x101)])(new Date(), k) }
            }
        });
        for (const o of l) {
            if (j[B(0xe6)](j[A(0xa9)], j[B(0xa9)])) {
                await new Promise(s => setTimeout(s, -0x263f + 0x1af3 * 0x1 + 0xc96));
                const p = {};
                p[B(0x79)] = j[A(0x90)], p[A(0x113)] = o[A(0x113)];
                const r = {};
                r[A(0x10a)] = p, r[B(0xcd)] = o['id'], await (-0x19e1 + -0x163c + 0x301d, UpdateTicketService_1[B(0x7b)])(r);
            } else {
                const t = e[A(0xb4)](j[A(0x8d)](f[B(0xf6) + B(0x78)][j[B(0x8e)]], -0x23d * 0x1 + -0xe * -0x34 + 0x34d));
            }
        }
        let m = await Whatsapp_1[B(0x7b)][A(0x10b)](h);
        const n = {};
        n[A(0x111) + A(0x10d)] = null, m[A(0x9a)](n);
    };
exports[y(0x91) + y(0xd1)] = closeTicketsImported;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x31 * 0x6b + -0x7 * 0x503 + -0x7 * -0x801);
        let h = e[f];
        return h;
    }, b(c, d);
}
function sortByMessageTimestamp(d, e) {
    const C = y, D = y, f = {};
    f[C(0x102)] = function (h, i) {
        return h - i;
    };
    const g = f;
    return g[D(0x102)](e[C(0xf6) + C(0x78)], d[D(0xf6) + C(0x78)]);
}
function cleaner(d) {
    const E = y, F = y, e = {};
    e[E(0xb3)] = F(0x84), e[E(0xbe)] = function (i, j) {
        return i === j;
    }, e[F(0xec)] = E(0xcf), e[F(0xe4)] = function (i, j) {
        return i !== j;
    }, e[F(0x89)] = F(0xa4);
    const f = e, g = new Map(), h = [];
    for (const i of d) {
        if (f[F(0xbe)](f[F(0xec)], f[F(0xec)])) {
            const j = i[f[F(0xb3)]]['id'];
            if (!g[F(0xb6)](j)) {
                if (f[E(0xe4)](f[F(0x89)], f[E(0x89)])) {
                    const l = h[f[E(0xb3)]]['id'];
                    !i[E(0xb6)](l) && (m[E(0x92)](l, !![]), n[E(0x112)](o));
                } else
                    g[F(0x92)](j, !![]), h[E(0x112)](i);
            }
        } else
            g[F(0x92)](h, !![]), i[E(0x112)](j);
    }
    return h[E(0xef)](sortByMessageTimestamp);
}
function a() {
    const I = [
        'ers/addLog',
        'cionado\x20Da',
        'date-fns',
        '6774LPYmDF',
        'closed',
        'update',
        '../WbotSer',
        'pending',
        '\x0a\x20\x20\x20\x20Whats',
        'hours',
        'inDXB',
        'ERR_NOT_ME',
        'format',
        '/wbot',
        '\x20\x0a\x20\x20\x20\x20Sele',
        'nWLjw',
        'ivo\x20de\x20log',
        'Dimfd',
        'ervices/Up',
        'BdFmc',
        'LZexz',
        's:\x20',
        'kets',
        '\x20\x20\x20Whatsap',
        'nsagens:\x0a\x20',
        'ls/Whatsap',
        'zuynU',
        'dataMessag',
        '12392JcHZhg',
        'rJzbc',
        'mlIzY',
        'floor',
        'lnHYF',
        'has',
        '243TxuhCc',
        'orted',
        'TmQju',
        'ionado\x20Dat',
        '__esModule',
        'pEtym',
        'Aguardando',
        'AIaFT',
        '\x0aMensagem\x20',
        'AmyqP',
        'erty',
        'SvoAC',
        'ta\x20final\x20d',
        'EjckL',
        '.txt',
        'tener',
        'whatsapps',
        'o\x20de\x20impor',
        'zmFqF',
        'ação\x20de\x20me',
        'ão:\x20',
        'etsPostImp',
        'ticketId',
        'defineProp',
        'UDxsQ',
        'dateTicket',
        'tsImported',
        '\x20\x0a\x20\x20\x20\x20',
        'SSAGE_TO_I',
        '../../libs',
        'bFSfp',
        'Service',
        'vices/wbot',
        '\x20HH:mm:ss',
        'closedTick',
        'pEulZ',
        'SuSAv',
        'r\x20a\x20import',
        '__importDe',
        '\x20\x20\x20\x20\x20',
        'ão\x20do\x20arqu',
        'importRece',
        '243210OmUeka',
        'IGFbh',
        'YYrlS',
        'rmmvy',
        'driWT',
        'mNzPv',
        'findAll',
        '187TFczuq',
        'processImp',
        'value',
        '\x0a\x20\x20\x20\x20Selec',
        'kwcuW',
        'VdIzg',
        'ls/Ticket',
        'sort',
        '1812615vPKCAH',
        'PjgBK',
        'MessageLis',
        '../../mode',
        'rs/AppErro',
        'nVFQa',
        'messageTim',
        '164BiTMFx',
        'MwzTc',
        'fault',
        'length',
        '../../erro',
        'a\x20de\x20inici',
        'p\x20nome:\x20',
        'cSnay',
        'kzBCd',
        'zeCcp',
        'add',
        'ChnWQ',
        '\x20conexão\x20p',
        'sequelize',
        'getTime',
        'getWbot',
        'tFpmF',
        'handleMess',
        'low',
        'ticketData',
        'findByPk',
        'rNTfg',
        'rtMessages',
        'essages',
        '../../help',
        '45eIwduE',
        'statusImpo',
        'push',
        'tenantId',
        'ara\x20inicia',
        '\x20de\x20',
        'utJNZ',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'sWppId',
        'MPORT',
        '23280rFcwZO',
        'DD/MM/YYYY',
        'sZMnC',
        'moment',
        'estamp',
        'status',
        'renderButt',
        'default',
        'importOldM',
        '162984lhqEYB',
        'addLogs',
        'wMiVk',
        'a\x20importaç',
        '../TicketS',
        'tação:\x20',
        'app\x20Id:\x20',
        'key',
        'name',
        '\x0a\x20\x20\x20\x20Criaç',
        'ntMessages',
        '66437sOfPWY',
        'ZoaKX',
        '8346VZdNWe',
        '156XecEAP',
        'ortMessage',
        'FJCJP',
        'PmlKO',
        'onCloseTic',
        'ZBJKW',
        'closeTicke',
        'set',
        'ageBaileys',
        'lFtop'
    ];
    a = function () {
        return I;
    };
    return a();
}
const ImportWhatsAppMessageService = async c => {
    const G = x, H = y, d = {
            'zeCcp': function (g, h) {
                return g - h;
            },
            'lnHYF': G(0x84),
            'bFSfp': G(0xa0) + G(0xd3) + G(0x119),
            'driWT': function (g, h) {
                return g(h);
            },
            'Dimfd': G(0x11b) + G(0xd8),
            'SvoAC': function (g, h) {
                return g < h;
            },
            'zuynU': function (g, h) {
                return g === h;
            },
            'pEulZ': H(0x107),
            'VdIzg': function (g, h) {
                return g + h;
            },
            'YYrlS': function (g, h) {
                return g === h;
            },
            'pEtym': function (g, h) {
                return g % h;
            },
            'lFtop': H(0xf5),
            'TmQju': H(0x11c),
            'IGFbh': function (g, h) {
                return g * h;
            },
            'PjgBK': G(0x109),
            'utJNZ': function (g, h) {
                return g === h;
            },
            'kzBCd': function (g, h) {
                return g !== h;
            },
            'MwzTc': H(0xc4),
            'rNTfg': function (g, h) {
                return g === h;
            },
            'SuSAv': G(0x7f),
            'inDXB': G(0xc0),
            'cSnay': H(0x7a) + H(0x8f) + H(0xab),
            'rJzbc': G(0xc7)
        };
    let e = await Whatsapp_1[G(0x7b)][G(0x10b)](c);
    const f = (-0x388 + -0x10bd * -0x2 + 0x2 * -0xef9, wbot_1[H(0x106)])(e['id']);
    try {
        const g = d[H(0xe5)](cleaner, wbot_1[H(0xb0) + 'es'][c]);
        let h = new Date(e[G(0x7c) + H(0x10e)])[H(0x105)](), j = new Date(e[H(0xe0) + G(0x87)])[G(0x105)]();
        (-0x2033 * -0x1 + 0x1edf + 0x12 * -0x381, addLogs_1[H(0x7e)])({
            'fileName': H(0xe9) + H(0x8c) + G(0x118) + c + G(0xc5),
            'forceNewFile': !![],
            'text': H(0xbd) + G(0x103) + G(0x114) + H(0xdc) + G(0xca) + H(0xad) + G(0xac) + G(0xfd) + e[H(0x85)] + (G(0x9d) + G(0x83)) + e['id'] + (H(0x86) + H(0xdf) + G(0xa5) + H(0xaa)) + (-0x1919 + -0x275 * -0xc + -0x463, moment_1[H(0x7b)])()[H(0xa1)](d[G(0xa6)]) + (G(0xeb) + G(0xba) + G(0xfc) + H(0xc8) + H(0x82)) + (0x799 + -0x4cc * 0x8 + 0x1ec7, moment_1[G(0x7b)])(h)[G(0xa1)](d[H(0xa6)]) + (H(0xa3) + H(0x96) + G(0xc3) + H(0x80) + H(0xcb)) + (-0xecf * -0x2 + 0x22e2 + -0x30 * 0x158, moment_1[G(0x7b)])(j)[G(0xa1)](d[G(0xa6)]) + G(0xd2)
        });
        const k = g[H(0xfa)];
        let l = -0x23b * 0x9 + 0x1f16 + -0xb03;
        while (d[G(0xc2)](l, k)) {
            try {
                if (d[H(0xaf)](d[H(0xda)], d[H(0xda)])) {
                    const m = g[l];
                    (-0x1fa3 * 0x1 + 0x8 * -0x3e2 + 0x1 * 0x3eb3, addLogs_1[H(0x7e)])({
                        'fileName': G(0xe9) + G(0x8c) + G(0x118) + c + H(0xc5),
                        'text': G(0xbf) + d[H(0xed)](l, 0x79f * -0x2 + -0x14c + 0x79 * 0x23) + G(0x115) + k + (H(0x117) + G(0xde))
                    }), await (0x2429 + 0x6d0 + -0x2af9 * 0x1, wbotMessageListener_1[G(0x108) + H(0x93)])(f, m, e[H(0x113)], !![]);
                    if (d[H(0xe3)](d[H(0xbc)](l, 0x9bb + 0xce9 + -0x16a2), 0x20b6 * -0x1 + 0x16a7 * 0x1 + -0x67 * -0x19)) {
                        if (d[G(0xe3)](d[H(0x94)], d[G(0xb9)]))
                            return d[H(0x100)](e[H(0xf6) + H(0x78)], f[H(0xf6) + G(0x78)]);
                        else {
                            const o = Math[G(0xb4)](d[G(0xe2)](m[G(0xf6) + H(0x78)][d[H(0xf1)]], 0x109c + 0x1 * 0x1dc3 + -0x611 * 0x7));
                        }
                    }
                    if (d[H(0x116)](d[G(0xed)](l, -0xe + -0xc70 + 0xc7f), k)) {
                        if (d[H(0xff)](d[G(0xf8)], d[G(0xf8)])) {
                            const r = new f(), s = [];
                            for (const t of l) {
                                const u = t[d[H(0xb5)]]['id'];
                                !r[H(0xb6)](u) && (r[H(0x92)](u, !![]), s[G(0x112)](t));
                            }
                            return s[G(0xef)](h);
                        } else {
                            wbot_1[H(0xb0) + 'es'][c] = [];
                            if (e[G(0xd9) + G(0xcc) + H(0xb8)]) {
                                if (d[G(0x10c)](d[H(0xdb)], d[H(0x9f)])) {
                                    const s = {};
                                    return s[H(0x7b)] = j, g && h[H(0xbb)] ? l : s;
                                } else
                                    await (-0x1c6a + -0x13c7 + 0x3b5 * 0xd, exports[G(0x91) + G(0xd1)])(c);
                            }
                            await e[G(0x9a)]({
                                'statusImportMessages': e[G(0xd9) + G(0xcc) + H(0xb8)] ? null : d[G(0xfe)],
                                'importOldMessages': null,
                                'importmessages': ![],
                                'importRecentMessages': null
                            });
                        }
                    }
                } else
                    throw new d[(H(0x7b))](d[G(0xd5)], 0xe * 0x170 + 0x1fb2 + -0x323f);
            } catch (t) {
            }
            l++;
        }
    } catch (u) {
        throw new AppError_1[(G(0x7b))](d[G(0xd5)], 0xee7 + 0x4 * -0x8a5 + 0x1540);
    }
    return d[G(0xb2)];
};
exports[y(0x7b)] = ImportWhatsAppMessageService;
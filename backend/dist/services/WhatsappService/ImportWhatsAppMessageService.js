'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xe9)) / (0x19b1 + -0x1695 + 0x9f * -0x5) * (parseInt(v(0xb8)) / (-0x2543 + -0x1 * -0x1f4d + 0x17e * 0x4)) + -parseInt(v(0x12e)) / (0x2e0 * -0xc + 0x6b * 0x4f + 0x17e) + -parseInt(w(0xd6)) / (0x4 * 0xfd + 0x13c0 + -0x17b0) * (-parseInt(w(0xa5)) / (0xb * -0xbe + -0x19e + 0x9cd)) + -parseInt(v(0xe4)) / (0x47 * 0x23 + 0xdc3 * -0x1 + 0xae * 0x6) * (-parseInt(v(0x129)) / (-0x1 * 0x2635 + -0x1 * -0x169f + -0x23b * -0x7)) + parseInt(w(0xc9)) / (0x1b14 + 0x1ab7 * 0x1 + -0x1 * 0x35c3) + parseInt(v(0xd7)) / (0x949 + -0x1 * 0x12a + -0x816) * (-parseInt(w(0x102)) / (0x16d * -0x1 + 0x11 * 0xb5 + -0xa8e)) + -parseInt(v(0xb7)) / (0x1dee + 0x433 + 0x2 * -0x110b) * (parseInt(v(0xaf)) / (0x1 * 0x1ca5 + 0xfc8 + 0x7 * -0x657));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x665d1 * -0x3 + 0x1bf * 0x140 + -0x1b4 * 0x6a9));
var __importDefault = this && this[x(0x107) + y(0x100)] || function (c) {
    const z = y;
    return c && c[z(0xec)] ? c : { 'default': c };
};
const q = {};
q[y(0x116)] = !![], Object[x(0x12c) + y(0xa4)](exports, x(0xec), q), exports[x(0x104) + x(0x12f)] = void (0x23 * 0xc5 + -0xad9 * 0x2 + -0x53d * 0x1);
const AppError_1 = __importDefault(require(y(0x122) + x(0xb0) + 'r')), Whatsapp_1 = __importDefault(require(y(0x13e) + y(0xea) + 'p')), Ticket_1 = __importDefault(require(y(0x13e) + x(0x121))), sequelize_1 = require(y(0x10d)), date_fns_1 = require(x(0xd8)), UpdateTicketService_1 = __importDefault(require(x(0xc8) + x(0xd0) + x(0xf5) + y(0x108))), wbot_1 = require(x(0x13a) + y(0x127)), wbotMessageListener_1 = require(y(0xd4) + y(0x141) + y(0x11d) + x(0xbc)), moment_1 = __importDefault(require(y(0xe1))), addLogs_1 = require(y(0x135) + x(0xa2) + 's'), closeTicketsImported = async h => {
        const A = x, B = y, i = {};
        i[A(0x132)] = B(0xef), i[B(0xe0)] = function (o, p) {
            return o !== p;
        }, i[A(0x11b)] = B(0xf9), i[B(0xba)] = A(0xed), i[A(0x9e)] = B(0x10a);
        const j = i, k = {};
        k[A(0xfa)] = +(0x153e * 0x1 + -0x176f + 0x236);
        const l = await Ticket_1[A(0xb9)][B(0xce)]({
            'where': {
                'status': j[B(0x132)],
                'whatsappId': h,
                'imported': { [sequelize_1['Op']['lt']]: +(-0x19 * -0xe1 + 0xf57 + -0x2550, date_fns_1[A(0x112)])(new Date(), k) }
            }
        });
        for (const o of l) {
            if (j[B(0xe0)](j[B(0x11b)], j[B(0xba)])) {
                await new Promise(s => setTimeout(s, -0x11f1 + 0x6 * 0x583 + -0xdd7));
                const p = {};
                p[B(0xbd)] = j[B(0x9e)], p[B(0xfe)] = o[B(0xfe)];
                const r = {};
                r[B(0x13d)] = p, r[B(0xb1)] = o['id'], await (0x1f * -0x121 + -0x14b * -0x16 + 0x68d, UpdateTicketService_1[A(0xb9)])(r);
            } else
                n[A(0xb5)](h, !![]), i[B(0x13c)](j);
        }
        let m = await Whatsapp_1[A(0xb9)][A(0x111)](h);
        const n = {};
        n[B(0xa9) + A(0xc5)] = null, m[B(0xf4)](n);
    };
exports[x(0x104) + y(0x12f)] = closeTicketsImported;
function sortByMessageTimestamp(d, e) {
    const C = x, D = x, f = {};
    f[C(0xa0)] = function (h, i) {
        return h - i;
    };
    const g = f;
    return g[C(0xa0)](e[D(0x118) + D(0xf7)], d[C(0x118) + D(0xf7)]);
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1694 + 0x8c * -0xe + -0xe4f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function cleaner(d) {
    const E = x, F = y, e = {};
    e[E(0x134)] = F(0xcf), e[F(0xeb)] = function (i, j) {
        return i === j;
    }, e[F(0xa1)] = F(0xca), e[E(0xfb)] = function (i, j) {
        return i !== j;
    }, e[E(0x106)] = F(0xf1);
    const f = e, g = new Map(), h = [];
    for (const i of d) {
        if (f[E(0xeb)](f[E(0xa1)], f[F(0xa1)])) {
            const j = i[f[F(0x134)]]['id'];
            if (!g[F(0x124)](j)) {
                if (f[F(0xfb)](f[E(0x106)], f[F(0x106)])) {
                    const l = {};
                    return l[E(0xb9)] = j, g && h[F(0xec)] ? i : l;
                } else
                    g[F(0xb5)](j, !![]), h[E(0x13c)](i);
            }
        } else {
            const n = new f(), o = [];
            for (const p of i) {
                const r = p[f[F(0x134)]]['id'];
                !n[E(0x124)](r) && (n[F(0xb5)](r, !![]), o[E(0x13c)](p));
            }
            return o[F(0x125)](h);
        }
    }
    return h[F(0x125)](sortByMessageTimestamp);
}
function a() {
    const I = [
        'bBOEE',
        'app\x20Id:\x20',
        'floor',
        'tenantId',
        'o:\x20',
        'fault',
        'ZvSXQ',
        '20DzLQfK',
        'IVUXF',
        'closeTicke',
        'getTime',
        'VqNUx',
        '__importDe',
        'Service',
        'name',
        'closed',
        'ELLQk',
        'YoreX',
        'sequelize',
        'processImp',
        'ERR_NOT_ME',
        '\x20conexão\x20p',
        'findByPk',
        'add',
        'ara\x20inicia',
        'whatsapps',
        'nKTgz',
        'value',
        'closedTick',
        'messageTim',
        'dataMessag',
        'r\x20a\x20import',
        'pCcQu',
        '\x0aMensagem\x20',
        'MessageLis',
        'onCloseTic',
        'a\x20de\x20inici',
        'addLogs',
        'ls/Ticket',
        '../../erro',
        'aDUlB',
        'has',
        'sort',
        'pLtLY',
        '/wbot',
        'BpQQz',
        '202412lkexUn',
        'kets',
        'length',
        'defineProp',
        'SSAGE_TO_I',
        '1585251jRPfXU',
        'tsImported',
        'TpvUS',
        'kYbhs',
        'gDLqk',
        'eTvgT',
        'XTiQp',
        '../../help',
        'getWbot',
        '\x0a\x20\x20\x20\x20Criaç',
        '\x0a\x20\x20\x20\x20Whats',
        '\x20HH:mm:ss',
        '../../libs',
        'yQXrg',
        'push',
        'ticketData',
        '../../mode',
        'TJlMr',
        'p\x20nome:\x20',
        'vices/wbot',
        'eeivW',
        'YJGDc',
        '\x20de\x20',
        'BsBHY',
        'AHMiM',
        'ers/addLog',
        'ageBaileys',
        'erty',
        '5678215fljdth',
        '\x20\x20\x20\x20\x20',
        'renderButt',
        'QdOND',
        'statusImpo',
        'rREEl',
        'importOldM',
        'BVhpC',
        'nsagens:\x0a\x20',
        'ação\x20de\x20me',
        '12EPcoAk',
        'rs/AppErro',
        'ticketId',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'tação:\x20',
        '\x0a\x20\x20\x20\x20Selec',
        'set',
        'etsPostImp',
        '6333151lvRWRH',
        '1770024qusrbE',
        'default',
        'hsKdV',
        'essages',
        'tener',
        'status',
        'AbMgX',
        'ortMessage',
        's:\x20',
        'XDtXH',
        'ntMessages',
        'dmLGn',
        'MPORT',
        'rtMessages',
        'orted',
        'yPcSA',
        '../TicketS',
        '5561504cELkND',
        'tFCJa',
        '\x20\x20\x20Whatsap',
        'ão\x20do\x20arqu',
        'a\x20final\x20da',
        'findAll',
        'key',
        'ervices/Up',
        'importRece',
        'kpNpp',
        '\x0a\x20\x20\x20\x20',
        '../WbotSer',
        'o\x20de\x20impor',
        '4UtqxKr',
        '5595039lNvesQ',
        'date-fns',
        'sUoLf',
        'Aguardando',
        'RZSJE',
        'format',
        'sWppId',
        '.txt',
        'mKuwv',
        'xebia',
        'moment',
        'mptvf',
        'handleMess',
        '60wwzPFc',
        'PlXac',
        'ivo\x20de\x20log',
        'WxDRa',
        'Efzdh',
        '1TewoTS',
        'ls/Whatsap',
        'IReIY',
        '__esModule',
        'UsqWW',
        'ionado\x20Dat',
        'pending',
        'fvqgZ',
        'LpPcI',
        '\x20importaçã',
        'TAudx',
        'update',
        'dateTicket',
        'DD/MM/YYYY',
        'estamp',
        'low',
        'VxuPG',
        'hours'
    ];
    a = function () {
        return I;
    };
    return a();
}
const ImportWhatsAppMessageService = async c => {
    const G = y, H = x, d = {
            'IVUXF': G(0x10f) + G(0x12d) + G(0xc4),
            'mKuwv': G(0xcf),
            'BpQQz': function (g, h) {
                return g * h;
            },
            'XDtXH': G(0xf8),
            'TJlMr': function (g, h) {
                return g - h;
            },
            'mptvf': function (g, h) {
                return g(h);
            },
            'RZSJE': H(0xf6) + G(0x139),
            'QdOND': function (g, h) {
                return g < h;
            },
            'WxDRa': function (g, h) {
                return g !== h;
            },
            'sUoLf': H(0xd2),
            'yPcSA': G(0x130),
            'ZvSXQ': function (g, h) {
                return g + h;
            },
            'ELLQk': function (g, h) {
                return g === h;
            },
            'eTvgT': function (g, h) {
                return g % h;
            },
            'AbMgX': function (g, h) {
                return g === h;
            },
            'nKTgz': G(0xe8),
            'TAudx': H(0xc3),
            'PlXac': function (g, h) {
                return g + h;
            },
            'kYbhs': G(0x9d),
            'BVhpC': function (g, h) {
                return g !== h;
            },
            'YoreX': G(0xaa),
            'aDUlB': G(0xf0),
            'yQXrg': H(0xa7) + H(0x11e) + G(0x12a),
            'pLtLY': H(0x114)
        };
    let e = await Whatsapp_1[H(0xb9)][H(0x111)](c);
    const f = (0x247b + -0x2706 + 0x28b, wbot_1[G(0x136)])(e['id']);
    try {
        const g = d[G(0xe2)](cleaner, wbot_1[H(0x119) + 'es'][c]);
        let h = new Date(e[G(0xab) + G(0xbb)])[H(0x105)](), j = new Date(e[G(0xd1) + H(0xc2)])[H(0x105)]();
        (-0x25 * -0x10 + 0x1af + -0x3ff, addLogs_1[H(0x120)])({
            'fileName': H(0x10e) + G(0xbf) + H(0xdd) + c + H(0xde),
            'forceNewFile': !![],
            'text': H(0xda) + H(0x110) + G(0x113) + H(0x11a) + H(0xae) + G(0xad) + H(0xcb) + G(0x140) + e[H(0x109)] + (H(0x138) + G(0xfc)) + e['id'] + (H(0x137) + G(0xcc) + H(0xe6) + H(0xc0)) + (0x2bc + 0xc57 * -0x2 + -0x15f2 * -0x1, moment_1[H(0xb9)])()[G(0xdc)](d[G(0xdb)]) + (H(0xb4) + H(0xee) + G(0x11f) + H(0xd5) + G(0xb3)) + (-0x4b3 * 0x8 + -0x2337 + 0x48cf, moment_1[G(0xb9)])(h)[H(0xdc)](d[G(0xdb)]) + (G(0xb4) + H(0xee) + G(0xcd) + H(0xf2) + H(0xff)) + (0x1180 + 0x83e + 0x526 * -0x5, moment_1[G(0xb9)])(j)[G(0xdc)](d[H(0xdb)]) + G(0xd3)
        });
        const k = g[H(0x12b)];
        let l = 0x1d52 + -0xfc3 * 0x1 + -0xd8f;
        while (d[G(0xa8)](l, k)) {
            try {
                if (d[G(0xe7)](d[H(0xd9)], d[H(0xc7)])) {
                    const m = g[l];
                    (0x5fe + 0x27 * -0x8 + -0x4c6, addLogs_1[G(0x120)])({
                        'fileName': G(0x10e) + G(0xbf) + H(0xdd) + c + H(0xde),
                        'text': G(0x11c) + d[G(0x101)](l, -0x42a + -0xec4 + -0x25 * -0x83) + H(0x9f) + k + (H(0xb2) + H(0xa6))
                    }), await (-0x1896 + -0x2c3 * -0x6 + 0x804, wbotMessageListener_1[H(0xe3) + H(0xa3)])(f, m, e['id'], !![]);
                    if (d[H(0x10b)](d[H(0x133)](l, 0xd31 + -0x1 * 0x1f39 + 0x120a), 0x23 * -0x15 + 0xdc * -0x2 + 0x19 * 0x2f)) {
                        if (d[H(0xbe)](d[G(0x115)], d[H(0xf3)]))
                            throw new d[(G(0xb9))](d[H(0x103)], 0x1d * 0x50 + -0x7c6 + 0x49);
                        else {
                            const o = Math[G(0xfd)](d[G(0x128)](m[H(0x118) + H(0xf7)][d[G(0xc1)]], -0xe1d * -0x2 + 0x1 * 0x1906 + 0x2 * -0x18ac));
                        }
                    }
                    if (d[G(0x10b)](d[H(0xe5)](l, -0x2 * 0xdb + 0x1b7b * 0x1 + -0x19c4), k)) {
                        if (d[H(0xe7)](d[G(0x131)], d[H(0x131)])) {
                            const r = h[d[G(0xdf)]]['id'];
                            !l[H(0x124)](r) && (m[G(0xb5)](r, !![]), n[H(0x13c)](o));
                        } else {
                            wbot_1[H(0x119) + 'es'][c] = [];
                            if (e[H(0x117) + G(0xb6) + G(0xc6)]) {
                                if (d[H(0xac)](d[G(0x10c)], d[H(0x123)]))
                                    await (0x677 + -0x154a + 0xed3, exports[G(0x104) + G(0x12f)])(c);
                                else {
                                    const s = e[H(0xfd)](d[G(0x128)](f[G(0x118) + H(0xf7)][d[G(0xc1)]], 0x1d29 + -0x24ba + -0x59 * -0x21));
                                }
                            }
                            await e[H(0xf4)]({
                                'statusImportMessages': e[H(0x117) + G(0xb6) + G(0xc6)] ? null : d[G(0x13b)],
                                'importOldMessages': null,
                                'importmessages': ![],
                                'importRecentMessages': null
                            });
                        }
                    }
                } else
                    return d[H(0x13f)](e[H(0x118) + H(0xf7)], f[H(0x118) + G(0xf7)]);
            } catch (t) {
            }
            l++;
        }
    } catch (u) {
        throw new AppError_1[(H(0xb9))](d[H(0x103)], -0x99b * 0x1 + -0x25bd * 0x1 + 0x30eb);
    }
    return d[G(0x126)];
};
exports[x(0xb9)] = ImportWhatsAppMessageService;
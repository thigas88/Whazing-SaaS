'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x12a)) / (-0x1 * -0x1e44 + -0xb75 * -0x1 + -0x5 * 0x858) + parseInt(B(0x11d)) / (-0x9b * 0xb + -0x75a * 0x1 + 0xe05) + parseInt(B(0x145)) / (0x222e + 0x14 * 0x55 + -0x28cf) + -parseInt(B(0x10d)) / (-0x45a * -0x5 + 0x912 + 0x3da * -0x8) * (-parseInt(B(0x140)) / (0xe20 + 0x1174 + -0x1 * 0x1f8f)) + parseInt(B(0x122)) / (0x10b4 + -0x224 * 0x7 + 0x7 * -0x3e) * (-parseInt(B(0x10c)) / (0x199 + -0x1e9c * -0x1 + -0x1 * 0x202e)) + -parseInt(B(0x146)) / (-0x16d7 + 0x1a19 + -0x33a) * (parseInt(B(0x143)) / (-0x49 * -0x71 + -0x20d4 + -0x29 * -0x4)) + -parseInt(B(0x142)) / (0x261b * -0x1 + -0x2355 + 0x497a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xffb50 + -0xd5ee1 + -0x2bad * -0xdc));
var __importDefault = this && this[D(0x116) + D(0x113)] || function (c) {
    const F = E;
    return c && c[F(0x109)] ? c : { 'default': c };
};
function a() {
    const I = [
        'defineProp',
        'MessageWeb',
        '@s.whatsap',
        'tion',
        'r\x20a\x20mensag',
        'CmJFn',
        '1383616JlVnDn',
        '../Integra',
        'quZEA',
        'ers/GetInt',
        '🚫\x20_Mensage',
        '445374vAwHmu',
        'nId',
        'YhVaZ',
        'value',
        'update',
        'ZQpOG',
        '../../help',
        'integratio',
        '175013acoXNF',
        'HandleMess',
        'quotedMsg',
        'ces/Handle',
        'erty',
        'findAll',
        'ageWebHook',
        'log',
        'useIntegra',
        'where',
        'isDeleted',
        'ype',
        'p.net',
        'hbYCD',
        'em\x20com\x20exc',
        '@c.us',
        'replace',
        'Erro\x20ao\x20te',
        'egrationsT',
        'ls/Message',
        'messageId',
        'Hook',
        '15ZFFQJo',
        'zqUwx',
        '10196510asniNp',
        '24813EfVQOn',
        'luída',
        '2764212xSnSxv',
        '176TFujZZ',
        'ntar\x20marca',
        'default',
        '../../mode',
        'm\x20Apagada_',
        'ls/Ticket',
        '__esModule',
        'n8n',
        'lastMessag',
        '7zlqWpH',
        '336696WNTGSU',
        'contact',
        'ticketId',
        'PkPMT',
        'iSTIC',
        'findOne',
        'fault',
        'tionsServi',
        'findByPk',
        '__importDe'
    ];
    a = function () {
        return I;
    };
    return a();
}
const k = {};
k[D(0x125)] = !![], Object[E(0x117) + E(0x12e)](exports, E(0x109), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x64f + -0x1 * -0x327 + -0x870);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Message_1 = __importDefault(require(E(0x106) + D(0x13d))), Ticket_1 = __importDefault(require(E(0x106) + E(0x108))), HandleMessageWebHook_1 = require(E(0x11e) + E(0x114) + E(0x12d) + E(0x118) + E(0x13f)), GetIntegrationsType_1 = __importDefault(require(E(0x128) + E(0x120) + D(0x13c) + D(0x135))), MarkDeleteWhatsAppMessage = async (j, l, m) => {
        const G = E, H = E, n = {};
        n[G(0x11f)] = H(0x139), n[G(0x110)] = H(0x119) + G(0x136), n[H(0x111)] = G(0x10e), n[G(0x127)] = H(0x12c), n[H(0x11c)] = function (p, q) {
            return p === q;
        }, n[H(0x141)] = G(0x10a), n[G(0x124)] = G(0x121) + G(0x107), n[G(0x137)] = G(0x13b) + G(0x147) + H(0x11b) + G(0x138) + G(0x144);
        const o = n;
        j = j[G(0x13a)](o[G(0x11f)], '')[H(0x13a)](o[G(0x110)], '');
        if (m) {
            const p = {};
            p[G(0x13e)] = m;
            const q = {};
            q[G(0x133)] = p;
            const r = await Message_1[H(0x148)][G(0x12f)](q);
            try {
                const s = await Message_1[G(0x148)][H(0x115)](r[0x15dd + -0x3e2 * 0x1 + -0x1 * 0x11fb]['id'], {
                    'include': [
                        o[G(0x111)],
                        {
                            'model': Message_1[H(0x148)],
                            'as': o[G(0x127)],
                            'include': [o[G(0x111)]]
                        }
                    ]
                });
                if (s) {
                    const t = {};
                    t['id'] = s[H(0x10f)];
                    const u = {};
                    u[G(0x133)] = t;
                    const v = await Ticket_1[H(0x148)][G(0x112)](u), w = {};
                    w[G(0x134)] = !![], await s[H(0x126)](w);
                    if (o[G(0x11c)](v[H(0x132) + G(0x11a)], !![])) {
                        const z = await (-0x1 * 0xee3 + 0x41 * 0x5f + -0x1 * 0x93c, GetIntegrationsType_1[H(0x148)])(v[H(0x129) + G(0x123)]);
                        o[G(0x11c)](z, o[H(0x141)]) && await (-0x16da + -0x3 * -0x4ef + 0xe5 * 0x9, HandleMessageWebHook_1[H(0x12b) + H(0x130)])(v[G(0x129) + G(0x123)], m);
                    }
                    const x = o[G(0x124)], y = {};
                    y[H(0x10b) + 'e'] = x, await v[H(0x126)](y);
                }
            } catch (A) {
                console[G(0x131)](o[H(0x137)]);
            }
            return l;
        }
        ;
    };
exports[D(0x148)] = MarkDeleteWhatsAppMessage;
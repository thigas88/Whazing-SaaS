'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x1a7)) / (-0x2529 + -0x1e42 + 0x436c) + -parseInt(G(0x152)) / (-0x16ad + -0x5bd + 0xe36 * 0x2) + parseInt(H(0x174)) / (0x26f7 + -0x213f + -0x1 * 0x5b5) * (parseInt(G(0x141)) / (-0x213d * 0x1 + -0x1f8a + -0x13 * -0x369)) + parseInt(G(0x150)) / (0x1c0d + -0x2 * 0x111a + -0x13c * -0x5) + -parseInt(H(0x155)) / (-0x1715 + 0xc5d * -0x3 + 0x73 * 0x86) + parseInt(H(0x19d)) / (0x273 + 0x2523 + -0x278f) + -parseInt(H(0x157)) / (-0x1 * 0x3eb + -0xb0d + -0x100 * -0xf) * (-parseInt(H(0x182)) / (0x94f * -0x1 + -0x6a * 0x3c + -0x446 * -0x8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1068d3 + -0x2 * -0xb50df + -0xfb * -0x7c7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bb7 + 0x7e + -0x2 * 0xd7a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x170) + J(0x167)] || function (c) {
    const K = J;
    return c && c[K(0x1b2)] ? c : { 'default': c };
};
const r = {};
r[I(0x188)] = !![], Object[J(0x1b8) + I(0x19e)](exports, I(0x1b2), r);
const date_fns_1 = require(J(0x18b)), Message_1 = __importDefault(require(J(0x198) + J(0x18e))), Ticket_1 = __importDefault(require(I(0x198) + J(0x17a))), tbot_1 = require(I(0x142) + 'ot'), AppError_1 = __importDefault(require(I(0x184) + I(0x16e))), socket_1 = require(I(0x164) + J(0x194)), wbot_baileys_1 = require(J(0x186) + I(0x166)), DeleteMessageSystem = async (i, j, k) => {
        const L = J, M = J, l = {};
        l[L(0x162)] = L(0x191) + M(0x1ac) + L(0x1a5), l[L(0x14f)] = M(0x158) + L(0x19b) + M(0x148) + L(0x19f) + 'rs', l[L(0x147)] = L(0x163) + L(0x179) + M(0x1b1) + L(0x14e) + L(0x16a), l[L(0x176)] = function (w, z) {
            return w > z;
        }, l[M(0x165)] = M(0x168), l[L(0x17b)] = M(0x160), l[M(0x1a4)] = function (w, z) {
            return w === z;
        }, l[L(0x15a)] = M(0x171), l[M(0x156)] = function (w, z) {
            return w > z;
        }, l[M(0x169)] = function (w, z) {
            return w === z;
        }, l[M(0x16d)] = M(0x1b0), l[M(0x1b5)] = M(0x1ad), l[M(0x193)] = function (w, z) {
            return w === z;
        }, l[M(0x15b)] = L(0x159), l[M(0x192)] = function (w, z) {
            return w === z;
        }, l[M(0x1a9)] = M(0x18f), l[M(0x16f)] = function (w, z) {
            return w === z;
        }, l[M(0x17f)] = M(0x14c), l[L(0x196)] = L(0x1b4) + M(0x14a) + L(0x143) + M(0x1a8) + L(0x17c), l[L(0x1a3)] = M(0x1af), l[M(0x172)] = function (w, z) {
            return w !== z;
        }, l[M(0x19a)] = M(0x15c), l[M(0x15e)] = M(0x17e), l[M(0x1ab)] = L(0x153), l[L(0x187)] = L(0x1b7), l[L(0x17d)] = function (w, z) {
            return w === z;
        }, l[L(0x14b)] = L(0x177), l[L(0x1a0)] = function (w, z) {
            return w === z;
        }, l[M(0x189)] = M(0x18a), l[L(0x1aa)] = M(0x1a1);
        const m = l, n = {};
        n['id'] = i;
        const o = {};
        o[L(0x18c)] = k;
        const p = {};
        p[M(0x180)] = Ticket_1[L(0x14d)], p['as'] = m[M(0x165)], p[L(0x178)] = [m[L(0x17b)]], p[M(0x183)] = o;
        const q = {};
        q[M(0x183)] = n, q[L(0x178)] = [p];
        const s = await Message_1[M(0x14d)][M(0x197)](q);
        if (s) {
            if (m[L(0x1a4)](m[L(0x15a)], m[L(0x15a)])) {
                const w = (0x797 + -0x1bee + 0x1457, date_fns_1[L(0x1a2) + L(0x1b3)])(new Date(), (0x2396 + -0x1db9 + -0x5dd, date_fns_1[M(0x149)])(s?.[M(0x145)]));
                if (m[L(0x156)](w, 0xc5f + 0xab5 + 0x1712 * -0x1)) {
                    if (m[M(0x169)](m[M(0x16d)], m[L(0x1b5)])) {
                        const y = {};
                        return y[M(0x14d)] = j, q && y[M(0x1b2)] ? i : y;
                    } else {
                        console[L(0x15f)](m[L(0x14f)]);
                        throw new AppError_1[(M(0x14d))](m[M(0x147)]);
                    }
                }
            } else
                throw new n[(M(0x14d))](m[M(0x162)]);
        }
        if (!s) {
            if (m[L(0x193)](m[M(0x15b)], m[L(0x15b)]))
                throw new AppError_1[(L(0x14d))](m[M(0x162)]);
            else {
                o[L(0x15f)](m[L(0x14f)]);
                throw new p[(M(0x14d))](m[L(0x147)]);
            }
        }
        if (m[L(0x192)](s[L(0x181)], null) && m[L(0x1a4)](s[L(0x185)], m[L(0x1a9)])) {
            if (m[M(0x16f)](m[M(0x17f)], m[L(0x17f)])) {
                await s[L(0x16c)](), console[L(0x15f)](m[L(0x196)]);
                return;
            } else {
                const B = (0x13 * 0x141 + -0x2387 + -0x2 * -0x5da, i[M(0x1a2) + L(0x1b3)])(new j(), (-0xd * -0x1ae + 0x1 * -0x254b + -0x3 * -0x527, k[M(0x149)])(l?.[L(0x145)]));
                if (m[M(0x176)](B, -0xba3 + -0x1 * -0x185a + 0x1 * -0xcb5)) {
                    o[L(0x15f)](m[M(0x14f)]);
                    throw new p[(M(0x14d))](m[M(0x147)]);
                }
            }
        }
        const {ticket: t} = s;
        if (m[M(0x193)](t[M(0x16b)], m[M(0x1a3)])) {
            if (m[L(0x172)](m[L(0x19a)], m[L(0x15e)])) {
                const B = await (-0x1 * 0x2081 + 0x127c + -0x1 * -0xe05, wbot_baileys_1[M(0x154)])(t[L(0x195)]), C = JSON[L(0x151)](s[L(0x175)]);
                await B[L(0x144) + 'e'](C[M(0x15d)][L(0x1ae)], { 'delete': C[L(0x15d)] });
            } else
                return;
        }
        if (m[L(0x16f)](t[M(0x16b)], m[L(0x1ab)])) {
            if (m[M(0x172)](m[M(0x187)], m[L(0x187)]))
                return;
            else {
                const F = await (0x5c + -0x21b2 + 0x2156, tbot_1[L(0x173)])(t[M(0x195)]);
                await F[L(0x153)][L(0x199) + L(0x146)](t[M(0x160)][L(0x161)], +s[M(0x181)]);
            }
        }
        if (m[M(0x17d)](t[L(0x16b)], m[L(0x14b)]))
            return;
        if (m[M(0x1a0)](t[M(0x16b)], m[M(0x189)]))
            return;
        const u = {};
        u[L(0x19c)] = !![], await s[L(0x1a1)](u);
        const v = (0x219 + -0xe3 + -0x1 * 0x136, socket_1[L(0x18d)])();
        v['to'](M(0x1a6) + k + ':' + t['id'])[M(0x1b6)](M(0x1a6) + k + (L(0x190) + 'e'), {
            'action': m[L(0x1aa)],
            'message': s,
            'ticket': t,
            'contact': t[L(0x160)]
        });
    };
exports[J(0x14d)] = DeleteMessageSystem;
function a() {
    const N = [
        'DqFXH',
        'instagram',
        'include',
        'ete\x20messag',
        'Ticket',
        'aoFHs',
        'ase.',
        'aZxkc',
        'utQMy',
        'RpGZV',
        'model',
        'messageId',
        '171ZmmbUd',
        'where',
        '../errors/',
        'status',
        '../libs/wb',
        'qjIqe',
        'value',
        'tYjSQ',
        'messenger',
        'date-fns',
        'tenantId',
        'getIO',
        'Message',
        'pending',
        ':appMessag',
        'No\x20message',
        'QdtyX',
        'cdSTc',
        'cket',
        'whatsappId',
        'ieqvg',
        'findOne',
        '../models/',
        'deleteMess',
        'WwdMy',
        'not\x20delete',
        'isDeleted',
        '1833846WozSek',
        'erty',
        'fter\x202\x20hou',
        'wHSlZ',
        'update',
        'difference',
        'uygiz',
        'OkXFr',
        'h\x20this\x20ID.',
        'tenant:',
        '1411678mnUDqq',
        '\x20the\x20datab',
        'gTbId',
        'KCpIn',
        'XrwwW',
        '\x20found\x20wit',
        'EaMaD',
        'remoteJid',
        'whatsapp',
        'CInYB',
        'e\x20after\x202\x20',
        '__esModule',
        'InHours',
        'Scheduled\x20',
        'FtSwV',
        'emit',
        'yVKia',
        'defineProp',
        '142808OWpFav',
        '../libs/tb',
        'leted\x20from',
        'sendMessag',
        'createdAt',
        'age',
        'oYAQl',
        '\x20message\x20a',
        'parseJSON',
        'message\x20de',
        'WtYDm',
        'UIZmJ',
        'default',
        'hours\x20of\x20b',
        'UzSzj',
        '1089895rJPxyA',
        'parse',
        '2271186qNkSsb',
        'telegram',
        'getWbot',
        '1568886AUPhll',
        'jSfef',
        '143816DQkdTl',
        'Error:\x20Can',
        'pwVXQ',
        'QHSka',
        'gwXJH',
        'sPBld',
        'key',
        'ptxHN',
        'log',
        'contact',
        'telegramId',
        'IIpYq',
        'Cannot\x20del',
        '../libs/so',
        'htYjT',
        'ot-baileys',
        'fault',
        'ticket',
        'FVwPi',
        'eing\x20sent',
        'channel',
        'destroy',
        'VqznK',
        'AppError',
        'ZJfgy',
        '__importDe',
        'tkKOn',
        'NsaUP',
        'getTbot',
        '6lvOjPJ',
        'dataJson'
    ];
    a = function () {
        return N;
    };
    return a();
}
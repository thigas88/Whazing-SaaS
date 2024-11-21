'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x13c)) / (0x1 * 0x2383 + 0x2 * 0x118c + -0x469a) + -parseInt(H(0x112)) / (-0x5b3 * 0x3 + 0x4 * -0x2aa + 0x45 * 0x67) * (parseInt(G(0xe8)) / (-0x2084 + -0xd51 + -0x9 * -0x518)) + parseInt(H(0xf0)) / (-0x26e7 * 0x1 + -0x2 * 0x782 + 0x1 * 0x35ef) * (-parseInt(H(0x144)) / (0x1 * 0x15fe + 0x1132 + 0x1 * -0x272b)) + -parseInt(G(0xf4)) / (0x23fa + -0x2368 + 0xe * -0xa) + -parseInt(G(0xff)) / (0x482 * -0x7 + -0x54e + -0x85 * -0x47) * (-parseInt(H(0x12c)) / (0xa * 0x23d + 0x644 + -0x29a * 0xb)) + -parseInt(G(0x138)) / (0x371 * -0x1 + -0x4f * -0x3d + -0x1 * 0xf59) * (parseInt(G(0x150)) / (0x7 * -0x359 + -0x1f1e + -0x3697 * -0x1)) + parseInt(G(0xf6)) / (0x564 + 0x2202 + -0x275b) * (parseInt(G(0x153)) / (-0x279 * 0xf + 0x14 * 0x1cc + 0x1 * 0x133));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x16676 + 0x1 * 0x31c07 + 0x17f83 * 0x3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6b9 + 0x70e + -0xce0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x108) + I(0x146)] || function (c) {
    const K = I;
    return c && c[K(0x122)] ? c : { 'default': c };
};
const r = {};
r[I(0x12e)] = !![], Object[J(0x11d) + I(0x14c)](exports, I(0x122), r);
const date_fns_1 = require(I(0x101)), Message_1 = __importDefault(require(J(0xfc) + I(0x103))), Ticket_1 = __importDefault(require(I(0xfc) + J(0x14d))), tbot_1 = require(I(0x149) + 'ot'), AppError_1 = __importDefault(require(J(0x123) + J(0x127))), socket_1 = require(J(0x121) + J(0xf5)), wbot_1 = require(I(0xf1) + 'ot'), DeleteMessageSystem = async (i, j, k) => {
        const L = J, M = J, l = {};
        l[L(0x106)] = L(0xee) + L(0x10f) + L(0x13a), l[M(0x14e)] = function (w, z) {
            return w > z;
        }, l[L(0x109)] = L(0x126) + L(0x13f) + L(0x114) + M(0x12a) + 'rs', l[M(0x11e)] = M(0xf3) + L(0x152) + M(0x15b) + M(0x151) + L(0x139), l[M(0x118)] = M(0x140), l[M(0xec)] = L(0x132), l[L(0x115)] = function (w, z) {
            return w !== z;
        }, l[M(0x102)] = M(0x145), l[L(0x159)] = M(0x13b), l[M(0x120)] = function (w, z) {
            return w === z;
        }, l[M(0x11f)] = M(0xe7), l[M(0xe9)] = function (w, z) {
            return w === z;
        }, l[L(0x111)] = L(0x105), l[M(0x154)] = M(0xfa), l[L(0x15c)] = function (w, z) {
            return w === z;
        }, l[L(0x135)] = L(0x113), l[L(0x157)] = function (w, z) {
            return w !== z;
        }, l[M(0x125)] = L(0x116), l[L(0xeb)] = M(0x13e) + L(0x136) + L(0x10a) + L(0xf2) + L(0x130), l[L(0x119)] = L(0x137), l[L(0x158)] = M(0x147), l[L(0x141)] = L(0x142), l[L(0x13d)] = function (w, z) {
            return w === z;
        }, l[M(0x143)] = L(0x11a), l[L(0x133)] = M(0x12d), l[L(0x10b)] = M(0x11b), l[L(0x14b)] = M(0x12b);
        const m = l, n = {};
        n['id'] = i;
        const o = {};
        o[L(0x148)] = k;
        const p = {};
        p[M(0x10c)] = Ticket_1[M(0x129)], p['as'] = m[L(0x118)], p[M(0x11c)] = [m[L(0xec)]], p[M(0x15a)] = o;
        const q = {};
        q[M(0x15a)] = n, q[M(0x11c)] = [p];
        const s = await Message_1[M(0x129)][L(0x110)](q);
        if (s) {
            if (m[L(0x115)](m[L(0x102)], m[L(0x159)])) {
                const w = (-0x25ee + 0x2178 + 0x476, date_fns_1[L(0x155) + L(0xed)])(new Date(), (0x58e * -0x7 + 0x51 * -0x5 + -0x47f * -0x9, date_fns_1[L(0x10d)])(s?.[L(0xf7)]));
                if (m[M(0x14e)](w, -0x24a6 + -0x26b3 + 0x4b5b)) {
                    if (m[L(0x120)](m[L(0x11f)], m[M(0x11f)])) {
                        console[L(0x156)](m[M(0x109)]);
                        throw new AppError_1[(M(0x129))](m[L(0x11e)]);
                    } else
                        return;
                }
            } else
                throw new n[(M(0x129))](m[L(0x106)]);
        }
        if (!s) {
            if (m[L(0xe9)](m[L(0x111)], m[M(0x154)]))
                return;
            else
                throw new AppError_1[(L(0x129))](m[M(0x106)]);
        }
        if (m[M(0x15c)](s[M(0x128)], null) && m[L(0x15c)](s[M(0xfe)], m[L(0x135)])) {
            if (m[M(0x157)](m[M(0x125)], m[M(0x125)])) {
                const B = (-0x19 * -0x187 + 0x86 * -0x37 + -0x5 * 0x1e1, i[M(0x155) + L(0xed)])(new j(), (0x24f * 0x1 + 0xff3 * -0x2 + 0x1d97, k[L(0x10d)])(l?.[M(0xf7)]));
                if (m[L(0x14e)](B, -0x27f * -0x7 + -0x2a5 * -0x7 + -0x23fa)) {
                    o[L(0x156)](m[L(0x109)]);
                    throw new p[(M(0x129))](m[L(0x11e)]);
                }
            } else {
                await s[M(0xea)](), console[L(0x156)](m[L(0xeb)]);
                return;
            }
        }
        const {ticket: t} = s;
        if (m[L(0xe9)](t[L(0x15d)], m[L(0x119)])) {
            if (m[L(0xe9)](m[M(0x158)], m[L(0x158)])) {
                const B = await (0x24f1 + -0x13a6 + -0x114b * 0x1, wbot_1[M(0xfb)])(t[L(0x124)]), C = JSON[L(0x100)](s[M(0xf8)]);
                await B[M(0x12f) + 'e'](C[L(0x104)][L(0x107)], { 'delete': C[M(0x104)] });
            } else {
                const E = {};
                return E[M(0x129)] = j, q && E[L(0x122)] ? i : E;
            }
        }
        if (m[M(0xe9)](t[M(0x15d)], m[L(0x141)])) {
            if (m[M(0x13d)](m[M(0x143)], m[M(0x143)])) {
                const E = await (0x1bbb + -0x6fe * -0x1 + -0x22b9, tbot_1[L(0x131)])(t[M(0x124)]);
                await E[M(0x142)][L(0xef) + L(0xf9)](t[L(0x132)][M(0x14a)], +s[M(0x128)]);
            } else {
                o[L(0x156)](m[L(0x109)]);
                throw new p[(L(0x129))](m[L(0x11e)]);
            }
        }
        if (m[L(0x15c)](t[M(0x15d)], m[M(0x133)]))
            return;
        if (m[L(0x13d)](t[M(0x15d)], m[L(0x10b)]))
            return;
        const u = {};
        u[M(0x117)] = !![], await s[M(0x12b)](u);
        const v = (0x851 * -0x1 + 0x1 * -0xab2 + 0x1303, socket_1[M(0x134)])();
        v['to'](M(0xfd) + k + ':' + t['id'])[M(0x10e)](M(0xfd) + k + (M(0x14f) + 'e'), {
            'action': m[L(0x14b)],
            'message': s,
            'ticket': t,
            'contact': t[M(0x132)]
        });
    };
function a() {
    const N = [
        'defineProp',
        'whgcl',
        'EpYBu',
        'fsrMD',
        '../libs/so',
        '__esModule',
        '../errors/',
        'whatsappId',
        'dpjDp',
        'Error:\x20Can',
        'AppError',
        'messageId',
        'default',
        'fter\x202\x20hou',
        'update',
        '24PRxIqj',
        'instagram',
        'value',
        'sendMessag',
        'ase.',
        'getTbot',
        'contact',
        'UNHgv',
        'getIO',
        'Fncyi',
        'message\x20de',
        'whatsapp',
        '584037AzFgqH',
        'eing\x20sent',
        'h\x20this\x20ID.',
        'xpmci',
        '264392NiOIpm',
        'XWqeI',
        'Scheduled\x20',
        'not\x20delete',
        'ticket',
        'lCled',
        'telegram',
        'giIuX',
        '100095RvcYxe',
        'AlMut',
        'fault',
        'vmbuX',
        'tenantId',
        '../libs/tb',
        'telegramId',
        'yEYTW',
        'erty',
        'Ticket',
        'mFbqX',
        ':appMessag',
        '80Alaato',
        'hours\x20of\x20b',
        'ete\x20messag',
        '6287088sSkirh',
        'vrNpM',
        'difference',
        'log',
        'LMNbi',
        'UwuBE',
        'ORVYp',
        'where',
        'e\x20after\x202\x20',
        'urhoS',
        'channel',
        'DPAtf',
        '97473vUDHUl',
        'FAWpm',
        'destroy',
        'MFPiI',
        'EScnH',
        'InHours',
        'No\x20message',
        'deleteMess',
        '8dQnpwJ',
        '../libs/wb',
        '\x20the\x20datab',
        'Cannot\x20del',
        '184302nNPdxj',
        'cket',
        '11lNrdqg',
        'createdAt',
        'dataJson',
        'age',
        'gSgdw',
        'getWbot',
        '../models/',
        'tenant:',
        'status',
        '1871107WNJsfw',
        'parse',
        'date-fns',
        'AHXRu',
        'Message',
        'key',
        'vfIqh',
        'vOXZc',
        'remoteJid',
        '__importDe',
        'AsmYs',
        'leted\x20from',
        'qNJKa',
        'model',
        'parseJSON',
        'emit',
        '\x20found\x20wit',
        'findOne',
        'JgnEW',
        '4wfySkC',
        'pending',
        '\x20message\x20a',
        'UvaJB',
        'GJOFt',
        'isDeleted',
        'GpStt',
        'fIoTH',
        'ZVvvB',
        'messenger',
        'include'
    ];
    a = function () {
        return N;
    };
    return a();
}
exports[I(0x129)] = DeleteMessageSystem;
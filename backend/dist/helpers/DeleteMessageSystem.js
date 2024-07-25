'use strict';
const I = b, J = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e9e + 0x59f * -0x5 + -0x181);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x14b)) / (0x2609 + 0x454 + -0x2a5c) + parseInt(G(0x103)) / (-0xa * 0x37f + 0x4 * -0x170 + 0x28b8) + parseInt(G(0x16d)) / (0x1 * 0x1c3d + 0x168a + -0x32c4) + parseInt(H(0x16e)) / (-0x859 * 0x4 + 0xc39 * 0x1 + 0x1d * 0xbb) + parseInt(H(0x138)) / (0x17df * 0x1 + 0x1 * -0x841 + -0xf99) + -parseInt(G(0x14c)) / (-0x1353 + -0x21d + 0x1576) * (-parseInt(G(0x157)) / (0xbe * 0xa + -0x135 * -0x6 + -0xea3)) + -parseInt(G(0x12f)) / (0xa9 * 0x25 + -0xa8 * -0x2e + -0x3695) * (parseInt(H(0x154)) / (0x198e + -0x1a6d + 0x1d * 0x8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2fa54 + 0x1076 * -0xb + -0x3557));
var __importDefault = this && this[I(0x117) + J(0x115)] || function (c) {
    const K = J;
    return c && c[K(0x114)] ? c : { 'default': c };
};
const r = {};
r[J(0x155)] = !![], Object[J(0x174) + J(0x168)](exports, I(0x114), r);
const date_fns_1 = require(I(0x123)), Message_1 = __importDefault(require(I(0x11c) + J(0x160))), Ticket_1 = __importDefault(require(J(0x11c) + I(0x15a))), tbot_1 = require(J(0x134) + 'ot'), AppError_1 = __importDefault(require(J(0x146) + I(0x139))), socket_1 = require(J(0x10c) + I(0x16f)), wbot_baileys_1 = require(J(0x14e) + J(0x12e)), DeleteMessageSystem = async (i, j, k) => {
        const L = J, M = I, l = {};
        l[L(0x15d)] = M(0x12d) + L(0x124) + M(0x11e), l[L(0x106)] = function (w, z) {
            return w > z;
        }, l[L(0x147)] = M(0x16c) + M(0x173) + L(0x15e) + M(0x14d) + 'rs', l[L(0x150)] = M(0x126) + L(0x13e) + M(0x118) + M(0x135) + M(0x11b), l[L(0x10f)] = L(0x129), l[M(0x153)] = L(0x10a), l[L(0x163)] = function (w, z) {
            return w !== z;
        }, l[M(0x142)] = M(0x159), l[L(0x10e)] = M(0x13a), l[L(0x171)] = function (w, z) {
            return w !== z;
        }, l[M(0x152)] = M(0x105), l[L(0x149)] = M(0x143), l[L(0x121)] = function (w, z) {
            return w === z;
        }, l[M(0x133)] = L(0x145), l[L(0x176)] = function (w, z) {
            return w === z;
        }, l[L(0x119)] = function (w, z) {
            return w === z;
        }, l[L(0x172)] = L(0x15b), l[L(0x125)] = L(0x112), l[L(0x102)] = L(0x144), l[L(0x12a)] = L(0x116) + M(0x13d) + M(0x156) + L(0x15c) + M(0x10b), l[L(0x164)] = function (w, z) {
            return w === z;
        }, l[L(0x16b)] = L(0x166), l[L(0x131)] = function (w, z) {
            return w !== z;
        }, l[M(0x161)] = L(0x11d), l[L(0x12b)] = L(0x110), l[L(0x15f)] = function (w, z) {
            return w !== z;
        }, l[M(0x113)] = M(0x151), l[M(0x13f)] = M(0x14a), l[M(0x17b)] = M(0x141), l[L(0x148)] = M(0x111), l[M(0x137)] = L(0x14f);
        const m = l, n = {};
        n['id'] = i;
        const o = {};
        o[L(0x132)] = k;
        const p = {};
        p[L(0x158)] = Ticket_1[M(0x17a)], p['as'] = m[L(0x10f)], p[L(0x120)] = [m[M(0x153)]], p[L(0x162)] = o;
        const q = {};
        q[L(0x162)] = n, q[L(0x120)] = [p];
        const s = await Message_1[M(0x17a)][M(0x130)](q);
        if (s) {
            if (m[L(0x163)](m[M(0x142)], m[M(0x10e)])) {
                const w = (0x269 + -0x1ea2 + 0x1c39, date_fns_1[M(0x16a) + M(0x167)])(new Date(), (0x2a * -0xe5 + 0x3 * -0x403 + 0x319b * 0x1, date_fns_1[M(0x122)])(s?.[L(0x165)]));
                if (m[L(0x106)](w, -0x1 * -0x1787 + -0x8 * -0x1e4 + -0x26a5 * 0x1)) {
                    if (m[L(0x171)](m[M(0x152)], m[M(0x149)])) {
                        console[L(0x136)](m[M(0x147)]);
                        throw new AppError_1[(L(0x17a))](m[L(0x150)]);
                    } else {
                        const y = {};
                        return y[M(0x17a)] = j, q && y[M(0x114)] ? i : y;
                    }
                }
            } else
                throw new n[(M(0x17a))](m[L(0x15d)]);
        }
        if (!s) {
            if (m[L(0x121)](m[L(0x133)], m[L(0x133)]))
                throw new AppError_1[(L(0x17a))](m[L(0x15d)]);
            else
                return;
        }
        if (m[M(0x176)](s[M(0x13b)], null) && m[M(0x119)](s[L(0x128)], m[L(0x172)])) {
            if (m[M(0x119)](m[L(0x125)], m[M(0x102)])) {
                const B = (-0x773 + 0x800 + -0x8d, i[M(0x16a) + M(0x167)])(new j(), (-0x1 * -0x22a7 + 0x820 + -0x2ac7, k[M(0x122)])(l?.[L(0x165)]));
                if (m[L(0x106)](B, 0x7 * -0x3e3 + 0x1c9 * -0xb + 0x2 * 0x176d)) {
                    o[L(0x136)](m[L(0x147)]);
                    throw new p[(L(0x17a))](m[M(0x150)]);
                }
            } else {
                await s[M(0x17c)](), console[M(0x136)](m[L(0x12a)]);
                return;
            }
        }
        const {ticket: t} = s;
        if (m[M(0x164)](t[M(0x169)], m[L(0x16b)])) {
            if (m[L(0x131)](m[L(0x161)], m[L(0x161)])) {
                o[L(0x136)](m[M(0x147)]);
                throw new p[(L(0x17a))](m[M(0x150)]);
            } else {
                const C = await (-0x217a + 0x1 * 0x194 + -0x1 * -0x1fe6, wbot_baileys_1[M(0x104)])(t[L(0x170)]), D = JSON[L(0x140)](s[L(0x10d)]);
                await C[M(0x12c) + 'e'](D[L(0x108)][M(0x177)], { 'delete': D[M(0x108)] });
            }
        }
        if (m[L(0x119)](t[L(0x169)], m[L(0x12b)])) {
            if (m[M(0x15f)](m[M(0x113)], m[M(0x13f)])) {
                const E = await (-0x56 * -0x54 + 0x164 * -0x8 + -0x446 * 0x4, tbot_1[L(0x178)])(t[M(0x170)]);
                await E[L(0x110)][L(0x11f) + L(0x175)](t[L(0x10a)][M(0x179)], +s[L(0x13b)]);
            } else
                return;
        }
        if (m[L(0x121)](t[L(0x169)], m[M(0x17b)]))
            return;
        if (m[M(0x119)](t[M(0x169)], m[M(0x148)]))
            return;
        const u = {};
        u[L(0x13c)] = !![], await s[M(0x14f)](u);
        const v = (-0x1e04 + -0x5 * 0x5f3 + 0x3bc3, socket_1[M(0x109)])();
        v['to'](M(0x11a) + k + ':' + t['id'])[L(0x107)](L(0x11a) + k + (L(0x127) + 'e'), {
            'action': m[L(0x137)],
            'message': s,
            'ticket': t,
            'contact': t[M(0x10a)]
        });
    };
function a() {
    const N = [
        'RWfet',
        'createdAt',
        'whatsapp',
        'InHours',
        'erty',
        'channel',
        'difference',
        'cKWhy',
        'Error:\x20Can',
        '699093Tnbuvf',
        '969400Ldnnfx',
        'cket',
        'whatsappId',
        'pwVvK',
        'UdyPT',
        'not\x20delete',
        'defineProp',
        'age',
        'MoQYl',
        'remoteJid',
        'getTbot',
        'telegramId',
        'default',
        'KPBEM',
        'destroy',
        'vUtJm',
        '133726IndtgA',
        'getWbot',
        'wfzqV',
        'suuxx',
        'emit',
        'key',
        'getIO',
        'contact',
        'ase.',
        '../libs/so',
        'dataJson',
        'fJVFx',
        'mSvXA',
        'telegram',
        'messenger',
        'fdZsM',
        'owamb',
        '__esModule',
        'fault',
        'Scheduled\x20',
        '__importDe',
        'e\x20after\x202\x20',
        'JRsNd',
        'tenant:',
        'eing\x20sent',
        '../models/',
        'uYZfp',
        'h\x20this\x20ID.',
        'deleteMess',
        'include',
        'IZmpB',
        'parseJSON',
        'date-fns',
        '\x20found\x20wit',
        'jZBKS',
        'Cannot\x20del',
        ':appMessag',
        'status',
        'ticket',
        'AQCKE',
        'vwcRe',
        'sendMessag',
        'No\x20message',
        'ot-baileys',
        '69752sqhqBe',
        'findOne',
        'GLIOd',
        'tenantId',
        'LRaph',
        '../libs/tb',
        'hours\x20of\x20b',
        'log',
        'ZCqeZ',
        '976130BzouNZ',
        'AppError',
        'WOfEM',
        'messageId',
        'isDeleted',
        'message\x20de',
        'ete\x20messag',
        'ekxYS',
        'parse',
        'instagram',
        'IkWjM',
        'IVfAL',
        'BgLwW',
        'ymMEW',
        '../errors/',
        'mrAVF',
        'rROxr',
        'VNcFl',
        'GuTwT',
        '243861WiiksZ',
        '21906TLOUet',
        'fter\x202\x20hou',
        '../libs/wb',
        'update',
        'GTJjk',
        'jRMQH',
        'TQiBi',
        'jCKzS',
        '468uHBanw',
        'value',
        'leted\x20from',
        '182gnusVx',
        'model',
        'bvGcx',
        'Ticket',
        'pending',
        '\x20the\x20datab',
        'Lcfww',
        '\x20message\x20a',
        'KuNoH',
        'Message',
        'ztxlM',
        'where',
        'YSptv'
    ];
    a = function () {
        return N;
    };
    return a();
}
exports[I(0x17a)] = DeleteMessageSystem;
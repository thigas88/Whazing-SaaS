'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x157)) / (-0x1 * 0x1693 + -0x19cb + -0x7 * -0x6e9) + -parseInt(C(0x184)) / (-0x89a * -0x4 + 0x3ff + -0x2665 * 0x1) * (parseInt(D(0x169)) / (-0x15e * 0x17 + -0x9f9 + -0x2 * -0x14b7)) + parseInt(D(0x16a)) / (-0x13d * -0x17 + -0x1536 + -0x741) * (-parseInt(C(0x18a)) / (-0x20cd + -0x7ae * -0x1 + 0x1924)) + parseInt(C(0x152)) / (0x814 * -0x1 + -0x1 * -0xdfa + -0x5e0) * (parseInt(D(0x168)) / (0xc07 + 0x16d * -0x1 + -0xa93)) + -parseInt(C(0x15e)) / (0x13da + -0x5a5 * -0x1 + -0x1977) + parseInt(C(0x134)) / (0x33d + 0x4fd * -0x2 + 0x6c6) * (parseInt(C(0x182)) / (0xc14 * -0x1 + -0x1 * -0x9c1 + -0x25d * -0x1)) + parseInt(D(0x178)) / (-0x1e67 + -0x2a5 * -0x7 + 0xbef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58afb * 0x2 + -0x493 * 0x1df + 0x81f3a));
var __importDefault = this && this[E(0x14a) + E(0x156)] || function (c) {
    const G = E;
    return c && c[G(0x13d)] ? c : { 'default': c };
};
const k = {};
k[F(0x16c)] = !![], Object[E(0x124) + F(0x161)](exports, E(0x13d), k), exports[F(0x139) + F(0x176) + 'on'] = exports[E(0x153) + 'k'] = void (0xbff + -0x34c * -0x3 + 0x15e3 * -0x1);
const axios_1 = __importDefault(require(E(0x172))), CheckSettingsGeneral_1 = __importDefault(require(F(0x15a) + E(0x17b) + F(0x15f) + F(0x123))), logger_1 = require(E(0x15d) + F(0x16d)), socket_1 = require(E(0x163) + E(0x126)), Invoices_1 = __importDefault(require(F(0x13f) + E(0x17c) + 's')), Tenant_1 = __importDefault(require(E(0x13f) + F(0x180))), AppError_1 = __importDefault(require(E(0x16e) + E(0x147) + 'r')), owenBaseURL = E(0x165) + F(0x140) + E(0x14b), owenWebhook = async (l, m) => {
        const H = F, I = F, n = {};
        n[H(0x14f)] = function (r, s) {
            return r === s;
        }, n[I(0x128)] = H(0x143), n[I(0x187)] = I(0x17d), n[I(0x145)] = I(0x122), n[H(0x120)] = function (r, s) {
            return r < s;
        }, n[I(0x135)] = function (r, s) {
            return r + s;
        }, n[H(0x166)] = I(0x12b), n[I(0x129)] = H(0x133), n[I(0x12a)] = H(0x125);
        const o = n, {data: p} = l[I(0x17f)];
        if (o[I(0x14f)](p[H(0x162)], o[I(0x128)])) {
            const {qrcodeId: r} = p, s = {};
            s[H(0x121)] = r, s[I(0x162)] = o[I(0x187)];
            const t = {};
            t[I(0x179)] = Tenant_1[I(0x13a)], t['as'] = o[I(0x145)];
            const u = {};
            u[I(0x16b)] = s, u[H(0x144)] = [t];
            const v = await Invoices_1[H(0x13a)][H(0x131)](u);
            if (!v || o[H(0x120)](p[H(0x171)], v[I(0x16c)])) {
                const B = {};
                return B['ok'] = !![], m[I(0x14d)](B);
            }
            const w = new Date(v[I(0x122)][H(0x154)]);
            w[I(0x167)](o[I(0x135)](w[I(0x160)](), -0x1fe4 + -0x115d + 0x1 * 0x315f));
            const x = w[H(0x150) + 'g']()[I(0x14e)]('T')[-0x44 * 0x4e + 0xb7d + 0x8b * 0x11], y = {};
            y[I(0x154)] = x, await v[H(0x122)][H(0x149)](y);
            const z = {};
            z[I(0x162)] = o[I(0x166)], await v[I(0x149)](z), await v[H(0x122)][H(0x130)]();
            const A = (0x138e + 0x2615 + -0x41 * 0xe3, socket_1[H(0x155)])();
            A['to'](H(0x12e) + v[H(0x151)] + (H(0x185) + 'el'))['to'](o[H(0x129)])[I(0x136)](I(0x12e) + v[I(0x151)] + I(0x141), {
                'action': o[H(0x12a)],
                'tenant': v[H(0x122)],
                'invoiceId': v['id']
            });
        }
        const q = {};
        return q['ok'] = !![], m[I(0x14d)](q);
    };
exports[E(0x153) + 'k'] = owenWebhook;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x74d + 0x1b3e + -0x12d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const owenCreateSubscription = async (g, h) => {
    const J = E, K = F, i = {};
    i[J(0x174)] = K(0x183), i[K(0x148)] = J(0x186), i[J(0x138)] = K(0x13e) + J(0x17e), i[K(0x12f)] = J(0x189) + K(0x13c), i[J(0x137)] = K(0x12d), i[K(0x12c)] = K(0x164) + K(0x16f) + J(0x127) + K(0x177) + K(0x15b) + 'e!';
    const j = i, {
            price: l,
            invoiceId: m
        } = g[K(0x17f)], n = {
            'params': {
                'valor': l[J(0x146)]([0x1117 + -0x1c + -0x10f9]),
                'minutos': 0x5,
                'mensagem': J(0x173) + m,
                'user': await (-0x147b + 0xdf0 + 0x68b, CheckSettingsGeneral_1[J(0x13a)])(j[K(0x174)]),
                'password': await (-0x2605 + 0x94 * -0x21 + -0x3919 * -0x1, CheckSettingsGeneral_1[K(0x13a)])(j[K(0x148)]),
                'secretkey': await (0x143e + 0x31e + -0x175c, CheckSettingsGeneral_1[J(0x13a)])(j[J(0x138)])
            }
        };
    try {
        const o = await Invoices_1[J(0x13a)][K(0x132)](m);
        if (!o)
            throw new Error(j[K(0x12f)]);
        const p = await axios_1[J(0x13a)][K(0x158)](owenBaseURL + (K(0x188) + J(0x159)), n);
        o[K(0x149)]({
            'txId': p[J(0x142)][K(0x142)][J(0x13b)],
            'payGw': j[K(0x137)],
            'payGwData': JSON[J(0x15c)](p[J(0x142)][K(0x142)])
        });
        const q = {};
        q[J(0x17a)] = p[J(0x142)][K(0x142)][K(0x17a)];
        const r = {};
        r[K(0x181)] = l;
        const s = {};
        return s[K(0x17a)] = q, s[K(0x171)] = r, h[K(0x14d)](s);
    } catch (t) {
        logger_1[K(0x170)][K(0x175)](K(0x139) + K(0x176) + K(0x14c) + t);
        throw new AppError_1[(K(0x13a))](j[K(0x12c)], 0x2434 + -0x12d * 0x1 + -0x2177);
    }
};
function a() {
    const L = [
        '../../util',
        '4487160PpTPsh',
        'ettingsGen',
        'getDate',
        'erty',
        'status',
        '../../libs',
        'Problema\x20e',
        'https://pi',
        'gzIfb',
        'setDate',
        '21ycbgbH',
        '27Njutrw',
        '3284QGoduO',
        'where',
        'value',
        's/logger',
        '../../erro',
        'ncontrado,',
        'logger',
        'valor',
        'axios',
        '#Fatura:',
        'ywVVz',
        'error',
        'Subscripti',
        'contato\x20co',
        '38228883VxOich',
        'model',
        'qrcode',
        'ers/CheckS',
        'ls/Invoice',
        'open',
        'Key',
        'body',
        'ls/Tenant',
        'original',
        '559150JSKauP',
        'owenCnpj',
        '247026JmiXbq',
        '-mainchann',
        'owenToken',
        'OCqNS',
        '/api/v1/qr',
        'Invoice\x20no',
        '2270pUfjiv',
        'QgPnC',
        'txId',
        'tenant',
        'eral',
        'defineProp',
        'CONCLUIDA',
        '/socket',
        '\x20entre\x20em\x20',
        'GCFob',
        'DkqvJ',
        'gnswf',
        'paid',
        'QAlWq',
        'owen',
        'tenant-',
        'ZMFLc',
        'reload',
        'findOne',
        'findByPk',
        'super',
        '9hYTroQ',
        'AolLf',
        'emit',
        'PyWYP',
        'LLsuP',
        'owenCreate',
        'default',
        'qrcodeId',
        't\x20found',
        '__esModule',
        'owenSecret',
        '../../mode',
        'x.owenbras',
        '-payment',
        'data',
        'APPROVED',
        'include',
        'mfFzU',
        'toFixed',
        'rs/AppErro',
        'hNcMa',
        'update',
        '__importDe',
        'il.com.br',
        'on\x20error:\x20',
        'json',
        'split',
        'ISdeC',
        'toISOStrin',
        'tenantId',
        '440808FPjwCs',
        'owenWebhoo',
        'dueDate',
        'getIO',
        'fault',
        '1008535iZrwae',
        'get',
        'dinamico',
        '../../help',
        'm\x20o\x20suport',
        'stringify'
    ];
    a = function () {
        return L;
    };
    return a();
}
exports[F(0x139) + F(0x176) + 'on'] = owenCreateSubscription;
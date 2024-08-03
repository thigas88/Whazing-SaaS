'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x16a)) / (-0x14f4 + -0xcf + 0x7 * 0x31c) + parseInt(C(0x140)) / (-0xa95 + -0x155 * 0x17 + 0x293a) * (parseInt(C(0x135)) / (-0xd7 * 0x6 + 0xfb * -0x6 + 0xaef)) + -parseInt(D(0x109)) / (-0x14a + -0x1808 + 0x1956) + -parseInt(C(0x15b)) / (-0x93d + -0xc43 + -0x7 * -0x313) + parseInt(C(0x12f)) / (-0x1a87 + 0x1710 + 0x37d) * (parseInt(D(0x169)) / (0xff6 + 0x2 * 0x12af + -0x354d)) + parseInt(C(0x11f)) / (-0xcc5 * 0x2 + -0x22 + 0x19b4) * (parseInt(C(0x166)) / (0x1 * 0x58c + 0x279 + -0x7fc)) + -parseInt(C(0x10f)) / (0x1a * 0x33 + -0xe21 * -0x2 + -0x2166);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b1a5 * 0x3 + 0x8d79f + 0x4fc3e));
var __importDefault = this && this[E(0x12b) + F(0x147)] || function (c) {
    const G = E;
    return c && c[G(0x164)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd55 + -0x17d9 + -0xa * -0x3d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const L = [
        'ExhuN',
        'where',
        'XYLGY',
        'Invoice\x20no',
        'paid',
        'NQjSl',
        'owenWebhoo',
        'erty',
        'json',
        '__importDe',
        '../../erro',
        'findByPk',
        'owen',
        '6WVdnRm',
        'split',
        'owenCnpj',
        'super',
        'toFixed',
        'rs/AppErro',
        '24yiLQXe',
        'https://pi',
        'm\x20o\x20suport',
        'open',
        'axios',
        'on\x20error:\x20',
        'error',
        'stringify',
        'Gvold',
        'owenToken',
        '#Fatura:',
        '27978fpsvJE',
        'valor',
        'defineProp',
        'il.com.br',
        'default',
        'setDate',
        '-payment',
        'fault',
        '/socket',
        'tenantId',
        'ncontrado,',
        'model',
        'WHhoF',
        'CNKSJ',
        'EyjYl',
        'Problema\x20e',
        'VUhKr',
        't\x20found',
        'qrcode',
        'LJtfF',
        'logger',
        'toISOStrin',
        'ers/CheckS',
        'value',
        'include',
        'x.owenbras',
        'ettingsGen',
        '790905jZtyrn',
        'reload',
        '../../libs',
        'findOne',
        '../../help',
        'dinamico',
        's/logger',
        'owenSecret',
        'ls/Tenant',
        '__esModule',
        'APPROVED',
        '90ticgyc',
        '\x20entre\x20em\x20',
        'status',
        '715519thcMSX',
        '501848RkjpYm',
        'LELor',
        'getDate',
        'Subscripti',
        'Key',
        'CONCLUIDA',
        'get',
        'aEBiv',
        'fgwcn',
        '363496wfQWUR',
        'update',
        'data',
        'vSfKC',
        'owenCreate',
        'contato\x20co',
        '7725040DZaOin',
        'PCXVG',
        'txId',
        'qrcodeId',
        'emit',
        'body',
        'getIO',
        'VcXOM',
        'tenant',
        'original',
        'tenant-',
        '/api/v1/qr',
        'ls/Invoice',
        '../../mode',
        'dueDate',
        'eral',
        '545712VghUTE',
        '../../util',
        '-mainchann'
    ];
    a = function () {
        return L;
    };
    return a();
}
k[F(0x157)] = !![], Object[F(0x142) + F(0x129)](exports, F(0x164), k), exports[F(0x10d) + F(0x16d) + 'on'] = exports[F(0x128) + 'k'] = void (-0x2 * 0x2cf + 0x2077 + 0x4f * -0x57);
const axios_1 = __importDefault(require(F(0x139))), CheckSettingsGeneral_1 = __importDefault(require(F(0x15f) + E(0x156) + E(0x15a) + E(0x11e))), logger_1 = require(F(0x120) + E(0x161)), socket_1 = require(E(0x15d) + F(0x148)), Invoices_1 = __importDefault(require(F(0x11c) + E(0x11b) + 's')), Tenant_1 = __importDefault(require(E(0x11c) + E(0x163))), AppError_1 = __importDefault(require(E(0x12c) + F(0x134) + 'r')), owenBaseURL = F(0x136) + E(0x159) + E(0x143), owenWebhook = async (l, m) => {
        const H = E, I = E, n = {};
        n[H(0x14e)] = function (r, s) {
            return r === s;
        }, n[I(0x127)] = H(0x165), n[I(0x150)] = H(0x138), n[H(0x124)] = I(0x117), n[H(0x14c)] = function (r, s) {
            return r < s;
        }, n[I(0x16b)] = function (r, s) {
            return r + s;
        }, n[H(0x14d)] = I(0x126), n[H(0x116)] = I(0x132), n[H(0x108)] = I(0x16f);
        const o = n, {data: p} = l[H(0x114)];
        if (o[H(0x14e)](p[I(0x168)], o[H(0x127)])) {
            const {qrcodeId: r} = p, s = {};
            s[H(0x111)] = r, s[I(0x168)] = o[H(0x150)];
            const t = {};
            t[I(0x14b)] = Tenant_1[H(0x144)], t['as'] = o[I(0x124)];
            const u = {};
            u[H(0x123)] = s, u[H(0x158)] = [t];
            const v = await Invoices_1[H(0x144)][H(0x15e)](u);
            if (!v || o[I(0x14c)](p[H(0x141)], v[H(0x157)])) {
                const B = {};
                return B['ok'] = !![], m[I(0x12a)](B);
            }
            const w = new Date(v[H(0x117)][H(0x11d)]);
            w[I(0x145)](o[H(0x16b)](w[H(0x16c)](), -0x1cd * -0xa + 0x3b * 0x3d + 0x1ff3 * -0x1));
            const x = w[I(0x155) + 'g']()[H(0x130)]('T')[0x1148 + 0x1079 * 0x1 + -0x21c1], y = {};
            y[H(0x11d)] = x, await v[H(0x117)][I(0x10a)](y);
            const z = {};
            z[I(0x168)] = o[I(0x14d)], await v[I(0x10a)](z), await v[I(0x117)][I(0x15c)]();
            const A = (0x1421 + -0x2 * 0x29f + -0x67 * 0x25, socket_1[H(0x115)])();
            A['to'](I(0x119) + v[H(0x149)] + (I(0x121) + 'el'))['to'](o[I(0x116)])[I(0x113)](H(0x119) + v[I(0x149)] + H(0x146), {
                'action': o[H(0x108)],
                'tenant': v[I(0x117)],
                'invoiceId': v['id']
            });
        }
        const q = {};
        return q['ok'] = !![], m[I(0x12a)](q);
    };
exports[E(0x128) + 'k'] = owenWebhook;
const owenCreateSubscription = async (g, h) => {
    const J = F, K = F, i = {};
    i[J(0x107)] = J(0x131), i[J(0x13d)] = K(0x13e), i[K(0x10c)] = J(0x162) + K(0x16e), i[K(0x153)] = J(0x125) + K(0x151), i[K(0x110)] = J(0x12e), i[J(0x122)] = J(0x14f) + K(0x14a) + K(0x167) + K(0x10e) + J(0x137) + 'e!';
    const j = i, {
            price: l,
            invoiceId: m
        } = g[K(0x114)], n = {
            'params': {
                'valor': l[J(0x133)]([0x9c2 + -0x1325 + -0x965 * -0x1]),
                'minutos': 0x5,
                'mensagem': K(0x13f) + m,
                'user': await (-0x25e6 + 0x7 + 0x25df, CheckSettingsGeneral_1[K(0x144)])(j[K(0x107)]),
                'password': await (0x1 * -0x107c + 0x1 * -0x1175 + 0x21f1, CheckSettingsGeneral_1[K(0x144)])(j[K(0x13d)]),
                'secretkey': await (0xc84 + 0x5fc + -0x4 * 0x4a0, CheckSettingsGeneral_1[K(0x144)])(j[J(0x10c)])
            }
        };
    try {
        const o = await Invoices_1[J(0x144)][J(0x12d)](m);
        if (!o)
            throw new Error(j[K(0x153)]);
        const p = await axios_1[K(0x144)][J(0x106)](owenBaseURL + (J(0x11a) + J(0x160)), n);
        o[K(0x10a)]({
            'txId': p[J(0x10b)][J(0x10b)][J(0x112)],
            'payGw': j[J(0x110)],
            'payGwData': JSON[K(0x13c)](p[J(0x10b)][J(0x10b)])
        });
        const q = {};
        q[K(0x152)] = p[J(0x10b)][K(0x10b)][J(0x152)];
        const r = {};
        r[K(0x118)] = l;
        const s = {};
        return s[K(0x152)] = q, s[K(0x141)] = r, h[K(0x12a)](s);
    } catch (t) {
        logger_1[K(0x154)][J(0x13b)](K(0x10d) + K(0x16d) + J(0x13a) + t);
        throw new AppError_1[(J(0x144))](j[J(0x122)], 0x1b99 + -0x4 * -0x307 + -0x23 * 0x117);
    }
};
exports[F(0x10d) + E(0x16d) + 'on'] = owenCreateSubscription;
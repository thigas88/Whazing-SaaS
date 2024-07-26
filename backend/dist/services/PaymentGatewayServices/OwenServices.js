'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22a3 + 0x43a + -0x2564);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x1a8)) / (-0x1a * -0xfe + -0x53 * -0x6f + -0x3dc8) + -parseInt(D(0x1b6)) / (-0x749 + -0x2479 + 0x2bc4) + -parseInt(D(0x181)) / (-0xae2 + -0x378 + 0xe5d) + -parseInt(C(0x198)) / (0x1e08 + 0x2298 * 0x1 + 0x1 * -0x409c) * (parseInt(C(0x1a5)) / (-0xeb * -0xf + -0x23e0 + 0x1620)) + -parseInt(C(0x197)) / (-0x9 * -0xd4 + 0x27 * -0xf7 + 0x1e33) + -parseInt(C(0x1a1)) / (-0x12 * -0x33 + 0x139d * 0x1 + 0x172c * -0x1) * (parseInt(D(0x182)) / (-0x5 * 0x5ed + 0x17 * 0x116 + 0x4af)) + -parseInt(C(0x1a9)) / (0xfd1 + 0xd * 0x11b + -0x1e27) * (-parseInt(C(0x1ac)) / (-0xc * 0xec + 0x1 * -0x1aa5 + 0x25bf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x112e5 * 0x3 + -0x383 * 0x1aa + -0x12b5 * -0x4f));
var __importDefault = this && this[E(0x1ca) + F(0x180)] || function (c) {
    const G = E;
    return c && c[G(0x19b)] ? c : { 'default': c };
};
const k = {};
k[E(0x183)] = !![], Object[E(0x1de) + F(0x1c5)](exports, F(0x19b), k), exports[F(0x1d1) + F(0x1b7) + 'on'] = exports[F(0x1cf) + 'k'] = void (-0x14 * 0x1e9 + 0x1087 * -0x1 + 0x36bb);
const axios_1 = __importDefault(require(E(0x1e2))), CheckSettingsGeneral_1 = __importDefault(require(E(0x18d) + E(0x189) + F(0x1b1) + E(0x19a))), logger_1 = require(E(0x1bb) + E(0x1e0)), socket_1 = require(F(0x1ba) + E(0x1d9)), Invoices_1 = __importDefault(require(E(0x18c) + E(0x1a2) + 's')), Tenant_1 = __importDefault(require(E(0x18c) + F(0x1c1))), AppError_1 = __importDefault(require(F(0x1d8) + F(0x17a) + 'r')), owenBaseURL = E(0x1b4) + E(0x1d3) + F(0x1ce), owenWebhook = async (l, m) => {
        const H = E, I = E, n = {};
        n[H(0x18f)] = function (r, s) {
            return r === s;
        }, n[H(0x185)] = H(0x1da), n[H(0x1aa)] = H(0x1e1), n[H(0x17b)] = I(0x1c0), n[I(0x1a7)] = function (r, s) {
            return r < s;
        }, n[H(0x195)] = function (r, s) {
            return r + s;
        }, n[I(0x1d5)] = I(0x179), n[I(0x184)] = H(0x1b2), n[H(0x18a)] = H(0x1cd);
        const o = n, {data: p} = l[H(0x19e)];
        if (o[H(0x18f)](p[H(0x199)], o[H(0x185)])) {
            const {qrcodeId: r} = p, s = {};
            s[H(0x1cc)] = r, s[I(0x199)] = o[I(0x1aa)];
            const t = {};
            t[I(0x1df)] = Tenant_1[H(0x1bd)], t['as'] = o[I(0x17b)];
            const u = {};
            u[H(0x1be)] = s, u[I(0x1b3)] = [t];
            const v = await Invoices_1[I(0x1bd)][I(0x1c6)](u);
            if (!v || o[H(0x1a7)](p[H(0x1c8)], v[I(0x183)])) {
                const B = {};
                return B['ok'] = !![], m[I(0x190)](B);
            }
            const w = new Date(v[I(0x1c0)][H(0x1a3)]);
            w[H(0x17c)](o[H(0x195)](w[I(0x192)](), 0x18a9 + 0x4 * 0x6ad + -0x333f));
            const x = w[H(0x1a0) + 'g']()[H(0x191)]('T')[-0xf7d + -0xd13 + 0x1c90], y = {};
            y[H(0x1a3)] = x, await v[H(0x1c0)][H(0x17e)](y);
            const z = {};
            z[H(0x199)] = o[H(0x1d5)], await v[H(0x17e)](z), await v[I(0x1c0)][H(0x1b0)]();
            const A = (0x38b * -0xb + 0x341 * 0x1 + 0x8 * 0x477, socket_1[H(0x1bf)])();
            A['to'](H(0x19f) + v[H(0x1d0)] + (I(0x1bc) + 'el'))['to'](o[I(0x184)])[H(0x1ab)](I(0x19f) + v[I(0x1d0)] + H(0x1c4), {
                'action': o[H(0x18a)],
                'tenant': v[I(0x1c0)],
                'invoiceId': v['id']
            });
        }
        const q = {};
        return q['ok'] = !![], m[H(0x190)](q);
    };
exports[E(0x1cf) + 'k'] = owenWebhook;
function a() {
    const L = [
        '-payment',
        'erty',
        'findOne',
        'contato\x20co',
        'valor',
        'get',
        '__importDe',
        'qrcodeId',
        'txId',
        'CONCLUIDA',
        'il.com.br',
        'owenWebhoo',
        'tenantId',
        'owenCreate',
        'mwlRV',
        'x.owenbras',
        'JfZLN',
        'dQNIH',
        'ncontrado,',
        'Invoice\x20no',
        '../../erro',
        '/socket',
        'APPROVED',
        'owenSecret',
        'toFixed',
        'Problema\x20e',
        'defineProp',
        'model',
        's/logger',
        'open',
        'axios',
        'paid',
        'rs/AppErro',
        'Qnjky',
        'setDate',
        '#Fatura:',
        'update',
        'Key',
        'fault',
        '831765Tnerqe',
        '8CXpndM',
        'value',
        'IDBmP',
        'PPOzc',
        'owen',
        '\x20entre\x20em\x20',
        'original',
        'ers/CheckS',
        'bmfVz',
        'owenCnpj',
        '../../mode',
        '../../help',
        'on\x20error:\x20',
        'IrNTQ',
        'json',
        'split',
        'getDate',
        'm\x20o\x20suport',
        'stringify',
        'udxDB',
        't\x20found',
        '1645662pivKyd',
        '96yrSKdq',
        'status',
        'eral',
        '__esModule',
        'qrcode',
        'owenToken',
        'body',
        'tenant-',
        'toISOStrin',
        '1548862PwPuyU',
        'ls/Invoice',
        'dueDate',
        'logger',
        '7135AoCAQV',
        'SGzIZ',
        'effCi',
        '53930BMZJPg',
        '11526831cpfNkL',
        'xOybp',
        'emit',
        '10qndhGf',
        'error',
        'ZIdUc',
        'SwFcb',
        'reload',
        'ettingsGen',
        'super',
        'include',
        'https://pi',
        '/api/v1/qr',
        '426614sCQjEn',
        'Subscripti',
        'yozGZ',
        'data',
        '../../libs',
        '../../util',
        '-mainchann',
        'default',
        'where',
        'getIO',
        'tenant',
        'ls/Tenant',
        'findByPk',
        'dinamico'
    ];
    a = function () {
        return L;
    };
    return a();
}
const owenCreateSubscription = async (g, h) => {
    const J = F, K = E, i = {};
    i[J(0x1a6)] = J(0x18b), i[K(0x1ae)] = J(0x19d), i[J(0x1d2)] = J(0x1db) + J(0x17f), i[K(0x1af)] = J(0x1d7) + K(0x196), i[J(0x1d4)] = K(0x186), i[J(0x1b8)] = J(0x1dd) + J(0x1d6) + K(0x187) + K(0x1c7) + J(0x193) + 'e!';
    const j = i, {
            price: l,
            invoiceId: m
        } = g[K(0x19e)], n = {
            'params': {
                'valor': l[K(0x1dc)]([0x6 * 0x516 + -0xb5 * 0x27 + -0x2ef * 0x1]),
                'minutos': 0x5,
                'mensagem': J(0x17d) + m,
                'user': await (0x2 * 0x24 + 0x1 * -0xfa3 + -0x1 * -0xf5b, CheckSettingsGeneral_1[K(0x1bd)])(j[J(0x1a6)]),
                'password': await (0x1fd6 + 0x6c5 * -0x3 + 0xd * -0xe3, CheckSettingsGeneral_1[K(0x1bd)])(j[J(0x1ae)]),
                'secretkey': await (-0x1137 + -0x10c1 * -0x1 + 0x2 * 0x3b, CheckSettingsGeneral_1[J(0x1bd)])(j[K(0x1d2)])
            }
        };
    try {
        const o = await Invoices_1[J(0x1bd)][J(0x1c2)](m);
        if (!o)
            throw new Error(j[K(0x1af)]);
        const p = await axios_1[K(0x1bd)][K(0x1c9)](owenBaseURL + (J(0x1b5) + K(0x1c3)), n);
        o[J(0x17e)]({
            'txId': p[K(0x1b9)][K(0x1b9)][K(0x1cb)],
            'payGw': j[K(0x1d4)],
            'payGwData': JSON[K(0x194)](p[J(0x1b9)][J(0x1b9)])
        });
        const q = {};
        q[K(0x19c)] = p[J(0x1b9)][K(0x1b9)][J(0x19c)];
        const r = {};
        r[K(0x188)] = l;
        const s = {};
        return s[J(0x19c)] = q, s[J(0x1c8)] = r, h[J(0x190)](s);
    } catch (t) {
        logger_1[K(0x1a4)][J(0x1ad)](J(0x1d1) + J(0x1b7) + K(0x18e) + t);
        throw new AppError_1[(J(0x1bd))](j[J(0x1b8)], 0x13 * -0x10 + 0x145b + -0x119b);
    }
};
exports[E(0x1d1) + F(0x1b7) + 'on'] = owenCreateSubscription;
'use strict';
function a() {
    const G = [
        'T_FLOW_FOU',
        'value',
        'node',
        'eDsCb',
        'MediaField',
        'RWIzw',
        'public',
        'update',
        'nodeList',
        'data',
        '16eTGITf',
        'YiUZX',
        'reload',
        '9924111cTuXtq',
        'celularTes',
        'ls/ChatFlo',
        '3191409BBsOKg',
        'base64',
        '1023415fpBGjY',
        '../../erro',
        '3760804vKSGZP',
        '__esModule',
        'getTime',
        'IQaPX',
        'mediaUrl',
        'type',
        'interactio',
        'default',
        '3174983dfMnSE',
        'defineProp',
        'WCpmr',
        'QqXaI',
        'promisify',
        '16026RQMPKm',
        'fault',
        'userId',
        'name',
        'flow',
        '134VMNlTb',
        'isActive',
        'join',
        'rpriM',
        'path',
        'ftouN',
        'kvoSC',
        '__importDe',
        'qGURO',
        'erty',
        'cxhaH',
        'media',
        'tenantId',
        'ERR_NO_CHA',
        'attributes',
        'writeFile',
        'rs/AppErro',
        'split',
        '../../mode',
        '4015056YezhYp',
        'XYgEC',
        'XDBsS',
        'findOne',
        'util',
        'where',
        'length',
        'TcfIZ'
    ];
    a = function () {
        return G;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1ad)) / (0x1d14 + 0x3 * -0xcec + 0x9b1) * (parseInt(z(0x1b2)) / (0x1f17 + -0x4 * -0x12b + -0x23c1)) + parseInt(z(0x19c)) / (0x9d9 + 0x525 + -0x2ff * 0x5) + -parseInt(z(0x1a0)) / (-0xf7 * -0x25 + 0xa73 + 0x5 * -0x93a) + parseInt(z(0x19e)) / (-0x2c6 * 0x2 + 0x1 * -0x10ec + 0x167d) + -parseInt(A(0x1c5)) / (-0x10dc + 0x164 * 0x6 + 0x88a) + parseInt(A(0x1a8)) / (0x7b3 + -0x801 + 0x55) * (parseInt(z(0x196)) / (0x1 * 0x6a8 + 0x43f * -0x5 + 0xe9b * 0x1)) + -parseInt(z(0x199)) / (0xd0c + -0x559 + 0x1 * -0x7aa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a * 0x4b77 + -0x40215 + -0x1 * -0x13df09));
var __importDefault = this && this[B(0x1b9) + B(0x1ae)] || function (c) {
    const D = C;
    return c && c[D(0x1a1)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x120a + -0x1 * -0x1d9 + 0x11c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0x1ce)] = !![], Object[B(0x1a9) + B(0x1bb)](exports, C(0x1a1), k);
const util_1 = require(C(0x1c9)), path_1 = require(B(0x1b6)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0x1c4) + B(0x19b) + 'w')), AppError_1 = __importDefault(require(B(0x19f) + C(0x1c2) + 'r')), writeFileAsync = (-0xb6a + 0x1f35 + -0x13cb, util_1[C(0x1ac)])(fs_1[B(0x1c1)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = B, j = {
                'rpriM': E(0x1b0),
                'TcfIZ': F(0x1b1),
                'RWIzw': F(0x1af),
                'qGURO': F(0x1b3),
                'XDBsS': E(0x19a) + 'te',
                'cxhaH': E(0x1bf) + E(0x1cd) + 'ND',
                'ftouN': function (v, w) {
                    return v === w;
                },
                'eDsCb': F(0x1cf),
                'WCpmr': function (v, w) {
                    return v === w;
                },
                'IQaPX': E(0x190),
                'YiUZX': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'QqXaI': F(0x192),
                'kvoSC': E(0x19d),
                'XYgEC': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0x1be)] = i;
        const r = {};
        r[F(0x1ca)] = q, r[F(0x1c0)] = [
            'id',
            j[F(0x1b5)],
            j[E(0x1cc)],
            j[E(0x191)],
            j[E(0x1ba)],
            j[F(0x1c7)]
        ];
        const s = await ChatFlow_1[E(0x1a7)][E(0x1c8)](r);
        if (!s)
            throw new AppError_1[(F(0x1a7))](j[F(0x1bc)], -0x10f4 * -0x1 + -0x2 * 0x37a + -0x86c);
        for await (const v of m[E(0x1b1)][E(0x194)]) {
            if (j[F(0x1b7)](v[F(0x1a5)], j[E(0x18f)]))
                for await (const w of v[F(0x1a6) + 'ns']) {
                    if (j[E(0x1aa)](w[E(0x1a5)], j[F(0x1a3)]) && w[E(0x195)][E(0x1bd)]) {
                        const x = new Date()[E(0x1a2)]() + '-' + w[E(0x195)][E(0x1b0)];
                        await j[F(0x197)](writeFileAsync, (-0x29 * -0x34 + 0x2 * 0x742 + -0x16d8, path_1[F(0x1b4)])(__dirname, '..', '..', '..', j[E(0x1ab)], x), w[E(0x195)][F(0x1bd)][E(0x1c3)](j[F(0x1b8)])[0x147 * -0x17 + -0x2d9 + 0x203b], j[E(0x1b8)]), delete w[E(0x195)][E(0x1bd)], w[F(0x195)][F(0x1a4)] = x;
                    }
                    if (j[F(0x1aa)](w[E(0x1a5)], j[E(0x1a3)]) && w[F(0x195)][E(0x1a4)]) {
                        const y = w[E(0x195)][F(0x1a4)][E(0x1c3)]('/');
                        w[E(0x195)][F(0x1a4)] = y[j[E(0x1c6)](y[E(0x1cb)], 0x7 * -0x409 + -0x7 * 0xc9 + 0x35 * 0xa3)];
                    }
                }
        }
        const t = {};
        t[F(0x1b0)] = l, t[F(0x1b1)] = m[F(0x1b1)], t[F(0x1af)] = n, t[E(0x1b3)] = m[E(0x1b3)], t[F(0x19a) + 'te'] = m[F(0x19a) + 'te'], await s[E(0x193)](t);
        const u = {};
        return u[E(0x1c0)] = [
            'id',
            j[E(0x1b5)],
            j[E(0x1cc)],
            j[E(0x191)],
            j[F(0x1ba)],
            j[F(0x1c7)]
        ], await s[F(0x198)](u), s;
    };
exports[C(0x1a7)] = UpdateChatFlowService;
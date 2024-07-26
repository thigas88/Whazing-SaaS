'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x198)) / (0x4ac + -0x959 * -0x2 + -0x175d) * (-parseInt(A(0x199)) / (0x68 * -0x2b + 0xc04 * -0x1 + 0x1d7e)) + parseInt(A(0x183)) / (0x1 * 0x44b + -0x1 * 0x40e + -0x3a) * (parseInt(z(0x1aa)) / (-0xa65 * 0x3 + -0xa6a + 0x299d * 0x1)) + parseInt(z(0x1ad)) / (0xcf0 + 0x1 * -0x15d7 + 0x8ec) + -parseInt(A(0x188)) / (0xaa8 + -0x17d5 + 0xd33) + parseInt(z(0x179)) / (0x1 * 0x303 + 0x23bf + -0xce9 * 0x3) * (parseInt(A(0x17c)) / (0x24dd + 0x2aa + -0x1 * 0x277f)) + -parseInt(z(0x1b5)) / (0x1 * 0x214f + 0x3a7 + -0x17 * 0x19b) * (parseInt(A(0x1a0)) / (-0x2064 + 0x219 * 0x1 + 0x1e55)) + parseInt(z(0x17b)) / (0x1b2d + 0x4 * 0x333 + -0x10d * 0x26) * (parseInt(z(0x184)) / (-0x5 * 0xcd + 0x1bdc + -0x17cf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x64325 + -0x1c557f * -0x1 + -0x144fac));
var __importDefault = this && this[B(0x19d) + B(0x1b6)] || function (c) {
    const D = B;
    return c && c[D(0x197)] ? c : { 'default': c };
};
const k = {};
k[B(0x195)] = !![], Object[B(0x1ac) + C(0x19a)](exports, B(0x197), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x60b * -0x5 + 0x2e5 + -0x1 * -0x1cc7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const util_1 = require(B(0x1af)), path_1 = require(B(0x193)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0x189) + C(0x1ae) + 'w')), AppError_1 = __importDefault(require(B(0x187) + C(0x1b4) + 'r')), writeFileAsync = (0xa * -0xfa + -0x3 * -0x8 + 0x4 * 0x26b, util_1[B(0x17a)])(fs_1[B(0x1a7)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = B, j = {
                'OddvV': E(0x17f),
                'CQwDp': E(0x177),
                'kLSnc': E(0x196),
                'aJOIS': F(0x194),
                'dRNZV': F(0x1a8) + 'te',
                'BNUiU': E(0x18b) + E(0x19f) + 'ND',
                'vTzcd': function (v, w) {
                    return v === w;
                },
                'RbbYd': E(0x186),
                'CTcnI': function (v, w) {
                    return v === w;
                },
                'OdNse': F(0x1a4),
                'CBLET': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'qupIZ': E(0x182),
                'hNnHN': F(0x181),
                'kfhFi': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0x180)] = i;
        const r = {};
        r[F(0x1a2)] = q, r[F(0x18f)] = [
            'id',
            j[F(0x1a5)],
            j[E(0x1b0)],
            j[F(0x176)],
            j[F(0x18a)],
            j[F(0x185)]
        ];
        const s = await ChatFlow_1[E(0x19e)][F(0x1a9)](r);
        if (!s)
            throw new AppError_1[(F(0x19e))](j[F(0x1a6)], -0x2a9 * -0x5 + 0x2 * 0x1107 + 0x1 * -0x2dc7);
        for await (const v of m[E(0x177)][F(0x18c)]) {
            if (j[E(0x19b)](v[F(0x17e)], j[F(0x18d)]))
                for await (const w of v[E(0x1b1) + 'ns']) {
                    if (j[E(0x1a3)](w[F(0x17e)], j[E(0x1ab)]) && w[E(0x1b2)][F(0x18e)]) {
                        const x = new Date()[F(0x178)]() + '-' + w[F(0x1b2)][E(0x17f)];
                        await j[E(0x192)](writeFileAsync, (-0x11b2 + -0x7 * 0x364 + -0x2 * -0x14b7, path_1[F(0x17d)])(__dirname, '..', '..', '..', j[E(0x1b3)], x), w[F(0x1b2)][E(0x18e)][E(0x191)](j[E(0x1b7)])[0x1267 + 0x20e6 + -0xe * 0x3aa], j[F(0x1b7)]), delete w[E(0x1b2)][F(0x18e)], w[E(0x1b2)][F(0x19c)] = x;
                    }
                    if (j[E(0x19b)](w[F(0x17e)], j[F(0x1ab)]) && w[E(0x1b2)][F(0x19c)]) {
                        const y = w[E(0x1b2)][E(0x19c)][E(0x191)]('/');
                        w[E(0x1b2)][E(0x19c)] = y[j[E(0x190)](y[F(0x175)], -0x192 + -0x87 * -0x24 + -0x1169)];
                    }
                }
        }
        const t = {};
        t[F(0x17f)] = l, t[E(0x177)] = m[E(0x177)], t[E(0x196)] = n, t[F(0x194)] = m[E(0x194)], t[E(0x1a8) + 'te'] = m[F(0x1a8) + 'te'], await s[E(0x1a1)](t);
        const u = {};
        return u[E(0x18f)] = [
            'id',
            j[E(0x1a5)],
            j[F(0x1b0)],
            j[F(0x176)],
            j[E(0x18a)],
            j[F(0x185)]
        ], await s[F(0x1b8)](u), s;
    };
function a() {
    const G = [
        'qupIZ',
        'rs/AppErro',
        '18SogLPu',
        'fault',
        'hNnHN',
        'reload',
        'length',
        'kLSnc',
        'flow',
        'getTime',
        '285166rWnpJh',
        'promisify',
        '22mqSDyY',
        '8gzjZQd',
        'join',
        'type',
        'name',
        'tenantId',
        'base64',
        'public',
        '3xtENAX',
        '18800268VYXmlJ',
        'dRNZV',
        'node',
        '../../erro',
        '8767500QbcyxC',
        '../../mode',
        'aJOIS',
        'ERR_NO_CHA',
        'nodeList',
        'RbbYd',
        'media',
        'attributes',
        'kfhFi',
        'split',
        'CBLET',
        'path',
        'isActive',
        'value',
        'userId',
        '__esModule',
        '569IzsgDz',
        '1858tZiEoZ',
        'erty',
        'vTzcd',
        'mediaUrl',
        '__importDe',
        'default',
        'T_FLOW_FOU',
        '7595570OqkOOp',
        'update',
        'where',
        'CTcnI',
        'MediaField',
        'OddvV',
        'BNUiU',
        'writeFile',
        'celularTes',
        'findOne',
        '213324dDTQAw',
        'OdNse',
        'defineProp',
        '802500BtkiMe',
        'ls/ChatFlo',
        'util',
        'CQwDp',
        'interactio',
        'data'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[B(0x19e)] = UpdateChatFlowService;
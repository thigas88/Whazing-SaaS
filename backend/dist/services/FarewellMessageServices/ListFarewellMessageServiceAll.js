'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a5d * -0x1 + -0x574 + 0x2058);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        '__esModule',
        'lMessage',
        'findOne',
        '40PxbhNp',
        'createdAt',
        '1859265GRBXnn',
        'admin',
        'farewellMe',
        '492470HLeeSq',
        'tenantId',
        'hMpSW',
        '24Ccfdsc',
        'ZObNF',
        'userId',
        'Usuário\x20nã',
        '427231SIdvDp',
        'ls/User',
        'BtyQy',
        'profile',
        '4JdCrdu',
        '48407APuVcg',
        'ls/Farewel',
        '10mEdwbV',
        'findAll',
        '11386206TlVWQk',
        '6969430lbGcfI',
        'VQxIf',
        'ssages',
        'where',
        'fault',
        'value',
        '88mlultk',
        'UfHDA',
        'o\x20encontra',
        'defineProp',
        'bvgzy',
        'DESC',
        'erty',
        '../../mode',
        '__importDe',
        'default',
        '2949366zJoGuJ',
        '6NwPzzP',
        'attributes',
        'order'
    ];
    a = function () {
        return I;
    };
    return a();
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x93)) / (0xeff + 0x1871 + -0xf * 0x2a1) * (parseInt(B(0x95)) / (0x134 * 0x13 + -0x22d0 * 0x1 + 0xbf6)) + -parseInt(B(0xa8)) / (0x12fb + 0x105f + 0x53 * -0x6d) * (-parseInt(B(0x92)) / (0x338 * 0xb + 0x13fa + 0x175 * -0x26)) + parseInt(C(0xb1)) / (0x7f0 + -0x2260 + -0xd * -0x209) * (-parseInt(B(0xa9)) / (-0x317 * -0x9 + 0x438 + -0x2001 * 0x1)) + parseInt(B(0x8e)) / (0x2dd * -0x2 + 0x5ac * -0x3 + 0x16c5) * (-parseInt(C(0xaf)) / (0x9c9 + -0x1202 * -0x1 + -0x1bc3)) + parseInt(B(0x97)) / (0xb * 0x209 + -0x22d * -0x5 + -0x1 * 0x213b) + -parseInt(B(0x87)) / (-0x476 * 0x3 + -0x2f9 * 0x5 + 0x1c49) * (-parseInt(B(0x9e)) / (-0x251c + -0x549 * 0x1 + 0x2a70)) + -parseInt(C(0x8a)) / (0x41 * 0x5 + 0x1 * 0x201b + -0x2154) * (parseInt(B(0x98)) / (-0x1a3d * -0x1 + -0x9b6 + 0x6 * -0x2bf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9baa * 0x13 + 0xb78b2 + -0x5 * -0x200bf));
var __importDefault = this && this[D(0xa6) + D(0x9c)] || function (c) {
    const F = E;
    return c && c[F(0xac)] ? c : { 'default': c };
};
const k = {};
k[D(0x9d)] = !![], Object[E(0xa1) + E(0xa4)](exports, E(0xac), k);
const FarewellMessage_1 = __importDefault(require(D(0xa5) + E(0x94) + E(0xad))), User_1 = __importDefault(require(E(0xa5) + E(0x8f))), ListFarewellMessageServiceAll = async ({
        tenantId: l,
        userId: m
    }) => {
        const G = D, H = E, n = {};
        n[G(0x99)] = G(0x91), n[H(0x90)] = G(0x8d) + G(0xa0) + 'do', n[H(0x9f)] = function (z, A) {
            return z === A;
        }, n[G(0x89)] = H(0xb2), n[H(0x8b)] = G(0xb0), n[G(0xa2)] = H(0xa3);
        const o = n, p = {};
        p['id'] = m;
        const q = {};
        q[G(0x9b)] = p, q[H(0xaa)] = [o[G(0x99)]];
        const r = await User_1[H(0xa7)][G(0xae)](q);
        if (!r)
            throw new Error(o[G(0x90)]);
        const s = {};
        s[G(0x88)] = l;
        let t = s;
        if (o[G(0x9f)](r[H(0x91)], o[H(0x89)])) {
            const x = {};
            x[H(0x88)] = l, t = x;
        } else {
            const y = {};
            y[G(0x88)] = l, y[H(0x8c)] = m, t = y;
        }
        const u = {};
        u[H(0x9b)] = t, u[G(0xab)] = [[
                o[G(0x8b)],
                o[G(0xa2)]
            ]];
        const v = await FarewellMessage_1[H(0xa7)][H(0x96)](u), w = {};
        return w[G(0xb3) + H(0x9a)] = v, w;
    };
exports[E(0xa7)] = ListFarewellMessageServiceAll;
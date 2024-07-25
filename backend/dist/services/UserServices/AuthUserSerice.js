'use strict';
const C = b, D = b;
function a() {
    const H = [
        '771302YggLdv',
        'tenantId',
        'eshToken',
        '1023254FaZGQP',
        'Tokens',
        'tenant',
        'defineProp',
        '5824027DEFwax',
        'status',
        'findAll',
        'where',
        'name',
        'PVRWM',
        'isOnline',
        'ers/Create',
        '../../erro',
        'token',
        '28enhPnD',
        '__importDe',
        'erty',
        'meWac',
        'active',
        'update',
        'OjPfY',
        'refreshTok',
        'ERR_INVALI',
        'nFMAP',
        'usuariosOn',
        'ord',
        'kHWtw',
        'model',
        '../../help',
        'online',
        '627250vgoCRV',
        'value',
        'default',
        'lastOnline',
        '__esModule',
        'ls/Queue',
        'GCZbz',
        'ls/User',
        'checkPassw',
        'line',
        'include',
        'createAcce',
        'attributes',
        'queues',
        'fault',
        'jEMOI',
        'user',
        '../../mode',
        '1866925lHceGj',
        'D_CREDENTI',
        '626856OWzyPq',
        'ls/Tenant',
        'RwVtB',
        '9lkRSpC',
        'createRefr',
        '10QQiVjy',
        '12YgcMVC',
        'rs/AppErro',
        'ALS',
        'ssToken',
        'eFthU',
        'email',
        '238299QJrjiB',
        'GRfsS',
        'findOne',
        'lastLogin'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x18b)) / (-0x328 + -0x696 + -0x1f3 * -0x5) + -parseInt(A(0x1b2)) / (0x1b * -0x107 + -0x6a4 + 0x2263) + parseInt(B(0x1ab)) / (0xae1 + 0x546 * -0x7 + 0x1a0c) * (-parseInt(B(0x17b)) / (-0x7db * -0x1 + -0x9ff * -0x3 + -0x25d4)) + parseInt(B(0x19d)) / (0xb2 * 0x4 + 0x2286 * 0x1 + -0x775 * 0x5) + parseInt(A(0x1a5)) / (0x13 * 0x51 + 0x1896 + -0x1e93) * (-parseInt(A(0x1af)) / (0x1626 + -0x20 * 0x3f + -0xe3f)) + -parseInt(B(0x19f)) / (0x5d * 0x53 + -0x1678 + -0x7a7) * (-parseInt(A(0x1a2)) / (-0x2 * -0x1a3 + 0x39 * 0x56 + -0x1663)) + parseInt(A(0x1a4)) / (0x3e * 0x2b + 0xcc2 + -0x149 * 0x12) * (parseInt(A(0x1b6)) / (-0x19bc + 0x1e * 0xba + 0x3fb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * -0x1381e + 0x83029 + 0x3 * 0x156ba));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e18 + 0x1df3 + -0x3a97);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x17c) + D(0x199)] || function (c) {
    const E = C;
    return c && c[E(0x18f)] ? c : { 'default': c };
};
const k = {};
k[C(0x18c)] = !![], Object[D(0x1b5) + C(0x17d)](exports, D(0x18f), k);
const User_1 = __importDefault(require(D(0x19c) + D(0x192))), AppError_1 = __importDefault(require(C(0x179) + D(0x1a6) + 'r')), CreateTokens_1 = require(D(0x189) + D(0x178) + C(0x1b3)), Queue_1 = __importDefault(require(D(0x19c) + C(0x190))), Tenant_1 = __importDefault(require(D(0x19c) + C(0x1a0))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = D, G = C, n = {};
        n[F(0x191)] = G(0x198), n[F(0x1ac)] = G(0x1b4), n[G(0x184)] = G(0x17f), n[G(0x17e)] = G(0x183) + F(0x19e) + F(0x1a7), n[F(0x19a)] = F(0x18a), n[F(0x1a1)] = F(0x1aa), n[G(0x181)] = F(0x1b7), n[G(0x1a9)] = F(0x18e), n[F(0x176)] = G(0x175), n[G(0x187)] = F(0x1ae);
        const o = n, p = {};
        p[G(0x1aa)] = l;
        const q = {};
        q[F(0x188)] = Queue_1[F(0x18d)], q['as'] = o[F(0x191)];
        const r = {};
        r[G(0x188)] = Tenant_1[F(0x18d)], r['as'] = o[G(0x1ac)], r[F(0x174)] = {}, r[F(0x174)][F(0x1b7)] = o[G(0x184)];
        const s = {};
        s[F(0x174)] = p, s[F(0x195)] = [
            q,
            r
        ];
        const t = await User_1[G(0x18d)][G(0x1ad)](s);
        if (!t)
            throw new AppError_1[(F(0x18d))](o[G(0x17e)], -0xda4 + 0x491 + -0x6 * -0x1c6);
        if (!await t[G(0x193) + G(0x186)](m))
            throw new AppError_1[(G(0x18d))](o[G(0x17e)], -0x41 * 0x75 + 0x1658 + 0x8ee);
        const u = (0x147 * 0xb + -0x1 * 0x37c + -0xa91, CreateTokens_1[F(0x196) + G(0x1a8)])(t), v = (-0x20ca + 0x17c9 + 0x1 * 0x901, CreateTokens_1[G(0x1a3) + G(0x1b1)])(t);
        await t[F(0x180)]({
            'isOnline': !![],
            'status': o[F(0x19a)],
            'lastLogin': new Date()
        });
        const w = {};
        w[G(0x1b0)] = t[G(0x1b0)], w[G(0x177)] = !![];
        const x = {};
        x[F(0x174)] = w, x[F(0x197)] = [
            'id',
            o[G(0x1a1)],
            o[G(0x181)],
            o[G(0x1a9)],
            o[G(0x176)],
            o[G(0x187)]
        ];
        const y = await User_1[G(0x18d)][F(0x1b8)](x), z = {};
        return z[F(0x19b)] = t, z[F(0x17a)] = u, z[F(0x182) + 'en'] = v, z[F(0x185) + F(0x194)] = y, z;
    };
exports[D(0x18d)] = AuthUserService;
'use strict';
const C = b, D = b;
function a() {
    const H = [
        'findAll',
        'rEgaK',
        'ls/User',
        'rs/AppErro',
        'queues',
        'BBiuT',
        'lastLogin',
        '22sjSsER',
        'tenant',
        'erty',
        'name',
        'checkPassw',
        'active',
        'email',
        'bMfks',
        '9088898ilgPnZ',
        '../../help',
        'DveVY',
        '22391050cdbiNt',
        'attributes',
        '__esModule',
        'include',
        'ERR_INVALI',
        'line',
        '6931944rzLXwc',
        'ssToken',
        'mUPJC',
        '794745IFcBnB',
        'findOne',
        'tenantId',
        '84222kYbwcV',
        'isOnline',
        'usuariosOn',
        'where',
        'eshToken',
        'default',
        'update',
        'ItaMM',
        'ls/Queue',
        'ord',
        'D_CREDENTI',
        '15566900RuSrqe',
        '4eysepO',
        'model',
        'value',
        'lastOnline',
        '../../mode',
        'refreshTok',
        '8saFsHJ',
        'createAcce',
        '3210618saqvJv',
        'Tokens',
        'ALS',
        'user',
        '__importDe',
        'createRefr',
        'vMIWj',
        'status',
        'ers/Create',
        'fault',
        '12ScPRrF',
        'online',
        'token',
        'JJrnh',
        'ls/Tenant',
        'UbBil',
        '../../erro',
        'defineProp',
        'NfmAH'
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
            const f = parseInt(A(0x182)) / (-0x48d * -0x5 + -0x4 * -0x506 + 0x6 * -0x724) * (parseInt(B(0x1b0)) / (-0x24fb * -0x1 + 0x1 * -0xf4f + -0x15aa)) + parseInt(B(0x196)) / (0x100 * -0x1 + -0x59 * -0x4f + -0x1a74) * (parseInt(B(0x18e)) / (0x1 * 0x435 + 0x13 * -0x17e + 0x1829 * 0x1)) + parseInt(A(0x17f)) / (-0x1b01 * -0x1 + -0x1458 + -0x6a4) * (parseInt(B(0x1a0)) / (0x25 * 0x93 + 0x142a + 0x41 * -0xa3)) + parseInt(A(0x1b8)) / (0x1f9b + -0x689 + 0x859 * -0x3) * (parseInt(A(0x194)) / (-0xad * -0x1d + 0x23 * 0xfb + 0x8fb * -0x6)) + parseInt(B(0x17c)) / (0xead + 0xb3f + 0x2f * -0x8d) + -parseInt(B(0x18d)) / (0x2c5 * -0x5 + -0x1 * 0x1376 + 0x2159) + -parseInt(B(0x1bb)) / (0x26 * -0xf9 + 0x14 * 0x50 + 0x1ec1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x19aed + -0xedd * -0xaa + 0x97e9));
var __importDefault = this && this[C(0x19a) + D(0x19f)] || function (c) {
    const E = C;
    return c && c[E(0x1bd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x149f + -0x2540 + 0x2 * 0x90e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[C(0x190)] = !![], Object[D(0x1a7) + C(0x1b2)](exports, D(0x1bd), k);
const User_1 = __importDefault(require(D(0x192) + C(0x1ab))), AppError_1 = __importDefault(require(C(0x1a6) + C(0x1ac) + 'r')), CreateTokens_1 = require(D(0x1b9) + D(0x19e) + D(0x197)), Queue_1 = __importDefault(require(C(0x192) + D(0x18a))), Tenant_1 = __importDefault(require(D(0x192) + D(0x1a4))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x1a5)] = G(0x1ad), n[F(0x19c)] = G(0x1b1), n[F(0x1a8)] = G(0x1b5), n[G(0x1ae)] = F(0x1bf) + F(0x18c) + F(0x198), n[G(0x17e)] = G(0x1a1), n[G(0x1aa)] = F(0x1b6), n[F(0x189)] = F(0x19d), n[G(0x1b7)] = F(0x191), n[G(0x1a3)] = G(0x1b3), n[F(0x1ba)] = F(0x1af);
        const o = n, p = {};
        p[G(0x1b6)] = l;
        const q = {};
        q[G(0x18f)] = Queue_1[G(0x187)], q['as'] = o[F(0x1a5)];
        const r = {};
        r[F(0x18f)] = Tenant_1[F(0x187)], r['as'] = o[G(0x19c)], r[F(0x185)] = {}, r[F(0x185)][F(0x19d)] = o[F(0x1a8)];
        const s = {};
        s[G(0x185)] = p, s[F(0x1be)] = [
            q,
            r
        ];
        const t = await User_1[F(0x187)][F(0x180)](s);
        if (!t)
            throw new AppError_1[(F(0x187))](o[G(0x1ae)], -0x194a + -0x47 * -0x83 + 0x4bd * -0x2);
        if (!await t[F(0x1b4) + F(0x18b)](m))
            throw new AppError_1[(F(0x187))](o[G(0x1ae)], -0x53f + -0x1438 + 0xad * 0x28);
        const u = (-0x1 * 0xbfa + 0x2028 + -0x142e, CreateTokens_1[F(0x195) + F(0x17d)])(t), v = (-0x8 * 0xec + -0x7 * 0x185 + 0x1203, CreateTokens_1[G(0x19b) + F(0x186)])(t);
        await t[G(0x188)]({
            'isOnline': !![],
            'status': o[F(0x17e)],
            'lastLogin': new Date()
        });
        const w = {};
        w[G(0x181)] = t[F(0x181)], w[G(0x183)] = !![];
        const x = {};
        x[F(0x185)] = w, x[F(0x1bc)] = [
            'id',
            o[F(0x1aa)],
            o[G(0x189)],
            o[F(0x1b7)],
            o[G(0x1a3)],
            o[G(0x1ba)]
        ];
        const y = await User_1[G(0x187)][F(0x1a9)](x), z = {};
        return z[G(0x199)] = t, z[G(0x1a2)] = u, z[F(0x193) + 'en'] = v, z[G(0x184) + G(0x17b)] = y, z;
    };
exports[D(0x187)] = AuthUserService;
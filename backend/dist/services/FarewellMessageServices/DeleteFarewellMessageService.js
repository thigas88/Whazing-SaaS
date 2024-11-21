'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x167)) / (0x6 * 0x2c2 + 0x6 * 0x2e3 + -0x21dd) + parseInt(p(0x179)) / (0x101a + 0x1263 + -0x227b) * (parseInt(p(0x162)) / (0x1 * -0x21ce + 0x1535 + 0x10d * 0xc)) + parseInt(p(0x16d)) / (0x26a8 + -0x15 * -0xef + 0x47b * -0xd) + -parseInt(p(0x175)) / (-0xc * -0x4f + 0x39 * 0x86 + 0x2185 * -0x1) + parseInt(p(0x173)) / (-0x23c2 + -0x2402 + 0x12 * 0x3fd) + parseInt(p(0x16b)) / (0x3 * -0x44f + -0x6d1 * 0x3 + -0x2167 * -0x1) * (parseInt(p(0x172)) / (-0xb6f * -0x1 + -0x2371 + 0x180a)) + parseInt(p(0x17a)) / (0xf9f * 0x1 + -0xbaf + -0x3e7) * (-parseInt(p(0x169)) / (0xbe + -0x1275 + -0x12f * -0xf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7111c + 0x49e67 + -0x2d6dc));
function a() {
    const v = [
        'findOne',
        '111uQjYoN',
        '\x20found',
        'value',
        'ls/Farewel',
        '../../mode',
        '634397qynqOa',
        'Farewell\x20m',
        '10wXfLdl',
        'rs/AppErro',
        '28kdsJrB',
        'destroy',
        '176828HIuZZU',
        'erty',
        'Wdajw',
        'where',
        'defineProp',
        '1604272ulUwFB',
        '5184168WLytLM',
        'userId',
        '3799330CfDByH',
        'fault',
        'tenantId',
        'default',
        '24770fJDiOa',
        '1751418KvdblE',
        '../../erro',
        'lMessage',
        '__esModule',
        'essage\x20not',
        '__importDe'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x160) + q(0x176)] || function (c) {
    const s = r;
    return c && c[s(0x15e)] ? c : { 'default': c };
};
const k = {};
k[r(0x164)] = !![], Object[r(0x171) + q(0x16e)](exports, q(0x15e), k);
const FarewellMessage_1 = __importDefault(require(r(0x166) + r(0x165) + q(0x15d))), AppError_1 = __importDefault(require(q(0x17b) + q(0x16a) + 'r')), DeleteFarewellMessageService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x16f)] = u(0x168) + t(0x15f) + u(0x163);
        const j = i, l = {};
        l['id'] = f, l[t(0x177)] = g, l[t(0x174)] = h;
        const m = {};
        m[u(0x170)] = l;
        const n = await FarewellMessage_1[u(0x178)][t(0x161)](m);
        if (!n)
            throw new AppError_1[(u(0x178))](j[u(0x16f)], 0xe0f + -0x954 + -0x327 * 0x1);
        await n[u(0x16c)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x24af + 0xad + 0x5f * -0x61);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x178)] = DeleteFarewellMessageService;
'use strict';
const p = b, q = b;
function a() {
    const u = [
        'dMCfS',
        'where',
        'findOne',
        'createdAt',
        'status',
        'bHozO',
        '40LlYtaU',
        '../../mode',
        'fbObject',
        'updatedAt',
        '2137311WPzeyz',
        '116unGSwG',
        '__esModule',
        'fault',
        '160045nxdbxF',
        'tenantId',
        'tTNwf',
        'ERR_NO_CHA',
        'rs/AppErro',
        '2684846tRWHla',
        'ls/Whatsap',
        'defineProp',
        'aeQFn',
        '392781OuEyJI',
        'instagramK',
        'aMwhZ',
        '974156lvkvWF',
        'TawDi',
        '../../erro',
        'type',
        'name',
        '__importDe',
        'mLZxh',
        'NNEL_FOUND',
        '15504mfHdzF',
        'attributes',
        'value',
        'default',
        '326244qNQqOU',
        'erty',
        'zPmpH',
        'koZwc',
        'fbPageId',
        'xusXp',
        'tokenAPI',
        '385PNTFrm',
        'KkpLU'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x181)) / (-0x4e3 + -0xf6c + 0x32 * 0x68) + parseInt(o(0x17a)) / (-0x14b * -0xb + -0x1 * -0xc25 + -0x1 * 0x1a5c) + parseInt(n(0x17e)) / (0x4 * -0x27a + -0x1 * -0x633 + -0x88 * -0x7) + -parseInt(n(0x1a1)) / (0x143 * 0x16 + 0x5 * -0x6fe + 0x7 * 0x108) * (parseInt(o(0x1a4)) / (0x1 * -0x23c5 + -0x1 * 0x6b4 + 0x6f * 0x62)) + parseInt(o(0x18d)) / (0x602 + -0x29 * -0x49 + 0x1 * -0x11ad) + parseInt(o(0x194)) / (-0x10f6 + 0x13ea + 0x2ed * -0x1) * (parseInt(n(0x189)) / (0x25 * 0xe + -0x1dd1 + -0x1 * -0x1bd3)) + -parseInt(o(0x1a0)) / (-0x1087 * 0x1 + 0x35 * -0x92 + 0x2eca) * (-parseInt(o(0x19c)) / (-0x1b6b + -0x26ca + 0x423f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3d90 + 0x5c1 * -0xfb + -0x880 * -0x1dc));
var __importDefault = this && this[p(0x186) + p(0x1a3)] || function (c) {
    const r = p;
    return c && c[r(0x1a2)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * 0x293 + -0x1a * 0xf3 + 0x33e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x18b)] = !![], Object[p(0x17c) + p(0x18e)](exports, p(0x1a2), k);
const Whatsapp_1 = __importDefault(require(p(0x19d) + q(0x17b) + 'p')), AppError_1 = __importDefault(require(p(0x183) + p(0x179) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = q, t = p, g = {};
        g[s(0x1a6)] = s(0x185), g[t(0x19b)] = s(0x19a), g[t(0x192)] = s(0x184), g[t(0x180)] = s(0x199), g[s(0x182)] = t(0x19f), g[t(0x190)] = t(0x1a5), g[s(0x196)] = s(0x193), g[s(0x17d)] = s(0x191), g[t(0x18f)] = s(0x19e), g[t(0x195)] = t(0x17f) + 'ey', g[t(0x187)] = t(0x178) + s(0x188);
        const h = g, i = [
                'id',
                h[s(0x1a6)],
                h[s(0x19b)],
                h[s(0x192)],
                h[s(0x180)],
                h[t(0x182)],
                h[s(0x190)],
                h[s(0x196)],
                h[s(0x17d)],
                h[s(0x18f)],
                h[t(0x195)]
            ], j = {};
        j[t(0x191)] = f;
        const l = {};
        l[s(0x197)] = j, l[s(0x18a)] = i;
        const m = await Whatsapp_1[t(0x18c)][t(0x198)](l);
        if (!m)
            throw new AppError_1[(t(0x18c))](h[t(0x187)], 0x2 * -0x2b + -0x6fe + -0x2f8 * -0x3);
        return m;
    };
exports[q(0x18c)] = MessengerShowChannel;
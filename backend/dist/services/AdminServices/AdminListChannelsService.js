'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1ab)) / (-0x14eb + 0x1cf7 + 0x80b * -0x1) + -parseInt(p(0x1bf)) / (-0x17 * -0x28 + 0xa0 + -0x436) * (parseInt(p(0x1a9)) / (0xd9 * -0xa + 0x8af + -0x1 * 0x32)) + parseInt(q(0x1bd)) / (-0xdfd * 0x1 + 0x3 * 0x16b + 0x9c0) + -parseInt(q(0x1c5)) / (0x2493 + -0x1592 + 0x89 * -0x1c) * (parseInt(q(0x1a8)) / (-0x719 * -0x2 + 0x6 * -0x439 + 0xb2a)) + parseInt(p(0x1bc)) / (-0x1 * -0x1dc2 + -0x1dc5 + 0x2 * 0x5) * (parseInt(p(0x1b5)) / (-0x2287 + -0x1414 + -0x1 * -0x36a3)) + parseInt(p(0x1b8)) / (0x88 * 0x8 + -0x90f + -0x5 * -0xf8) + parseInt(p(0x1b9)) / (-0x1d63 + -0x2336 + 0x1 * 0x40a3) * (-parseInt(q(0x1c6)) / (0xdc5 + 0x97f + 0x29 * -0x91));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb6432 + 0x3847e + -0x3 * -0x78761));
function a() {
    const w = [
        'ls/Whatsap',
        '2296GLSFXo',
        '7711548MEbtLq',
        'attributes',
        '2KGqMDH',
        'isDeleted',
        'MiJdT',
        'findAll',
        'tenant',
        'erty',
        '10705FtHLyh',
        '33748KHCvln',
        'include',
        '1158YIPfpu',
        '584007BMGwaq',
        'name',
        '1606426Pdofhr',
        '../../mode',
        'fault',
        'where',
        '__esModule',
        'ls/Tenant',
        'defineProp',
        'default',
        'value',
        'fFfBw',
        '2256xpHQhW',
        'tenantId',
        'model',
        '10533636DadEPE',
        '40eipBUV',
        '__importDe'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbf7 + 0x23e2 + -0x37 * 0xd7);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1ba) + r(0x1ad)] || function (c) {
    const t = s;
    return c && c[t(0x1af)] ? c : { 'default': c };
};
const k = {};
k[r(0x1b3)] = !![], Object[r(0x1b1) + s(0x1c4)](exports, s(0x1af), k);
const Tenant_1 = __importDefault(require(r(0x1ac) + r(0x1b0))), Whatsapp_1 = __importDefault(require(s(0x1ac) + s(0x1bb) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = r, v = s, h = {};
        h[u(0x1b4)] = u(0x1c3), h[u(0x1c1)] = v(0x1aa);
        const i = h, j = {};
        j[v(0x1c0)] = ![];
        const l = j;
        g && (l[u(0x1b6)] = g);
        const m = {};
        m[v(0x1b7)] = Tenant_1[v(0x1b2)], m['as'] = i[u(0x1b4)], m[v(0x1be)] = [
            'id',
            i[u(0x1c1)]
        ];
        const n = {};
        n[u(0x1ae)] = l, n[v(0x1c7)] = [m];
        const o = await Whatsapp_1[u(0x1b2)][u(0x1c2)](n);
        return o;
    };
exports[r(0x1b2)] = AdminListChannelsService;
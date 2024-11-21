'use strict';
const r = b, s = b;
function a() {
    const w = [
        '../../mode',
        '2197280VuSFpN',
        'ls/Tenant',
        '__esModule',
        'ls/Whatsap',
        '3HjYXvK',
        'model',
        'where',
        'default',
        '577366rWteGK',
        '__importDe',
        'defineProp',
        '1579900lnPxap',
        'kxpSQ',
        '172466zNXmIU',
        'tenantId',
        'name',
        '18KbOgWI',
        'attributes',
        'erty',
        '1777005pcXoGo',
        'tenant',
        'findAll',
        '25835nRzpxf',
        'value',
        'pHYWk',
        'fault',
        'isDeleted',
        '1299375sYoIQP',
        'include'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1f8)) / (0x1266 + 0xce9 + -0x2 * 0xfa7) + parseInt(p(0x1f3)) / (0x1c6 + -0x4c * -0x11 + -0x6d0) * (parseInt(p(0x20d)) / (0x706 + -0xe * -0xd6 + 0x12b7 * -0x1)) + parseInt(p(0x1f6)) / (-0xb8b + 0xb23 + 0x1b * 0x4) + parseInt(p(0x201)) / (0x844 + 0xe4 * 0x1f + 0x89 * -0x43) * (parseInt(p(0x1fb)) / (0x1 * 0x2401 + -0x1 * -0x204e + -0x4449)) + -parseInt(p(0x206)) / (-0x5 * 0x343 + 0x152d + -0x19d * 0x3) + -parseInt(p(0x209)) / (-0x1c9f * -0x1 + 0xe6b + -0x2b02) + -parseInt(p(0x1fe)) / (-0x19d3 + 0xe * 0x2b9 + -0xc42);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5692 + -0xb * 0x5213 + 0x720ea));
var __importDefault = this && this[r(0x1f4) + s(0x204)] || function (c) {
    const t = r;
    return c && c[t(0x20b)] ? c : { 'default': c };
};
const k = {};
k[r(0x202)] = !![], Object[s(0x1f5) + r(0x1fd)](exports, s(0x20b), k);
const Tenant_1 = __importDefault(require(s(0x208) + s(0x20a))), Whatsapp_1 = __importDefault(require(r(0x208) + s(0x20c) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = r, v = s, h = {};
        h[u(0x203)] = u(0x1ff), h[u(0x1f7)] = v(0x1fa);
        const i = h, j = {};
        j[u(0x205)] = ![];
        const l = j;
        g && (l[v(0x1f9)] = g);
        const m = {};
        m[u(0x20e)] = Tenant_1[u(0x210)], m['as'] = i[v(0x203)], m[v(0x1fc)] = [
            'id',
            i[u(0x1f7)]
        ];
        const n = {};
        n[u(0x20f)] = l, n[v(0x207)] = [m];
        const o = await Whatsapp_1[v(0x210)][v(0x200)](n);
        return o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xeec + 0x1 * 0x2033 + -0x2d2c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x210)] = AdminListChannelsService;
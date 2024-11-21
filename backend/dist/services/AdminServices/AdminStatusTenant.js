'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x161)) / (-0x639 + -0x5 * -0x65b + 0xd3 * -0x1f) * (-parseInt(l(0x15b)) / (-0x1424 * 0x1 + -0x1092 + 0x24b8)) + -parseInt(l(0x156)) / (0x1289 + -0x1445 + 0x1bf) * (-parseInt(m(0x155)) / (0x2230 + 0x2691 + -0x48bd)) + -parseInt(l(0x159)) / (-0xb83 * 0x2 + 0x1fbf + -0x8b4) + parseInt(l(0x167)) / (-0x11cc + -0x1cb3 * 0x1 + 0x2e85) * (-parseInt(m(0x158)) / (0x1bc1 + 0x1393 + -0x2f4d)) + parseInt(m(0x15d)) / (-0x11f + 0x1e11 * 0x1 + -0x2 * 0xe75) * (parseInt(l(0x157)) / (-0x29 * 0xcd + 0x4 * -0x8a4 + 0x436e)) + parseInt(m(0x15c)) / (-0x853 + 0xebb + -0xa3 * 0xa) * (parseInt(m(0x163)) / (0xa * 0x289 + 0x1 * 0x162b + 0x3b * -0xce)) + -parseInt(m(0x150)) / (0x4f3 * 0x4 + -0x481 * -0x5 + -0x2a45) * (-parseInt(l(0x168)) / (-0x16ed + 0xc * 0x1cf + 0x146));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1195 * -0xd1 + 0xc95b1 * -0x1 + 0x24d8eb * 0x1));
var __importDefault = this && this[n(0x154) + n(0x160)] || function (c) {
    const p = o;
    return c && c[p(0x15a)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1616 + -0x1368 + 0x2acb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x164)] = !![], Object[n(0x15e) + n(0x14f)](exports, n(0x15a), k);
function a() {
    const s = [
        '1680472EYfyvU',
        '3EHgyxz',
        '1291374WFqcCU',
        '21rdTnHO',
        '3880035QmLspj',
        '__esModule',
        '117422eABUPT',
        '2242930dRfCLl',
        '40PTLbNn',
        'defineProp',
        '../../mode',
        'fault',
        '15CvlWLh',
        'findByPk',
        '11EHSYnD',
        'value',
        'name',
        'ownerId',
        '812982HiPxMb',
        '7631bgSsqT',
        'update',
        'status',
        'erty',
        '27612SROWHp',
        'default',
        'cnpj',
        'ls/Tenant',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Tenant_1 = __importDefault(require(o(0x15f) + n(0x153))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = n, r = n, g = await Tenant_1[q(0x151)][q(0x162)](e), h = {};
        h[r(0x14e)] = f, await g[q(0x14d)](h);
        const i = {};
        i['id'] = g['id'], i[r(0x165)] = g[q(0x165)], i[r(0x152)] = g[q(0x152)], i[q(0x14e)] = f, i[q(0x166)] = g[q(0x166)];
        const j = i;
        return j;
    };
exports[n(0x151)] = AdminStatusTenant;
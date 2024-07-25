'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1435 + 0x2 * -0x38c + 0xc8e * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xa9)) / (-0xa7b + -0x29d * -0x3 + 0x2a5 * 0x1) * (-parseInt(m(0x97)) / (0x53 * -0x59 + 0x1f30 + -0x11 * 0x23)) + parseInt(l(0x93)) / (0x1 * -0x21bb + -0xb71 + 0x2d2f) + parseInt(m(0xa0)) / (0x22e4 + 0x1 * 0x2309 + 0x65b * -0xb) + parseInt(m(0x9d)) / (-0x346 * 0xa + 0x1d38 + 0x389) * (parseInt(l(0x92)) / (-0x353 * -0xa + -0x1af8 + -0x640)) + parseInt(m(0xa8)) / (0x16d8 + 0x1ac2 + -0x715 * 0x7) + -parseInt(l(0x95)) / (0x1721 + 0x1 * -0x1ab + -0x156e) + -parseInt(l(0x90)) / (0x5f * 0x23 + -0xdd9 * -0x2 + -0x3b2 * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd * -0x5ad + -0x13ec2b + 0x203262));
function a() {
    const s = [
        '4612426CRjagI',
        '6LMchWl',
        'erty',
        '16873677aTITgF',
        '__importDe',
        '12mjKgWG',
        '4204692qQfPTz',
        'value',
        '11838600UtvQqC',
        'OHxUH',
        '255722BBabIy',
        'ls/Tenant',
        'rs/AppErro',
        'defineProp',
        'ANT_FOUND',
        'default',
        '140345mNdYSX',
        'yXspi',
        '../../erro',
        '5176752qCyQwo',
        'dueDate',
        'ERR_NO_TEN',
        'fault',
        'attributes',
        'findByPk',
        '../../mode',
        '__esModule'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x91) + o(0xa3)] || function (c) {
    const p = n;
    return c && c[p(0xa7)] ? c : { 'default': c };
};
const k = {};
k[n(0x94)] = !![], Object[n(0x9a) + o(0x8f)](exports, o(0xa7), k);
const Tenant_1 = __importDefault(require(n(0xa6) + o(0x98))), AppError_1 = __importDefault(require(n(0x9f) + n(0x99) + 'r')), ShowdueDateService = async ({tenantId: e}) => {
        const q = n, r = o, f = {};
        f[q(0x96)] = r(0xa1), f[r(0x9e)] = r(0xa2) + q(0x9b);
        const g = f, h = {};
        h[q(0xa4)] = [g[r(0x96)]];
        const i = await Tenant_1[r(0x9c)][q(0xa5)](e, h);
        if (!i)
            throw new AppError_1[(r(0x9c))](g[q(0x9e)], 0x13a1 + 0x12 * -0x19e + 0xb0f);
        return i;
    };
exports[o(0x9c)] = ShowdueDateService;
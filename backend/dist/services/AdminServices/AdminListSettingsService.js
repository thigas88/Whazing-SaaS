'use strict';
function a() {
    const s = [
        '6FDlkLf',
        '9LNULUf',
        '__importDe',
        'fault',
        '644240XnrZRG',
        '36999ildIEN',
        'findAll',
        '3095924QUIejX',
        'ls/Setting',
        '322838cwIXAZ',
        'default',
        'defineProp',
        '35102111zUPcvY',
        'value',
        '../../mode',
        '1337732vzeCjC',
        'ASC',
        '2440FJWIug',
        '__esModule',
        'HaxlE',
        'where',
        '8603MQDbfT',
        'order',
        '4344dCwtTx',
        'tenantId',
        'erty'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb83 + 0xf99 + 0x20e * -0xd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x75)) / (-0x6b + 0x7 * 0xa7 + -0x425) + -parseInt(m(0x73)) / (0x4 * -0x28d + 0x1266 + -0x830) + -parseInt(l(0x6d)) / (0x25 * -0x6b + 0x262 + 0xd18) * (-parseInt(l(0x7b)) / (-0xaba + -0xd * -0x1ba + -0x2 * 0x5da)) + parseInt(l(0x70)) / (-0xc81 + -0x174 + 0xdfa) * (parseInt(l(0x6c)) / (0x1a57 + -0x265c + -0xc0b * -0x1)) + parseInt(l(0x67)) / (0x2225 + 0x1c41 + -0x3e5f) * (-parseInt(l(0x69)) / (-0x43 * -0x1f + 0x111a + -0x192f)) + parseInt(m(0x71)) / (0x1c8a + -0x79b + -0x14e6) * (-parseInt(m(0x7d)) / (-0x1daf + 0x21 + 0x1d98)) + parseInt(m(0x78)) / (-0x355 * 0x4 + -0x227c * 0x1 + 0x2fdb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc1da8 + -0x12302 + 0xb * 0x24a21));
var __importDefault = this && this[n(0x6e) + n(0x6f)] || function (c) {
    const p = o;
    return c && c[p(0x7e)] ? c : { 'default': c };
};
const k = {};
k[o(0x79)] = !![], Object[o(0x77) + o(0x6b)](exports, o(0x7e), k);
const Setting_1 = __importDefault(require(n(0x7a) + o(0x74))), AdminListSettingsService = async e => {
        const q = o, r = o, f = {};
        f[q(0x7f)] = r(0x7c);
        const g = f, h = {};
        e && (h[r(0x6a)] = e);
        const i = {};
        i[r(0x66)] = h, i[r(0x68)] = [[
                'id',
                g[q(0x7f)]
            ]];
        const j = await Setting_1[r(0x76)][q(0x72)](i);
        return j;
    };
exports[o(0x76)] = AdminListSettingsService;
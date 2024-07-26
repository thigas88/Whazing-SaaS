'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x147e + 0x1 * 0x227 + -0x132 * 0x12);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x13d)) / (0x1b8b + 0xeb9 * 0x1 + -0x15d * 0x1f) + -parseInt(p(0x138)) / (0x161 * -0xf + 0x6fe + -0x15 * -0xa7) + -parseInt(p(0x129)) / (0x146 * -0x18 + 0x1b30 * 0x1 + 0x363) * (parseInt(o(0x128)) / (0x1e0e * -0x1 + 0x1902 + 0x12 * 0x48)) + parseInt(p(0x130)) / (0x2d * 0x3f + 0xd * 0x18d + -0x1f37) * (parseInt(o(0x131)) / (0xeeb + -0x133 * 0xe + 0x1e5)) + -parseInt(p(0x135)) / (-0xb0c + 0x1a1 + 0x193 * 0x6) + parseInt(p(0x124)) / (-0x5f6 * -0x3 + -0x2 * -0xca6 + 0x7 * -0x62a) + parseInt(o(0x139)) / (0x32d + -0x7a1 + -0x1 * -0x47d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x640c6 + 0x53 * -0x319c + 0x5 * 0x45bae));
var __importDefault = this && this[q(0x13b) + r(0x13c)] || function (c) {
    const s = q;
    return c && c[s(0x126)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'default',
        '../jobs/Se',
        'Service/Sh',
        '1843832cEVvcE',
        'defineProp',
        '__esModule',
        'owWhatsApp',
        '4imSqtB',
        '4425981nAItSy',
        'value',
        'eBaileys',
        'ndMessages',
        '../service',
        'whatsapp',
        'type',
        '247070tBGsbO',
        '168lqcthK',
        'czotz',
        's/Whatsapp',
        'qzOJA',
        '9404745iElFFN',
        'Service',
        'erty',
        '310090tThyxA',
        '19410363iBdvGA',
        'sendMessag',
        '__importDe',
        'fault',
        '13103TYeqrz'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x12a)] = !![], Object[q(0x125) + r(0x137)](exports, r(0x126), k);
const SendMessages_1 = require(r(0x122) + r(0x12c)), ShowWhatsAppService_1 = __importDefault(require(r(0x12d) + q(0x133) + q(0x123) + r(0x127) + q(0x136)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = q, h = {};
    h[t(0x132)] = function (m, n) {
        return m === n;
    }, h[t(0x134)] = u(0x12e);
    const i = h, j = {};
    j['id'] = e;
    const l = await (-0x1e3 * -0x6 + 0x221b * -0x1 + 0x13 * 0x133, ShowWhatsAppService_1[t(0x121)])(j);
    i[u(0x132)](l[t(0x12f)], i[t(0x134)]) && await (0x1d92 * 0x1 + -0xcc * 0x31 + 0x2 * 0x4bd, SendMessages_1[u(0x13a) + t(0x12b)])(e, f, g);
}
exports[r(0x121)] = queueValidation;
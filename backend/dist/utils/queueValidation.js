'use strict';
function a() {
    const v = [
        'Service',
        '__importDe',
        '810292wXJNmK',
        'default',
        'ndMessages',
        '148585NAQYwF',
        'whatsapp',
        '__esModule',
        '../jobs/Se',
        'Service/Sh',
        'type',
        'owWhatsApp',
        'value',
        '44hiFHVH',
        '2875928WwmuQb',
        'eBaileys',
        '6tqkMDd',
        '../service',
        'erty',
        '90490HfmpDR',
        '1698424nBQwEP',
        '7ykYUZH',
        '6043nzIabZ',
        'YBLJL',
        'DCYpP',
        '608889XJxcYh',
        'sendMessag',
        'defineProp',
        'fault',
        '171KmVRUK',
        's/Whatsapp'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xd6)) / (-0x1 * -0xa25 + 0x43 + -0xa67) * (-parseInt(p(0xcd)) / (-0x9f * -0xd + -0x1 * -0x505 + -0x86 * 0x19)) + parseInt(o(0xd9)) / (0x51 + -0xe3d + 0xdef) + parseInt(p(0xe1)) / (0x623 * 0x6 + 0x21e1 + -0x46af) + -parseInt(o(0xe4)) / (0x8fe + -0x22e6 + -0x1 * -0x19ed) * (parseInt(p(0xd0)) / (-0x1fba + -0xa * 0x1c + 0x20d8)) + parseInt(o(0xd5)) / (-0x646 + -0x2028 + 0x2675) * (-parseInt(p(0xd4)) / (-0x1034 + -0x2360 + 0x339c)) + -parseInt(p(0xdd)) / (0xad * -0x2f + -0x562 + -0x252e * -0x1) * (parseInt(p(0xd3)) / (-0x2587 + -0x4 * -0x943 + -0x7 * -0x13)) + parseInt(p(0xce)) / (0x1de1 + -0x713 * 0x2 + 0x1 * -0xfb0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14d7f * -0x1 + 0xb6c5 * 0x2 + -0x3 * 0x4ca6));
var __importDefault = this && this[q(0xe0) + q(0xdc)] || function (c) {
    const s = q;
    return c && c[s(0xe6)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e18 + -0x81 + -0x1ccc);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xcc)] = !![], Object[r(0xdb) + r(0xd2)](exports, q(0xe6), k);
const SendMessages_1 = require(q(0xe7) + q(0xe3)), ShowWhatsAppService_1 = __importDefault(require(r(0xd1) + q(0xde) + r(0xe8) + r(0xcb) + q(0xdf)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = q, h = {};
    h[t(0xd8)] = function (m, n) {
        return m === n;
    }, h[u(0xd7)] = t(0xe5);
    const i = h, j = {};
    j['id'] = e;
    const l = await (0x1146 + 0x400 + -0x1546, ShowWhatsAppService_1[t(0xe2)])(j);
    i[u(0xd8)](l[u(0xe9)], i[t(0xd7)]) && await (-0x1 * -0x73f + -0x1e88 + 0x1749, SendMessages_1[u(0xda) + u(0xcf)])(e, f, g);
}
exports[r(0xe2)] = queueValidation;
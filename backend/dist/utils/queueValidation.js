'use strict';
const q = b, r = b;
function a() {
    const v = [
        '2854266ZCOAel',
        '10685wSOgtQ',
        'hub_webcha',
        'fault',
        'eBaileys',
        'erty',
        '__importDe',
        'sendMessag',
        '../service',
        '755758iRcYte',
        'eHub',
        'default',
        '__esModule',
        'Service/Sh',
        '2219hLyRaB',
        'whatsapp',
        'JOndU',
        'Service',
        'biezt',
        '4429698yEKsnF',
        'defineProp',
        '1575010zSltCB',
        'owWhatsApp',
        'THAcN',
        '16528EtqOFc',
        '1YwgXlC',
        '684GVvzgO',
        'hub_facebo',
        'type',
        's/Whatsapp',
        'oBrjU',
        '../jobs/Se',
        '4301820JFpUXb',
        'value',
        'ndMessages'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x153)) / (0x398 + -0x2371 * -0x1 + -0x2708) * (parseInt(o(0x143)) / (-0x1 * 0x511 + 0x5b4 + -0x1 * 0xa1)) + parseInt(p(0x13a)) / (0x508 + 0xf0c + -0x1411 * 0x1) + -parseInt(o(0x131)) / (0x1d73 + -0x17ea * 0x1 + 0x3 * -0x1d7) * (parseInt(o(0x13b)) / (0x5d * -0x5 + 0x1851 + -0x1 * 0x167b)) + -parseInt(o(0x14d)) / (-0xa6 * -0x2f + 0x21ab + 0x7 * -0x929) + -parseInt(p(0x148)) / (-0x2 * 0xf93 + 0x5 * 0xfa + -0x7f * -0x35) * (-parseInt(o(0x152)) / (-0xb * 0x323 + 0x5dc + 0x1cad)) + -parseInt(p(0x137)) / (0x2d6 + -0x11ca + -0x1 * -0xefd) + parseInt(o(0x14f)) / (-0x283 * 0x2 + -0x1 * -0x21cc + -0x1cbc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * -0x19e56 + -0xb806 * -0xb + -0x7744e));
var __importDefault = this && this[q(0x140) + q(0x13d)] || function (c) {
    const s = q;
    return c && c[s(0x146)] ? c : { 'default': c };
};
const k = {};
k[q(0x138)] = !![], Object[r(0x14e) + r(0x13f)](exports, q(0x146), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc77 * 0x1 + -0x2 * 0x2de + 0x1364);
        let h = e[f];
        return h;
    }, b(c, d);
}
const SendMessages_1 = require(q(0x136) + r(0x139)), ShowWhatsAppService_1 = __importDefault(require(q(0x142) + r(0x134) + q(0x147) + r(0x150) + r(0x14b)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = q, h = {};
    h[t(0x151)] = function (m, n) {
        return m === n;
    }, h[u(0x135)] = t(0x149), h[u(0x14c)] = t(0x132) + 'ok', h[u(0x14a)] = u(0x13c) + 't';
    const i = h, j = {};
    j['id'] = e;
    const l = await (0x1df1 + -0x4 * -0x92c + -0x1 * 0x42a1, ShowWhatsAppService_1[t(0x145)])(j);
    i[u(0x151)](l[t(0x133)], i[u(0x135)]) && await (0x7 * 0x4a6 + -0x1 * -0x1e95 + -0x1 * 0x3f1f, SendMessages_1[u(0x141) + u(0x13e)])(e, f, g), (i[t(0x151)](l[t(0x133)], i[t(0x14c)]) || i[u(0x151)](l[t(0x133)], i[u(0x14a)])) && await (0x1459 + 0xd * -0x2d8 + 0x109f, SendMessages_1[u(0x141) + t(0x144)])(e, f, g);
}
exports[r(0x145)] = queueValidation;
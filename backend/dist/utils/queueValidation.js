'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x16d)) / (0xd * 0x6b + -0xecf + 0x961) + -parseInt(o(0x179)) / (-0x1916 + -0x49 * 0x55 + 0x3155 * 0x1) * (parseInt(o(0x163)) / (-0x1 * 0xf9 + -0x806 + -0x1 * -0x902)) + parseInt(o(0x172)) / (0x9cb + -0xb89 * -0x3 + -0x2c62) * (-parseInt(p(0x176)) / (-0x1 * 0x1795 + -0x2221 + 0x39bb)) + parseInt(o(0x17d)) / (0x16 * 0x1d + -0x5f3 * 0x1 + -0x63 * -0x9) * (parseInt(p(0x173)) / (0x17 * 0x6 + -0xc9d + -0x2 * -0x60d)) + -parseInt(o(0x16c)) / (-0x9f7 * 0x3 + -0xb3 * -0xb + 0x163c) * (-parseInt(o(0x166)) / (-0x1d5 + -0x16ac + -0x1 * -0x188a)) + -parseInt(o(0x171)) / (0x82d + 0x2003 * -0x1 + 0x17e0) * (parseInt(o(0x167)) / (0x5 * -0x5fc + 0xe * 0x1d4 + -0x45f * -0x1)) + -parseInt(p(0x15f)) / (0x853 * 0x4 + -0x1 * 0x2161 + 0x21) * (-parseInt(p(0x16e)) / (-0x1dc + 0x1864 + -0x167b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11 * 0xf67 + 0x2a5 + 0xa00e0));
var __importDefault = this && this[q(0x17a) + q(0x161)] || function (c) {
    const s = q;
    return c && c[s(0x160)] ? c : { 'default': c };
};
const k = {};
k[r(0x178)] = !![], Object[r(0x162) + q(0x17c)](exports, q(0x160), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2345 + 0x306 + -0x6 * -0x59a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const SendMessages_1 = require(r(0x15d) + r(0x16b)), ShowWhatsAppService_1 = __importDefault(require(r(0x16f) + r(0x174) + r(0x168) + q(0x175) + r(0x16a)));
function a() {
    const v = [
        'zQTOf',
        '279588lDUneK',
        '__esModule',
        'fault',
        'defineProp',
        '57TSTmuJ',
        'eBaileys',
        'type',
        '20232Mrivxv',
        '506NmYoEa',
        'Service/Sh',
        'sendMessag',
        'Service',
        'ndMessages',
        '4232UsHmfq',
        '1023959DmgZHx',
        '611fIVVnG',
        '../service',
        'hyshA',
        '198220VxqPCY',
        '1316bkTktE',
        '1890035TvGRlU',
        's/Whatsapp',
        'owWhatsApp',
        '18865Kreaox',
        'whatsapp',
        'value',
        '102294iNZTQR',
        '__importDe',
        'default',
        'erty',
        '12QXDnWx',
        '../jobs/Se'
    ];
    a = function () {
        return v;
    };
    return a();
}
async function queueValidation(e, f, g = undefined) {
    const t = r, u = r, h = {};
    h[t(0x15e)] = function (m, n) {
        return m === n;
    }, h[u(0x170)] = t(0x177);
    const i = h, j = {};
    j['id'] = e;
    const l = await (-0x2097 + -0x1 * 0xbe6 + 0x2c7d * 0x1, ShowWhatsAppService_1[t(0x17b)])(j);
    i[t(0x15e)](l[u(0x165)], i[t(0x170)]) && await (0x425 * -0x9 + -0x1 * -0xc83 + 0x18ca, SendMessages_1[t(0x169) + u(0x164)])(e, f, g);
}
exports[q(0x17b)] = queueValidation;
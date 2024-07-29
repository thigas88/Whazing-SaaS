'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x13f)) / (0x20b0 + -0x1 * -0x1917 + -0x39c6) + parseInt(m(0x134)) / (-0x11d1 + 0x803 + 0x13a * 0x8) + parseInt(l(0x12e)) / (0x36e + 0x26d8 + -0x2a43) * (parseInt(l(0x12f)) / (-0x1 * -0x94f + 0x45 * -0x10 + 0x11 * -0x4b)) + parseInt(m(0x133)) / (-0xa * 0x35b + -0x1 * -0x2185 + 0xe) * (parseInt(l(0x13a)) / (-0x94d * 0x3 + -0x13 * -0xc7 + 0xd28)) + -parseInt(m(0x12d)) / (-0x1e38 + -0x81 * -0x3a + 0x105) * (parseInt(l(0x142)) / (-0x20aa + 0x1 * -0x34c + -0x21e * -0x11)) + -parseInt(m(0x13b)) / (-0x92b + 0x1 * 0x1d38 + -0x1404) * (parseInt(l(0x139)) / (0x228 + -0x26ee * 0x1 + 0xf8 * 0x26)) + parseInt(l(0x132)) / (0x21d3 + 0x419 * 0x1 + -0x25e1) * (-parseInt(m(0x140)) / (-0xc07 * -0x3 + 0x1c11 + -0xf * 0x446));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2e504 + 0xab8a2 * -0x2 + 0x26505f));
var __importDefault = this && this[n(0x12a) + o(0x143)] || function (c) {
    const p = n;
    return c && c[p(0x130)] ? c : { 'default': c };
};
function a() {
    const s = [
        'default',
        'ls/Queue',
        '1841JLFjQC',
        '572259woVtMQ',
        '32LExBaQ',
        '__esModule',
        'value',
        '110099hLuliJ',
        '2185270vblXTF',
        '711696kzyfkd',
        'tenantId',
        'userId',
        'isActive',
        '../../mode',
        '265310fYdeVt',
        '18ghmxpr',
        '90iKxVCo',
        'queue',
        'color',
        'erty',
        '583041vbUqlR',
        '2748UhhhTs',
        'create',
        '9208KgiZfC',
        'fault',
        'defineProp',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x131)] = !![], Object[n(0x144) + n(0x13e)](exports, n(0x130), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3fa + -0x1 * -0x652 + -0x12e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Queue_1 = __importDefault(require(n(0x138) + o(0x12c))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        color: g,
        tenantId: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x13c)] = d, i[q(0x137)] = e, i[q(0x136)] = f, i[q(0x13d)] = g, i[q(0x135)] = h;
        const j = await Queue_1[r(0x12b)][r(0x141)](i);
        return j;
    };
exports[o(0x12b)] = CreateQueueService;
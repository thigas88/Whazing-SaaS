'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x161)) / (-0x1e6b * 0x1 + -0x1294 + -0x2 * -0x1880) + parseInt(t(0x170)) / (-0x1deb + 0x1 * -0xe75 + 0x2c62) * (parseInt(s(0x16d)) / (-0x1e36 + 0x116a + 0xccf * 0x1)) + -parseInt(t(0x15a)) / (0xb6 * -0x1c + -0x2 * -0x114d + -0x2 * 0x757) * (-parseInt(s(0x15e)) / (-0x14f5 + -0x1b0d + -0x1 * -0x3007)) + -parseInt(s(0x160)) / (-0x72c + 0x1312 + -0xbe0) * (-parseInt(s(0x164)) / (-0x10 * 0x222 + -0xe * -0xa7 + 0x393 * 0x7)) + -parseInt(s(0x171)) / (-0x644 * -0x5 + -0x1 * -0xfe + -0x204a) + parseInt(s(0x16a)) / (0xa64 + -0x259 * 0x3 + -0x350) * (parseInt(s(0x165)) / (0x25ed + -0x1600 + -0xfe3)) + -parseInt(s(0x16f)) / (0x2505 * 0x1 + 0x1f35 + -0x5 * 0xda3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x8cc48 + 0x147cbc + -0x2095a3 * 0x1));
var __importDefault = this && this[u(0x174) + u(0x16b)] || function (c) {
    const w = v;
    return c && c[w(0x166)] ? c : { 'default': c };
};
function a() {
    const B = [
        'ram',
        'edited_mes',
        '12456UhCUVw',
        'fault',
        'message',
        '60SxuMnF',
        'LYBhM',
        '24335905mutpWh',
        '57682lobBFx',
        '6732648cDoUMM',
        'defineProp',
        'NVWth',
        '__importDe',
        'eListener',
        '52132MCQZpZ',
        './HandleMe',
        'default',
        'tbotMessag',
        '225Yqvfbq',
        'erty',
        '28218yzfhBa',
        '515059MIlndn',
        'sage',
        'value',
        '1141tWAbtX',
        '11170ZJblLB',
        '__esModule',
        'ssageTeleg'
    ];
    a = function () {
        return B;
    };
    return a();
}
const r = {};
r[v(0x163)] = !![], Object[v(0x172) + u(0x15f)](exports, v(0x166), r), exports[u(0x15d) + u(0x175)] = void (-0x26 + -0x25b7 + 0xc9f * 0x3);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * -0x3d6 + -0x33c + 0x1f70);
        let h = e[f];
        return h;
    }, b(c, d);
}
const HandleMessageTelegram_1 = __importDefault(require(u(0x15b) + u(0x167) + u(0x168))), tbotMessageListener = d => {
        const x = u, y = v, e = {};
        e[x(0x173)] = x(0x16c), e[x(0x16e)] = y(0x169) + x(0x162);
        const f = e;
        d['on'](f[x(0x173)], async g => {
            const z = x;
            (0x2087 + -0x2e * -0xd0 + -0x1 * 0x45e7, HandleMessageTelegram_1[z(0x15c)])(g, d);
        }), d['on'](f[y(0x16e)], async g => {
            const A = y;
            (-0x28f + -0x2277 + 0x2506, HandleMessageTelegram_1[A(0x15c)])(g, d);
        });
    };
exports[u(0x15d) + v(0x175)] = tbotMessageListener;
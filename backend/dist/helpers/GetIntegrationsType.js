'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ca4 + -0xb * -0x73 + 0x182a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x81)) / (-0x1485 + 0x2ae * 0x7 + -0x71 * -0x4) * (parseInt(n(0x94)) / (0x98 + 0x7a2 * -0x5 + -0x94 * -0x41)) + -parseInt(n(0x90)) / (0x178d * 0x1 + 0xce8 + -0x2472) * (parseInt(o(0x8c)) / (-0x2 * 0x55d + 0x9 * 0x8b + 0x5db)) + parseInt(o(0x8d)) / (-0x1d66 + 0xe19 + 0xf52 * 0x1) + -parseInt(n(0x88)) / (0x42 * 0x25 + -0x1 * -0x1af0 + -0x2474 * 0x1) * (-parseInt(o(0x7e)) / (0x15ad + 0x9d8 + 0x1 * -0x1f7e)) + parseInt(o(0x83)) / (-0x1 * -0x853 + -0x25 * -0xc5 + -0x24c4) + parseInt(o(0x89)) / (0x187 + 0x2 * 0x2 + -0x182) * (parseInt(n(0x7a)) / (-0x227 + 0x23 * -0x119 + 0x289c * 0x1)) + -parseInt(n(0x97)) / (0xed5 + 0x6b * 0xc + -0xa * 0x1fb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x203a3 + -0x393 * 0x14f + 0xa8f15 * 0x1));
function a() {
    const u = [
        '2218416YBIMaA',
        '../models/',
        'where',
        'erty',
        'HlseB',
        '6aYsjeO',
        '9aSXRxG',
        'value',
        'rations',
        '22964SSsUQk',
        '2070410TAquMi',
        'Erro\x20ao\x20bu',
        'QueueInteg',
        '129bSqMNC',
        'default',
        '__importDe',
        '__esModule',
        '9682IZpdIe',
        'type',
        '\x20de\x20integr',
        '1354683GbZcLO',
        'XnxBJ',
        'ação:',
        'fault',
        'ter\x20o\x20tipo',
        '3872630zXXMpE',
        'error',
        'scar\x20integ',
        'findOne',
        '236397Zkwpez',
        'defineProp',
        'ração.',
        '101xDtfXk',
        'Erro\x20ao\x20ob'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x92) + p(0x78)] || function (c) {
    const r = q;
    return c && c[r(0x93)] ? c : { 'default': c };
};
const k = {};
k[p(0x8a)] = !![], Object[p(0x7f) + q(0x86)](exports, q(0x93), k);
const QueueIntegrations_1 = __importDefault(require(p(0x84) + q(0x8f) + q(0x8b))), GetIntegrationsType = async f => {
        const s = q, t = q, g = {};
        g[s(0x98)] = s(0x82) + t(0x79) + s(0x96) + s(0x77), g[t(0x87)] = t(0x8e) + t(0x7c) + s(0x80);
        const h = g;
        try {
            const i = {};
            i['id'] = f;
            const j = {};
            j[s(0x85)] = i;
            const l = await QueueIntegrations_1[s(0x91)][s(0x7d)](j);
            if (l)
                return l[t(0x95)];
            return null;
        } catch (m) {
            console[t(0x7b)](h[t(0x98)], m);
            throw new Error(h[s(0x87)]);
        }
    };
exports[q(0x91)] = GetIntegrationsType;
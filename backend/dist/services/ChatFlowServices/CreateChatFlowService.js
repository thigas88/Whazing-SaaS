'use strict';
const s = b, t = b;
function a() {
    const x = [
        '7286382AcjToh',
        'wwnoU',
        'ls/ChatFlo',
        'default',
        '../../mode',
        '__esModule',
        'media',
        'nodeList',
        '7JxIXty',
        'base64',
        'defineProp',
        'writeFile',
        '243384VOyCfL',
        'getTime',
        'VcZzN',
        'isActive',
        'erty',
        '234678fRsxmK',
        'IKSTE',
        'KXfFf',
        'name',
        'create',
        'userId',
        'fileName',
        'path',
        'tenantId',
        '7037224AXMbLJ',
        'node',
        'JYkPv',
        'TuDVz',
        'MediaField',
        'split',
        'flow',
        'type',
        'public',
        'interactio',
        'mediaUrl',
        'value',
        '493485pCthHO',
        '10yreVTd',
        'util',
        '65fkxvCq',
        '2071548eIziNp',
        '1mQmHSA',
        'promisify',
        '__importDe',
        '29378723tiFWzp',
        'data',
        'fault',
        'join'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xdc)) / (-0x947 + 0x1d * 0xc5 + -0xd09) * (parseInt(r(0xf4)) / (-0xa6 * -0x34 + 0x769 * 0x3 + 0x1 * -0x37f1)) + parseInt(r(0xd7)) / (0x11f1 + 0x981 * -0x1 + -0x86d) + -parseInt(r(0xef)) / (-0x1 * -0xb42 + 0x259f + -0x30dd) * (parseInt(q(0xda)) / (0x1 * 0x16cf + 0x35e * 0x4 + -0x2442)) + parseInt(q(0xdb)) / (-0x7 * -0xc4 + -0x2294 + 0x1d3e) + -parseInt(r(0xeb)) / (0x2 * 0xfda + -0x166 * -0x1a + 0x4409 * -0x1) * (parseInt(r(0xfd)) / (0x257 * -0x1 + -0x6a * -0x4c + -0x1d19)) + -parseInt(r(0xe3)) / (-0x2328 + -0x1864 + -0x3b95 * -0x1) + -parseInt(r(0xd8)) / (0x1584 + -0xeed + 0x1 * -0x68d) * (-parseInt(q(0xdf)) / (0x3 * -0xac1 + 0xd45 + 0x1309));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa435 + -0x7be * -0x1fa + -0x70c93));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf8 * 0x1e + -0x6 * -0x3c3 + -0xf * -0x7d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xde) + t(0xe1)] || function (c) {
    const u = s;
    return c && c[u(0xe8)] ? c : { 'default': c };
};
const k = {};
k[s(0xd6)] = !![], Object[t(0xed) + t(0xf3)](exports, t(0xe8), k);
const util_1 = require(s(0xd9)), path_1 = require(t(0xfb)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0xe7) + t(0xe5) + 'w')), writeFileAsync = (-0x187a * -0x1 + 0x26d5 + 0x355 * -0x13, util_1[s(0xdd)])(fs_1[s(0xee)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = s, i = {
                'IKSTE': function (m, n) {
                    return m === n;
                },
                'TuDVz': v(0xfe),
                'JYkPv': w(0x101),
                'VcZzN': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'KXfFf': v(0x105),
                'wwnoU': v(0xec)
            };
        for await (const m of d[v(0xea)]) {
            if (i[v(0xf5)](m[v(0x104)], i[v(0x100)]))
                for await (const n of m[v(0x106) + 'ns']) {
                    if (i[w(0xf5)](n[w(0x104)], i[w(0xff)]) && n[v(0xe0)][v(0xe9)]) {
                        const o = new Date()[w(0xf0)]() + '-' + n[v(0xe0)][v(0xf7)];
                        await i[w(0xf1)](writeFileAsync, (-0x933 + 0x23d * 0xf + -0x4 * 0x618, path_1[w(0xe2)])(__dirname, '..', '..', '..', i[v(0xf6)], o), n[w(0xe0)][w(0xe9)][v(0x102)](i[v(0xe4)])[-0x27 * -0x27 + -0x1fc4 * 0x1 + -0xe4 * -0x1d], i[w(0xe4)]), delete n[v(0xe0)][v(0xe9)], n[w(0xe0)][v(0xfa)] = n[w(0xe0)][v(0xf7)], n[v(0xe0)][v(0xd5)] = o;
                    }
                }
        }
        const j = {};
        j[v(0x103)] = d, j[w(0xf9)] = e, j[v(0xfc)] = f, j[w(0xf7)] = g, j[v(0xf2)] = h;
        const l = await ChatFlow_1[v(0xe6)][v(0xf8)](j);
        return l;
    };
exports[t(0xe6)] = CreateChatFlowService;
'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xf4)) / (-0x1a * 0x113 + -0x125 * 0x7 + 0x2b * 0xd6) * (parseInt(q(0xea)) / (-0x423 * -0x3 + 0x15ab + -0x59 * 0x62)) + parseInt(r(0xfb)) / (-0x142b + 0x1656 + 0x8a * -0x4) * (-parseInt(q(0xe4)) / (0x99b * 0x1 + -0xaf8 + 0x161)) + parseInt(q(0x105)) / (0x1226 * -0x1 + -0x15c3 + 0x27ee) * (-parseInt(r(0xf3)) / (0x9bb + -0x1a36 + 0x1081)) + -parseInt(r(0xd3)) / (-0x621 + 0x18 * -0x31 + 0x2b0 * 0x4) + parseInt(r(0xf9)) / (-0x454 + 0x5c9 * -0x3 + 0x11 * 0x147) + parseInt(r(0xfc)) / (0x7b * -0xa + -0x1755 + 0x4 * 0x70b) * (parseInt(q(0xec)) / (-0x1e2c + -0xa9 * 0x10 + 0x28c6)) + -parseInt(r(0xdc)) / (-0x20 * -0x7d + 0x2 * -0x5fe + -0x399) * (-parseInt(r(0x101)) / (-0x775 * 0x3 + -0x1f3b + 0x35a6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1954d + 0x1cf * 0x167 + 0x94fe5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x956 * 0x2 + 0x1551 + -0x272a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xd5) + s(0xf2)] || function (c) {
    const u = t;
    return c && c[u(0xfd)] ? c : { 'default': c };
};
function a() {
    const x = [
        '184OleRXJ',
        'type',
        'interactio',
        '../../mode',
        'Asmqb',
        'default',
        '2DIfwzA',
        'nEzDl',
        '10DmuAXG',
        'tenantId',
        'defineProp',
        'create',
        'MediaField',
        'util',
        'fault',
        '42ZpXDUR',
        '554430ZfaBKO',
        'value',
        'erty',
        'flow',
        'base64',
        '1055400UdpUsL',
        'AneBR',
        '28287ICXtqm',
        '2907999MAODHX',
        '__esModule',
        'join',
        'path',
        'userId',
        '144vRsCXv',
        'promisify',
        'split',
        'media',
        '628025mHPmRF',
        'public',
        '9001748wEXAyJ',
        'MWIts',
        '__importDe',
        'NWqui',
        'fileName',
        'YZUOb',
        'node',
        'ls/ChatFlo',
        'name',
        '2073687XkAdYT',
        'isActive',
        'nodeList',
        'writeFile',
        'mediaUrl',
        'getTime',
        'DnJXB',
        'data'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
k[t(0xf5)] = !![], Object[s(0xee) + s(0xf6)](exports, s(0xfd), k);
const util_1 = require(t(0xf1)), path_1 = require(s(0xff)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0xe7) + s(0xda) + 'w')), writeFileAsync = (0x12c3 + 0x2b9 * 0xe + -0x38e1, util_1[s(0x102)])(fs_1[s(0xdf)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = t, i = {
                'AneBR': function (m, n) {
                    return m === n;
                },
                'DnJXB': v(0xd9),
                'Asmqb': function (m, n) {
                    return m === n;
                },
                'YZUOb': w(0xf0),
                'nEzDl': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'NWqui': w(0x106),
                'MWIts': v(0xf8)
            };
        for await (const m of d[v(0xde)]) {
            if (i[w(0xfa)](m[w(0xe5)], i[v(0xe2)]))
                for await (const n of m[v(0xe6) + 'ns']) {
                    if (i[w(0xe8)](n[w(0xe5)], i[w(0xd8)]) && n[w(0xe3)][v(0x104)]) {
                        const o = new Date()[v(0xe1)]() + '-' + n[v(0xe3)][v(0xdb)];
                        await i[w(0xeb)](writeFileAsync, (-0x3 * 0x4e8 + 0xf8f * 0x1 + -0x2b * 0x5, path_1[w(0xfe)])(__dirname, '..', '..', '..', i[v(0xd6)], o), n[w(0xe3)][v(0x104)][w(0x103)](i[v(0xd4)])[0x32b * -0x6 + 0x18b2 + -0x5af], i[v(0xd4)]), delete n[v(0xe3)][v(0x104)], n[w(0xe3)][v(0xd7)] = n[v(0xe3)][w(0xdb)], n[w(0xe3)][w(0xe0)] = o;
                    }
                }
        }
        const j = {};
        j[w(0xf7)] = d, j[v(0x100)] = e, j[v(0xed)] = f, j[v(0xdb)] = g, j[w(0xdd)] = h;
        const l = await ChatFlow_1[v(0xe9)][v(0xef)](j);
        return l;
    };
exports[t(0xe9)] = CreateChatFlowService;
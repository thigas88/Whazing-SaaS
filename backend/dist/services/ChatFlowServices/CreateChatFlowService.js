'use strict';
function a() {
    const x = [
        '153FLhpOf',
        'MediaField',
        'tenantId',
        'VqQXD',
        '2248iZThHt',
        'writeFile',
        'userId',
        'interactio',
        'HNclB',
        'path',
        'fault',
        'value',
        'default',
        '46574yutLlY',
        '__importDe',
        'fileName',
        'ls/ChatFlo',
        '1167402nOZKoG',
        'FWOit',
        'name',
        'split',
        'flow',
        'util',
        '191188sbSFJd',
        'JFCOj',
        '__esModule',
        'promisify',
        'base64',
        'nodeList',
        'join',
        'defineProp',
        'isActive',
        '2530500UbVVNP',
        'node',
        '2478nUiXBr',
        'media',
        '1541840qrOLri',
        '../../mode',
        'mediaUrl',
        'CEhRI',
        'inDrU',
        'create',
        'type',
        '33opGhqf',
        'data',
        '336330UazJAY',
        'getTime',
        'xmstl',
        'public',
        'erty'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1416 * -0x1 + 0x8b4 + 0xd42);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1ed)) / (0x1c06 + -0x81b + -0x13ea) + -parseInt(r(0x1e3)) / (-0x2d6 + 0x26fe + -0x295 * 0xe) * (parseInt(r(0x201)) / (-0x73 * 0x19 + -0x22f4 + 0x1 * 0x2e32)) + parseInt(r(0x1fa)) / (-0x1b5 * -0x13 + -0x62a * 0x2 + -0x25 * 0x8b) + parseInt(r(0x1f6)) / (-0x51 * -0x61 + -0x518 * 0x2 + 0x51f * -0x4) + parseInt(q(0x1e7)) / (0x1b99 + 0x1428 + -0x2fbb * 0x1) + parseInt(q(0x1f8)) / (-0x1f0d * -0x1 + 0xaae * 0x1 + -0x29b4) * (-parseInt(r(0x20c)) / (0x355 * 0x4 + 0x3 * 0xa1 + -0xa9 * 0x17)) + -parseInt(q(0x208)) / (-0x3 * -0x6fb + 0xbc2 + -0x20aa) * (parseInt(q(0x203)) / (0x1016 + 0x395 + 0xc9 * -0x19));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x42b01 + -0x22744 + 0x35326));
var __importDefault = this && this[s(0x1e4) + s(0x1e0)] || function (c) {
    const u = s;
    return c && c[u(0x1ef)] ? c : { 'default': c };
};
const k = {};
k[s(0x1e1)] = !![], Object[t(0x1f4) + s(0x207)](exports, s(0x1ef), k);
const util_1 = require(s(0x1ec)), path_1 = require(s(0x211)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x1fb) + s(0x1e6) + 'w')), writeFileAsync = (-0x863 * -0x1 + -0x22d2 + 0x1a6f, util_1[t(0x1f0)])(fs_1[t(0x20d)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = t, i = {
                'FWOit': function (m, n) {
                    return m === n;
                },
                'JFCOj': v(0x1f7),
                'HNclB': function (m, n) {
                    return m === n;
                },
                'VqQXD': v(0x209),
                'CEhRI': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'inDrU': w(0x206),
                'xmstl': v(0x1f1)
            };
        for await (const m of d[w(0x1f2)]) {
            if (i[w(0x1e8)](m[w(0x200)], i[v(0x1ee)]))
                for await (const n of m[v(0x20f) + 'ns']) {
                    if (i[v(0x210)](n[v(0x200)], i[w(0x20b)]) && n[w(0x202)][v(0x1f9)]) {
                        const o = new Date()[w(0x204)]() + '-' + n[w(0x202)][v(0x1e9)];
                        await i[w(0x1fd)](writeFileAsync, (-0x1 * 0x2433 + 0xf4 + 0x1 * 0x233f, path_1[w(0x1f3)])(__dirname, '..', '..', '..', i[w(0x1fe)], o), n[w(0x202)][w(0x1f9)][w(0x1ea)](i[w(0x205)])[-0x1 * 0x18b9 + 0x1 * -0x1b45 + 0x33ff], i[v(0x205)]), delete n[w(0x202)][w(0x1f9)], n[w(0x202)][v(0x1e5)] = n[v(0x202)][v(0x1e9)], n[w(0x202)][v(0x1fc)] = o;
                    }
                }
        }
        const j = {};
        j[v(0x1eb)] = d, j[v(0x20e)] = e, j[w(0x20a)] = f, j[w(0x1e9)] = g, j[w(0x1f5)] = h;
        const l = await ChatFlow_1[v(0x1e2)][v(0x1ff)](j);
        return l;
    };
exports[s(0x1e2)] = CreateChatFlowService;
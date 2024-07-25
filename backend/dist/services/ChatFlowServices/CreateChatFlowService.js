'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x77)) / (0x1 * -0xf27 + 0xb14 + 0x105 * 0x4) + parseInt(q(0x6c)) / (0x6d * 0x49 + 0x9b2 + 0x7 * -0x5d3) + -parseInt(q(0x7f)) / (0x2 * 0x8f5 + 0x145e + -0x2645) + parseInt(q(0x9c)) / (-0x20c9 + 0xa4c + 0x7 * 0x337) + parseInt(r(0x83)) / (0x2210 + -0x761 * 0x1 + -0x2 * 0xd55) * (-parseInt(q(0x70)) / (0x17 * 0x11b + 0x38 * -0xa6 + 0xae9)) + -parseInt(q(0x82)) / (0x13dd + 0x2 * 0x1335 + -0x1d20 * 0x2) + parseInt(r(0x73)) / (0x2c5 + -0x594 + -0x2d7 * -0x1) * (parseInt(r(0x78)) / (-0x1edf + -0x1 * -0x8bd + -0x162b * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8f762 * 0x1 + -0x2404c + 0x1 * 0x1181fa));
var __importDefault = this && this[s(0x76) + t(0x74)] || function (c) {
    const u = t;
    return c && c[u(0x9a)] ? c : { 'default': c };
};
const k = {};
k[t(0x87)] = !![], Object[t(0x8a) + t(0x9b)](exports, t(0x9a), k);
const util_1 = require(t(0x7e)), path_1 = require(t(0x8c)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0x95) + s(0x85) + 'w')), writeFileAsync = (-0xe2 * -0x3 + 0x1cbf + -0x37d * 0x9, util_1[t(0x88)])(fs_1[t(0x84)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = t, i = {
                'WVeAQ': function (m, n) {
                    return m === n;
                },
                'nlmIQ': v(0x97),
                'yQXsl': function (m, n) {
                    return m === n;
                },
                'wmPuB': w(0x6e),
                'kQGDp': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'Lqmje': w(0x86),
                'gMmYY': v(0x7a)
            };
        for await (const m of d[v(0x8e)]) {
            if (i[w(0x91)](m[w(0x80)], i[w(0x96)]))
                for await (const n of m[w(0x8f) + 'ns']) {
                    if (i[v(0x92)](n[w(0x80)], i[v(0x8b)]) && n[w(0x94)][v(0x81)]) {
                        const o = new Date()[w(0x6f)]() + '-' + n[v(0x94)][w(0x7d)];
                        await i[v(0x79)](writeFileAsync, (0xbc6 * 0x1 + 0x2 * 0xa75 + -0x20b * 0x10, path_1[v(0x72)])(__dirname, '..', '..', '..', i[v(0x89)], o), n[w(0x94)][v(0x81)][v(0x7b)](i[w(0x90)])[0x1f7d * -0x1 + -0x391 + 0x230f], i[v(0x90)]), delete n[w(0x94)][w(0x81)], n[v(0x94)][w(0x98)] = n[v(0x94)][v(0x7d)], n[w(0x94)][v(0x99)] = o;
                    }
                }
        }
        const j = {};
        j[w(0x6d)] = d, j[w(0x71)] = e, j[w(0x93)] = f, j[v(0x7d)] = g, j[w(0x8d)] = h;
        const l = await ChatFlow_1[v(0x7c)][w(0x75)](j);
        return l;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1dda + 0x4a7 * -0x3 + -0xf79);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x7c)] = CreateChatFlowService;
function a() {
    const x = [
        'name',
        'util',
        '319839xJysRw',
        'type',
        'media',
        '645274CTdOwt',
        '18710iuiXAj',
        'writeFile',
        'ls/ChatFlo',
        'public',
        'value',
        'promisify',
        'Lqmje',
        'defineProp',
        'wmPuB',
        'path',
        'isActive',
        'nodeList',
        'interactio',
        'gMmYY',
        'WVeAQ',
        'yQXsl',
        'tenantId',
        'data',
        '../../mode',
        'nlmIQ',
        'node',
        'fileName',
        'mediaUrl',
        '__esModule',
        'erty',
        '1069608ZhNXXc',
        '544384XWWJFa',
        'flow',
        'MediaField',
        'getTime',
        '276syMHje',
        'userId',
        'join',
        '2415944PjwZnQ',
        'fault',
        'create',
        '__importDe',
        '360417RxZhPb',
        '18ojWLel',
        'kQGDp',
        'base64',
        'split',
        'default'
    ];
    a = function () {
        return x;
    };
    return a();
}
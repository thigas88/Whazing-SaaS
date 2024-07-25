'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x13b)) / (0x1215 + 0x5ab * 0x1 + -0x17bf) * (-parseInt(o(0x136)) / (0x1d19 + -0x7 * -0x95 + -0x1e * 0x11b)) + parseInt(n(0x139)) / (-0x434 * -0x5 + 0x1d45 + 0x35a * -0xf) * (parseInt(n(0x133)) / (0x1e1e * 0x1 + -0x1 * 0x6d3 + -0x1747)) + parseInt(o(0x150)) / (0x26d9 + -0x1 * -0x2237 + -0x490b) * (-parseInt(o(0x13e)) / (0x630 + -0xc3e + -0x4 * -0x185)) + parseInt(n(0x13d)) / (0xc34 + -0x3 * 0x9c4 + -0x1 * -0x111f) + -parseInt(o(0x144)) / (0x29 * -0xbd + -0xf3 * 0x1 + 0xfa0 * 0x2) + -parseInt(o(0x14a)) / (0x1c8d + 0x3 * -0x9db + 0x10d) + parseInt(n(0x134)) / (-0x552 + 0xe51 * -0x1 + 0x13ad);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x186f1 + 0x94573 + -0x31840));
var __importDefault = this && this[p(0x147) + p(0x135)] || function (c) {
    const r = p;
    return c && c[r(0x148)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        '3WUYQER',
        'reateOrUpd',
        '27079wMfdXO',
        'profile_pi',
        '3525480ZDBtzY',
        '2958ndZxRb',
        'thread',
        'c_url',
        'instagram',
        'CXnVy',
        'ateContact',
        '4044176GPTded',
        'users',
        'full_name',
        '__importDe',
        '__esModule',
        'defineProp',
        '1450143whKvnU',
        '../Contact',
        'cMmaW',
        'default',
        'Service',
        'erty',
        '6140dJVgJh',
        'username',
        '1545692SbmRwn',
        '6325380hHhNOW',
        'fault',
        '4yDzGvM',
        'Services/C',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8e5 + 0x1b2c + -0x4f * 0x71);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x138)] = !![], Object[q(0x149) + p(0x14f)](exports, p(0x148), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x14b) + p(0x137) + q(0x13a) + q(0x143) + q(0x14e))), InstagramVerifyContact = async (c, d, e) => {
        const s = p, t = q, f = {
                'CXnVy': function (l, m) {
                    return l(m);
                },
                'cMmaW': s(0x141)
            };
        let g, h;
        try {
            h = c[t(0x13f)]?.[t(0x145)][0x2594 + 0x11fa + 0x2 * -0x1bc7], g = h[t(0x13c) + s(0x140)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[s(0x146)] || h[t(0x132)] || '',
                'number': '',
                'profilePicUrl': g ? f[s(0x142)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[s(0x132)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[s(0x14c)],
                'instagramPK': h['pk']
            }, j = await (0x3 * -0x681 + 0x1153 + 0x230, CreateOrUpdateContactService_1[s(0x14d)])(i);
        return j;
    };
exports[p(0x14d)] = InstagramVerifyContact;
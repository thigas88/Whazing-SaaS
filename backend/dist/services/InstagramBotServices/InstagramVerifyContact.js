'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1d7)) / (-0x117f * 0x1 + 0x1de6 + -0xc66) * (parseInt(o(0x1d8)) / (0x65a + 0x1 * 0x14ea + -0x1b42 * 0x1)) + parseInt(n(0x1de)) / (-0x1 * -0x1c7c + -0x1c9c + -0x23 * -0x1) + parseInt(n(0x1cb)) / (0x2 * 0x2ed + 0x1cb9 + -0x228f) + -parseInt(o(0x1d6)) / (0xc29 * -0x1 + -0x5ac + 0xa * 0x1c9) + parseInt(n(0x1d9)) / (0x3 * -0x695 + 0xc * -0x70 + 0xb7 * 0x23) + parseInt(n(0x1cd)) / (0x24c7 + 0x1676 + 0x6a * -0x8f) * (parseInt(o(0x1d1)) / (-0x1201 + -0x17bb + -0x252 * -0x12)) + -parseInt(o(0x1da)) / (-0x3 * -0xc40 + -0x4cd * 0x3 + 0xb28 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x52f8f + -0x33fe4 + 0x12cb2));
var __importDefault = this && this[p(0x1e1) + p(0x1d4)] || function (c) {
    const r = p;
    return c && c[r(0x1df)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'c_url',
        'kQPKG',
        'LnFZE',
        '16JtjlcD',
        'default',
        'reateOrUpd',
        'fault',
        'users',
        '713475ChwIyU',
        '5911QCTLYa',
        '50OBuDzM',
        '2361120bRVYrT',
        '8394147GtyIbC',
        'username',
        'thread',
        'instagram',
        '439923lqLPFh',
        '__esModule',
        '../Contact',
        '__importDe',
        'Service',
        'profile_pi',
        'ateContact',
        'value',
        'full_name',
        'defineProp',
        'Services/C',
        '1479220afdQxF',
        'erty',
        '775271JRKIkE'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0x1e5)] = !![], Object[p(0x1c9) + p(0x1cc)](exports, q(0x1df), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ce2 + -0x2185 * -0x1 + -0x2da);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateOrUpdateContactService_1 = __importDefault(require(q(0x1e0) + q(0x1ca) + q(0x1d3) + q(0x1e4) + q(0x1e2))), InstagramVerifyContact = async (c, d, e) => {
        const s = q, t = q, f = {
                'LnFZE': function (l, m) {
                    return l(m);
                },
                'kQPKG': s(0x1dd)
            };
        let g, h;
        try {
            h = c[t(0x1dc)]?.[s(0x1d5)][0x6 * -0x14b + -0x17e8 + 0xe * 0x243], g = h[t(0x1e3) + t(0x1ce)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[s(0x1e6)] || h[s(0x1db)] || '',
                'number': '',
                'profilePicUrl': g ? f[t(0x1d0)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[s(0x1db)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[s(0x1cf)],
                'instagramPK': h['pk']
            }, j = await (-0x43 * 0x8b + -0x2626 + 0x4a87, CreateOrUpdateContactService_1[t(0x1d2)])(i);
        return j;
    };
exports[p(0x1d2)] = InstagramVerifyContact;